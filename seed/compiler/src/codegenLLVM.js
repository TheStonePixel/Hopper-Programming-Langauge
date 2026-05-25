import { buildAstFromSource } from "./astBuilder.js";
import { strictAnalyze } from "./codegenConstraints.js";
import {
    stringConstants,
    classTypes, structTypes, interfaceDefs, typeAliases,
    functionReturnTypes, overloadGroups, templateDefs, instantiatedClasses,
    mmioBindings, bitfieldTypes, enumTypes, templateFuncRegistry,
    resetAll, registerStruct, registerClass,
    setWordBits, setReleaseMode,
    pushInstantiatedClass,
} from "./codegenState.js";
import {
    llvmType, normalizeType, operatorNameSafe,
    mangledFnName, overloadTypeMatch,
} from "./codegenTypes.js";
import {
    instantiateTemplate, collectTypeUsages, monomorphize,
} from "./codegenTemplates.js";
import {
    stringByteLen, escapeStringForLLVM,
} from "./codegenExpr.js";
import {
    checkImplements, genFunction, genMethod, genOperator,
    genBind, genEntry, emitClassIR,
} from "./codegenDecl.js";

// ── module codegen ────────────────────────────────────────────────────────

export function genModule(ast, opts = {}) {
    const { target = "host", release = false, strict = false } = opts;
    resetAll();
    setReleaseMode(release);
    if (target === "armv6-bare") setWordBits(32);
    if (strict) strictAnalyze(ast);

    // Interfaces — registered before classes so implements checking can find them
    for (const iface of ast.interfaces || []) {
        interfaceDefs.set(iface.name, { methods: iface.methods, enums: iface.enums || [] });
        // Expose interface-level enums into the module scope
        for (const en of iface.enums || []) {
            const variants = new Map();
            for (const v of en.variants) variants.set(v.name, { value: v.value, kind: v.kind || "int" });
            enumTypes.set(en.name, { variants, enumKind: en.enumKind || "int" });
        }
    }

    // Aliases
    for (const a of ast.aliases || []) typeAliases.set(a.name, a.targetType);

    // Register template definitions.
    // Fixed templates (all params are concrete types) are monomorphized immediately
    // using the mangled name (e.g. Array<int> → Array_int) so that usage sites that
    // write Array<int> normalize to the same mangled key and find the class type.
    for (const t of ast.templates || []) {
        if (t.isFixed) {
            const concreteClass = monomorphize(t, t.fixedParams);
            const cName = concreteClass.name;  // mangled: e.g. "Array_int"
            registerClass(cName, concreteClass.fields, concreteClass.methods, concreteClass.operators);
            pushInstantiatedClass(concreteClass);
            if (concreteClass.constructor) functionReturnTypes.set(`${cName}_constructor`, { returnType: null, isVariadic: false, params: concreteClass.constructor.params || [] });
            if (concreteClass.destructor)  functionReturnTypes.set(`${cName}_destructor`,  { returnType: null, isVariadic: false, params: [] });
            for (const m of concreteClass.methods || [])
                functionReturnTypes.set(`${cName}_${m.name}`, { returnType: m.returnType, isVariadic: false, params: m.params });
        } else {
            templateDefs.set(t.name, t);
        }
    }

    // Register bitfield types — stored as their integer container (i8/i16/i32/i64)
    for (const bf of ast.bitfields || []) bitfieldTypes.set(bf.name, bf);

    for (const en of ast.enums || []) {
        const variants = new Map();
        for (const v of en.variants) variants.set(v.name, { value: v.value, kind: v.kind || "int" });
        enumTypes.set(en.name, { variants, enumKind: en.enumKind || "int" });
    }

    // Register regular struct and class types first (monomorphization may reference them)
    for (const s of ast.structs  || []) registerStruct(s.name, s.fields);
    for (const c of ast.classes  || []) registerClass(c.name, c.fields, c.methods, c.operators);

    // Verify interface conformance for all classes that declare 'implements'
    for (const c of ast.classes || []) checkImplements(c);

    // Scan all type usages and instantiate every template type found
    for (const typeStr of collectTypeUsages(ast)) instantiateTemplate(typeStr);

    // Detect overloaded functions — same name, potentially different param types.
    const fnNameCount = new Map();
    for (const fn of ast.functions || []) {
        if (!fn.isExtern) fnNameCount.set(fn.name, (fnNameCount.get(fn.name) || 0) + 1);
    }

    // Build overload groups; attach mangled LLVM names to overloaded fn nodes.
    for (const fn of ast.functions || []) {
        if (fn.isExtern || fnNameCount.get(fn.name) <= 1) continue;
        const mangled = mangledFnName(fn.name, fn.params);
        if (!overloadGroups.has(fn.name)) overloadGroups.set(fn.name, []);
        const group = overloadGroups.get(fn.name);
        // Skip same-signature duplicates (e.g. gettid defined in sys.hop and thread.hop).
        if (group.find(ov => ov.mangledName === mangled)) { fn._skip = true; continue; }
        fn._mangledName = mangled;
        group.push({ mangledName: mangled, params: fn.params, returnType: fn.returnType });
        functionReturnTypes.set(mangled, { returnType: fn.returnType, isVariadic: false, params: fn.params });
    }

    // Register return types: extern functions always by plain name; non-overloaded regular
    // functions by plain name; overloaded functions already registered under mangled names.
    for (const fn of ast.functions || []) {
        if (fn._mangledName || fn._skip) continue;
        functionReturnTypes.set(fn.name, { returnType: fn.returnType, isVariadic: fn.isVariadic || false, params: fn.params });
    }

    // Register return types for regular class methods
    for (const cls of ast.classes || []) {
        for (const m of cls.methods || []) {
            functionReturnTypes.set(`${cls.name}_${m.name}`, { returnType: m.returnType, isVariadic: false, params: m.params });
        }
        for (const op of cls.operators || []) {
            const ns = operatorNameSafe(op.op);
            functionReturnTypes.set(`${cls.name}_op_${ns}`, { returnType: op.returnType, isVariadic: false, params: op.param ? [op.param] : [] });
        }
        if (cls.constructor) {
            functionReturnTypes.set(`${cls.name}_constructor`, { returnType: null, isVariadic: false, params: cls.constructor.params });
        }
        if (cls.destructor) {
            functionReturnTypes.set(`${cls.name}_destructor`, { returnType: null, isVariadic: false, params: [] });
        }
    }

    let out = "; Hopper module\n\n";

    // Bare-metal ARM32 target header — pointers and int are 32-bit
    if (target === "armv6-bare") {
        out += `target datalayout = "e-m:e-p:32:32-i64:64-v128:64:128-a:0:32-n32-S64"\n`;
        out += `target triple = "armv6-none-eabi"\n\n`;
    }

    const typeDefs = [];
    const fnCode   = [];

    // Register strict MMIO bindings BEFORE any class or function bodies are emitted —
    // methods may reference MMIO variables, so bindings must exist when codegen runs.
    for (const v of ast.stricts || []) {
        const hType  = normalizeType(v.type);
        const llType = llvmType(hType);
        const addr    = String(parseInt(v.hardwareAddress, 16));
        const hexAddr = v.hardwareAddress;
        mmioBindings.set(v.name, { hType, llType, addr, hexAddr });
    }

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

    // Runtime heap declarations — only for hosted targets (bare-metal provides no libc)
    if (target !== "armv6-bare") {
        out += `declare i8* @malloc(i64)\n`;
        out += `declare void @free(i8*)\n`;
        if (!release) out += `declare void @abort()\n`;
        out += `\n`;
    }

    // Emit vector bind globals (function-pointer globals for vector table placement)
    const bindGlobals = (ast.binds || []).map(b => genBind(b));
    if (bindGlobals.length > 0) out += bindGlobals.join("\n") + "\n\n";

    // Build a set of names that have a concrete (non-extern) body — used to suppress
    // forward-declaration `declare` stubs when the real definition also exists in this TU.
    const definedFnNames = new Set(
        (ast.functions || []).filter(fn => !fn.isExtern && !fn._skip).map(fn => fn.name)
    );

    const emittedExterns = new Set();
    for (const fn of ast.functions) {
        if (fn.isExtern) {
            if (emittedExterns.has(fn.name)) continue;
            // If a concrete definition exists in this TU, skip the declare — the define
            // acts as its own forward reference in LLVM IR.
            if (definedFnNames.has(fn.name)) continue;
            emittedExterns.add(fn.name);
            const ret    = fn.returnType === null ? "void" : llvmType(fn.returnType);
            const params = fn.params.map(p => llvmType(p.type)).join(", ");
            const vararg = fn.isVariadic ? (params ? ", ..." : "...") : "";
            fnCode.push(`declare ${ret} @${fn.name}(${params}${vararg})\n`);
        } else if (!fn._skip) {
            fnCode.push(genFunction(fn) + "\n\n");
        }
    }

    // Register and emit template function specializations
    for (const tf of ast.templateFunctions || []) {
        const paramTypes = (tf.params || []).map(p => normalizeType(p.type));
        const mangledName = `__tmpl_${tf.name}__${normalizeType(tf.typeParam)}__${paramTypes.join('__')}`;
        tf._mangledName = mangledName;
        functionReturnTypes.set(mangledName, { returnType: tf.returnType, isVariadic: false, params: tf.params || [] });
        if (!templateFuncRegistry.has(tf.name)) templateFuncRegistry.set(tf.name, []);
        templateFuncRegistry.get(tf.name).push({
            typeParam: normalizeType(tf.typeParam),
            paramTypes,
            mangledName,
            returnType: tf.returnType,
            params: tf.params || [],
        });
        // Emit as a regular function under the mangled name
        const saved = tf.name;
        tf.name = mangledName;
        fnCode.push(genFunction(tf) + "\n\n");
        tf.name = saved;
    }

    // Generate entry before emitting string constants so it contributes to the pool
    if (ast.entry) fnCode.push(genEntry(ast.entry) + "\n\n");

    // Emit string constants (collected during all code generation above)
    for (const [value, name] of stringConstants) {
        const escaped = escapeStringForLLVM(value);
        const len     = stringByteLen(value) + 1;
        out += `${name} = private unnamed_addr constant [${len} x i8] c"${escaped}\\00"\n`;
    }
    if (stringConstants.size > 0) out += "\n";

    out += fnCode.join("");
    return out;
}
