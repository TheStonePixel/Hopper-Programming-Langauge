import antlr4 from "antlr4";
import fs from "fs";

import HopperLexer from "./generated/grammar/HopperLexer.js";
import HopperParser from "./generated/grammar/HopperParser.js";
import HopperVisitor from "./generated/grammar/HopperVisitor.js";
import {
    Program,
    FunctionDecl,
    Param,
    Call,
    VarDecl,
    Assign,
    IfStmt,
    WhileStmt,
    ReturnStmt,
    ExprStmt,
    Block,
    Binary,
    Unary,
    Var,
    IntLiteral,
    BoolLiteral,
} from "./ast.js";

class AstBuilder extends HopperVisitor {
    visitProgram(ctx) {
        const fns = ctx.functionDecl().map(fn => this.visit(fn));
        return Program(fns);
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

    visitAssign(ctx) {
        const name = ctx.Identifier().getText();
        const expr = this.visit(ctx.expression());
        return Assign(name, expr);
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

        // true / false
        const text = ctx.getText();
        if (text === "true") return BoolLiteral(true);
        if (text === "false") return BoolLiteral(false);

        // function call: Identifier '(' argList? ')'
        if (ctx.Identifier && ctx.Identifier() && ctx.getChildCount() > 1) {
            const callee = ctx.Identifier().getText();
            const argListCtx = ctx.argList ? ctx.argList() : ctx.argList?.(); // depending on ANTLR gen
            const args = argListCtx ? argListCtx.expression().map(e => this.visit(e)) : [];
            return Call(callee, args);
        }

        // plain variable: Identifier
        if (ctx.Identifier && ctx.Identifier()) {
            return Var(ctx.Identifier().getText());
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
        const ops = ctx.children.filter(c => ["*", "/"].includes(c.getText()));
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

// Helper: source string → AST
export function buildAstFromSource(source) {
    const chars = new antlr4.InputStream(source);
    const lexer = new HopperLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new HopperParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.program();
    const builder = new AstBuilder();
    return builder.visit(tree);
}

// CLI test: node src/astBuilder.js example.hop
if (process.argv[1] && process.argv[1].endsWith("astBuilder.js")) {
    const src = fs.readFileSync(process.argv[2], "utf8");
    const ast = buildAstFromSource(src);
    console.log(JSON.stringify(ast, null, 2));
}
