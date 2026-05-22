# Memory Management in Hopper: Explicit Resource Control as a System Model

## Overview

Memory is not a feature of programs. It is a shared system resource with cost, latency, fragmentation, and failure modes.

Most modern languages attempt to hide this fact. They replace explicit allocation with garbage collection, ownership inference, or runtime-managed heaps. These systems reduce immediate cognitive burden, but they do so by moving memory management into a subsystem that is no longer visible in the program.

Hopper takes the opposite position:

> Memory is not something to abstract away. It is something to make structurally visible.

This mirrors Hopper's broader design philosophy: hardware, operating systems, and calling conventions are not embedded in the compiler or runtime — they are named, externalized, and composed at build time. Memory follows the same rule.

---

## The Problem with Invisible Memory Systems

When memory management is hidden, several properties become true by construction:

**Allocation cost is detached from code location.** A line of code may allocate without signaling that it does.

**Runtime behavior becomes nondeterministic.** GC systems introduce pauses that are not represented in source structure.

**Performance analysis becomes indirect.** Memory pressure must be inferred from runtime traces rather than code inspection.

**System behavior is no longer locally reasoned.** Understanding memory usage requires reconstructing runtime state, not reading code.

The result is not absence of memory management — it is relocation of responsibility into a layer that is harder to observe and reason about.

---

## Design Principle: Memory Must Be Visible

Hopper's memory model is built on a single constraint:

> Every memory operation must be observable in source form.

This does not mean removing abstraction. It means ensuring that abstraction never removes traceability.

A developer may build allocators, arenas, or ownership wrappers — but those systems must remain inspectable down to their primitive operations.

---

## The Address Model

Hopper defines a single pointer type: `address`.

An address is not typed. It is a location in memory. It carries no interpretation.

This eliminates implicit type coercion through pointers and forces interpretation to be explicit at the point of use. Where C encodes meaning in the pointer type — `int*` implicitly declares width, alignment, and how to dereference — Hopper's `address` declares only that a memory location exists. What the bytes at that location mean is the programmer's explicit responsibility.

---

## Explicit Memory Qualifiers

Instead of implicit dereference and address-of operators, Hopper expresses memory access through explicit qualifiers:

- `var::address` — the location of a variable in memory
- `var::value` — the contents stored at that location
- `var::size` — the byte size of a type or variable

Each operation is singular and explicit. There is no overloaded `*` that means dereference in one context and multiply in another, no `&` that means address-of in one context and bitwise-and in another.

```hopper
int x = 42
address p = x::address   // where x lives
int y    = p::value      // what is stored there
int n    = x::size       // how many bytes x occupies
```

There is no implicit dereference. There is no implicit width interpretation. Every memory transformation is a named operation.

> `::address`, `::value`, and `::size` are the intended design. The current compiler uses `cast` as a transitional mechanism; these qualifiers are a near-term compiler goal.

---

## Allocation and Deallocation

Memory acquisition is explicit:

```hopper
address buf = allocate 4096
// ... use buf ...
deallocate buf
```

Allocation is not a side effect. It is a declared system event that appears exactly where it occurs. This ensures allocation sites are always traceable, memory usage is structurally inspectable, and resource lifetime is not inferred from usage patterns.

---

## Structured Ownership via Destructors

Hopper supports structured lifetime through constructors and destructors. This is not a convenience mechanism — it is a visibility mechanism:

```hopper
class Buffer {
    address data
    int capacity

    constructor(int capacity) {
        self.capacity = capacity
        self.data = allocate capacity
    }

    destructor() {
        deallocate self.data
    }
}
```

Ownership is encoded structurally: the type that allocates is the type that releases. Acquisition and release exist within the same definition boundary. A reader inspecting `Buffer` sees the full resource lifecycle without tracing execution.

This is Hopper's RAII. The destructor is not implicit — it is a named, inspectable function that makes the release point explicit.

---

## Allocation as a Composable Resource

Memory allocation is not globally fixed. It is composable through explicit strategy injection.

Allocators are passed as typed function pointers — callbacks:

```hopper
callback(int) address    // allocator: takes size, returns address
callback(address)        // deallocator: takes address, returns nothing
```

This enables allocator substitution without altering program logic:

```hopper
Pool heap  = Pool(65536, allocate, deallocate)
Pool debug = Pool(65536, trackedAlloc, trackedFree)
Pool mapped = Pool(65536, mmapAlloc, mmapFree)
```

Memory policy becomes a parameter, not a hidden runtime behavior. The `Pool` class stores its `alloc` and `free` callbacks and calls them in the constructor and destructor respectively — the same ownership structure, with the backing strategy externalised:

```hopper
class Pool {
    address region
    int capacity
    int used
    callback(int) address alloc
    callback(address) free

    constructor(int size, callback(int) address alloc, callback(address) free) {
        self.alloc    = alloc
        self.free     = free
        self.capacity = size
        self.used     = 0
        self.region   = self.alloc(size)
    }

    destructor() {
        self.free(self.region)
    }

    function push(int size) address {
        int aligned = (size + 7) & -8
        if (self.used + aligned > self.capacity) {
            return cast 0
        }
        address ptr   = self.region + self.used
        self.used     = self.used + aligned
        return ptr
    }
}
```

The callback type is not a generic function pointer — it is the full signature. Passing a `callback(address)` where a `callback(int) address` is expected is a compile-time type error.

---

## Arenas and Batch Ownership

Structured allocation patterns are expressed explicitly. An arena allocates once, suballocates continuously, and releases in bulk:

```hopper
class Arena {
    address base
    int capacity
    int used

    constructor(int capacity) {
        self.capacity = capacity
        self.used     = 0
        self.base     = allocate capacity
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
        self.used   = self.used + aligned
        return ptr
    }

    function reset() {
        self.used = 0
    }
}
```

This shifts memory reasoning from per-object to per-region without hiding the underlying resource model. The key property is not performance — it is visibility of lifecycle boundaries. One `allocate` in the constructor, one `deallocate` in the destructor. The batch is explicit.

---

## Non-Owning Views

Hopper distinguishes ownership from reference through structure, not inference:

- `Box<T>` owns memory — allocates in constructor, releases in destructor
- `Ref<T>` does not own — no destructor, no deallocation
- `Slice<T>` provides bounded access without ownership

```hopper
class Ref<T> {
    address ptr

    constructor(address ptr) {
        self.ptr = ptr
    }

    function get() address {
        return self.ptr
    }
}

class Slice<T> {
    address data
    int length

    constructor(address data, int length) {
        self.data   = data
        self.length = length
    }

    function at(int i) address {
        if (i < 0 | i >= self.length) {
            return cast 0
        }
        return self.data + (i * T::size)
    }
}
```

This is not a borrow checker model. It is a structural encoding of responsibility. Ownership is not inferred — it is declared in the type. A function receiving a `Ref<T>` cannot accidentally free the memory it points to.

> Generic types are a forward compiler goal. The destructor mechanism exists today.

---

## OS-Level Memory Remains Explicit

System memory operations are not abstracted:

```hopper
import Memory from linux

address region = mmap(0, size, prot, flags, fd, 0)
munmap(region, size)
mprotect(region, size, newProt)
```

These are direct system interfaces, consistent with Hopper's syscall model. They are not hidden behind runtime allocation layers. The same `::address`/`::value` discipline applies — `region` is an `address`, and interpreting what it contains is explicit work.

---

## Why Abstraction Is Not Removed

Hopper does not reject abstraction. It rejects *invisible abstraction*.

A developer may build allocators, arenas, smart pointers, and pooled memory systems. But no abstraction may erase the fact that memory exists, or where it is consumed. Every abstraction must remain inspectable down to primitive `allocate` and `deallocate` operations.

> Abstraction is allowed. Invisibility is not.

---

## The Core Tradeoff

Hopper accepts a deliberate tradeoff:

| Property | Traditional Systems | Hopper |
|----------|--------------------|----|
| Convenience | High | Moderate |
| Performance transparency | Low | High |
| Memory visibility | Low | High |
| Runtime complexity | Hidden | Explicit |
| Debuggability of allocation | Indirect | Direct |

This is not an optimization. It is a structural choice about where truth resides. The programmer carries more explicit responsibility in exchange for a system where every memory fact is present in source.

---

## Summary

Hopper's memory model is not defined by syntax. It is defined by visibility constraints:

- Memory is always explicit
- Allocation is always local
- Ownership is always structural
- Abstraction is always inspectable
- No behavior is hidden behind runtime inference

The guiding principle is consistent with every other layer of Hopper — hardware, OS interfaces, calling conventions:

> Memory is not managed automatically or manually. It is managed explicitly.
