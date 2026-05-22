# Memory Management in Hopper: Explicit Resource Control

## Overview

Memory management is one of the deepest fault lines in systems programming. High-level languages attempt to eliminate explicit memory control through garbage collection or ownership systems. Low-level languages expose raw allocation primitives with minimal structure. Both are reactions to the same reality:

> Memory is a finite, shared, failure-prone resource that cannot be made logically free.

Hopper does not attempt to remove manual memory management. Instead, it treats memory as a first-class, explicitly managed system resource — consistent with its approach to hardware interfaces, OS syscalls, and process control. The goal is not to hide allocation, but to make every memory operation *a visible, intentional act*.

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

## One Address Type

C encodes type information into pointers: `int*`, `float*`, `char*`. The type travels with the pointer, and dereferencing silently interprets the bytes as the declared type. This is convenient but ambiguous — a `*(int*)ptr` simultaneously casts, dereferences, and declares a width, and any of those three things can be wrong without the compiler saying so.

Hopper has one pointer type: `address`. It carries no type information. An `address` is a location in memory and nothing more. What those bytes mean is the programmer's explicit responsibility.

This removes a class of ambiguity at the cost of one extra step. That step is intentional.

---

## Memory Qualifiers: `::address`, `::value`, `::size`

Instead of C's operators (`&`, `*`, `sizeof`), Hopper uses explicit qualifiers on variables:

| Qualifier | C equivalent | What it produces |
|-----------|-------------|-----------------|
| `var::address` | `&var` | the memory location where `var` lives |
| `var::value` | `*var` | the bytes stored at that location |
| `var::size` | `sizeof(var)` | how many bytes `var` occupies |

Each qualifier is one operation. There is no overloaded `*` that means three different things depending on context. A reader can look at any single expression and know exactly what it does.

```hopper
int x = 42
address ptr = x::address      // where x lives in memory
int copy = ptr::value         // read what's at that address
int bytes = x::size           // how many bytes x occupies (8 for int)
```

For pointer arithmetic, the declared type drives the operation. `address + int` is always pointer arithmetic — no qualifier needed:

```hopper
address buf = allocate 4096
address mid = buf + 2048      // pointer arithmetic — type is address
address row = buf + (i * 64) // same
```

Reading a value from an offset requires being explicit about how the bytes are interpreted. There is no implicit type — you work with the raw bits using masks and shifts, or overlay a struct:

```hopper
address field = buf + 4
int byte0 = field::value & 0xFF           // lowest byte
int byte1 = (field + 1)::value & 0xFF    // next byte
int word   = (byte1 << 8) | byte0        // construct a 16-bit value
```

Every step is visible. There is no `*(uint16_t*)(buf + 4)` that silently declares width and endianness.

> These qualifiers are the intended design. The current compiler uses `cast` as a transitional mechanism. `::address`, `::value`, and `::size` are a near-term compiler goal — the principle is already in place, the syntax is in progress.

---

## Primitive Allocation

Heap allocation uses two explicit primitives:

```hopper
address buf = allocate 4096   // acquire: malloc(4096)
deallocate buf                // release: free(buf)
```

`allocate` is not hidden heap allocation. It is a declared resource acquisition that appears in source at exactly the point where memory is consumed. The allocation site is always visible. There is no implicit allocation triggered by assignment, return, or function call.

A simple read-and-echo:

```hopper
entry main {
    address buf = allocate 1024
    int n = read(0, buf, 1024)
    write(1, buf, n)
    deallocate buf
}
```

Allocation site, use site, release site — all present in the same function. No lifetime inference, no hidden release point.

---

## Structured Lifecycle: Constructors and Destructors

For anything beyond a trivial allocation, the class constructor/destructor pair provides structured lifetime. This is Hopper's RAII — resource acquisition in the constructor, release in the destructor.

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
        // copy n bytes from src into self.data at self.length
        // update self.length
        return n
    }

    function ptr() address {
        return self.data
    }
}
```

The destructor makes the release co-located with the class definition. A reader inspecting `Buffer` sees acquisition and release in the same place. Ownership is stated by structure, not inferred.

A bump-pointer arena — one allocation, many suballocations, one release:

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

---

## Callbacks: Function Pointers as First-Class Memory

A callback in Hopper is an explicitly typed function pointer. The syntax names the parameter types and return type directly:

```hopper
callback(int) address       // takes int, returns address
callback(address)           // takes address, returns nothing
callback(int, int) int      // takes two ints, returns int
```

This is how Hopper resolves function pointer usage — no `void*` function pointers, no implicit casting between function signatures. The type of a callback is its full signature, visible at the declaration site.

Callbacks are themselves addresses — the location of a function in memory. A callback stored in a struct field is simply an address that the program knows how to call. `myFn::address` gives you the raw address of the function if you need it.

### Pluggable Allocators

The most direct intersection of callbacks and memory management is the pluggable allocator. Rather than hardcoding `allocate` and `deallocate`, a class can accept its allocation strategy as callbacks:

```hopper
class Pool {
    address region
    int capacity
    int used
    callback(int) address alloc
    callback(address) free

    constructor(int size, callback(int) address alloc, callback(address) free) {
        self.alloc = alloc
        self.free  = free
        self.capacity = size
        self.used = 0
        self.region = self.alloc(size)
    }

    destructor() {
        self.free(self.region)
    }

    function push(int size) address {
        int aligned = (size + 7) & -8
        if (self.used + aligned > self.capacity) {
            return cast 0
        }
        address ptr = self.region + self.used
        self.used = self.used + aligned
        return ptr
    }
}
```

The constructor takes `alloc` and `free` as callbacks and stores them. The destructor calls `self.free` — whichever function was passed in. The pool itself is agnostic about where the backing memory comes from:

```hopper
// system heap
Pool heap = Pool(65536, allocate, deallocate)

// mmap-backed — swap the strategy, same pool logic
Pool mapped = Pool(65536, mmapAlloc, mmapFree)
```

The allocation strategy is a parameter, not a compile-time assumption. Testing with a fixed buffer, switching to a custom arena, or using a debug allocator that tracks every call — all of these become callback swaps, not rewrites.

### Cleanup Callbacks

Callbacks also express deferred or conditional cleanup — useful when the release point is not the same scope as the acquisition:

```hopper
class Deferred {
    address resource
    callback(address) cleanup

    constructor(address resource, callback(address) cleanup) {
        self.resource = resource
        self.cleanup  = cleanup
    }

    destructor() {
        self.cleanup(self.resource)
    }
}
```

`Deferred` holds any resource — a file descriptor, a mapped region, a heap allocation — and calls the provided cleanup function when it goes out of scope. The destructor is the same regardless of what the resource is. The callback carries the knowledge of how to release it.

### Callbacks Are Typed and Explicit

In C, function pointers decay to `void*` and can be cast between incompatible signatures silently. Hopper's callback type is not a generic pointer — it is the full function signature. Assigning a `callback(int) address` where a `callback(address)` is expected is a type error, caught at compile time.

The callback type also participates in the `::size` model — a callback has a known size (it is an address-sized value), and its signature is part of its type identity rather than something inferred at the call site.

`Arena` acquires one large region in its constructor and suballocates from it with a cursor. `reset()` rewinds without touching the OS. The single `deallocate` in the destructor releases everything. Programs using `Arena` never call `deallocate` on individual items — they reset or destroy the arena.

---

## RAII and Generics: Safer Pointers by Construction

The destructor pattern becomes significantly more powerful with generics. A generic owning wrapper makes it structurally impossible to forget deallocation — the release is encoded in the type, not in the programmer's discipline.

The intended design for a generic owning pointer:

```hopper
class Box<T> {
    address data

    constructor() {
        self.data = allocate T::size
    }

    destructor() {
        deallocate self.data
    }

    function ptr() address {
        return self.data
    }

    function value() address {
        return self.data::value
    }
}
```

`T::size` uses the `::size` qualifier on a type rather than a variable — it resolves at compile time to the byte size of `T`. `Box<int>` allocates exactly 8 bytes. `Box<Buffer>` allocates exactly as many bytes as `Buffer` requires. The programmer cannot get the allocation size wrong.

A non-owning view — borrows an address without claiming responsibility for it:

```hopper
class Ref<T> {
    address ptr

    constructor(address ptr) {
        self.ptr = ptr
    }

    // no destructor — Ref does not own the memory

    function get() address {
        return self.ptr
    }
}
```

A bounds-checked slice over a region:

```hopper
class Slice<T> {
    address data
    int length

    constructor(address data, int length) {
        self.data = data
        self.length = length
    }

    function at(int i) address {
        if (i < 0 | i >= self.length) {
            return cast 0
        }
        return self.data + (i * T::size)
    }

    function length() int {
        return self.length
    }
}
```

`Slice<T>` provides indexed access into a region with a runtime bounds check. `at(i)` returns an address or null — the caller handles the null case explicitly. There is no implicit out-of-bounds dereference.

These three types — `Box<T>`, `Ref<T>`, `Slice<T>` — cover the ownership triangle:

| Type | Owns memory | Allocates | Deallocates |
|------|-------------|-----------|-------------|
| `Box<T>` | yes | in constructor | in destructor |
| `Ref<T>` | no | never | never |
| `Slice<T>` | no | never | never |

The ownership relationship is encoded in the type, visible at the declaration site, and enforced by the destructor. A function that receives a `Ref<T>` cannot accidentally free the memory it points to. A function that receives a `Box<T>` knows it is taking ownership.

> Generics are a forward compiler goal. The destructor mechanism exists today. The generic wrapper types described here are the natural extension once generic class support is in place.

---

## Memory as a System Interface

For OS-level memory operations, the `linux` module exposes a `Memory` interface:

```hopper
import Memory from linux

address region = mmap(0, size, prot, flags, fd, 0)
// ... use region ...
munmap(region, size)

mprotect(region, size, newProt)
madvise(region, size, MADV_SEQUENTIAL)
```

These are the actual Linux syscalls — not wrapped in an allocator, not hidden behind a runtime. The same `::address`/`::value`/`::size` discipline applies: `region` is an `address`, and interpreting what it contains is explicit.

---

## Why Full Abstraction Is Rejected

Even in systems with garbage collection:

- allocation frequency affects GC pressure
- allocation patterns affect cache behavior
- memory fragmentation affects long-running performance
- heap size affects OS memory accounting

Hopper treats these as fundamental constraints rather than implementation artifacts to hide. A programmer may build higher-level allocation patterns — and `Arena`, `Box`, `Slice` are examples — but those patterns must remain inspectable. The `allocate` inside `Box<T>` is visible in its constructor. The `deallocate` is visible in its destructor. There is no magic.

> Abstraction is allowed. Invisibility is not.

---

## Summary

| Aspect | Model |
|--------|-------|
| Pointer type | Single untyped `address` — no `int*`, `float*` |
| Address of variable | `var::address` (near-term goal; `cast` currently) |
| Read from address | `var::value` (near-term goal; `cast` currently) |
| Size of type | `T::size` / `var::size` (near-term goal) |
| Heap allocation | `allocate N` — explicit, returns `address` |
| Heap release | `deallocate ptr` — explicit |
| Structured lifecycle | Constructor acquires, destructor releases |
| Generic ownership | `Box<T>`, `Ref<T>`, `Slice<T>` — forward goal |
| OS memory operations | `mmap`, `munmap` etc. as free functions |
| Abstraction | Permitted; must remain inspectable |

The design principle across every layer:

> Every memory operation is a visible, intentional act. The type carries no hidden meaning. The qualifiers make each operation explicit. The ownership structure is readable in source.
