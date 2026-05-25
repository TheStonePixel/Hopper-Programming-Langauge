// ── Constraint system codegen ─────────────────────────────────────────────
//
// Emits LLVM IR assertions for Hopper's four contract constructs:
//
//   requires  — function precondition  (checked at call site entry)
//   ensures   — function postcondition (checked before every return)
//   invariant — loop invariant         (checked at every loop-head evaluation)
//   constrain — variable type narrowing (range check on assignment)
//
// All checks compile to: evaluate boolean expression → br to ok/fail →
//   fail: call @abort() + unreachable.
//
// genExpr and ensureBool are passed in from codegenLLVM to avoid circular
// imports.  The caller owns the IRBuilder and module-level state.
//
// Strict mode (--strict):
//   strictAnalyze(ast) runs a compile-time constant-folding pass before IR
//   generation.  Any provably-violated contract is a hard compile error.
//   Non-provable contracts still emit runtime checks.

import { HopperWarning, WarnType } from "./errors.js";
import { emitWarning }            from "./codegenState.js";

// ── violation site ────────────────────────────────────────────────────────

// Emit the standard violation sequence: abort() + unreachable.
// condReg is an i1 register that must be true for the assertion to pass.
function emitContractAssert(ir, condReg, prefix) {
    const okLbl   = ir.newLabel(`${prefix}.ok.`);
    const failLbl = ir.newLabel(`${prefix}.fail.`);
    ir.emit(`br i1 ${condReg}, label %${okLbl}, label %${failLbl}`);
    ir.emit(`${failLbl}:`);
    ir.emit(`  call void @abort()`);
    ir.emit(`  unreachable`);
    ir.emit(`${okLbl}:`);
}

// ── requires ─────────────────────────────────────────────────────────────

// Emit precondition assertions at function entry.
// Call this after all parameters have been stored into their allocas.
export function emitRequiresChecks(ir, requires, genExpr, ensureBool) {
    for (const expr of requires) {
        const ct = constEval(expr, new Map());
        if (ct.known && ct.value) {
            emitWarning(new HopperWarning(expr.loc ?? null, WarnType.TautologicalConstraint,
                `'requires' constraint is always true`,
                `remove it — a constraint that is always true does nothing`));
            continue;
        }
        const val  = genExpr(ir, expr);
        const cond = ensureBool(ir, val);
        emitContractAssert(ir, cond, "requires");
    }
}

// ── ensures ──────────────────────────────────────────────────────────────

// Emit postcondition assertions before a return.
//
// resultReg  — the LLVM register holding the computed return value.
// retLlType  — LLVM type string  (e.g. "i64")
// retHType   — Hopper type string (e.g. "int")
//
// Temporarily binds the name "result" in ir.vars so that ensures clauses
// can reference it via an ordinary Var expression.  The binding is removed
// before this function returns.
export function emitEnsuresChecks(ir, ensures, resultReg, retLlType, retHType, genExpr, ensureBool) {
    if (!ensures || ensures.length === 0) return;

    const resultPtr = ir.newTmp();
    ir.emit(`${resultPtr} = alloca ${retLlType}`);
    ir.emit(`store ${retLlType} ${resultReg}, ${retLlType}* ${resultPtr}`);
    ir.vars.set("result", { ptr: resultPtr, type: retLlType, hType: retHType });

    for (const expr of ensures) {
        const ct = constEval(expr, new Map());
        if (ct.known && ct.value) {
            emitWarning(new HopperWarning(expr.loc ?? null, WarnType.TautologicalConstraint,
                `'ensures' constraint is always true`,
                `remove it — a constraint that is always true does nothing`));
            continue;
        }
        const val  = genExpr(ir, expr);
        const cond = ensureBool(ir, val);
        emitContractAssert(ir, cond, "ensures");
    }

    ir.vars.delete("result");
}

// ── invariant ────────────────────────────────────────────────────────────

// Emit loop invariant assertions at the loop head (after the condition label,
// before the condition is tested).  The caller places these immediately after
// emitting the condLbl label.
export function emitInvariantChecks(ir, invariants, genExpr, ensureBool) {
    for (const expr of invariants) {
        const ct = constEval(expr, new Map());
        if (ct.known && ct.value) {
            emitWarning(new HopperWarning(expr.loc ?? null, WarnType.TautologicalConstraint,
                `'invariant' constraint is always true`,
                `remove it — a constraint that is always true does nothing`));
            continue;
        }
        const val  = genExpr(ir, expr);
        const cond = ensureBool(ir, val);
        emitContractAssert(ir, cond, "invariant");
    }
}

// ── constrain ────────────────────────────────────────────────────────────

// Return the valid integer range for a Hopper type, or null if unconstrained.
// Values are BigInt so they handle unsigned i64 upper bounds without overflow.
export function constrainRange(hType) {
    switch (hType) {
        case "byte":
            return { lo: -128n,                  hi: 127n,                  signed: true  };
        case "unsignedbyte":
        case "unsigned byte":
            return { lo: 0n,                     hi: 255n,                  signed: false };
        case "bool":
            return { lo: 0n,                     hi: 1n,                    signed: false };
        case "unsignedint":
        case "unsigned int":
            return { lo: 0n,                     hi: 18446744073709551615n,  signed: false };
        // "int" is i64 — full range, no useful constraint
        default:
            return null;
    }
}

// Emit an in-range assertion for `valReg : valLlType` given a Hopper constrain type.
// No-ops if constrainHType has no useful range (e.g. "int").
export function emitConstrainCheck(ir, valReg, valLlType, constrainHType) {
    const range = constrainRange(constrainHType);
    if (!range) return;

    const { lo, hi, signed } = range;
    const icmpLo = signed ? "icmp sge" : "icmp uge";
    const icmpHi = signed ? "icmp sle" : "icmp ule";

    const loReg  = ir.newTmp();
    const hiReg  = ir.newTmp();
    const both   = ir.newTmp();

    ir.emit(`${loReg} = ${icmpLo} ${valLlType} ${valReg}, ${lo}`);
    ir.emit(`${hiReg} = ${icmpHi} ${valLlType} ${valReg}, ${hi}`);
    ir.emit(`${both} = and i1 ${loReg}, ${hiReg}`);
    emitContractAssert(ir, both, "constrain");
}

// ── strict mode: compile-time constant evaluator ─────────────────────────

// Evaluate an AST expression as a compile-time constant.
// env: Map<string, number> of known variable/param/const values.
// Returns { value: number, known: true } or { known: false }.
function constEval(expr, env) {
    if (!expr) return { known: false };
    switch (expr.kind) {
        case "IntLiteral":  return { value: Number(expr.value), known: true };
        case "HexLiteral":  return { value: Number(expr.value), known: true };
        case "CharLiteral": return { value: Number(expr.value), known: true };
        case "BoolLiteral": return { value: expr.value ? 1 : 0, known: true };
        case "Var": {
            if (env && env.has(expr.name)) return { value: env.get(expr.name), known: true };
            return { known: false };
        }
        case "Unary": {
            const v = constEval(expr.expr, env);
            if (!v.known) return { known: false };
            if (expr.op === "-") return { value: -v.value, known: true };
            if (expr.op === "!") return { value: v.value ? 0 : 1, known: true };
            return { known: false };
        }
        case "Binary": {
            const l = constEval(expr.left,  env);
            const r = constEval(expr.right, env);
            if (!l.known || !r.known) return { known: false };
            switch (expr.op) {
                case "+":  return { value: l.value + r.value,            known: true };
                case "-":  return { value: l.value - r.value,            known: true };
                case "*":  return { value: l.value * r.value,            known: true };
                case "/":  return r.value !== 0
                    ? { value: Math.trunc(l.value / r.value), known: true }
                    : { known: false };
                case "%":  return r.value !== 0
                    ? { value: l.value % r.value, known: true }
                    : { known: false };
                case "==": return { value: l.value === r.value ? 1 : 0, known: true };
                case "!=": return { value: l.value !== r.value ? 1 : 0, known: true };
                case "<":  return { value: l.value <  r.value ? 1 : 0, known: true };
                case "<=": return { value: l.value <= r.value ? 1 : 0, known: true };
                case ">":  return { value: l.value >  r.value ? 1 : 0, known: true };
                case ">=": return { value: l.value >= r.value ? 1 : 0, known: true };
                case "&&": return { value: (l.value && r.value) ? 1 : 0, known: true };
                case "||": return { value: (l.value || r.value) ? 1 : 0, known: true };
            }
            return { known: false };
        }
        default:
            return { known: false };
    }
}

// ── strict mode: pre-pass AST walker ─────────────────────────────────────

// Walk the entire AST before IR generation, looking for provable contract
// violations using constant folding.  Throws a descriptive Error on the
// first confirmed violation.
//
// What it catches:
//   constrain — literal initialiser out of type range
//     e.g.  int x = 300 constrain [byte]  →  error (300 > 127)
//   requires  — call site where all arguments are compile-time constants
//     e.g.  divide(10, 0)  where  requires b != 0  →  error
//
// What it does NOT catch (runtime checks still cover these):
//   ensures, invariant, requires with non-constant args
export function strictAnalyze(ast) {
    // Build function requires map: name → { params, requires[] }
    const funcSigs = new Map();
    for (const fn of ast.functions || []) {
        if (!fn.isExtern && fn.requires && fn.requires.length > 0) {
            funcSigs.set(fn.name, { params: fn.params, requires: fn.requires });
        }
    }

    // Build module-level constant map
    const globalConsts = new Map();
    for (const c of ast.consts || []) {
        if (typeof c.value === "number") globalConsts.set(c.name, c.value);
    }

    function walkBlock(block, env) {
        if (!block) return;
        // Local env inherits from outer; VarDecl with literal values extends it.
        const localEnv = new Map(env);
        for (const s of block.statements) walkStmt(s, localEnv);
    }

    function walkStmt(s, env) {
        if (!s) return;
        switch (s.kind) {
            case "VarDecl": {
                if (s.constrain && s.init) {
                    const val = constEval(s.init, env);
                    if (val.known) {
                        const range = constrainRange(s.constrain);
                        if (range) {
                            const lo = Number(range.lo);
                            const hi = Number(range.hi);
                            if (val.value < lo || val.value > hi) {
                                throw new Error(
                                    `strict: constrain violation — ` +
                                    `'${s.name}' = ${val.value} is outside ` +
                                    `${s.constrain} range [${lo}..${hi}]`
                                );
                            }
                        }
                    }
                    // Extend env with the known value for downstream checks
                    const initVal = constEval(s.init, env);
                    if (initVal.known) env.set(s.name, initVal.value);
                }
                if (s.init) walkExpr(s.init, env);
                break;
            }
            case "Assign":
                walkExpr(s.expr, env);
                env.delete(s.name); // no longer a known constant after reassignment
                break;
            case "IfStmt":
                walkExpr(s.cond, env);
                walkBlock(s.thenBlock, env);
                if (s.elseBlock) walkBlock(s.elseBlock, env);
                break;
            case "WhileStmt":
                walkExpr(s.cond, env);
                walkBlock(s.body, env);
                break;
            case "ForStmt":
                if (s.init) walkStmt(s.init, env);
                if (s.cond) walkExpr(s.cond, env);
                if (s.update) walkStmt(s.update, env);
                walkBlock(s.body, env);
                break;
            case "ReturnStmt":
                if (s.expr) walkExpr(s.expr, env);
                break;
            case "ExprStmt":
                walkExpr(s.expr, env);
                break;
            case "FieldAssign":
                walkExpr(s.expr, env);
                break;
            case "DeferStmt":
                walkExpr(s.expr, env);
                break;
        }
    }

    function walkExpr(e, env) {
        if (!e) return;
        switch (e.kind) {
            case "Call": {
                const sig = funcSigs.get(e.callee);
                if (sig && sig.requires.length > 0) {
                    const argVals = (e.args || []).map(a => constEval(a, env));
                    if (argVals.every(v => v.known)) {
                        const callEnv = new Map(env);
                        sig.params.forEach((p, i) => {
                            if (argVals[i]) callEnv.set(p.name, argVals[i].value);
                        });
                        for (const req of sig.requires) {
                            const result = constEval(req, callEnv);
                            if (result.known && !result.value) {
                                const argStr = sig.params
                                    .map((p, i) => `${p.name}=${argVals[i].value}`)
                                    .join(", ");
                                throw new Error(
                                    `strict: requires violation — ` +
                                    `call to '${e.callee}(${argStr})' ` +
                                    `violates a precondition`
                                );
                            }
                        }
                    }
                }
                for (const a of e.args || []) walkExpr(a, env);
                break;
            }
            case "Binary":
                walkExpr(e.left,  env);
                walkExpr(e.right, env);
                break;
            case "Unary":
            case "CastExpr":
                walkExpr(e.expr, env);
                break;
            case "MethodCall":
            case "ChainedMethodCall":
                if (e.object) walkExpr(e.object, env);
                for (const a of e.args || []) walkExpr(a, env);
                break;
        }
    }

    function walkFn(fn) {
        if (fn.body) walkBlock(fn.body, new Map(globalConsts));
    }

    for (const fn  of ast.functions  || []) walkFn(fn);
    for (const cls of ast.classes    || []) {
        for (const m of cls.methods  || []) walkFn(m);
        if (cls.constructor) walkFn(cls.constructor);
    }
    if (ast.entry && ast.entry.body) walkBlock(ast.entry.body, new Map(globalConsts));
}
