# Introduction

## What Hopper Is

Hopper is a compiled, statically typed, manually memory-managed systems programming language. It targets bare metal, embedded systems, and hosted operating system environments. It compiles to LLVM IR and from there to native machine code via clang.

---

## What Hopper Is For

Hopper is designed for software that runs close to the hardware: operating system kernels, device drivers, embedded firmware, network stacks, real-time controllers, and systems utilities. This is software that:

- Must run on hardware without an operating system or heap allocator
- Must issue CPU instructions and access memory-mapped hardware registers directly
- Must have predictable timing and allocation behavior
- Must be auditable: every operation visible in the source code

---

## Key Properties

**Statically typed.** All types are known at compile time. There is no dynamic typing, no runtime type checking, and no type inference beyond what is required to compile template functions.

**Manually memory-managed.** Heap allocation is explicit: `allocate N` obtains N bytes, `deallocate ptr` releases them. There is no garbage collector and no reference counting. RAII via constructors and destructors covers the common case of resource management tied to object lifetime.

**No mandatory runtime.** A Hopper program that makes no system calls and performs no heap allocation compiles to a binary with no startup code, no exception tables, and no runtime dependencies beyond the target ABI. The language can target bare metal.

**Compiled.** Programs are compiled to native machine code via LLVM. There is no interpreter and no virtual machine.

**Hardware explicit.** Hardware capabilities — system calls, SIMD, memory-mapped I/O, interrupt vectors — are expressed in the module system as named interfaces with typed implementations. Programs are written against hardware-independent contract names; the build configuration (`hopper.json`) selects the concrete implementation for each target.

**Explicit over implicit.** If something happens at runtime — an allocation, a cast, a system call — it appears in the source code. There are no hidden operations, no implicit coercions, and no invisible runtime behaviors.

---

## Who This Specification Is For

This specification is for:

- **Implementors** building conforming Hopper compilers and build systems
- **Library authors** writing modules that will be consumed by Hopper programs
- **Tooling authors** building editors, linters, formatters, and analysis tools
- **Advanced users** who need a precise reference for language behavior

For programmers learning Hopper, the specification is a reference, not a tutorial. It describes what the language does, not how to use it.

---

## Relationship to the Reference Implementation

The Hopper bootstrap compiler (`seed/compiler/hopperc.js`) and build system (`seed/build_system/hopper`) are the reference implementation. Where this specification is ambiguous or incomplete, the reference implementation's behavior is authoritative for the current working draft. Discrepancies between this specification and the reference implementation are specification defects.