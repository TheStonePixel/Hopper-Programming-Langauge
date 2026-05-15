# modules/llvm — TODO

LLVM C API wrappers so the Hopper compiler can eventually compile itself.
All functions are `extern` bindings — no implementation, just declarations.

---

## llvm.hop — complete

Core IR construction: module, context, types, function/block creation,
IR builders, casts, arithmetic, control flow, phi, switch, volatile,
aggregate ops, const helpers, verify, print, bitcode write.

---

## types.hop — complete

Integer widths (i1/i8/i16/i32/i64), float/double/fp128, array, struct
(named and anonymous), type inspection and kind constants.

---

## target.hop — complete

X86, ARM/Thumb, AArch64 target initializers. Target lookup, target
machine creation, data layout, module triple/layout binding, emission
to file and memory buffer (assembly and object file).

---

## pass.hop — not yet created

Optimization pass manager. Lower priority — only needed when we want
the compiler to optimize its output.

- [ ] `LLVMCreatePassManager() address`
- [ ] `LLVMCreateFunctionPassManagerForModule(address module) address`
- [ ] `LLVMDisposePassManager(address pm)`
- [ ] `LLVMRunPassManager(address pm, address module) int`
- [ ] `LLVMInitializeFunctionPassManager(address fpm) int`
- [ ] `LLVMRunFunctionPassManager(address fpm, address fn) int`
- [ ] `LLVMFinalizeFunctionPassManager(address fpm) int`
- [ ] `LLVMAddInstructionCombiningPass(address pm)`
- [ ] `LLVMAddReassociatePass(address pm)`
- [ ] `LLVMAddGVNPass(address pm)`
- [ ] `LLVMAddCFGSimplificationPass(address pm)`
- [ ] `LLVMAddPromoteMemoryToRegisterPass(address pm)` — mem2reg
- [ ] `LLVMAddDeadStoreEliminationPass(address pm)`
- [ ] `LLVMAddAggressiveDCEPass(address pm)`
