## 5. Memory Model

### 5.1 Overview

Hopper uses **manual memory management**. There is no garbage collector, no reference counting, no automatic lifetime extension, and no runtime memory safety layer. The programmer is solely responsible for acquiring and releasing memory resources at the correct times and in the correct order.

This section specifies the memory model that all conforming Hopper implementations MUST enforce.

---

### 5.2 Fundamental Properties

The Hopper memory model is defined by the following invariants:

1. **No implicit allocation.** A conforming implementation SHALL NOT allocate heap memory on behalf of the program except in direct response to an `allocate` expression. Local variable declarations, function calls, and expression evaluation MUST NOT implicitly allocate from the heap.

2. **No garbage collection.** A conforming implementation SHALL NOT include a garbage collector or any form of automatic heap reclamation. Memory is reclaimed only when the program explicitly executes `deallocate`.

3. **No reference counting.** A conforming implementation SHALL NOT maintain reference counts, retain/release cycles, or deferred-free queues unless explicitly constructed by the programmer using the language primitives.

4. **Explicit deallocation.** Every heap allocation MUST be matched by exactly one `deallocate`. Failure to do so constitutes a memory leak; performing deallocation more than once is undefined behavior.

5. **No memory safety guarantees.** The implementation SHALL NOT insert bounds checks, null checks, or use-after-free detection unless the programmer has explicitly added them using `requires`/`ensures` contracts or `constrain` clauses. Memory errors produce undefined behavior, not catchable exceptions.

---

### 5.3 Memory Regions

A Hopper program operates across four distinct memory regions. Each region has different lifetime semantics, access properties, and management responsibilities.

| Region | Managed by | Lifetime | Access |
|--------|-----------|---------|--------|
| Stack | Compiler / CPU | Function frame | Read/write |
| Heap | Programmer (`allocate`/`deallocate`) | `allocate` to `deallocate` | Read/write |
| Code segment | Linker | Program lifetime | Read/execute |
| MMIO | Hardware / `bind` declaration | Hardware-defined | Volatile read/write |

Each region is described in detail in §5.6.

---

### 5.4 The `address` Type

Hopper defines a single untyped pointer type: `address`. An `address` value is a raw machine-word-sized integer that the hardware interprets as a memory location.

An `address` value carries **no type information at runtime**. The programmer is responsible for knowing what data is stored at a given address and for interpreting it correctly.

The `address` type is 8 bytes wide on all currently supported targets (64-bit x86-64). All address arithmetic is performed in bytes.

```hopper
address buf = allocate 256     // buf holds the address of the first byte
address mid = buf + 128        // mid points 128 bytes into the allocation
```

Address arithmetic that places a pointer outside the bounds of its originating allocation produces undefined behavior.

---

### 5.5 Memory Visibility Principle

Every memory operation in a Hopper program MUST be traceable to an explicit source-level expression. A conforming implementation:

- SHALL NOT introduce hidden allocation sites during compilation.
- SHALL NOT reorder or elide `allocate`/`deallocate` operations in a way that changes program-observable memory state.
- SHALL make every allocation site a distinct, auditable point in source code.

This principle exists to ensure that static analysis, code review, and debugging can trace every byte of heap usage back to a specific allocation in the source.

---

### 5.6 Inline Assembly and Memory

Inline `asm {}` blocks may read from and write to arbitrary memory addresses using CPU registers and instructions. Memory accesses performed inside `asm {}` blocks are invisible to the compiler's data-flow analysis. A conforming implementation SHALL NOT make assumptions about the state of memory across an `asm {}` block boundary.

---

### 5.7 MMIO

Hardware memory-mapped I/O registers are accessed via `bind` declarations. Accesses to MMIO addresses MUST be treated as volatile: reads may have side effects, writes may have side effects, and the implementation SHALL NOT cache or reorder MMIO accesses.

MMIO is covered in §5.6.

---

### 5.8 Undefined Behavior Summary

The following memory operations produce **undefined behavior** in all conforming implementations:

- Dereferencing a null pointer (address value 0).
- Accessing memory outside the bounds of an allocation.
- Using memory after it has been deallocated (use-after-free).
- Deallocating the same pointer more than once (double-free).
- Passing a null pointer or an invalid address to `deallocate`.
- Reading from uninitialized memory and treating the result as a meaningful value.
- Allowing a stack variable's address to escape beyond the variable's scope and then dereferencing it.
- Performing address arithmetic that overflows the address space.

An implementation MAY detect and report any of the above as a diagnostic, but it is NOT REQUIRED to do so. Programs that invoke undefined behavior have no guaranteed outcome.
