// Simple Hopper v0 AST node builders

export function Program(functions, structs = []) {
    return { kind: "Program", functions, structs };
}

export function FunctionDecl(name, params, returnType, body, isExtern = false) {
    return { kind: "FunctionDecl", name, params, returnType, body, isExtern };
}

export function StructDecl(name, fields, methods = []) {
    return { kind: "StructDecl", name, fields, methods };
}

export function StructField(name, type) {
    return { kind: "StructField", name, type };
}

export function StructMethod(name, params, returnType, body) {
    // Method inside a struct - will get implicit self parameter
    return { kind: "StructMethod", name, params, returnType, body };
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

export function Var(name) {
    return { kind: "Var", name };
}

export function FieldAccess(object, field) {
    return { kind: "FieldAccess", object, field };
}

export function MethodCall(object, method, args = []) {
    // obj.method(args) - transformed to StructName_method(obj::address, args)
    return { kind: "MethodCall", object, method, args };
}

export function IntLiteral(value) {
    return { kind: "IntLiteral", value };
}

export function BoolLiteral(value) {
    return { kind: "BoolLiteral", value };
}

export function StringLiteral(value) {
    return { kind: "StringLiteral", value };
}

export function CharLiteral(value) {
    // Store as int (ASCII/Unicode code point)
    return { kind: "CharLiteral", value };
}

export function NullLiteral() {
    return { kind: "NullLiteral" };
}

// Address operations
export function AddressOf(name) {
    // x::address - get address of variable
    return { kind: "AddressOf", name };
}

export function Deref(name) {
    // p::value - read through address (only on identifiers, no chaining)
    return { kind: "Deref", name };
}

export function DerefAssign(name, expr) {
    // p::value = x - write through address
    return { kind: "DerefAssign", name, expr };
}

export function Allocate(type, count) {
    // allocate int(10) - heap allocation
    return { kind: "Allocate", type, count };
}

export function Deallocate(expr) {
    // deallocate p - free heap memory
    return { kind: "Deallocate", expr };
}

// Array operations
export function ArrayDecl(type, name, size) {
    // int buffer[10] - fixed-size array declaration
    return { kind: "ArrayDecl", type, name, size };
}

export function ArrayAccess(name, index) {
    // buffer[i] - read array element
    return { kind: "ArrayAccess", name, index };
}

export function ArrayAssign(name, index, expr) {
    // buffer[i] = value - write array element
    return { kind: "ArrayAssign", name, index, expr };
}

export function ArrayElementAddress(name, index) {
    // buffer[i]::address - get address of array element
    return { kind: "ArrayElementAddress", name, index };
}
