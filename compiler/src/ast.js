// Hopper AST node builders

export function Program(functions, structs = [], classes = [], consts = [], aliases = []) {
    return { kind: "Program", functions, structs, classes, consts, aliases };
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

// class = data + behavior, compiler-optimized layout
export function ClassDecl(name, fields, methods, operators, constructor = null, destructor = null) {
    return { kind: "ClassDecl", name, fields, methods, operators, constructor, destructor };
}

export function ClassField(name, type) {
    return { kind: "ClassField", name, type };
}

export function ClassMethod(name, params, returnType, body) {
    return { kind: "ClassMethod", name, params, returnType, body };
}

export function ClassOperator(op, param, returnType, body) {
    return { kind: "ClassOperator", op, param, returnType, body };
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

export function CharLiteral(value) {
    // Stored as int (ASCII code point)
    return { kind: "CharLiteral", value };
}

export function NullLiteral() {
    return { kind: "NullLiteral" };
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

export function ArrayAccess(name, index) {
    return { kind: "ArrayAccess", name, index };
}

export function ArrayAssign(name, index, expr) {
    return { kind: "ArrayAssign", name, index, expr };
}

export function ArrayElementAddress(name, index) {
    return { kind: "ArrayElementAddress", name, index };
}
