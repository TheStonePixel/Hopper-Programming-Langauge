## 4. Type System

Hopper is a statically typed language. Every expression, variable, and function parameter has a type that is known at compile time. Type checking is performed entirely during compilation; no type information is retained at runtime unless explicitly encoded by the programmer.

---

### 4.1 Overview

The Hopper type system is designed around three principles:

**Static resolution.** The type of every named entity MUST be determinable by the compiler without executing any program code. A conforming implementation SHALL NOT defer type resolution to link time or runtime.

**Nominal typing.** Two types are the same type if and only if they share the same name. Structural similarity — having the same fields, the same method signatures, or the same LLVM representation — does not make two distinct types compatible. A value of type `Packet` is not assignable to a variable of type `Frame` even if both are defined as `struct { address buf  int len }`.

**No implicit coercion.** Hopper does not perform implicit type conversions. When an expression of type A is used where type B is expected, and A and B are not the same type, the program is ill-formed. The programmer MUST supply an explicit conversion. The sole exception is `address`/`string` interassignment, which is permitted because both types share the same LLVM representation (`i8*`) and the distinction is semantic, not representational (see §4.8).

---

### 4.2 Type Determination

The type of a variable is determined at its declaration site. The declaration syntax is:

```hopper
type identifier = expression
```

The `type` token is a mandatory part of every variable declaration. There is no mechanism by which the type is inferred from the right-hand side. The compiler uses the declared type to type-check the initializer expression; it does not derive the type from the initializer.

```hopper
int count = 0          // count has type int
float ratio = 0.5      // ratio has type float
bool found = false     // found has type bool
address buf = allocate 64  // buf has type address
```

All four declarations above are well-formed. The following is ill-formed and MUST be rejected by a conforming compiler:

```hopper
// ERROR: no type keyword — not valid Hopper syntax
x = 0
```

---

### 4.3 Type Categories

Hopper types are divided into the following categories:

**Primitive types** (§4.1) — built-in scalar types with direct LLVM representations: `int`, `byte`, `char`, `bool`, `float`, `address`, `string`, `string[]`, `unsigned int`, `unsigned byte`, `bit`, and `void`.

**Composite types** (§4.2) — aggregates with named fields: `struct` (layout only), `class` (data and behavior), `template` (parameterized class), `bitfield` (bit-packed layout), `enum` (named integer constants), and `callback` (function pointer).

**Interface types** (§4.6) — named sets of method signatures that classes may implement. Interface types are not value types; a variable cannot have an contract type directly.

---

### 4.4 Type Checking

A conforming implementation SHALL emit a compile-time diagnostic for any of the following conditions:

- A value of type A is assigned to a variable of type B where A ≠ B, unless the specific assignment is explicitly permitted by §4.8.
- A function is called with an argument of type A where the corresponding parameter is declared as type B and A ≠ B.
- A function declared to return type A contains a `return` statement whose expression has type B where A ≠ B.
- An operator is applied to operands whose types are not in the operator's defined domain.

Type checking is structural only at the LLVM emission stage; at the Hopper source level, all type checking is by name.

---

### 4.5 The void Type

`void` is a valid return type annotation for functions and procedures that produce no value. It is not valid as a variable type, a parameter type, or a field type. A function declared to return `void` MUST NOT contain a `return expr` statement (a bare `return` is permitted as a control-flow exit).

```hopper
function flush(int fd) {
    // procedure — implicitly void return
}

function flush(int fd) void {
    // ERROR: void is not a valid explicit return type annotation in procedure syntax
}
```

The grammar distinguishes procedures (no return type token) from functions (return type token present). A procedure is the canonical way to express a void-returning callable. Implementations MAY accept `void` as a return type token and treat it equivalently to the procedure form, but this is not required.

---

### 4.6 Relationship to LLVM

Hopper compiles to LLVM IR. The type system maps directly onto LLVM types:

| Hopper type      | LLVM type       |
|------------------|-----------------|
| `int`            | `i64`           |
| `unsigned int`   | `i64`           |
| `byte`           | `i8`            |
| `char`           | `i8`            |
| `unsigned byte`  | `i8`            |
| `bool`           | `i1`            |
| `bit`            | `i1`            |
| `float`          | `double`        |
| `address`        | `i8*`           |
| `string`         | `i8*`           |
| `string[]`       | `i8**`          |
| `struct T`       | `%T = type { ... }` |
| `class T`        | `%T = type { ... }` |
| `callback(...)T` | function pointer type |

The signedness distinction between `int` and `unsigned int`, and between `byte` and `unsigned byte`, is not reflected in the LLVM type — both map to `i64` and `i8` respectively. Signedness determines which LLVM arithmetic instructions the compiler emits (e.g., `sdiv` vs. `udiv`, `ashr` vs. `lshr`).

All type-level distinctions enforced by the Hopper compiler are erased by the time LLVM IR is emitted. There is no LLVM-level enforcement of Hopper's nominal type system.
