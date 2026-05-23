# Naming Conventions Rationale

*This document is non-normative. It explains the naming choices made in Hopper's design.*

---

## `cast<T>(x)` — Template Function, Not Compiler Built-in

Type conversion in Hopper is performed by calling `cast<T>(x)`, which is defined in the `cast` module (`hopper/modules/cast/src/Cast.hop`). It is not a compiler built-in or a keyword.

**The reason:** built-in cast operators are invisible. In C, `(int)x` invokes a conversion rule defined inside the compiler. The programmer cannot inspect it, cannot trace it, and cannot modify it. In Hopper, `cast<float>(n)` calls a template function whose implementation is Hopper source code. Every conversion — `int` to `float`, `address` to `string`, `byte` to `int` — is an auditable function call.

This has practical consequences:

- Adding a new type conversion does not require modifying the compiler (design goal G4)
- The cast table in `Cast.hop` is a single, inspectable source of truth for all conversion semantics
- A reviewer auditing a codebase for unsafe casts can search for `cast<address>` rather than hunting for C-style cast syntax scattered across the code

The trade-off is that `cast<T>` must be imported. This is intentional — it makes the use of type conversion visible in the file's dependency list.

---

## `self` — Not `this`

Hopper uses `self` as the receiver name inside method bodies. The choice is deliberate.

In C++ and Java, `this` is a hidden parameter — the language makes it look like methods have no receiver argument. The programmer cannot rebind `this` or reason about it as a variable.

In Hopper, `self` is the explicit first parameter of every method. The mental model is:

> A method is a free function whose first argument is the object it operates on.

Using `self` — borrowed from Python and Swift — reinforces that mental model. It signals "this is the object I'm working on" rather than "this is a magic implicit reference." The name is also one character shorter, which matters when it appears hundreds of times in a large class.

There is no technical reason `self` could not have been `this`. The choice is about the programmer's conceptual model of method dispatch.

---

## PascalCase for Types and Interfaces

Type names (`MyClass`, `LinuxIO`, `X86SIMD`) and interface names (`IO`, `FileSystem`, `SIMD`) use PascalCase. Free functions and methods use camelCase. Constants defined via `const` use SCREAMING_SNAKE_CASE. Enum values use PascalCase.

This follows the conventions of Go and Rust — two languages that systems programmers frequently read. A programmer familiar with either will immediately recognize that `Buffer` is a type and `buffer` is a variable without needing to look up the definition.

The distinction matters at call sites:

```hopper
Buffer buf = Buffer()    // Buffer is a type; buf is an instance
buf.write(data, len)     // write is a method — lowercase
```

The visual distinction between `Buffer` and `buf` prevents a class of confusion where variable names shadow type names, which is common in C code that uses lowercase for both.

---

## Module and Interface Naming

Interfaces exported from OS modules use noun phrases that describe what the interface provides: `IO`, `FileSystem`, `Process`, `Socket`, `Network`, `Memory`, `System`. They are capitalized because they are types.

ISA module names use the architecture identifier as it appears in the Linux architecture string: `x86_64`, `arm64`. These are lowercase because they are module names, not type names.

The import syntax makes the category clear:

```hopper
import IO from linux        // IO is an interface name; linux is a module name
import SIMD from x86_64    // SIMD is an interface name; x86_64 is a module name
```

Lowercase module identifiers follow the same convention as package names in Go and crate names in Rust — they are identifiers, not proper names.
