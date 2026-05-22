# Hardware as Code: A Forward Model for Compiler Backends in Hopper

## Overview

Most compilers accumulate hardware knowledge over time. An x86-64 backend grows instruction selection tables, ABI lowering rules, calling convention logic, and syscall encoding. An ARM64 backend grows a parallel set. Adding a new architecture means modifying the compiler. Removing an architecture means more modification. The hardware model is embedded inside the tool.

Hopper's module system already challenges this assumption at the OS interface layer. Syscall numbers for Linux on x86-64 live in `x86_64/src/LinuxSyscalls.hop` — not in the compiler. SIMD capabilities live in `x86_64/interfaces/SIMD.hop` — not in the compiler. The build file selects which hardware module satisfies which interface. The compiler has no syscall knowledge and no SIMD tables. That is not an accident; it is the first step of a longer design.

This document describes where that design leads.

> An ISA is not compiled into the compiler. It is compiled alongside programs.

That is the long-term goal. What follows is what it means and why it matters.

---

## The Current Foundation

Hopper's module system already implements the structural separation described in this document at the OS interface and capability layer:

- Hardware assumptions live in explicitly named modules (`x86_64/`, `arm64/`)
- OS interfaces live in a separate layer (`linux/`) with no ISA knowledge
- Programs depend on contracts, not implementations
- The build file (`hopper.json` targets) is the only place where hardware is named

Extending that principle into the compiler backend itself — so that instruction selection, ABI rules, and encoding knowledge are also externalized into modules — is the direction this document describes.

The current compiler delegates to LLVM for instruction selection and binary encoding. LLVM's x86-64 backend is still a monolithic ISA model. The forward model described here would progressively carry Hopper's module principle down through that layer, eventually making the backend ISA-neutral at every level. That is not a near-term goal. It is the coherent endpoint of the design that has already begun.

---

## The Problem with Embedded Hardware Knowledge

When ISA logic lives inside the compiler, several things become true simultaneously:

**The compiler is never done.** Every new architecture requires new backend work. Every CPU generation may require new instruction selection rules. The compiler grows without bound as hardware diversifies.

**Hardware assumptions are invisible.** They are encoded in compiler logic rather than named in source. A developer cannot inspect them, replace them, or reason about them independently. They are artifacts of compiler history, not explicit design decisions.

**Testing is conflated.** Testing the compiler and testing the ISA model happen together. A bug in x86-64 lowering is indistinguishable from a bug in optimization without significant infrastructure.

**Adding a target is invasive.** Supporting RISC-V or a custom research ISA requires modifying the compiler itself — contributing to a monolith, coordinating with backend maintainers, understanding internal abstractions.

Hopper's module system already solves this at the interface layer. The forward model extends the solution to the compiler layer.

---

## The Design Goal

The intended endpoint of Hopper's compilation model is:

> A compiler backend that contains no ISA-specific logic.

All architecture-specific behavior — instructions, calling conventions, ABI rules, encoding, cost models — is defined externally in modules that are inspectable, replaceable, composable, and verifiable at build time.

Instruction selection is not eliminated — it is relocated into ISA modules as declarative mappings consumed by the backend. The compiler consumes these definitions rather than implementing them. Its role shifts from "machine model" to "optimization engine over declared machines."

---

## Three Separated Concerns

### ISA Modules — The Hardware Layer

Each ISA is expressed as a module in Hopper code. These modules define the complete behavior of a target machine:

- instruction signatures and semantic effects
- calling conventions and register constraints
- syscall interfaces and ABI rules
- vector and hardware capability declarations
- opcode mappings and encoding metadata

The structural outline:

```
x86_64/
  interfaces/
    LinuxSyscalls.hop    ← OS ABI contract
    SIMD.hop             ← vector capability contract
  src/
    LinuxSyscalls.hop    ← free functions: one syscall instruction each
    SIMD.hop             ← X86SIMD class: SSE2 inline asm

arm64/
  interfaces/
    LinuxSyscalls.hop    ← same contract, different numbers
    SIMD.hop             ← same contract, NEON implementation
  src/
    LinuxSyscalls.hop    ← free functions: svc 0, ARM64 register convention
    SIMD.hop             ← ARM64SIMD class: NEON inline asm
```

Crucially: the compiler does not define what instructions exist. The ISA modules do.

### OS Interface Modules — The Contract Layer

Programs are written against OS-level interfaces, not hardware. The `linux` module is already a pure interface module — it contains no implementation code, no ISA references, no calling convention knowledge. It declares what a Linux program needs; it makes no claim about how those needs are satisfied.

This layer is already complete. It does not need to change as the backend evolves.

### The Compiler Backend — The Optimization Engine

In the forward model, the backend is explicitly constrained to be ISA-agnostic. Its responsibilities are:

- IR construction and optimization passes
- control-flow and data-flow analysis
- cost modeling over *declared* instruction semantics
- selection among equivalent declared implementations
- legality checking of transformations

It does not contain instruction selection tables, architecture-specific lowering logic, ABI rules, or syscall encoding. Those are in ISA modules. The backend operates over declared machine descriptions — it does not contain them.

Today, LLVM acts as the instruction emission layer — a legacy backend that currently holds the ISA knowledge this model intends to externalize. The path forward is progressive: LLVM's role is progressively isolated behind a defined ISA interface until what it provides can be described in modules rather than in a C++ compiler backend.

---

## Instruction Sets as Declarative Systems

The most ambitious part of the forward model is treating instruction sets as data-defined systems rather than compiler-internal logic.

In current compiler architectures, an instruction set is a body of knowledge baked into the backend. In the model described here, an ISA module declares:

- what instructions exist and their signatures
- semantic effects on registers and memory
- side-effect and ordering constraints
- cost and latency metadata
- encoding rules

This enables several things that are structurally difficult today:

**New architectures are additive.** Adding RISC-V or a custom research ISA means writing a new module — not modifying the compiler. No backend pull requests, no internal abstraction negotiation.

**ISA definitions are independently verifiable.** Because they are code, they can be tested, diffed, reviewed, and reasoned about in isolation from compiler logic.

**Portability is structural.** The question "does this program depend on x86-64?" becomes "does any `implementation` path in this project's build file reference the `x86_64` module?" It is answerable by inspection.

**Machine models are replaceable.** An ISA module can be swapped for a test implementation, an emulator stub, or a restricted profile without touching the compiler or the program.

---

## What Programs See — Already True

The program layer is the part of this model that already works. A Hopper program today:

```hopper
import IO from linux
import FileSystem from linux

entry main {
    int fd = open("data.txt", 0, 0)
    address buf = allocate 4096
    int n = read(fd, buf, 4096)
    write(1, buf, n)
    close(fd)
}
```

This program has no ISA knowledge. It calls `open`, `read`, `write` — functions whose implementations come into scope from whichever ISA module the build file selects. On x86-64 today, `read` compiles to one `syscall` instruction. On ARM64, when that module exists, it will compile to one `svc 0` instruction. The program source does not change.

This part of the model is not a vision. It is built.

---

## SIMD and Capability Modules

Not all hardware concepts map through OS interfaces. SIMD, atomics, memory barriers, and cryptographic acceleration are ISA capabilities with no OS-level analog. They are performance-critical and not something a portability layer should hide.

In the forward model, these are handled as capability modules within ISA definitions — already the case for SIMD in current Hopper:

```hopper
import SIMD from x86_64

X86SIMD simd = X86SIMD()
int mask = simd.scanByte16(buf + offset, 10)
```

The program names the capability (`SIMD`) and the ISA context (`x86_64`). The interface defines the contract. The implementation uses SSE2 on x86-64 and NEON on ARM64. The interface is identical across both.

This pattern — capability as interface, ISA module as implementation, build file as selector — is how all hardware-specific functionality is intended to work.

---

## Implications for Compiler Evolution

### The Backend Stabilizes

A backend that contains no ISA-specific logic has a stable surface area. It evolves around optimization theory, scheduling, SSA transformations, alias analysis, and cost modeling. It does not accumulate ISA-specific branches over time. The number of supported architectures stops being a factor in backend complexity.

### ISA Evolution Decouples

New CPU generations, new instruction extensions, new calling convention revisions — all of these become module updates, not compiler modifications. The AMD Zen 5 cost model is a module. The RISC-V V extension is a module. A custom neural accelerator instruction set is a module.

### Testing Separates

Compiler optimization correctness and ISA model correctness are tested independently. An ISA module can be validated against a hardware reference without running the full compiler. The compiler can be tested with a minimal stub ISA without needing real hardware.

---

## Non-Goals

This system explicitly does not attempt:

- **Automatic hardware abstraction at runtime.** There is no virtual ISA, no dynamic adaptation to the host machine. Hardware specificity is named at build time.
- **Cross-ISA binary compatibility without recompilation.** A binary built for x86-64 runs on x86-64. Portability is a build-time property, not a runtime illusion.
- **Hidden ISA virtualization.** Programs that need SIMD name the fact that they need SIMD. The ISA context is visible in the build file.
- **Compiler-internal encoding of all ISA behavior.** The forward model moves ISA knowledge out of the compiler, not into a more elaborate internal form.

---

## The Path From Here

The current state and the forward model are not discontinuous. They are points on the same line:

**Today:** Syscall numbers, SIMD implementations, and calling conventions live in ISA modules. The compiler has no knowledge of them. The build file wires modules to interfaces. Programs are ISA-unaware at the source level.

**Near term:** The arm64 module is implemented. Cross-compilation between x86-64 and ARM64 is demonstrated by changing build file targets with zero source changes.

**Further out:** Instruction semantic descriptions begin moving into ISA modules. The compiler's LLVM dependency is progressively isolated behind a declared interface, so that the ISA knowledge LLVM holds today could eventually be described in Hopper modules rather than C++ compiler internals.

**Long term:** The backend contains no ISA-specific logic. New architectures are added by adding modules. Hardware is composed into programs at build time, not embedded in tools.

---

## Summary

| Layer | Responsibility | Status |
|-------|---------------|--------|
| ISA Modules | Define machine behavior explicitly | Partial — syscalls and SIMD done |
| OS Modules | Define system-level contracts | Complete |
| Programs | Express intent using interfaces | Complete |
| Compiler Backend | Optimize over declared semantics | Forward goal |
| Build System | Compose hardware mappings | Complete |

The structural insight is simple:

> Hardware is not a compiler concern. It is a module.

The module system already enforces this at the interface layer. The forward model extends the same principle — the same mechanism, the same naming discipline, the same build-time composition — down through the compiler itself.
