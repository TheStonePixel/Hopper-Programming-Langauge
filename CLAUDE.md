# Hopper Programming Language — Claude Working Context

## Critical Rules

1. **Always use `hopper init` to create new projects** — never hand-craft directories.
2. **Always use `hopper build` to compile** — never invoke `hopperc.js` or `clang` directly unless debugging the compiler itself.
3. **No global mutable variables** — the grammar has no top-level `var`/`let`/`int x = 5`. State lives in classes or is passed as parameters.
4. **Top-level `const` is being removed** — the grammar supports it and tui.hop uses 48 of them, but the design intent is to eliminate module-level constants. Use `enum` for named integer sets, or scope constants inside classes/interfaces once the grammar supports it.
5. **Write syntax that the compiler actually accepts** — check the grammar and codegen before inventing syntax.

---

## Repository Layout

```
Hopper-Programming-Langauge/
  hopper/
    programs/          # executable projects
    modules/           # conforming modules only: linux, sys, x86_64
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

hopper build                         # compile src/main.hop → build/dev/<name>
hopper run                           # run build/dev/<name>
hopper ir <file.hop>                 # print LLVM IR (debug)
hopper ast <file.hop>                # print AST as JSON (debug)
```

`hopper init` creates: `hopper.json`, `src/`, `modules/`, `tests/`, `interfaces/` (for executables), `.gitignore`.

The CLI lives at `seed/build_system/hopper`. It is NOT globally installed right now — run it as `node seed/build_system/hopper` or reinstall with `cd seed/build_system && npm install -g --force .`.

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
import io from sys
import tty from linux
```
- Lowercase module name, no binding in hopper.json — falls through to file resolution.
- Resolves to `modules/<name>/src/<module>.hop` or stdlib.
- Used internally inside library implementations (e.g. linux/src/IO.hop imports `io from sys`).
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

#### Tier 2 — Architecture abstraction (`sys/`)
Each file is a single line: `import <name> from x86_64`.
This is a portability shim — to retarget to ARM64, change `x86_64` to `arm64` here only.
Never import from `sys` in application code. Only tier-3 library implementations may do so.
Files: `sys/src/io.hop`, `sys/src/fs.hop`, `sys/src/mem.hop`, etc.

#### Tier 3 — User-facing library (`linux/`)
The conforming, new-standard module. Exports 7 interfaces via the interface/class system:
- `IO` — read, write, pread64, pwrite64, readv, writev, sendfile, splice, tee, ioctl
- `FileSystem` — open, close, stat, mkdir, unlink, rename, getcwd, dup, pipe, inotify, ...
- `System` — uname, sysinfo, clocks, scheduling, resource limits
- `Process` — fork, exec, wait, getpid/uid/gid, signals, ptrace
- `Socket` — socket, bind, listen, accept, connect, send, recv, setsockopt, ...
- `Network` — select, poll, epoll
- `Memory` — mmap, munmap, mprotect, mremap, madvise, mlock, memfd_create

Implementation files (`src/IO.hop`, `src/FileSystem.hop`, etc.) delegate to `import X from sys`.
The `import X from sys` declarations in linux implementations ARE the dependency tracking —
they tell the build system that linux depends on sys which depends on x86_64.

### Non-conforming legacy modules (`hopper/nonconform/`)
Everything in `hopper/nonconform/` was written before the new interface/class standard.
Do NOT import from any of these until they have been updated and moved to `hopper/modules/`:
`Pointer`, `algo`, `ascii`, `char`, `cli`, `concurrent`, `core`, `ds`, `fs`, `io`, `json`,
`llvm`, `math`, `path`, `regex`, `stream`, `string`, `tui`, `uart`, `utf8`

If you need file I/O inside a conforming module, use `import fs from sys` and call
`open`/`read`/`close` directly — see `linux/src/shell.hop` for the pattern.

### Dependency chain
```
program → import IO from linux
             ↓ hopper.json binding resolves to:
          linux/interfaces/IO.hop    (interface contract + enums)
          linux/src/IO.hop           (class LinuxIO implements IO)
             ↓ import io from sys
          sys/src/io.hop             (architecture-neutral delegation)
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

## Active Branch

`claude/minimal-c-language-design-715OO` — all work goes here.
