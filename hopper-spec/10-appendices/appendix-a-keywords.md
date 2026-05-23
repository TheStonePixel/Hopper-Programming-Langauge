## Appendix A: Keyword Reference

Every reserved keyword in Hopper is a quoted string literal in `Hopper.g4`. The ANTLR4 implicit literal mechanism generates a lexer rule for each such string that takes precedence over the `Identifier` rule. A conforming implementation MUST reject any use of a reserved keyword as a user-defined identifier in any position where `Identifier` is expected, except for the three contextual keywords (`value`, `address`, `size`) in the positions explicitly permitted by the `fieldName` and `paramName` productions.

`self` is NOT a keyword. The grammar contains no `'self'` literal rule; it is matched as a plain `Identifier`. See the note at the end of this appendix.

---

## Complete Keyword Table (Alphabetical)

| Keyword | Category | Description | Notes |
|---------|----------|-------------|-------|
| `address` | Type / Contextual | Raw untyped pointer type (`i8*` in LLVM IR); also appears as `::address` operator | Contextual: also valid as `fieldName` and `paramName` |
| `alias` | Declaration | Declares a type alias (`alias Identifier = type`) | |
| `allocate` | Memory | Heap allocation expression; equivalent to `malloc(N)`, returns `address` | Statement and expression form |
| `asm` | Assembly | Begins an inline assembly block; consumed as a single `AsmBlock` token | Entire `asm { ... }` body is one token |
| `bind` | Declaration | Hardware linker directive: place a function pointer at a fixed memory address | Bare-metal only; `bind 0x04 = reset::address` |
| `bit` | Type | Single-bit type; used in `bitfield` declarations | Not usable as a `castType` target (not yet implemented) |
| `bitfield` | Declaration | Declares a bit-level packed structure | Fields packed from LSB; no implicit padding between fields |
| `bool` | Type | Boolean type (`i1` in LLVM IR) | Literals: `true`, `false` |
| `break` | Control Flow | Exits the innermost `while` or `for` loop | |
| `callback` | Type | Function-pointer type: `callback(T...) R` | Also begins `CallbackDeclTyped` statement |
| `char` | Type | 8-bit signed integer; alias for `byte` in character contexts (`i8`) | |
| `class` | Declaration | Declares a class (data + methods, compiler-optimized layout) | |
| `const` | Statement | Declares an immutable local variable inside a block | Top-level `const` is being removed; use `enum` instead |
| `constrain` | Contract | Introduces a type range narrowing clause on a variable declaration | `int x = 10 constrain [byte]` |
| `constructor` | Declaration | Declares the constructor method of a class | |
| `continue` | Control Flow | Advances to the next iteration of the innermost loop | |
| `deallocate` | Memory | Frees heap memory previously allocated with `allocate`; equivalent to `free(ptr)` | Passing null or non-base pointer is UB |
| `defer` | Control Flow | Defers execution of an expression until the enclosing scope exits | |
| `destructor` | Declaration | Declares the destructor method of a class | |
| `else` | Control Flow | Alternative branch of an `if` statement; may chain with `else if` | |
| `ensures` | Contract | Introduces a postcondition clause on a function (Hoare logic) | |
| `entry` | Declaration | Declares the program entry point (not a function) | Three forms: with params, without, or as address |
| `enum` | Declaration | Declares an enumeration with integer or string-valued variants | Preferred over top-level `const` |
| `extern` | Declaration | Declares a function implemented in C or another ABI-compatible language | Supports variadic `...` in `externParamList` |
| `false` | Literal | Boolean false literal | |
| `float` | Type | Double-precision floating-point type (`double` in LLVM IR) | |
| `for` | Control Flow | Counted loop with init, condition, and update | |
| `from` | Import | Separates the imported name from the module name in an import declaration | |
| `function` | Declaration | Declares a function, method, or contract signature | |
| `if` | Control Flow | Conditional branch | |
| `satisfies` | Declaration | Specifies contract conformance in a class declaration | Triggers compile-time conformance checking |
| `import` | Import | Begins an import declaration | Two forms: `import X from Y` and `import X` |
| `int` | Type | 64-bit signed integer type (`i64` in LLVM IR) | |
| `contract` | Declaration | Declares a named set of function signatures (compile-time contract) | |
| `invariant` | Contract | Introduces a loop invariant checked at every loop-head evaluation | |
| `null` | Literal | Null pointer literal (`address` value 0) | Using null as an address is UB upon dereference |
| `operator` | Declaration | Declares an operator overload on a class | |
| `pad` | Declaration | Inserts unnamed padding bytes (in `struct`) or padding bits (in `bitfield`) | |
| `requires` | Contract | Introduces a precondition clause on a function (Hoare logic) | |
| `return` | Control Flow | Returns a value (or nothing) from a function or procedure | |
| `size` | Contextual | `::size` operator: byte size of a type or variable at compile time | Contextual: also valid as `fieldName` and `paramName` |
| `strict` | Declaration | Declares a named alias for a memory-mapped hardware register | Bare-metal only; `strict int uart_dr = 0x40021000` |
| `string` | Type | Null-terminated byte string (`i8*` in LLVM IR) | `string[]` is `i8**` (argv type) |
| `String` | Type | Reserved name for the built-in generic string template class | Capital S; handled by `templateName` and `className` productions |
| `struct` | Declaration | Declares a plain-data structure: memory layout only, no methods, no default values | |
| `template` | Declaration | Declares a parameterized class or function, monomorphized at use sites | |
| `true` | Literal | Boolean true literal | |
| `unsigned` | Type Modifier | Modifier keyword; MUST be followed by `int` or `byte` | Standalone `unsigned` is not a valid type |
| `value` | Contextual | `::value` dereference operator; loads through a pointer | Contextual: also valid as `fieldName` and `paramName` |
| `void` | Type | Absent return type; used only as an explicit return-type annotation on functions | |
| `while` | Control Flow | Conditional loop | Supports `invariant` clauses |

---

## Keywords by Category

### Type Keywords

`address`, `bit`, `bool`, `byte`, `callback`, `char`, `float`, `int`, `string`, `String`, `unsigned`, `void`

### Declaration Keywords

`alias`, `bind`, `bitfield`, `class`, `const`, `constructor`, `destructor`, `enum`, `entry`, `extern`, `function`, `satisfies`, `contract`, `operator`, `pad`, `strict`, `struct`, `template`

### Import Keywords

`from`, `import`

### Control Flow Keywords

`break`, `continue`, `defer`, `else`, `for`, `if`, `return`, `while`

### Memory Keywords

`allocate`, `deallocate`

### Literal Keywords

`false`, `null`, `true`

### Inline Assembly

`asm`

### Contract and Constraint Keywords

`constrain`, `ensures`, `invariant`, `requires`

### Contextual Keywords

These three keywords are NOT fully reserved. They MAY appear as field names (`fieldName`) and parameter names (`paramName`) in addition to their primary roles:

| Keyword | Primary Role | Also Valid As |
|---------|-------------|--------------|
| `value` | `::value` dereference operator | `fieldName`, `paramName`, bare identifier in `primary` |
| `address` | Raw pointer type; `::address` operator | `fieldName`, `paramName`, bare identifier in `primary` |
| `size` | `::size` size-of operator | `fieldName`, `paramName`, bare identifier in `primary` |

---

## `self`: Not a Keyword

`self` is the conventional identifier for the receiver object inside class methods and constructors. It is NOT a grammar-level reserved keyword — `Hopper.g4` contains no `'self'` literal rule. `self` is matched as a plain `Identifier` token.

The compiler pre-loads `self` as a variable pointing to the class instance pointer at the entry of every class method and constructor. Using `self` as a variable or parameter name outside a class context causes no grammar-level error, but is strongly discouraged.

---

## Future Reserved Words

The following identifiers are not currently keywords but SHOULD NOT be used as user-defined names to ensure forward compatibility:

`async`, `await`, `case`, `macro`, `match`, `type`, `use`, `where`, `yield`

---

## Complete Alphabetical List

```
address    alias      allocate   asm        bind
bit        bitfield   bool       break      callback
char       class      const      constrain  constructor
continue   deallocate defer      destructor else
ensures    entry      enum       extern     false
float      for        from       function   if
satisfies import     int        contract  invariant
null       operator   pad        requires   return
size       strict     string     String     struct
template   true       unsigned   value      void
while
```

Count: 51 reserved keywords, plus 3 contextual keywords (`value`, `address`, `size`) that are partially reserved.
