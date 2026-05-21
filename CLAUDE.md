# Hopper Programming Language — Claude Working Context

## Critical Rules

1. **Always use `hopper init` to create new projects** — never hand-craft directories.
2. **Always use `hopper build` to compile** — never invoke `hopperc.js` or `clang` directly unless debugging the compiler itself.
3. **Always use `hopper install <name>` to add dependencies** — never copy module files manually. This is how the build tool is tested — use it constantly.
4. **After `hopper install`, always run `hopper build` and verify the output** — the build tool and compiler are tested together. Every change to either must be proven with a real build.
5. **No global mutable variables** — the grammar has no top-level `var`/`let`/`int x = 5`. State lives in classes or is passed as parameters.
6. **Top-level `const` is being removed** — the grammar supports it and tui.hop uses 48 of them, but the design intent is to eliminate module-level constants. Use `enum` for named integer sets, or scope constants inside classes/interfaces once the grammar supports it.
7. **Write syntax that the compiler actually accepts** — check the grammar and codegen before inventing syntax.
8. **libc is for diagnostics only** — `extern` declarations to C library functions (`memchr`, `strstr`, `memcpy`, etc.) are acceptable temporarily to confirm a performance bottleneck exists and to measure the ceiling. Once the bottleneck is confirmed, implement the equivalent mechanism in Hopper and remove the extern. Never ship a module that delegates its core work to libc.

---

## Repository Layout

```
Hopper-Programming-Langauge/
  hopper/
    programs/          # executable projects
    modules/           # conforming modules only: linux, arch, x86_64
    nonconform/        # legacy modules not yet updated to new standard
    build/             # compiler output (gitignored)
    tests/             # toolchain-level tests
  seed/
    compiler/          # JS bootstrap compiler (hopperc.js, grammar/, src/)
    build_system/      # hopper CLI (hopper script, tools/)
    extensions/        # VS Code syntax highlighting
  website/
```

Every project — program or library — has the same recursive shape:
```
project/
  hopper.json          # manifest
  src/                 # source files
  modules/             # nested dependency projects (same shape)
  tests/
  interfaces/          # exported interface contracts (executables only)
```

---

## The Build Tool

```bash
hopper init <name>                   # scaffold a new project (interactive)
hopper init <name> --yes             # scaffold non-interactively (all defaults)
hopper init <name> --yes --type=library --description="..." --license=MIT

hopper install                       # install all dependencies from hopper.json
hopper install <name>                # install a specific module + its transitive deps

hopper build                         # compile entry → build/<name>
hopper run                           # run build/<name>
hopper ir <file.hop>                 # print LLVM IR (debug)
hopper ast <file.hop>                # print AST as JSON (debug)
```

`hopper init` creates: `hopper.json`, `src/`, `modules/`, `tests/`, `interfaces/` (for executables).

`hopper install` copies modules from the global store (`hopper/modules/`) into the project's
`modules/` directory with full nesting — each module's dependencies go into its own `modules/`
subdirectory, so the folder tree mirrors the dependency graph exactly.

Dependencies must be declared in `hopper.json` before installing:
```json
{
  "dependencies": {
    "linux": "0.1.0"
  }
}
```

The CLI lives at `seed/build_system/hopper`. It is NOT globally installed right now — run it as
`node seed/build_system/hopper` or reinstall with `cd seed/build_system && npm install -g --force .`.

---

## Import System

Two forms exist in the grammar:

### Interface import (new, preferred)
```hopper
import IO from linux
```
Resolves via the consuming project's `hopper.json` targets section:
```json
{
  "targets": {
    "host": {
      "IO": {
        "from":           "linux",
        "interface":      "../../modules/linux/interfaces/IO.hop",
        "implementation": "../../modules/linux/src/IO.hop"
      }
    }
  }
}
```
- The interface name must match `from` field in the binding.
- Both the interface file and the implementation file are compiled in.
- Constants and function signatures from the interface file come into scope.

### Module import (old, internal use only)
```hopper
import io from arch
import tty from linux
```
- Lowercase module name, no binding in hopper.json — falls through to file resolution.
- Resolves to `modules/<name>/src/<module>.hop` or stdlib.
- Used internally inside library implementations (e.g. linux/src/IO.hop imports `io from arch`).
- Do NOT use this form in application code — use the interface import form.

---

## Language Syntax That Actually Compiles

### Types
```
int         — i64
byte        — i8
char        — i8 (alias)
bool        — i1
float       — double
address     — i8* (raw pointer)
string      — i8* (null-terminated)
string[]    — i8** (argv)
unsigned int
unsigned byte
callback(int, bool) int   — function pointer
ClassName                 — user-defined class/struct
```

### Constants (top-level — currently works, being removed)
```hopper
const STDIN  = 0
const STDOUT = 1
const NAME   = "hello"
const NEG    = -1
```
Grammar: `const Identifier = [-] literal`. No type annotation. Inlined at compile time.
**Design intent: remove these. Use enums instead.**

### Enums (preferred over const blocks)
```hopper
enum Color { Red = 0  Green  Blue }
enum Key { NONE = -1  CHAR = 0  ENTER  BACKSPACE }
```
Access as `Color.Red`. Integer-valued only (or string-valued with `= "..."` literals).

### Functions
```hopper
function name(int x, address buf) int {
    return x
}

function noReturn(int fd) {
    // procedure — no return type
}

extern function memset(address dst, int c, int n) address
```

### Classes
```hopper
class MyClass {
    int value
    address buf

    constructor(int v) {
        self.value = v
        self.buf = allocate 64
    }

    destructor() {
        deallocate self.buf
    }

    function get() int {
        return self.value
    }
}
```
- Fields are untyped at construction — must assign in constructor.
- `allocate N` = malloc(N), returns address.
- `deallocate ptr` = free(ptr).
- Methods compiled as `ClassName_methodName(self, args...)`.
- All method calls require an explicit receiver: `obj.method()`.

### Interfaces
```hopper
interface IO {
    function read(int fd, address buf, int count) int
    function write(int fd, address buf, int count) int
}
```
- Only function/procedure signatures inside the body.
- No constants inside interfaces yet (grammar limitation — `constDecl` is not in `interfaceDecl`).
- Conformance checked at compile time.

### Classes implementing interfaces
```hopper
class LinuxIO implements IO {
    function read(int fd, address buf, int count) int {
        return read(fd, buf, count)   // calls free function from import
    }
    function write(int fd, address buf, int count) int {
        return write(fd, buf, count)
    }
}
```
- Unqualified function calls (`read(...)`) resolve to free functions from imports — NOT recursively to the method, because method calls always require an explicit receiver in Hopper.

### Entry point
```hopper
entry main {
    // no args
}

entry main(int argc, string[] argv) {
    string path = argv[1]
}
```

### Control flow
```hopper
if (x > 0) {
    ...
} else {
    ...
}

while (condition) {
    ...
}

for (int i = 0; i < n; i = i + 1) {
    ...
}
```

### Inline assembly
```hopper
function write(int fd, address buf, int count) int {
    int result
    asm {
        rax = 1
        rdi = fd
        rsi = buf
        rdx = count
        syscall
        result = rax
    }
    return result
}
```

### Memory
```hopper
address ptr = allocate 128      // malloc
deallocate ptr                  // free
```

### Casting
```hopper
address p = cast someInt        // int → address
int n = cast someAddress        // address → int
```

---

## What Does NOT Exist

- No global mutable variables (`int x = 5` at top level)
- No `var` / `let` keywords
- No null safety / optional types
- No closures / lambda expressions
- No garbage collection
- No reflection
- No macros
- No `this` keyword — use `self`
- No implicit type coercion
- No `print` built-in — call `write(1, buf, len)` or use a module

---

## Module Architecture

### Three-Tier Module System

Modules fall into three tiers. Only the user-facing library tier uses the interface/class system.

#### Tier 1 — Platform (`x86_64/`)
Raw inline-ASM syscall wrappers. No imports. Direct kernel calls via `asm { ... syscall }`.
This is the hardware layer. Never import from this directly in application code.
Files: `x86_64/src/io.hop`, `x86_64/src/fs.hop`, `x86_64/src/mem.hop`, etc.

#### Tier 2 — Architecture abstraction (`arch/`)
Each file is a single line: `import <name> from x86_64`.
This is a portability shim — to retarget to ARM64, change `x86_64` to `arm64` here only.
Never import from `arch` in application code. Only tier-3 library implementations may do so.
Files: `arch/src/io.hop`, `arch/src/fs.hop`, `arch/src/mem.hop`, etc.

#### Tier 3 — User-facing library (`linux/`)
The conforming, new-standard module. Exports 7 interfaces via the interface/class system:
- `IO` — read, write, pread64, pwrite64, readv, writev, sendfile, splice, tee, ioctl
- `FileSystem` — open, close, stat, mkdir, unlink, rename, getcwd, dup, pipe, inotify, ...
- `System` — uname, sysinfo, clocks, scheduling, resource limits
- `Process` — fork, exec, wait, getpid/uid/gid, signals, ptrace
- `Socket` — socket, bind, listen, accept, connect, send, recv, setsockopt, ...
- `Network` — select, poll, epoll
- `Memory` — mmap, munmap, mprotect, mremap, madvise, mlock, memfd_create

Implementation files (`src/IO.hop`, `src/FileSystem.hop`, etc.) delegate to `import X from arch`.
The `import X from arch` declarations in linux implementations ARE the dependency tracking —
they tell the build system that linux depends on arch which depends on x86_64.

### Non-conforming legacy modules (`hopper/nonconform/`)
Everything in `hopper/nonconform/` was written before the new interface/class standard.
Do NOT import from any of these until they have been updated and moved to `hopper/modules/`:
`Pointer`, `algo`, `ascii`, `char`, `cli`, `concurrent`, `core`, `ds`, `fs`, `io`, `json`,
`llvm`, `math`, `path`, `regex`, `stream`, `string`, `tui`, `uart`, `utf8`

If you need file I/O inside a conforming module, use `import fs from arch` and call
`open`/`read`/`close` directly — see `linux/src/shell.hop` for the pattern.

### Dependency chain
```
program → import IO from linux
             ↓ hopper.json binding resolves to:
          linux/interfaces/IO.hop    (interface contract + enums)
          linux/src/IO.hop           (class LinuxIO implements IO)
             ↓ import io from arch
          arch/src/io.hop            (architecture multiplexer)
             ↓ import io from x86_64
          x86_64/src/io.hop          (inline-ASM syscalls)
```

---

## hopper.json Structure

### Executable
```json
{
  "name": "my-program",
  "version": "0.1.0",
  "description": "...",
  "license": "MIT",
  "type": "executable",
  "entry": "src/main.hop",
  "targets": {
    "host": {
      "IO": {
        "from":           "linux",
        "interface":      "../../modules/linux/interfaces/IO.hop",
        "implementation": "../../modules/linux/src/IO.hop"
      }
    }
  }
}
```

### Library
```json
{
  "name": "my-lib",
  "version": "0.1.0",
  "description": "...",
  "license": "MIT",
  "type": "library",
  "exports": {
    "MyInterface": {
      "interface":      "interfaces/MyInterface.hop",
      "implementation": "src/MyImpl.hop"
    }
  }
}
```

The `exports` field on libraries is documentation/tooling only for now — consuming projects still declare bindings in their own `targets` section.

---

## Open Design Questions

1. **Remove top-level `const`?** User intent: yes, remove it. Use `enum` for named integer groups. Constants inside interface/class scope not yet in grammar.

2. **Grammar change needed**: Add `constDecl` to `interfaceDecl` body so interfaces can carry their own constants (e.g. `STDIN = 0` inside `interface IO`).

3. **`hopper init` is interactive** — a `--yes` flag was added to support scripted/non-interactive use.

4. **`exports` in library hopper.json** — declared but not yet consumed by the build system. Build system currently relies on consumer declaring full binding paths.

---

## Planned Architecture: Hardware Capability Modules

**Status: designed, not yet implemented. Do not implement until the test harness can validate it end-to-end.**

### The Problem with the Current Design

The current three-tier system (`x86_64 → arch → linux`) only covers syscalls. Hardware capabilities like SIMD (SSE2, AVX2) are currently written as inline `asm {}` blocks directly inside program source files (`wc/src/main.hop`, `sortlines/src/main.hop`, `regex/src/main.hop`). This is duplicated across programs and breaks portability.

### The Target Architecture

`x86_64` becomes a full capability module with multiple interfaces — not just syscall stubs. Programs import hardware interfaces the same way they import OS interfaces.

```
x86_64/
  interfaces/
    Syscalls.hop    — read, write, open, close, mmap, etc. (wraps existing src/io.hop etc.)
    SIMD.hop        — SSE2: scanByte16, scanByte2x16, popcnt16, bsf16
    AVX.hop         — AVX2/AVX-512: wider ops (scaffold now, fill when needed)
    Crypto.hop      — AES-NI, SHA extensions (future)
  src/
    Syscalls.hop    — class X86Syscalls implements Syscalls { asm { syscall } }
    SIMD.hop        — class X86SIMD implements SIMD { asm { pcmpeqb ... } }
    AVX.hop         — class X86AVX implements AVX { asm { vpgatherdd ... } }

generic/            — scalar fallback implementations (no ASM, pure Hopper logic)
  interfaces/
    SIMD.hop        — same interface shape as x86_64/interfaces/SIMD.hop
  src/
    SIMD.hop        — class ScalarSIMD implements SIMD { byte-by-byte loops }
```

### The Core Convention

**No `asm {}` blocks in `src/main.hop` of any program, ever.**
Hardware specifics live exclusively in bound modules. Programs express intent via interfaces; the build system selects the implementation.

```hopper
// sort/src/main.hop — after refactor
import IO   from linux
import SIMD from arch    // "arch" resolves to x86_64, arm64, or generic via hopper.json

function indexLines(...) {
    while (i + 16 <= endPos) {
        int nlm = simd.scanByte16(inputBuf + i, 10)   // no asm, no x86 knowledge
        ...
    }
}
```

### Multi-Target hopper.json

The `targets` section selects the implementation per build target. One source file, multiple hardware paths:

```json
{
  "targets": {
    "host": {
      "IO":   { "from": "linux",   "interface": "...", "implementation": "..." },
      "SIMD": { "from": "x86_64",  "interface": "modules/x86_64/interfaces/SIMD.hop",
                                   "implementation": "modules/x86_64/src/SIMD.hop" }
    },
    "arm64": {
      "IO":   { "from": "linux",   "interface": "...", "implementation": "..." },
      "SIMD": { "from": "arm64",   "interface": "modules/arm64/interfaces/SIMD.hop",
                                   "implementation": "modules/arm64/src/SIMD.hop" }
    },
    "scalar": {
      "IO":   { "from": "linux",   "interface": "...", "implementation": "..." },
      "SIMD": { "from": "generic", "interface": "modules/generic/interfaces/SIMD.hop",
                                   "implementation": "modules/generic/src/SIMD.hop" }
    }
  }
}
```

`hopper build` → uses `host` target.
`hopper build --target scalar` → uses scalar fallback (portable, no ASM).
`hopper build --target arm64` → uses NEON implementation.

### The SIMD Interface (canonical shape, same across all implementations)

```hopper
interface SIMD {
    // Scan 16 bytes at ptr for byte value b. Returns 16-bit match mask (bit i set if byte[i]==b).
    function scanByte16(address ptr, int b) int

    // Scan 16 bytes for b1 or b2 simultaneously. Bits 0-15: b1 matches. Bits 16-31: b2 matches.
    function scanByte2x16(address ptr, int b1, int b2) int

    // Count set bits in a 16-bit mask (popcnt).
    function popcnt16(int mask) int

    // Index of lowest set bit (mask must be nonzero).
    function bsf16(int mask) int
}
```

### How linux Uses x86_64

The `linux` module itself can consume x86_64 interfaces for hardware-accelerated internals (e.g., SIMD-accelerated memory operations). The dependency flows: `program → linux → x86_64`, and programs that need raw hardware can also import x86_64 directly alongside linux.

### The `arch/` Tier After This Change

The `arch/` passthrough tier becomes optional:
- Programs that want **portability** write `import SIMD from arch` and the hopper.json binding resolves to the right implementation.
- Programs that are **explicitly x86-only** write `import SIMD from x86_64` directly.
- The thin `arch/src/simd.hop` passthrough (`import simd from x86_64`) can stay or be removed — it's just a convenience for portable programs.

### Implementation Phases (when ready)

1. **Phase 1 — SIMD interface (additive, no existing code touched)**
   - Create `x86_64/interfaces/SIMD.hop` + `x86_64/src/SIMD.hop` (SSE2 implementation)
   - Create `generic/interfaces/SIMD.hop` + `generic/src/SIMD.hop` (scalar fallback)
   - Refactor `wc`, `sortlines`, `regex` — remove inline `asm {}` blocks, use imported SIMD
   - Add `scalar` target to their `hopper.json` and verify both targets build and produce correct output

2. **Phase 2 — Syscalls interface (refactor, existing code)**
   - Wrap `x86_64/src/io.hop`, `fs.hop`, etc. into a `class X86Syscalls implements Syscalls`
   - Update `linux` module to `import Syscalls from x86_64` instead of the arch passthrough
   - Remove or thin the `arch/` tier

3. **Phase 3 — AVX target (additive)**
   - New `x86_64/src/AVX.hop` implementation
   - Add `avx` target to programs that can benefit
   - Zero source changes required

---

## Active Branch

`claude/minimal-c-language-design-715OO` — all work goes here.
