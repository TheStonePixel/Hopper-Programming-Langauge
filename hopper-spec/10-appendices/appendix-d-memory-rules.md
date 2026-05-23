## Appendix D: Memory Rules Quick Reference

Hopper uses **manual memory management**. There is no garbage collector, no reference counting, and no automatic lifetime extension. Every byte of heap memory is the programmer's explicit responsibility.

---

## Allocation: `allocate N`

```hopper
address buf = allocate 4096
```

| Property | Value |
|----------|-------|
| Syntax | `allocate <size-expression>` |
| Return type | `address` |
| Lowered to | `malloc(N)` |
| Alignment | At least 8 bytes (sufficient for any primitive type) |
| Contents | **Uninitialized** — reading before writing is undefined behavior |
| Size `N` | Must be a positive `int` expression; allocating 0 bytes is undefined behavior |
| Size evaluated | Exactly once, at the point of the expression |
| Failure result | Returns address value `0` (null); programs SHOULD check the result |

The size operand may be any integer expression, including a variable:

```hopper
int n = 256
address buf = allocate n
address node = allocate 24           // space for three 8-byte fields
```

`allocate` may appear in a variable declaration (`type x = allocate N`) or in an assignment (`x = allocate N`). It may not appear in arbitrary expression positions.

---

## Deallocation: `deallocate ptr`

```hopper
deallocate buf
```

| Property | Value |
|----------|-------|
| Syntax | `deallocate <address-expression>` |
| Lowered to | `free(ptr)` |
| Argument | Must be the **base** pointer returned by `allocate` |
| After call | `ptr` is dangling — any access is undefined behavior |

Rules that MUST be followed:

1. The argument MUST be a pointer previously returned by `allocate` that has not yet been freed.
2. The argument MUST point to the **beginning** of the allocation — passing an interior pointer is undefined behavior.
3. Passing `null` (address value `0`) to `deallocate` is **undefined behavior**. (Unlike C's `free(NULL)`, this is not safe.)
4. Calling `deallocate` twice on the same pointer is **double-free** — undefined behavior.
5. The original size need not be repeated; the allocator tracks it internally.

For nested allocations, free from the inside out:

```hopper
address inner = allocate 64
address outer = allocate 16
// ... store inner address in outer ...
deallocate inner    // free inner first
deallocate outer    // then outer
```

---

## Address Operators

### `name::address` — Take the Address of a Variable

```hopper
int x = 42
address p = x::address    // p points to x on the stack
```

- Result type: `address`
- For stack variables: emits `bitcast <alloca> to i8*`
- For function names: emits `bitcast <function pointer> to i8*`
- For array element: `name[i]::address` emits `getelementptr` then `bitcast to i8*`

Stack addresses are valid only while the variable is in scope. Returning or storing a stack address beyond its scope creates a dangling pointer. The compiler does not diagnose this.

### `name::value` — Dereference Through a Pointer

```hopper
address p = x::address
int y = p::value         // load the int stored at the address p holds
```

- Result type: the declared type of the variable holding the address
- Emits: `load i8*` from the alloca, `bitcast` to `T*`, then `load T`
- Dereferencing null or a dangling pointer is undefined behavior

### `name::size` — Byte Size of a Type or Variable

```hopper
int n = int::size       // 8
int s = address::size   // 8
int b = byte::size      // 1
```

- Result type: `int`
- Always a compile-time constant for primitive types and fully-defined classes
- No runtime instruction is emitted
- Equals the total bytes including trailing alignment padding

---

## Stack Memory

Local variable declarations allocate on the stack (LLVM `alloca`). No explicit syntax is required:

```hopper
int x = 10          // 8 bytes on the stack
byte buf[256]       // 256 bytes on the stack (compile-time constant size only)
```

Stack allocation rules:
- All sizes must be compile-time constants. Variable-length arrays are not supported.
- The compiler may hoist `alloca` to the function entry block regardless of declaration position.
- Stack frame size cannot be queried or controlled from within the program.
- Stack overflow is undefined behavior (no guard by default).

---

## Primitive Type Sizes and Alignment (x86-64)

| Type | LLVM IR | Size (bytes) | Alignment (bytes) |
|------|---------|-------------|------------------|
| `int` | `i64` | 8 | 8 |
| `unsigned int` | `i64` | 8 | 8 |
| `float` | `double` | 8 | 8 |
| `byte` | `i8` | 1 | 1 |
| `unsigned byte` | `i8` | 1 | 1 |
| `char` | `i8` | 1 | 1 |
| `bool` | `i1` | 1 | 1 |
| `bit` | `i1` | 1 | 1 |
| `address` | `i8*` | 8 | 8 |
| `string` | `i8*` | 8 | 8 |
| `callback(...)` | function pointer | 8 | 8 |

---

## Class (Struct) Layout

- Fields are laid out in declaration order.
- Each field is placed at the next offset that is a multiple of that field's alignment.
- The compiler MAY insert implicit padding between fields.
- The overall struct is aligned to the largest alignment of any field.
- Trailing padding MAY be added to make the total size a multiple of the struct alignment.

Example:

```hopper
class Record {
    byte  tag        // offset 0, size 1
                     // 7 bytes implicit padding
    int   value      // offset 8, size 8
    byte  flags      // offset 16, size 1
                     // 7 bytes trailing padding
}                    // total size: 24, alignment: 8
```

Do not assume contiguity of fields unless using `struct` with `pad` members for precise control, or `bitfield` for bit-level layout.

---

## Heap Allocation Alignment Details

`allocate` returns at least 8-byte-aligned memory. This is sufficient for all primitive types in the table above.

For stricter alignment (e.g., 16-byte alignment for SSE2 operations), round up manually:

```hopper
int   align  = 16
address raw  = allocate size + align
int   rawInt = cast<int>(raw)
int   adj    = (rawInt + align - 1) & -align
address ptr  = cast<address>(adj)
// Use ptr. Deallocate raw (not ptr).
deallocate raw
```

---

## Undefined Behaviors Summary

The following operations produce **undefined behavior** — no guaranteed outcome, no required diagnostic:

| Operation | UB Category |
|-----------|------------|
| Dereferencing address value `0` (null pointer) | Null dereference |
| Accessing memory outside allocation bounds | Out-of-bounds |
| Reading from uninitialized memory | Uninitialized read |
| Using memory after `deallocate` | Use-after-free (UAF) |
| Calling `deallocate` twice on the same pointer | Double-free |
| Passing `null` (address `0`) to `deallocate` | Null deallocation |
| Passing an interior pointer (not base) to `deallocate` | Invalid free |
| Allowing a stack address to outlive the variable's scope | Dangling stack pointer |
| Address arithmetic overflowing the address space | Pointer overflow |
| Allocating 0 bytes | Invalid allocation size |
| Division by zero | Arithmetic UB |
| Shift amount >= bit width of the type | Shift UB |

A conforming implementation MAY detect and report any of the above as a diagnostic, but is NOT REQUIRED to do so.

---

## MMIO Memory (Bare-Metal)

Hardware memory-mapped I/O registers are accessed via `strict` and `bind` declarations:

```hopper
strict int UART_DR = 0x40021000   // named alias for register at fixed address
bind 0x00000004 = reset::address  // place function pointer at hardware address
```

Accesses to MMIO addresses MUST be treated as volatile: reads and writes may have side effects, and the implementation SHALL NOT cache or reorder MMIO accesses.

---

## Memory Visibility Principle

Every heap allocation MUST be traceable to a specific `allocate` expression in source code. A conforming implementation:

- SHALL NOT introduce hidden allocation sites during compilation.
- SHALL NOT implicitly allocate on behalf of the program (e.g., during function calls or expression evaluation).
- SHALL NOT reorder or elide `allocate`/`deallocate` in a way that changes observable memory state.
