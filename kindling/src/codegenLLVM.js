import { buildAstFromSource } from "./astBuilder.js";

// ── module-level registries ────────────────────────────────────────────────

const stringConstants    = new Map();   // raw value  → @.str.N
const structTypes        = new Map();   // name       → { fields: [{name,type,isPad,size}] }
const classTypes         = new Map();   // name       → { fields: [{name,type}], methods, operators }
const moduleConstants    = new Map();   // const name → { value, type }
const typeAliases        = new Map();   // alias name → target type string
const functionReturnTypes = new Map();  // function name → { returnType, isVariadic, params }
const templateDefs       = new Map();   // template name → TemplateDecl
const mmioBindings       = new Map();   // name → { hType, llType, address (decimal) }
const bitfieldTypes      = new Map();   // name → BitfieldDecl
let   instantiatedClasses = [];         // concrete ClassDecl nodes produced by monomorphization
let   stringCounter = 0;

function resetAll() {
    stringConstants.clear();
    structTypes.clear();
    classTypes.clear();
    moduleConstants.clear();
    typeAliases.clear();
    functionReturnTypes.clear();
    templateDefs.clear();
    mmioBindings.clear();
    bitfieldTypes.clear();
    instantiatedClasses = [];
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

// ── template helpers ───────────────────────────────────────────────────────

// "List<int>" → "List_int",  "Map<String,int>" → "Map_String_int"
function mangleTemplate(t) {
    return t.replace(/[<>]/g, '_').replace(/,\s*/g, '_').replace(/_+/g, '_').replace(/_$/, '');
}

// If t is a template type, return its mangled LLVM-safe name; otherwise return t unchanged.
function normalizeType(t) {
    if (t && t.includes('<')) return mangleTemplate(t);
    return t;
}

// Split "String,int" into ["String","int"], respecting nested angle brackets.
function splitTypeArgs(s) {
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

// Substitute type parameters in a type string. subst is a Map<paramName, concreteType>.
function substTypeStr(t, subst) {
    if (!t) return t;
    if (subst.has(t)) return subst.get(t);
    if (!t.includes('<')) return t;
    // Recurse into template args: "List<T>" with {T→int} → "List<int>"
    const lt      = t.indexOf('<');
    const base    = t.substring(0, lt);
    const argsStr = t.substring(lt + 1, t.length - 1);
    const args    = splitTypeArgs(argsStr);
    return `${base}<${args.map(a => substTypeStr(a, subst)).join(',')}>`;
}

// Deep-clone a block/statement tree, substituting type params wherever types appear.
function substBlock(block, subst) {
    if (!block) return null;
    return { ...block, statements: block.statements.map(s => substStmt(s, subst)) };
}

function substExpr(e, subst) {
    if (!e) return null;
    switch (e.kind) {
        case "SizeOf":        return { ...e, name: substTypeStr(e.name, subst) };
        case "Binary":        return { ...e, left: substExpr(e.left, subst), right: substExpr(e.right, subst) };
        case "Unary":         return { ...e, expr: substExpr(e.expr, subst) };
        case "AllocateExpr":  return { ...e, sizeExpr: substExpr(e.sizeExpr, subst) };
        case "DeallocateStmt": return { ...e, expr: substExpr(e.expr, subst) };
        default:              return e;
    }
}

function substStmt(s, subst) {
    if (!s) return null;
    switch (s.kind) {
        case "VarDecl":        return { ...s, type: substTypeStr(s.type, subst), init: substExpr(s.init, subst) };
        case "ArrayDecl":      return { ...s, type: substTypeStr(s.type, subst) };
        case "ArrayDeclInit":  return { ...s, type: substTypeStr(s.type, subst) };
        case "IfStmt":         return { ...s, thenBlock: substBlock(s.thenBlock, subst), elseBlock: s.elseBlock ? substBlock(s.elseBlock, subst) : null };
        case "WhileStmt":      return { ...s, body: substBlock(s.body, subst) };
        case "ForStmt":        return { ...s, init: substStmt(s.init, subst), body: substBlock(s.body, subst) };
        case "DeallocateStmt": return { ...s, expr: substExpr(s.expr, subst) };
        case "ExprStmt":       return { ...s, expr: substExpr(s.expr, subst) };
        case "ReturnStmt":     return { ...s, expr: substExpr(s.expr, subst) };
        case "FieldAssign":    return { ...s, expr: substExpr(s.expr, subst) };
        case "Assign":         return { ...s, expr: substExpr(s.expr, subst) };
        case "DerefAssign":    return { ...s, expr: substExpr(s.expr, subst) };
        default: return s;
    }
}

function substParam(p, subst) {
    return { ...p, type: substTypeStr(p.type, subst) };
}

function monomorphize(tmpl, typeArgs) {
    const subst = new Map();
    tmpl.typeParams.forEach((tp, i) => subst.set(tp, typeArgs[i]));
    const mangledName = mangleTemplate(`${tmpl.name}<${typeArgs.join(',')}>`);

    function substMethod(m) {
        return {
            ...m,
            params:     m.params.map(p => substParam(p, subst)),
            returnType: m.returnType ? substTypeStr(m.returnType, subst) : null,
            body:       substBlock(m.body, subst),
        };
    }

    function substOperator(op) {
        return {
            ...op,
            param:      substParam(op.param, subst),
            returnType: substTypeStr(op.returnType, subst),
            body:       substBlock(op.body, subst),
        };
    }

    return {
        kind:        "ClassDecl",
        name:        mangledName,
        fields:      tmpl.fields.map(f => ({ ...f, type: substTypeStr(f.type, subst) })),
        methods:     tmpl.methods.map(substMethod),
        operators:   tmpl.operators.map(substOperator),
        constructor: tmpl.constructor ? {
            ...tmpl.constructor,
            params: tmpl.constructor.params.map(p => substParam(p, subst)),
            body:   substBlock(tmpl.constructor.body, subst),
        } : null,
        destructor: tmpl.destructor ? {
            ...tmpl.destructor,
            body: substBlock(tmpl.destructor.body, subst),
        } : null,
    };
}

// Instantiate a template type string like "Box<int>" — idempotent.
function instantiateTemplate(typeStr) {
    const mangled = mangleTemplate(typeStr);
    if (classTypes.has(mangled)) return; // already instantiated

    const match = typeStr.match(/^([a-zA-Z_][a-zA-Z0-9_]*)<(.+)>$/);
    if (!match) return;
    const [, baseName, argsStr] = match;

    if (!templateDefs.has(baseName)) throw new Error(`Unknown template: '${baseName}' (used as '${typeStr}')`);

    const typeArgs     = splitTypeArgs(argsStr);
    const tmpl         = templateDefs.get(baseName);
    const concreteClass = monomorphize(tmpl, typeArgs);

    // Register before recursing to prevent infinite loops
    registerClass(concreteClass.name, concreteClass.fields, concreteClass.methods, concreteClass.operators);
    instantiatedClasses.push(concreteClass);

    // Register return types for all methods so call sites can resolve them
    for (const m of concreteClass.methods || []) {
        functionReturnTypes.set(`${concreteClass.name}_${m.name}`, {
            returnType: m.returnType, isVariadic: false, params: m.params
        });
    }
    for (const op of concreteClass.operators || []) {
        const ns = operatorNameSafe(op.op);
        functionReturnTypes.set(`${concreteClass.name}_op_${ns}`, {
            returnType: op.returnType, isVariadic: false, params: [op.param]
        });
    }
    if (concreteClass.constructor) {
        functionReturnTypes.set(`${concreteClass.name}_constructor`, {
            returnType: null, isVariadic: false, params: concreteClass.constructor.params
        });
    }
    if (concreteClass.destructor) {
        functionReturnTypes.set(`${concreteClass.name}_destructor`, {
            returnType: null, isVariadic: false, params: []
        });
    }

    // Recursively instantiate template types referenced by this class's fields/methods
    for (const f of concreteClass.fields) {
        if (f.type && f.type.includes('<')) instantiateTemplate(f.type);
    }
    for (const m of concreteClass.methods || []) {
        if (m.returnType && m.returnType.includes('<')) instantiateTemplate(m.returnType);
        for (const p of m.params) if (p.type && p.type.includes('<')) instantiateTemplate(p.type);
    }
}

// Walk the entire AST and collect all template type strings (e.g. "Box<int>").
function collectTypeUsages(ast) {
    const usages = new Set();

    function checkType(t) {
        if (t && t.includes('<')) usages.add(t);
    }

    function scanStmt(s) {
        if (!s) return;
        switch (s.kind) {
            case "VarDecl":       checkType(s.type); break;
            case "ArrayDecl":     checkType(s.type); break;
            case "ArrayDeclInit": checkType(s.type); break;
            case "IfStmt":    scanBlock(s.thenBlock); scanBlock(s.elseBlock); break;
            case "WhileStmt": scanBlock(s.body); break;
            case "ForStmt":   scanStmt(s.init); scanBlock(s.body); break;
        }
    }

    function scanBlock(b) {
        if (!b) return;
        b.statements.forEach(scanStmt);
    }

    function scanFn(fn) {
        fn.params.forEach(p => checkType(p.type));
        checkType(fn.returnType);
        if (fn.body) scanBlock(fn.body);
    }

    for (const fn of ast.functions || []) scanFn(fn);
    for (const cls of ast.classes || []) {
        cls.fields.forEach(f => checkType(f.type));
        (cls.methods || []).forEach(m => {
            m.params.forEach(p => checkType(p.type));
            checkType(m.returnType);
            scanBlock(m.body);
        });
        if (cls.constructor) {
            cls.constructor.params.forEach(p => checkType(p.type));
            scanBlock(cls.constructor.body);
        }
    }
    for (const s of ast.structs || []) s.fields.forEach(f => checkType(f.type));

    if (ast.entry && ast.entry.body) scanBlock(ast.entry.body);

    return usages;
}

// ── operator name mangling ─────────────────────────────────────────────────

function operatorNameSafe(op) {
    return op
        .replace('[]','idx').replace('<<','shl').replace('>>','shr')
        .replace('<=','le').replace('>=','ge').replace('==','eq').replace('!=','ne')
        .replace('+','plus').replace('-','minus').replace('*','mul')
        .replace('/','div').replace('%','mod').replace('<','lt').replace('>','gt')
        .replace('&','band').replace('|','bor').replace('^','bxor');
}

// ── type helpers ───────────────────────────────────────────────────────────

function llvmType(t) {
    if (!t) return "void";
    if (typeAliases.has(t)) return llvmType(typeAliases.get(t));
    if (t === "int")          return "i64";
    if (t === "bool")         return "i1";
    if (t === "bit")          return "i1";
    if (t === "byte")         return "i8";
    if (t === "float")        return "double";
    if (t === "string[]")     return "i8**";
    if (t === "string")       return "i8*";
    if (t === "String")       return "i8*";
    if (t === "address")      return "i8*";
    if (t === "unsignedint")  return "i64";
    if (t === "unsignedbyte") return "i8";
    if (structTypes.has(t))   return `%struct.${t}`;
    if (classTypes.has(t))    return `%class.${t}`;
    if (bitfieldTypes.has(t)) return bitfieldLLType(bitfieldTypes.get(t));
    if (t.startsWith("address:")) return llvmType(t.substring(8)) + "*";
    if (t.includes('<')) {
        const m = mangleTemplate(t);
        if (classTypes.has(m)) return `%class.${m}`;
        throw new Error(`Template type '${t}' has not been instantiated`);
    }
    throw new Error(`Unknown type: ${t}`);
}

function isFloatType(t) { return t === "float"; }
function isIntType(t)   { return t === "int" || t === "byte" || t === "bool" || t === "bit" || t === "unsignedint" || t === "unsignedbyte"; }
function isUnsigned(t)  { return t === "unsignedint" || t === "unsignedbyte"; }

// Number of BITS a type occupies (used for bitfield layout)
function bitWidth(type, count = 1) {
    if (type === "bit")          return 1 * count;
    if (type === "bool")         return 1 * count;
    if (type === "byte")         return 8 * count;
    if (type === "unsignedbyte") return 8 * count;
    if (type === "int")          return 64 * count;
    if (type === "unsignedint")  return 64 * count;
    if (type === "float")        return 64 * count;
    if (type === "address")      return 64 * count;
    return 8 * count; // default: treat as byte-sized
}

// Smallest integer LLVM type that holds N bits (rounded up to 8/16/32/64)
function bitsToLLType(n) {
    if (n <= 8)  return "i8";
    if (n <= 16) return "i16";
    if (n <= 32) return "i32";
    return "i64";
}

// Total bit count and LLVM container type for a bitfield
function bitfieldLayout(bf) {
    let total = 0;
    for (const f of bf.fields) {
        if (f.isPad) { total += f.bits; continue; }
        total += bitWidth(f.type, f.count);
    }
    return { totalBits: total, llType: bitsToLLType(total) };
}

function bitfieldLLType(bf) {
    return bitfieldLayout(bf).llType;
}

function sizeOfType(t) {
    if (t === "int")     return 8;
    if (t === "byte")    return 1;
    if (t === "bit")     return 1;  // stored as i8 minimum when standalone
    if (t === "bool")    return 1;
    if (t === "float")   return 8;
    if (t === "string")  return 8;
    if (t === "String")  return 8;
    if (t === "address") return 8;
    if (bitfieldTypes.has(t)) {
        const { totalBits } = bitfieldLayout(bitfieldTypes.get(t));
        return Math.ceil(totalBits / 8);
    }
    if (structTypes.has(t)) {
        return structTypes.get(t).fields.reduce((s, f) =>
            s + (f.isPad ? f.size : sizeOfType(f.type)), 0);
    }
    throw new Error(`Unknown type for sizeof: ${t}`);
}

// ── bitfield field lookup ─────────────────────────────────────────────────

// Returns { offset (bit), width (bits), fieldType } for a named field in a bitfield
function bitfieldFieldInfo(bf, fieldName) {
    let offset = 0;
    for (const f of bf.fields) {
        if (f.isPad) { offset += f.bits; continue; }
        const width = bitWidth(f.type, f.count);
        if (f.name === fieldName) return { offset, width, fieldType: f.type };
        offset += width;
    }
    throw new Error(`Field '${fieldName}' not found in bitfield`);
}

// ── field lookup (struct and class) ───────────────────────────────────────

function getTypeInfo(typeName) {
    const n = normalizeType(typeName);
    if (structTypes.has(n)) return { kind: "struct", info: structTypes.get(n) };
    if (classTypes.has(n))  return { kind: "class",  info: classTypes.get(n) };
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
        this.lines      = [];
        this.tmp        = 0;
        this.label      = 0;
        this.vars       = new Map();
        this.loopStack  = [];
        this.deferStack = [];
    }

    emit(line)              { this.lines.push(line); }
    newTmp()                { return `%t${this.tmp++}`; }
    newLabel(prefix)        { return `${prefix}${this.label++}`; }
    getVar(name) {
        if (moduleConstants.has(name)) return null;
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

// ── cast helper ────────────────────────────────────────────────────────────

function emitCast(ir, srcVal, srcType, targetType) {
    if (srcType === targetType) return { value: srcVal, type: targetType };

    const tmp = ir.newTmp();
    const unsigned = isUnsigned(targetType);

    if (isFloatType(srcType) && (targetType === "int" || targetType === "unsignedint")) {
        ir.emit(`${tmp} = fptosi double ${srcVal} to i64`);
        return { value: tmp, type: targetType };
    }
    if (isFloatType(srcType) && (targetType === "byte" || targetType === "unsignedbyte")) {
        ir.emit(`${tmp} = fptosi double ${srcVal} to i8`);
        return { value: tmp, type: targetType };
    }
    if ((srcType === "int" || srcType === "unsignedint") && isFloatType(targetType)) {
        ir.emit(`${tmp} = sitofp i64 ${srcVal} to double`);
        return { value: tmp, type: targetType };
    }
    if ((srcType === "byte" || srcType === "unsignedbyte") && isFloatType(targetType)) {
        ir.emit(`${tmp} = sitofp i8 ${srcVal} to double`);
        return { value: tmp, type: targetType };
    }
    if ((srcType === "int" || srcType === "unsignedint") && (targetType === "byte" || targetType === "unsignedbyte")) {
        ir.emit(`${tmp} = trunc i64 ${srcVal} to i8`);
        return { value: tmp, type: targetType };
    }
    if ((srcType === "byte" || srcType === "unsignedbyte") && (targetType === "int" || targetType === "unsignedint")) {
        if (unsigned || isUnsigned(srcType)) {
            ir.emit(`${tmp} = zext i8 ${srcVal} to i64`);
        } else {
            ir.emit(`${tmp} = sext i8 ${srcVal} to i64`);
        }
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

function emitDeferred(ir) {
    for (const expr of [...ir.deferStack].reverse()) {
        genExpr(ir, expr);
    }
}

// ── expression codegen ────────────────────────────────────────────────────

function genExpr(ir, expr) {
    switch (expr.kind) {

        case "IntLiteral":
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
            const len = expr.value.length + 1;
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
            const c = moduleConstants.get(expr.name);
            if (c) return { value: String(c.value), type: c.type };

            const mmio = mmioBindings.get(expr.name);
            if (mmio) {
                const ptr = ir.newTmp();
                const tmp = ir.newTmp();
                ir.emit(`${ptr} = inttoptr i64 ${mmio.addr} to ${mmio.llType}*`);
                ir.emit(`${tmp} = load volatile ${mmio.llType}, ${mmio.llType}* ${ptr}`);
                return { value: tmp, type: mmio.hType };
            }

            const v = ir.vars.get(expr.name);
            if (!v) throw new Error(`Unknown variable: ${expr.name}`);
            const tmp = ir.newTmp();
            ir.emit(`${tmp} = load ${v.type}, ${v.type}* ${v.ptr}`);
            return { value: tmp, type: v.hType };
        }

        case "FieldAccess": {
            // Check MMIO (strict) bitfield first — uses volatile load
            const mmioFA = mmioBindings.get(expr.object);
            if (mmioFA && bitfieldTypes.has(mmioFA.hType)) {
                const bf = bitfieldTypes.get(mmioFA.hType);
                const { llType } = bitfieldLayout(bf);
                const { offset, width, fieldType } = bitfieldFieldInfo(bf, expr.field);
                const ptr = ir.newTmp();
                ir.emit(`${ptr} = inttoptr i64 ${mmioFA.addr} to ${llType}*`);
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
                // Truncate to the field's natural LLVM type
                const llFieldType = llvmType(fieldType);
                if (llFieldType === llType) return { value: masked, type: fieldType };
                const result = ir.newTmp();
                ir.emit(`${result} = trunc ${llType} ${masked} to ${llFieldType}`);
                return { value: result, type: fieldType };
            }

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
                        // left.value is i8* (all address:T values normalized); bitcast to T* for GEP then back
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
                        // left.value is i8* (all address:T values normalized); bitcast to T* for GEP then back
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
            const args     = (expr.args || []).map(a => genExpr(ir, a));
            // address:T values are normalized to i8* — use i8* as LLVM type in call args
            const argStr   = args.map(v => `${v.type.startsWith("address:") ? "i8*" : llvmType(v.type)} ${v.value}`).join(", ");
            const fnInfo   = functionReturnTypes.get(expr.callee);
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
            const mInfo      = functionReturnTypes.get(mangled);
            const retType    = mInfo ? mInfo.returnType : "int";
            if (retType === null) {
                ir.emit(`call void @${mangled}(${argStr})`);
                return { value: "0", type: "int" };
            }
            const tmp = ir.newTmp();
            ir.emit(`${tmp} = call ${llvmType(retType)} @${mangled}(${argStr})`);
            return { value: tmp, type: retType };
        }

        case "CastExpr":
            throw new Error("cast requires an assignment context");

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

// ── statement codegen ─────────────────────────────────────────────────────

function genStmt(ir, stmt, retType) {
    switch (stmt.kind) {

        case "VarDecl": {
            const normType         = normalizeType(stmt.type);
            const baseTemplateName = stmt.type.includes('<') ? stmt.type.split('<')[0] : null;

            // Constructor call sugar:
            //   MyClass x = MyClass(args)      — exact class name match
            //   Box<int> b = Box(args)          — base template name match
            const isConstructorCall = stmt.init && stmt.init.kind === "Call"
                && (stmt.init.callee === stmt.type || stmt.init.callee === normType || stmt.init.callee === baseTemplateName)
                && classTypes.has(normType);

            if (isConstructorCall) {
                const typeName = normType;
                const llType   = llvmType(typeName);
                const ptr      = ir.newTmp();
                ir.emit(`${ptr} = alloca ${llType}`);
                ir.vars.set(stmt.name, { ptr, type: llType, hType: typeName });

                const ctorName = `${typeName}_constructor`;
                if (functionReturnTypes.has(ctorName)) {
                    const args      = (stmt.init.args || []).map(a => genExpr(ir, a));
                    const selfArg   = `${llType}* ${ptr}`;
                    const otherArgs = args.map(a => `${llvmType(a.type)} ${a.value}`).join(", ");
                    const argStr    = otherArgs ? `${selfArg}, ${otherArgs}` : selfArg;
                    ir.emit(`call void @${ctorName}(${argStr})`);
                }
                break;
            }

            let hType = normType;
            let init  = null;

            if (stmt.init) {
                if (stmt.init.kind === "CastExpr") {
                    const inner = genExpr(ir, stmt.init.expr);
                    init = emitCast(ir, inner.value, inner.type, stmt.type);
                    hType = normType;
                } else {
                    init = genExpr(ir, stmt.init);
                    if (stmt.type === "address" && init.type.startsWith("address:"))
                        hType = init.type;
                }
            }

            const isAddress = stmt.type === "address" || stmt.type.startsWith("address:");
            const llType    = isAddress ? "i8*" : llvmType(hType);
            const ptr       = ir.newTmp();
            ir.emit(`${ptr} = alloca ${llType}`);

            if (init) {
                if (isAddress && init.type.startsWith("address:")) {
                    // init.value is already i8* (all address:T values normalized to i8*)
                    ir.emit(`store i8* ${init.value}, i8** ${ptr}`);
                } else {
                    ir.emit(`store ${llType} ${init.value}, ${llType}* ${ptr}`);
                }
            }

            ir.vars.set(stmt.name, { ptr, type: llType, hType });
            break;
        }

        case "Assign": {
            const mmio = mmioBindings.get(stmt.name);
            if (mmio) {
                const val = genExpr(ir, stmt.expr);
                const ptr = ir.newTmp();
                ir.emit(`${ptr} = inttoptr i64 ${mmio.addr} to ${mmio.llType}*`);
                ir.emit(`store volatile ${mmio.llType} ${val.value}, ${mmio.llType}* ${ptr}`);
                break;
            }

            const v   = ir.vars.get(stmt.name);
            if (!v) throw new Error(`Unknown variable: ${stmt.name}`);
            let val;
            if (stmt.expr.kind === "CastExpr") {
                const inner = genExpr(ir, stmt.expr.expr);
                val = emitCast(ir, inner.value, inner.type, v.hType);
            } else {
                val = genExpr(ir, stmt.expr);
            }
            if (v.hType === "address" && val.type.startsWith("address:")) v.hType = val.type;
            if (v.type === "i8*" && val.type.startsWith("address:")) {
                // val.value is already i8* (all address:T values normalized to i8*)
                ir.emit(`store i8* ${val.value}, i8** ${v.ptr}`);
            } else {
                ir.emit(`store ${v.type} ${val.value}, ${v.type}* ${v.ptr}`);
            }
            break;
        }

        case "FieldAssign": {
            // Check MMIO (strict) bitfield first — uses volatile load/store
            const mmioFW = mmioBindings.get(stmt.object);
            if (mmioFW && bitfieldTypes.has(mmioFW.hType)) {
                const bf = bitfieldTypes.get(mmioFW.hType);
                const { llType } = bitfieldLayout(bf);
                const { offset, width } = bitfieldFieldInfo(bf, stmt.field);
                const val = genExpr(ir, stmt.expr);
                const srcLL = llvmType(val.type);
                const srcBits = parseInt(srcLL.slice(1));
                const dstBits = parseInt(llType.slice(1));
                let inContainer = val.value;
                if (srcLL !== llType) {
                    const norm = ir.newTmp();
                    ir.emit(`${norm} = ${srcBits > dstBits ? "trunc" : "zext"} ${srcLL} ${val.value} to ${llType}`);
                    inContainer = norm;
                }
                const shifted = ir.newTmp();
                ir.emit(`${shifted} = shl ${llType} ${inContainer}, ${offset}`);
                const fieldMask = (1n << BigInt(width)) - 1n;
                const clearMask = ~(fieldMask << BigInt(offset)) & ((1n << 64n) - 1n);
                const ptr = ir.newTmp();
                ir.emit(`${ptr} = inttoptr i64 ${mmioFW.addr} to ${llType}*`);
                const current = ir.newTmp();
                ir.emit(`${current} = load volatile ${llType}, ${llType}* ${ptr}`);
                const cleared = ir.newTmp();
                ir.emit(`${cleared} = and ${llType} ${current}, ${clearMask}`);
                const merged = ir.newTmp();
                ir.emit(`${merged} = or ${llType} ${cleared}, ${shifted}`);
                ir.emit(`store volatile ${llType} ${merged}, ${llType}* ${ptr}`);
                break;
            }

            const v = ir.vars.get(stmt.object);
            if (!v) throw new Error(`Unknown variable: ${stmt.object}`);

            // Bitfield write: read-modify-write on the container integer
            if (bitfieldTypes.has(v.hType)) {
                const bf = bitfieldTypes.get(v.hType);
                const { llType } = bitfieldLayout(bf);
                const { offset, width } = bitfieldFieldInfo(bf, stmt.field);
                const val = genExpr(ir, stmt.expr);
                // Normalize value to container width (trunc if larger, zext if smaller)
                const srcLL = llvmType(val.type);
                const srcBits = parseInt(srcLL.slice(1));
                const dstBits = parseInt(llType.slice(1));
                let inContainer = val.value;
                if (srcLL !== llType) {
                    const norm = ir.newTmp();
                    ir.emit(`${norm} = ${srcBits > dstBits ? "trunc" : "zext"} ${srcLL} ${val.value} to ${llType}`);
                    inContainer = norm;
                }
                // Shift value into position
                const shifted = ir.newTmp();
                ir.emit(`${shifted} = shl ${llType} ${inContainer}, ${offset}`);
                // Build clear mask (all 1s except the field bits)
                const fieldMask = (1n << BigInt(width)) - 1n;
                const clearMask = ~(fieldMask << BigInt(offset)) & ((1n << 64n) - 1n);
                // Load current container, clear field bits, OR in new value
                const current = ir.newTmp();
                ir.emit(`${current} = load ${llType}, ${llType}* ${v.ptr}`);
                const cleared = ir.newTmp();
                ir.emit(`${cleared} = and ${llType} ${current}, ${clearMask}`);
                const merged = ir.newTmp();
                ir.emit(`${merged} = or ${llType} ${cleared}, ${shifted}`);
                ir.emit(`store ${llType} ${merged}, ${llType}* ${v.ptr}`);
                break;
            }

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
            const val = genExpr(ir, stmt.expr);
            let pointedTo;
            if (v.hType.startsWith("address:")) {
                pointedTo = v.hType.substring(8);
            } else if (v.hType === "address" && ir.returnType) {
                pointedTo = ir.returnType;
            } else if (v.hType === "address") {
                pointedTo = val.type; // infer from RHS
            } else {
                throw new Error(`Cannot dereference non-address type: ${v.hType}`);
            }
            const llPointedTo = llvmType(pointedTo);
            const rawAddr     = ir.newTmp();
            ir.emit(`${rawAddr} = load i8*, i8** ${v.ptr}`);
            const typedAddr   = ir.newTmp();
            ir.emit(`${typedAddr} = bitcast i8* ${rawAddr} to ${llPointedTo}*`);
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

        case "ArrayDeclInit": {
            const llElemType = llvmType(stmt.type);
            const size       = stmt.size;
            const arrayType  = `[${size} x ${llElemType}]`;
            const ptr        = ir.newTmp();
            ir.emit(`${ptr} = alloca ${arrayType}`);
            ir.vars.set(stmt.name, { ptr, type: arrayType, hType: `array:${stmt.type}:${size}` });
            for (let i = 0; i < stmt.elements.length; i++) {
                const val     = genExpr(ir, stmt.elements[i]);
                const elemPtr = ir.newTmp();
                ir.emit(`${elemPtr} = getelementptr ${arrayType}, ${arrayType}* ${ptr}, i32 0, i32 ${i}`);
                ir.emit(`store ${llElemType} ${val.value}, ${llElemType}* ${elemPtr}`);
            }
            break;
        }

        case "AsmStmt": {
            const X86_REGS = new Set([
                'rax','rbx','rcx','rdx','rsi','rdi','rsp','rbp',
                'r8','r9','r10','r11','r12','r13','r14','r15',
                'eax','ebx','ecx','edx','esi','edi','esp','ebp',
                'ax','bx','cx','dx','si','di','al','bl','cl','dl',
                'xmm0','xmm1','xmm2','xmm3','xmm4','xmm5','xmm6','xmm7',
            ]);
            const inputs  = [];  // { reg, llType, value }
            const outputs = [];  // { name, reg }
            const ops     = [];  // instruction strings

            for (const line of stmt.lines) {
                if (line.kind === "AsmLineOp") {
                    ops.push(line.op);
                } else if (line.kind === "AsmLineAssign") {
                    if (X86_REGS.has(line.dest)) {
                        // reg = value/var — input
                        const val = genExpr(ir, line.src);
                        let llVal = val.value;
                        let llT   = llvmType(val.type);
                        if (llT.endsWith("*")) {
                            // ptrtoint pointer → i64 for register
                            const tmp2 = ir.newTmp();
                            ir.emit(`${tmp2} = ptrtoint ${llT} ${llVal} to i64`);
                            llVal = tmp2; llT = "i64";
                        }
                        if (llT === "i8" || llT === "i1") {
                            const tmp2 = ir.newTmp();
                            ir.emit(`${tmp2} = zext ${llT} ${llVal} to i64`);
                            llVal = tmp2; llT = "i64";
                        }
                        inputs.push({ reg: line.dest, llType: llT, value: llVal });
                    } else {
                        // var = reg — output
                        outputs.push({ name: line.dest, reg: line.src.name });
                    }
                }
            }

            const asmStr         = ops.join("\\0A");
            const outConstraints = outputs.map(o => `={${o.reg}}`);
            const inConstraints  = inputs.map(i => `{${i.reg}}`);
            // If rax is an input but not an output, mark it as clobbered so LLVM
            // doesn't assume it's still live after the instruction.
            const raxClobber = (outputs.length === 0 && inputs.some(i => i.reg === 'rax')) ? ['~{rax}'] : [];
            const clobbers   = [...raxClobber, '~{rcx}','~{r11}','~{memory}'];
            const constraints    = [...outConstraints, ...inConstraints, ...clobbers].join(",");
            const inputArgs      = inputs.map(i => `${i.llType} ${i.value}`).join(", ");

            if (outputs.length === 0) {
                ir.emit(`call void asm sideeffect "${asmStr}", "${constraints}"(${inputArgs})`);
            } else if (outputs.length === 1) {
                const outTmp = ir.newTmp();
                ir.emit(`${outTmp} = call i64 asm sideeffect "${asmStr}", "${constraints}"(${inputArgs})`);
                const outVar = ir.vars.get(outputs[0].name);
                if (outVar) ir.emit(`store i64 ${outTmp}, i64* ${outVar.ptr}`);
            } else {
                const structT = `{ ${outputs.map(() => 'i64').join(', ')} }`;
                const outTmp  = ir.newTmp();
                ir.emit(`${outTmp} = call ${structT} asm sideeffect "${asmStr}", "${constraints}"(${inputArgs})`);
                outputs.forEach((out, i) => {
                    const ex = ir.newTmp();
                    ir.emit(`${ex} = extractvalue ${structT} ${outTmp}, ${i}`);
                    const outVar = ir.vars.get(out.name);
                    if (outVar) ir.emit(`store i64 ${ex}, i64* ${outVar.ptr}`);
                });
            }
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
            emitDeferred(ir);
            if (stmt.expr) {
                if (stmt.expr.kind === "CastExpr") {
                    const inner = genExpr(ir, stmt.expr.expr);
                    const casted = emitCast(ir, inner.value, inner.type, retType);
                    ir.emit(`ret ${llvmType(retType)} ${casted.value}`);
                } else {
                    const val = genExpr(ir, stmt.expr);
                    ir.emit(`ret ${llvmType(retType)} ${val.value}`);
                }
            } else {
                ir.emit(`ret void`);
            }
            break;
        }

        case "DeferStmt": {
            ir.deferStack.push(stmt.expr);
            break;
        }

        case "DeallocateStmt": {
            const ptr = genExpr(ir, stmt.expr);
            ir.emit(`call void @free(i8* ${ptr.value})`);
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
    ir.returnType    = fn.returnType;
    const isVoid     = fn.returnType === null;
    const retLlType  = isVoid ? "void" : llvmType(fn.returnType);
    const paramSig   = fn.params.map((p, i) => `${llvmType(normalizeType(p.type))} %p${i}`).join(", ");

    ir.emit(`define ${retLlType} @${fn.name}(${paramSig}) {`);
    ir.emit("entry:");

    fn.params.forEach((p, i) => {
        const normT = normalizeType(p.type);
        const lt    = llvmType(normT);
        const ptr   = ir.newTmp();
        ir.emit(`${ptr} = alloca ${lt}`);
        ir.emit(`store ${lt} %p${i}, ${lt}* ${ptr}`);
        ir.vars.set(p.name, { ptr, type: lt, hType: normT });
    });

    genBlock(ir, fn.body, fn.returnType);
    emitDeferred(ir);
    if (isVoid) {
        ir.emit(`ret void`);
    } else {
        ir.emit(`ret ${retLlType} ${retLlType === "double" ? "0.0" : retLlType.endsWith("*") ? "null" : "0"}`);
    }
    ir.emit("}");
    return ir.lines.join("\n");
}

function genMethod(typeName, method, isClass = true) {
    const ir         = new IRBuilder();
    ir.returnType    = method.returnType;
    const isVoid     = method.returnType === null;
    const retLlType  = isVoid ? "void" : llvmType(normalizeType(method.returnType));
    const mangled    = `${typeName}_${method.name}`;
    const llTypeName = isClass ? `%class.${typeName}` : `%struct.${typeName}`;

    const paramParts = [`${llTypeName}* %self`];
    method.params.forEach((p, i) => {
        const normT = normalizeType(p.type);
        paramParts.push(`${llvmType(normT)} %p${i}`);
    });
    ir.emit(`define ${retLlType} @${mangled}(${paramParts.join(", ")}) {`);
    ir.emit("entry:");

    ir.vars.set("self", {
        ptr:    "%self",
        type:   llTypeName,
        hType:  typeName,
        isSelf: true
    });

    method.params.forEach((p, i) => {
        const normT = normalizeType(p.type);
        const lt    = llvmType(normT);
        const ptr   = ir.newTmp();
        ir.emit(`${ptr} = alloca ${lt}`);
        ir.emit(`store ${lt} %p${i}, ${lt}* ${ptr}`);
        ir.vars.set(p.name, { ptr, type: lt, hType: normT });
    });

    genBlock(ir, method.body, method.returnType);
    emitDeferred(ir);
    if (isVoid) {
        ir.emit(`ret void`);
    } else {
        ir.emit(`ret ${retLlType} ${retLlType === "double" ? "0.0" : retLlType.endsWith("*") ? "null" : "0"}`);
    }
    ir.emit("}");
    return ir.lines.join("\n");
}

function genOperator(className, op) {
    const nameSafe = operatorNameSafe(op.op);
    const pseudoMethod = {
        name:       `op_${nameSafe}`,
        params:     [op.param],
        returnType: op.returnType,
        body:       op.body
    };
    return genMethod(className, pseudoMethod, true);
}

// ── compile-time type size ────────────────────────────────────────────────

function typeSize(hType) {
    const t = normalizeType(hType);
    if (t === "int")          return 8;
    if (t === "float")        return 8;
    if (t === "bool")         return 1;
    if (t === "byte")         return 1;
    if (t === "address" || t.startsWith("address:")) return 8;
    if (t === "string[]")     return 8;
    if (t === "string")       return 8;
    if (t === "String")       return 8;
    if (t === "unsignedint")  return 8;
    if (t === "unsignedbyte") return 1;
    if (structTypes.has(t)) {
        return structTypes.get(t).fields.reduce((acc, f) =>
            acc + (f.isPad ? f.size : typeSize(f.type)), 0);
    }
    if (classTypes.has(t)) {
        return classTypes.get(t).fields.reduce((acc, f) => acc + typeSize(f.type), 0);
    }
    throw new Error(`Cannot compute ::size of unknown type: ${t}`);
}

// ── bind directive codegen ────────────────────────────────────────────────

function genBind(bind) {
    // Emit a function-pointer global in a named section so the linker can
    // place it at the hardware address.
    const varName = `@__bind_${bind.hardwareAddress}`;
    const section = `.hopbind.${bind.hardwareAddress}`;
    return `${varName} = global i8* bitcast (void ()* @${bind.functionName} to i8*), section "${section}", align 4`;
}

// ── entry point codegen ───────────────────────────────────────────────────

function genEntry(entry) {
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
        genBlock(ir, entry.body, "int");
        emitDeferred(ir);
        ir.emit("ret i64 0");
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

    return ir.lines.join("\n");
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

function emitClassIR(cls, out, fnCode) {
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

function genModule(ast) {
    resetAll();

    // Aliases and constants
    for (const a of ast.aliases || []) typeAliases.set(a.name, a.targetType);
    for (const c of ast.consts  || []) moduleConstants.set(c.name, { value: c.value, type: c.type });

    // Register template definitions.
    // Fixed templates (all params are concrete types) are monomorphized immediately —
    // their name becomes a standalone class type with no <> required at use sites.
    for (const t of ast.templates || []) {
        if (t.isFixed) {
            // Build substitution from fixedParams, then monomorphize and register as a class
            const concreteClass = monomorphize(t, t.fixedParams);
            // Register under the original readable name (e.g. "String"), not the mangled one
            registerClass(t.name, concreteClass.fields, concreteClass.methods, concreteClass.operators);
            instantiatedClasses.push({ ...concreteClass, name: t.name });
            if (t.constructor) functionReturnTypes.set(`${t.name}_constructor`, { returnType: null, isVariadic: false, params: concreteClass.constructor?.params || [] });
            if (t.destructor)  functionReturnTypes.set(`${t.name}_destructor`,  { returnType: null, isVariadic: false, params: [] });
            for (const m of concreteClass.methods || [])
                functionReturnTypes.set(`${t.name}_${m.name}`, { returnType: m.returnType, isVariadic: false, params: m.params });
        } else {
            templateDefs.set(t.name, t);
        }
    }

    // Register bitfield types — stored as their integer container (i8/i16/i32/i64)
    for (const bf of ast.bitfields || []) bitfieldTypes.set(bf.name, bf);

    // Register regular struct and class types first (monomorphization may reference them)
    for (const s of ast.structs  || []) registerStruct(s.name, s.fields);
    for (const c of ast.classes  || []) registerClass(c.name, c.fields, c.methods, c.operators);

    // Scan all type usages and instantiate every template type found
    for (const typeStr of collectTypeUsages(ast)) instantiateTemplate(typeStr);

    // Register return types for all regular functions
    for (const fn of ast.functions || []) {
        functionReturnTypes.set(fn.name, { returnType: fn.returnType, isVariadic: fn.isVariadic || false, params: fn.params });
    }

    // Register return types for regular class methods (template instances already registered inside instantiateTemplate)
    for (const cls of ast.classes || []) {
        for (const m of cls.methods || []) {
            functionReturnTypes.set(`${cls.name}_${m.name}`, { returnType: m.returnType, isVariadic: false, params: m.params });
        }
        for (const op of cls.operators || []) {
            const ns = operatorNameSafe(op.op);
            functionReturnTypes.set(`${cls.name}_op_${ns}`, { returnType: op.returnType, isVariadic: false, params: [op.param] });
        }
        if (cls.constructor) {
            functionReturnTypes.set(`${cls.name}_constructor`, { returnType: null, isVariadic: false, params: cls.constructor.params });
        }
        if (cls.destructor) {
            functionReturnTypes.set(`${cls.name}_destructor`, { returnType: null, isVariadic: false, params: [] });
        }
    }

    let out     = "; Hopper module\n\n";
    const typeDefs = [];
    const fnCode   = [];

    // Emit struct type definitions
    for (const s of ast.structs || []) {
        const fieldTypes = s.fields.map(f =>
            f.isPad ? `[${f.size} x i8]` : llvmType(f.type)
        ).join(", ");
        typeDefs.push(`%struct.${s.name} = type { ${fieldTypes} }\n`);
    }

    // Emit regular class type definitions + methods
    for (const c of ast.classes || []) {
        emitClassIR(c, typeDefs, fnCode);
    }

    // Emit monomorphized template instances + methods
    for (const c of instantiatedClasses) {
        emitClassIR(c, typeDefs, fnCode);
    }

    if (typeDefs.length > 0) out += typeDefs.join("") + "\n";

    // Runtime heap declarations — backing allocate/deallocate directives
    out += `declare i8* @malloc(i64)\n`;
    out += `declare void @free(i8*)\n\n`;

    // Constants are compile-time substitutions only — no LLVM globals emitted

    // Register strict MMIO bindings for load/store codegen
    for (const v of ast.stricts || []) {
        const hType  = normalizeType(v.type);
        const llType = llvmType(hType);
        const addr   = String(parseInt(v.hardwareAddress, 16));
        mmioBindings.set(v.name, { hType, llType, addr });
    }

    // Emit vector bind globals (function-pointer globals for vector table placement)
    const bindGlobals = (ast.binds || []).map(b => genBind(b));
    if (bindGlobals.length > 0) out += bindGlobals.join("\n") + "\n\n";

    for (const fn of ast.functions) {
        if (fn.isExtern) {
            const ret    = fn.returnType === null ? "void" : llvmType(fn.returnType);
            const params = fn.params.map(p => llvmType(p.type)).join(", ");
            const vararg = fn.isVariadic ? (params ? ", ..." : "...") : "";
            fnCode.push(`declare ${ret} @${fn.name}(${params}${vararg})\n`);
        } else {
            fnCode.push(genFunction(fn) + "\n\n");
        }
    }

    // Generate entry before emitting string constants so it contributes to the pool
    if (ast.entry) fnCode.push(genEntry(ast.entry) + "\n\n");

    // Emit string constants (collected during all code generation above)
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
