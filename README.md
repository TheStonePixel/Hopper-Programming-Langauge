# Hopper

Hopper is a strongly typed, bare-metal systems language that compiles to LLVM IR.

---

## The Thesis

**The toolchain is complicated because the language failed. Fix the language, and the toolchain becomes simple.**

Every bare-metal C project ships with a linker script, a startup file, a Makefile, and a handful of `#pragma` hacks. That complexity isn't accidental — it's the bill that comes due for every design decision C couldn't make cleanly. Decades of duct tape on top of duct tape.

C has no way to describe hardware, so you need a linker script. C has no entry point concept, so you need a startup file. C has no first-class hardware access story, so you get `volatile` buried in a type declaration and `__attribute__((section(...)))` buried in a pragma.

Hopper's answer is to make those things part of the language itself — not flags, not instructions to the toolchain, just code that describes what exists:

```hopper
// vector table — burned into flash by the linker
bind 0x00000004 = reset::address
bind 0x0000003c = timer::address

// hardware registers — volatile load/store aliases
volatile int uart_dr = 0x40021000
volatile int uart_sr = 0x40021004

// unambiguous program entry point
entry main {
    uart_dr = 65
}
```

No linker script. No startup assembly. No build flags. It's all code.

---

## Design Principles

**No global variables.** Program-lifetime state lives in a Runtime class on the stack. The only exceptions are `bind` (linker-time, no RAM cost) and `volatile` (a name for a hardware address, not a variable).

**No operating system required.** Hopper is designed for freestanding, bare-metal execution. An OS can run on top of Hopper — it is not a dependency of it.

**The language and the linker speak the same language.** `bind`, `volatile`, and `entry` are not directives to an external tool. They are declarations in the same language as the rest of your program. A Hopper program can describe its own hardware layout.

**It's all code, not instructions.** You don't tell the toolchain how to operate. You describe what exists, and the toolchain figures out the rest.

---

## Current Capabilities

- Functions, extern functions (variadic supported)
- Structs — memory layout, pad fields
- Classes — fields, methods, operators, constructor, destructor
- Templates — monomorphized generics (`Box<int>`, `List<float>`)
- Type aliases, top-level constants
- Full expression system — arithmetic, bitwise, logical, comparison, cast
- Arrays, pointers (`::address`, `::value`)
- Control flow — `if/else`, `while`, `for`, `break`, `continue`, `defer`
- `entry` — unambiguous program entry point (inline or address form)
- `bind` — linker directive mapping hardware addresses to function pointers
- `volatile` — named aliases for memory-mapped hardware registers
- Import system with stdlib
- LLVM IR backend

---

## Example

```hopper
import "stdlib/io"

bind 0x00000004 = reset::address

volatile int uart_dr = 0x40021000

function reset() {
    print("booted\n", 7)
}

entry main {
    uart_dr = 65
}
```

---

## Roadmap

### Now — Language Core (current)
- Full type system, classes, templates
- `entry`, `bind`, `volatile`
- LLVM IR codegen

### Next — Toolchain
- `sizeof(T)` compile-time operator
- Heap allocator (bring-your-own-buffer)
- Build tool — one command from `.hop` to ELF
- Linker script generator from `bind` declarations
- Startup file written in Hopper

### Then — Bare Metal Targets
- AVR (Arduino Uno)
- ARM Cortex-M (STM32, RP2040)
- Bare metal stdlib using `volatile` and `bind`
- Arduino programs written entirely in Hopper

### Goal
Write an Arduino program in Hopper. One command. No C toolchain.

---

## Status

Version 0.1 — prototype. Syntax and APIs will change. Nothing is stable yet.

The compiler frontend generates LLVM IR. A complete bare-metal toolchain is the target.
