import {
    classTypes, interfaceDefs, functionReturnTypes,
    releaseMode, contractsUsed, setContractsUsed,
    emitWarning,
} from "./codegenState.js";
import { HopperWarning, WarnType } from "./errors.js";
import {
    llvmType, normalizeType, llvmZeroValue, operatorNameSafe,
} from "./codegenTypes.js";
import {
    emitRequiresChecks, emitEnsuresChecks,
} from "./codegenConstraints.js";
import {
    IRBuilder, genExpr, ensureBool, emitDeferred,
} from "./codegenExpr.js";
import {
    genBlock, hoistAllocas,
} from "./codegenStmt.js";

// ── Unused variable analysis ──────────────────────────────────────────────
//
// AST-level pre-pass: collect every VarDecl/ArrayDecl in a function body,
// collect every name that appears in an expression (read) position, then
// warn for any declared name that is never read.
//
// Excluded from warnings:
//   - Function parameters (caller-provided; suppress separately if desired)
//   - Names starting with '_' (opt-out convention)

function walkForUnused(node, decls, refs) {
    if (!node) return;
    switch (node.kind) {
        // Declarations — add to decls; recurse into initialiser
        case "VarDecl":
            decls.set(node.name, node.loc ?? null);
            walkForUnused(node.init, decls, refs);
            return;
        case "ArrayDecl":
            decls.set(node.name, node.loc ?? null);
            return;
        case "ArrayDeclInit":
            decls.set(node.name, node.loc ?? null);
            for (const el of node.elements || []) walkForUnused(el, decls, refs);
            return;

        // Expression references — add name to refs
        case "Var":                 refs.add(node.name); return;
        case "AddressOf":           refs.add(node.name); return;
        case "Deref":               refs.add(node.name); return;
        case "SizeOf":              return; // compile-time type size, no runtime ref
        case "ArrayAccess":         refs.add(node.name); walkForUnused(node.index, decls, refs); return;
        case "ArrayElementAddress": refs.add(node.name); walkForUnused(node.index, decls, refs); return;

        // Object-receiver references (object is a string name, not a Var node)
        case "MethodCall":         refs.add(node.object); for (const a of node.args || []) walkForUnused(a, decls, refs); return;
        case "ChainedMethodCall":  refs.add(node.object); for (const a of node.args || []) walkForUnused(a, decls, refs); return;
        case "FieldAccess":        refs.add(node.object); return;
        case "FieldIndexAccess":   refs.add(node.object); walkForUnused(node.index, decls, refs); return;
        case "FieldAssign":        refs.add(node.object); walkForUnused(node.expr, decls, refs); return;
        case "NestedFieldAssign":  refs.add(node.object); walkForUnused(node.expr, decls, refs); return;

        // Assignments — LHS name is a write target (not a read); RHS/index are reads
        case "Assign":      walkForUnused(node.expr, decls, refs); return;
        case "DerefAssign": refs.add(node.name); walkForUnused(node.expr, decls, refs); return;
        case "ArrayAssign": refs.add(node.name); walkForUnused(node.index, decls, refs); walkForUnused(node.expr, decls, refs); return;

        // Asm — walk src expressions; suppress warnings for asm-assigned vars
        case "AsmStmt":
            for (const line of node.lines || []) {
                if (line.kind !== "AsmLineAssign") continue;
                // dest is either a register name or a local variable being written.
                // Mark it as a ref to avoid spurious unused warnings on asm output vars.
                if (typeof line.dest === "string") refs.add(line.dest);
                walkForUnused(line.src, decls, refs);
            }
            return;

        // Unary / compound expressions
        case "Binary":       walkForUnused(node.left, decls, refs); walkForUnused(node.right, decls, refs); return;
        case "Unary":        walkForUnused(node.expr, decls, refs); return;
        case "CastExpr":     walkForUnused(node.expr, decls, refs); return;
        case "AllocateExpr": walkForUnused(node.sizeExpr, decls, refs); return;

        // Statement wrappers
        case "ExprStmt":      walkForUnused(node.expr, decls, refs); return;
        case "ReturnStmt":    walkForUnused(node.expr, decls, refs); return;
        case "DeferStmt":     walkForUnused(node.expr, decls, refs); return;
        case "DeallocateStmt":walkForUnused(node.expr, decls, refs); return;

        // Calls — add callee name to refs so callback-typed locals are not
        // falsely flagged as unused when they are invoked via fn(args) syntax.
        case "Call":
            if (node.callee) refs.add(node.callee);
            for (const a of node.args || []) walkForUnused(a, decls, refs);
            return;
        case "TemplateFuncCall":
            for (const a of node.args || []) walkForUnused(a, decls, refs);
            return;

        // Control flow
        case "IfStmt":
            walkForUnused(node.cond,      decls, refs);
            walkForUnused(node.thenBlock, decls, refs);
            walkForUnused(node.elseBlock, decls, refs);
            return;
        case "WhileStmt":
            walkForUnused(node.cond, decls, refs);
            for (const inv of node.invariants || []) walkForUnused(inv, decls, refs);
            walkForUnused(node.body, decls, refs);
            return;
        case "ForStmt":
            walkForUnused(node.init,   decls, refs);
            walkForUnused(node.cond,   decls, refs);
            walkForUnused(node.update, decls, refs);
            walkForUnused(node.body,   decls, refs);
            return;

        // Block (kind may be "Block" or absent)
        default:
            if (node.statements) for (const s of node.statements) walkForUnused(s, decls, refs);
    }
}

function checkUnusedVars(body, params) {
    if (!body) return;
    const decls = new Map();
    const refs  = new Set();
    for (const p of params || []) refs.add(p.name);
    walkForUnused(body, decls, refs);
    for (const [name, loc] of decls) {
        if (name.startsWith("_")) continue;
        if (!refs.has(name)) {
            emitWarning(new HopperWarning(loc, WarnType.UnusedVariable,
                `'${name}' is declared but never used`,
                `prefix with '_' to suppress: _${name}`));
        }
    }
}

// ── interface conformance check ───────────────────────────────────────────

export function checkImplements(cls) {
    for (const ifaceName of cls.interfaces || []) {
        const iface = interfaceDefs.get(ifaceName);
        if (!iface) throw new Error(`Interface '${ifaceName}' not found (required by class '${cls.name}')`);
        for (const req of iface.methods) {
            const found = (cls.methods || []).find(m => m.name === req.name);
            if (!found) {
                throw new Error(
                    `Class '${cls.name}' does not satisfy '${ifaceName}.${req.name}' — add a '${req.name}' method`
                );
            }
            // Check parameter count matches
            const reqCount = req.params ? req.params.length : 0;
            const gotCount = found.params ? found.params.length : 0;
            if (reqCount !== gotCount) {
                throw new Error(
                    `Class '${cls.name}' method '${req.name}' has ${gotCount} parameter(s) but interface '${ifaceName}' requires ${reqCount}`
                );
            }
            // Check return type matches (both null means procedure/void)
            const reqRet = req.returnType || null;
            const gotRet = found.returnType || null;
            if (reqRet !== gotRet) {
                const reqStr = reqRet ?? "void";
                const gotStr = gotRet ?? "void";
                throw new Error(
                    `Class '${cls.name}' method '${req.name}' returns '${gotStr}' but interface '${ifaceName}' declares '${reqStr}'`
                );
            }
        }
    }
}

// ── function / method codegen ─────────────────────────────────────────────

export function genFunction(fn) {
    const ir         = new IRBuilder();
    ir.returnType    = fn.returnType;
    const isVoid     = fn.returnType === null;
    const retLlType  = isVoid ? "void" : llvmType(fn.returnType);
    const paramSig   = fn.params.map((p, i) => {
        const normT = normalizeType(p.type);
        const lt    = llvmType(normT);
        return classTypes.has(normT) ? `${lt}* %p${i}` : `${lt} %p${i}`;
    }).join(", ");

    const fnAttr = fn._inline ? " alwaysinline" : "";
    ir.emit(`define ${retLlType} @${fn._mangledName || fn.name}(${paramSig})${fnAttr} {`);
    ir.emit("entry:");

    fn.params.forEach((p, i) => {
        const normT = normalizeType(p.type);
        const lt    = llvmType(normT);
        if (classTypes.has(normT)) {
            // Class/template types: passed by reference — %p_i is already a pointer
            ir.vars.set(p.name, { ptr: `%p${i}`, type: lt, hType: normT });
        } else {
            const ptr = ir.newTmp();
            ir.emit(`${ptr} = alloca ${lt}`);
            ir.emit(`store ${lt} %p${i}, ${lt}* ${ptr}`);
            ir.vars.set(p.name, { ptr, type: lt, hType: normT });
        }
    });

    checkUnusedVars(fn.body, fn.params);

    if (!releaseMode && fn.requires && fn.requires.length > 0) {
        setContractsUsed(true);
        emitRequiresChecks(ir, fn.requires, genExpr, ensureBool);
    }
    ir.ensures = (!releaseMode && fn.ensures) ? fn.ensures : [];
    if (ir.ensures.length > 0) setContractsUsed(true);

    genBlock(ir, fn.body, fn.returnType);
    emitDeferred(ir);
    if (isVoid) {
        ir.emit(`ret void`);
    } else {
        const stmts = fn.body.statements;
        const last  = stmts[stmts.length - 1];
        if (!last || last.kind !== "ReturnStmt") {
            const hasEarlierReturn = stmts.slice(0, -1).some(s => s.kind === "ReturnStmt");
            const isInfiniteLoop   = last?.kind === "WhileStmt"
                && last.cond?.kind === "BoolLiteral" && last.cond.value === true;
            if (!hasEarlierReturn && !isInfiniteLoop) {
                emitWarning(new HopperWarning(last?.loc ?? null, WarnType.MissingReturn,
                    `'${fn.name}' may reach end of function without returning a value`,
                    `add a return statement at the end`));
            }
        }
        ir.emit(`ret ${retLlType} ${llvmZeroValue(retLlType)}`);
    }
    ir.emit("}");
    return hoistAllocas(ir.lines).join("\n");
}

export function genMethod(typeName, method, isClass = true) {
    const ir          = new IRBuilder();
    ir.returnType     = method.returnType;
    ir.currentClass   = typeName;
    const normRetType = method.returnType ? normalizeType(method.returnType) : null;
    const isVoid      = method.returnType === null;
    const retLlType   = isVoid ? "void"
        : classTypes.has(normRetType) ? `%class.${normRetType}`
        : llvmType(normRetType);
    const mangled     = `${typeName}_${method.name}`;
    const llTypeName  = isClass ? `%class.${typeName}` : `%struct.${typeName}`;

    const paramParts = [`${llTypeName}* %self`];
    method.params.forEach((p, i) => {
        const normT = normalizeType(p.type);
        if (classTypes.has(normT)) {
            paramParts.push(`%class.${normT}* %p${i}`);
        } else {
            paramParts.push(`${llvmType(normT)} %p${i}`);
        }
    });
    const methodAttr = method._inline ? " alwaysinline" : "";
    ir.emit(`define ${retLlType} @${mangled}(${paramParts.join(", ")})${methodAttr} {`);
    ir.emit("entry:");

    ir.vars.set("self", {
        ptr:    "%self",
        type:   llTypeName,
        hType:  typeName,
        isSelf: true
    });

    method.params.forEach((p, i) => {
        const normT = normalizeType(p.type);
        if (classTypes.has(normT)) {
            // Class params passed by pointer — store directly, no alloca needed
            ir.vars.set(p.name, { ptr: `%p${i}`, type: `%class.${normT}`, hType: normT });
        } else {
            const lt  = llvmType(normT);
            const ptr = ir.newTmp();
            ir.emit(`${ptr} = alloca ${lt}`);
            ir.emit(`store ${lt} %p${i}, ${lt}* ${ptr}`);
            ir.vars.set(p.name, { ptr, type: lt, hType: normT });
        }
    });

    checkUnusedVars(method.body, method.params);

    genBlock(ir, method.body, method.returnType);
    emitDeferred(ir);
    if (isVoid) {
        ir.emit(`ret void`);
    } else {
        const stmts = method.body.statements;
        const last  = stmts[stmts.length - 1];
        if (!last || last.kind !== "ReturnStmt") {
            const hasEarlierReturn = stmts.slice(0, -1).some(s => s.kind === "ReturnStmt");
            const isInfiniteLoop   = last?.kind === "WhileStmt"
                && last.cond?.kind === "BoolLiteral" && last.cond.value === true;
            if (!hasEarlierReturn && !isInfiniteLoop) {
                emitWarning(new HopperWarning(last?.loc ?? null, WarnType.MissingReturn,
                    `'${typeName}.${method.name}' may reach end of method without returning a value`,
                    `add a return statement at the end`));
            }
        }
        ir.emit(`ret ${retLlType} ${llvmZeroValue(retLlType)}`);
    }
    ir.emit("}");
    return hoistAllocas(ir.lines).join("\n");
}

export function genOperator(className, op) {
    const nameSafe = operatorNameSafe(op.op);
    const pseudoMethod = {
        name:       `op_${nameSafe}`,
        params:     op.params && op.params.length > 0 ? op.params : (op.param ? [op.param] : []),
        returnType: op.returnType,
        body:       op.body
    };
    return genMethod(className, pseudoMethod, true);
}

// ── bind directive codegen ────────────────────────────────────────────────

export function genBind(bind) {
    // Emit a function-pointer global in a named section so the linker can
    // place it at the hardware address.
    const varName = `@__bind_${bind.hardwareAddress}`;
    const section = `.hopbind.${bind.hardwareAddress}`;
    return `${varName} = global i8* bitcast (void ()* @${bind.functionName} to i8*), section "${section}", align 4`;
}

// ── entry point codegen ───────────────────────────────────────────────────

export function genEntry(entry) {
    const ir = new IRBuilder();

    if (entry.body) {
        const params = entry.params || [];
        if (params.length > 0) {
            // entry with params: entry main(int argc, string[] argv)
            // Use i32 for argc to match C ABI, i8** for string[]
            const llParams = params.map(p => {
                const t = p.type === "int" ? "i32" : llvmType(p.type);
                return `${t} %_param_${p.name}`;
            }).join(", ");
            ir.emit(`define i64 @${entry.name}(${llParams}) {`);
            ir.emit("entry:");
            // Alloca and store each param so it's addressable as a local var
            for (const p of params) {
                const llT = p.type === "int" ? "i64" : llvmType(p.type);
                const ptr = ir.newTmp();
                ir.emit(`${ptr} = alloca ${llT}`);
                if (p.type === "int") {
                    // sext i32 argc → i64
                    const ext = ir.newTmp();
                    ir.emit(`${ext} = sext i32 %_param_${p.name} to i64`);
                    ir.emit(`store i64 ${ext}, i64* ${ptr}`);
                } else {
                    ir.emit(`store ${llvmType(p.type)} %_param_${p.name}, ${llvmType(p.type)}* ${ptr}`);
                }
                ir.vars.set(p.name, { ptr, type: llT, hType: p.type });
            }
        } else {
            ir.emit(`define i64 @${entry.name}() {`);
            ir.emit("entry:");
        }
        checkUnusedVars(entry.body, entry.params || []);

        genBlock(ir, entry.body, "int");
        emitDeferred(ir);
        if (!ir.isTerminated()) ir.emit("ret i64 0");
        ir.emit("}");
        // Non-main entries: emit a @main stub so the C runtime initialises
        // normally (libc, stdio, etc.). @main calls the named entry and exits.
        if (entry.name !== "main") {
            ir.emit(`\ndefine i64 @main() {`);
            ir.emit(`entry:`);
            const r = ir.newTmp();
            ir.emit(`${r} = call i64 @${entry.name}()`);
            ir.emit(`ret i64 ${r}`);
            ir.emit(`}`);
        }
    } else if (entry.address) {
        // address form: entry main = startup::address
        // emit a thin wrapper that calls the target function
        const target = entry.address.kind === "AddressOf" ? entry.address.name : null;
        if (!target) throw new Error(`entry address must be a function reference (e.g. startup::address)`);

        const fnInfo = functionReturnTypes.get(target);
        const retType = fnInfo ? fnInfo.returnType : null;

        ir.emit(`define i64 @${entry.name}() {`);
        ir.emit("entry:");
        if (retType === null) {
            ir.emit(`call void @${target}()`);
            ir.emit("ret i64 0");
        } else if (retType === "int") {
            const tmp = ir.newTmp();
            ir.emit(`${tmp} = call i64 @${target}()`);
            ir.emit(`ret i64 ${tmp}`);
        } else {
            ir.emit(`call ${llvmType(retType)} @${target}()`);
            ir.emit("ret i64 0");
        }
        ir.emit("}");
    }

    return hoistAllocas(ir.lines).join("\n");
}

// ── class IR emitter ──────────────────────────────────────────────────────

export function emitClassIR(cls, out, fnCode) {
    const fieldTypes = cls.fields.map(f => llvmType(normalizeType(f.type))).join(", ");
    out.push(`%class.${cls.name} = type { ${fieldTypes} }\n`);

    for (const m of cls.methods || [])   fnCode.push(genMethod(cls.name, m, true)   + "\n\n");
    for (const op of cls.operators || []) fnCode.push(genOperator(cls.name, op)      + "\n\n");

    if (cls.constructor) {
        const ctorMethod = { name: "constructor", params: cls.constructor.params, returnType: null, body: cls.constructor.body };
        fnCode.push(genMethod(cls.name, ctorMethod, true) + "\n\n");
    }
    if (cls.destructor) {
        const dtorMethod = { name: "destructor", params: [], returnType: null, body: cls.destructor.body };
        fnCode.push(genMethod(cls.name, dtorMethod, true) + "\n\n");
    }
}
