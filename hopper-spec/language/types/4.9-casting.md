# Type Casting in Hopper: Hardware Opcodes Exposed as Source Code

## Overview

Type casting is the process of reinterpreting a value as a different type. Every compiled language supports it. Most languages embed it directly in the compiler — casting is a grammar construct, a keyword, a set of compiler rules. The programmer invokes special syntax; the compiler decides what instruction to emit.

Hopper takes a different position:

> Casting is not a compiler feature. It is a hardware capability. The compiler should expose hardware primitives. Source code should decide how they are composed.

This is the same principle that governs memory, system calls, and SIMD in Hopper. Hardware capabilities are not hidden in the compiler. They are named, externalized, and composed at the source level. Casting follows the same rule.

---

## The Problem with Compiler-Owned Casting

In C, casting is compiler syntax:

```c
int n = (int)3.9;
float f = (float)7;
void *p = (void *)42;
```

The compiler parses `(int)`, `(float)`, `(void *)` as special grammar productions and emits the corresponding instructions. The programmer cannot inspect this logic, cannot extend it, and cannot reason about which instruction will be emitted without reading the compiler's internal type conversion table.

C++ attempted to improve on this by naming the casts: `static_cast`, `reinterpret_cast`, `const_cast`, `dynamic_cast`. These look like template functions. They are not. They are compiler intrinsics with template-like syntax. You cannot implement `static_cast` in C++ source code. The definition lives inside the compiler, not in any header file you can read.

The consequence in both languages is the same: casting rules are opaque, compiler-managed, and not inspectable as source code. Extending them requires modifying the compiler. Understanding them requires reading compiler documentation, not the language source.

---

## Hopper's Position

Hopper has one compiler-level casting primitive: `castType unary`. It is the bridge between Hopper's type system and LLVM IR's conversion instructions. When the compiler encounters `int src`, where `src` is a `float`, it emits `fptosi double %src to i64`. When it encounters `address src`, where `src` is an `int`, it emits `inttoptr i64 %src to i8*`.

This primitive is intentionally not part of the public language. It exists in one place: the bodies of template functions in `hopper/modules/cast/src/Cast.hop`. Everything above the hardware layer is source code.

The user-facing interface is:

```hopper
cast<int>(3.9)
cast<float>(7)
cast<address>(42)
cast<byte>(300)
cast<bool>(1)
```

`cast` is not a keyword. `cast<T>(x)` is not special syntax. It is a call to a template function defined in a library you can read, modify, and understand.

---

## Architecture

### The Hardware Primitive

At the LLVM IR level, type conversion maps to a small, fixed set of instructions:

| Conversion | LLVM Instruction | Description |
|------------|-----------------|-------------|
| float → int | `fptosi` | Truncate floating-point to signed integer |
| int → float | `sitofp` | Convert signed integer to floating-point |
| float → byte | `fptosi` | Truncate floating-point to 8-bit integer |
| int → byte | `trunc` | Drop high bits |
| byte → int | `sext` | Sign-extend 8-bit to 64-bit |
| byte → int (unsigned) | `zext` | Zero-extend 8-bit to 64-bit |
| bool → int | `zext` | Zero-extend 1-bit to 64-bit |
| int → bool | `icmp ne` | Compare to zero |
| bool → byte | `zext` | Zero-extend 1-bit to 8-bit |
| byte → bool | `icmp ne` | Compare to zero |
| bool → float | `uitofp` | Convert unsigned 1-bit to floating-point |
| float → bool | `fcmp une` | Compare to zero (unordered, NaN is truthy) |
| int → address | `inttoptr` | Treat integer as pointer |
| address → int | `ptrtoint` | Treat pointer as integer |
| address ↔ string | none | Both are `i8*` in LLVM — zero cost |

These are the complete, finite set of hardware-level type conversions for primitive types. There are no others. Every cast in every language ultimately reduces to one of these instructions or a composition of them.

### Template Functions as Specializations

`cast<T>(x)` is a template function call. Hopper's template functions are compile-time dispatch by type parameter — not runtime polymorphism, not macro expansion, but concrete function generation. Each specialization is independently compiled under a mangled name:

```
cast<int>(address) → __tmpl_cast__int__address
cast<int>(float)   → __tmpl_cast__int__float
cast<byte>(int)    → __tmpl_cast__byte__int
cast<bool>(float)  → __tmpl_cast__bool__float
```

At the call site, the compiler resolves `cast<int>(p)` by matching the type argument (`int`) and the argument type (`address`) against the registered specializations. The result is a direct function call — no overhead, no indirection, and inlining makes the generated code identical to what a compiler-intrinsic cast would produce.

### The Cast Module

`hopper/modules/cast/src/Cast.hop` defines every supported conversion:

```hopper
template function cast<int>(address src) int            { return int src          }
template function cast<int>(byte src) int               { return int src          }
template function cast<int>(float src) int              { return int src          }
template function cast<int>(bool src) int               { return int src          }
template function cast<int>(unsigned byte src) int      { return unsigned int src }

template function cast<address>(int src) address        { return address src      }
template function cast<address>(string src) address     { return address src      }

template function cast<byte>(int src) byte              { return byte src         }
template function cast<byte>(float src) byte            { return byte src         }
template function cast<byte>(bool src) byte             { return byte src         }

template function cast<float>(int src) float            { return float src        }
template function cast<float>(byte src) float           { return float src        }
template function cast<float>(bool src) float           { return float src        }

template function cast<bool>(int src) bool              { return bool src         }
template function cast<bool>(byte src) bool             { return bool src         }
template function cast<bool>(float src) bool            { return bool src         }

template function cast<string>(address src) string      { return string src       }

template function cast<unsigned int>(byte src) int      { return unsigned int src }
template function cast<unsigned int>(address src) int   { return unsigned int src }

template function cast<unsigned byte>(int src) byte     { return byte src         }
```

Each body contains a single `castType unary` expression — the compiler primitive that selects the correct LLVM IR instruction based on the source and target types. The module is the complete, authoritative list of legal casts in Hopper. If a conversion is not in this file, it does not exist.

---

## Complete Conversion Table

| From \ To     | `int`      | `byte`     | `float`    | `bool`     | `address`  | `string`  |
|---------------|------------|------------|------------|------------|------------|-----------|
| `int`         | —          | `trunc`    | `sitofp`   | `icmp ne`  | `inttoptr` | —         |
| `byte`        | `sext`     | —          | `sitofp`   | `icmp ne`  | —          | —         |
| `float`       | `fptosi`   | `fptosi`   | —          | `fcmp une` | —          | —         |
| `bool`        | `zext`     | `zext`     | `uitofp`   | —          | —          | —         |
| `address`     | `ptrtoint` | —          | —          | —          | —          | `bitcast` |
| `string`      | —          | —          | —          | —          | `bitcast`  | —         |

Empty cells are undefined — not because the hardware cannot perform them, but because no semantically meaningful conversion exists. A `float` cannot become an `address` without passing through `int` first; doing so in one step would obscure the intent.

---

## Why This Matters

### Casting is inspectable

The rules governing every type conversion in Hopper are in a file you can read. There is no hidden compiler logic determining which instruction gets emitted for which type pair. The source code is the specification.

### Casting is extensible without touching the compiler

Adding a new conversion — for example, a saturating cast that clamps instead of truncating — requires adding a new template function. It does not require modifying the grammar, the AST builder, the code generator, or any other compiler component. The module is the extension point.

### The compiler primitive is bounded

`castType unary` exists as a compiler primitive, but it is confined to `Cast.hop`. No other file in the standard library or any program should use it directly. This is a convention enforced by code review, not by the language — but it means the primitive's blast radius is a single 30-line file.

### The architecture is honest about hardware

Most languages pretend that type conversions are a language concern. Hopper treats them as what they actually are: a small, fixed set of hardware instructions. The template dispatch layer makes them ergonomic. The hardware layer makes them honest.

---

## Usage

Programs that need casting import the cast module:

```json
{
  "dependencies": {
    "cast": "0.1.0"
  }
}
```

Then install and use:

```hopper
import Cast from cast

int n     = cast<int>(3.9)
float f   = cast<float>(7)
address p = cast<address>(42)
byte b    = cast<byte>(300)
bool flag = cast<bool>(1)
```

The `cast<T>(x)` call resolves at compile time to a direct function call under the mangled name. After inlining, no function call overhead remains — the emitted IR is a single conversion instruction, identical to what any compiler intrinsic would produce.
