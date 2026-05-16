# modules/llvm — TODO

LLVM C API wrappers for the self-hosted Hopper compiler.
All functions are `extern` bindings — no implementation, just declarations.

---

## llvm.hop — complete

Everything the compiler needs to emit LLVM IR:

- Context and module lifecycle
- All integer widths (i1/i8/i16/i32/i64), float, double, void, pointer,
  function type, array type, struct type (named and anonymous)
- Function declaration, linkage, calling convention, attributes
- Basic block creation and navigation
- Builder creation and positioning
- Memory: alloca, load, store, GEP, volatile, alignment, memcpy, memset
- Integer arithmetic: add, sub, mul, sdiv, udiv, srem, urem, neg
- Bitwise: and, or, xor, not, shl, lshr, ashr
- Float arithmetic: fadd, fsub, fmul, fdiv, fneg
- Comparison: icmp, fcmp (predicates documented in comments)
- Casts: trunc, zext, sext, fptosi, fptoui, sitofp, uitofp, fptrunc, fpext,
  bitcast, ptrtoint, inttoptr
- Control flow: ret, br, condbr, switch, unreachable, phi
- Calls: call2, tailcall2
- Inline assembly: LLVMGetInlineAsm
- Aggregate: extractvalue, insertvalue
- Global variables: add, get, set initializer, set constant, string globals
- Constants: int, real, null, allones, array, struct, bitcast, undef
- Value inspection: typeof, getname, setname, isconstant, isnull, isundef
- Pass manager (legacy): create, run, dispose, common optimization passes
- Verification and output: verifymodule, verifyfunction, print, bitcode write

---

## target.hop — deferred

Target machine creation for in-process object file emission.
Not needed until hopbuild compiles IR to ELF without shelling out to clang.
Add when the build tool is being built (Phase 4).
