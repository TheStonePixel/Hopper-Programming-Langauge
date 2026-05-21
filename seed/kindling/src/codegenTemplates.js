import {
    classTypes, templateDefs, templateInstances, functionReturnTypes,
    registerClass, pushInstantiatedClass,
} from "./codegenState.js";
import {
    mangleTemplate, normalizeType, splitTypeArgs, substTypeStr,
    operatorNameSafe,
} from "./codegenTypes.js";

export function substBlock(block, subst) {
    if (!block) return null;
    return { ...block, statements: block.statements.map(s => substStmt(s, subst)) };
}

export function substExpr(e, subst) {
    if (!e) return null;
    switch (e.kind) {
        case "SizeOf":         return { ...e, name: substTypeStr(e.name, subst) };
        case "Binary":         return { ...e, left: substExpr(e.left, subst), right: substExpr(e.right, subst) };
        case "Unary":          return { ...e, expr: substExpr(e.expr, subst) };
        case "AllocateExpr":   return { ...e, sizeExpr: substExpr(e.sizeExpr, subst) };
        case "DeallocateStmt": return { ...e, expr: substExpr(e.expr, subst) };
        default:               return e;
    }
}

export function substStmt(s, subst) {
    if (!s) return null;
    switch (s.kind) {
        case "VarDecl":           return { ...s, type: substTypeStr(s.type, subst), init: substExpr(s.init, subst) };
        case "ArrayDecl":         return { ...s, type: substTypeStr(s.type, subst) };
        case "ArrayDeclInit":     return { ...s, type: substTypeStr(s.type, subst) };
        case "IfStmt":            return { ...s, thenBlock: substBlock(s.thenBlock, subst), elseBlock: s.elseBlock ? substBlock(s.elseBlock, subst) : null };
        case "WhileStmt":         return { ...s, body: substBlock(s.body, subst) };
        case "ForStmt":           return { ...s, init: substStmt(s.init, subst), body: substBlock(s.body, subst) };
        case "DeallocateStmt":    return { ...s, expr: substExpr(s.expr, subst) };
        case "ExprStmt":          return { ...s, expr: substExpr(s.expr, subst) };
        case "ReturnStmt":        return { ...s, expr: substExpr(s.expr, subst) };
        case "FieldAssign":       return { ...s, expr: substExpr(s.expr, subst) };
        case "NestedFieldAssign": return { ...s, expr: substExpr(s.expr, subst) };
        case "Assign":            return { ...s, expr: substExpr(s.expr, subst) };
        case "DerefAssign":       return { ...s, expr: substExpr(s.expr, subst) };
        default: return s;
    }
}

export function substParam(p, subst) {
    return { ...p, type: substTypeStr(p.type, subst) };
}

export function monomorphize(tmpl, typeArgs) {
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
            param:      op.param ? substParam(op.param, subst) : null,
            params:     (op.params || []).map(p => substParam(p, subst)),
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

export function instantiateTemplate(typeStr) {
    const mangled = mangleTemplate(typeStr);
    if (classTypes.has(mangled)) return;

    const match = typeStr.match(/^([a-zA-Z_][a-zA-Z0-9_]*)<(.+)>$/);
    if (!match) return;
    const [, baseName, argsStr] = match;

    if (!templateDefs.has(baseName)) throw new Error(`Unknown template: '${baseName}' (used as '${typeStr}')`);

    const typeArgs      = splitTypeArgs(argsStr);
    const tmpl          = templateDefs.get(baseName);
    const concreteClass = monomorphize(tmpl, typeArgs);

    registerClass(concreteClass.name, concreteClass.fields, concreteClass.methods, concreteClass.operators);
    templateInstances.add(concreteClass.name);
    pushInstantiatedClass(concreteClass);

    for (const m of concreteClass.methods || []) {
        functionReturnTypes.set(`${concreteClass.name}_${m.name}`, {
            returnType: m.returnType, isVariadic: false, params: m.params
        });
    }
    for (const op of concreteClass.operators || []) {
        const ns = operatorNameSafe(op.op);
        const opParams = op.params && op.params.length > 0 ? op.params : (op.param ? [op.param] : []);
        functionReturnTypes.set(`${concreteClass.name}_op_${ns}`, {
            returnType: op.returnType, isVariadic: false, params: opParams
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

    for (const f of concreteClass.fields) {
        if (f.type && f.type.includes('<')) instantiateTemplate(f.type);
    }
    for (const m of concreteClass.methods || []) {
        if (m.returnType && m.returnType.includes('<')) instantiateTemplate(m.returnType);
        for (const p of m.params) if (p.type && p.type.includes('<')) instantiateTemplate(p.type);
    }
}

export function collectTypeUsages(ast) {
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
