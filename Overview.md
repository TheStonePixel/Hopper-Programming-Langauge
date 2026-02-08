# Hopper Programming Language

A systems programming language designed for clarity, correctness, and predictable performance.

## What is Hopper?

Hopper is a compiled language that targets LLVM, giving you native performance while prioritizing **explicit code over clever tricks**. The language is built on a simple philosophy: humans are better at writing correct code than fast code, so let the compiler handle optimization while you focus on clarity.

## Why Hopper?

Traditional systems languages like C offer incredible power but with a wide performance dispersion:

```
C Performance Distribution:
|----[worst]----------------[average]--------[best]---->
     ^bugs, leaks, UB                         ^expert code
```

Hopper tightens this distribution:

```
Hopper Performance Distribution:
|------------------[worst]--[average]-[best]----------->
                   ^still correct     ^compiler optimized
```

**The goal isn't to beat the best C program. It's to make the average Hopper programmer better than the average C programmer.**

## Core Design Principles

### 1. No Implicit Behavior
Everything is explicit. No hidden conversions, no magic, no surprises.

### 2. Keywords Over Operators
Memory operations use searchable keywords instead of cryptic operators. You can grep your entire codebase for every pointer operation.

### 3. Primitives, Not Policies
The language provides raw memory primitives. Allocation strategies (heap, pool, arena) are library code, not language features.

### 4. Compiler Optimizes, Humans Write Correct Code
Write clear, explicit code. Trust the optimizer. You don't need to be an expert to write performant Hopper.

---

## Syntax Overview

### Variables and Types

```hopper
int x = 10
bool flag = true
float pi = 3.14
String name = "Hopper"
```

### Functions

```hopper
function add(int a, int b) int {
    return a + b
}

// External functions (FFI)
extern function putchar(int c) int
```

### Control Flow

```hopper
// If statements
if (x > 0) {
    // ...
} else {
    // ...
}

// While loops
while (x < 10) {
    x = x + 1
}

// For loops
for (int i = 0; i < 10; i = i + 1) {
    // ...
}

// Break and continue
while (true) {
    if (done) { break }
    if (skip) { continue }
}
```

### Structs

```hopper
struct Point {
    int x
    int y
}

Point p
p.x = 10
p.y = 20
```

### Fixed-Size Arrays

```hopper
int buffer[100]          // Declare array of 100 ints
buffer[0] = 42           // Write to element
int value = buffer[50]   // Read from element
```

---

## The Address System

This is where Hopper diverges from C. Instead of pointer operators (`*`, `&`), Hopper uses explicit syntax:

### Getting an Address

```hopper
int x = 10
address p = x::address      // Get address of x
```

### Reading Through an Address

```hopper
int value = p::value        // Read the value at address p
```

### Writing Through an Address

```hopper
p::value = 20               // Write 20 to the location p points to
// x is now 20
```

### Address Arithmetic

```hopper
int buffer[10]
address p = buffer[0]::address    // Address of first element
p = p + 3                         // Advance by 3 elements (sizeof-aware)
p::value = 99                     // buffer[3] is now 99
```

### Why This Syntax?

| C/C++ | Hopper | Benefit |
|-------|--------|---------|
| `int* p = &x` | `address p = x::address` | Searchable, explicit |
| `*p = 20` | `p::value = 20` | No operator overloading confusion |
| `int y = *p` | `int y = p::value` | Clear intent |
| `p++` | `p = p + 1` | No side effects |

**Every memory operation is greppable.** Search for `::address` to find all address-taking operations. Search for `::value` to find all dereferences.

---

## Memory Philosophy

### No Built-in Heap

Hopper doesn't have `malloc` or `new` as language keywords. Instead, memory allocation is a **library concern**.

The language provides:
- `address` type
- `::address` / `::value` modifiers
- Fixed-size arrays
- Address arithmetic

With these primitives, you build allocators:

```hopper
// Conceptual - with templates (future feature)
struct Heap {
    int storage[1024]    // 4KB buffer
    int nextFree
}

// Your allocation strategy, your rules
address data = heap.allocate(100)
heap.deallocate(data)
```

### Why Library-Based Allocation?

Different domains need different strategies:

| Domain | Strategy | Why |
|--------|----------|-----|
| Embedded | Static pool | Fixed memory budget |
| Games | Arena allocator | Fast bulk free |
| Servers | Traditional heap | General purpose |
| Real-time | Lock-free pool | Predictable latency |

Hopper doesn't force a choice. You pick (or write) the allocator that fits your needs.

---

## Building and Running

### Prerequisites

- Node.js (for the compiler frontend)
- LLVM toolchain (`llc`, `clang`)
- Java (for ANTLR parser generation)

### Commands

```bash
# Generate parser from grammar
npm run gen:grammar

# Build and run a .hop file
node app.js run examples/array.hop

# Build only (produces executable in build/)
node app.js build examples/array.hop
```

---

## Example Program

```hopper
extern function putchar(int c) int

function printDigit(int n) int {
    putchar('0' + n)
    return 0
}

function main() int {
    // Create an array
    int numbers[5]

    // Initialize with squares
    for (int i = 0; i < 5; i = i + 1) {
        numbers[i] = i * i
    }

    // Print using address arithmetic
    address p = numbers[0]::address
    for (int i = 0; i < 5; i = i + 1) {
        printDigit(p::value)
        p = p + 1
    }
    putchar('\n')

    return 0
}
// Output: 01491
```

---

## Current Status

Hopper is in active development. Currently implemented:

- [x] Basic types (int, bool, float, String)
- [x] Functions and extern declarations
- [x] Control flow (if/else, while, for, break, continue)
- [x] Structs with field access
- [x] Fixed-size arrays
- [x] Address system (`::address`, `::value`)
- [x] Address arithmetic
- [x] LLVM code generation

Coming soon:

- [ ] Templates/Generics
- [ ] Standard library allocators
- [ ] Module system
- [ ] More type safety features

---

## Contributing

Hopper is experimental and evolving. If the philosophy resonates with you—explicit code, tight performance dispersion, memory as a library concern—we'd love your input.

The codebase is intentionally simple:
- `grammar/Hopper.g4` - ANTLR grammar
- `src/ast.js` - AST node definitions
- `src/astBuilder.js` - Parse tree to AST
- `src/codegenLLVM.js` - AST to LLVM IR

---

## License

[TBD]

---

*"Any competent developer writes code that's 90% as fast as an expert's, and 100% correct."*
