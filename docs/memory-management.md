# Memory Management in Hopper: Explicit Resource Control

## Overview

Memory management is one of the deepest fault lines in systems programming. High-level languages attempt to eliminate explicit memory control through garbage collection or ownership systems. Low-level languages expose raw allocation primitives with minimal structure. Both are reactions to the same reality:

> Memory is a finite, shared, failure-prone resource that cannot be made logically free.

Hopper does not attempt to remove manual memory management. Instead, it treats memory as a first-class, explicitly managed system resource — consistent with its approach to hardware interfaces, OS syscalls, and process control. The goal is not to hide allocation, but to make it *visible, structured, and traceable through program structure*.

---

## The Problem with Hidden Memory Models

Modern high-level systems abstract memory through garbage collection, ownership inference, automatic lifetimes, and runtime-managed heaps. These systems reduce immediate cognitive burden but introduce new failure modes:

- nondeterministic latency from GC pauses
- implicit allocation costs invisible at the point of use
- hidden heap pressure that manifests as performance degradation
- non-local reasoning requirements when tracing memory behavior
- difficulty mapping performance regressions to allocation sites

In practice, memory is still being managed — it is simply being managed by a subsystem no longer visible in the program. The cost is real; the cause is hidden.

Hopper's design rejects this separation.

---

## Memory as a System Interface

In Hopper, memory is not a runtime concern. It is a system capability, declared and consumed the same way as IO, process control, or filesystem operations.

The `linux` module exposes memory operations as an explicit interface:

```hopper
import Memory from linux

// OS-level memory mapping
address region = mmap(0, size, prot, flags, fd, 0)
// ... use region ...
munmap(region, size)

// Page protection
mprotect(region, size, newProt)

// Advise the kernel about access patterns
madvise(region, size, MADV_SEQUENTIAL)
```

These are not convenience wrappers. They are the actual Linux syscalls — the same operations a C program would call — expressed as Hopper free functions with the hardware dependency named in the build file, not buried in a library.

---

## Primitive Allocation

For heap allocation, Hopper provides two primitives:

```hopper
address buf = allocate 4096   // malloc(4096) — returns address
deallocate buf                // free(buf)
```

`allocate` is not hidden heap allocation. It is a declared resource acquisition that appears in source at exactly the point where memory is consumed. `deallocate` is the corresponding release.

The `address` type is a raw pointer — `i8*` in the compiled representation. There is no implicit conversion, no null safety layer, no bounds tracking. The programmer holds the allocation and is responsible for releasing it.

A simple pattern:

```hopper
entry main {
    address buf = allocate 1024
    int n = read(0, buf, 1024)    // read from stdin
    write(1, buf, n)              // write to stdout
    deallocate buf
}
```

The allocation site, the use site, and the release site are all visible in the same function. There is no lifetime inference, no hidden release point, no runtime to decide when the memory is no longer needed.

---

## Structured Lifecycle: Constructors and Destructors

The primary structured lifecycle mechanism in Hopper is the class constructor/destructor pair. This is the closest analog to RAII in the language — resource acquisition in the constructor, release in the destructor.

```hopper
class Buffer {
    address data
    int capacity
    int length

    constructor(int capacity) {
        self.capacity = capacity
        self.length = 0
        self.data = allocate capacity
    }

    destructor() {
        deallocate self.data
    }

    function write(address src, int n) int {
        // ... bounds check, copy, update length ...
        return n
    }

    function bytes() address {
        return self.data
    }
}
```

The destructor makes the release point explicit and co-located with the class definition. A reader inspecting `Buffer` sees both the acquisition and the release in the same place. Ownership is not inferred — it is stated by the structure of the class.

A more complete example — a fixed-size arena:

```hopper
class Arena {
    address base
    int capacity
    int used

    constructor(int capacity) {
        self.capacity = capacity
        self.used = 0
        self.base = allocate capacity
    }

    destructor() {
        deallocate self.base
    }

    function push(int size) address {
        int aligned = (size + 7) & -8
        if (self.used + aligned > self.capacity) {
            return cast 0
        }
        address ptr = self.base + self.used
        self.used = self.used + aligned
        return ptr
    }

    function reset() {
        self.used = 0
    }
}
```

`Arena` acquires one large allocation in its constructor and suballocates from it. `reset()` rewinds the cursor without touching the OS — useful for per-request or per-frame allocation patterns. The single `deallocate` in the destructor releases the entire arena at once.

Programs using `Arena` never call `deallocate` on individual allocations from it — they reset or destroy the arena. The ownership model is explicit in the interface: you push into the arena, and the arena owns the memory.

---

## Casting Between Address and Integer

Because `address` is a raw pointer, arithmetic requires explicit casting:

```hopper
address buf = allocate 64
int base = cast buf          // address → int for arithmetic
address offset = cast (base + 16)  // int → address to index into buffer
```

The `cast` keyword makes pointer arithmetic visible at every site. There is no implicit conversion between `address` and `int`. A reader can identify every place pointer arithmetic occurs by searching for `cast`.

---

## Memory Is Not Freed — It Is Released

A conceptual distinction in Hopper's framing: memory is not *freed*, it is *released*. This aligns memory with every other system resource:

| Resource | Acquire | Release |
|----------|---------|---------|
| Memory | `allocate` | `deallocate` |
| File descriptor | `open` | `close` |
| Socket | `socket` | `close` |
| Memory map | `mmap` | `munmap` |
| Lock | `lock` | `unlock` |

All of these follow the same lifecycle. Memory is not a special case requiring a separate abstraction layer — it is one instance of the general pattern of resource acquisition and release.

This consistency matters for reasoning. A function that opens a file and allocates a buffer has two resources to track. Both are visible in source, both follow the same acquire/release model, and both are subject to the same structural discipline.

---

## What Is Not Hidden

Hopper makes no attempt to hide the following:

**Allocation sites.** Every heap allocation appears in source as an `allocate` expression. There is no implicit allocation triggered by assignment, return, or function call.

**Release points.** Every `deallocate` is explicit. For class instances, the destructor names the release explicitly and co-locates it with the type definition.

**Pointer arithmetic.** Every address computation that involves integer offsets requires `cast`. The arithmetic is visible, not implicit.

**OS-level memory operations.** `mmap`, `munmap`, `mprotect`, and related calls appear as direct free function calls — not wrapped in a memory allocator that hides them.

---

## Why Full Abstraction Is Rejected

Even in systems with garbage collection, the following remain true:

- allocation frequency affects GC pressure
- allocation patterns affect cache behavior
- memory fragmentation affects long-running performance
- heap size affects OS memory accounting

Hopper treats these as fundamental constraints rather than implementation artifacts to be hidden. Abstraction is permitted — an `Arena` is an abstraction over raw `allocate`. But abstraction that removes observability is not. A developer can always inspect where memory is acquired, where it is held, and where it is released, because those facts are present in source.

> Abstraction is allowed. Invisibility is not.

---

## Forward Goals

The current model — explicit `allocate`/`deallocate`, class-based lifecycle via destructors — is the foundation. Several directions remain as forward goals rather than current capabilities:

**Scope-tied allocation.** The compiler could enforce that an `address` value allocated in a scope is not returned or stored past that scope without an explicit transfer. Currently this is a convention; eventually it could be a verifiable constraint.

**Ownership annotations.** A function signature could declare whether it acquires, borrows, or transfers ownership of a pointer parameter. Currently this is expressed in documentation; eventually it could be part of the type.

**Compile-time leak detection.** Static analysis over `allocate`/`deallocate` pairs could identify allocations with no corresponding release on all paths. Currently leaks are runtime phenomena; a future compiler pass could make some of them compile-time errors.

**Declared allocation functions.** A function that performs allocation could be required to declare that fact — making implicit allocation visible at call sites even when the `allocate` is hidden inside an abstraction.

These are not current capabilities. They are the coherent next steps from the foundation that already exists.

---

## Relationship to the Broader Model

Memory management in Hopper follows the same principle as hardware interfaces and OS syscalls:

- hardware is named in ISA modules, not hidden in the compiler
- OS operations are explicit contracts, not runtime abstractions
- memory is an explicit system resource, not a hidden runtime concern

The compiler does not manage memory on the programmer's behalf. It preserves allocation semantics through the IR, allows optimization of provably unnecessary allocations, and respects destructor ordering. It does not introduce implicit allocation or implicit release.

---

## Summary

| Aspect | Current Model |
|--------|--------------|
| Heap allocation | `allocate N` — explicit, returns `address` |
| Heap release | `deallocate ptr` — explicit |
| Structured lifecycle | Class constructor/destructor pairs |
| Pointer arithmetic | Explicit `cast` at every site |
| OS memory operations | `mmap`, `munmap`, etc. as free functions from `Memory` interface |
| Ownership model | Structural convention; destructors encode release |
| Compile-time safety | Forward goal; not current capability |
| Abstraction | Permitted; must remain inspectable |

The closing principle is consistent with every other layer of Hopper:

> Memory is not a runtime concern hidden from the programmer. It is a system resource managed explicitly, structured through the same mechanisms as every other resource the program holds.
