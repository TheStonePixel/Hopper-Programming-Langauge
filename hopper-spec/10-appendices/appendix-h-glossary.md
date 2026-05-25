## Appendix H: Glossary

Definitions of key terms used throughout the Hopper specification. Terms in **bold** within a definition refer to other entries in this glossary.

---

## address

The single untyped pointer type in Hopper. An `address` value is a 64-bit integer that the hardware interprets as a memory location. It carries no type information at runtime — the programmer is solely responsible for knowing what data is stored at a given address and for interpreting it correctly. Corresponds to `i8*` in LLVM IR.

See also: **::address**, **::value**, **allocate**.

---

## ::address

The address-of operator. Applied as a suffix qualifier to a named identifier in expression position: `name::address`. Returns the `address` of the variable's storage location (stack or heap) as an `address` value. For functions, returns the function pointer cast to `address`. For array elements: `name[i]::address`.

Not to be confused with the `address` type keyword. `::address` is a contextual keyword — it is also valid as a field name and parameter name.

See also: **::value**, **::size**, **contextual keyword**.

---

## ::size

The size-of operator. Applied as a suffix qualifier to a named identifier: `name::size`. Returns the byte size of the variable's declared type as a compile-time constant `int`. No runtime instruction is emitted. Includes trailing alignment padding. Equivalent to C's `sizeof`.

See also: **::address**, **::value**.

---

## ::value

The dereference operator. Applied as a suffix qualifier to a named identifier holding an `address`: `name::value`. Loads the value stored at that address. The interpretation type is the declared type of the variable. There is no implicit dereference; every load through a pointer is an explicit `::value` operation.

Also usable as an assignment target: `name::value = expr` stores `expr` at the address held by `name`.

See also: **::address**, **address**.

---

## allocate

A compiler built-in expression that allocates heap memory: `allocate N`. Returns an `address` pointing to the first byte of a contiguous `N`-byte region. Contents are uninitialized. The returned pointer is at least 8-byte aligned. Lowered to `malloc(N)` on all currently supported targets.

`allocate` is not a function — it cannot be taken as a **callback** value. Wrap it in an ordinary Hopper function to pass it as an argument.

See also: **deallocate**, **address**.

---

## alias

A type alias declaration: `alias NewName = ExistingType`. Creates a new name for an existing type. Aliases are resolved at compile time; they produce no runtime overhead. Used to give descriptive names to compound types such as `callback` signatures.

---

## AsmBlock

A lexer token that captures an entire inline assembly block as a single token: `asm { ... }`. The content between the braces is raw x86 assembly notation — register names, commas, and brackets are not parsed by the grammar. The AST builder processes the token text line-by-line. `asm {}` blocks are permitted only in function bodies as statements.

By convention, `asm {}` blocks MUST NOT appear in application program source files. They belong exclusively in hardware module implementation files.

---

## binding

An entry in the `targets.<target>` section of `hopper.json` that connects an interface name to its interface file and implementation file. A binding has three required fields: `"from"` (the module name), `"contract"` (path to the `.hop` file declaring the interface), and `"implementation"` (path to the `.hop` file implementing it). The binding is the sole place where hardware is named in a project — changing the `"implementation"` path is the entire porting change when retargeting.

See also: **interface**, **module**.

---

## bitfield

A top-level declaration that specifies a bit-level packed structure. Fields in a `bitfield` are packed sequentially from the least significant bit without implicit padding between consecutive fields. Used for hardware register layouts, network protocol headers, and other bit-precise data representations.

See also: **struct**, **pad**.

---

## block

A sequence of statements enclosed in `{ }`. The grammar production is: `'{' statement* '}'`. Statements are separated by newlines. Blocks appear as the bodies of functions, methods, constructors, destructors, `if` branches, `while` loops, `for` loops, and `entry` declarations.

---

## callback

A function-pointer type. The syntax is `callback(T1, T2, ...) R`, where `T1, T2, ...` are parameter types and `R` is the return type. Callback types are declared as local variables with the `callback` keyword in a `CallbackDeclTyped` statement. Callback variables hold a reference to a function with a matching signature.

`allocate` and `deallocate` are compiler built-ins, not functions, and cannot be taken as callback values directly.

---

## castType

A unary prefix operator in the grammar (`castType unary`) that applies an explicit primitive type conversion. The cast type name (`int`, `byte`, `float`, `bool`, `address`, etc.) appears as a prefix before the operand expression. Programs SHOULD use `cast<T>(expr)` from the `cast` module rather than the raw `castType` prefix form.

See also: **template function**.

---

## class

A top-level declaration combining data fields with behavior (methods). Classes are the primary abstraction unit in Hopper. A class MAY declare `satisfies InterfaceName` to assert conformance to one or more **contract** contracts — conformance is verified at compile time. Classes support `constructor`, `destructor`, and `operator` members in addition to fields and methods.

See also: **contract**, **struct**, **self**.

---

## conforming module

A module located in `hopper/modules/` that follows the current contract standard: it declares at least one **contract** in an `interfaces/` directory, provides an implementation class that `satisfies` that contract in a `src/` directory, and has a `hopper.json` with a valid `exports` section. Modules in `hopper/nonconform/` do not yet meet this standard.

---

## const (local)

A statement-level immutable variable declaration: `const type Identifier = expression`. The variable cannot be reassigned after initialization. `const` at local scope is valid and will remain in the language. Top-level `const` (module-level constant) is deprecated — use `enum` instead.

See also: **enum**.

---

## constrain

A clause that may appear on variable declarations to narrow the type range: `int x = 10 constrain [byte]`. Requests a compile-time or runtime check that the value fits within the range of the named type. Part of the Hoare-logic contract system.

---

## contextual keyword

One of three identifiers (`value`, `address`, `size`) that are reserved as operators in `::` context but remain valid as field names (`fieldName`) and parameter names (`paramName`). A conforming implementation MUST NOT reject their use as field or parameter names. In all other positions they function as reserved keywords.

---

## deallocate

A compiler built-in statement that frees heap memory: `deallocate ptr`. The argument must be the base pointer returned by a prior `allocate` call that has not yet been freed. Lowered to `free(ptr)`. Passing null, an interior pointer, or a pointer that has already been freed is **undefined behavior**. Unlike C's `free(NULL)`, passing address `0` to `deallocate` is not safe.

See also: **allocate**.

---

## defer

A statement that defers execution of an expression until the enclosing scope exits: `defer expression`. Useful for ensuring cleanup operations (e.g., close a file descriptor) happen regardless of how the enclosing block exits.

---

## entry block

The program entry point. Declared with the `entry` keyword: `entry main { ... }` or `entry main(int argc, string[] argv) { ... }`. The entry block is not a function — it cannot be called, returned from with a value, or have its address taken. For bare-metal targets, an address form is also supported: `entry main = startup::address`.

---

## enum

A top-level declaration that defines a set of named integer (or string) constants. Variants are declared one per line inside braces and accessed as `EnumName.VariantName`:

```hopper
enum Color {
    Red   = 0
    Green = 1
    Blue  = 2
}
```

Enums are the preferred form for named integer constant sets. Integer variants without an explicit value increment from the previous variant's value. String-valued variants are also supported (`= "..."`). See §2.3 for the full grammar.

---

## extern

A declaration of a function implemented in C or another ABI-compatible language: `extern function printf(address fmt, ...) int`. The compiler generates a call to the named external symbol without generating a function body. The `extern` form supports variadic parameters (`...`) for C variadic functions. `extern` is acceptable temporarily for diagnostics and measurement, but conforming modules MUST NOT delegate their core work to C library functions.

---

## entry (keyword)

See **entry block**.

---

## fieldName

A grammar production that allows the three contextual keywords (`value`, `address`, `size`) to appear as field names in addition to plain `Identifier` tokens. This allows class fields and struct fields to be named `value`, `address`, or `size` without a grammar conflict.

See also: **contextual keyword**, **paramName**.

---

## free function

A function defined at module scope, not inside a class or struct. Free functions come into scope in programs that import the module via an contract binding — when the `implementation` file in a `hopper.json` binding contains free functions, those functions are callable directly from the program without a receiver. The `LinuxSyscalls.hop` file is the canonical example: its free functions (`read`, `write`, `open`, `close`, etc.) come into scope when any linux contract binding resolves to it.

Unqualified function calls in Hopper always resolve to free functions (or constructor calls). Method calls ALWAYS require an explicit receiver (`obj.method()`).

---

## satisfies

A keyword in a class declaration that asserts conformance to one or more interfaces: `class Foo satisfies Bar, Baz { ... }`. The compiler verifies at compile time that the class provides all method signatures declared by each named contract. Conformance failure is a compile-time error.

---

## inline assembly

Code written inside an `asm { ... }` block. The entire block is captured as a single `AsmBlock` token; its content is parsed line-by-line by the AST builder using register-assignment notation (`reg = value`, `syscall`, etc.). Inline assembly blocks are visible to the compiler as opaque: no assumptions are made about memory state across an `asm {}` boundary.

By convention, inline assembly MUST NOT appear in application code.

---

## interface

A top-level declaration of a named set of function signatures that a class may implement: `interface IO { function read(...) int ... }`. Interfaces carry no data, no default implementations, and (in the current grammar) no constants. They are compile-time specifications. A class asserts conformance with `satisfies InterfaceName`; the compiler verifies every signature matches.

Interfaces are the mechanism by which Hopper decouples OS-level names from hardware-level implementations. Program source imports interface names; `hopper.json` bindings connect those names to hardware-specific implementation files.

See also: **binding**, **satisfies**, **conforming module**.

---

## invariant

A clause on a `while` loop that asserts a condition that must hold at every loop-head evaluation: `while (i < n) invariant i >= 0 { ... }`. Part of the Hoare-logic contract system. Not yet enforced at runtime in the current implementation — declared for future static analysis tooling.

---

## LLVM IR

The intermediate representation generated by the Hopper compiler. LLVM IR is then compiled to native machine code by the LLVM backend (`clang`). All types, operators, and memory operations described in this specification are specified in terms of their LLVM IR lowering.

---

## module

Used in two related senses:

1. **Source module:** A single `.hop` source file. The compilation unit.
2. **Package module:** A project directory identified by a `hopper.json` file, containing `src/`, `interfaces/`, and `modules/` subdirectories. A package module is what `hopper install` copies into a project's `modules/` directory.

When the spec says "module" without qualification, the package sense is usually intended.

---

## null

The null pointer literal: address value `0`. Dereferencing null is **undefined behavior**. Passing null to `deallocate` is **undefined behavior** (unlike C's `free(NULL)`).

---

## operator overload

A class member declared with the `operator` keyword: `operator + (MyClass other) MyClass { ... }`. Allows instances of the class to use grammar-level operator syntax. The overloadable symbols are: `+`, `-`, `*`, `/`, `%`, `==`, `!=`, `<`, `<=`, `>`, `>=`, `&`, `|`, `^`, `<<`, `>>`, `[]`, `[]=`.

---

## pad

A declaration inside a `struct` or `bitfield` body that inserts unnamed padding: `pad 4` (4 bytes in `struct`; 4 bits in `bitfield`). Used for explicit layout control, particularly when mapping hardware register or network packet structures.

---

## paramName

A grammar production parallel to `fieldName`: allows `value`, `address`, and `size` as parameter names in function and method parameter lists.

See also: **contextual keyword**, **fieldName**.

---

## primary

The tightest-binding production in the expression hierarchy. Covers literals, identifiers, function calls, method calls, array subscripts, `::address`, `::value`, `::size`, and parenthesized expressions.

---

## requires / ensures

Hoare-logic contract clauses on function declarations:
- `requires expr` — precondition: must be true before the function is called.
- `ensures expr` — postcondition: must be true when the function returns.

Currently accepted by the grammar and stored in the AST but not enforced at runtime by the compiler. Intended for future static analysis.

---

## self

The conventional identifier for the receiver object inside class methods and constructors. `self` is NOT a grammar-level keyword — it is a plain `Identifier` that the compiler pre-loads as a pointer to the class instance at method entry. Methods compiled as `ClassName_methodName(self, args...)`. Every method call requires an explicit receiver; there are no implicit `self.` lookups.

---

## strict

A bare-metal declaration that creates a named alias for a memory-mapped hardware register at a fixed address: `strict int UART_DR = 0x40021000`. Assignment to the named identifier writes to the register; reading it reads from the register. All accesses are treated as volatile.

---

## struct

A top-level declaration of a plain-data structure: memory layout only, no methods, constructors, destructors, or default values. Fields may include `pad N` entries for explicit padding. Useful for mapping external data formats (network packets, system call argument structures).

See also: **class**, **bitfield**, **pad**.

---

## target

A named build configuration in `hopper.json` under the `targets` field. The conventional target name is `"host"` for native Linux builds. A target maps contract names to their contract and implementation files (**binding**). Changing targets (e.g., from `"host"` to `"pi-zero"`) changes the hardware implementations without touching source code.

---

## template function

A function with a compile-time type parameter, dispatched by type at the call site: `template function cast<int>(address src) int { ... }`. Called as `cast<int>(expr)`. Template functions are monomorphized — a separate concrete specialization is generated for each distinct type argument used.

See also: **castType**.

---

## template (class)

A parameterized class that is monomorphized at use sites: `template List<T> { ... }`. Type parameters may be free type variables (`T`, `K`, `V`) or fixed primitive types (`int`, `byte`, etc.). Fixed-primitive templates produce standalone types usable without `<>` syntax at instantiation sites.

---

## undefined behavior (UB)

An operation for which the Hopper specification provides no guaranteed outcome. A conforming implementation may crash, produce wrong results, corrupt memory, or silently succeed. The implementation is NOT required to detect or report UB. Programs that invoke UB have no portability or correctness guarantees.

Key sources of UB in Hopper: null dereference, out-of-bounds access, use-after-free, double-free, uninitialized read, dangling stack pointer, division by zero.

---

## workspace

A project directory tree identified by a `hopper.json` file at its root. All paths in `hopper.json` are relative to the workspace root. `hopper install` populates the `modules/` subdirectory of the workspace. `hopper build` compiles the workspace and writes output to `build/<name>`.
