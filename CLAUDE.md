# Hopper Programming Language — Claude Working Context

## Language Specification

The authoritative language reference is the spec at `hopper-spec/`. Key sections:
- `00-foundations/` — design goals, philosophy, anti-goals
- `01-language/` — syntax, types, semantics, memory model, modules
- `03-build/` — build system, project manifests, targets
- `04-packages/` — versioning, dependencies, registries
- `08-tooling/` — CLI, test runner, diagnostics (`15.8-diagnostics.md`)

Consult the spec before inventing syntax. The sections below cover compiler implementation
details and toolchain conventions that are NOT in the spec.

---

## Critical Rules

1. **Always use `hopper init` to create new projects** — never hand-craft directories.
2. **Always use `hopper build` to compile** — never invoke `hopperc.js` or `clang` directly unless debugging the compiler itself.
3. **Always use `hopper install <name>` to add dependencies** — never copy module files manually. This is how the build tool is tested — use it constantly.
4. **After `hopper install`, always run `hopper build` and verify the output** — the build tool and compiler are tested together. Every change to either must be proven with a real build.
5. **No global mutable variables** — the grammar has no top-level `var`/`let`/`int x = 5`. State lives in classes or is passed as parameters.
6. **`const` is an immutability modifier** — `const int x = 5` inside a function declares an immutable local; reassignment is a compile-time TypeError. There is no top-level `const`; use `enum` for module-level named integers.
7. **Write syntax that the compiler actually accepts** — check the grammar (`seed/compiler/grammar/Hopper.g4`) and codegen before inventing syntax.
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
      diagnostics/     # compiler warning/error regression tests (hopper test)
  seed/
    compiler/          # JS bootstrap compiler (hopperc.js, grammar/, src/)
    build_system/      # hopper CLI (hopper script, tools/)
    extensions/        # VS Code syntax highlighting
  hopper-spec/         # language specification (authoritative)
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
hopper test                          # run tests in current project's tests/ directory
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

## Compiler Diagnostics

All errors and warnings use the same bordered box format on stderr (see `seed/compiler/src/errors.js`
and `hopper-spec/08-tooling/15.8-diagnostics.md` for full details):

```
│ Module: hello  File: main.hop  Line: 14
│ Error: Unknown enum variant
│        'Purpl' is not a variant of enum 'Color'
│ Hint: valid variants: Red, Green, Blue
└───────────────────────────────────────────────────────────
```

**Warnings are fatal** — any warning exits with code 1, same as an error.

**`_` prefix suppresses UnusedVariable** — name a variable `_x` to opt out.

Colors by kind: red (Error), bright-blue (Warning), orange (Constraint warning),
bright-red (cascade Note), magenta (Syntax error), green (Success).

Diagnostic tests live in `hopper/tests/diagnostics/` — run with `hopper test` from that directory.

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
        "interface":      "modules/linux/interfaces/IO.hop",
        "implementation": "modules/x86_64/src/LinuxSyscalls.hop"
      }
    }
  }
}
```
- The interface name must match `from` field in the binding.
- Both the interface file and the implementation file are compiled in.
- Free functions from the implementation file come into scope — programs call them directly.

### Module import (old, internal use only)
```hopper
import io from arch
import tty from linux
```
- Lowercase module name, no binding in hopper.json — falls through to file resolution.
- Resolves to `modules/<name>/src/<module>.hop` or stdlib.
- Used only by legacy lowercase files in `hopper/nonconform/`.
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

### Immutable locals
```hopper
const int limit = 100       // cannot be reassigned — TypeError on any attempt
const string tag = "v1"
```
`const` is a statement-level modifier. No top-level `const` exists — use `enum`.

### Enums (module-level named integer sets)
```hopper
enum Color {
    Red   = 0
    Green = 1
    Blue  = 2
}
```
Access as `Color.Red`. Integer-valued only (or string-valued with `= "..."` literals).
Enum variants must each be on their own line.

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

Use `cast<T>(x)` — defined in `hopper/modules/cast/src/Cast.hop`, not baked into the compiler.

```hopper
int n     = cast<int>(3.9)        // float → int (truncates to 3)
float f   = cast<float>(7)        // int → float
address p = cast<address>(42)     // int → address
byte b    = cast<byte>(300)       // int → byte (truncates to 44)
bool flag = cast<bool>(1)         // int → bool
```

All supported primitive conversions and their LLVM opcodes:

| From \ To     | `int`      | `byte`     | `float`    | `bool`     | `address`  | `string`  |
|---------------|------------|------------|------------|------------|------------|-----------|
| `int`         | —          | `trunc`    | `sitofp`   | `icmp ne`  | `inttoptr` | —         |
| `byte`        | `sext`     | —          | `sitofp`   | `icmp ne`  | —          | —         |
| `float`       | `fptosi`   | `fptosi`   | —          | `fcmp une` | —          | —         |
| `bool`        | `zext`     | `zext`     | `uitofp`   | —          | —          | —         |
| `address`     | `ptrtoint` | —          | —          | —          | —          | `bitcast` |
| `string`      | —          | —          | —          | —          | `bitcast`  | —         |

Also available: `cast<unsigned int>`, `cast<unsigned byte>`, `cast<char>`, `cast<string>`.

---

## What Does NOT Exist

- No global mutable variables (`int x = 5` at top level)
- No top-level `const` — use `enum` for named integer constants
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

### Design Principle: Source code sees OS, build file sees hardware

Programs import `IO from linux` and `FileSystem from linux` — hardware-independent names.
They call free functions (`open`, `read`, `write`, `close`) and never name x86-64, ARM64, or
any ISA. The build file (`hopper.json` targets) is the only place where hardware is named.
Changing from x86_64 to arm64 requires editing only the `implementation` paths in hopper.json —
zero source changes anywhere.

#### Hardware layer (`x86_64/`)
The x86_64 module contains two kinds of things:

**LinuxSyscalls** — the joint Linux OS ABI + x86-64 ISA interface. Syscall numbers here are
specific to Linux on x86-64 (different on ARM64 Linux, different on macOS x86-64). The file
`x86_64/src/LinuxSyscalls.hop` contains `interface LinuxSyscalls` (documenting ~150 syscalls)
plus free function implementations of each one using inline asm. No class, no instantiation —
the free functions come into scope when a build target's `implementation` resolves to this file.

**SIMD** — SSE2 vector operations: `scanByte16`, `scanByte2x16`, `scanByteOR4x16`, `popcnt16`,
`bsf16`. The class `X86SIMD implements SIMD` wraps SSE2 instructions. SIMD is an ISA capability,
not an OS interface, so it uses a class and programs instantiate `X86SIMD` directly.
Files: `x86_64/interfaces/SIMD.hop` + `x86_64/src/SIMD.hop`.

#### OS interface layer (`linux/`)
A pure interface module — no implementation files, no classes, no source to edit when porting.
Exports 7 interfaces that declare what a Linux program needs:
- `IO` — read, write, pread64, pwrite64, readv, writev, sendfile, splice, tee, ioctl
- `FileSystem` — open, close, stat, mkdir, unlink, rename, getcwd, dup, pipe, inotify, ...
- `System` — uname, sysinfo, clocks, scheduling, resource limits
- `Process` — fork, execve, waitpid, getpid/uid/gid, signals, ptrace
- `Socket` — socket, socketBind, listen, accept, connect, send, recv, setsockopt, ...
- `Network` — select, poll, epoll_create1, epoll_ctl, epoll_wait
- `Memory` — mmap, munmap, mprotect, mremap, madvise, mlock, memfd_create

#### Architecture selector (hopper.json targets)
The build file connects the OS interface to the hardware implementation:
```json
"IO": {
  "from":           "linux",
  "interface":      "modules/linux/interfaces/IO.hop",
  "implementation": "modules/x86_64/src/LinuxSyscalls.hop"
}
```
To retarget: change `x86_64` to `arm64` in every `implementation` path. That is the entire
porting change for the build layer. Program source and linux interfaces are untouched.

### Non-conforming legacy modules (`hopper/nonconform/`)
Everything in `hopper/nonconform/` was written before the new interface standard.
Do NOT import from any of these until they have been updated and moved to `hopper/modules/`:
`Pointer`, `algo`, `ascii`, `char`, `cli`, `concurrent`, `core`, `ds`, `fs`, `io`, `json`,
`llvm`, `math`, `path`, `regex`, `stream`, `string`, `tui`, `uart`, `utf8`

### Dependency chain
```
program → import IO from linux
             ↓ hopper.json targets binding resolves to:
          linux/interfaces/IO.hop       (interface contract)
          x86_64/src/LinuxSyscalls.hop  (interface LinuxSyscalls + free functions)
                                         → inline-ASM syscalls, no further dependencies
          free functions from LinuxSyscalls.hop come into scope → program calls open(), read()...
```

**Important — keyword collision**: `bind` is a grammar keyword (hardware address linker directive).
The socket `bind` syscall is exposed as `socketBind` in both the `LinuxSyscalls` interface and
the `linux/interfaces/Socket.hop` interface.

**Important — `LinuxSyscalls.hop` is self-contained**: the interface declaration and free
function implementations live in the same `src/` file. This ensures the interface is in scope
when any file imports LinuxSyscalls, regardless of how the build system resolves the path.

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
        "interface":      "modules/linux/interfaces/IO.hop",
        "implementation": "modules/x86_64/src/LinuxSyscalls.hop"
      },
      "FileSystem": {
        "from":           "linux",
        "interface":      "modules/linux/interfaces/FileSystem.hop",
        "implementation": "modules/x86_64/src/LinuxSyscalls.hop"
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

## Known Gaps / Open Items

- **`exports` in library hopper.json** — declared but not yet consumed by the build system. Build system currently relies on consumer declaring full binding paths.
- **Constants inside interfaces** — `constDecl` is not in `interfaceDecl` grammar, so interfaces cannot carry named constants. Use `enum` inside the interface body instead (which IS supported).

---

## Hardware Capability Modules (x86_64 SIMD)

`x86_64` is a full capability module — not just syscall stubs. It exports a `SIMD` interface that programs import the same way they import OS interfaces.

**Convention: no `asm {}` blocks in program source files.** Hardware specifics live exclusively in `x86_64/src/SIMD.hop`. Programs call methods on an `X86SIMD` instance.

### The SIMD Interface

`x86_64/interfaces/SIMD.hop` — `x86_64/src/SIMD.hop` (class `X86SIMD implements SIMD`):

```hopper
interface SIMD {
    // Scan 16 bytes at ptr for byte value b. Returns 16-bit mask (bit i set if byte[i] == b).
    function scanByte16(address ptr, int b) int

    // One load; scan for b1 and b2. Bits 0-15: b1 matches. Bits 16-31: b2 matches.
    function scanByte2x16(address ptr, int b1, int b2) int

    // One load; OR four byte comparisons. Returns 16-bit mask.
    function scanByteOR4x16(address ptr, int b1, int b2, int b3, int b4) int

    // Count set bits in a 16-bit mask (popcnt).
    function popcnt16(int mask) int

    // Index of lowest set bit (mask must be non-zero).
    function bsf16(int mask) int
}
```

### Usage Pattern

```hopper
import SIMD from x86_64

function indexLines(...) {
    X86SIMD simd = X86SIMD()
    while (i + 16 <= endPos) {
        int nlm = simd.scanByte16(inputBuf + i, 10)
        ...
    }
}
```

Add to `hopper.json` targets:
```json
"SIMD": {
  "from": "x86_64",
  "interface": "modules/x86_64/interfaces/SIMD.hop",
  "implementation": "modules/x86_64/src/SIMD.hop"
}
```

Programs currently using the SIMD module: `wc`, `sortlines`, `regex`.

---

## Active Branch

`claude/minimal-c-language-design-715OO` — all work goes here.
