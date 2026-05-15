# modules/llvm — TODO

LLVM C API wrappers so the Hopper compiler can eventually compile itself.
All functions are `extern` bindings — no implementation, just declarations.

Current file: `llvm.hop` — covers module, context, basic IR builders.

---

## llvm.hop — done: core IR construction

Already have: module, context, types, function/block creation, most IR builders,
const helpers, verify, print, bitcode write.

- [ ] `LLVMGetParam(address fn, int index) address` — get function parameter by index
- [ ] `LLVMSetValueName2(address val, string name, int len)` — name a value for readability
- [ ] `LLVMGetInsertBlock(address builder) address` — get current block
- [ ] `LLVMGetBasicBlockParent(address block) address` — get function from block
- [ ] `LLVMCountParams(address fn) int` — number of parameters
- [ ] `LLVMGetReturnType(address fnType) address` — return type of function type
- [ ] `LLVMBuildUnreachable(address builder) address` — emit unreachable terminator
- [ ] `LLVMBuildSwitch(address builder, address val, address defaultBlock, int numCases) address`
- [ ] `LLVMAddCase(address switch, address onVal, address destBlock)`
- [ ] `LLVMBuildPhi(address builder, address type, string name) address`
- [ ] `LLVMAddIncoming(address phi, address vals, address blocks, int count)`
- [ ] `LLVMBuildBitCast(address builder, address val, address destType, string name) address`
- [ ] `LLVMBuildIntToPtr(address builder, address val, address destType, string name) address`
- [ ] `LLVMBuildPtrToInt(address builder, address val, address destType, string name) address`
- [ ] `LLVMBuildNeg(address builder, address val, string name) address`
- [ ] `LLVMBuildNot(address builder, address val, string name) address`
- [ ] `LLVMBuildURem(address builder, address lhs, address rhs, string name) address`
- [ ] `LLVMBuildSRem(address builder, address lhs, address rhs, string name) address`
- [ ] `LLVMBuildAShr(address builder, address lhs, address rhs, string name) address`
- [ ] `LLVMBuildZExt(address builder, address val, address destType, string name) address`
- [ ] `LLVMBuildFPExt(address builder, address val, address destType, string name) address`
- [ ] `LLVMBuildFPTrunc(address builder, address val, address destType, string name) address`
- [ ] `LLVMBuildFPToUI(address builder, address val, address destType, string name) address`
- [ ] `LLVMBuildUIToFP(address builder, address val, address destType, string name) address`
- [ ] `LLVMBuildExtractValue(address builder, address agg, int index, string name) address`
- [ ] `LLVMBuildInsertValue(address builder, address agg, address val, int index, string name) address`

---

## target.hop — not yet created

Target machine creation for emitting object files.

- [ ] `LLVMInitializeX86TargetInfo()`
- [ ] `LLVMInitializeX86Target()`
- [ ] `LLVMInitializeX86TargetMC()`
- [ ] `LLVMInitializeX86AsmPrinter()`
- [ ] `LLVMInitializeX86AsmParser()`
- [ ] `LLVMGetDefaultTargetTriple() string`
- [ ] `LLVMGetTargetFromTriple(string triple, address target, address err) int`
- [ ] `LLVMCreateTargetMachine(address target, string triple, string cpu, string features, int opt, int reloc, int model) address`
- [ ] `LLVMDisposeTargetMachine(address tm)`
- [ ] `LLVMTargetMachineEmitToFile(address tm, address module, string filename, int codegen, address err) int`
- [ ] `LLVMCreateTargetDataLayout(address tm) address`
- [ ] `LLVMSetModuleDataLayout(address module, address dl)`
- [ ] `LLVMSetTarget(address module, string triple)`
- [ ] Constants: `LLVMCodeGenLevelNone=0`, `LLVMCodeGenLevelDefault=2`, `LLVMCodeGenLevelAggressive=3`
- [ ] Constants: `LLVMRelocPIC=2`, `LLVMCodeModelDefault=0`
- [ ] Constants: `LLVMObjectFile=1`, `LLVMAssemblyFile=0`

---

## pass.hop — not yet created

Optimization pass manager.

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

---

## types.hop — not yet created

Additional type constructors not in llvm.hop.

- [ ] `LLVMInt32TypeInContext(address ctx) address`
- [ ] `LLVMInt16TypeInContext(address ctx) address`
- [ ] `LLVMInt8TypeInContext(address ctx) address` — already have this
- [ ] `LLVMFloatTypeInContext(address ctx) address`
- [ ] `LLVMArrayType(address elemType, int count) address`
- [ ] `LLVMStructTypeInContext(address ctx, address elementTypes, int elementCount, int packed) address`
- [ ] `LLVMStructSetBody(address structType, address elementTypes, int count, int packed)`
- [ ] `LLVMGetTypeKind(address type) int`
- [ ] `LLVMPrintTypeToString(address type) string`
- [ ] `LLVMSizeOf(address type) address` — constant expression for size
