## 7. Concurrency

### 7.0.1 Overview

Hopper has no built-in concurrency primitives. The language itself is
single-threaded: every Hopper program begins execution in a single thread of
control, and no Hopper keyword, type, or statement causes another thread to be
created or scheduled.

Concurrent execution is achieved exclusively through operating-system system
calls accessed via the `linux` module. On Linux/x86-64, the relevant entry
points include `fork`, `clone`, `clone3`, and the POSIX thread interface
layered on top of `clone`. Programs that require concurrent execution MUST
invoke these OS APIs directly.

### 7.0.2 Scope of This Chapter

This chapter defines:

1. The single-threaded execution model that Hopper itself specifies (§7.1).
2. How OS-created threads interact with the language's type system and memory
   model (§7.2–§7.6).
3. The concurrency safety guarantees (and non-guarantees) the language provides
   (§7.7).

This chapter does NOT specify the behavior of OS threading APIs. That behavior
is governed by the Linux kernel ABI and POSIX, not by this specification.
Informative examples reference Linux/x86-64 interfaces as they appear in the
`linux` and `x86_64` modules, but the normative semantics are those of the
kernel.

### 7.0.3 Terminology

**Thread**: in this chapter, a thread is a kernel-scheduled execution context
created by `fork`, `clone`, or a threading library built on those syscalls.
Hopper does not define a thread type.

**Data race**: two accesses to the same memory location from two threads, where
at least one access is a write, and the accesses are not ordered by a
synchronization operation. Programs with data races have undefined behavior
(§7.7.2).

**Synchronization operation**: an operation that establishes a happens-before
edge between two threads. In Hopper programs, synchronization operations are
always OS system calls or inline assembly instructions; no Hopper statement is
a synchronization operation by itself.

### 7.0.4 Relationship to Other Chapters

- The single-threaded memory model is defined in Chapter 5 (Memory). §7.4
  describes how that model extends — or does not extend — to multi-threaded
  programs.
- The execution model (Chapter 6) defines program start-up, function calls, and
  undefined behavior in the single-threaded case. §7.7 extends the undefined
  behavior rules to data races.
- The `linux` module interface definitions (§Process, §IO, §Memory, §Socket,
  §Network) are the normative definitions of the OS APIs referenced in this
  chapter.
