import {
    classTypes, structTypes, enumTypes, mmioBindings,
    functionReturnTypes, overloadGroups, templateInstances, bitfieldTypes,
    addStringConstant, wordBits, releaseMode,
} from "./codegenState.js";
import {
    llvmType, normalizeType, isFloatType, isUnsigned,
    bitfieldLayout, bitfieldFieldInfo, bitsToLLType,
    getFieldIndex, getFieldType,
    operatorNameSafe, parseCallbackType, callbackFnTypeSig,
    overloadTypeMatch,
} from "./codegenTypes.js";
import {
    emitRequiresChecks, emitEnsuresChecks, emitInvariantChecks, emitConstrainCheck,
} from "./codegenConstraints.js";

// ── IRBuilder ──────────────────────────────────────────────────────────────

export class IRBuilder {
    constructor() {
        this.lines      = [];
        this.tmp        = 0;
        this.label      = 0;
        this.vars       = new Map();
        this.loopStack  = [];
        this.deferStack = [];
    }

    emit(line)              { this.lines.push(line); }
    isTerminated()          { const l = this.lines[this.lines.length - 1]; return l && /^\s*(ret|br)\b/.test(l); }
    newTmp()                { return `%t${this.tmp++}`; }
    newLabel(prefix)        { return `${prefix}${this.label++}`; }
    getVar(name) {
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

export function ensureBool(ir, val) {
    if (val.type === "bool") return val.value;
    const tmp = ir.newTmp();
    ir.emit(`${tmp} = icmp ne ${llvmType(val.type)} ${val.value}, 0`);
    return tmp;
}

// ── cast helper ────────────────────────────────────────────────────────────

export function emitCast(ir, srcVal, srcType, targetType) {
    if (srcType === targetType) return { value: srcVal, type: targetType };

    const tmp = ir.newTmp();
    const unsigned = isUnsigned(targetType);

    if (isFloatType(srcType) && (targetType === "int" || targetType === "unsignedint")) {
        ir.emit(`${tmp} = fptosi double ${srcVal} to i64`);
        return { value: tmp, type: targetType };
    }
    if (isFloatType(srcType) && (targetType === "byte" || targetType === "char" || targetType === "unsignedbyte")) {
        ir.emit(`${tmp} = fptosi double ${srcVal} to i8`);
        return { value: tmp, type: targetType };
    }
    if ((srcType === "int" || srcType === "unsignedint") && isFloatType(targetType)) {
        ir.emit(`${tmp} = sitofp i64 ${srcVal} to double`);
        return { value: tmp, type: targetType };
    }
    if ((srcType === "byte" || srcType === "char" || srcType === "unsignedbyte") && isFloatType(targetType)) {
        ir.emit(`${tmp} = sitofp i8 ${srcVal} to double`);
        return { value: tmp, type: targetType };
    }
    if ((srcType === "int" || srcType === "unsignedint") && (targetType === "byte" || targetType === "char" || targetType === "unsignedbyte")) {
        ir.emit(`${tmp} = trunc i64 ${srcVal} to i8`);
        return { value: tmp, type: targetType };
    }
    if ((srcType === "byte" || srcType === "char" || srcType === "unsignedbyte") && (targetType === "int" || targetType === "unsignedint")) {
        if (unsigned || isUnsigned(srcType)) {
            ir.emit(`${tmp} = zext i8 ${srcVal} to i64`);
        } else {
            ir.emit(`${tmp} = sext i8 ${srcVal} to i64`);
        }
        return { value: tmp, type: targetType };
    }
    if ((srcType === "char" && targetType === "byte") || (srcType === "byte" && targetType === "char")) {
        return { value: srcVal, type: targetType };
    }
    // string and address are both i8* in LLVM — no instruction needed
    if ((srcType === "string" && targetType === "address") ||
        (srcType === "address" && targetType === "string")) {
        return { value: srcVal, type: targetType };
    }
    // int ↔ address (inttoptr / ptrtoint) — natural in systems code
    if ((srcType === "int" || srcType === "unsignedint") && targetType === "address") {
        const wordT = wordBits === 32 ? "i32" : "i64";
        ir.emit(`${tmp} = inttoptr ${wordT} ${srcVal} to i8*`);
        return { value: tmp, type: "address" };
    }
    if (srcType === "address" && (targetType === "int" || targetType === "unsignedint")) {
        ir.emit(`${tmp} = ptrtoint i8* ${srcVal} to i64`);
        return { value: tmp, type: targetType };
    }

    if (srcType === "bool" && (targetType === "int" || targetType === "unsignedint")) {
        ir.emit(`${tmp} = zext i1 ${srcVal} to i64`);
        return { value: tmp, type: targetType };
    }
    if ((srcType === "int" || srcType === "unsignedint") && targetType === "bool") {
        ir.emit(`${tmp} = icmp ne i64 ${srcVal}, 0`);
        return { value: tmp, type: targetType };
    }

    throw new Error(`Cannot cast from '${srcType}' to '${targetType}'`);
}

// ── deferred expression emitter ────────────────────────────────────────────

export function emitDeferred(ir) {
    for (const expr of [...ir.deferStack].reverse()) {
        genExpr(ir, expr);
    }
}

// ── string helpers ────────────────────────────────────────────────────────

// Count bytes as escapeStringForLLVM emits them:
// U+0000–U+00FF → 1 raw byte; surrogate pairs → 4 UTF-8 bytes; BMP > U+00FF → 2–3 UTF-8 bytes.
export function stringByteLen(str) {
    let n = 0;
    for (let i = 0; i < str.length; i++) {
        const c = str.charCodeAt(i);
        if (c >= 0xD800 && c <= 0xDBFF) { n += 4; i++; }
        else if (c <= 0xFF)  n += 1;
        else if (c <= 0x7FF) n += 2;
        else                 n += 3;
    }
    return n;
}

export function escapeStringForLLVM(str) {
    let out = '';
    for (let i = 0; i < str.length; i++) {
        const c = str.charCodeAt(i);
        if (c >= 0xD800 && c <= 0xDBFF && i + 1 < str.length) {
            const low = str.charCodeAt(i + 1);
            const cp  = 0x10000 + ((c - 0xD800) << 10) + (low - 0xDC00);
            i++;
            for (const b of Buffer.from(String.fromCodePoint(cp), 'utf8'))
                out += '\\' + b.toString(16).padStart(2, '0').toUpperCase();
        } else if (c > 0xFF) {
            for (const b of Buffer.from(String.fromCharCode(c), 'utf8'))
                out += '\\' + b.toString(16).padStart(2, '0').toUpperCase();
        } else if (c === 10) out += '\\0A';
        else if (c === 13)   out += '\\0D';
        else if (c ===  9)   out += '\\09';
        else if (c ===  0)   out += '\\00';
        else if (c === 92)   out += '\\5C';
        else if (c === 34)   out += '\\22';
        else if (c < 32 || c > 126) out += '\\' + c.toString(16).padStart(2, '0').toUpperCase();
        else out += String.fromCharCode(c);
    }
    return out;
}

// ── compile-time type size ────────────────────────────────────────────────

export function typeSize(hType) {
    const t = normalizeType(hType);
    if (t === "int")          return 8;
    if (t === "float")        return 8;
    if (t === "bool")         return 1;
    if (t === "byte" || t === "char")         return 1;
    if (t === "address" || t.startsWith("address:")) return 8;
    if (t === "string[]")     return 8;
    if (t === "string")       return 8;
    if (t === "unsignedint")  return 8;
    if (t === "unsignedbyte") return 1;
    if (structTypes.has(t)) {
        return structTypes.get(t).fields.reduce((acc, f) =>
            acc + (f.isPad ? f.size : typeSize(f.type)), 0);
    }
    if (classTypes.has(t)) {
        return classTypes.get(t).fields.reduce((acc, f) => acc + typeSize(f.type), 0);
    }
    if (t === "String")       return 8;   // bare String fallback (pointer size)
    throw new Error(`Cannot compute ::size of unknown type: ${t}`);
}

// ── expression codegen ────────────────────────────────────────────────────

export function genExpr(ir, expr) {
    switch (expr.kind) {

        case "IntLiteral":
            return { value: String(expr.value), type: "int" };

        case "CharLiteral":
            return { value: String(expr.value), type: "int" };

        case "HexLiteral":
            return { value: String(expr.value), type: "int" };

        case "FloatLiteral": {
            const fstr = Number.isInteger(expr.value) ? `${expr.value}.0` : String(expr.value);
            return { value: fstr, type: "float" };
        }

        case "BoolLiteral":
            return { value: expr.value ? "1" : "0", type: "bool" };

        case "StringLiteral": {
            const strName = addStringConstant(expr.value);
            const len = stringByteLen(expr.value) + 1;
            const tmp = ir.newTmp();
            ir.emit(`${tmp} = getelementptr [${len} x i8], [${len} x i8]* ${strName}, i32 0, i32 0`);
            return { value: tmp, type: "string" };
        }

        case "NullLiteral":
            return { value: "null", type: "address" };

        case "SizeOf": {
            // Resolve name as a variable first, then fall back to type name
            const v = ir.vars.get(expr.name);
            const hType = v ? v.hType : expr.name;
            return { value: String(typeSize(hType)), type: "int" };
        }

        case "Var": {
            const mmio = mmioBindings.get(expr.name);
            if (mmio) {
                const ptr = ir.newTmp();
                const tmp = ir.newTmp();
                ir.emit(`${ptr} = inttoptr ${wordBits === 32 ? "i32" : "i64"} ${mmio.addr} to ${mmio.llType}*`);
                ir.emit(`${tmp} = load volatile ${mmio.llType}, ${mmio.llType}* ${ptr}`);
                return { value: tmp, type: mmio.hType };
            }

            const v = ir.vars.get(expr.name);
            if (!v) {
                // Function name used as a value (e.g. passed as callback argument)
                if (functionReturnTypes.has(expr.name)) {
                    const fnInfo  = functionReturnTypes.get(expr.name);
                    const retLl   = fnInfo.returnType ? llvmType(fnInfo.returnType) : "void";
                    const paramLls = (fnInfo.params || []).map(p => llvmType(p.type)).join(", ");
                    const fnSig   = `${retLl} (${paramLls})`;
                    const tmp     = ir.newTmp();
                    ir.emit(`${tmp} = bitcast ${fnSig}* @${expr.name} to i8*`);
                    return { value: tmp, type: "address" };
                }
                throw new Error(`Unknown variable: ${expr.name}`);
            }
            const tmp = ir.newTmp();
            ir.emit(`${tmp} = load ${v.type}, ${v.type}* ${v.ptr}`);
            return { value: tmp, type: v.hType };
        }

        case "FieldAccess": {
            // Enum access: Color.Red → int or string constant
            if (enumTypes.has(expr.object)) {
                const en = enumTypes.get(expr.object);
                if (!en.variants.has(expr.field))
                    throw new Error(`Unknown enum variant: ${expr.object}.${expr.field}`);
                const v = en.variants.get(expr.field);
                if (v.kind === "string") {
                    const strName = addStringConstant(v.value);
                    const len     = stringByteLen(v.value) + 1;
                    const tmp     = ir.newTmp();
                    ir.emit(`${tmp} = getelementptr [${len} x i8], [${len} x i8]* ${strName}, i32 0, i32 0`);
                    return { value: tmp, type: "string" };
                }
                return { value: String(v.value), type: "int" };
            }
            // Check MMIO (strict) bitfield first — uses volatile load
            const mmioFA = mmioBindings.get(expr.object);
            if (mmioFA && bitfieldTypes.has(mmioFA.hType)) {
                const bf = bitfieldTypes.get(mmioFA.hType);
                const { llType } = bitfieldLayout(bf);
                const { offset, width, fieldType } = bitfieldFieldInfo(bf, expr.field);
                const ptr = ir.newTmp();
                ir.emit(`${ptr} = inttoptr ${wordBits === 32 ? "i32" : "i64"} ${mmioFA.addr} to ${llType}*`);
                const container = ir.newTmp();
                ir.emit(`${container} = load volatile ${llType}, ${llType}* ${ptr}`);
                const shifted = ir.newTmp();
                ir.emit(`${shifted} = lshr ${llType} ${container}, ${offset}`);
                const mask = (1n << BigInt(width)) - 1n;
                const masked = ir.newTmp();
                ir.emit(`${masked} = and ${llType} ${shifted}, ${mask}`);
                const llFieldType = llvmType(fieldType);
                if (llFieldType === llType) return { value: masked, type: fieldType };
                const result = ir.newTmp();
                ir.emit(`${result} = trunc ${llType} ${masked} to ${llFieldType}`);
                return { value: result, type: fieldType };
            }

            const v = ir.vars.get(expr.object);
            if (!v) throw new Error(`Unknown variable: ${expr.object}`);

            // Bitfield read: load container integer, shift right by field offset, mask to width
            if (bitfieldTypes.has(v.hType)) {
                const bf = bitfieldTypes.get(v.hType);
                const { llType } = bitfieldLayout(bf);
                const { offset, width, fieldType } = bitfieldFieldInfo(bf, expr.field);
                const container = ir.newTmp();
                ir.emit(`${container} = load ${llType}, ${llType}* ${v.ptr}`);
                const shifted = ir.newTmp();
                ir.emit(`${shifted} = lshr ${llType} ${container}, ${offset}`);
                const mask = (1n << BigInt(width)) - 1n;
                const masked = ir.newTmp();
                ir.emit(`${masked} = and ${llType} ${shifted}, ${mask}`);
                // Truncate to the field's natural LLVM type.
                // For multi-bit "bit[N]" fields, i1 can only hold 0 or 1 so we use
                // bitsToLLType(width) (i8+) and surface the Hopper type as "byte" so
                // downstream codegen sees a consistent LLVM/Hopper type pair.
                const isWideBit  = fieldType === "bit" && width > 1;
                const llFieldType = isWideBit ? bitsToLLType(width) : llvmType(fieldType);
                const hopperType  = isWideBit ? "byte" : fieldType;
                if (llFieldType === llType) return { value: masked, type: hopperType };
                const result = ir.newTmp();
                ir.emit(`${result} = trunc ${llType} ${masked} to ${llFieldType}`);
                return { value: result, type: hopperType };
            }

            if (classTypes.has(v.hType) && !templateInstances.has(v.hType) && !v.isSelf && ir.currentClass !== v.hType) {
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
            if (!v) {
                // Function name used as address: fnName::address
                if (functionReturnTypes.has(expr.name)) {
                    const fnInfo   = functionReturnTypes.get(expr.name);
                    const retLl    = fnInfo.returnType ? llvmType(fnInfo.returnType) : "void";
                    const paramLls = (fnInfo.params || []).map(p => llvmType(p.type)).join(", ");
                    const fnSig    = `${retLl} (${paramLls})`;
                    const tmp      = ir.newTmp();
                    ir.emit(`${tmp} = bitcast ${fnSig}* @${expr.name} to i8*`);
                    return { value: tmp, type: "address" };
                }
                throw new Error(`Unknown variable: ${expr.name}`);
            }
            if (v.hType.startsWith("array:")) {
                const elemType = v.hType.split(":")[1];
                const elemPtr  = ir.newTmp();
                ir.emit(`${elemPtr} = getelementptr ${v.type}, ${v.type}* ${v.ptr}, i32 0, i32 0`);
                // Normalize to i8* — all address:T values use i8* as their LLVM representation
                const cast = ir.newTmp();
                ir.emit(`${cast} = bitcast ${llvmType(elemType)}* ${elemPtr} to i8*`);
                return { value: cast, type: `address:${elemType}` };
            }
            // Normalize to i8* — all address:T values use i8* as their LLVM representation
            const cast = ir.newTmp();
            ir.emit(`${cast} = bitcast ${llvmType(v.hType)}* ${v.ptr} to i8*`);
            return { value: cast, type: `address:${v.hType}` };
        }

        case "ArrayAccess": {
            const v = ir.vars.get(expr.name);
            if (!v) throw new Error(`Unknown variable: ${expr.name}`);

            // Dispatch to class [] operator if defined
            if (classTypes.has(v.hType)) {
                const cls = classTypes.get(v.hType);
                const idxOp = (cls.operators || []).find(o => o.op === '[]');
                if (idxOp) {
                    const indexVal = genExpr(ir, expr.index);
                    const fnName = `${v.hType}_op_idx`;
                    const selfType = `%class.${v.hType}*`;
                    const paramType = llvmType(idxOp.param.type);
                    const retType = idxOp.returnType;
                    const tmp = ir.newTmp();
                    ir.emit(`${tmp} = call ${llvmType(retType)} @${fnName}(${selfType} ${v.ptr}, ${paramType} ${indexVal.value})`);
                    return { value: tmp, type: retType };
                }
            }

            // string[] (argv) indexing — i8** pointer, each element is i8*
            if (v.hType === "string[]") {
                const base     = ir.newTmp();
                const indexVal = genExpr(ir, expr.index);
                ir.emit(`${base} = load i8**, i8*** ${v.ptr}`);
                const elemPtr  = ir.newTmp();
                ir.emit(`${elemPtr} = getelementptr i8*, i8** ${base}, i64 ${indexVal.value}`);
                const tmp = ir.newTmp();
                ir.emit(`${tmp} = load i8*, i8** ${elemPtr}`);
                return { value: tmp, type: "string" };
            }

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
            // Normalize to i8* — all address:T values use i8* as their LLVM representation
            const cast = ir.newTmp();
            ir.emit(`${cast} = bitcast ${llvmType(elemType)}* ${elemPtr} to i8*`);
            return { value: cast, type: `address:${elemType}` };
        }

        case "Deref": {
            const v = ir.vars.get(expr.name);
            if (!v) throw new Error(`Unknown variable: ${expr.name}`);
            // Plain address: infer pointedTo from the address:T tag if present, else from return type
            let pointedTo;
            if (v.hType.startsWith("address:")) {
                pointedTo = v.hType.substring(8);
            } else if (v.hType === "address" && ir.returnType) {
                pointedTo = ir.returnType;
            } else {
                throw new Error(`Cannot dereference non-address type: ${v.hType}`);
            }
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
            // Dispatch to class operator if left operand is a class with this operator defined
            if (expr.left.kind === "Var") {
                const lv = ir.vars.get(expr.left.name);
                if (lv && classTypes.has(lv.hType)) {
                    const cls = classTypes.get(lv.hType);
                    const matchingOp = (cls.operators || []).find(o => o.op === expr.op && o.param);
                    if (matchingOp) {
                        const ns = operatorNameSafe(expr.op);
                        const fnName = `${lv.hType}_op_${ns}`;
                        const selfType = `%class.${lv.hType}*`;
                        const paramNormT = normalizeType(matchingOp.param.type);
                        const retType = matchingOp.returnType;
                        const normRetT = retType ? normalizeType(retType) : null;
                        let rightArgStr;
                        if (classTypes.has(paramNormT) && expr.right.kind === "Var") {
                            const rv = ir.vars.get(expr.right.name);
                            if (rv && classTypes.has(rv.hType)) {
                                rightArgStr = `%class.${paramNormT}* ${rv.ptr}`;
                            }
                        }
                        if (!rightArgStr) {
                            const right = genExpr(ir, expr.right);
                            rightArgStr = `${llvmType(matchingOp.param.type)} ${right.value}`;
                        }
                        if (normRetT && classTypes.has(normRetT)) {
                            // Operator returns a class object by value.
                            const llRetT  = `%class.${normRetT}`;
                            const retVal  = ir.newTmp();
                            const slotPtr = ir.newTmp();
                            ir.emit(`${retVal} = call ${llRetT} @${fnName}(${selfType} ${lv.ptr}, ${rightArgStr})`);
                            ir.emit(`${slotPtr} = alloca ${llRetT}`);
                            ir.emit(`store ${llRetT} ${retVal}, ${llRetT}* ${slotPtr}`);
                            return { value: slotPtr, type: normRetT, isClassPtr: true };
                        }
                        const tmp = ir.newTmp();
                        ir.emit(`${tmp} = call ${llvmType(retType)} @${fnName}(${selfType} ${lv.ptr}, ${rightArgStr})`);
                        return { value: tmp, type: retType };
                    }
                }
            }
            const left  = genExpr(ir, expr.left);
            const right = genExpr(ir, expr.right);
            const lt    = llvmType(left.type);
            const isF   = isFloatType(left.type);

            switch (expr.op) {
                case "+": {
                    if (left.type === "address" && right.type === "int") {
                        const tmp = ir.newTmp();
                        ir.emit(`${tmp} = getelementptr i8, i8* ${left.value}, i64 ${right.value}`);
                        return { value: tmp, type: "address" };
                    }
                    if (left.type.startsWith("address:") && right.type === "int") {
                        // typed address arithmetic scales by element size (like C int* arithmetic)
                        const pointedTo = left.type.substring(8);
                        const llPtrType = `${llvmType(pointedTo)}*`;
                        const castIn = ir.newTmp();
                        ir.emit(`${castIn} = bitcast i8* ${left.value} to ${llPtrType}`);
                        const gep = ir.newTmp();
                        ir.emit(`${gep} = getelementptr ${llvmType(pointedTo)}, ${llPtrType} ${castIn}, i64 ${right.value}`);
                        const castOut = ir.newTmp();
                        ir.emit(`${castOut} = bitcast ${llPtrType} ${gep} to i8*`);
                        return { value: castOut, type: left.type };
                    }
                    const tmp = ir.newTmp();
                    ir.emit(`${tmp} = ${isF ? "fadd" : "add"} ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: left.type };
                }
                case "-": {
                    if (left.type === "address" && right.type === "int") {
                        const neg = ir.newTmp();
                        ir.emit(`${neg} = sub i64 0, ${right.value}`);
                        const tmp = ir.newTmp();
                        ir.emit(`${tmp} = getelementptr i8, i8* ${left.value}, i64 ${neg}`);
                        return { value: tmp, type: "address" };
                    }
                    if (left.type.startsWith("address:") && right.type === "int") {
                        // typed address arithmetic scales by element size (like C int* arithmetic)
                        const pointedTo = left.type.substring(8);
                        const llPtrType = `${llvmType(pointedTo)}*`;
                        const castIn = ir.newTmp();
                        ir.emit(`${castIn} = bitcast i8* ${left.value} to ${llPtrType}`);
                        const neg = ir.newTmp();
                        ir.emit(`${neg} = sub i64 0, ${right.value}`);
                        const gep = ir.newTmp();
                        ir.emit(`${gep} = getelementptr ${llvmType(pointedTo)}, ${llPtrType} ${castIn}, i64 ${neg}`);
                        const castOut = ir.newTmp();
                        ir.emit(`${castOut} = bitcast ${llPtrType} ${gep} to i8*`);
                        return { value: castOut, type: left.type };
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
                    const op = isF ? "fdiv" : (isUnsigned(left.type) ? "udiv" : "sdiv");
                    ir.emit(`${tmp} = ${op} ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: left.type };
                }
                case "%": {
                    const tmp = ir.newTmp();
                    const op = isF ? "frem" : (isUnsigned(left.type) ? "urem" : "srem");
                    ir.emit(`${tmp} = ${op} ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: left.type };
                }
                case "<": case "<=": case ">": case ">=": {
                    const tmp  = ir.newTmp();
                    const pred = isF
                        ? { "<": "olt", "<=": "ole", ">": "ogt", ">=": "oge" }[expr.op]
                        : isUnsigned(left.type)
                            ? { "<": "ult", "<=": "ule", ">": "ugt", ">=": "uge" }[expr.op]
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
            // Indirect call through a callback variable
            const cbVar = ir.vars.get(expr.callee);
            if (cbVar && cbVar.hType && cbVar.hType.startsWith("callback(")) {
                const args    = (expr.args || []).map(a => genExpr(ir, a));
                const argStr  = args.map(v => `${v.type.startsWith("address:") ? "i8*" : llvmType(v.type)} ${v.value}`).join(", ");
                const fnSig   = callbackFnTypeSig(cbVar.hType);
                const fnPtrLl = `${fnSig}*`;
                const { ret } = parseCallbackType(cbVar.hType);
                const fnRaw   = ir.newTmp();
                ir.emit(`${fnRaw} = load i8*, i8** ${cbVar.ptr}`);
                const fnTyped = ir.newTmp();
                ir.emit(`${fnTyped} = bitcast i8* ${fnRaw} to ${fnPtrLl}`);
                if (!ret || ret === "void" || ret === "null") {
                    ir.emit(`call ${fnSig} ${fnTyped}(${argStr})`);
                    return { value: "0", type: "int" };
                }
                const tmp = ir.newTmp();
                ir.emit(`${tmp} = call ${fnSig} ${fnTyped}(${argStr})`);
                return { value: tmp, type: ret };
            }

            // Overload resolution: if this name has multiple definitions, pick by arg types.
            if (overloadGroups.has(expr.callee)) {
                const preArgs = (expr.args || []).map(a => genExpr(ir, a));
                const overloads = overloadGroups.get(expr.callee);
                const best = overloads.find(ov => {
                    if (ov.params.length !== preArgs.length) return false;
                    return ov.params.every((p, i) => overloadTypeMatch(preArgs[i].type, p.type));
                });
                if (best) {
                    const fi = functionReturnTypes.get(best.mangledName);
                    const argStr = preArgs.map(v =>
                        `${v.type.startsWith("address:") ? "i8*" : llvmType(v.type)} ${v.value}`
                    ).join(", ");
                    const retType = fi ? fi.returnType : null;
                    if (retType === null) {
                        ir.emit(`call void @${best.mangledName}(${argStr})`);
                        return { value: "0", type: "int" };
                    }
                    const tmp = ir.newTmp();
                    ir.emit(`${tmp} = call ${llvmType(retType)} @${best.mangledName}(${argStr})`);
                    return { value: tmp, type: retType };
                }
            }

            // Constructor call in expression context: ClassName(args...)
            // e.g. `return Key(24, 0)` or `Key k = someFunc()` where someFunc returns Key.
            // Allocate a slot, call ClassName_constructor, return isClassPtr.
            const normCallee = normalizeType(expr.callee);
            if (classTypes.has(normCallee)) {
                const ctorName = `${normCallee}_constructor`;
                const llType   = llvmType(normCallee);
                const ptr      = ir.newTmp();
                ir.emit(`${ptr} = alloca ${llType}`);
                if (functionReturnTypes.has(ctorName)) {
                    const ctorInfo = functionReturnTypes.get(ctorName);
                    const args = (expr.args || []).map((a, i) => {
                        const paramNormT = ctorInfo.params && ctorInfo.params[i]
                            ? normalizeType(ctorInfo.params[i].type) : null;
                        if (paramNormT && classTypes.has(paramNormT) && a.kind === "Var") {
                            const argVar = ir.vars.get(a.name);
                            if (argVar) return { value: argVar.ptr, type: paramNormT, isClassPtr: true };
                        }
                        return genExpr(ir, a);
                    });
                    const selfArg   = `${llType}* ${ptr}`;
                    const otherArgs = args.map(a =>
                        a.isClassPtr ? `${llvmType(a.type)}* ${a.value}`
                                     : `${a.type.startsWith("address:") ? "i8*" : llvmType(a.type)} ${a.value}`
                    ).join(", ");
                    const argStr = otherArgs ? `${selfArg}, ${otherArgs}` : selfArg;
                    ir.emit(`call void @${ctorName}(${argStr})`);
                }
                return { value: ptr, type: normCallee, isClassPtr: true };
            }

            const fnInfo   = functionReturnTypes.get(expr.callee);
            if (!fnInfo && !ir.vars.has(expr.callee)) {
                throw new Error(`Call to undefined function '${expr.callee}' — declare it or import the module that provides it`);
            }
            if (fnInfo && !fnInfo.isVariadic) {
                const expected = fnInfo.params ? fnInfo.params.length : 0;
                const got      = expr.args ? expr.args.length : 0;
                if (expected !== got) {
                    throw new Error(`Function '${expr.callee}' expects ${expected} argument(s) but got ${got}`);
                }
            }
            const args     = (expr.args || []).map((a, i) => {
                const paramNormT = fnInfo && fnInfo.params && fnInfo.params[i]
                    ? normalizeType(fnInfo.params[i].type) : null;
                if (paramNormT && classTypes.has(paramNormT) && a.kind === "Var") {
                    const argVar = ir.vars.get(a.name);
                    if (argVar) return { value: argVar.ptr, type: paramNormT, isClassPtr: true };
                }
                return genExpr(ir, a);
            });
            // address:T values are normalized to i8* — use i8* as LLVM type in call args
            const argStr   = args.map(v => {
                if (v.isClassPtr) return `${llvmType(v.type)}* ${v.value}`;
                return `${v.type.startsWith("address:") ? "i8*" : llvmType(v.type)} ${v.value}`;
            }).join(", ");
            const retType  = fnInfo ? fnInfo.returnType : "int";
            const isVararg = fnInfo && fnInfo.isVariadic;
            if (retType === null) {
                ir.emit(`call void @${expr.callee}(${argStr})`);
                return { value: "0", type: "int" };
            }
            const retLl = llvmType(retType);
            const tmp = ir.newTmp();
            if (isVararg) {
                const declParams = (fnInfo.params || []).map(p => llvmType(p.type)).join(", ");
                const fnType = `${retLl} (${declParams ? declParams + ", " : ""}...)`;
                ir.emit(`${tmp} = call ${fnType} @${expr.callee}(${argStr})`);
            } else {
                ir.emit(`${tmp} = call ${retLl} @${expr.callee}(${argStr})`);
            }
            return { value: tmp, type: retType };
        }

        case "ChainedMethodCall": {
            // obj.field.method(args) — get pointer to the field, call method on it
            const v = ir.vars.get(expr.object);
            if (!v) throw new Error(`Unknown variable: ${expr.object}`);
            if (!classTypes.has(v.hType))
                throw new Error(`ChainedMethodCall: '${expr.object}' is not a class`);
            const outerIdx   = getFieldIndex(v.hType, expr.field);
            const fieldType  = normalizeType(getFieldType(v.hType, expr.field));
            const outerLL    = llvmType(v.hType);
            const fieldPtr   = ir.newTmp();
            ir.emit(`${fieldPtr} = getelementptr ${outerLL}, ${outerLL}* ${v.ptr}, i32 0, i32 ${outerIdx}`);
            if (!classTypes.has(fieldType))
                throw new Error(`ChainedMethodCall: field '${expr.field}' is not a class (type: ${fieldType})`);
            const mangled  = `${fieldType}_${expr.method}`;
            const mInfo    = functionReturnTypes.get(mangled);
            const retType  = mInfo ? mInfo.returnType : "int";
            const fieldLL  = `%class.${fieldType}`;
            const rawArgs  = (expr.args || []).map((a, i) => {
                const expectedNormT = mInfo && mInfo.params[i] ? normalizeType(mInfo.params[i].type) : null;
                if (expectedNormT && classTypes.has(expectedNormT) && a.kind === "Var") {
                    const argVar = ir.vars.get(a.name);
                    if (argVar && classTypes.has(argVar.hType)) {
                        return { value: argVar.ptr, type: argVar.hType, isClassPtr: true };
                    }
                }
                return genExpr(ir, a);
            });
            const coercedArgs = rawArgs.map((a, i) => {
                if (a.isClassPtr) return a;
                const expectedType = mInfo && mInfo.params[i] ? mInfo.params[i].type : null;
                if (!expectedType || expectedType === a.type) return a;
                try { return emitCast(ir, a.value, a.type, expectedType); } catch { return a; }
            });
            const selfArg   = `${fieldLL}* ${fieldPtr}`;
            const otherArgs = coercedArgs.map(a => {
                if (a.isClassPtr) return `%class.${a.type}* ${a.value}`;
                const llArgType = a.type.startsWith("address:") ? "i8*" : llvmType(a.type);
                return `${llArgType} ${a.value}`;
            }).join(", ");
            const argStr   = otherArgs ? `${selfArg}, ${otherArgs}` : selfArg;
            const normRetT = retType ? normalizeType(retType) : null;
            if (normRetT && classTypes.has(normRetT)) {
                const llRetT  = `%class.${normRetT}`;
                const retVal  = ir.newTmp();
                const slotPtr = ir.newTmp();
                ir.emit(`${retVal} = call ${llRetT} @${mangled}(${argStr})`);
                ir.emit(`${slotPtr} = alloca ${llRetT}`);
                ir.emit(`store ${llRetT} ${retVal}, ${llRetT}* ${slotPtr}`);
                return { value: slotPtr, type: normRetT, isClassPtr: true };
            }
            if (retType === null) {
                ir.emit(`call void @${mangled}(${argStr})`);
                return { value: "0", type: "int" };
            }
            const tmp = ir.newTmp();
            ir.emit(`${tmp} = call ${llvmType(retType)} @${mangled}(${argStr})`);
            return { value: tmp, type: retType };
        }

        case "FieldIndexAccess": {
            // obj.field[i] — get pointer to field, call its [] operator
            const v = ir.vars.get(expr.object);
            if (!v) throw new Error(`Unknown variable: ${expr.object}`);
            if (!classTypes.has(v.hType))
                throw new Error(`FieldIndexAccess: '${expr.object}' is not a class`);
            const outerIdx  = getFieldIndex(v.hType, expr.field);
            const fieldType = normalizeType(getFieldType(v.hType, expr.field));
            const outerLL   = llvmType(v.hType);
            const fieldPtr  = ir.newTmp();
            ir.emit(`${fieldPtr} = getelementptr ${outerLL}, ${outerLL}* ${v.ptr}, i32 0, i32 ${outerIdx}`);
            if (!classTypes.has(fieldType))
                throw new Error(`FieldIndexAccess: field '${expr.field}' is not a class (type: ${fieldType})`);
            const cls      = classTypes.get(fieldType);
            const idxOp    = (cls.operators || []).find(o => o.op === '[]');
            if (!idxOp) throw new Error(`FieldIndexAccess: '${fieldType}' has no [] operator`);
            const indexVal = genExpr(ir, expr.index);
            const fnName   = `${fieldType}_op_idx`;
            const fieldLL  = `%class.${fieldType}`;
            const tmp      = ir.newTmp();
            ir.emit(`${tmp} = call ${llvmType(idxOp.returnType)} @${fnName}(${fieldLL}* ${fieldPtr}, ${llvmType(idxOp.param.type)} ${indexVal.value})`);
            return { value: tmp, type: idxOp.returnType };
        }

        case "MethodCall": {
            const v = ir.vars.get(expr.object);
            if (!v) throw new Error(`Unknown variable: ${expr.object}`);
            const typeName   = v.hType;
            const isClass    = classTypes.has(typeName);
            if (!isClass && !structTypes.has(typeName))
                throw new Error(`'${expr.object}' has type '${typeName}' which is not a class — cannot call method '${expr.method}' on it`);
            const llTypeName = isClass ? `%class.${typeName}` : `%struct.${typeName}`;
            const mangled    = `${typeName}_${expr.method}`;
            const mInfo      = functionReturnTypes.get(mangled);
            if (!mInfo)
                throw new Error(`Method '${expr.method}' not found on type '${typeName}'`);
            if (mInfo.params) {
                const expected = mInfo.params.length;
                const got      = expr.args ? expr.args.length : 0;
                if (expected !== got) {
                    throw new Error(`Method '${typeName}.${expr.method}' expects ${expected} argument(s) but got ${got}`);
                }
            }
            const retType    = mInfo ? mInfo.returnType : "int";
            // Generate args — class-type params are passed by pointer (not by value)
            const rawArgs = (expr.args || []).map((a, i) => {
                const expectedNormT = mInfo && mInfo.params[i] ? normalizeType(mInfo.params[i].type) : null;
                if (expectedNormT && classTypes.has(expectedNormT) && a.kind === "Var") {
                    const argVar = ir.vars.get(a.name);
                    if (argVar && classTypes.has(argVar.hType)) {
                        return { value: argVar.ptr, type: argVar.hType, isClassPtr: true };
                    }
                }
                return genExpr(ir, a);
            });
            const coercedArgs = rawArgs.map((a, i) => {
                if (a.isClassPtr) return a;
                const expectedType = mInfo && mInfo.params[i] ? mInfo.params[i].type : null;
                if (!expectedType || expectedType === a.type) return a;
                try { return emitCast(ir, a.value, a.type, expectedType); } catch { return a; }
            });
            const selfArg   = `${llTypeName}* ${v.ptr}`;
            const otherArgs = coercedArgs.map(a => {
                if (a.isClassPtr) return `%class.${a.type}* ${a.value}`;
                const llArgType = a.type.startsWith("address:") ? "i8*" : llvmType(a.type);
                return `${llArgType} ${a.value}`;
            }).join(", ");
            const argStr  = otherArgs ? `${selfArg}, ${otherArgs}` : selfArg;
            const normRetT = retType ? normalizeType(retType) : null;
            if (normRetT && classTypes.has(normRetT)) {
                // Class return by value: call returns the struct directly, store to a slot.
                const llRetT    = `%class.${normRetT}`;
                const retVal    = ir.newTmp();
                const slotPtr   = ir.newTmp();
                ir.emit(`${retVal} = call ${llRetT} @${mangled}(${argStr})`);
                ir.emit(`${slotPtr} = alloca ${llRetT}`);
                ir.emit(`store ${llRetT} ${retVal}, ${llRetT}* ${slotPtr}`);
                return { value: slotPtr, type: normRetT, isClassPtr: true };
            }
            if (retType === null) {
                ir.emit(`call void @${mangled}(${argStr})`);
                return { value: "0", type: "int" };
            }
            const tmp = ir.newTmp();
            ir.emit(`${tmp} = call ${llvmType(retType)} @${mangled}(${argStr})`);
            return { value: tmp, type: retType };
        }

        case "CastExpr": {
            if (expr.targetType === null)
                throw new Error("cast requires an assignment context");
            const inner = genExpr(ir, expr.expr);
            return emitCast(ir, inner.value, inner.type, expr.targetType);
        }

        case "AllocateExpr": {
            const size = genExpr(ir, expr.sizeExpr);
            const sizeVal = size.type !== "int" ? size.value : size.value;
            const tmp = ir.newTmp();
            ir.emit(`${tmp} = call i8* @malloc(i64 ${sizeVal})`);
            return { value: tmp, type: "address" };
        }

        default:
            throw new Error(`Unsupported expr kind: ${expr.kind}`);
    }
}
