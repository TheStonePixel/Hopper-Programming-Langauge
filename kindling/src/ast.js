// Hopper AST node builders

export function Program(functions, structs = [], classes = [], consts = [], aliases = [], templates = [], entry = null, binds = [], stricts = [], bitfields = [], interfaces = [], enums = []) {
    return { kind: "Program", functions, structs, classes, consts, aliases, templates, entry, binds, stricts, bitfields, interfaces, enums };
}

// bind — linker directive: place function pointer at hardware address
// bind 0x00000004 = reset::address
export function BindDecl(hardwareAddress, functionName) {
    return { kind: "BindDecl", hardwareAddress, functionName };
}

// strict — named alias for a memory-mapped hardware register
// strict int uart_dr = 0x40021000
export function StrictDecl(type, name, hardwareAddress) {
    return { kind: "StrictDecl", type, name, hardwareAddress };
}

// entry — the program entry point (not a function, a jump target)
// body: Block for inline form, null for address form
// address: expression for address form, null for inline form
export function EntryDecl(name, body = null, address = null, params = []) {
    return { kind: "EntryDecl", name, body, address, params };
}

export function FunctionDecl(name, params, returnType, body, isExtern = false, isVariadic = false) {
    return { kind: "FunctionDecl", name, params, returnType, body, isExtern, isVariadic };
}

// struct = memory layout only, no methods, no default values
export function StructDecl(name, fields) {
    return { kind: "StructDecl", name, fields };
}

export function StructField(name, type) {
    return { kind: "StructField", name, type };
}

// pad N inside a struct — explicit reserved bytes
export function StructPad(size) {
    return { kind: "StructPad", isPad: true, size };
}

// bitfield = bit-level layout, fields packed sequentially from LSB
// Each field has: name, type (bit/byte/int/etc.), count (1 for scalars, N for arrays)
// bit width = typeSize(type) * 8 * count
export function BitfieldDecl(name, fields) {
    return { kind: "BitfieldDecl", name, fields };
}

export function BitfieldField(name, type, count = 1) {
    return { kind: "BitfieldField", name, type, count };
}

export function BitfieldPad(bits) {
    return { kind: "BitfieldPad", isPad: true, bits };
}

// interface = compile-time method contract
export function InterfaceDecl(name, methods) {
    return { kind: "InterfaceDecl", name, methods };
}

export function InterfaceMethod(name, params, returnType) {
    return { kind: "InterfaceMethod", name, params, returnType };
}

// class = data + behavior, compiler-optimized layout
// interfaces: list of interface names the class declares conformance to
export function ClassDecl(name, fields, methods, operators, constructor = null, destructor = null, interfaces = []) {
    return { kind: "ClassDecl", name, fields, methods, operators, constructor, destructor, interfaces };
}

export function ClassField(name, type) {
    return { kind: "ClassField", name, type };
}

export function ClassMethod(name, params, returnType, body) {
    return { kind: "ClassMethod", name, params, returnType, body };
}

export function ClassOperator(op, param, returnType, body, params = []) {
    return { kind: "ClassOperator", op, param, returnType, body, params };
}

export function ClassConstructor(params, body) {
    return { kind: "ClassConstructor", params, body };
}

export function ClassDestructor(body) {
    return { kind: "ClassDestructor", body };
}

// top-level constant: const NAME = literal
export function ConstDecl(name, value, type) {
    return { kind: "ConstDecl", name, value, type };
}

// enum — named integer type with compile-time variants
// variants: [{ name, value }]  (values assigned sequentially, or explicit)
export function EnumDecl(name, variants) {
    return { kind: "EnumDecl", name, variants };
}

// template = parameterized class, monomorphized per instantiation
// typeParams  — free variable names (e.g. ["T", "K"]) — require <> at use site
// fixedParams — concrete primitive types (e.g. ["byte"]) — no <> at use site
// isFixed     — true when all params are concrete; name becomes a standalone type
export function TemplateDecl(name, typeParams, fixedParams, fields, methods, operators, constructor = null, destructor = null) {
    const isFixed = typeParams.length === 0 && fixedParams.length > 0;
    return { kind: "TemplateDecl", name, typeParams, fixedParams, isFixed, fields, methods, operators, constructor, destructor };
}

// alias declaration: alias Name = type
export function AliasDecl(name, targetType) {
    return { kind: "AliasDecl", name, targetType };
}

export function ExprStmt(expr) {
    return { kind: "ExprStmt", expr };
}

export function Call(callee, args = []) {
    return { kind: "Call", callee, args };
}

export function Param(name, type) {
    return { kind: "Param", name, type };
}

export function VarDecl(name, type, init) {
    return { kind: "VarDecl", name, type, init };
}

export function Assign(name, expr) {
    return { kind: "Assign", name, expr };
}

export function FieldAssign(object, field, expr) {
    return { kind: "FieldAssign", object, field, expr };
}

export function IfStmt(cond, thenBlock, elseBlock) {
    return { kind: "IfStmt", cond, thenBlock, elseBlock };
}

export function WhileStmt(cond, body) {
    return { kind: "WhileStmt", cond, body };
}

export function ForStmt(init, cond, update, body) {
    return { kind: "ForStmt", init, cond, update, body };
}

export function BreakStmt() {
    return { kind: "BreakStmt" };
}

export function ContinueStmt() {
    return { kind: "ContinueStmt" };
}

export function ReturnStmt(expr) {
    return { kind: "ReturnStmt", expr };
}

export function DeferStmt(expr) {
    return { kind: "DeferStmt", expr };
}

export function AllocateExpr(sizeExpr) {
    return { kind: "AllocateExpr", sizeExpr };
}

export function DeallocateStmt(expr) {
    return { kind: "DeallocateStmt", expr };
}

export function Block(statements) {
    return { kind: "Block", statements };
}

// Expressions
export function Binary(op, left, right) {
    return { kind: "Binary", op, left, right };
}

export function Unary(op, expr) {
    return { kind: "Unary", op, expr };
}

export function CastExpr(expr) {
    return { kind: "CastExpr", expr };
}

export function Var(name) {
    return { kind: "Var", name };
}

export function FieldAccess(object, field) {
    return { kind: "FieldAccess", object, field };
}

export function MethodCall(object, method, args = []) {
    return { kind: "MethodCall", object, method, args };
}

export function IntLiteral(value) {
    return { kind: "IntLiteral", value };
}

export function HexLiteral(value) {
    // value stored as a JS number (already parsed from hex string)
    return { kind: "HexLiteral", value };
}

export function FloatLiteral(value) {
    // value stored as a JS number
    return { kind: "FloatLiteral", value };
}

export function BoolLiteral(value) {
    return { kind: "BoolLiteral", value };
}

export function StringLiteral(value) {
    return { kind: "StringLiteral", value };
}


export function NullLiteral() {
    return { kind: "NullLiteral" };
}

// Compile-time size: a::size
export function SizeOf(name) {
    return { kind: "SizeOf", name };
}

// Address operations
export function AddressOf(name) {
    return { kind: "AddressOf", name };
}

export function Deref(name) {
    return { kind: "Deref", name };
}

export function DerefAssign(name, expr) {
    return { kind: "DerefAssign", name, expr };
}

// Array operations
export function ArrayDecl(type, name, size) {
    return { kind: "ArrayDecl", type, name, size };
}

export function ArrayDeclInit(type, name, size, elements) {
    return { kind: "ArrayDeclInit", type, name, size, elements };
}

export function AsmStmt(lines) {
    return { kind: "AsmStmt", lines };
}
// AsmStmt line kinds:
// { kind: "AsmLineAssign", dest: string, src: AstNode } — reg=value (input) or var=reg (output)
// { kind: "AsmLineOp", op: string }                     — instruction (syscall, hlt, etc.)

export function ArrayAccess(name, index) {
    return { kind: "ArrayAccess", name, index };
}

export function ArrayAssign(name, index, expr) {
    return { kind: "ArrayAssign", name, index, expr };
}

export function ArrayElementAddress(name, index) {
    return { kind: "ArrayElementAddress", name, index };
}

// obj.field.method(args)  — method call on a class field
export function ChainedMethodCall(object, field, method, args = []) {
    return { kind: "ChainedMethodCall", object, field, method, args };
}

// obj.field[i]  — subscript on a class field
export function FieldIndexAccess(object, field, index) {
    return { kind: "FieldIndexAccess", object, field, index };
}

// obj.outerField.innerField = expr  — assign to a field of a field
export function NestedFieldAssign(object, outerField, innerField, expr) {
    return { kind: "NestedFieldAssign", object, outerField, innerField, expr };
}
