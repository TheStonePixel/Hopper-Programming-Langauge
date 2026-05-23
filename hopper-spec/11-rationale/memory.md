# Memory Management Rationale

*This document is non-normative. It explains why Hopper uses manual memory management.*

---

## The Decision

Hopper uses explicit `allocate`/`deallocate` for heap memory. There is no garbage collector, no reference counting, and no automatic memory management of any kind. The programmer controls when memory is obtained and when it is released.

---

## Why Not Garbage Collection

### Latency

Garbage collectors introduce pauses. Stop-the-world collectors pause the entire program. Concurrent collectors introduce background CPU usage and occasional synchronization pauses. Neither is acceptable in systems code with real-time or low-latency requirements — device drivers, network packet handlers, real-time controllers, and OS kernels cannot tolerate unpredictable pauses.

### Runtime infrastructure

A garbage collector requires a runtime. It needs heap metadata, root scanning, and often a separate thread or cooperative yield points. None of this exists on bare metal. A language whose memory model requires a GC cannot target bare-metal environments — which rules out Hopper's primary use cases.

### Unpredictable allocation behavior

GC languages often allocate implicitly — boxing values, allocating closures, building intermediate structures. The programmer cannot tell from reading the source code which operations allocate. In systems code, knowing the allocation profile is part of correctness, not just performance. `allocate N` is explicit: it allocates exactly N bytes, always.

---

## Why Not Reference Counting

### Per-pointer overhead

Reference counting adds a count increment to every copy of a reference and a decrement (plus conditional free) to every release. In systems code that passes pointers through many layers of function calls, this overhead accumulates. `address` in Hopper is a raw pointer — no hidden count, no hidden atomic operation.

### Cycle handling

Reference counting does not collect cycles without additional mechanism. Systems code that builds graph structures — kernel object graphs, device trees, interrupt handler chains — has legitimate cyclic ownership patterns. Solving this correctly in a reference-counted system requires more infrastructure than manual management.

### Atomics in concurrent code

Reference counting in a concurrent program requires atomic operations on every reference assignment. On embedded cores without cache-coherent atomics, these may be structurally impossible. Manual management avoids the dependency entirely.

---

## Why `allocate`/`deallocate`

### Zero overhead by default

`allocate N` compiles to a single `malloc(N)` call. `deallocate ptr` compiles to a single `free(ptr)`. There is no wrapper, no metadata, no header, no indirection. The programmer gets exactly what they asked for.

### Familiar mental model

Every systems programmer already understands malloc/free. The `allocate`/`deallocate` model transfers that knowledge directly. There is no new concept to learn — only new syntax for an existing model.

### RAII via constructors and destructors

Hopper classes have constructors and destructors. Objects that manage resources follow the RAII pattern: acquire in the constructor, release in the destructor. The compiler calls the destructor when the object leaves scope. This covers the common case without requiring an ownership tracking system.

```hopper
class Buffer {
    address data
    int capacity

    constructor(int size) {
        self.data = allocate size
        self.capacity = size
    }

    destructor() {
        deallocate self.data
    }
}
```

The destructor fires when the `Buffer` leaves scope. The allocation is bounded to the object's lifetime. No GC, no reference count, no ownership annotation required.

---

## The Programmer's Responsibility

Manual memory management puts the burden of correctness on the programmer. Use-after-free, double-free, and memory leaks are possible. This is a known cost. Hopper's target audience already works under this constraint in C and expects it. The language provides RAII as a tool for encapsulating resource management; it does not attempt to enforce correctness mechanically.

Future ownership annotations (see `ownership.md`) may provide optional compile-time verification of memory lifetime. They are a potential opt-in addition, not a change to the default model.
