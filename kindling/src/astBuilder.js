import antlr4 from "antlr4";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import HopperLexer from "./generated/grammar/HopperLexer.js";
import HopperParser from "./generated/grammar/HopperParser.js";
import HopperVisitor from "./generated/grammar/HopperVisitor.js";
import {
    Program,
    FunctionDecl,
    StructDecl,
    StructField,
    StructPad,
    ClassDecl,
    ClassField,
    ClassMethod,
    ClassOperator,
    ClassConstructor,
    ClassDestructor,
    InterfaceDecl,
    InterfaceMethod,
    ConstDecl,
    AliasDecl,
    TemplateDecl,
    EntryDecl,
    BindDecl,
    StrictDecl,
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
    DeferStmt,
    AllocateExpr,
    DeallocateStmt,
    ExprStmt,
    Block,
    Binary,
    Unary,
    CastExpr,
    Var,
    FieldAccess,
    IntLiteral,
    HexLiteral,
    FloatLiteral,
    BoolLiteral,
    StringLiteral,
    NullLiteral,
    SizeOf,
    AddressOf,
    Deref,
    DerefAssign,
    ArrayDecl,
    ArrayDeclInit,
    ArrayAccess,
    ArrayAssign,
    ArrayElementAddress,
    AsmStmt,
    BitfieldDecl,
    BitfieldField,
    BitfieldPad,
} from "./ast.js";

// Resolve a CharLiteral token (e.g. 'H', '\n') to its integer byte value.
function charLiteralValue(text) {
    const inner = text.slice(1, -1); // strip surrounding single quotes
    if (inner.length === 1) return inner.charCodeAt(0);
    // escape sequences
    switch (inner[1]) {
        case 'n':  return 10;
        case 't':  return 9;
        case 'r':  return 13;
        case '0':  return 0;
        case '\\': return 92;
        case '\'': return 39;
        case '"':  return 34;
        default:   return inner.charCodeAt(1);
    }
}

export class AstBuilder extends HopperVisitor {
    visitProgram(ctx) {
        const functions = [];
        const structs = [];
        const classes = [];
        const consts = [];
        const aliases = [];
        const templates = [];
        const binds = [];
        const stricts = [];
        const bitfields = [];
        const interfaces = [];
        let   entry = null;

        for (const decl of ctx.topLevelDecl()) {
            const node = this.visit(decl);
            if (!node) continue;
            if (node.kind === "FunctionDecl")        functions.push(node);
            else if (node.kind === "StructDecl")     structs.push(node);
            else if (node.kind === "ClassDecl")      classes.push(node);
            else if (node.kind === "ConstDecl")      consts.push(node);
            else if (node.kind === "AliasDecl")      aliases.push(node);
            else if (node.kind === "TemplateDecl")   templates.push(node);
            else if (node.kind === "EntryDecl")      entry = node;
            else if (node.kind === "BindDecl")       binds.push(node);
            else if (node.kind === "StrictDecl")     stricts.push(node);
            else if (node.kind === "BitfieldDecl")   bitfields.push(node);
            else if (node.kind === "InterfaceDecl")  interfaces.push(node);
        }

        return Program(functions, structs, classes, consts, aliases, templates, entry, binds, stricts, bitfields, interfaces);
    }

    visitTopLevelDecl(ctx) {
        return this.visit(ctx.children[0]);
    }

    // ── alias ──────────────────────────────────────────────────────────────

    visitAliasDecl(ctx) {
        return AliasDecl(ctx.Identifier().getText(), ctx.type().getText());
    }

    // ── const ──────────────────────────────────────────────────────────────

    visitConstDecl(ctx) {
        const name = ctx.Identifier().getText();
        const litCtx = ctx.literal();
        const lit = this.visitLiteral(litCtx);
        // Check for optional leading '-' (negative constants)
        const negative = ctx.children && ctx.children.some(c => c.getText && c.getText() === '-');
        const value = negative ? -lit.value : lit.value;
        return ConstDecl(name, value, lit.type);
    }

    visitLiteral(ctx) {
        const text = ctx.getText();
        if (ctx.HexLiteral && ctx.HexLiteral())
            return { value: parseInt(text, 16), type: "int" };
        if (ctx.CharLiteral && ctx.CharLiteral())
            return { value: charLiteralValue(text), type: "int" };
        if (ctx.UnicodeLiteral && ctx.UnicodeLiteral())
            return { value: parseInt(text.slice(2), 16), type: "int" };
        if (ctx.FloatLiteral && ctx.FloatLiteral())
            return { value: parseFloat(text), type: "float" };
        if (ctx.IntegerLiteral && ctx.IntegerLiteral())
            return { value: parseInt(text, 10), type: "int" };
        if (ctx.StringLiteral && ctx.StringLiteral()) {
            const raw = text.slice(1, -1)
                .replace(/\\n/g, '\n').replace(/\\t/g, '\t')
                .replace(/\\r/g, '\r').replace(/\\\\/g, '\\').replace(/\\"/g, '"');
            return { value: raw, type: "string" };
        }
        if (text === "true")  return { value: true,  type: "bool" };
        if (text === "false") return { value: false, type: "bool" };
        throw new Error(`Unknown literal: ${text}`);
    }

    // ── struct (layout only) ───────────────────────────────────────────────

    visitStructDecl(ctx) {
        const name = ctx.Identifier().getText();
        const members = ctx.structMember ? ctx.structMember() : [];
        const fields = members.map(m => this.visit(m));
        return StructDecl(name, fields);
    }

    visitStructField(ctx) {
        const type = ctx.type().getText();
        const name = ctx.fieldName().getText();
        return StructField(name, type);
    }

    visitStructPad(ctx) {
        const size = parseInt(ctx.IntegerLiteral().getText(), 10);
        return StructPad(size);
    }

    // ── bitfield ───────────────────────────────────────────────────────────

    visitBitfieldDecl(ctx) {
        const name = ctx.Identifier().getText();
        const members = ctx.bitfieldMember ? ctx.bitfieldMember() : [];
        const fields = members.map(m => this.visit(m));
        return BitfieldDecl(name, fields);
    }

    visitBitfieldField(ctx) {
        const type = ctx.type().getText();
        const name = ctx.fieldName().getText();
        return BitfieldField(name, type, 1);
    }

    visitBitfieldArrayField(ctx) {
        const type  = ctx.type().getText();
        const name  = ctx.fieldName().getText();
        const count = parseInt(ctx.IntegerLiteral().getText(), 10);
        return BitfieldField(name, type, count);
    }

    visitBitfieldPad(ctx) {
        const bits = parseInt(ctx.IntegerLiteral().getText(), 10);
        return BitfieldPad(bits);
    }

    // ── interface ──────────────────────────────────────────────────────────

    visitInterfaceDecl(ctx) {
        const name = ctx.Identifier().getText();
        const methods = ctx.interfaceMember ? ctx.interfaceMember().map(m => this.visit(m)) : [];
        return InterfaceDecl(name, methods);
    }

    visitInterfaceFunc(ctx) {
        const name = ctx.Identifier().getText();
        const params = ctx.paramList()
            ? ctx.paramList().param().map(p => Param(p.paramName().getText(), p.type().getText()))
            : [];
        return InterfaceMethod(name, params, ctx.type().getText());
    }

    visitInterfaceProc(ctx) {
        const name = ctx.Identifier().getText();
        const params = ctx.paramList()
            ? ctx.paramList().param().map(p => Param(p.paramName().getText(), p.type().getText()))
            : [];
        return InterfaceMethod(name, params, null);
    }

    // ── class ──────────────────────────────────────────────────────────────

    visitClassDecl(ctx) {
        const name = ctx.className().getText();
        const interfaces = ctx.implementsList()
            ? ctx.implementsList().Identifier().map(id => id.getText())
            : [];
        const fields = [];
        const methods = [];
        const operators = [];
        let constructor = null;
        let destructor = null;

        const members = ctx.classMember ? ctx.classMember() : [];
        for (const m of members) {
            const node = this.visit(m);
            if (!node) continue;
            if (node.kind === "ClassField")         fields.push(node);
            else if (node.kind === "ClassMethod")   methods.push(node);
            else if (node.kind === "ClassOperator") operators.push(node);
            else if (node.kind === "ClassConstructor") constructor = node;
            else if (node.kind === "ClassDestructor")  destructor = node;
        }

        return ClassDecl(name, fields, methods, operators, constructor, destructor, interfaces);
    }

    visitClassField(ctx) {
        const type = ctx.type().getText();
        const name = ctx.fieldName().getText();
        return ClassField(name, type);
    }

    visitClassMethod(ctx) {
        const name = ctx.Identifier().getText();
        const returnType = ctx.type().getText();
        const params = ctx.paramList()
            ? ctx.paramList().param().map(p => Param(p.paramName().getText(), p.type().getText()))
            : [];
        const body = this.visit(ctx.block());
        return ClassMethod(name, params, returnType, body);
    }

    visitClassOperator(ctx) {
        const op = ctx.operatorSymbol().getText();
        const p  = ctx.param();   // null if unary, param context if binary
        const param = p ? Param(p.paramName().getText(), p.type().getText()) : null;
        const returnType = ctx.type().getText();
        const body = this.visit(ctx.block());
        return ClassOperator(op, param, returnType, body);
    }

    visitClassProcMethod(ctx) {
        const name = ctx.Identifier().getText();
        const params = ctx.paramList()
            ? ctx.paramList().param().map(p => Param(p.paramName().getText(), p.type().getText()))
            : [];
        const body = this.visit(ctx.block());
        return ClassMethod(name, params, null, body);
    }

    visitClassConstructor(ctx) {
        const params = ctx.paramList()
            ? ctx.paramList().param().map(p => Param(p.paramName().getText(), p.type().getText()))
            : [];
        const body = this.visit(ctx.block());
        return ClassConstructor(params, body);
    }

    visitClassDestructor(ctx) {
        const body = this.visit(ctx.block());
        return ClassDestructor(body);
    }

    // ── template ───────────────────────────────────────────────────────────

    visitTemplateDecl(ctx) {
        const name = ctx.templateName().getText();   // template name — Identifier or 'String' keyword

        const typeParams  = [];   // free variables: T, K, V
        const fixedParams = [];   // concrete types: byte, int, address, ...

        for (const p of ctx.templateParam()) {
            if (p.constructor.name === "FreeParamContext") {
                typeParams.push(p.getText());
            } else {
                // FixedParam — getText() concatenates tokens, reconstruct spaced keywords
                let t = p.getText();
                if (t === "unsignedint")  t = "unsigned int";
                if (t === "unsignedbyte") t = "unsigned byte";
                fixedParams.push(t);
            }
        }

        const fields = [];
        const methods = [];
        const operators = [];
        let constructor = null;
        let destructor = null;

        const members = ctx.classMember ? ctx.classMember() : [];
        for (const m of members) {
            const node = this.visit(m);
            if (!node) continue;
            if (node.kind === "ClassField")            fields.push(node);
            else if (node.kind === "ClassMethod")      methods.push(node);
            else if (node.kind === "ClassOperator")    operators.push(node);
            else if (node.kind === "ClassConstructor") constructor = node;
            else if (node.kind === "ClassDestructor")  destructor = node;
        }

        return TemplateDecl(name, typeParams, fixedParams, fields, methods, operators, constructor, destructor);
    }

    // ── entry ──────────────────────────────────────────────────────────────

    visitEntryBlockParams(ctx) {
        const name   = ctx.Identifier().getText();
        const params = ctx.paramList().param().map(p => ({
            type: p.type().getText(),
            name: p.paramName().getText(),
        }));
        const body = this.visit(ctx.block());
        return EntryDecl(name, body, null, params);
    }

    visitEntryBlock(ctx) {
        const name = ctx.Identifier().getText();
        const body = this.visit(ctx.block());
        return EntryDecl(name, body, null, []);
    }

    visitEntryAddr(ctx) {
        const name = ctx.Identifier().getText();
        const addr = this.visit(ctx.expression());
        return EntryDecl(name, null, addr, []);
    }

    // ── bind ───────────────────────────────────────────────────────────────

    visitBindDecl(ctx) {
        const hardwareAddress = ctx.HexLiteral().getText();
        const functionName    = ctx.Identifier().getText();
        return BindDecl(hardwareAddress, functionName);
    }

    // ── strict ───────────────────────────────────────────────────────────

    visitStrictDecl(ctx) {
        const type            = ctx.type().getText();
        const name            = ctx.Identifier().getText();
        const hardwareAddress = ctx.HexLiteral().getText();
        return StrictDecl(type, name, hardwareAddress);
    }

    // ── functions ──────────────────────────────────────────────────────────

    visitFuncDecl(ctx) {
        const name = ctx.Identifier().getText();
        const returnType = ctx.type().getText();
        const params = ctx.paramList()
            ? ctx.paramList().param().map(p => Param(p.paramName().getText(), p.type().getText()))
            : [];
        const body = this.visit(ctx.block());
        return FunctionDecl(name, params, returnType, body, false);
    }

    visitExternFuncDecl(ctx) {
        const name = ctx.Identifier().getText();
        const returnType = ctx.type().getText();
        const epl = ctx.externParamList();
        const params = epl ? epl.param().map(p => Param(p.paramName().getText(), p.type().getText())) : [];
        const isVariadic = epl ? epl.getText().endsWith("...") : false;
        return FunctionDecl(name, params, returnType, null, true, isVariadic);
    }

    visitProcDecl(ctx) {
        const name = ctx.Identifier().getText();
        const params = ctx.paramList()
            ? ctx.paramList().param().map(p => Param(p.paramName().getText(), p.type().getText()))
            : [];
        const body = this.visit(ctx.block());
        return FunctionDecl(name, params, null, body, false);
    }

    visitExternProcDecl(ctx) {
        const name = ctx.Identifier().getText();
        const epl = ctx.externParamList();
        const params = epl ? epl.param().map(p => Param(p.paramName().getText(), p.type().getText())) : [];
        const isVariadic = epl ? epl.getText().endsWith("...") : false;
        return FunctionDecl(name, params, null, null, true, isVariadic);
    }

    // ── block / statements ─────────────────────────────────────────────────

    visitBlock(ctx) {
        const statements = ctx.statement().map(s => this.visit(s));
        return Block(statements);
    }

    visitVarDecl(ctx) {
        const name = ctx.Identifier().getText();
        const type = ctx.type().getText();
        const initExpr = this.visit(ctx.expression());
        return VarDecl(name, type, initExpr);
    }

    visitAllocateVarDecl(ctx) {
        const name = ctx.Identifier().getText();
        const type = ctx.type().getText();
        return VarDecl(name, type, AllocateExpr(this.visit(ctx.expression())));
    }

    visitVarDeclNoInit(ctx) {
        const name = ctx.Identifier().getText();
        const type = ctx.type().getText();
        return VarDecl(name, type, null);
    }

    visitAssign(ctx) {
        return Assign(ctx.Identifier().getText(), this.visit(ctx.expression()));
    }

    visitAllocateAssign(ctx) {
        return Assign(ctx.Identifier().getText(), AllocateExpr(this.visit(ctx.expression())));
    }

    visitFieldAssign(ctx) {
        const object = ctx.Identifier(0).getText();
        const field  = ctx.fieldName().getText();
        const expr   = this.visit(ctx.expression());
        return FieldAssign(object, field, expr);
    }

    visitAllocateFieldAssign(ctx) {
        const object = ctx.Identifier(0).getText();
        const field  = ctx.fieldName().getText();
        return FieldAssign(object, field, AllocateExpr(this.visit(ctx.expression())));
    }

    visitDerefAssign(ctx) {
        return DerefAssign(ctx.Identifier().getText(), this.visit(ctx.expression()));
    }

    visitArrayDeclInit(ctx) {
        const type     = ctx.type().getText();
        const name     = ctx.Identifier().getText();
        const size     = parseInt(ctx.IntegerLiteral().getText(), 10);
        const elements = ctx.argList().expression().map(e => this.visit(e));
        return ArrayDeclInit(type, name, size, elements);
    }

    visitArrayDecl(ctx) {
        const type = ctx.type().getText();
        const name = ctx.Identifier().getText();
        const size = parseInt(ctx.IntegerLiteral().getText(), 10);
        return ArrayDecl(type, name, size);
    }

    visitAsmStmt(ctx) {
        const lines = ctx.asmBlock().asmLine().map(l => this.visit(l));
        return AsmStmt(lines);
    }

    visitAsmLineAssign(ctx) {
        const dest = ctx.Identifier().getText();
        const src  = this.visitAsmOperand(ctx.asmOperand());
        return { kind: "AsmLineAssign", dest, src };
    }

    visitAsmLineOp(ctx) {
        return { kind: "AsmLineOp", op: ctx.Identifier().getText() };
    }

    visitAsmOperand(ctx) {
        if (ctx.IntegerLiteral()) return IntLiteral(parseInt(ctx.IntegerLiteral().getText(), 10));
        if (ctx.HexLiteral())     return HexLiteral(parseInt(ctx.HexLiteral().getText(), 16));
        return Var(ctx.Identifier().getText());
    }

    visitArrayAssign(ctx) {
        const name   = ctx.Identifier().getText();
        const exprs  = ctx.expression();
        return ArrayAssign(name, this.visit(exprs[0]), this.visit(exprs[1]));
    }

    visitIfStmt(ctx) {
        const cond      = this.visit(ctx.expression());
        const thenBlock = this.visit(ctx.block(0));
        const elseBlock = ctx.block(1) ? this.visit(ctx.block(1)) : null;
        return IfStmt(cond, thenBlock, elseBlock);
    }

    visitWhileStmt(ctx) {
        return WhileStmt(this.visit(ctx.expression()), this.visit(ctx.block()));
    }

    visitForStmt(ctx) {
        const init   = ctx.forInit()   ? this.visit(ctx.forInit())   : null;
        const cond   = ctx.expression() ? this.visit(ctx.expression()) : null;
        let   update = null;
        if (ctx.forUpdate()) {
            const u = ctx.forUpdate();
            update = Assign(u.Identifier().getText(), this.visit(u.expression()));
        }
        return ForStmt(init, cond, update, this.visit(ctx.block()));
    }

    visitForInitDecl(ctx) {
        return VarDecl(ctx.Identifier().getText(), ctx.type().getText(), this.visit(ctx.expression()));
    }

    visitForInitAssign(ctx) {
        return Assign(ctx.Identifier().getText(), this.visit(ctx.expression()));
    }

    visitBreakStmt()    { return BreakStmt(); }
    visitContinueStmt() { return ContinueStmt(); }

    // templateParam alternatives — handled inline in visitTemplateDecl, not visited directly
    visitFreeParam()  { return null; }
    visitFixedParam() { return null; }

    // ── compile-time contract stubs (not yet implemented) ──────────────────
    // requires / ensures / invariant / constrain are reserved and parsed
    // but silently ignored until the constraint system is built.
    visitRequiresClause()  { return null; }
    visitEnsuresClause()   { return null; }
    visitInvariantClause() { return null; }
    visitConstrainClause() { return null; }
    visitReturnStmt(ctx) {
        const expr = ctx.expression() ? this.visit(ctx.expression()) : null;
        return ReturnStmt(expr);
    }
    visitDeferStmt(ctx)      { return DeferStmt(this.visit(ctx.expression())); }
    visitDeallocateStmt(ctx) { return DeallocateStmt(this.visit(ctx.expression())); }
    visitExprStmt(ctx)       { return ExprStmt(this.visit(ctx.expression())); }

    // ── expressions ────────────────────────────────────────────────────────

    visitExpression(ctx) { return this.visit(ctx.logicalOr()); }

    visitLogicalOr(ctx) {
        let node = this.visit(ctx.logicalAnd(0));
        for (let i = 1; i < ctx.logicalAnd().length; i++)
            node = Binary("||", node, this.visit(ctx.logicalAnd(i)));
        return node;
    }

    visitLogicalAnd(ctx) {
        let node = this.visit(ctx.bitwiseOr(0));
        for (let i = 1; i < ctx.bitwiseOr().length; i++)
            node = Binary("&&", node, this.visit(ctx.bitwiseOr(i)));
        return node;
    }

    visitBitwiseOr(ctx) {
        let node = this.visit(ctx.bitwiseXor(0));
        for (let i = 1; i < ctx.bitwiseXor().length; i++)
            node = Binary("|", node, this.visit(ctx.bitwiseXor(i)));
        return node;
    }

    visitBitwiseXor(ctx) {
        let node = this.visit(ctx.bitwiseAnd(0));
        for (let i = 1; i < ctx.bitwiseAnd().length; i++)
            node = Binary("^", node, this.visit(ctx.bitwiseAnd(i)));
        return node;
    }

    visitBitwiseAnd(ctx) {
        let node = this.visit(ctx.equality(0));
        for (let i = 1; i < ctx.equality().length; i++)
            node = Binary("&", node, this.visit(ctx.equality(i)));
        return node;
    }

    visitEquality(ctx) {
        let node = this.visit(ctx.relational(0));
        const ops = ctx.children.filter(c => ["==","!="].includes(c.getText()));
        for (let i = 0; i < ops.length; i++)
            node = Binary(ops[i].getText(), node, this.visit(ctx.relational(i + 1)));
        return node;
    }

    visitRelational(ctx) {
        let node = this.visit(ctx.shift(0));
        const ops = ctx.children.filter(c => ["<","<=",">",">="].includes(c.getText()));
        for (let i = 0; i < ops.length; i++)
            node = Binary(ops[i].getText(), node, this.visit(ctx.shift(i + 1)));
        return node;
    }

    visitShift(ctx) {
        let node = this.visit(ctx.additive(0));
        const ops = ctx.children.filter(c => ["<<",">>"].includes(c.getText()));
        for (let i = 0; i < ops.length; i++)
            node = Binary(ops[i].getText(), node, this.visit(ctx.additive(i + 1)));
        return node;
    }

    visitAdditive(ctx) {
        let node = this.visit(ctx.multiplicative(0));
        const ops = ctx.children.filter(c => ["+","-"].includes(c.getText()));
        for (let i = 0; i < ops.length; i++)
            node = Binary(ops[i].getText(), node, this.visit(ctx.multiplicative(i + 1)));
        return node;
    }

    visitMultiplicative(ctx) {
        let node = this.visit(ctx.unary(0));
        const ops = ctx.children.filter(c => ["*","/","%"].includes(c.getText()));
        for (let i = 0; i < ops.length; i++)
            node = Binary(ops[i].getText(), node, this.visit(ctx.unary(i + 1)));
        return node;
    }

    visitUnary(ctx) {
        if (ctx.primary()) return this.visit(ctx.primary());
        const op = ctx.children[0].getText(); // '!', '-', '~', 'cast', or 'allocate'
        if (op === "cast")     return CastExpr(this.visit(ctx.unary()));
        if (op === "allocate") return AllocateExpr(this.visit(ctx.unary()));
        return Unary(op, this.visit(ctx.unary()));
    }

    visitPrimary(ctx) {
        // Hex literal: 0xFF
        if (ctx.HexLiteral && ctx.HexLiteral()) {
            return HexLiteral(parseInt(ctx.HexLiteral().getText(), 16));
        }

        // Character literal: 'H' → 72, '\n' → 10
        if (ctx.CharLiteral && ctx.CharLiteral()) {
            return IntLiteral(charLiteralValue(ctx.CharLiteral().getText()));
        }

        // Unicode literal: U+1F600 → 128512
        if (ctx.UnicodeLiteral && ctx.UnicodeLiteral()) {
            return IntLiteral(parseInt(ctx.UnicodeLiteral().getText().slice(2), 16));
        }

        // Float literal: 3.14
        if (ctx.FloatLiteral && ctx.FloatLiteral()) {
            return FloatLiteral(parseFloat(ctx.FloatLiteral().getText()));
        }

        // Integer literal
        if (ctx.IntegerLiteral && ctx.IntegerLiteral()) {
            return IntLiteral(parseInt(ctx.IntegerLiteral().getText(), 10));
        }

        // String literal
        if (ctx.StringLiteral && ctx.StringLiteral()) {
            const raw = ctx.StringLiteral().getText().slice(1, -1)
                .replace(/\\n/g, '\n').replace(/\\t/g, '\t')
                .replace(/\\r/g, '\r').replace(/\\\\/g, '\\').replace(/\\"/g, '"');
            return StringLiteral(raw);
        }


        const text = ctx.getText();
        if (text === "true")    return BoolLiteral(true);
        if (text === "false")   return BoolLiteral(false);
        if (text === "null")    return NullLiteral();
        // contextual keywords used as variable references
        if (text === "size" || text === "value" || text === "address") return Var(text);

        const children   = ctx.children || [];
        const childTexts = children.map(c => c.getText ? c.getText() : String(c));

        // buffer[i]::address
        if (childTexts.includes('[') && childTexts.includes('::') && childTexts.includes('address')) {
            const ids  = ctx.Identifier();
            const name = Array.isArray(ids) ? ids[0].getText() : ids.getText();
            const exprs = ctx.expression();
            return ArrayElementAddress(name, this.visit(Array.isArray(exprs) ? exprs[0] : exprs));
        }

        // x::size
        if (childTexts.includes('::') && childTexts.includes('size')) {
            const ids = ctx.Identifier();
            return SizeOf(Array.isArray(ids) ? ids[0].getText() : ids.getText());
        }

        // x::address
        if (childTexts.includes('::') && childTexts.includes('address')) {
            const ids  = ctx.Identifier();
            return AddressOf(Array.isArray(ids) ? ids[0].getText() : ids.getText());
        }

        // p::value
        if (childTexts.includes('::') && childTexts.includes('value')) {
            const ids  = ctx.Identifier();
            return Deref(Array.isArray(ids) ? ids[0].getText() : ids.getText());
        }

        // array access: buffer[i]
        if (childTexts.includes('[') && !childTexts.includes('::')) {
            const ids   = ctx.Identifier();
            const name  = Array.isArray(ids) ? ids[0].getText() : ids.getText();
            const exprs = ctx.expression();
            return ArrayAccess(name, this.visit(Array.isArray(exprs) ? exprs[0] : exprs));
        }

        // method call: obj.method(args)
        if (ctx.Identifier && childTexts.includes('.') && childTexts.includes('(')) {
            const ids = ctx.Identifier();
            if (Array.isArray(ids) && ids.length === 2) {
                const args = ctx.argList && ctx.argList()
                    ? ctx.argList().expression().map(e => this.visit(e))
                    : [];
                return MethodCall(ids[0].getText(), ids[1].getText(), args);
            }
        }

        // function call: name(args)
        if (ctx.Identifier && ctx.argList !== undefined && childTexts.includes('(')) {
            const ids = ctx.Identifier();
            if (Array.isArray(ids) && ids.length === 1) {
                const args = ctx.argList && ctx.argList()
                    ? ctx.argList().expression().map(e => this.visit(e))
                    : [];
                return Call(ids[0].getText(), args);
            }
        }

        // field access: obj.field (field may be a fieldName — allows 'value', 'address')
        if (ctx.Identifier && childTexts.includes('.') && !childTexts.includes('(')) {
            const ids = ctx.Identifier();
            if (Array.isArray(ids) && ids.length >= 1 && ctx.fieldName && ctx.fieldName()) {
                return FieldAccess(ids[0].getText(), ctx.fieldName().getText());
            }
        }

        // plain variable
        if (ctx.Identifier) {
            const ids = ctx.Identifier();
            if (Array.isArray(ids) && ids.length === 1) return Var(ids[0].getText());
            if (ids && !Array.isArray(ids)) return Var(ids.getText());
        }

        // String template constructor call: String(cap)
        if (childTexts[0] === 'String' && childTexts.includes('(')) {
            const args = ctx.argList && ctx.argList()
                ? ctx.argList().expression().map(e => this.visit(e))
                : [];
            return Call("String", args);
        }

        // parenthesised expression
        if (ctx.expression) {
            const e = ctx.expression();
            if (e) return this.visit(e);
        }

        return null;
    }
}

// ── import resolution ──────────────────────────────────────────────────────

// Find modules/ directory by walking up from baseDir, then fall back to built-ins.
function resolveModuleFiles(moduleName, names, baseDir) {
    // Walk up from baseDir looking for modules/<moduleName>/
    let dir = baseDir || process.cwd();
    while (true) {
        const candidate = path.join(dir, "modules", moduleName);
        if (fs.existsSync(candidate)) {
            return filesToLoad(candidate, names);
        }
        const parent = path.dirname(dir);
        if (parent === dir) break;
        dir = parent;
    }
    throw new Error(`Module '${moduleName}' not found`);
}

function filesToLoad(moduleDir, names) {
    if (names) {
        // named import: load only requested files
        return names.map(n => path.join(moduleDir, n + ".hop"));
    } else {
        // whole module: load all .hop files
        return fs.readdirSync(moduleDir)
            .filter(f => f.endsWith(".hop"))
            .map(f => path.join(moduleDir, f));
    }
}

export function buildAstFromSource(source, { baseDir = null, visited = new Set() } = {}) {
    // Strip import lines before ANTLR sees them, collect import requests
    const imports = [];
    const strippedSource = source.replace(
        /^[ \t]*import\s+([a-zA-Z_][a-zA-Z0-9_]*(?:\s*,\s*[a-zA-Z_][a-zA-Z0-9_]*)*)\s+from\s+([a-zA-Z_][a-zA-Z0-9_]*)[ \t]*$|^[ \t]*import\s+([a-zA-Z_][a-zA-Z0-9_]*)[ \t]*$/gm,
        (_, names, fromModule, wholeModule) => {
            if (fromModule) {
                imports.push({ module: fromModule, names: names.split(",").map(n => n.trim()) });
            } else {
                imports.push({ module: wholeModule, names: null });
            }
            return "";
        }
    );

    const chars  = new antlr4.InputStream(strippedSource);
    const lexer  = new HopperLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new HopperParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.program();
    const ast  = new AstBuilder().visit(tree);

    for (const { module: moduleName, names } of imports) {
        const files = resolveModuleFiles(moduleName, names, baseDir);
        for (const resolved of files) {
            if (visited.has(resolved)) continue;
            visited.add(resolved);

            const importedAst = buildAstFromSource(fs.readFileSync(resolved, "utf8"), {
                baseDir: path.dirname(resolved),
                visited,
            });

            ast.functions.unshift(...importedAst.functions);
            ast.structs.unshift(...importedAst.structs);
            ast.classes.unshift(...importedAst.classes);
            ast.consts.unshift(...importedAst.consts);
            ast.aliases.unshift(...importedAst.aliases);
            ast.templates.unshift(...importedAst.templates);
            ast.binds.unshift(...importedAst.binds);
            ast.stricts.unshift(...importedAst.stricts);
            ast.interfaces.unshift(...importedAst.interfaces);
            // entry is never inherited from imports — only the main file sets it
        }
    }

    return ast;
}
