import {
    typeAliases, classTypes, structTypes, bitfieldTypes,
    wordBits,
} from "./codegenState.js";

// ── function overload helpers ─────────────────────────────────────────────

export function mangledFnName(name, params) {
    if (!params || params.length === 0) return `${name}__`;
    const sig = params.map(p => normalizeType(p.type).replace(/[^a-zA-Z0-9]/g, "_")).join("_");
    return `${name}__${sig}`;
}

export function overloadTypeMatch(argType, paramType) {
    const norm = t => { const n = normalizeType(t); return n === "string" ? "address" : n; };
    return norm(argType) === norm(paramType);
}

// ── template helpers ───────────────────────────────────────────────────────

export function mangleTemplate(t) {
    return t.replace(/[<>]/g, '_').replace(/,\s*/g, '_').replace(/_+/g, '_').replace(/_$/, '');
}

export function normalizeType(t) {
    if (typeAliases.has(t)) return normalizeType(typeAliases.get(t));
    if (t && t.includes('<')) return mangleTemplate(t);
    return t;
}

export function splitTypeArgs(s) {
    const args = [];
    let depth = 0;
    let cur   = '';
    for (const ch of s) {
        if      (ch === '<') { depth++; cur += ch; }
        else if (ch === '>') { depth--; cur += ch; }
        else if (ch === ',' && depth === 0) { args.push(cur.trim()); cur = ''; }
        else { cur += ch; }
    }
    if (cur.trim()) args.push(cur.trim());
    return args;
}

export function substTypeStr(t, subst) {
    if (!t) return t;
    if (subst.has(t)) return subst.get(t);
    if (!t.includes('<')) return t;
    const lt      = t.indexOf('<');
    const base    = t.substring(0, lt);
    const argsStr = t.substring(lt + 1, t.length - 1);
    const args    = splitTypeArgs(argsStr);
    return `${base}<${args.map(a => substTypeStr(a, subst)).join(',')}>`;
}

// ── operator name mangling ─────────────────────────────────────────────────

export function operatorNameSafe(op) {
    return op
        .replace('[]=','setidx').replace('[]','idx').replace('<<','shl').replace('>>','shr')
        .replace('<=','le').replace('>=','ge').replace('==','eq').replace('!=','ne')
        .replace('+','plus').replace('-','minus').replace('*','mul')
        .replace('/','div').replace('%','mod').replace('<','lt').replace('>','gt')
        .replace('&','band').replace('|','bor').replace('^','bxor');
}

// ── callback type helpers ─────────────────────────────────────────────────

export function parseCallbackType(t) {
    const openP  = t.indexOf('(');
    const closeP = t.lastIndexOf(')');
    const paramsStr = t.substring(openP + 1, closeP).trim();
    const ret       = t.substring(closeP + 1).trim();
    const params    = paramsStr ? paramsStr.split(',').map(p => p.trim()) : [];
    return { params, ret };
}

export function callbackFnTypeSig(t) {
    const { params, ret } = parseCallbackType(t);
    const retLl    = ret ? llvmType(ret) : "void";
    const paramLls = params.map(p => llvmType(p)).join(", ");
    return `${retLl} (${paramLls})`;
}

// ── type helpers ───────────────────────────────────────────────────────────

export function llvmType(t) {
    const wordTy = wordBits === 32 ? "i32" : "i64";
    if (!t) return "void";
    if (typeAliases.has(t)) return llvmType(typeAliases.get(t));
    if (classTypes.has(t))    return `%class.${t}`;
    if (structTypes.has(t))   return `%struct.${t}`;
    if (bitfieldTypes.has(t)) return bitfieldLLType(bitfieldTypes.get(t));
    if (t === "int")          return wordTy;
    if (t === "bool")         return "i1";
    if (t === "bit")          return "i1";
    if (t === "byte" || t === "char")         return "i8";
    if (t === "float")        return "double";
    if (t === "string[]")     return "i8**";
    if (t === "string")       return "i8*";
    if (t === "String")       return "i8*";
    if (t === "address")      return "i8*";
    if (t === "unsignedint")  return wordTy;
    if (t === "unsignedbyte") return "i8";
    if (t.startsWith("address:")) return llvmType(t.substring(8)) + "*";
    if (t.startsWith("callback(")) return "i8*";
    if (t.includes('<')) {
        const m = mangleTemplate(t);
        if (classTypes.has(m)) return `%class.${m}`;
        throw new Error(`Template type '${t}' has not been instantiated`);
    }
    throw new Error(`Unknown type: ${t}`);
}

export function isFloatType(t) { return t === "float"; }
export function isIntType(t)   { return t === "int" || t === "byte" || t === "char" || t === "bool" || t === "bit" || t === "unsignedint" || t === "unsignedbyte"; }
export function isUnsigned(t)  { return t === "unsignedint" || t === "unsignedbyte"; }

export function bitWidth(type, count = 1) {
    if (type === "bit")          return 1 * count;
    if (type === "bool")         return 1 * count;
    if (type === "byte" || type === "char") return 8 * count;
    if (type === "unsignedbyte") return 8 * count;
    if (type === "int")          return 64 * count;
    if (type === "unsignedint")  return 64 * count;
    if (type === "float")        return 64 * count;
    if (type === "address")      return 64 * count;
    return 8 * count;
}

export function bitsToLLType(n) {
    if (n <= 8)  return "i8";
    if (n <= 16) return "i16";
    if (n <= 32) return "i32";
    return "i64";
}

export function bitfieldLayout(bf) {
    let total = 0;
    for (const f of bf.fields) {
        if (f.isPad) { total += f.bits; continue; }
        total += bitWidth(f.type, f.count);
    }
    return { totalBits: total, llType: bitsToLLType(total) };
}

export function bitfieldLLType(bf) {
    return bitfieldLayout(bf).llType;
}

export function sizeOfType(t) {
    if (t === "int")     return 8;
    if (t === "byte" || t === "char")    return 1;
    if (t === "bit")     return 1;
    if (t === "bool")    return 1;
    if (t === "float")   return 8;
    if (t === "string")  return 8;
    if (t === "address") return 8;
    if (bitfieldTypes.has(t)) {
        const { totalBits } = bitfieldLayout(bitfieldTypes.get(t));
        return Math.ceil(totalBits / 8);
    }
    if (structTypes.has(t)) {
        return structTypes.get(t).fields.reduce((s, f) =>
            s + (f.isPad ? f.size : sizeOfType(f.type)), 0);
    }
    if (classTypes.has(t)) {
        return classTypes.get(t).fields.reduce((acc, f) => acc + sizeOfType(f.type), 0);
    }
    if (t === "String")  return 8;
    throw new Error(`Unknown type for sizeof: ${t}`);
}

export function bitfieldFieldInfo(bf, fieldName) {
    let offset = 0;
    for (const f of bf.fields) {
        if (f.isPad) { offset += f.bits; continue; }
        const width = bitWidth(f.type, f.count);
        if (f.name === fieldName) return { offset, width, fieldType: f.type };
        offset += width;
    }
    throw new Error(`Field '${fieldName}' not found in bitfield`);
}

export function getTypeInfo(typeName) {
    const n = normalizeType(typeName);
    if (structTypes.has(n)) return { kind: "struct", info: structTypes.get(n) };
    if (classTypes.has(n))  return { kind: "class",  info: classTypes.get(n) };
    return null;
}

export function getFieldIndex(typeName, fieldName) {
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

export function getFieldType(typeName, fieldName) {
    const ti = getTypeInfo(typeName);
    if (!ti) throw new Error(`Unknown type: ${typeName}`);
    const f = ti.info.fields.find(f => !f.isPad && f.name === fieldName);
    if (!f) throw new Error(`Unknown field '${fieldName}' in ${ti.kind} '${typeName}'`);
    return f.type;
}

export function llvmZeroValue(llType) {
    if (llType === "double") return "0.0";
    if (llType.endsWith("*")) return "null";
    if (llType.startsWith("%class.") || llType.startsWith("%struct.")) return "zeroinitializer";
    return "0";
}
