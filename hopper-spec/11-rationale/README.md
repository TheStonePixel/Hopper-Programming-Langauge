# Rationale

This section collects non-normative documents explaining why Hopper's design decisions were made. They describe intent and trade-offs, not rules. When a normative section and a rationale document conflict, the normative section governs.

Rationale documents are useful for:

- Understanding the reasoning behind a decision before proposing to change it
- Distinguishing deliberate choices from accidental constraints
- Communicating design intent to contributors and implementors

---

## Documents

**build-system.md** — The forward vision for hardware-as-module: externalizing ISA knowledge from the compiler into inspectable, composable modules. Covers the current foundation (syscalls and SIMD in ISA modules), the intended end state (an ISA-agnostic backend), and the incremental path between them.

**concurrency.md** — Why Hopper has no built-in concurrency primitives. OS concurrency via system calls is sufficient for systems programs. No runtime scheduler keeps the language minimal. Explicit synchronization via futex-based patterns gives programmers direct control.

**long-term-vision.md** — The four-part forward direction: progressive externalization of hardware knowledge into modules, optional ownership/borrow-checker, formal verification via the contract system, and cross-platform portability via new board modules without compiler changes.

**memory.md** — Why Hopper uses manual memory management. The target is systems programming where predictable allocation behavior matters. GC introduces latency pauses. Reference counting adds overhead to every pointer operation. The allocate/deallocate model is zero-overhead and transfers the programmer's existing C mental model directly.

**naming.md** — Why the naming conventions: `cast<T>(x)` as a template function rather than a compiler built-in, `self` instead of `this`, PascalCase for types. Each convention has a reason rooted in auditability and familiar systems-programming idiom.

**ownership.md** — Why Hopper does not have an ownership system. Rust's borrow checker is excellent but adds significant learning curve and compilation complexity. Hopper targets programmers who want C's control with better syntax. RAII via constructors and destructors covers the common cases. Ownership annotations remain a possible future direction.

**package-design.md** — Why the nested `modules/` tree instead of a flat lockfile. Each project is self-contained: the `modules/` subtree is the complete dependency closure. No shared package store means the project can always be built from source without network access.

**runtime.md** — Why Hopper has no runtime. Systems and embedded targets often cannot host a runtime. A runtime-free language can run anywhere clang can generate code. The cost — explicit resource management — is expected and accepted by the target audience.

**topology.md** — Why `bitfield`, `strict`, and `bind`. Hardware registers have structure that is lost when treated as plain integers. These keywords let the compiler and programmer reason about memory regions with typed layouts, volatile MMIO semantics, and interrupt vector placement respectively.

**visibility.md** — Why Hopper has no access modifiers. The interface-file mechanism provides the right level of encapsulation for library code. For application code in a trusted codebase, access modifiers add boilerplate without benefit.
