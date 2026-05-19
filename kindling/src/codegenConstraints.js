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
