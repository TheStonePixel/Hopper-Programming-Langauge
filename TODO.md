# Hopper — Roadmap to ARM Cortex-M

**Goal: Run a Hopper program on ARM Cortex-M hardware by end of 2026.**

The path: standard libraries → frontend compiler in Hopper → LLVM wrapper in Hopper → ARM target + build tool → bare metal.

---

## Phase 1 — Standard Library (May – June)

The language is done. Now it needs libraries. Everything above this is blocked until Array and String exist.

### Data Structures (`modules/ds/`)

- [ ] `Array<T>` — growable heap array, push/pop/get/set/len, doubles on overflow
- [ ] `String` — managed string via `template String<byte>`, built on `Array<byte>`
  - [ ] `append`, `length`, `at`, `equals`, `slice`, `from_cstr`, `to_cstr`
- [ ] `Stack<T>` — LIFO wrapper around `Array<T>`
- [ ] `Queue<T>` — FIFO ring buffer, fixed or growable
- [ ] `LinkedList<T>` — singly linked, O(1) prepend
- [ ] `Deque<T>` — double-ended ring buffer
- [ ] `HashMap<K,V>` — open-addressing hash table
- [ ] `Set<T>` — unique elements, backed by `HashMap`
- [ ] `MinHeap<T>` — binary min-heap, array-backed
- [ ] `MaxHeap<T>` — binary max-heap, array-backed
- [ ] `Ring<T>` — fixed-capacity circular buffer, no heap alloc (safe in interrupt context)
- [ ] `BitVec` — packed bit array, N bools in N/8 bytes (built on `Array<byte>`)
- [ ] `Pool<T>` — fixed-size object pool, zero-fragmentation for embedded

### Linux Module (`modules/linux/`)

Existing: `io.hop`, `fs.hop`, `sys.hop`

- [ ] `net.hop` — socket, bind, listen, accept, connect, send, recv
- [ ] `mem.hop` — mmap, munmap, mprotect (for custom allocators)
- [ ] `thread.hop` — clone, futex, basic mutex/semaphore via syscalls

---

## Phase 2 — Frontend Compiler in Hopper (July – August)

The current compiler is JavaScript. The goal is a self-hosted compiler written in Hopper.
This requires `String`, `Array<T>`, and `HashMap` from Phase 1.

### Lexer (`compiler/lexer.hop`)
- [ ] Token types as const declarations
- [ ] Character scanning via `read` syscall or buffer
- [ ] Keyword recognition using `HashMap<String, int>`
- [ ] Identifier, integer, hex, float, string literal scanning
- [ ] Line/column tracking for error messages

### Parser (`compiler/parser.hop`)
- [ ] Recursive descent — mirrors the ANTLR grammar
- [ ] Top-level declarations: `function`, `struct`, `class`, `template`, `const`, `alias`, `import`, `entry`, `bind`, `strict`, `bitfield`
- [ ] Expression parsing with correct precedence (match `Hopper.g4`)
- [ ] Statement parsing: assignments, declarations, control flow, `asm`, `defer`
- [ ] Error recovery — report and continue, don't crash on first error

### AST (`compiler/ast.hop`)
- [ ] Node types as class hierarchy or tagged union
- [ ] Visitor interface for passes

### Semantic Analysis (`compiler/sema.hop`)
- [ ] Type checking — assignment compatibility, return types, function call signatures
- [ ] Scope resolution — variable, function, type lookups
- [ ] Bitfield layout validation — total bits must fit container
- [ ] Template monomorphization
- [ ] `requires`/`ensures` clause stubs (parse but don't enforce yet)

### Error Reporting (`compiler/errors.hop`)
- [ ] Source location tracking (file, line, column)
- [ ] Formatted error messages to stderr
- [ ] Warning vs error distinction

---

## Phase 3 — LLVM Wrapper in Hopper (August – September)

The LLVM C API bindings exist in `modules/llvm/llvm.hop`. The goal is a Hopper-native
codegen layer on top of them — so the compiler can emit LLVM IR from within Hopper itself.

### Type System (`modules/llvm/types.hop`)
- [ ] Wrap LLVM type constructors: `i1`, `i8`, `i16`, `i32`, `i64`, `double`, `ptr`
- [ ] Struct type builder
- [ ] Function type builder
- [ ] Array type builder

### IR Builder (`modules/llvm/builder.hop`)
- [ ] Arithmetic: add, sub, mul, div, rem (int and float variants)
- [ ] Bitwise: and, or, xor, shl, lshr
- [ ] Comparison: icmp, fcmp
- [ ] Memory: alloca, load, store, load volatile, store volatile
- [ ] GEP — struct field and array element addressing
- [ ] Cast: trunc, zext, sext, fptoui, fptosi, sitofp, uitofp, bitcast
- [ ] Control flow: br (conditional and unconditional), ret, phi
- [ ] Calls: regular and tail

### Module & Pass (`modules/llvm/module.hop`, `modules/llvm/pass.hop`)
- [ ] Module creation, function/global declaration
- [ ] Basic block management
- [ ] Verify module
- [ ] Print IR to string / write bitcode to file
- [ ] Target machine setup (x86-64 and ARM)

---

## Phase 4 — ARM Cortex-M Target (October – November)

Everything above runs on x86-64 Linux. This phase makes it run on hardware.

### ARM Target in LLVM
- [ ] Add `--target arm` / `--target thumb` flag to build tool
- [ ] Triple: `thumbv7em-none-eabi` (Cortex-M4/M7), `thumbv6m-none-eabi` (Cortex-M0)
- [ ] Verify IR output compiles cleanly with `llc --march=thumb`
- [ ] ABI: AAPCS calling convention, register allocation

### Linker Script Generator
- [ ] Walk `bind` declarations from AST
- [ ] Emit GNU ld linker script placing vector table at `0x00000000`
- [ ] Flash section at correct base address (chip-specific)
- [ ] RAM section with stack pointer initialization
- [ ] Validate: all `bind` addresses fall within flash range

### Startup File in Hopper
- [ ] Stack pointer initialization (from `bind 0x00000000`)
- [ ] BSS zero-fill
- [ ] Data section copy (flash → RAM)
- [ ] Jump to `entry main`
- [ ] Written entirely in Hopper with inline `asm` where needed

### Build Tool (`hopbuild`)
- [ ] CLI: `hopbuild main.hop --target stm32f4 --out main.elf`
- [ ] Chains: `.hop` → LLVM IR → `llc` → `.o` → `ld` → ELF
- [ ] Reads `bind` declarations to determine flash/RAM layout
- [ ] Generates linker script automatically
- [ ] Flash tool integration: `hopbuild flash --port /dev/ttyACM0`

### Hardware Register Maps
- [ ] `targets/stm32f4/uart.hop` — UART bitfield declarations
- [ ] `targets/stm32f4/gpio.hop` — GPIO bitfield declarations
- [ ] `targets/stm32f4/rcc.hop` — clock control register declarations
- [ ] `targets/rp2040/` — RP2040 register maps
- [ ] These replace vendor SDKs entirely — pure Hopper bitfield declarations

---

## Phase 5 — Validation (December)

- [ ] Blink an LED on a Nucleo board (STM32F4) with `hopbuild`
- [ ] UART echo program — receive a byte, send it back
- [ ] No C toolchain, no vendor SDK, no linker script written by hand
- [ ] Document the full workflow: install Hopper → write code → flash board

---

## Stretch Goals (if time allows)

- [ ] `hopfmt` — source formatter
- [ ] `hoplsp` — language server for IDE support
- [ ] RP2040 (Raspberry Pi Pico) target
- [ ] AVR target (Arduino Uno) — very different architecture, stretch

---

## Current Status

| Area | Status |
|------|--------|
| Grammar (Hopper.g4) | Complete |
| JS compiler (kindling) | Complete — 26/26 tests passing |
| Linux stdlib (io, fs, sys) | Complete |
| Heap allocator | Complete |
| LLVM bindings | Extern declarations done |
| Data structures | Not started |
| Linux net/mem/thread | Not started |
| Frontend compiler in Hopper | Not started |
| LLVM wrapper in Hopper | Not started |
| ARM target | Not started |
| Build tool | Not started |
| Hardware register maps | Not started |
