import fs from "fs";
import { buildAstFromSource } from "./astBuilder.js";

function ensureBool(ir, val) {
    // val: { value, type }
    if (val.type === "bool") {
        // already i1 from icmp
        return val.value;
    }
    // treat non-zero int as true
    const llType = llvmType(val.type); // e.g. "i32"
    const tmp = ir.newTmp();
    ir.emit(`${tmp} = icmp ne ${llType} ${val.value}, 0`);
    return tmp; // this is i1
}

// --- simple helpers ---

// Module-level string constants
const stringConstants = new Map(); // value -> @.str.N name
let stringCounter = 0;

// Module-level struct definitions
const structTypes = new Map(); // struct name -> { fields: [{ name, type }], llvmName }

function addStringConstant(value) {
    if (stringConstants.has(value)) {
        return stringConstants.get(value);
    }
    const name = `@.str.${stringCounter++}`;
    stringConstants.set(value, name);
    return name;
}

function resetStringConstants() {
    stringConstants.clear();
    stringCounter = 0;
}

function resetStructTypes() {
    structTypes.clear();
}

function registerStruct(name, fields) {
    structTypes.set(name, {
        fields: fields,
        llvmName: `%struct.${name}`
    });
}

function getStructInfo(name) {
    return structTypes.get(name);
}

function getFieldIndex(structName, fieldName) {
    const info = structTypes.get(structName);
    if (!info) throw new Error(`Unknown struct: ${structName}`);
    const idx = info.fields.findIndex(f => f.name === fieldName);
    if (idx < 0) throw new Error(`Unknown field ${fieldName} in struct ${structName}`);
    return idx;
}

function getFieldType(structName, fieldName) {
    const info = structTypes.get(structName);
    if (!info) throw new Error(`Unknown struct: ${structName}`);
    const field = info.fields.find(f => f.name === fieldName);
    if (!field) throw new Error(`Unknown field ${fieldName} in struct ${structName}`);
    return field.type;
}

class IRBuilder {
    constructor() {
        this.lines = [];
        this.tmp = 0;
        this.label = 0;
        this.vars = new Map(); // name -> { ptr, type }
        this.loopStack = []; // stack of { breakLabel, continueLabel }
    }

    emit(line) {
        this.lines.push(line);
    }

    newTmp() {
        return `%t${this.tmp++}`;
    }

    newLabel(prefix) {
        return `${prefix}${this.label++}`;
    }

    getVar(name) {
        const v = this.vars.get(name);
        if (!v) throw new Error(`Unknown variable: ${name}`);
        return v;
    }

    pushLoop(breakLabel, continueLabel) {
        this.loopStack.push({ breakLabel, continueLabel });
    }

    popLoop() {
        this.loopStack.pop();
    }

    currentLoop() {
        if (this.loopStack.length === 0) {
            throw new Error("break/continue outside of loop");
        }
        return this.loopStack[this.loopStack.length - 1];
    }
}

// Hopper types -> LLVM types
function llvmType(t) {
    if (t === "int") return "i32";
    if (t === "bool") return "i1";
    if (t === "float") return "float";
    if (t === "void") return "void";
    if (t === "String") return "i8*";
    if (t === "address") return "i8*";  // generic pointer
    // Check if it's a struct type
    if (structTypes.has(t)) {
        return `%struct.${t}`;
    }
    // Check for address-of type (e.g., "address:int")
    if (t.startsWith("address:")) {
        const pointedTo = t.substring(8);
        return llvmType(pointedTo) + "*";
    }
    throw new Error(`Unknown type: ${t}`);
}

// Get size of a type in bytes (for allocation)
function sizeOfType(t) {
    if (t === "int") return 4;
    if (t === "bool") return 1;
    if (t === "float") return 4;
    if (t === "String") return 8;  // pointer size
    if (t === "address") return 8; // pointer size
    if (structTypes.has(t)) {
        // Sum up field sizes (simplified - doesn't account for alignment)
        const info = structTypes.get(t);
        return info.fields.reduce((sum, f) => sum + sizeOfType(f.type), 0);
    }
    throw new Error(`Unknown type for sizeof: ${t}`);
}

function genExpr(ir, expr) {
    switch (expr.kind) {
        case "IntLiteral":
            return { value: String(expr.value), type: "int" };

        case "BoolLiteral":
            return { value: expr.value ? "1" : "0", type: "bool" };

        case "CharLiteral":
            // Char is just an int
            return { value: String(expr.value), type: "int" };

        case "StringLiteral": {
            // Add string to global constants and get pointer
            const strName = addStringConstant(expr.value);
            const len = expr.value.length + 1; // +1 for null terminator
            const tmp = ir.newTmp();
            ir.emit(`${tmp} = getelementptr [${len} x i8], [${len} x i8]* ${strName}, i32 0, i32 0`);
            return { value: tmp, type: "String" };
        }

        case "Var": {
            const v = ir.getVar(expr.name);
            const tmp = ir.newTmp();
            ir.emit(`${tmp} = load ${v.type}, ${v.type}* ${v.ptr}`);
            return { value: tmp, type: v.hType }; // keep Hopper type too
        }

        case "FieldAccess": {
            // Get struct variable and access field
            const v = ir.getVar(expr.object);
            const structName = v.hType;
            const fieldIdx = getFieldIndex(structName, expr.field);
            const fieldType = getFieldType(structName, expr.field);
            const llFieldType = llvmType(fieldType);

            // GEP to get field pointer
            const fieldPtr = ir.newTmp();
            ir.emit(`${fieldPtr} = getelementptr ${v.type}, ${v.type}* ${v.ptr}, i32 0, i32 ${fieldIdx}`);

            // Load field value
            const tmp = ir.newTmp();
            ir.emit(`${tmp} = load ${llFieldType}, ${llFieldType}* ${fieldPtr}`);
            return { value: tmp, type: fieldType };
        }

        case "NullLiteral": {
            // Return null pointer - type will be determined by context
            return { value: "null", type: "address" };
        }

        case "AddressOf": {
            // x::address - get address of variable (don't load, return pointer)
            const v = ir.getVar(expr.name);
            // Return the pointer itself, with type info about what it points to
            return { value: v.ptr, type: `address:${v.hType}` };
        }

        case "Deref": {
            // p::value - read through address
            const v = ir.getVar(expr.name);
            // v.hType should be "address:X" where X is the pointed-to type
            if (!v.hType.startsWith("address:")) {
                throw new Error(`Cannot dereference non-address type: ${v.hType}`);
            }
            const pointedToType = v.hType.substring(8); // strip "address:"
            const llPointedTo = llvmType(pointedToType);

            // Load the address value (stored as i8*)
            const rawAddr = ir.newTmp();
            ir.emit(`${rawAddr} = load i8*, i8** ${v.ptr}`);

            // Bitcast from i8* to typed pointer
            const typedAddr = ir.newTmp();
            ir.emit(`${typedAddr} = bitcast i8* ${rawAddr} to ${llPointedTo}*`);

            // Load through the typed pointer
            const tmp = ir.newTmp();
            ir.emit(`${tmp} = load ${llPointedTo}, ${llPointedTo}* ${typedAddr}`);
            return { value: tmp, type: pointedToType };
        }

        case "Allocate": {
            // allocate int(10) - heap allocation
            const allocType = expr.type;
            const countVal = genExpr(ir, expr.count);
            const typeSize = sizeOfType(allocType);
            const llType = llvmType(allocType);

            // Calculate total size: count * sizeof(type)
            const sizeBytes = ir.newTmp();
            ir.emit(`${sizeBytes} = mul i32 ${countVal.value}, ${typeSize}`);

            // Extend to i64 for malloc
            const size64 = ir.newTmp();
            ir.emit(`${size64} = sext i32 ${sizeBytes} to i64`);

            // Call malloc
            const rawPtr = ir.newTmp();
            ir.emit(`${rawPtr} = call i8* @malloc(i64 ${size64})`);

            // Bitcast to proper pointer type
            const typedPtr = ir.newTmp();
            ir.emit(`${typedPtr} = bitcast i8* ${rawPtr} to ${llType}*`);

            return { value: typedPtr, type: `address:${allocType}` };
        }

        case "Unary": {
            const inner = genExpr(ir, expr.expr);
            if (expr.op === "-") {
                const tmp = ir.newTmp();
                ir.emit(`${tmp} = sub ${llvmType(inner.type)} 0, ${inner.value}`);
                return { value: tmp, type: inner.type };
            }
            if (expr.op === "!") {
                // assume bool, use xor with 1
                const tmp = ir.newTmp();
                ir.emit(`${tmp} = xor i1 ${inner.value}, 1`);
                return { value: tmp, type: "bool" };
            }
            throw new Error(`Unsupported unary op: ${expr.op}`);
        }

        case "Binary": {
            const left = genExpr(ir, expr.left);
            const right = genExpr(ir, expr.right);
            const lt = llvmType(left.type);
            switch (expr.op) {
                case "+": {
                    const tmp = ir.newTmp();
                    ir.emit(`${tmp} = add ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: left.type };
                }
                case "-": {
                    const tmp = ir.newTmp();
                    ir.emit(`${tmp} = sub ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: left.type };
                }
                case "*": {
                    const tmp = ir.newTmp();
                    ir.emit(`${tmp} = mul ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: left.type };
                }
                case "/": {
                    const tmp = ir.newTmp();
                    ir.emit(`${tmp} = sdiv ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: left.type };
                }
                case "%": {
                    const tmp = ir.newTmp();
                    ir.emit(`${tmp} = srem ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: left.type };
                }
                case "<":
                case "<=":
                case ">":
                case ">=": {
                    const tmp = ir.newTmp();
                    const pred = {
                        "<": "slt",
                        "<=": "sle",
                        ">": "sgt",
                        ">=": "sge",
                    }[expr.op];
                    ir.emit(`${tmp} = icmp ${pred} ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: "bool" };
                }
                case "==":
                case "!=": {
                    const tmp = ir.newTmp();
                    const pred = expr.op === "==" ? "eq" : "ne";
                    ir.emit(`${tmp} = icmp ${pred} ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: "bool" };
                }
                default:
                    throw new Error(`Unsupported binary op: ${expr.op}`);
            }
        }

        case "Call": {
            const callee = expr.callee;
            const args = Array.isArray(expr.args) ? expr.args : [];
            const argVals = args.map(a => genExpr(ir, a));

            // for now, assume all functions return int
            const retType = "int";
            const llRetType = llvmType(retType);

            const argStr = argVals.map(v => `${llvmType(v.type)} ${v.value}`).join(", ");

            const tmp = ir.newTmp();
            ir.emit(`${tmp} = call ${llRetType} @${callee}(${argStr})`);
            return { value: tmp, type: retType };
        }

        default:
            throw new Error(`Unsupported expr kind: ${expr.kind}`);
    }
}

// --- statements ---

function genStmt(ir, stmt, retType) {
    switch (stmt.kind) {
        case "VarDecl": {
            // Determine the actual Hopper type (may be refined by init expression)
            let hType = stmt.type;
            let init = null;

            if (stmt.init) {
                init = genExpr(ir, stmt.init);
                // If declared as generic 'address' but init has specific type, use that
                if (stmt.type === "address" && init.type.startsWith("address:")) {
                    hType = init.type;
                }
            }

            // For address types, always use i8* as storage to allow reassignment to different types
            const isAddress = stmt.type === "address" || stmt.type.startsWith("address:");
            const llType = isAddress ? "i8*" : llvmType(hType);
            const ptr = ir.newTmp();
            ir.emit(`${ptr} = alloca ${llType}`);

            // For struct types, we might not have an init value
            if (init) {
                if (isAddress && init.type.startsWith("address:")) {
                    // Bitcast typed pointer to i8* for storage
                    const typedLlType = llvmType(init.type);
                    const castPtr = ir.newTmp();
                    ir.emit(`${castPtr} = bitcast ${typedLlType} ${init.value} to i8*`);
                    ir.emit(`store i8* ${castPtr}, i8** ${ptr}`);
                } else {
                    ir.emit(`store ${llType} ${init.value}, ${llType}* ${ptr}`);
                }
            }
            // Note: struct fields are uninitialized by default (could zero-init later)

            ir.vars.set(stmt.name, { ptr, type: llType, hType: hType });
            break;
        }

        case "Assign": {
            const v = ir.getVar(stmt.name);
            const val = genExpr(ir, stmt.expr);

            // If assigning a specific address type to a generic address, refine the type
            if (v.hType === "address" && val.type.startsWith("address:")) {
                // Update variable's type info (hType only, llvm storage stays i8*)
                v.hType = val.type;
            }

            // For address variables (stored as i8*), bitcast typed pointers
            if (v.type === "i8*" && val.type.startsWith("address:")) {
                const typedLlType = llvmType(val.type);
                const castPtr = ir.newTmp();
                ir.emit(`${castPtr} = bitcast ${typedLlType} ${val.value} to i8*`);
                ir.emit(`store i8* ${castPtr}, i8** ${v.ptr}`);
            } else {
                ir.emit(`store ${v.type} ${val.value}, ${v.type}* ${v.ptr}`);
            }
            break;
        }

        case "FieldAssign": {
            // Assign to struct field: obj.field = value
            const v = ir.getVar(stmt.object);
            const structName = v.hType;
            const fieldIdx = getFieldIndex(structName, stmt.field);
            const fieldType = getFieldType(structName, stmt.field);
            const llFieldType = llvmType(fieldType);

            // GEP to get field pointer
            const fieldPtr = ir.newTmp();
            ir.emit(`${fieldPtr} = getelementptr ${v.type}, ${v.type}* ${v.ptr}, i32 0, i32 ${fieldIdx}`);

            // Store value
            const val = genExpr(ir, stmt.expr);
            ir.emit(`store ${llFieldType} ${val.value}, ${llFieldType}* ${fieldPtr}`);
            break;
        }

        case "DerefAssign": {
            // p::value = x - write through address
            const v = ir.getVar(stmt.name);
            if (!v.hType.startsWith("address:")) {
                throw new Error(`Cannot dereference non-address type: ${v.hType}`);
            }
            const pointedToType = v.hType.substring(8); // strip "address:"
            const llPointedTo = llvmType(pointedToType);

            // Load the address value (stored as i8*)
            const rawAddr = ir.newTmp();
            ir.emit(`${rawAddr} = load i8*, i8** ${v.ptr}`);

            // Bitcast from i8* to typed pointer
            const typedAddr = ir.newTmp();
            ir.emit(`${typedAddr} = bitcast i8* ${rawAddr} to ${llPointedTo}*`);

            // Evaluate the value to store
            const val = genExpr(ir, stmt.expr);

            // Store through the typed pointer
            ir.emit(`store ${llPointedTo} ${val.value}, ${llPointedTo}* ${typedAddr}`);
            break;
        }

        case "Deallocate": {
            // deallocate p - free heap memory
            const val = genExpr(ir, stmt.expr);

            // Bitcast to i8* for free
            const rawPtr = ir.newTmp();
            const valType = llvmType(val.type);
            ir.emit(`${rawPtr} = bitcast ${valType} ${val.value} to i8*`);

            // Call free
            ir.emit(`call void @free(i8* ${rawPtr})`);
            break;
        }

        case "IfStmt": {
            const condVal = genExpr(ir, stmt.cond);
            const condI1 = ensureBool(ir, condVal);

            const thenLabel = ir.newLabel("if.then.");
            const elseLabel = stmt.elseBlock ? ir.newLabel("if.else.") : null;
            const endLabel = ir.newLabel("if.end.");

            if (elseLabel) {
                ir.emit(`br i1 ${condI1}, label %${thenLabel}, label %${elseLabel}`);
            } else {
                ir.emit(`br i1 ${condI1}, label %${thenLabel}, label %${endLabel}`);
            }

            ir.emit(`${thenLabel}:`);
            genBlock(ir, stmt.thenBlock, retType);
            ir.emit(`br label %${endLabel}`);

            if (elseLabel) {
                ir.emit(`${elseLabel}:`);
                genBlock(ir, stmt.elseBlock, retType);
                ir.emit(`br label %${endLabel}`);
            }

            ir.emit(`${endLabel}:`);
            break;
        }

        case "WhileStmt": {
            const condLabel = ir.newLabel("while.cond.");
            const bodyLabel = ir.newLabel("while.body.");
            const endLabel = ir.newLabel("while.end.");

            ir.emit(`br label %${condLabel}`);
            ir.emit(`${condLabel}:`);

            const condVal = genExpr(ir, stmt.cond);
            const condI1 = ensureBool(ir, condVal);
            ir.emit(`br i1 ${condI1}, label %${bodyLabel}, label %${endLabel}`);

            ir.emit(`${bodyLabel}:`);
            ir.pushLoop(endLabel, condLabel);
            genBlock(ir, stmt.body, retType);
            ir.popLoop();
            ir.emit(`br label %${condLabel}`);

            ir.emit(`${endLabel}:`);
            break;
        }

        case "ForStmt": {
            // for (init; cond; update) body
            // Equivalent to: init; while(cond) { body; update; }
            const condLabel = ir.newLabel("for.cond.");
            const bodyLabel = ir.newLabel("for.body.");
            const updateLabel = ir.newLabel("for.update.");
            const endLabel = ir.newLabel("for.end.");

            // Execute init (if present)
            if (stmt.init) {
                genStmt(ir, stmt.init, retType);
            }

            ir.emit(`br label %${condLabel}`);
            ir.emit(`${condLabel}:`);

            // Check condition (if present, else infinite loop)
            if (stmt.cond) {
                const condVal = genExpr(ir, stmt.cond);
                const condI1 = ensureBool(ir, condVal);
                ir.emit(`br i1 ${condI1}, label %${bodyLabel}, label %${endLabel}`);
            } else {
                ir.emit(`br label %${bodyLabel}`);
            }

            ir.emit(`${bodyLabel}:`);
            // continue jumps to update (so update runs before next iteration)
            ir.pushLoop(endLabel, updateLabel);
            genBlock(ir, stmt.body, retType);
            ir.popLoop();

            ir.emit(`br label %${updateLabel}`);
            ir.emit(`${updateLabel}:`);

            // Execute update (if present)
            if (stmt.update) {
                genStmt(ir, stmt.update, retType);
            }

            ir.emit(`br label %${condLabel}`);
            ir.emit(`${endLabel}:`);
            break;
        }

        case "ReturnStmt": {
            const val = genExpr(ir, stmt.expr);
            const llType = llvmType(retType);
            ir.emit(`ret ${llType} ${val.value}`);
            break;
        }

        case "BreakStmt": {
            const loop = ir.currentLoop();
            ir.emit(`br label %${loop.breakLabel}`);
            break;
        }

        case "ContinueStmt": {
            const loop = ir.currentLoop();
            ir.emit(`br label %${loop.continueLabel}`);
            break;
        }

        case "ExprStmt": {
            genExpr(ir, stmt.expr); // just for side effects
            break;
        }

        default:
            throw new Error(`Unsupported stmt kind: ${stmt.kind}`);
    }
}

function genBlock(ir, block, retType) {
    for (const s of block.statements) {
        genStmt(ir, s, retType);
    }
}

// --- functions / module ---

function genFunction(fn) {
    const ir = new IRBuilder();
    const retLlType = llvmType(fn.returnType);

    // build the function signature: assume all params are int/bool for now
    const paramSig = fn.params.map((p, i) => `${llvmType(p.type)} %p${i}`).join(", ");

    ir.emit(`define ${retLlType} @${fn.name}(${paramSig}) {`);
    ir.emit("entry:");

    // map params into local vars: alloca + store + record in ir.vars
    fn.params.forEach((p, i) => {
        const llType = llvmType(p.type);
        const paramReg = `%p${i}`;
        const ptr = ir.newTmp();
        ir.emit(`${ptr} = alloca ${llType}`);
        ir.emit(`store ${llType} ${paramReg}, ${llType}* ${ptr}`);
        ir.vars.set(p.name, { ptr, type: llType, hType: p.type });
    });

    // body
    genBlock(ir, fn.body, fn.returnType);

    // fallback return if control hits end (crude but fine for now)
    ir.emit(`ret ${retLlType} 0`);
    ir.emit("}");

    return ir.lines.join("\n");
}
function escapeStringForLLVM(str) {
    // Escape special characters for LLVM string constant
    let result = '';
    for (const char of str) {
        const code = char.charCodeAt(0);
        if (code === 10) {
            result += '\\0A';  // newline
        } else if (code === 13) {
            result += '\\0D';  // carriage return
        } else if (code === 9) {
            result += '\\09';  // tab
        } else if (code === 0) {
            result += '\\00';  // null
        } else if (code === 92) {
            result += '\\5C';  // backslash
        } else if (code === 34) {
            result += '\\22';  // double quote
        } else if (code < 32 || code > 126) {
            result += '\\' + code.toString(16).padStart(2, '0').toUpperCase();
        } else {
            result += char;
        }
    }
    return result;
}

function genModule(ast) {
    // Reset for fresh compilation
    resetStringConstants();
    resetStructTypes();

    let out = "; Hopper module\n\n";

    // Declare malloc and free for heap allocation
    out += "; Memory allocation functions\n";
    out += "declare i8* @malloc(i64)\n";
    out += "declare void @free(i8*)\n\n";

    // First, register all struct types
    for (const struct of ast.structs || []) {
        const fields = struct.fields.map(f => ({ name: f.name, type: f.type }));
        registerStruct(struct.name, fields);
    }

    // Emit struct type definitions
    for (const struct of ast.structs || []) {
        const fieldTypes = struct.fields.map(f => llvmType(f.type)).join(", ");
        out += `%struct.${struct.name} = type { ${fieldTypes} }\n`;
    }

    if ((ast.structs || []).length > 0) {
        out += "\n";
    }

    // Generate all functions to collect string constants
    const functionCode = [];
    for (const fn of ast.functions) {
        if (fn.isExtern) {
            const ret = llvmType(fn.returnType);
            const params = fn.params.map(p => llvmType(p.type)).join(", ");
            functionCode.push(`declare ${ret} @${fn.name}(${params})\n`);
        } else {
            functionCode.push(genFunction(fn) + "\n\n");
        }
    }

    // Emit string constants
    for (const [value, name] of stringConstants) {
        const escaped = escapeStringForLLVM(value);
        const len = value.length + 1; // +1 for null terminator
        out += `${name} = private unnamed_addr constant [${len} x i8] c"${escaped}\\00"\n`;
    }

    if (stringConstants.size > 0) {
        out += "\n";
    }

    // Then add all the function code
    out += functionCode.join("");

    return out;
}

export { genBlock, genExpr, genFunction, genModule, genStmt };

// --- CLI: node src/codegenLlvm.js example.hop > out.ll ---

// if (process.argv[1] && process.argv[1].endsWith("codegenLLVM.js")) {
//     const source = fs.readFileSync(process.argv[2], "utf8");
//     const ast = buildAstFromSource(source);
//     const ir = genModule(ast);
//     console.log(ir);
// }
