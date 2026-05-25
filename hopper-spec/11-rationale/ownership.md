# Ownership System Rationale

*This document is non-normative. It explains why Hopper does not currently have an ownership or borrow-checking system, and what the future direction looks like.*

---

## The Decision

Hopper has no ownership system. There is no borrow checker, no lifetime annotations, no move semantics enforced by the type system, and no compile-time prevention of use-after-free or double-free. Memory safety is the programmer's responsibility.

---

## Why Not an Ownership System Now

### Learning curve and language complexity

Rust's ownership system is the most successful borrow checker in a production systems language. It is also one of the steepest learning curves in mainstream programming. Understanding ownership, borrowing, and lifetimes requires internalizing a mental model that takes significant time to acquire. For programmers coming from C, it is a substantially different paradigm.

Hopper's stated goal is to be a better C, not a different Rust. The target programmer already knows how to manage memory manually and expects to do so. Imposing an ownership system on that audience adds friction without capability — they were already going to get memory management right, because they always have.

### Compilation complexity

A borrow checker adds significant complexity to the compiler. Lifetime inference requires dataflow analysis across function call boundaries. Error messages for lifetime failures are notoriously difficult to make clear. The checker must be maintained and evolved as the language adds new constructs.

Hopper's bootstrap compiler is written in JavaScript and is already a substantial engineering artifact. Adding ownership analysis to it would expand the compiler by a significant factor. The current priority is getting the core language and build system right. Correctness features that require deep compiler infrastructure come later.

### RAII covers the common case

The most common ownership pattern — a resource acquired in a constructor and released in a destructor — is handled by Hopper's class system without ownership annotations. A `Buffer` that allocates in its constructor and deallocates in its destructor is safe by construction: the destructor runs when the object leaves scope, whether via normal exit or via early return.

```hopper
class FileHandle {
    int fd

    constructor(string path, int flags) {
        self.fd = open(path, flags, 0)
    }

    destructor() {
        close(self.fd)
    }
}
```

The programmer who writes this class once gets automatic cleanup everywhere it is used. No ownership annotation is needed because the lifetime of `FileHandle` is the lifetime of the scope that contains it.

### The overlap with the target domain

Systems code often involves explicit lifetime management that an ownership system would fight: long-lived kernel objects, interrupt handler registration, shared memory between processes, arena allocators. In these cases, an ownership system's rules are not wrong — they are inapplicable. The code is correct, but the borrow checker cannot verify it.

C projects handle this with careful documentation and code review. Hopper takes the same approach for now.

---

## The Future Direction

Ownership annotations are a potential future addition, not a ruled-out direction. The design constraint is that they must be **opt-in and additive** — they must not change the behavior of programs that do not use them, and they must not impose learning cost on programmers who do not need them.

The likely form is function-level or parameter-level annotations that the compiler uses to verify lifetime properties without requiring whole-program lifetime inference. This is closer to C++'s `[[nodiscard]]` or Rust's explicit lifetime annotations than to full borrow checking.

Any ownership system added to Hopper must:

1. Be expressible without modifying existing code that works correctly
2. Be ignorable — a program with no ownership annotations must still compile
3. Be useful on real systems code, not just toy examples
4. Not require lifetime annotations to propagate across module boundaries in ways that break the contract system

This is recorded here as a design constraint so that proposals for ownership features can be evaluated against it.
