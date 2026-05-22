## 3. Semantics

This section defines the meaning of well-formed Hopper programs. It covers how names are bound and resolved, how values are represented and passed, how expressions are evaluated, and what observable effects a program may produce. The semantics defined here are normative; where they conflict with any other document, this section governs.

### 3.1 Value Semantics and Pointer Semantics

Hopper distinguishes two fundamental transmission models depending on type.

**Primitive types** — `int`, `byte`, `char`, `bool`, `float`, `unsigned int`, `unsigned byte` — have *value semantics*. Assigning a primitive value to a variable or passing it to a function copies the value. There is no sharing of the underlying storage between the source and the destination. A conforming implementation MUST ensure that mutations of the destination after the copy do not affect the source.

**Pointer types** — `address` and `string` — have *pointer semantics*. An `address` or `string` value is an untyped 8-bit pointer (LLVM `i8*`). Assigning such a value copies the pointer itself, not the memory it refers to. After the assignment, both the source and the destination name the same memory. The compiler does NOT insert copies of the pointed-to data. Programs that require independent copies MUST arrange the copy explicitly.

**Class types** are not first-class values in the conventional sense. A class instance lives in an alloca'd stack slot or in heap-allocated memory (via `allocate`). When a class instance is passed to a method, the calling convention passes a pointer to that instance's storage — not a bitwise copy of its fields. Therefore class method dispatch has pointer-like semantics for the `self` parameter. However, when a class instance is used as a plain variable in a calling scope, the calling scope owns the alloca and controls the lifetime. The compiler MUST NOT insert implicit copies of class instances.

**No implicit copies.** There is no copy constructor, no copy-on-write, no reference counting. If a program assigns one class variable to another, the behavior is implementation-defined because the grammar currently does not define a copy assignment statement for class types. A conforming implementation SHOULD emit a diagnostic if class-to-class assignment is attempted.

### 3.2 Compilation Units and Modules

A Hopper *source file* is a single `.hop` file. Each source file constitutes a module. The compiler processes one module at a time; cross-module communication is mediated by the import system described in section 8.

The compiler MAY produce LLVM IR as its intermediate output. The final binary is produced by linking one or more LLVM IR modules together using an external linker. All semantics defined in this section apply to the combined, linked program.

### 3.3 Undefined Behavior

Hopper defines a set of operations whose behavior is *undefined*. A conforming implementation is permitted to assume that undefined behavior does not occur, and to optimize accordingly. Programs that trigger undefined behavior are not conforming. Undefined behavior includes but is not limited to:

- Reading a variable before it has been initialized.
- Dereferencing an `address` or `string` value that does not point to valid, live memory.
- Accessing an array element at an index outside the bounds `[0, length)`.
- Calling `deallocate` on a pointer that was not obtained from `allocate`, or that has already been deallocated.
- Integer overflow for signed types (`int`, `byte`) — the result is undefined unless the overflow is the result of intentional wraparound through bitwise operations.
- Writing to the same memory concurrently from multiple threads without synchronization (see section 7).

### 3.4 Relation to LLVM Semantics

The current reference implementation compiles Hopper to LLVM IR. Where Hopper semantics map directly to LLVM semantics (integer arithmetic, memory loads/stores, control flow), the LLVM semantics apply unless this specification states otherwise. A future native Hopper compiler is not required to use LLVM; it MUST satisfy the semantics defined in this specification regardless of its internal implementation strategy.
