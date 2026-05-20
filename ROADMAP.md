# Hopper Language Roadmap

Hopper is a freestanding systems language that refines 50+ years of programming into one
cohesive model. Fast like C, expressive like C++, safe like Ada — without sacrificing
direct hardware control. This document is the single source of truth for what exists today
and where the language is going.

---

## Done

### Language — Core

- **Primitive types** — `int`, `unsigned int`, `byte`, `unsigned byte`, `char`, `bit`,
  `bool`, `float`, `string`, `address`, `void`
- **No implicit conversions** — every cast is explicit via `cast`
- **Functions** — parameters, return types, overloading via name-mangled dispatch
  (`print__int_bool`), extern / variadic FFI (`extern function printf(string fmt, ...) int`)
- **Control flow** — `if`/`else`, `while`, `for`, `break`, `continue`, `return`
- **`defer`** — Go-style deferred cleanup, executed in reverse order before return
- **`allocate` / `deallocate`** — keywords (not library calls); lower to `malloc`/`free`
- **`::` operator family** — `x::address` (take address), `x::value` (dereference),
  `T::size` (compile-time sizeof), `arr[i]::address` (array element address)
- **`callback` type** — first-class function pointer with explicit parameter and return
  types: `callback(int, int) bool cmp = ascending`
- **Inline assembly** — `asm {}` blocks with readable syntax: `reg = var` (input),
  `var = reg` (output), bare instruction (op). No constraint strings.
- **Operator precedence chain** — full expression grammar from `||` down to unary

### Language — Types

- **`struct`** — memory-layout record with `pad` for explicit reserved bytes
- **`bitfield`** — bit-packed struct; compiler auto-selects `i8`/`i16`/`i32`/`i64`
  container; field writes generate volatile read-modify-write
- **`class`** — OOP with fields, methods, constructor, destructor (RAII), operator
  overloading (including `[]` and `[]=` as separate operators)
- **`interface`** — compile-time contract checking (no vtable overhead)
- **`enum`** — named integer variants
- **`alias`** — type aliases
- **`template`** — monomorphized generics: free params (`template Box<T>`) instantiated at
  use; fixed params (`template String<byte>`) locked at declaration. Name-mangled:
  `Box<int>` → `Box_int`
- **`const`** — compile-time constants

### Language — Hardware Model

- **`bind`** — linker directive placing a function pointer at a hardware interrupt vector
  address: `bind 0x00000004 = reset::address`
- **`strict`** — named MMIO register alias; all reads/writes compile to volatile
  load/store: `strict UartCR1 uart_cr1 = 0x4001100C`
- **`entry`** — program entry point in three forms:
  - `entry main {}` — no args
  - `entry main(int argc, string[] argv) {}` — with args
  - `entry main = startup::address` — bind to existing function

### Language — Imports

- `import X from Y` — selective: loads `modules/Y/src/X.hop`
- `import X` — bulk: loads all `.hop` files in `modules/X/src/`
- Recursive resolution: walks up the directory tree to find `modules/`, falls back to
  stdlib. Circular imports handled.

### Compiler Toolchain (`kindling/`)

| Component | File | Status |
|-----------|------|--------|
| Grammar | `grammar/Hopper.g4` | Complete — contract/invariant NEWLINE handling fixed |
| AST builder | `src/astBuilder.js` (973 lines) | Complete |
| AST node defs | `src/ast.js` | Complete |
| LLVM IR codegen | `src/codegenLLVM.js` (2,390 lines) | Complete — monolithic; split planned |
| Constraint codegen | `src/codegenConstraints.js` | Complete — requires/ensures/invariant/constrain, --release, --strict |
| Code formatter | `src/formatter.js` | Complete |
| Compiler driver | `hopperc.js` | Complete — `--release` (strips contracts) and `--strict` (compile-time proof pass) flags |
| CLI binary | `hopper` (Node.js executable) | Complete |
| Build tool | `tools/build.js` | Complete |
| Test runner | `tools/test.js` | Complete |
| ANTLR4 gen script | `npm run gen:grammar` | Complete |

**Compilation targets:**
- Host: x86-64 Linux (default)
- Bare-metal: `--target=armv6-bare` (32-bit ARM, no OS)

**Test framework directives:** `// TEST:`, `// EXPECT:`, `// COMPILE_ONLY`,
`// EXPECT_ERROR:`, `// XFAIL`

### Standard Library (`modules/`)

#### `core` — language primitives
| File | Contents |
|------|----------|
| `io.hop` | `print`, `println`, `eprint`, `eprintln`, `printInt` |
| `result.hop` | `Result<T>` — `isOk()`, `isErr()`, `unwrap()`, `unwrapOr()`, `errorCode()` |
| `error.hop` | `ErrorCode` enum — 20+ standard codes across I/O, memory, data, system |
| `assert.hop` | `assert`, `assertEq`, `assertNe` |
| `test.hop` | test harness helpers |

#### `ds` — data structures (15 files, all fully implemented with operator overloading)
`Array<T>`, `Stack<T>`, `Queue<T>`, `Deque<T>`, `LinkedList<T>`, `DoublyLinkedList<T>`,
`HashMap<K,V>`, `Set<T>`, `MinHeap<T>`, `MaxHeap<T>`, `BST<T>`, `Trie`,
`Graph`, `StringBuilder`, `BumpAllocator`

#### `math`
`abs`, `min`, `max`, `clamp`, `pow`, `factorial`, `gcd`, `lcm`, `fib`, `isqrt`

#### `algo`
`quickSort`, `mergeSort`, `insertionSort`

#### `string` (consolidated from `ascii` + `utf8`)
`IString` interface, `ascii.hop`, `utf8.hop` — UTF-8 encoding/decoding, emoji support

#### `Pointer`
`Pointer<T>` (raw), `Unique<T>` (single-owner RAII), `Shared<T>` (reference-counted)

#### `stream`
`Stream<T>` — non-owning view over a slice, iterator protocol

#### `io`
`FileReader`, `FileWriter`, `fs.hop` — file and filesystem operations

#### `json`
`JsonReader`, `JsonNode` — JSON parsing

#### `path`
`basename`, `dirname`, `join`, `isAbsolute`, `normalize`

#### `char`
Character classification and conversion

#### `concurrent`
`Channel<T>`, `Mutex`, `Future<T>` — threading primitives

#### `linux` (16 files)
Full Linux syscall coverage: `sys`, `io`, `fs`, `mem`, `net`, `msg`, `sem`, `shm`,
`thread`, `timer`, `random`, `tty`, `poll`, `io_uring`, `ptrace`, `shell`

#### `x86_64` (15 files)
CPU intrinsics: `cpuid`, `msr`, `paging`, `segmentation`, `gdt`, `idt`, `exceptions`,
`port`, `mmio`, `cache`, `tsc`, `performance`, `vmx`, `svm`

#### `sys`
Cross-platform syscall mirror of `linux/` for portable programs

#### `uart`
UART communication helpers

### Programs (`programs/`)
Battleship (3 versions), LED blink (bare-metal ARM), calculator, htop clone, JSON reader,
pgrep, sort demo, TUI demo, directory tree printer

**Design pattern programs** (`programs/observer/`, `programs/strategy/`, `programs/factory/`,
`programs/builder/`, `programs/iterator/`, `programs/raii/`, `programs/visitor/`,
`programs/command/`, `programs/state/`, `programs/pipeline/`, `programs/decorator/`) — 11
fully working programs, each with a corresponding test in `toolchain/tests/patterns/`

### Examples (`examples/`)
- `embedded/stm32f411/uart.hop` — 9 bitfield defs + 6 strict declarations for STM32F411
  USART peripherals; zero vendor SDK

### Bootstrap — Self-Hosting CLI
`bootstrap/src/` — 2,594 lines of Hopper that implement the `hopperc` CLI tool itself:
- `main.hop` (1,533 lines) — build system, module resolution, parallel compilation
- `lexer.hop` (712 lines) — Hopper lexer written in Hopper
- `token.hop` (349 lines) — token type definitions

### Website (`website/site/`)
- **Framework**: Vue 3 + Vite, Shiki syntax highlighting (custom TextMate grammar)
- **Routes**: `/` (Home), `/syntax`, `/programs`, `/examples`, `/docs`, `/about`, `/roadmap`, `/vs-c`, `/benchmark`
- **Home**: animated hero with typing → compiling → welcome phases; converging DAG tree
  SVG showing language features; orthogonal routing with rounded corners
- **Syntax page**: comprehensive language reference with live code examples, including
  Contracts section (`requires`, `ensures`, `invariant`, `constrain`) with compile-mode table
- **Docs page**: full language reference — types/operators tables, module system, memory
  model, hardware model, contracts, inline assembly; sidebar navigation
- **About page**: philosophy and design manifesto — Why Hopper Exists, What I Believe,
  Direction, Determinism, On Other Languages (orbit layout), Memento Mori, Final Principle
- **Roadmap page**: language status, design principles, language-at-a-glance, current
  progress (done / in-progress / planned)
- **VS Code extension**: syntax highlighting, bracket matching, installed via
  `npm run install:ext`

### Tests
594 assertions across all modules and toolchain groups, all passing. Every module has a
`tests/` subdirectory. CI-ready via `npm run test` or `npm run test -- <module>`.

---

## In Progress

### Bootstrap Self-Hosting
The Hopper CLI written in Hopper (`bootstrap/`) compiles via the JS backend today. The
goal is for `hopperc` to compile itself without touching Node.js.

- [x] Lexer written in Hopper
- [x] Token definitions in Hopper
- [x] CLI build tool written in Hopper
- [ ] Parser written in Hopper
- [ ] AST builder in Hopper
- [ ] LLVM IR emitter in Hopper
- [ ] First full self-hosted build

### `compiler/` — Alternate Frontend
A separate compiler front-end effort (`compiler/src/hcc.hop`, `compiler/modules/`) is
starting. AST nodes, walker, codegen stubs exist. Tracking the bootstrap path.

---

## To Do

Items are grouped by theme, not strict priority — pick what fits the current sprint.

### Language — Contracts & Correctness

- [x] **`requires` / `ensures` codegen** — emits LLVM assertions on function entry
  (preconditions) and before every return (postconditions). `ensures` binds `result` to
  the return value. Violations call `abort()`. Implemented in `kindling/src/codegenConstraints.js`.

- [x] **`constrain` types** — `int x = 42 constrain [byte]`; emits an in-range assertion
  on assignment (e.g. `-128 ≤ x ≤ 127` for `byte`). Violation calls `abort()`.

- [x] **`invariant` on loops** — `while (i < n) invariant i >= 0 { ... }`; emits an
  assertion at every loop-head evaluation before the condition test.

- [ ] **Constraint violation policy** — decide the default: `panic` at runtime, silent
  clamp, or propagate as `ErrorCode.OVERFLOW`? Document in DESIGN.md.

### Language — Ergonomics

- [ ] **Callback syntax tightening** — current form is verbose:
  `callback(int, int) bool cmp = ascending`. Brainstorm: can type inference reduce it to
  `callback cmp = ascending` when the target signature is unambiguous? Requires two-pass
  analysis — park as research item.

- [ ] **Import naming audit** — standardise module names used in `from` clauses.
  Current inconsistency: `import io from core` vs `import io from linux`. Define a
  canonical naming convention and update all `import` statements and `hopper.json` files
  accordingly.

- [ ] **Error propagation operator** — a `?`-style or `try` keyword that auto-unwraps
  `Result<T>` or returns the error to the caller. Reduces boilerplate in deeply nested
  call chains.

### Standard Library

- [ ] **`regex` module** — pattern matching (`modules/regex/` stub exists, no `src/`)
- [ ] **`cli` module** — argument parsing (`modules/cli/` stub + test exists, no `src/`)
- [ ] **`tui` module** — terminal UI widgets (`modules/tui/` stub exists, no `src/`)
- [ ] **`fs` module** — high-level filesystem (`modules/fs/` stub exists; `io/src/fs.hop`
  has low-level ops — promote and expand)
- [ ] **`ascii` module** — standalone ASCII utilities (currently inside `string`)
- [x] **`concurrent` module** — `Channel<T>`, `Mutex`, `Future<T>` implemented in
  `modules/concurrent/src/concurrent.hop` with `pthread_create` backend; 18 assertions
  passing across channel, mutex, and future tests
- [ ] **`json` module** — parser exists but is partial; add writer, prettifier, path
  queries (`.key[0].field`)
- [ ] **`io` module** — FileReader/FileWriter are partial; add buffered I/O, line
  iteration, `readAll`

### Programs & Design Patterns

Writing real Hopper programs validates that the language is expressive and elegant. Each
program below should compile, run correctly, and serve as a reference for that pattern.

- [x] **Observer pattern** — `Observable` class with `Array<address>` listeners, callback
  dispatch via `cast`
- [x] **Strategy pattern** — `callback` as strategy field, `Validator` swaps strategies at
  runtime
- [x] **Factory pattern** — `class ShapeFactory`, `enum ShapeKind`, dispatch on enum tag
- [x] **Builder pattern** — `RequestBuilder` with chained setters, `build()` returns
  `HttpRequest`
- [x] **Iterator protocol** — `interface Iterator`, `ArrayIter` and `RangeIter`
  implementations
- [x] **RAII resource wrapper** — `Buffer` class with `defer buf.release()` for guaranteed
  cleanup through early returns
- [x] **Visitor pattern** — `Shape.accept(address visitor)` dispatches via callback cast;
  visitors are plain functions
- [x] **Command pattern** — commands as `callback(address) int` functions; `CommandQueue`
  with undo/replay via `Array<address>`
- [x] **State machine** — `Machine` class with enum states; guarded transitions via `&&`
  conditions
- [x] **Pipeline** — `Pipeline` with `Array<address>` stages, `pipe()` / `run()` API
- [x] **Decorator** — `LogDecorator` (print on call) and `MemoDecorator` (single-entry
  cache) wrapping any `callback(int) int`

### Website

- [x] **Programs page content** — `/programs` shows all design pattern programs grouped
  by category (embedded, systems, patterns, algorithms) with descriptions and code snippets.
- [x] **Benchmark page** — `/benchmark` shows Hopper vs C head-to-head numbers (100k games,
  debug/production/C -O0/-O2) and contract system overhead (debug vs `--release`), with SVG
  bar charts and a disclaimer that results are illustrative, not language comparisons.
- [ ] **Examples page** — `/examples` is sparse. Add the STM32 UART example, Battleship
  game, and JSON reader with explanatory prose.
- [x] **Docs page** — full reference written: types/operators, module system, memory model,
  hardware model (`bind`, `strict`, `bitfield`), contracts, inline assembly
- [ ] **SVG tree on home page** — continue refining the converging DAG; consider adding
  labels or tooltips on hover to explain each node.
- [ ] **`/vs-c` page** — flesh out comparison table with concrete code side-by-sides.

### Toolchain

- [ ] **Split `codegenLLVM.js`** — 2,390 lines is too large to bootstrap. Natural boundaries:
  - `codegenTypes.js` — type helpers, llvmType, sizeOf, bitfield layout, field lookup
  - `codegenTemplates.js` — monomorphization, template instantiation, type substitution
  - `codegenExpr.js` — genExpr (lines 618–1300, ~680 lines)
  - `codegenStmt.js` — genStmt, genBlock, hoistAllocas (lines 1303–1921)
  - `codegenDecl.js` — genFunction, genMethod, genOperator, genEntry, genBind, genModule
  - `codegenLLVM.js` — thin orchestrator that imports and wires the above
- [ ] **`hopper debug` command** — stub exists; wire up DWARF generation and `lldb` launch
- [ ] **`hopper fmt` command** — formatter (`kindling/src/formatter.js`) exists; expose it
  as a CLI subcommand
- [ ] **`hopper profile` command** — stub; add `perf`/`gprof` integration
- [ ] **Error recovery in parser** — currently fails on first error; add synchronisation
  points so multiple errors are reported in one pass
- [ ] **LSP server** — language server protocol for editor integration beyond VS Code
  syntax highlighting (go-to-definition, hover types, inline errors)

### Bootstrap

- [ ] Write parser in Hopper (`bootstrap/src/parser.hop`)
- [ ] Write AST builder in Hopper (`bootstrap/src/ast.hop`)
- [ ] Write LLVM IR emitter in Hopper (`bootstrap/src/codegen.hop`)
- [ ] First self-hosted compile: `./hopperc build bootstrap/src/main.hop -o hopperc2`
  produces a binary that compiles itself
- [ ] Remove Node.js dependency from the core compiler path
- [ ] Custom bytecode VM (post-self-hosting, long term)
- [ ] JIT compilation layer (long term)

---

## Long-Term Vision

1. **Self-hosted compiler** — Hopper compiles Hopper with no Node.js dependency
2. **Package registry** — `hopper.json` descriptor format is defined; build a registry
   and `hopper add <pkg>` workflow
3. **Custom bytecode** — replace LLVM IR as the intermediate representation for faster
   iteration and a smaller toolchain binary
4. **JIT layer** — hot-path compilation in long-running programs
5. **Zero-dependency toolchain** — compiler, formatter, package manager, debugger all
   written in Hopper and distributed as a single binary
