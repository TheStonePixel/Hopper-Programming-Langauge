# Visibility and Access Control Rationale

*This document is non-normative. It explains why Hopper has no access modifiers and how encapsulation is achieved without them.*

---

## The Decision

Hopper has no `public`, `private`, `protected`, or `internal` keywords. There are no access modifiers on fields, methods, or functions. All names declared in a source file are accessible to any code that imports or compiles with that file.

---

## How Encapsulation Works Without Access Modifiers

The Hopper module system provides encapsulation at the interface level, not the name level.

A library declares its public contract in an interface file:

```hopper
// interfaces/Buffer.hop
interface Buffer {
    function write(address data, int len) int
    function flush() int
    function close()
}
```

The implementation file contains the full class, including internal fields and helper methods:

```hopper
// src/BufferImpl.hop
class BufferImpl implements Buffer {
    address data
    int capacity
    int position

    function write(address data, int len) int { ... }
    function flush() int { ... }
    function close() { ... }
    function _compact() { ... }   // internal helper
}
```

A consuming program receives a binding that resolves to `Buffer` interface and `BufferImpl` implementation. The program calls methods on a `Buffer` interface — it sees only what the interface declares. The `_compact` helper, the `data` field, and the `position` field are not visible to the consumer because they are not in the interface.

The interface file IS the access control mechanism. It is explicit — the library author writes it, and only what appears in it is the public API.

---

## Why Not Access Modifiers

### They solve a problem Hopper does not have

Access modifiers in Java and C++ were designed for two scenarios: preventing callers from depending on implementation details of a class, and enforcing OOP encapsulation across large team codebases.

Hopper's interface system already prevents callers from depending on implementation details — they only see the interface, not the implementing class. The second scenario — large team enforced OOP — is not Hopper's target domain. Systems code in a trusted codebase does not benefit from compiler-enforced visibility between files in the same project.

### Boilerplate without benefit for application code

In a program — not a library — every file is trusted code written by the same team. Adding `private` to internal fields requires the programmer to annotate every field individually, the compiler to check those annotations, and readers to understand the access modifier rules. In exchange, the compiler will prevent another file in the same project from accessing those fields.

For a systems programmer writing a kernel subsystem, that check has no value. They are not accidentally accessing kernel data structures from the wrong subsystem — or if they are, they need to be stopped by a code review, not a compiler error.

### The interface is the right abstraction boundary

Access modifiers enforce a boundary at the class level. Hopper's interfaces enforce a boundary at the module-external-API level. These are different concepts. A class may have many methods, some public and some private. An interface declares exactly the methods that external callers are expected to use.

The interface-level boundary is more useful than the class-level boundary for library code: it lets the implementation be restructured freely as long as the interface is preserved. Access modifiers would protect internal method names without protecting the interface contract.

---

## The Convention

By convention, Hopper codebases prefix implementation-internal helpers with an underscore (`_compact`, `_validate`) to signal that they are not part of the public API. This is a naming convention, not a compiler enforcement. It works the same way Python's convention works — readers understand the signal without the compiler needing to enforce it.

For library code where formal encapsulation is required, the interface file is authoritative. The underscore convention is for application code where the discipline is social rather than mechanical.
