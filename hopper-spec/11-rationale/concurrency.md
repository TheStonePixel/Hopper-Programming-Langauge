# Concurrency Rationale

*This document is non-normative. It explains why Hopper has no built-in concurrency primitives.*

---

## The Decision

Hopper provides no language-level concurrency model: no goroutines, no async/await, no actors, no built-in thread type, no channel primitives. Concurrency is expressed entirely through OS system calls — `fork`, `clone`, `futex`, `pthread_create` via `execve`, and similar — accessed through the module system exactly as any other system interface is accessed.

---

## Why Not Built-in Concurrency Primitives

### A scheduler requires a runtime

Every high-level concurrency model — green threads, coroutines, work-stealing queues — requires a runtime scheduler. The scheduler allocates stacks, manages context switches, and coordinates access to the runqueue. On bare metal or in a kernel, that infrastructure does not exist and cannot be assumed. Hopper's zero-runtime target forecloses built-in concurrency models that depend on one.

### OS concurrency is sufficient

A Hopper program that needs concurrency can call `fork` or `clone` via the `Process` interface, create POSIX threads via the `x86_64` ISA module, or use `epoll` via the `Network` interface for I/O-driven concurrency. These mechanisms are mature, well-understood, and available on every Linux target. Wrapping them in language primitives does not add capability — it adds abstraction overhead and hides what is actually happening.

### Explicit synchronization is auditable

In systems code, knowing exactly which synchronization operations occur and where is critical for correctness analysis. A futex-based mutex implemented in Hopper source is inspectable: the inline assembly is visible, the ordering semantics are documented in the function body, and there is no hidden compiler transformation that alters the synchronization behavior. A built-in `lock` or `synchronized` keyword would hide exactly the operations that most need to be visible.

### No data race prevention at the language level

Hopper does not prevent data races at compile time. This is a deliberate choice. The target audience — systems programmers — understands data races and is responsible for avoiding them. Adding a borrow-checker-style ownership system that prevents races would change the language's complexity profile significantly and is tracked as a separate future direction (see `ownership.md`). The current design prioritizes clarity of the machine model over compile-time safety guarantees.

---

## The Futex Pattern

The expected synchronization pattern for programs that need it is futex-based, implemented in a library module:

```hopper
// A mutex built on futex — implemented in a library module, not the language
class Mutex {
    int state   // 0 = unlocked, 1 = locked

    constructor() {
        self.state = 0
    }

    function lock() {
        // futex WAIT/WAKE via inline asm in the implementation
    }

    function unlock() {
        // futex WAKE via inline asm in the implementation
    }
}
```

The mutex is source code. The programmer can read it, verify it, replace it. No compiler magic mediates between the programmer's intent and the CPU instruction that performs the synchronization.

---

## What This Means in Practice

Programs that need concurrency choose their model explicitly:

- **Process-based:** `fork` + IPC via pipes or shared memory
- **Thread-based:** `clone` with shared address space + futex synchronization
- **Event-driven:** `epoll`/`poll` for I/O multiplexing without threads
- **Async I/O:** `io_uring` via the `IO` interface (when implemented)

Each of these is available through the existing module system. None requires a language change.

---

## Future Direction

Lightweight concurrency — coroutines or fibers — may eventually be expressible as a library module rather than a language primitive. The precondition is a mechanism for saving and restoring execution context (stack pointer, registers) in Hopper source, which the inline assembly facility makes possible in principle. That work is not a near-term priority.
