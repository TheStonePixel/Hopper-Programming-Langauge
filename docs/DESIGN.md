# Hopper Language Design

## Philosophy

Hopper aims to be **as simple as C, but stronger than C**.

C maps assembly to a higher level. Hopper maps **relationships and constraints** to hardware. The programmer declares intent; the compiler chooses representation.

### Core Principles

1. **One language at every level** - compiled, JIT, interpreted, scripting
2. **Unified bytecode** - single IR for all execution strategies
3. **Constraint-driven types** - programmer specifies domain, compiler picks hardware representation
4. **Zero-cost abstractions** - constraints are compile-time, no runtime watchers
5. **Self-hosting goal** - Hopper compiles Hopper, eventually with zero external dependencies

---

## Type System

### The Problem with C

In C, you write `short` or `int` and hope it's right. The compiler optimizes anyway. You're guessing at hardware when you should be expressing intent.

### Hopper's Approach: Constraints

```hopper
int age [0 -> 125] = 0
```

This says:
- `age` is an integer
- Valid range is 0 to 125
- Initial value is 0

The compiler reads this and decides:
- Range fits in 8 bits (max 255)
- Never negative, so unsigned
- Result: uses `u8` internally

**Constraints must be compile-time constants.** No runtime dependencies, no watchers, no slowdown.

```hopper
int x [0 -> 100] = 0       // OK: literal bounds
int y [0 -> MAX_SIZE] = 0  // OK: const bounds
int z [0 -> x] = 0         // NO: runtime dependency
```

### Bounds Checking

With constraints, bounds checking becomes optional:
- **Debug build**: insert checks at constraint boundaries
- **Release build**: checks removed, correctness assumed/proven
- **Strict mode**: compiler rejects code that could violate constraints

### Basic Types

Only two numeric types exist at the language level:
- `int` - integer with constraints
- `float` - floating point with constraints

```hopper
int count [0 -> *] = 0                    // unbounded positive
int offset [-1000 -> 1000] = 0            // signed range
float temperature [-40.0 -> 85.0] = 20.0  // sensor range
float normalized [0.0 -> 1.0] = 0.0       // unit interval
```

---

## Memory Model

### Continuous Memory (not "arrays")

Deliberate terminology shift. Arrays imply indexing semantics. Continuous memory is about **contiguous allocation**.

```hopper
// Syntax TBD - possibilities:
int[100] buffer [0 -> 255]              // 100 ints, each 0-255
continuous int pixels [0 -> 255] * 1920 * 1080
memory int<1024> [0 -> 255]             // 1024 bytes of constrained ints
```

### Bitfields

For packed data structures with explicit bit-level control:

```hopper
bits PackedColor {
    r: 5,   // 5 bits
    g: 6,   // 6 bits
    b: 5    // 5 bits = 16 bits total
}

bits Flags {
    enabled: 1,
    mode: 3,
    reserved: 4
}
```

---

## Execution Model

### Unified Bytecode

Hopper compiles to a single bytecode format that serves all execution modes:

```
Hopper Source
     |
     v
Hopper Bytecode (universal IR)
     |
     +---> Interpreter (direct execution)
     +---> JIT (runtime compilation to native)
     +---> AOT Compiler (bytecode -> LLVM IR -> machine)
     +---> REPL (interactive scripting)
```

### Bootstrap Path

1. **Phase 1 (Current)**: Hopper -> LLVM IR -> clang/llc -> binary
   - Piggyback on C ecosystem for linking
   - Use libc for I/O, memory, etc.

2. **Phase 2**: Self-hosting compiler
   - Rewrite Hopper compiler in Hopper
   - Still targets LLVM

3. **Phase 3**: Core libraries
   - Data structures in Hopper
   - Core services in Hopper

4. **Phase 4**: Custom bytecode
   - Design Hopper bytecode format
   - Bytecode -> LLVM IR backend
   - Interpreter for bytecode

5. **Phase 5**: JIT
   - Bytecode -> native at runtime

6. **Phase 6**: Independence
   - Bytecode -> native directly
   - Zero external dependencies

---

## Current Status (v0.0.1)

### Implemented
- [x] Function definitions and external declarations
- [x] Variables: int, bool, float
- [x] Arithmetic: + - * /
- [x] Comparisons: < <= > >= == !=
- [x] Logical: && || !
- [x] Control flow: if/else, while, return
- [x] Function calls (including C interop via extern)
- [x] LLVM IR backend

### Needed for Bootstrap
- [ ] Strings and string operations
- [ ] Continuous memory / arrays
- [ ] Structs / records
- [ ] Constraint syntax and analysis
- [ ] File I/O (via libc initially)
- [ ] Modules / imports
- [ ] Error handling
- [ ] Standard library basics

---

## Syntax Examples

### Current Syntax (v0.0.1)

```hopper
extern function putchar(int c) int

function factorial(int n) int {
    if (n <= 1) {
        return 1
    }
    return n * factorial(n - 1)
}

function main() int {
    int i = 1
    while (i <= 10) {
        putchar(48 + factorial(i))
        putchar(10)
        i = i + 1
    }
    return 0
}
```

### Future Syntax (proposed)

```hopper
extern function printf(str format, ...) int
extern function fopen(str path, str mode) ptr
extern function fread(ptr buf, int size, int count, ptr stream) int

struct Token {
    int type [0 -> 255]
    str lexeme
    int line [1 -> *]
}

function tokenize(str source) continuous Token {
    continuous Token tokens [0 -> 10000]
    int pos [0 -> *] = 0

    while (pos < source.length) {
        // tokenization logic
    }

    return tokens
}
```

---

## Open Questions

1. **Constraint violation behavior**: Trap? Saturate? Wrap? Compiler flag?
2. **String representation**: Null-terminated (C compat) or length-prefixed?
3. **Memory management**: Manual? RAII? Optional GC for scripting mode?
4. **Error handling**: Return codes? Exceptions? Result types?
5. **Generics**: Needed? What syntax?

---

## Timeline

- **v0.1**: Strings, arrays, structs
- **v0.3**: Constraints, modules, stdlib stubs
- **v0.5**: Self-hosting compiler begins
- **v1.0**: Stable language, production-ready (target: late 2026/2027)
