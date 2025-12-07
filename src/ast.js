// Simple Hopper v0 AST node builders

export function Program(functions) {
    return { kind: "Program", functions };
}

export function FunctionDecl(name, params, returnType, body, isExtern = false) {
    return { kind: "FunctionDecl", name, params, returnType, body, isExtern };
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

export function IfStmt(cond, thenBlock, elseBlock) {
    return { kind: "IfStmt", cond, thenBlock, elseBlock };
}

export function WhileStmt(cond, body) {
    return { kind: "WhileStmt", cond, body };
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

export function IntLiteral(value) {
    return { kind: "IntLiteral", value };
}

export function BoolLiteral(value) {
    return { kind: "BoolLiteral", value };
}
