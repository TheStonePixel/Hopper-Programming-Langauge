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
    EnumDecl,
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
    CharLiteral,
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
    ChainedMethodCall,
    FieldIndexAccess,
    NestedFieldAssign,
    AsmStmt,
    BitfieldDecl,
    BitfieldField,
    BitfieldPad,
} from "./ast.js";

// Decode Hopper string escape sequences to raw bytes.
// Handles: \n \t \r \\ \" \' and \xNN hex escapes.
function unescapeHopperString(s) {
    return s.replace(/\\(\\|n|t|r|"|'|x[0-9a-fA-F]{2})/g, (_, seq) => {
        if (seq === 'n')  return '\n';
        if (seq === 't')  return '\t';
        if (seq === 'r')  return '\r';
        if (seq === '\\') return '\\';
        if (seq === '"')  return '"';
        if (seq === "'")  return "'";
        return String.fromCharCode(parseInt(seq.slice(1), 16));
    });
}

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
        const enums = [];
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
            else if (node.kind === "EnumDecl")       enums.push(node);
            else if (node.kind === "AliasDecl")      aliases.push(node);
            else if (node.kind === "TemplateDecl")   templates.push(node);
            else if (node.kind === "EntryDecl")      entry = node;
            else if (node.kind === "BindDecl")       binds.push(node);
            else if (node.kind === "StrictDecl")     stricts.push(node);
            else if (node.kind === "BitfieldDecl")   bitfields.push(node);
            else if (node.kind === "InterfaceDecl")  interfaces.push(node);
        }

        return Program(functions, structs, classes, [], aliases, templates, entry, binds, stricts, bitfields, interfaces, enums);
    }

    visitTopLevelDecl(ctx) {
        return this.visit(ctx.children[0]);
    }

    // ── alias ──────────────────────────────────────────────────────────────

    visitAliasDecl(ctx) {
        return AliasDecl(ctx.Identifier().getText(), ctx.type().getText());
    }

    // ── enum ───────────────────────────────────────────────────────────────

    visitEnumDecl(ctx) {
        const name = ctx.Identifier().getText();
        const variants = [];
        let next = 0;
        let kind = "int";   // inferred from first variant that has an explicit value
        for (const v of ctx.enumVariant()) {
            const varName = v.Identifier().getText();
            const strLit  = v.StringLiteral ? v.StringLiteral() : null;
            const intLit  = v.IntegerLiteral ? v.IntegerLiteral() : null;
            const hexLit  = v.HexLiteral ? v.HexLiteral() : null;
            if (strLit) {
                kind = "string";
                const raw = unescapeHopperString(strLit.getText().slice(1, -1));
                variants.push({ name: varName, value: raw, kind: "string" });
            } else {
                const negative = v.children.some(c => c.getText && c.getText() === '-');
                if (hexLit) {
                    next = parseInt(hexLit.getText(), 16);
                    if (negative) next = -next;
                } else if (intLit) {
                    next = parseInt(intLit.getText(), 10);
                    if (negative) next = -next;
                }
                variants.push({ name: varName, value: next, kind: "int" });
                next += 1;
            }
        }
        return EnumDecl(name, variants, kind);
    }

    visitLiteral(ctx) {
        const text = ctx.getText();
        if (ctx.HexLiteral && ctx.HexLiteral())
            return { value: parseInt(text, 16), type: "int" };
        if (ctx.CharLiteral && ctx.CharLiteral())
            return { value: charLiteralValue(text), type: "char" };
        if (ctx.UnicodeLiteral && ctx.UnicodeLiteral())
            return { value: parseInt(text.slice(2), 16), type: "int" };
        if (ctx.FloatLiteral && ctx.FloatLiteral())
            return { value: parseFloat(text), type: "float" };
        if (ctx.IntegerLiteral && ctx.IntegerLiteral())
            return { value: parseInt(text, 10), type: "int" };
        if (ctx.StringLiteral && ctx.StringLiteral()) {
            const raw = unescapeHopperString(text.slice(1, -1));
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
        const methods = [];
        const enums = [];
        for (const m of (ctx.interfaceMember ? ctx.interfaceMember() : [])) {
            const node = this.visit(m);
            if (!node) continue;
            if (node.kind === "InterfaceMethod") methods.push(node);
            else if (node.kind === "EnumDecl")   enums.push(node);
        }
        return InterfaceDecl(name, methods, enums);
    }

    visitInterfaceEnum(ctx) {
        return this.visitEnumDecl(ctx.enumDecl());
    }

    visitInterfaceFunc(ctx) {
        const name = ctx.fieldName().getText();
        const params = ctx.paramList()
            ? ctx.paramList().param().map(p => Param(p.paramName().getText(), p.type().getText()))
            : [];
        return InterfaceMethod(name, params, ctx.type().getText());
    }

    visitInterfaceProc(ctx) {
        const name = ctx.fieldName().getText();
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
        const name = ctx.fieldName().getText();
        const returnType = ctx.type().getText();
        const params = ctx.paramList()
            ? ctx.paramList().param().map(p => Param(p.paramName().getText(), p.type().getText()))
            : [];
        const body = this.visit(ctx.block());
        return ClassMethod(name, params, returnType, body);
    }

    visitClassOperator(ctx) {
        const op     = ctx.operatorSymbol().getText();
        const ps     = ctx.param();
        const params = ps ? (Array.isArray(ps) ? ps : [ps]).map(p => Param(p.paramName().getText(), p.type().getText())) : [];
        const param  = params[0] ?? null;
        const rawReturn  = ctx.type().getText();
        const returnType = rawReturn === "void" ? null : rawReturn;
        const body = this.visit(ctx.block());
        return ClassOperator(op, param, returnType, body, params);
    }

    visitClassProcMethod(ctx) {
        const name = ctx.fieldName().getText();
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
        const name       = ctx.Identifier().getText();
        const returnType = ctx.type().getText();
        const params     = ctx.paramList()
            ? ctx.paramList().param().map(p => Param(p.paramName().getText(), p.type().getText()))
            : [];
        const contracts  = (ctx.contractClause() || []).map(c => this.visit(c)).filter(Boolean);
        const requires   = contracts.filter(c => c.kind === "RequiresClause").map(c => c.expr);
        const ensures    = contracts.filter(c => c.kind === "EnsuresClause").map(c => c.expr);
        const body       = this.visit(ctx.block());
        return FunctionDecl(name, params, returnType, body, false, false, requires, ensures);
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
        const name      = ctx.Identifier().getText();
        const params    = ctx.paramList()
            ? ctx.paramList().param().map(p => Param(p.paramName().getText(), p.type().getText()))
            : [];
        const contracts = (ctx.contractClause() || []).map(c => this.visit(c)).filter(Boolean);
        const requires  = contracts.filter(c => c.kind === "RequiresClause").map(c => c.expr);
        const ensures   = contracts.filter(c => c.kind === "EnsuresClause").map(c => c.expr);
        const body      = this.visit(ctx.block());
        return FunctionDecl(name, params, null, body, false, false, requires, ensures);
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

    visitCallbackDeclTyped(ctx) {
        const ids      = ctx.Identifier();
        const varName  = ids[0].getText();
        const fnName   = ids[1].getText();
        const types    = ctx.type();
        const retType  = types[types.length - 1].getText();
        const paramTs  = types.slice(0, -1).map(t => t.getText()).join(',');
        const cbType   = `callback(${paramTs})${retType}`;
        return VarDecl(varName, cbType, Var(fnName));
    }

    visitVarDecl(ctx) {
        const name      = ctx.Identifier().getText();
        const type      = ctx.type().getText();
        const initExpr  = this.visit(ctx.expression());
        const constrain = ctx.constrainClause() ? this.visit(ctx.constrainClause()) : null;
        return VarDecl(name, type, initExpr, constrain);
    }

    visitAllocateVarDecl(ctx) {
        const name      = ctx.Identifier().getText();
        const type      = ctx.type().getText();
        const constrain = ctx.constrainClause() ? this.visit(ctx.constrainClause()) : null;
        return VarDecl(name, type, AllocateExpr(this.visit(ctx.expression())), constrain);
    }

    visitVarDeclNoInit(ctx) {
        const name      = ctx.Identifier().getText();
        const type      = ctx.type().getText();
        const constrain = ctx.constrainClause() ? this.visit(ctx.constrainClause()) : null;
        return VarDecl(name, type, null, constrain);
    }

    visitConstVarDecl(ctx) {
        const type     = ctx.type().getText();
        const name     = ctx.Identifier().getText();
        const initExpr = this.visit(ctx.expression());
        return VarDecl(name, type, initExpr, null, true);
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

    visitNestedFieldAssign(ctx) {
        const object     = ctx.Identifier().getText();
        const outerField = ctx.fieldName(0).getText();
        const innerField = ctx.fieldName(1).getText();
        const expr       = this.visit(ctx.expression());
        return NestedFieldAssign(object, outerField, innerField, expr);
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
        // AsmBlock token text: `asm { ... }` — parse line by line or by 3-space separation (compact form)
        const raw     = ctx.AsmBlock().getText();
        const content = raw.replace(/^asm\s*\{/, '').replace(/\}$/, '');
        const lines   = content.split(/\n|   +/).flatMap(line => {
            // strip trailing inline comment, then trim
            const ci   = line.indexOf('//');
            let   text = (ci >= 0 ? line.slice(0, ci) : line).trim();
            if (!text) return [];

            // reg/var = literal or identifier  →  AsmLineAssign
            const m = text.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.+)$/);
            if (m) {
                const dest    = m[1];
                const srcText = m[2].trim();
                let src;
                if (/^0x[0-9a-fA-F]+$/i.test(srcText))
                    src = HexLiteral(parseInt(srcText, 16));
                else if (/^[0-9]+$/.test(srcText))
                    src = IntLiteral(parseInt(srcText, 10));
                else
                    src = Var(srcText);
                return [{ kind: "AsmLineAssign", dest, src }];
            }

            // everything else: raw instruction text  →  AsmLineOp
            return [{ kind: "AsmLineOp", op: text }];
        });
        return AsmStmt(lines);
    }

    visitArrayAssign(ctx) {
        const name   = ctx.Identifier().getText();
        const exprs  = ctx.expression();
        return ArrayAssign(name, this.visit(exprs[0]), this.visit(exprs[1]));
    }

    visitIfStmt(ctx) {
        const cond      = this.visit(ctx.expression());
        const thenBlock = this.visit(ctx.block());
        const elseBlock = ctx.elseClause() ? this.visit(ctx.elseClause()) : null;
        return IfStmt(cond, thenBlock, elseBlock);
    }

    // 'else' block  → return the block as-is
    visitElseBlock(ctx) {
        return this.visit(ctx.block());
    }

    // 'else' 'if' '(' expr ')' block elseClause?  → wrap inner IfStmt in a Block
    visitElseIf(ctx) {
        const cond      = this.visit(ctx.expression());
        const thenBlock = this.visit(ctx.block());
        const elseBlock = ctx.elseClause() ? this.visit(ctx.elseClause()) : null;
        return Block([IfStmt(cond, thenBlock, elseBlock)]);
    }

    visitWhileStmt(ctx) {
        const invariants = (ctx.invariantClause() || []).map(c => this.visit(c));
        return WhileStmt(this.visit(ctx.expression()), this.visit(ctx.block()), invariants);
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

    // ── compile-time contract clauses ─────────────────────────────────────
    visitRequiresClause(ctx) { return { kind: "RequiresClause", expr: this.visit(ctx.expression()) }; }
    visitEnsuresClause(ctx)  { return { kind: "EnsuresClause",  expr: this.visit(ctx.expression()) }; }
    visitInvariantClause(ctx){ return this.visit(ctx.expression()); }
    visitConstrainClause(ctx){ return ctx.type().getText(); }
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
        if (ctx.castType && ctx.castType()) {
            const targetType = ctx.castType().getText(); // e.g. "int", "byte", "unsignedint"
            return CastExpr(targetType, this.visit(ctx.unary()));
        }
        const op = ctx.children[0].getText(); // '!', '-', '~', or 'allocate'
        if (op === "allocate") return AllocateExpr(this.visit(ctx.unary()));
        return Unary(op, this.visit(ctx.unary()));
    }

    visitPrimary(ctx) {
        // Hex literal: 0xFF
        if (ctx.HexLiteral && ctx.HexLiteral()) {
            return HexLiteral(parseInt(ctx.HexLiteral().getText(), 16));
        }

        // Character literal: 'H' → 72, '\n' → 10 — produces type char
        if (ctx.CharLiteral && ctx.CharLiteral()) {
            return CharLiteral(charLiteralValue(ctx.CharLiteral().getText()));
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
            const raw = unescapeHopperString(ctx.StringLiteral().getText().slice(1, -1));
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

        // ctx.Identifier() returns a single TerminalNode (grammar has ≤1 Identifier per primary alt)
        // Normalize to either a string name or null.
        const idTok  = ctx.Identifier ? ctx.Identifier() : null;
        const idName = idTok ? idTok.getText() : null;

        // Normalize fieldName contexts to an array (for method/field name lookup)
        const rawFns = ctx.fieldName ? ctx.fieldName() : null;
        const fnsArr = rawFns ? (Array.isArray(rawFns) ? rawFns : [rawFns]) : [];

        // buffer[i]::address
        if (childTexts.includes('[') && childTexts.includes('::') && childTexts.includes('address')) {
            const exprs = ctx.expression();
            return ArrayElementAddress(idName, this.visit(Array.isArray(exprs) ? exprs[0] : exprs));
        }

        // x::size
        if (childTexts.includes('::') && childTexts.includes('size')) {
            return SizeOf(idName);
        }

        // x::address
        if (childTexts.includes('::') && childTexts.includes('address')) {
            return AddressOf(idName);
        }

        // p::value
        if (childTexts.includes('::') && childTexts.includes('value')) {
            return Deref(idName);
        }

        // array access: buffer[i]  (not obj.field[i] — that's FieldIndexAccess below)
        if (childTexts.includes('[') && !childTexts.includes('::') && !childTexts.includes('.')) {
            const exprs = ctx.expression();
            return ArrayAccess(idName, this.visit(Array.isArray(exprs) ? exprs[0] : exprs));
        }

        // dotted access: method calls, field subscripts, field access
        if (idName && childTexts.includes('.')) {
            // chained method call: obj.field.method(args) — 2 fieldNames + '('
            if (fnsArr.length === 2 && childTexts.includes('(')) {
                const args = ctx.argList && ctx.argList()
                    ? ctx.argList().expression().map(e => this.visit(e))
                    : [];
                return ChainedMethodCall(idName, fnsArr[0].getText(), fnsArr[1].getText(), args);
            }

            // field subscript: obj.field[i] — 1 fieldName + '[' (no '(')
            if (fnsArr.length === 1 && childTexts.includes('[') && !childTexts.includes('(')) {
                const exprs = ctx.expression();
                const idx   = this.visit(Array.isArray(exprs) ? exprs[0] : exprs);
                return FieldIndexAccess(idName, fnsArr[0].getText(), idx);
            }

            // method call: obj.method(args) — 1 fieldName + '('
            if (fnsArr.length === 1 && childTexts.includes('(')) {
                const args = ctx.argList && ctx.argList()
                    ? ctx.argList().expression().map(e => this.visit(e))
                    : [];
                return MethodCall(idName, fnsArr[0].getText(), args);
            }

            // field access: obj.field — 1 fieldName (no '(' or '[')
            if (fnsArr.length === 1) {
                return FieldAccess(idName, fnsArr[0].getText());
            }
        }

        // function call: name(args) — no dot
        if (idName && childTexts.includes('(')) {
            const args = ctx.argList && ctx.argList()
                ? ctx.argList().expression().map(e => this.visit(e))
                : [];
            return Call(idName, args);
        }

        // plain variable
        if (idName) return Var(idName);

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

// Walk up from baseDir looking for modules/<name>/ — no stdlib fallback.
// All dependencies must be declared in hopper.json and installed via hopper install.
function resolveModuleFiles(moduleName, names, baseDir, importingFile) {
    let dir = baseDir || process.cwd();
    while (true) {
        const candidate = path.join(dir, "modules", moduleName);
        if (fs.existsSync(candidate)) {
            return filesToLoad(candidate, names, moduleName, importingFile);
        }
        const parent = path.dirname(dir);
        if (parent === dir) break;
        dir = parent;
    }
    const from = importingFile ? ` (imported from ${path.basename(importingFile)})` : "";
    throw new Error(`Module '${moduleName}' not found${from}\n  Run: hopper install ${moduleName}`);
}

function filesToLoad(moduleDir, names, moduleName, importingFile) {
    // Prefer src/ subdirectory if present (standard module layout)
    const srcDir  = path.join(moduleDir, "src");
    const loadDir = fs.existsSync(srcDir) ? srcDir : moduleDir;

    if (names) {
        return names.map(n => {
            const file = path.join(loadDir, n + ".hop");
            if (!fs.existsSync(file)) {
                const from = importingFile ? ` (imported from ${path.basename(importingFile)})` : "";
                throw new Error(`No file '${n}.hop' in module '${moduleName}'${from}\n  Looked in: ${loadDir}`);
            }
            return file;
        });
    } else {
        return fs.readdirSync(loadDir)
            .filter(f => f.endsWith(".hop"))
            .map(f => path.join(loadDir, f));
    }
}

export function buildAstFromSource(source, { baseDir = null, visited = new Set(), noImports = false, bindings = null, sourceFile = null } = {}) {
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

    if (noImports) return ast;

    for (const { module: moduleName, names } of imports) {
        // Binding import: `import Interface from Project` or legacy `import Interface`
        // The interface name is either the bare module name (no from) or the single name before `from`.
        const bindingName = names ? (names.length === 1 ? names[0] : null) : moduleName;
        if (bindingName && bindings && bindings.has(bindingName)) {
            const binding = bindings.get(bindingName);

            // Validate the project name if the binding declares one.
            if (names && binding.from && binding.from !== moduleName) {
                const sf = sourceFile ? ` in ${path.basename(sourceFile)}` : "";
                throw new Error(`import ${bindingName} from ${moduleName}: binding specifies 'from ${binding.from}'${sf}`);
            }

            // Validate binding files exist before trying to load them.
            if (!fs.existsSync(binding.interface)) {
                const sf = sourceFile ? ` (declared in hopper.json, imported from ${path.basename(sourceFile)})` : "";
                throw new Error(`Interface file not found for '${bindingName}'${sf}\n  Expected: ${binding.interface}`);
            }
            if (!fs.existsSync(binding.implementation)) {
                const sf = sourceFile ? ` (declared in hopper.json, imported from ${path.basename(sourceFile)})` : "";
                throw new Error(`Implementation file not found for '${bindingName}'${sf}\n  Expected: ${binding.implementation}`);
            }

            // Load interface file
            if (!visited.has(binding.interface)) {
                visited.add(binding.interface);
                const ifaceAst = buildAstFromSource(fs.readFileSync(binding.interface, "utf8"), {
                    baseDir: path.dirname(binding.interface), visited, bindings, sourceFile: binding.interface,
                });
                ast.interfaces.unshift(...ifaceAst.interfaces);
                ast.functions.unshift(...ifaceAst.functions);
                ast.enums.unshift(...(ifaceAst.enums || []));
                ast.classes.unshift(...(ifaceAst.classes || []));
            }

            // Load implementation file
            if (!visited.has(binding.implementation)) {
                visited.add(binding.implementation);
                const implAst = buildAstFromSource(fs.readFileSync(binding.implementation, "utf8"), {
                    baseDir: path.dirname(binding.implementation), visited, bindings, sourceFile: binding.implementation,
                });

                // Mark all functions and class methods as alwaysinline when the binding
                // is a pure translation layer (no code of its own, inline: true in hopper.json).
                if (binding.inline) {
                    for (const fn of implAst.functions || []) {
                        if (!fn.isExtern) fn._inline = true;
                    }
                    for (const cls of implAst.classes || []) {
                        for (const m of cls.methods || []) m._inline = true;
                        if (cls.constructor) {
                            for (const m of cls.constructor.methods || []) m._inline = true;
                        }
                    }
                }

                // Find the class that matches the binding name; also accept a class that
                // already declares `implements <bindingName>` in source; fall back to first class.
                // This handles impl files that export multiple classes (e.g. tui.hop has Key + StandardTUI).
                const implClass = (implAst.classes || []).find(c => c.name === bindingName)
                               || (implAst.classes || []).find(c => (c.interfaces || []).includes(bindingName))
                               || (implAst.classes || [])[0];
                if (implClass) {
                    implClass.interfaces = [...(implClass.interfaces || []), bindingName];
                }

                // Register a type alias: binding name → concrete class name.
                // Skip when names match — a self-alias causes infinite recursion in normalizeType.
                if (implClass && implClass.name !== bindingName) {
                    ast.aliases.push({ name: bindingName, targetType: implClass.name });
                }

                ast.functions.unshift(...implAst.functions);
                ast.structs.unshift(...implAst.structs);
                ast.classes.unshift(...implAst.classes);
                ast.enums.unshift(...(implAst.enums || []));
                ast.aliases.unshift(...implAst.aliases);
                ast.templates.unshift(...implAst.templates);
                ast.binds.unshift(...implAst.binds);
                ast.stricts.unshift(...implAst.stricts);
                ast.interfaces.unshift(...implAst.interfaces);
            }

            continue;
        }

        // Regular module import
        const files = resolveModuleFiles(moduleName, names, baseDir, sourceFile);
        for (const resolved of files) {
            if (visited.has(resolved)) continue;
            visited.add(resolved);

            const importedAst = buildAstFromSource(fs.readFileSync(resolved, "utf8"), {
                baseDir:    path.dirname(resolved),
                visited,
                bindings,
                sourceFile: resolved,
            });

            ast.functions.unshift(...importedAst.functions);
            ast.structs.unshift(...importedAst.structs);
            ast.classes.unshift(...importedAst.classes);
            ast.enums.unshift(...(importedAst.enums || []));
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
