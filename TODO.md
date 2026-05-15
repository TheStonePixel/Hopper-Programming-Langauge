# Hopper — Roadmap to ARM Cortex-M

**Goal: Three real deliverables running on ARM Cortex-M hardware by end of 2026.**

1. **Bootloader** — UART firmware loader written entirely in Hopper. No C, no CMSIS, no HAL.
2. **Sensor Stack** — I2C/SPI peripheral drivers as Hopper bitfield declarations. No vendor SDK.
3. **USB CDC** — board enumerates as a serial port on any host. No driver install.

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

## Phase 5 — Deliverable 1: Bootloader (November)

A UART bootloader written entirely in Hopper. Receives new firmware over serial,
writes it to flash, verifies it, and boots it. The first real Hopper program that
runs on hardware and does something that matters.

This is the self-referential proof: Hopper writes the tool that programs Hopper.

### Register Maps Required
- [ ] `targets/stm32f4/rcc.hop` — clock enable registers (needed before anything runs)
- [ ] `targets/stm32f4/gpio.hop` — GPIO mode/speed/pupdr/ODR registers
- [ ] `targets/stm32f4/uart.hop` — UART CR1/CR2/SR/DR registers
- [ ] `targets/stm32f4/flash.hop` — flash control/status/key registers

### Bootloader Implementation (`bootloader/main.hop`)
- [ ] Clock init — enable HSI, set PLL, switch sysclk via `rcc` bitfields
- [ ] GPIO init — PA2/PA3 to UART alternate function via `gpio` bitfields
- [ ] UART init — baud rate, enable TX/RX via `uart` bitfields
- [ ] Receive firmware over UART — XMODEM or raw length-prefixed binary
- [ ] Write received bytes to application flash region
- [ ] CRC32 verification of received firmware
- [ ] Boot application — set stack pointer, jump to application reset vector
- [ ] Fallback — if no firmware received within timeout, boot existing application
- [ ] Written with `bind` vector table, `strict` registers, `entry main`
- [ ] No C, no CMSIS, no HAL, no linker script written by hand

---

## Phase 6 — Deliverable 2: Sensor Stack (November – December)

A complete I2C and SPI peripheral driver written as Hopper bitfield declarations,
paired with a real sensor application. This is the proof that Hopper replaces
vendor SDKs — the entire driver is readable hardware documentation.

### Register Maps Required
- [ ] `targets/stm32f4/i2c.hop` — I2C CR1/CR2/SR1/SR2/DR registers
- [ ] `targets/stm32f4/spi.hop` — SPI CR1/CR2/SR/DR registers
- [ ] `targets/sensors/bme280.hop` — BME280 register map (temp/humidity/pressure)
- [ ] `targets/sensors/mpu6050.hop` — MPU6050 register map (accel/gyro)

### Driver Implementation
- [ ] `drivers/i2c.hop` — init, start, stop, write byte, read byte, read burst
- [ ] `drivers/spi.hop` — init, select/deselect, transfer byte, transfer burst
- [ ] `drivers/bme280.hop` — init, read raw, apply compensation formula, return struct
- [ ] `drivers/mpu6050.hop` — init, read raw accel/gyro, scale to physical units

### Application (`sensor_app/main.hop`)
- [ ] Read BME280 every second — temperature, humidity, pressure
- [ ] Read MPU6050 at 100Hz — accelerometer and gyroscope
- [ ] Format readings as structured output over UART
- [ ] Use `String` and `Array<T>` from stdlib for output formatting
- [ ] No vendor library anywhere in the call stack

---

## Phase 7 — Deliverable 3: USB CDC Device (December)

A USB CDC (Communications Device Class) implementation — the board appears as a
serial port on any host computer with no driver install required.
Most complex of the three but the most impressive: plug in a Hopper device,
it shows up as `/dev/ttyACM0` with no setup.

### Register Maps Required
- [ ] `targets/stm32f4/usb.hop` — USB OTG FS core and device registers
- [ ] `targets/stm32f4/usb_ep.hop` — endpoint control/status registers

### Protocol Stack (`usb/`)
- [ ] `usb/descriptors.hop` — device, configuration, interface, endpoint descriptors as structs
- [ ] `usb/ep0.hop` — control endpoint handler, standard device requests
- [ ] `usb/cdc.hop` — CDC class requests, line coding, serial state
- [ ] `usb/bulk.hop` — bulk IN/OUT endpoint handlers
- [ ] `usb/core.hop` — interrupt handler, endpoint dispatch, reset handling

### Application
- [ ] Board enumerates as USB serial device on Linux, macOS, Windows
- [ ] Data received over USB forwarded to UART and vice versa (USB↔UART bridge)
- [ ] Or: expose sensor data from Phase 6 over USB serial

---

## Stretch Goals

- [ ] `hopfmt` — source formatter
- [ ] `hoplsp` — language server for IDE support
- [ ] RP2040 (Raspberry Pi Pico) target — different enough to prove portability
- [ ] AVR target (Arduino Uno) — very different architecture, longer stretch

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
| Bootloader | Not started |
| Sensor stack (I2C/SPI + BME280/MPU6050) | Not started |
| USB CDC device | Not started |
| Hardware register maps | Not started |
