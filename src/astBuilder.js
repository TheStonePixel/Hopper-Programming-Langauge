import antlr4 from "antlr4";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const STDLIB_DIR = path.resolve(__dirname, "..", "stdlib");

import HopperLexer from "./generated/grammar/HopperLexer.js";
import HopperParser from "./generated/grammar/HopperParser.js";
import HopperVisitor from "./generated/grammar/HopperVisitor.js";
import {
    Program,
    FunctionDecl,
    StructDecl,
    StructField,
    StructMethod,
    Param,
    Call,
    MethodCall,
    VarDecl,
    Assign,
    FieldAssign,
    IfStmt,
    WhileStmt,
    ForStmt,
    BreakStmt,
    ContinueStmt,
    ReturnStmt,
    ExprStmt,
    Block,
    Binary,
    Unary,
    Var,
    FieldAccess,
    IntLiteral,
    BoolLiteral,
    StringLiteral,
    CharLiteral,
    NullLiteral,
    AddressOf,
    Deref,
    DerefAssign,
    Allocate,
    Deallocate,
    ArrayDecl,
    ArrayAccess,
    ArrayAssign,
    ArrayElementAddress,
} from "./ast.js";

export class AstBuilder extends HopperVisitor {
    visitProgram(ctx) {
        const functions = [];
        const structs = [];

        for (const decl of ctx.topLevelDecl()) {
            const node = this.visit(decl);
            if (node.kind === "FunctionDecl") {
                functions.push(node);
            } else if (node.kind === "StructDecl") {
                structs.push(node);
            }
        }

        return Program(functions, structs);
    }

    visitTopLevelDecl(ctx) {
        // Visit the child (either functionDecl or structDecl)
        return this.visit(ctx.children[0]);
    }

    visitStructDecl(ctx) {
        const name = ctx.Identifier().getText();
        const fields = [];
        const methods = [];

        // Iterate through struct members (fields and methods)
        const members = ctx.structMember ? ctx.structMember() : [];
        for (const member of members) {
            const fieldCtx = member.structField ? member.structField() : null;
            const methodCtx = member.structMethod ? member.structMethod() : null;

            if (fieldCtx) {
                const fieldType = fieldCtx.type().getText();
                const fieldName = fieldCtx.Identifier().getText();
                fields.push(StructField(fieldName, fieldType));
            } else if (methodCtx) {
                const methodName = methodCtx.Identifier().getText();
                const returnType = methodCtx.type().getText();
                const params = methodCtx.paramList()
                    ? methodCtx.paramList().param().map(p => {
                          const type = p.type().getText();
                          const pName = p.Identifier().getText();
                          return Param(pName, type);
                      })
                    : [];
                const body = this.visit(methodCtx.block());
                methods.push(StructMethod(methodName, params, returnType, body));
            }
        }

        return StructDecl(name, fields, methods);
    }

    visitExprStmt(ctx) {
        const e = this.visit(ctx.expression());
        return ExprStmt(e);
    }

    // expression : logicalOr ;
    visitExpression(ctx) {
        return this.visit(ctx.logicalOr());
    }

    visitFuncDecl(ctx) {
        const name = ctx.Identifier().getText();
        const returnType = ctx.type().getText();

        const params = ctx.paramList()
            ? ctx
                  .paramList()
                  .param()
                  .map(p => {
                      const type = p.type().getText();
                      const name = p.Identifier().getText();
                      return Param(name, type);
                  })
            : [];

        const body = this.visit(ctx.block());
        return FunctionDecl(name, params, returnType, body, false);
    }

    visitExternFuncDecl(ctx) {
        const name = ctx.Identifier().getText();
        const returnType = ctx.type().getText();

        const params = ctx.paramList()
            ? ctx
                  .paramList()
                  .param()
                  .map(p => {
                      const type = p.type().getText();
                      const name = p.Identifier().getText();
                      return Param(name, type);
                  })
            : [];

        // no body, just a declaration
        return FunctionDecl(name, params, returnType, null, true);
    }

    // block : '{' statement* '}' ;
    visitBlock(ctx) {
        const statements = ctx.statement().map(s => this.visit(s));
        return Block(statements);
    }

    // Labeled alternatives in grammar:
    // statement: ... #VarDecl | ... #Assign | ... #IfStmt | ... #WhileStmt | ... #ReturnStmt

    visitVarDecl(ctx) {
        const name = ctx.Identifier().getText();
        const type = ctx.type().getText();
        const initExpr = this.visit(ctx.expression());
        return VarDecl(name, type, initExpr);
    }

    visitVarDeclNoInit(ctx) {
        const name = ctx.Identifier().getText();
        const type = ctx.type().getText();
        return VarDecl(name, type, null);
    }

    visitAssign(ctx) {
        const name = ctx.Identifier().getText();
        const expr = this.visit(ctx.expression());
        return Assign(name, expr);
    }

    visitFieldAssign(ctx) {
        const object = ctx.Identifier(0).getText();
        const field = ctx.Identifier(1).getText();
        const expr = this.visit(ctx.expression());
        return FieldAssign(object, field, expr);
    }

    visitDerefAssign(ctx) {
        // Identifier '::' 'value' '=' expression
        const name = ctx.Identifier().getText();
        const expr = this.visit(ctx.expression());
        return DerefAssign(name, expr);
    }

    visitDeallocateStmt(ctx) {
        const expr = this.visit(ctx.expression());
        return Deallocate(expr);
    }

    visitArrayDecl(ctx) {
        // type Identifier '[' IntegerLiteral ']'
        const type = ctx.type().getText();
        const name = ctx.Identifier().getText();
        const size = parseInt(ctx.IntegerLiteral().getText(), 10);
        return ArrayDecl(type, name, size);
    }

    visitArrayAssign(ctx) {
        // Identifier '[' expression ']' '=' expression
        const name = ctx.Identifier().getText();
        const exprs = ctx.expression();
        const index = this.visit(exprs[0]);
        const value = this.visit(exprs[1]);
        return ArrayAssign(name, index, value);
    }

    visitIfStmt(ctx) {
        const cond = this.visit(ctx.expression());
        const thenBlock = this.visit(ctx.block(0));
        const elseBlock = ctx.block(1) ? this.visit(ctx.block(1)) : null;
        return IfStmt(cond, thenBlock, elseBlock);
    }

    visitWhileStmt(ctx) {
        const cond = this.visit(ctx.expression());
        const body = this.visit(ctx.block());
        return WhileStmt(cond, body);
    }

    visitForStmt(ctx) {
        // for (init; cond; update) block
        const initCtx = ctx.forInit();
        const condCtx = ctx.expression();
        const updateCtx = ctx.forUpdate();
        const bodyCtx = ctx.block();

        let init = null;
        if (initCtx) {
            init = this.visit(initCtx);
        }

        let cond = null;
        if (condCtx) {
            cond = this.visit(condCtx);
        }

        let update = null;
        if (updateCtx) {
            // forUpdate is just Identifier '=' expression
            const name = updateCtx.Identifier().getText();
            const expr = this.visit(updateCtx.expression());
            update = Assign(name, expr);
        }

        const body = this.visit(bodyCtx);
        return ForStmt(init, cond, update, body);
    }

    visitForInitDecl(ctx) {
        const name = ctx.Identifier().getText();
        const type = ctx.type().getText();
        const initExpr = this.visit(ctx.expression());
        return VarDecl(name, type, initExpr);
    }

    visitForInitAssign(ctx) {
        const name = ctx.Identifier().getText();
        const expr = this.visit(ctx.expression());
        return Assign(name, expr);
    }

    visitBreakStmt(ctx) {
        return BreakStmt();
    }

    visitContinueStmt(ctx) {
        return ContinueStmt();
    }

    visitReturnStmt(ctx) {
        const expr = this.visit(ctx.expression());
        return ReturnStmt(expr);
    }

    // Expressions: we mostly rely on visitChildren and only specialize leaves / structure

    visitPrimary(ctx) {
        // integer literal
        if (ctx.IntegerLiteral) {
            const token = ctx.IntegerLiteral();
            if (token) {
                return IntLiteral(parseInt(token.getText(), 10));
            }
        }

        // string literal: "..."
        if (ctx.StringLiteral) {
            const token = ctx.StringLiteral();
            if (token) {
                // Remove quotes and handle escape sequences
                const raw = token.getText();
                const value = raw.slice(1, -1).replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\r/g, '\r').replace(/\\\\/g, '\\').replace(/\\"/g, '"');
                return StringLiteral(value);
            }
        }

        // char literal: '.' -> just an int
        if (ctx.CharLiteral) {
            const token = ctx.CharLiteral();
            if (token) {
                const raw = token.getText();
                let char = raw.slice(1, -1);
                // Handle escape sequences
                if (char.startsWith('\\')) {
                    switch (char[1]) {
                        case 'n': char = '\n'; break;
                        case 't': char = '\t'; break;
                        case 'r': char = '\r'; break;
                        case '\\': char = '\\'; break;
                        case "'": char = "'"; break;
                        default: char = char[1];
                    }
                }
                return CharLiteral(char.charCodeAt(0));
            }
        }

        // true / false / null
        const text = ctx.getText();
        if (text === "true") return BoolLiteral(true);
        if (text === "false") return BoolLiteral(false);
        if (text === "null") return NullLiteral();

        // Check for :: operator (address/value)
        const children = ctx.children || [];
        const childTexts = children.map(c => c.getText ? c.getText() : String(c));

        // Identifier '[' expression ']' '::' 'address' - array element address
        if (childTexts.includes('[') && childTexts.includes('::') && childTexts.includes('address')) {
            const ids = ctx.Identifier();
            const name = Array.isArray(ids) ? ids[0].getText() : ids.getText();
            const exprs = ctx.expression();
            const index = this.visit(Array.isArray(exprs) ? exprs[0] : exprs);
            return ArrayElementAddress(name, index);
        }

        // Identifier '::' 'address'
        if (childTexts.includes('::') && childTexts.includes('address')) {
            const ids = ctx.Identifier();
            const name = Array.isArray(ids) ? ids[0].getText() : ids.getText();
            return AddressOf(name);
        }

        // Identifier '::' 'value'
        if (childTexts.includes('::') && childTexts.includes('value')) {
            const ids = ctx.Identifier();
            const name = Array.isArray(ids) ? ids[0].getText() : ids.getText();
            return Deref(name);
        }

        // allocate type '(' expression ')'
        if (childTexts[0] === 'allocate') {
            const allocType = ctx.type().getText();
            const countExpr = this.visit(ctx.expression());
            return Allocate(allocType, countExpr);
        }

        // Identifier '[' expression ']' - array access
        if (childTexts.includes('[') && !childTexts.includes('::')) {
            const ids = ctx.Identifier();
            const name = Array.isArray(ids) ? ids[0].getText() : ids.getText();
            const exprs = ctx.expression();
            const index = this.visit(Array.isArray(exprs) ? exprs[0] : exprs);
            return ArrayAccess(name, index);
        }

        // Method call: Identifier '.' Identifier '(' argList? ')'
        // Must check this BEFORE field access and function call
        if (ctx.Identifier && childTexts.includes('.') && childTexts.includes('(')) {
            const ids = ctx.Identifier();
            if (Array.isArray(ids) && ids.length === 2) {
                const object = ids[0].getText();
                const method = ids[1].getText();
                const argListCtx = ctx.argList ? ctx.argList() : null;
                const args = argListCtx ? argListCtx.expression().map(e => this.visit(e)) : [];
                return MethodCall(object, method, args);
            }
        }

        // function call: Identifier '(' argList? ')'
        if (ctx.Identifier && ctx.argList !== undefined) {
            const ids = ctx.Identifier();
            if (Array.isArray(ids) && ids.length === 1 && ctx.getChildCount() > 1) {
                const argListCtx = ctx.argList ? ctx.argList() : null;
                if (argListCtx !== undefined) {
                    const callee = ids[0].getText();
                    const args = argListCtx ? argListCtx.expression().map(e => this.visit(e)) : [];
                    return Call(callee, args);
                }
            }
        }

        // field access: Identifier '.' Identifier (without parentheses)
        if (ctx.Identifier && childTexts.includes('.') && !childTexts.includes('(')) {
            const ids = ctx.Identifier();
            if (Array.isArray(ids) && ids.length === 2) {
                const object = ids[0].getText();
                const field = ids[1].getText();
                return FieldAccess(object, field);
            }
        }

        // plain variable: Identifier
        if (ctx.Identifier) {
            const ids = ctx.Identifier();
            if (Array.isArray(ids) && ids.length === 1) {
                return Var(ids[0].getText());
            } else if (ids && !Array.isArray(ids)) {
                return Var(ids.getText());
            }
        }

        // '(' expression ')'
        if (ctx.expression) {
            const e = ctx.expression();
            if (e) return this.visit(e);
        }

        return null;
    }

    // unary: ('!' | '-') unary | primary ;
    visitUnary(ctx) {
        if (ctx.primary()) return this.visit(ctx.primary());
        const op = ctx.children[0].getText(); // '!' or '-'
        const expr = this.visit(ctx.unary());
        return Unary(op, expr);
    }

    // For binary ops, ANTLR flattens via rules; easiest is to use children manually:

    visitAdditive(ctx) {
        let node = this.visit(ctx.multiplicative(0));
        const ops = ctx.children.filter(c => c.getText() === "+" || c.getText() === "-");
        for (let i = 0; i < ops.length; i++) {
            const right = this.visit(ctx.multiplicative(i + 1));
            node = Binary(ops[i].getText(), node, right);
        }
        return node;
    }

    visitMultiplicative(ctx) {
        let node = this.visit(ctx.unary(0));
        const ops = ctx.children.filter(c => ["*", "/", "%"].includes(c.getText()));
        for (let i = 0; i < ops.length; i++) {
            const right = this.visit(ctx.unary(i + 1));
            node = Binary(ops[i].getText(), node, right);
        }
        return node;
    }

    // similar for equality/relational/logicalAnd/logicalOr:

    visitRelational(ctx) {
        let node = this.visit(ctx.additive(0));
        const ops = ctx.children.filter(c => ["<", "<=", ">", ">="].includes(c.getText()));
        for (let i = 0; i < ops.length; i++) {
            const right = this.visit(ctx.additive(i + 1));
            node = Binary(ops[i].getText(), node, right);
        }
        return node;
    }

    visitEquality(ctx) {
        let node = this.visit(ctx.relational(0));
        const ops = ctx.children.filter(c => ["==", "!="].includes(c.getText()));
        for (let i = 0; i < ops.length; i++) {
            const right = this.visit(ctx.relational(i + 1));
            node = Binary(ops[i].getText(), node, right);
        }
        return node;
    }

    visitLogicalAnd(ctx) {
        let node = this.visit(ctx.equality(0));
        for (let i = 1; i < ctx.equality().length; i++) {
            const right = this.visit(ctx.equality(i));
            node = Binary("&&", node, right);
        }
        return node;
    }

    visitLogicalOr(ctx) {
        let node = this.visit(ctx.logicalAnd(0));
        for (let i = 1; i < ctx.logicalAnd().length; i++) {
            const right = this.visit(ctx.logicalAnd(i));
            node = Binary("||", node, right);
        }
        return node;
    }
}

// Resolve an import path to an absolute file path.
// "stdlib/io" → <project>/stdlib/io.hop
// "./utils"   → relative to baseDir
function resolveImportPath(importPath, baseDir) {
    const withExt = importPath.endsWith(".hop") ? importPath : importPath + ".hop";
    if (importPath.startsWith("stdlib/")) {
        return path.resolve(STDLIB_DIR, withExt.slice("stdlib/".length));
    }
    return path.resolve(baseDir || process.cwd(), withExt);
}

// Helper: source string → AST
// options.baseDir  - directory of the source file (for resolving relative imports)
// options.visited  - Set of absolute paths already imported (circular import guard)
export function buildAstFromSource(source, { baseDir = null, visited = new Set() } = {}) {
    // Pre-process: extract and strip import lines before ANTLR sees them
    const importPaths = [];
    const strippedSource = source.replace(/^[ \t]*import\s+"([^"]+)"[ \t]*$/gm, (_, p) => {
        importPaths.push(p);
        return "";
    });

    const chars = new antlr4.InputStream(strippedSource);
    const lexer = new HopperLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new HopperParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.program();
    const builder = new AstBuilder();
    const ast = builder.visit(tree);

    // Resolve each import, merge its declarations in front of ours
    for (const importPath of importPaths) {
        const resolved = resolveImportPath(importPath, baseDir);
        if (visited.has(resolved)) continue;
        visited.add(resolved);

        const importedSource = fs.readFileSync(resolved, "utf8");
        const importedAst = buildAstFromSource(importedSource, {
            baseDir: path.dirname(resolved),
            visited,
        });

        // Prepend so imported declarations are defined before the importing file's code
        ast.functions.unshift(...importedAst.functions);
        ast.structs.unshift(...importedAst.structs);
    }

    return ast;
}

// CLI test: node src/astBuilder.js example.hop
// if (process.argv[1] && process.argv[1].endsWith("astBuilder.js")) {
//     const sourceFile = process.argv[2];
//     const src = fs.readFileSync(sourceFile, "utf8");
//     const ast = buildAstFromSource(src);
//     console.log(JSON.stringify(ast, null, 2));
// }
