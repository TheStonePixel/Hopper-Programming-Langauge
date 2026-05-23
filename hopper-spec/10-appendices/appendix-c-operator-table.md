## Appendix C: Operator Reference

All Hopper operators are defined by the expression hierarchy in `Hopper.g4`. Precedence level 1 is the lowest (loosest binding); level 12 is the highest (tightest binding). All binary operators are left-associative. Unary operators and `castType` apply right-to-left.

Assignment (`=`) is a **statement**, not an operator, and does not appear in the expression hierarchy.

---

## Binary Operator Precedence Table

| Level | Operator(s) | Name | Production | Associativity |
|-------|-------------|------|------------|---------------|
| 1 | `\|\|` | Logical OR | `logicalOr` | Left |
| 2 | `&&` | Logical AND | `logicalAnd` | Left |
| 3 | `\|` | Bitwise OR | `bitwiseOr` | Left |
| 4 | `^` | Bitwise XOR | `bitwiseXor` | Left |
| 5 | `&` | Bitwise AND | `bitwiseAnd` | Left |
| 6 | `==`, `!=` | Equality | `equality` | Left |
| 7 | `<`, `<=`, `>`, `>=` | Relational | `relational` | Left |
| 8 | `<<`, `>>` | Shift | `shift` | Left |
| 9 | `+`, `-` | Additive | `additive` | Left |
| 10 | `*`, `/`, `%` | Multiplicative | `multiplicative` | Left |
| 11 | `!`, `-`, `~`, `castType` | Unary / cast prefix | `unary` | Right (prefix) |
| 12 | primary forms | Postfix / access | `primary` | N/A |

---

## Arithmetic Operators (Level 9–10)

| Operator | Name | Operand Types | Result Type | LLVM Instruction |
|----------|------|---------------|-------------|-----------------|
| `+` | Addition | `int`, `byte`, `float`; or `address + int` | Same as left | `add` / `fadd` / `getelementptr i8` |
| `-` | Subtraction | `int`, `byte`, `float`; or `address - int` | Same as left | `sub` / `fsub` / `getelementptr i8` |
| `*` | Multiplication | `int`, `byte`, `float` | Same as left | `mul` / `fmul` |
| `/` | Division | `int`, `byte`, `float` | Same as left | `sdiv` / `udiv` / `fdiv` |
| `%` | Remainder | `int`, `byte` | Same as left | `srem` / `urem` / `frem` |

Signed instructions (`sdiv`, `srem`) apply to `int`, `byte`, and `char`. Unsigned instructions (`udiv`, `urem`) apply to `unsigned int` and `unsigned byte`.

For `address + int` and `address - int`, the compiler emits `getelementptr i8, i8* <ptr>, i64 <offset>` — byte-granularity pointer arithmetic. Division by zero is undefined behavior.

---

## Bitwise Operators (Levels 3–5, 8)

| Operator | Name | Operand Types | Result Type | LLVM Instruction |
|----------|------|---------------|-------------|-----------------|
| `&` | Bitwise AND | integer | Same as left | `and` |
| `\|` | Bitwise OR | integer | Same as left | `or` |
| `^` | Bitwise XOR | integer | Same as left | `xor` |
| `<<` | Left shift | integer | Same as left | `shl` |
| `>>` | Right shift (logical) | integer | Same as left | `lshr` |

All bitwise operators require integer operands (`int`, `byte`, `char`, `unsigned int`, `unsigned byte`). Float operands are a compile-time error.

Right shift (`>>`) is always a **logical** right shift (`lshr`): zero bits shift in from the left. There is no arithmetic right shift operator. Use inline `asm {}` for arithmetic right shift when needed.

Both operands MUST have the same type. No implicit promotion is performed.

---

## Comparison Operators (Levels 6–7)

| Operator | Name | Result Type | Integer LLVM | Float LLVM |
|----------|------|-------------|-------------|------------|
| `==` | Equal | `bool` | `icmp eq` | `fcmp oeq` |
| `!=` | Not equal | `bool` | `icmp ne` | `fcmp one` |
| `<` | Less than | `bool` | `icmp slt` / `ult` | `fcmp olt` |
| `<=` | Less than or equal | `bool` | `icmp sle` / `ule` | `fcmp ole` |
| `>` | Greater than | `bool` | `icmp sgt` / `ugt` | `fcmp ogt` |
| `>=` | Greater than or equal | `bool` | `icmp sge` / `uge` | `fcmp oge` |

Float comparisons use **ordered** predicates: any comparison involving NaN returns `false`.

For signed integer types (`int`, `byte`, `char`), signed predicates (`slt`, `sle`, `sgt`, `sge`) are used. For unsigned types (`unsigned int`, `unsigned byte`), unsigned predicates (`ult`, `ule`, `ugt`, `uge`) are used.

---

## Logical Operators (Levels 1–2)

| Operator | Name | Operand Types | Result Type | LLVM Instruction |
|----------|------|---------------|-------------|-----------------|
| `&&` | Logical AND | `bool` (coerced) | `bool` | `and i1` |
| `\|\|` | Logical OR | `bool` (coerced) | `bool` | `or i1` |

Non-`bool` operands are implicitly coerced by emitting `icmp ne <type> <val>, 0` before the logical operation. This coercion applies to any integer or `address` type.

**Important:** Logical operators do NOT short-circuit in the current implementation. Both operands are evaluated unconditionally before the logical operation is applied.

---

## Unary Operators (Level 11)

| Operator | Name | Operand Type | Result Type | LLVM Instruction |
|----------|------|-------------|-------------|-----------------|
| `!` | Logical NOT | `bool` | `bool` | `xor i1 <val>, 1` |
| `-` | Arithmetic negation | `int`, `byte`, `float` | Same as operand | `sub <t> 0, <val>` / `fneg double` |
| `~` | Bitwise NOT | integer | Same as operand | `xor <t> <val>, -1` |

Unary minus on `float` emits `fneg double`. Logical NOT (`!`) requires a `bool` operand. Bitwise NOT (`~`) requires an integer operand.

---

## Cast Operator (Level 11)

```
castType unary
```

The `castType` prefix applies an explicit primitive type conversion to its operand. Programs SHOULD use the `cast<T>(expr)` template function from the `cast` module rather than the raw `castType` prefix form.

### Cast Conversion Table

| From \ To | `int` | `byte` / `char` | `float` | `bool` | `address` | `string` |
|-----------|-------|-----------------|---------|--------|-----------|---------|
| `int` | — | `trunc i64 to i8` | `sitofp i64 to double` | `icmp ne i64 0` | `inttoptr i64 to i8*` | — |
| `byte` / `char` | `sext i8 to i64` | — | `sitofp i8 to double` | `icmp ne i8 0` | — | — |
| `unsigned int` | — (same bits) | `trunc i64 to i8` | `sitofp i64 to double` | `icmp ne i64 0` | `inttoptr i64 to i8*` | — |
| `unsigned byte` | `zext i8 to i64` | — | `sitofp i8 to double` | `icmp ne i8 0` | — | — |
| `float` | `fptosi double to i64` | `fptosi double to i8` | — | `fcmp une double 0.0` | — | — |
| `bool` | `zext i1 to i64` | `zext i1 to i8` | `uitofp i1 to double` | — | — | — |
| `address` | `ptrtoint i8* to i64` | — | — | — | — (identity) | `bitcast i8* to i8*` |
| `string` | — | — | — | — | `bitcast i8* to i8*` | — (identity) |

`address` and `string` are both `i8*` in LLVM IR; casting between them is a no-op bitcast. `byte` → `int` uses `sext` (sign-extension) for signed source, `zext` (zero-extension) for `unsigned byte`.

**Not yet implemented:** Casting to or from `bit` using the `castType` prefix form will produce a compile-time error. `bit` is only handled within bitfield field read/write paths.

---

## Address Operators (Primary Level — `::` forms)

These are not infix operators; they are suffix qualifiers on a named identifier in `primary` position.

| Syntax | Name | Result Type | Description | LLVM |
|--------|------|-------------|-------------|------|
| `name::address` | Address-of | `address` | Address of variable or function (stack pointer / function pointer) | `bitcast <alloca> to i8*` |
| `name[i]::address` | Element address | `address` | Address of element `i` in array `name` | `getelementptr` then `bitcast to i8*` |
| `name::value` | Dereference | type pointed to | Load through pointer | `load i8*` then `load T` |
| `name::size` | Size-of | `int` | Byte size of variable's type (compile-time constant) | No runtime instruction emitted |

`::value` emits: load the `address` stored in `name`'s alloca, bitcast to `T*`, then `load T`. The interpretation type `T` is the declared type of `name`.

`::size` is always a compile-time constant for primitive types and fully-defined classes. No runtime instruction is emitted.

---

## Array Subscript (Primary Level)

```
Identifier '[' expression ']'
```

Applied to stack-allocated arrays: emits `getelementptr [N x T], [N x T]* <ptr>, i32 0, i64 <i>` followed by `load T`. Applied to class instances with a `[]` operator overload: calls the operator method.

Bounds are NOT checked. Out-of-bounds access is undefined behavior.

---

## Assignment (Statement — Not an Operator)

```
Identifier '=' expression
```

Assignment is a **statement**. It has no value, cannot appear in expression position, and cannot be chained. This design is intentional: there is no ambiguity between `==` and `=` in conditions.

---

## Operator Overloading

Classes may overload a fixed set of operators via the `operator` class member:

```hopper
class Vec2 {
    float x
    float y
    operator +(Vec2 other) Vec2 { ... }
    operator ==(Vec2 other) bool { ... }
    operator [](int i) float { ... }
    operator []=(int i, float v) { ... }
}
```

Overloadable symbols: `+`, `-`, `*`, `/`, `%`, `==`, `!=`, `<`, `<=`, `>`, `>=`, `&`, `|`, `^`, `<<`, `>>`, `[]`, `[]=`.

Operator overloads apply only to class instances. They do not affect primitive-type operator behavior.
