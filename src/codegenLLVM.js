import { buildAstFromSource } from "./astBuilder.js";

// ── module-level registries ────────────────────────────────────────────────

const stringConstants = new Map();   // raw value  → @.str.N
const structTypes     = new Map();   // name       → { fields: [{name,type,isPad,size}] }
const classTypes      = new Map();   // name       → { fields: [{name,type}], methods, operators }
const moduleConstants = new Map();   // const name → { value, type }
let stringCounter = 0;

function resetAll() {
    stringConstants.clear();
    structTypes.clear();
    classTypes.clear();
    moduleConstants.clear();
    stringCounter = 0;
}

function addStringConstant(value) {
    if (!stringConstants.has(value)) stringConstants.set(value, `@.str.${stringCounter++}`);
    return stringConstants.get(value);
}

function registerStruct(name, fields) {
    structTypes.set(name, { fields });
}

function registerClass(name, fields, methods, operators) {
    classTypes.set(name, { fields, methods, operators });
}

// ── type helpers ───────────────────────────────────────────────────────────

function llvmType(t) {
    if (t === "int")     return "i64";
    if (t === "bool")    return "i1";
    if (t === "byte")    return "i8";
    if (t === "float")   return "double";
    if (t === "String")  return "i8*";
    if (t === "address") return "i8*";
    if (structTypes.has(t)) return `%struct.${t}`;
    if (classTypes.has(t))  return `%class.${t}`;
    if (t.startsWith("address:")) return llvmType(t.substring(8)) + "*";
    throw new Error(`Unknown type: ${t}`);
}

function isFloatType(t) { return t === "float"; }
function isIntType(t)   { return t === "int" || t === "byte" || t === "bool"; }

function sizeOfType(t) {
    if (t === "int")     return 8;
    if (t === "byte")    return 1;
    if (t === "bool")    return 1;
    if (t === "float")   return 8;
    if (t === "String")  return 8;
    if (t === "address") return 8;
    if (structTypes.has(t)) {
        return structTypes.get(t).fields.reduce((s, f) =>
            s + (f.isPad ? f.size : sizeOfType(f.type)), 0);
    }
    throw new Error(`Unknown type for sizeof: ${t}`);
}

// ── field lookup (struct and class) ───────────────────────────────────────

function getTypeInfo(typeName) {
    if (structTypes.has(typeName)) return { kind: "struct", info: structTypes.get(typeName) };
    if (classTypes.has(typeName))  return { kind: "class",  info: classTypes.get(typeName) };
    return null;
}

function getFieldIndex(typeName, fieldName) {
    const ti = getTypeInfo(typeName);
    if (!ti) throw new Error(`Unknown type: ${typeName}`);
    let idx = 0;
    for (const f of ti.info.fields) {
        if (f.isPad) { idx++; continue; }
        if (f.name === fieldName) return idx;
        idx++;
    }
    throw new Error(`Unknown field '${fieldName}' in ${ti.kind} '${typeName}'`);
}

function getFieldType(typeName, fieldName) {
    const ti = getTypeInfo(typeName);
    if (!ti) throw new Error(`Unknown type: ${typeName}`);
    const f = ti.info.fields.find(f => !f.isPad && f.name === fieldName);
    if (!f) throw new Error(`Unknown field '${fieldName}' in ${ti.kind} '${typeName}'`);
    return f.type;
}

// ── IRBuilder ──────────────────────────────────────────────────────────────

class IRBuilder {
    constructor() {
        this.lines     = [];
        this.tmp       = 0;
        this.label     = 0;
        this.vars      = new Map();
        this.loopStack = [];
    }

    emit(line)              { this.lines.push(line); }
    newTmp()                { return `%t${this.tmp++}`; }
    newLabel(prefix)        { return `${prefix}${this.label++}`; }
    getVar(name) {
        if (moduleConstants.has(name)) return null; // signal: use constant
        const v = this.vars.get(name);
        if (!v) throw new Error(`Unknown variable: ${name}`);
        return v;
    }
    pushLoop(b, c)  { this.loopStack.push({ breakLabel: b, continueLabel: c }); }
    popLoop()       { this.loopStack.pop(); }
    currentLoop()   {
        if (!this.loopStack.length) throw new Error("break/continue outside loop");
        return this.loopStack[this.loopStack.length - 1];
    }
}

// ── bool coercion ──────────────────────────────────────────────────────────

function ensureBool(ir, val) {
    if (val.type === "bool") return val.value;
    const tmp = ir.newTmp();
    ir.emit(`${tmp} = icmp ne ${llvmType(val.type)} ${val.value}, 0`);
    return tmp;
}

// ── expression codegen ────────────────────────────────────────────────────

function genExpr(ir, expr) {
    switch (expr.kind) {

        case "IntLiteral":
            return { value: String(expr.value), type: "int" };

        case "HexLiteral":
            return { value: String(expr.value), type: "int" };

        case "FloatLiteral": {
            // JS drops trailing .0 from whole numbers — LLVM requires a decimal point
            const fstr = Number.isInteger(expr.value) ? `${expr.value}.0` : String(expr.value);
            return { value: fstr, type: "float" };
        }

        case "BoolLiteral":
            return { value: expr.value ? "1" : "0", type: "bool" };

        case "CharLiteral":
            return { value: String(expr.value), type: "int" };

        case "StringLiteral": {
            const strName = addStringConstant(expr.value);
            const len = expr.value.length + 1;
            const tmp = ir.newTmp();
            ir.emit(`${tmp} = getelementptr [${len} x i8], [${len} x i8]* ${strName}, i32 0, i32 0`);
            return { value: tmp, type: "String" };
        }

        case "NullLiteral":
            return { value: "null", type: "address" };

        case "Var": {
            // Check module-level constants first
            const c = moduleConstants.get(expr.name);
            if (c) return { value: String(c.value), type: c.type };

            const v = ir.vars.get(expr.name);
            if (!v) throw new Error(`Unknown variable: ${expr.name}`);
            const tmp = ir.newTmp();
            ir.emit(`${tmp} = load ${v.type}, ${v.type}* ${v.ptr}`);
            return { value: tmp, type: v.hType };
        }

        case "FieldAccess": {
            const v = ir.vars.get(expr.object);
            if (!v) throw new Error(`Unknown variable: ${expr.object}`);

            // Class field access is only allowed via self inside a class method
            if (classTypes.has(v.hType) && !v.isSelf) {
                throw new Error(
                    `Access failure: cannot access field '${expr.field}' of class '${v.hType}' directly. Use an accessor method.`
                );
            }

            const typeName    = v.hType;
            const fieldIdx    = getFieldIndex(typeName, expr.field);
            const fieldType   = getFieldType(typeName, expr.field);
            const llFieldType = llvmType(fieldType);
            const llSelfType  = llvmType(typeName);

            const fieldPtr = ir.newTmp();
            ir.emit(`${fieldPtr} = getelementptr ${llSelfType}, ${llSelfType}* ${v.ptr}, i32 0, i32 ${fieldIdx}`);
            const tmp = ir.newTmp();
            ir.emit(`${tmp} = load ${llFieldType}, ${llFieldType}* ${fieldPtr}`);
            return { value: tmp, type: fieldType };
        }

        case "AddressOf": {
            const v = ir.vars.get(expr.name);
            if (!v) throw new Error(`Unknown variable: ${expr.name}`);
            if (v.hType.startsWith("array:")) {
                const elemType = v.hType.split(":")[1];
                const elemPtr  = ir.newTmp();
                ir.emit(`${elemPtr} = getelementptr ${v.type}, ${v.type}* ${v.ptr}, i32 0, i32 0`);
                return { value: elemPtr, type: `address:${elemType}` };
            }
            return { value: v.ptr, type: `address:${v.hType}` };
        }

        case "ArrayAccess": {
            const v = ir.vars.get(expr.name);
            if (!v) throw new Error(`Unknown variable: ${expr.name}`);
            if (!v.hType.startsWith("array:"))
                throw new Error(`Cannot index non-array type: ${v.hType}`);
            const elemType    = v.hType.split(":")[1];
            const llElemType  = llvmType(elemType);
            const indexVal    = genExpr(ir, expr.index);
            const elemPtr     = ir.newTmp();
            ir.emit(`${elemPtr} = getelementptr ${v.type}, ${v.type}* ${v.ptr}, i32 0, i64 ${indexVal.value}`);
            const tmp = ir.newTmp();
            ir.emit(`${tmp} = load ${llElemType}, ${llElemType}* ${elemPtr}`);
            return { value: tmp, type: elemType };
        }

        case "ArrayElementAddress": {
            const v = ir.vars.get(expr.name);
            if (!v) throw new Error(`Unknown variable: ${expr.name}`);
            if (!v.hType.startsWith("array:"))
                throw new Error(`Cannot get element address of non-array type: ${v.hType}`);
            const elemType   = v.hType.split(":")[1];
            const indexVal   = genExpr(ir, expr.index);
            const elemPtr    = ir.newTmp();
            ir.emit(`${elemPtr} = getelementptr ${v.type}, ${v.type}* ${v.ptr}, i32 0, i64 ${indexVal.value}`);
            return { value: elemPtr, type: `address:${elemType}` };
        }

        case "Deref": {
            const v = ir.vars.get(expr.name);
            if (!v) throw new Error(`Unknown variable: ${expr.name}`);
            if (!v.hType.startsWith("address:"))
                throw new Error(`Cannot dereference non-address type: ${v.hType}`);
            const pointedTo   = v.hType.substring(8);
            const llPointedTo = llvmType(pointedTo);
            const rawAddr     = ir.newTmp();
            ir.emit(`${rawAddr} = load i8*, i8** ${v.ptr}`);
            const typedAddr   = ir.newTmp();
            ir.emit(`${typedAddr} = bitcast i8* ${rawAddr} to ${llPointedTo}*`);
            const tmp = ir.newTmp();
            ir.emit(`${tmp} = load ${llPointedTo}, ${llPointedTo}* ${typedAddr}`);
            return { value: tmp, type: pointedTo };
        }

        case "Unary": {
            const inner = genExpr(ir, expr.expr);
            const lt    = llvmType(inner.type);
            if (expr.op === "-") {
                const tmp = ir.newTmp();
                if (isFloatType(inner.type))
                    ir.emit(`${tmp} = fneg ${lt} ${inner.value}`);
                else
                    ir.emit(`${tmp} = sub ${lt} 0, ${inner.value}`);
                return { value: tmp, type: inner.type };
            }
            if (expr.op === "!") {
                const tmp = ir.newTmp();
                ir.emit(`${tmp} = xor i1 ${inner.value}, 1`);
                return { value: tmp, type: "bool" };
            }
            if (expr.op === "~") {
                const tmp = ir.newTmp();
                ir.emit(`${tmp} = xor ${lt} ${inner.value}, -1`);
                return { value: tmp, type: inner.type };
            }
            throw new Error(`Unsupported unary op: ${expr.op}`);
        }

        case "Binary": {
            const left  = genExpr(ir, expr.left);
            const right = genExpr(ir, expr.right);
            const lt    = llvmType(left.type);
            const isF   = isFloatType(left.type);

            switch (expr.op) {
                case "+": {
                    // Address arithmetic
                    if (left.type.startsWith("address:") && right.type === "int") {
                        const pointedTo = left.type.substring(8);
                        const tmp = ir.newTmp();
                        ir.emit(`${tmp} = getelementptr ${llvmType(pointedTo)}, ${llvmType(pointedTo)}* ${left.value}, i64 ${right.value}`);
                        return { value: tmp, type: left.type };
                    }
                    const tmp = ir.newTmp();
                    ir.emit(`${tmp} = ${isF ? "fadd" : "add"} ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: left.type };
                }
                case "-": {
                    if (left.type.startsWith("address:") && right.type === "int") {
                        const pointedTo = left.type.substring(8);
                        const neg = ir.newTmp();
                        ir.emit(`${neg} = sub i64 0, ${right.value}`);
                        const tmp = ir.newTmp();
                        ir.emit(`${tmp} = getelementptr ${llvmType(pointedTo)}, ${llvmType(pointedTo)}* ${left.value}, i64 ${neg}`);
                        return { value: tmp, type: left.type };
                    }
                    const tmp = ir.newTmp();
                    ir.emit(`${tmp} = ${isF ? "fsub" : "sub"} ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: left.type };
                }
                case "*": {
                    const tmp = ir.newTmp();
                    ir.emit(`${tmp} = ${isF ? "fmul" : "mul"} ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: left.type };
                }
                case "/": {
                    const tmp = ir.newTmp();
                    ir.emit(`${tmp} = ${isF ? "fdiv" : "sdiv"} ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: left.type };
                }
                case "%": {
                    const tmp = ir.newTmp();
                    ir.emit(`${tmp} = ${isF ? "frem" : "srem"} ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: left.type };
                }
                case "<": case "<=": case ">": case ">=": {
                    const tmp  = ir.newTmp();
                    const pred = isF
                        ? { "<": "olt", "<=": "ole", ">": "ogt", ">=": "oge" }[expr.op]
                        : { "<": "slt", "<=": "sle", ">": "sgt", ">=": "sge" }[expr.op];
                    ir.emit(`${tmp} = ${isF ? "fcmp" : "icmp"} ${pred} ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: "bool" };
                }
                case "==": case "!=": {
                    const tmp  = ir.newTmp();
                    const pred = isF
                        ? (expr.op === "==" ? "oeq" : "one")
                        : (expr.op === "==" ? "eq"  : "ne");
                    ir.emit(`${tmp} = ${isF ? "fcmp" : "icmp"} ${pred} ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: "bool" };
                }
                case "&&": {
                    const l   = ensureBool(ir, left);
                    const r   = ensureBool(ir, right);
                    const tmp = ir.newTmp();
                    ir.emit(`${tmp} = and i1 ${l}, ${r}`);
                    return { value: tmp, type: "bool" };
                }
                case "||": {
                    const l   = ensureBool(ir, left);
                    const r   = ensureBool(ir, right);
                    const tmp = ir.newTmp();
                    ir.emit(`${tmp} = or i1 ${l}, ${r}`);
                    return { value: tmp, type: "bool" };
                }
                // Bitwise
                case "&": { const tmp = ir.newTmp(); ir.emit(`${tmp} = and ${lt} ${left.value}, ${right.value}`); return { value: tmp, type: left.type }; }
                case "|": { const tmp = ir.newTmp(); ir.emit(`${tmp} = or  ${lt} ${left.value}, ${right.value}`); return { value: tmp, type: left.type }; }
                case "^": { const tmp = ir.newTmp(); ir.emit(`${tmp} = xor ${lt} ${left.value}, ${right.value}`); return { value: tmp, type: left.type }; }
                case "<<":{ const tmp = ir.newTmp(); ir.emit(`${tmp} = shl ${lt} ${left.value}, ${right.value}`); return { value: tmp, type: left.type }; }
                case ">>":{ const tmp = ir.newTmp(); ir.emit(`${tmp} = lshr ${lt} ${left.value}, ${right.value}`); return { value: tmp, type: left.type }; }

                default:
                    throw new Error(`Unsupported binary op: ${expr.op}`);
            }
        }

        case "Call": {
            const args    = (expr.args || []).map(a => genExpr(ir, a));
            const argStr  = args.map(v => `${llvmType(v.type)} ${v.value}`).join(", ");
            const retType = "int"; // TODO: look up actual return type from function table
            const tmp     = ir.newTmp();
            ir.emit(`${tmp} = call ${llvmType(retType)} @${expr.callee}(${argStr})`);
            return { value: tmp, type: retType };
        }

        case "MethodCall": {
            const v = ir.vars.get(expr.object);
            if (!v) throw new Error(`Unknown variable: ${expr.object}`);
            const typeName   = v.hType;
            const isClass    = classTypes.has(typeName);
            const llTypeName = isClass ? `%class.${typeName}` : `%struct.${typeName}`;
            const mangled    = `${typeName}_${expr.method}`;
            const args       = (expr.args || []).map(a => genExpr(ir, a));
            const selfArg    = `${llTypeName}* ${v.ptr}`;
            const otherArgs  = args.map(a => `${llvmType(a.type)} ${a.value}`).join(", ");
            const argStr     = otherArgs ? `${selfArg}, ${otherArgs}` : selfArg;
            const retType    = "int"; // TODO: look up actual return type
            const tmp        = ir.newTmp();
            ir.emit(`${tmp} = call ${llvmType(retType)} @${mangled}(${argStr})`);
            return { value: tmp, type: retType };
        }

        default:
            throw new Error(`Unsupported expr kind: ${expr.kind}`);
    }
}

// ── statement codegen ─────────────────────────────────────────────────────

function genStmt(ir, stmt, retType) {
    switch (stmt.kind) {

        case "VarDecl": {
            let hType = stmt.type;
            let init  = null;

            if (stmt.init) {
                init = genExpr(ir, stmt.init);
                if (stmt.type === "address" && init.type.startsWith("address:"))
                    hType = init.type;
            }

            const isAddress = stmt.type === "address" || stmt.type.startsWith("address:");
            const llType    = isAddress ? "i8*" : llvmType(hType);
            const ptr       = ir.newTmp();
            ir.emit(`${ptr} = alloca ${llType}`);

            if (init) {
                if (isAddress && init.type.startsWith("address:")) {
                    const castPtr = ir.newTmp();
                    ir.emit(`${castPtr} = bitcast ${llvmType(init.type)} ${init.value} to i8*`);
                    ir.emit(`store i8* ${castPtr}, i8** ${ptr}`);
                } else {
                    ir.emit(`store ${llType} ${init.value}, ${llType}* ${ptr}`);
                }
            }

            ir.vars.set(stmt.name, { ptr, type: llType, hType });
            break;
        }

        case "Assign": {
            const v   = ir.vars.get(stmt.name);
            if (!v) throw new Error(`Unknown variable: ${stmt.name}`);
            const val = genExpr(ir, stmt.expr);
            if (v.hType === "address" && val.type.startsWith("address:")) v.hType = val.type;
            if (v.type === "i8*" && val.type.startsWith("address:")) {
                const castPtr = ir.newTmp();
                ir.emit(`${castPtr} = bitcast ${llvmType(val.type)} ${val.value} to i8*`);
                ir.emit(`store i8* ${castPtr}, i8** ${v.ptr}`);
            } else {
                ir.emit(`store ${v.type} ${val.value}, ${v.type}* ${v.ptr}`);
            }
            break;
        }

        case "FieldAssign": {
            const v = ir.vars.get(stmt.object);
            if (!v) throw new Error(`Unknown variable: ${stmt.object}`);

            // Class field assignment is only allowed via self inside a class method
            if (classTypes.has(v.hType) && !v.isSelf) {
                throw new Error(
                    `Access failure: cannot assign field '${stmt.field}' of class '${v.hType}' directly. Use a mutator method.`
                );
            }

            const typeName    = v.hType;
            const fieldIdx    = getFieldIndex(typeName, stmt.field);
            const fieldType   = getFieldType(typeName, stmt.field);
            const llFieldType = llvmType(fieldType);
            const llSelfType  = llvmType(typeName);

            const fieldPtr = ir.newTmp();
            ir.emit(`${fieldPtr} = getelementptr ${llSelfType}, ${llSelfType}* ${v.ptr}, i32 0, i32 ${fieldIdx}`);
            const val = genExpr(ir, stmt.expr);
            ir.emit(`store ${llFieldType} ${val.value}, ${llFieldType}* ${fieldPtr}`);
            break;
        }

        case "DerefAssign": {
            const v = ir.vars.get(stmt.name);
            if (!v) throw new Error(`Unknown variable: ${stmt.name}`);
            if (!v.hType.startsWith("address:"))
                throw new Error(`Cannot dereference non-address type: ${v.hType}`);
            const pointedTo   = v.hType.substring(8);
            const llPointedTo = llvmType(pointedTo);
            const rawAddr     = ir.newTmp();
            ir.emit(`${rawAddr} = load i8*, i8** ${v.ptr}`);
            const typedAddr   = ir.newTmp();
            ir.emit(`${typedAddr} = bitcast i8* ${rawAddr} to ${llPointedTo}*`);
            const val = genExpr(ir, stmt.expr);
            ir.emit(`store ${llPointedTo} ${val.value}, ${llPointedTo}* ${typedAddr}`);
            break;
        }

        case "ArrayDecl": {
            const llElemType = llvmType(stmt.type);
            const arrayType  = `[${stmt.size} x ${llElemType}]`;
            const ptr        = ir.newTmp();
            ir.emit(`${ptr} = alloca ${arrayType}`);
            ir.vars.set(stmt.name, { ptr, type: arrayType, hType: `array:${stmt.type}:${stmt.size}` });
            break;
        }

        case "ArrayAssign": {
            const v = ir.vars.get(stmt.name);
            if (!v) throw new Error(`Unknown variable: ${stmt.name}`);
            if (!v.hType.startsWith("array:"))
                throw new Error(`Cannot index non-array type: ${v.hType}`);
            const elemType   = v.hType.split(":")[1];
            const llElemType = llvmType(elemType);
            const indexVal   = genExpr(ir, stmt.index);
            const elemPtr    = ir.newTmp();
            ir.emit(`${elemPtr} = getelementptr ${v.type}, ${v.type}* ${v.ptr}, i32 0, i64 ${indexVal.value}`);
            const val = genExpr(ir, stmt.expr);
            ir.emit(`store ${llElemType} ${val.value}, ${llElemType}* ${elemPtr}`);
            break;
        }

        case "IfStmt": {
            const condVal  = genExpr(ir, stmt.cond);
            const condI1   = ensureBool(ir, condVal);
            const thenLbl  = ir.newLabel("if.then.");
            const elseLbl  = stmt.elseBlock ? ir.newLabel("if.else.") : null;
            const endLbl   = ir.newLabel("if.end.");

            ir.emit(`br i1 ${condI1}, label %${thenLbl}, label %${elseLbl ?? endLbl}`);
            ir.emit(`${thenLbl}:`);
            genBlock(ir, stmt.thenBlock, retType);
            ir.emit(`br label %${endLbl}`);

            if (elseLbl) {
                ir.emit(`${elseLbl}:`);
                genBlock(ir, stmt.elseBlock, retType);
                ir.emit(`br label %${endLbl}`);
            }
            ir.emit(`${endLbl}:`);
            break;
        }

        case "WhileStmt": {
            const condLbl = ir.newLabel("while.cond.");
            const bodyLbl = ir.newLabel("while.body.");
            const endLbl  = ir.newLabel("while.end.");
            ir.emit(`br label %${condLbl}`);
            ir.emit(`${condLbl}:`);
            const condI1 = ensureBool(ir, genExpr(ir, stmt.cond));
            ir.emit(`br i1 ${condI1}, label %${bodyLbl}, label %${endLbl}`);
            ir.emit(`${bodyLbl}:`);
            ir.pushLoop(endLbl, condLbl);
            genBlock(ir, stmt.body, retType);
            ir.popLoop();
            ir.emit(`br label %${condLbl}`);
            ir.emit(`${endLbl}:`);
            break;
        }

        case "ForStmt": {
            const condLbl   = ir.newLabel("for.cond.");
            const bodyLbl   = ir.newLabel("for.body.");
            const updateLbl = ir.newLabel("for.update.");
            const endLbl    = ir.newLabel("for.end.");

            if (stmt.init) genStmt(ir, stmt.init, retType);
            ir.emit(`br label %${condLbl}`);
            ir.emit(`${condLbl}:`);

            if (stmt.cond) {
                const condI1 = ensureBool(ir, genExpr(ir, stmt.cond));
                ir.emit(`br i1 ${condI1}, label %${bodyLbl}, label %${endLbl}`);
            } else {
                ir.emit(`br label %${bodyLbl}`);
            }

            ir.emit(`${bodyLbl}:`);
            ir.pushLoop(endLbl, updateLbl);
            genBlock(ir, stmt.body, retType);
            ir.popLoop();
            ir.emit(`br label %${updateLbl}`);
            ir.emit(`${updateLbl}:`);
            if (stmt.update) genStmt(ir, stmt.update, retType);
            ir.emit(`br label %${condLbl}`);
            ir.emit(`${endLbl}:`);
            break;
        }

        case "ReturnStmt": {
            const val = genExpr(ir, stmt.expr);
            ir.emit(`ret ${llvmType(retType)} ${val.value}`);
            break;
        }

        case "BreakStmt":    ir.emit(`br label %${ir.currentLoop().breakLabel}`);    break;
        case "ContinueStmt": ir.emit(`br label %${ir.currentLoop().continueLabel}`); break;
        case "ExprStmt":     genExpr(ir, stmt.expr);                                  break;

        default:
            throw new Error(`Unsupported stmt kind: ${stmt.kind}`);
    }
}

function genBlock(ir, block, retType) {
    for (const s of block.statements) genStmt(ir, s, retType);
}

// ── function / method codegen ─────────────────────────────────────────────

function genFunction(fn) {
    const ir         = new IRBuilder();
    const retLlType  = llvmType(fn.returnType);
    const paramSig   = fn.params.map((p, i) => `${llvmType(p.type)} %p${i}`).join(", ");

    ir.emit(`define ${retLlType} @${fn.name}(${paramSig}) {`);
    ir.emit("entry:");

    fn.params.forEach((p, i) => {
        const lt  = llvmType(p.type);
        const ptr = ir.newTmp();
        ir.emit(`${ptr} = alloca ${lt}`);
        ir.emit(`store ${lt} %p${i}, ${lt}* ${ptr}`);
        ir.vars.set(p.name, { ptr, type: lt, hType: p.type });
    });

    genBlock(ir, fn.body, fn.returnType);
    ir.emit(`ret ${retLlType} 0`);
    ir.emit("}");
    return ir.lines.join("\n");
}

// Generates a method for either a class or struct (both use the same pattern)
function genMethod(typeName, method, isClass = true) {
    const ir         = new IRBuilder();
    const retLlType  = llvmType(method.returnType);
    const mangled    = `${typeName}_${method.name}`;
    const llTypeName = isClass ? `%class.${typeName}` : `%struct.${typeName}`;

    const paramParts = [`${llTypeName}* %self`];
    method.params.forEach((p, i) => paramParts.push(`${llvmType(p.type)} %p${i}`));
    ir.emit(`define ${retLlType} @${mangled}(${paramParts.join(", ")}) {`);
    ir.emit("entry:");

    // self — allow field access inside this method
    ir.vars.set("self", {
        ptr:    "%self",
        type:   llTypeName,
        hType:  typeName,
        isSelf: true
    });

    method.params.forEach((p, i) => {
        const lt  = llvmType(p.type);
        const ptr = ir.newTmp();
        ir.emit(`${ptr} = alloca ${lt}`);
        ir.emit(`store ${lt} %p${i}, ${lt}* ${ptr}`);
        ir.vars.set(p.name, { ptr, type: lt, hType: p.type });
    });

    genBlock(ir, method.body, method.returnType);
    ir.emit(`ret ${retLlType} 0`);
    ir.emit("}");
    return ir.lines.join("\n");
}

// Generates an operator overload method (same as a regular method, different name mangling)
function genOperator(className, op) {
    const nameSafe = op
        .replace('+','plus').replace('-','minus').replace('*','mul')
        .replace('/','div').replace('%','mod').replace('==','eq')
        .replace('!=','ne').replace('<','lt').replace('>','gt')
        .replace('<=','le').replace('>=','ge').replace('&','band')
        .replace('|','bor').replace('^','bxor').replace('<<','shl')
        .replace('>>','shr').replace('[]','idx');

    const pseudoMethod = {
        name:       `op_${nameSafe}`,
        params:     [op.param],
        returnType: op.returnType,
        body:       op.body
    };
    return genMethod(className, pseudoMethod, true);
}

// ── LLVM string escaping ──────────────────────────────────────────────────

function escapeStringForLLVM(str) {
    let out = '';
    for (const ch of str) {
        const c = ch.charCodeAt(0);
        if      (c === 10) out += '\\0A';
        else if (c === 13) out += '\\0D';
        else if (c ===  9) out += '\\09';
        else if (c ===  0) out += '\\00';
        else if (c === 92) out += '\\5C';
        else if (c === 34) out += '\\22';
        else if (c < 32 || c > 126) out += '\\' + c.toString(16).padStart(2,'0').toUpperCase();
        else out += ch;
    }
    return out;
}

// ── module codegen ────────────────────────────────────────────────────────

function genModule(ast) {
    resetAll();

    // Populate module constants so they resolve in genExpr
    for (const c of ast.consts || []) {
        moduleConstants.set(c.name, { value: c.value, type: c.type });
    }

    // Register all struct and class types first (so llvmType resolves them)
    for (const s of ast.structs || []) registerStruct(s.name, s.fields);
    for (const c of ast.classes || []) registerClass(c.name, c.fields, c.methods, c.operators);

    let out = "; Hopper module\n\n";

    // Emit struct type definitions
    for (const s of ast.structs || []) {
        const fieldTypes = s.fields.map(f =>
            f.isPad ? `[${f.size} x i8]` : llvmType(f.type)
        ).join(", ");
        out += `%struct.${s.name} = type { ${fieldTypes} }\n`;
    }

    // Emit class type definitions (declaration order for now; reordering is a future opt)
    for (const c of ast.classes || []) {
        const fieldTypes = c.fields.map(f => llvmType(f.type)).join(", ");
        out += `%class.${c.name} = type { ${fieldTypes} }\n`;
    }

    if ((ast.structs || []).length + (ast.classes || []).length > 0) out += "\n";

    // Emit module-level constants as LLVM globals
    for (const [name, c] of moduleConstants) {
        out += `@const.${name} = private constant ${llvmType(c.type)} ${c.value}\n`;
    }
    if (moduleConstants.size > 0) out += "\n";

    // Collect all code (string constants pool after functions are generated)
    const fnCode = [];

    for (const fn of ast.functions) {
        if (fn.isExtern) {
            const ret    = llvmType(fn.returnType);
            const params = fn.params.map(p => llvmType(p.type)).join(", ");
            fnCode.push(`declare ${ret} @${fn.name}(${params})\n`);
        } else {
            fnCode.push(genFunction(fn) + "\n\n");
        }
    }

    // Class methods and operator overloads
    for (const cls of ast.classes || []) {
        for (const m of cls.methods || [])   fnCode.push(genMethod(cls.name, m, true)   + "\n\n");
        for (const op of cls.operators || []) fnCode.push(genOperator(cls.name, op)      + "\n\n");
    }

    // Emit string constants
    for (const [value, name] of stringConstants) {
        const escaped = escapeStringForLLVM(value);
        const len     = value.length + 1;
        out += `${name} = private unnamed_addr constant [${len} x i8] c"${escaped}\\00"\n`;
    }
    if (stringConstants.size > 0) out += "\n";

    out += fnCode.join("");
    return out;
}

export { genBlock, genExpr, genFunction, genModule, genStmt };
