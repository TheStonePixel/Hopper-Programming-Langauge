## ABI

The Hopper ABI is not hand-specified. It is defined by what clang and LLVM emit for a given target platform. Hopper has no independent register assignment rules, stack layout rules, or struct padding rules — those are properties of the LLVM target machine model and the platform's C ABI. This section documents the observable ABI as produced by the current compiler; it is descriptive of what the compiler produces, not a specification the compiler is required to conform to independently.

### Design Principle

Hopper delegates all machine-specific concerns to LLVM. The compiler frontend produces LLVM IR text. That IR is passed to clang for optimisation, instruction selection, register allocation, and binary emission. Clang selects the calling convention and data layout appropriate to the target triple. The Hopper compiler has no knowledge of hardware registers, alignment rules, or stack frame layout beyond what is expressed in the IR types and signatures it generates.

The Hopper ABI is therefore a function of two inputs:

1. The LLVM IR the Hopper compiler emits — types, function signatures, constant layout.
2. The target triple clang is invoked with — which determines the platform C ABI applied to that IR.

Changing the LLVM backend version or the clang invocation flags MAY change the resulting binary ABI. Hopper makes no stability guarantee across toolchain updates.

### Platform Scope

Two target platforms are currently supported:

| Platform | Compiler flags | ABI applied |
|---|---|---|
| Linux x86-64 (hosted) | default clang target | x86-64 System V |
| ARMv6 bare-metal (Pi Zero) | `arm-none-eabi`, `-mcpu=arm1176jzf-s`, `-mfloat-abi=soft` | ARM EABI soft-float |

Other platforms are **not yet implemented**. See §14.6 for porting requirements.

### Relationship to C

Hosted Hopper programs MUST link against libc (for `malloc`, `free`, and optionally `abort`) and pthreads (`-lpthread`). The entry point is C-runtime-compatible: the Hopper compiler emits `@main` returning `i64`. The C runtime's `_start` stub calls `main`; Hopper does not supply its own startup code on hosted targets.

`extern function` declarations map to C-linkage symbols. See §14.4 for type correspondence rules, including the important `int`-width mismatch between Hopper's `int` (i64) and C's `int` (i32).

### Section Map

| Section | Topic |
|---|---|
| §14.1 | Calling conventions — argument passing, return values, register assignment |
| §14.2 | Data layout — `bitfield`, `strict`, `bind` for hardware register topology |
| §14.3 | Binary format — ELF64 hosted; raw `kernel.img` bare-metal |
| §14.4 | FFI — `extern function` declarations and C type correspondence |
| §14.5 | Symbol mangling — name encoding for functions, methods, templates, and operators |
| §14.6 | Platform compatibility — supported targets and porting guide |
