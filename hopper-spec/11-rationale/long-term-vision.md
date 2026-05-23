# Long-Term Vision

*This document is non-normative. It describes the forward direction for Hopper's design beyond the current implementation.*

---

## Overview

Hopper's current implementation is a working foundation: a compiled, statically typed, manually memory-managed systems language with a module system that separates hardware from programs. The design decisions made so far are not arbitrary — they are the first steps of a coherent long-term direction.

This document describes four threads of that direction.

---

## 1. Progressive Externalization of Hardware Knowledge

The current module system already externalizes hardware at the contract and ISA level: syscall numbers live in `x86_64/src/LinuxSyscalls.hop`, SIMD operations live in `x86_64/src/SIMD.hop`, and the build file (`hopper.json` targets) is the only place where hardware is named. Programs are ISA-unaware at the source level.

The forward direction extends this principle into the compiler itself. Today, LLVM holds instruction selection logic, ABI rules, and encoding knowledge in its C++ backend. The long-term goal is that these too become Hopper modules — ISA modules that declare instruction semantics, calling conventions, and register constraints in Hopper source rather than compiler internals.

The path is incremental and is described in full in `build-system.md`. The coherent endpoint:

> Hardware is not a compiler concern. It is a module.

**Near-term:** The `arm64` ISA module is implemented, demonstrating cross-platform portability by changing only `hopper.json` target paths with zero source changes.

**Further out:** Instruction semantic descriptions begin moving into ISA modules. The compiler's LLVM dependency is progressively isolated behind a declared contract.

**Long-term:** The compiler backend contains no ISA-specific logic. New architectures are added by adding modules, not by modifying the compiler.

---

## 2. Optional Ownership and Borrow-Checking

Hopper does not have an ownership system today. Manual memory management with RAII via constructors and destructors is the current model. The rationale for this decision is in `ownership.md`.

The forward direction includes optional ownership annotations that the programmer can add to functions and types to get compile-time verification of memory lifetimes. The constraint is that these annotations must be:

- **Opt-in:** code without annotations continues to compile and behave correctly
- **Additive:** adding annotations to an existing codebase cannot change its runtime behavior
- **Useful on real systems code:** not just toy examples

The likely form is parameter-level annotations rather than whole-program lifetime inference. A function that takes ownership of its argument annotates that fact; the compiler verifies the caller does not use the value after the call. This is useful without requiring the full complexity of Rust's lifetime system.

This is a potential future direction, not a committed feature. It will not be added until the core language is stable.

---

## 3. Formal Verification via the Contract System

Hopper's contract system is already a weak form of contract verification: the compiler checks that an implementing class provides all methods declared in the contract with the correct signatures. This is compile-time conformance checking.

The forward direction extends contracts to behavioral specifications. An contract function could carry a precondition, postcondition, and invariant expressed in Hopper source:

```hopper
contract Allocator {
    // requires: size > 0
    // ensures: result != null
    function alloc(int size) address

    // requires: ptr != null
    function free(address ptr)
}
```

These contracts serve two purposes:

1. **Documentation:** the contract is the specification, written in a form a tool can check
2. **Verification:** a conformance checker can verify that implementations satisfy the contracts for the inputs they document

Formal verification is a long-term goal. The first step is establishing a contract syntax that the grammar supports and that tools can consume. The second step is building a verification tool. Both are future work.

---

## 4. Cross-Platform Portability via Board Modules

The current portability story is: programs are ISA-unaware, the build file names the ISA, changing the ISA requires only changing the build file. This works for hosted Linux targets.

For embedded targets — a specific microcontroller on a specific board — portability requires more than ISA abstraction. It requires abstracting peripheral layouts, clock configurations, pin assignments, and memory maps.

The forward direction introduces board modules: packages that describe a complete hardware target at the board level. A board module for an STM32F4 would declare:

- Memory map: flash at 0x08000000, SRAM at 0x20000000, peripheral base addresses
- Peripheral layouts: UART, SPI, I2C, GPIO register bitfields via `bitfield`
- Interrupt vector table structure via `bind`
- Clock configuration defaults

A program targeting this board imports `UART from stm32f4` and `GPIO from stm32f4` — not `UART from arm64`. The board module is the implementation. Porting to a different microcontroller means providing a new board module that satisfies the same contract contracts. Zero source changes in the application.

This is the correct endpoint of the hardware-as-module principle applied to embedded systems.

---

## Summary

| Direction | Current State | Forward Goal |
|-----------|--------------|-------------|
| Hardware externalization | Syscalls and SIMD in ISA modules; compiler uses LLVM | ISA-agnostic compiler backend; all hardware knowledge in modules |
| Ownership | Manual + RAII | Optional ownership annotations; opt-in borrow checking |
| Contracts | Interface conformance at signature level | Behavioral contracts; formal verification tooling |
| Board portability | Linux/x86-64 working; ARM64 ISA module next | Board modules for embedded targets; full source portability |

These directions are coherent: they all extend the same principle — that hardware, behavior, and ownership are named, inspectable, source-level artifacts rather than compiler internals or runtime conventions.
