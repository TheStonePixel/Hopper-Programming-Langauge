## Appendix G: Style Guidelines

These conventions apply to all Hopper source files and project manifests. They are not enforced by the grammar (which accepts several alternative forms) but represent the canonical style for all code in the `hopper/` directory and for code examples in documentation.

---

## Formatting

### Indentation

Use **4 spaces** per level. Do not use tabs.

```hopper
function clamp(int x, int lo, int hi) int {
    if (x < lo) {
        return lo
    }
    if (x > hi) {
        return hi
    }
    return x
}
```

### Brace Style

K&R style: the opening brace appears on the **same line** as the introducing keyword or declaration. The closing brace appears on its own line, indented to match the introducing keyword.

```hopper
class Buffer {
    address data
    int capacity

    constructor(int n) {
        self.capacity = n
        self.data = allocate n
    }

    destructor() {
        deallocate self.data
    }
}
```

Do not place the opening brace on a new line (Allman style is non-canonical).

### Line Length

Prefer lines under 100 characters. There is no hard limit, but long lines should be broken at logical boundaries (e.g., after a comma in a parameter list).

### Blank Lines

- One blank line between top-level declarations.
- One blank line between class members of different kinds (fields vs. methods, or between distinct logical groups of methods).
- No trailing blank lines at the end of a file.
- No blank lines inside a short function body (3 lines or fewer).

---

## Naming Conventions

### Classes and Interfaces

Use **PascalCase**. Each word begins with an uppercase letter.

```hopper
class LinkedList { ... }
contract FileSystem { ... }
class X86SIMD { ... }      // acronyms: all-caps is acceptable
```

### Functions and Methods

Use **camelCase**. The first word is lowercase; subsequent words begin with an uppercase letter.

```hopper
function readLine(int fd, address buf, int max) int { ... }
function countWords(address buf, int len) int { ... }
```

### Variables and Parameters

Use **camelCase**, same rule as functions.

```hopper
int byteCount = 0
address inputBuf = allocate 4096
int lineStart = 0
```

### Enum Types

Enum type names use **PascalCase**.

```hopper
enum Color {
    Red     = 0
    Green   = 1
    Blue    = 2
}
enum JsonKind {
    NONE    = 0
    BOOL    = 1
    INT     = 2
    STRING  = 3
    ARRAY   = 4
    OBJECT  = 5
}
```

### Enum Variants

Enum variants whose names represent flag-like constants or protocol values use **SCREAMING_SNAKE_CASE** (all uppercase with underscores). Variants that read as natural words in context may use PascalCase:

```hopper
enum StdFd {
    STDIN  = 0
    STDOUT = 1
    STDERR = 2
}
enum OpenFlag {
    O_RDONLY = 0
    O_WRONLY = 1
    O_RDWR   = 2
    O_CREAT  = 64
    O_TRUNC  = 512
}
enum Color {
    Red   = 0
    Green = 1
    Blue  = 2
}
```

Use SCREAMING_SNAKE when variants are bit flags or system constants. Use PascalCase when variants are domain values (directions, states, categories).

### Struct and Bitfield Types

Use **PascalCase**, same as classes.

```hopper
struct StatBuf { ... }
bitfield ControlReg { ... }
```

### Constants (Deprecated)

Top-level `const` is being removed from the language. If you encounter legacy code using it, the names conventionally used SCREAMING_SNAKE_CASE:

```hopper
const STDIN  = 0
const STDOUT = 1
```

New code MUST use `enum` instead.

### Internal/Private by Convention

Identifiers that are implementation details and not intended for external use MAY be prefixed with a single underscore:

```hopper
function _parseHex(address s, int len) int { ... }
int _cursor = 0
```

This is a naming convention only — Hopper has no access control mechanism. All identifiers are in scope for any code that imports the file.

---

## Declarations

### One Declaration Per Line

Declare each variable on its own line. Do not combine multiple variable declarations on one line.

```hopper
// Correct
int x = 0
int y = 0
address buf = allocate 256

// Wrong — not supported by the grammar and not style-compliant
int x = 0, y = 0
```

### Variable Declaration Position

Declare variables as close to their first use as possible. Hopper has no restriction on where declarations appear within a block — they do not have to be at the top.

```hopper
function process(address buf, int len) int {
    int total = 0
    int i = 0
    while (i < len) {
        int ch = buf[i]         // declare here, not at top of function
        if (ch == 10) {
            total = total + 1
        }
        i = i + 1
    }
    return total
}
```

### Class Fields

Declare all fields before any methods. Fields are laid out by the compiler in declaration order; placing them first makes the layout immediately visible.

```hopper
class Node {
    address next       // fields first
    int value

    constructor(int v) {
        self.next = null
        self.value = v
    }

    function get() int {
        return self.value
    }
}
```

---

## Comments

### Comment Style

Use `//` line comments only. Block comments (`/* */`) are not supported by the grammar.

### Comment Placement

Place comments on a **separate line above** the code they describe, not inline at the end of the line.

```hopper
// scan 16 bytes at a time using SSE2
int mask = simd.scanByte16(buf + i, 10)

// NOT: int mask = simd.scanByte16(buf + i, 10)  // scan 16 bytes
```

Short inline comments are acceptable for field declarations where the name alone may not be self-explanatory:

```hopper
int fd        // file descriptor for the input file
address base  // start of the mapped region
int used      // bytes consumed so far
```

### Function and Method Documentation

Document the purpose, parameters, and return value for non-obvious functions with a block of `//` lines immediately above the declaration:

```hopper
// Scan buf[0..len) for byte value target.
// Returns the index of the first match, or -1 if not found.
function findByte(address buf, int len, int target) int {
    ...
}
```

---

## Import Order

Place all import declarations at the top of the file, before any other declarations. Interface imports (`import X from Y`) come before legacy module imports (`import x`), if any mix is present.

```hopper
import IO         from linux
import FileSystem from linux
import SIMD       from x86_64
```

Within the contract import group, list OS interfaces (linux) before hardware interfaces (x86_64, compute).

---

## Enum vs. const

Always prefer `enum` over top-level `const`. Top-level `const` is deprecated and will be removed.

```hopper
// Preferred
enum StdFd { STDIN = 0  STDOUT  STDERR }

// Deprecated — do not use in new code
const STDIN  = 0
const STDOUT = 1
const STDERR = 2
```

Use `enum` even for a single named constant if it is a standalone value:

```hopper
enum Limits { MAX_PATH = 4096 }
enum Version { MAJOR = 1  MINOR = 0  PATCH = 0 }
```

---

## Memory

### Allocate and Deallocate Proximity

Pair each `allocate` with its matching `deallocate` in the same class (constructor/destructor) or in clearly matched call sites. Do not scatter allocation and deallocation across unrelated functions.

```hopper
class Buffer {
    address data

    constructor(int n) {
        self.data = allocate n    // allocate here
    }

    destructor() {
        deallocate self.data      // deallocate here — same type, matching pair
    }
}
```

### Check Allocation Results

For allocations that may fail (any allocation in a memory-constrained environment), check the result before use:

```hopper
address buf = allocate 1048576
if (cast<int>(buf) == 0) {
    // handle allocation failure
    return -1
}
```

### No asm Blocks in Application Code

Inline `asm {}` blocks MUST NOT appear in program source files. Hardware-specific assembly belongs exclusively in module implementation files (e.g., `x86_64/src/LinuxSyscalls.hop`, `x86_64/src/SIMD.hop`). Programs call free functions or methods from those modules.

---

## hopper.json Style

### Field Order

Use this field order in `hopper.json`:

```
name, version, description, license, type, entry/main, board, dependencies, targets, exports
```

### Binding Indentation

Use 2-space indentation inside JSON. Keep each binding on its own set of lines:

```json
{
  "targets": {
    "host": {
      "IO": {
        "from":           "linux",
        "contract":      "modules/linux/interfaces/IO.hop",
        "implementation": "modules/x86_64/src/LinuxSyscalls.hop",
        "inline": true
      }
    }
  }
}
```

Align the `"from"`, `"contract"`, `"implementation"`, and `"inline"` values within each binding for readability.
