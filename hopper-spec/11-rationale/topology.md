# Hardware Topology Keywords Rationale

*This document is non-normative. It explains why `bitfield`, `strict`, and `bind` exist as keywords and what problem they solve.*

---

## The Problem

Hardware registers have structure. A 32-bit control register might have bits 0-3 as a mode field, bit 4 as an enable flag, bits 5-7 reserved, and bits 8-31 as a base address. Treating this register as a plain `int` loses that structure — operations that touch reserved bits, read-modify-write sequences that race with hardware, and address assignments that overflow their fields all become possible without any language-level indication that something is wrong.

Beyond register structure, hardware memory has properties that ordinary variables do not: MMIO regions must be read and written without caching or reordering, interrupt vectors must appear at specific physical addresses, and device driver entry points must be callable from hardware without going through normal function call conventions.

The `bitfield`, `strict`, and `bind` keywords describe these properties in source code, so that the compiler and the programmer can reason about hardware topology explicitly rather than through comment conventions.

---

## `bitfield` — Typed Register Layout

`bitfield` declares a memory region with a typed bit-level layout. Instead of:

```c
// Mode is bits 0-3, enable is bit 4 — trust me
uint32_t control_register = base_addr;
control_register |= (mode & 0xF) | (1 << 4);
```

The programmer writes a `bitfield` declaration that names the fields and their bit ranges. The compiler knows the layout. Accessing `reg.mode` generates the correct shift-and-mask sequence. Setting `reg.enable` sets exactly bit 4.

This eliminates a class of hardware bugs where a programmer forgets the field boundaries or applies the wrong mask. The layout is part of the source, not a comment.

---

## `strict` — Volatile MMIO Access

`strict` marks an address as a memory-mapped I/O location that must be accessed without caching or compiler reordering. Without this, a compiler that observes a write to an address followed by a read from the same address may eliminate the read (assuming the write's value is still current) or reorder the operations (assuming memory accesses to the same address can be freely reordered).

For MMIO, these assumptions are wrong. A write to a device control register may change the device's state. A read from a status register must go to the hardware, not to a cached copy. The value in memory is not the same as the value in the hardware register at the other end of the bus.

`strict` tells the compiler: do not cache, do not reorder, do not eliminate. Every access goes through to the hardware.

This is the same role as C's `volatile` keyword, but with a name that reflects what it means in hardware terms rather than what it does to compiler optimization.

---

## `bind` — Hardware Address Binding

`bind` places a function pointer at a specific hardware address. The primary use case is interrupt vectors: the CPU expects to find the address of the interrupt service routine at a specific location in the interrupt vector table. Writing that address to the right location — and getting it there at link time, not at startup — requires telling the linker that this function's address belongs at that physical location.

`bind` is a link-time directive: it associates a Hopper function with a hardware address so that the linker places it correctly without requiring a separate linker script entry for each handler.

---

## Why Keywords and Not a Library

These features could in principle be expressed as library calls or attributes. The reason they are keywords is that their semantics interact with the compiler's code generation and the linker's address assignment. A library cannot tell the compiler not to reorder a memory access. A library cannot tell the linker to place a function pointer at a physical address.

Keywords express these requirements at the language level, where the compiler can act on them. Attributes or annotations that the compiler ignores would not provide the guarantees the hardware requires.

---

## Relationship to the Module System

Hardware topology declarations — `bitfield` layouts, `strict` addresses, `bind` assignments — belong in ISA or board-specific modules. They are hardware knowledge. Following the design principle that hardware knowledge lives in modules (see `build-system.md`), a device driver written in Hopper imports its register layout from a board module rather than declaring it inline in the driver source.

This means changing the target board requires updating the board module, not every driver. The driver source is hardware-topology-agnostic at the source level; the board module is the single point of hardware knowledge.
