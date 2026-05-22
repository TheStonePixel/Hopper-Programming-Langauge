// ── module-level registries ────────────────────────────────────────────────

export const stringConstants    = new Map();   // raw value  → @.str.N
export const structTypes        = new Map();   // name       → { fields: [{name,type,isPad,size}] }
export const classTypes         = new Map();   // name       → { fields: [{name,type}], methods, operators }
export const interfaceDefs      = new Map();   // name       → { methods: [{name, params, returnType}] }
export const typeAliases        = new Map();   // alias name → target type string
export const functionReturnTypes = new Map();  // function name → { returnType, isVariadic, params }
export const overloadGroups     = new Map();   // baseName → [{mangledName, params, returnType}]
export const templateDefs       = new Map();   // template name → TemplateDecl
export const templateInstances  = new Set();   // mangled names from monomorphization — fields are public
export const mmioBindings       = new Map();   // name → { hType, llType, address (decimal) }
export const bitfieldTypes      = new Map();   // name → BitfieldDecl
export const enumTypes          = new Map();   // enum name → Map(variantName → int value)
export const templateFuncRegistry = new Map(); // funcName → [{typeParam, paramTypes, mangledName, returnType, params}]
export let   instantiatedClasses = [];         // concrete ClassDecl nodes produced by monomorphization
export let   stringCounter = 0;
export let   wordBits = 64;                    // native integer width: 64 for x86-64, 32 for ARM32
export let   contractsUsed = false;            // true when any requires/ensures/invariant/constrain is present
export let   releaseMode   = false;            // --release: skip all contract IR emission

export function resetAll() {
    stringConstants.clear();
    structTypes.clear();
    classTypes.clear();
    interfaceDefs.clear();
    typeAliases.clear();
    functionReturnTypes.clear();
    overloadGroups.clear();
    templateDefs.clear();
    templateInstances.clear();
    templateFuncRegistry.clear();
    mmioBindings.clear();
    bitfieldTypes.clear();
    enumTypes.clear();
    instantiatedClasses = [];
    stringCounter = 0;
    wordBits = 64;
    contractsUsed = false;
    releaseMode   = false;
}

export function setInstantiatedClasses(arr) { instantiatedClasses = arr; }
export function pushInstantiatedClass(cls)  { instantiatedClasses.push(cls); }
export function setWordBits(n)              { wordBits = n; }
export function setReleaseMode(v)           { releaseMode = v; }
export function setContractsUsed(v)         { contractsUsed = v; }
export function incStringCounter()          { return stringCounter++; }

export function addStringConstant(value) {
    if (!stringConstants.has(value)) stringConstants.set(value, `@.str.${stringCounter++}`);
    return stringConstants.get(value);
}

export function registerStruct(name, fields) {
    structTypes.set(name, { fields });
}

export function registerClass(name, fields, methods, operators) {
    classTypes.set(name, { fields, methods, operators });
}
