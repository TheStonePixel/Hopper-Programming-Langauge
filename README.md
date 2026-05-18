# Hopper

> Donations fund velocity, not direction.<br>
> Direction is non-negotiable.<br>
> Velocity is for sale.<br>
> Vision is not.

---

Hopper is a strongly typed, bare-metal systems language that compiles to LLVM IR.

---

## Join Us in Refining Systems Programming

Hopper doesn't try to reinvent the wheel with unproven, overly academic concepts. Instead, it takes the best, battle-tested syntax conventions available, strips away the compiler bloat, and aligns them perfectly with systems development.

We didn't create anything fundamentally new — we simply refined what already works. Hopper elevates familiar syntax so that a single, cohesive language can describe raw hardware layout, manage complex templates, and drive high-performance software with absolute clarity.

If you believe that systems programming doesn't need to be esoteric to be powerful, and you want to work with a language that focuses on perfecting the fundamentals, we invite you to help build the Hopper ecosystem.

### Where We Are Building Next

- **Fleshing out the Core Libraries:** We are applying Hopper's refined memory model to standard system utilities — expanding our data structures (`ds`) and building ultra-fast streaming modules (like our JSON and upcoming CSV parsers).
- **Expanding OS and Hardware Profiles:** Hopper bridges the gap between freestanding bare-metal (ARM Cortex-M, RISC-V) and hosted environments (Linux syscall architectures). Help us map and optimize these system targets.
- **Strengthening the Toolchain:** With over 409 tests currently ensuring stability, we are continuously expanding our test suites and polishing the CLI experience to ensure that as the language grows, the toolchain stays simple.

### Get Started

Every part of Hopper is designed to be straightforward, predictable, and immediately familiar. You can set up a project and run the test suite in seconds:

```bash
hopper init my_project
cd my_project
hopper test
```

If you want to contribute to an engineering ecosystem that values elegance, predictability, and honest performance across the entire systems stack, join us in building Hopper.

---

## The Thesis

**The toolchain is complicated because the language failed. Fix the language, and the toolchain becomes simple.**

Every bare-metal C project ships with a linker script, a startup file, a Makefile, and a handful of `#pragma` hacks. That complexity isn't accidental — it's the bill that comes due for every design decision C couldn't make cleanly. Decades of duct tape on top of duct tape.

C has no way to describe hardware, so you need a linker script. C has no entry point concept, so you need a startup file. C has no first-class hardware access story, so you get `volatile` buried in a type declaration and `__attribute__((section(...)))` buried in a pragma. Bitfields require a union of structs and a page of macros just to toggle a single bit.

Hopper's answer is to make those things part of the language itself — not flags, not instructions to the toolchain, just code that describes what exists:

```hopper
// interrupt vector table — burned into flash
bind 0x00000004 = reset::address
bind 0x0000003c = timer::address

// hardware registers — volatile by definition
bitfield UartCR1 {
    pad 3
    bit te          // bit 3: transmitter enable
    bit re          // bit 4: receiver enable
    pad 8
    bit ue          // bit 13: USART enable
    pad 18
}

strict UartCR1 uart_cr1 = 0x40013800

entry main {
    uart_cr1.ue = 1     // volatile load → set bit 13 → volatile store
    uart_cr1.te = 1
    uart_cr1.re = 1
}
```

No linker script. No startup assembly. No CMSIS headers. No volatile casts. It's all code.

---

## Design Principles

**No global variables.** Program-lifetime state lives in a class on the stack. The only exceptions are `bind` (linker-time, zero RAM cost) and `strict` (a name for a hardware address, not a variable).

**No operating system required.** Hopper is designed for freestanding, bare-metal execution. An OS can run on top of Hopper — it is not a dependency of it.

**The language and the linker speak the same language.** `bind`, `strict`, and `entry` are not directives to an external tool. They are declarations in the same language as the rest of your program.

**It's all code, not instructions.** You don't tell the toolchain how to operate. You describe what exists, and the toolchain figures out the rest.

**Lowercase is primitive, uppercase is object.** `int`, `byte`, `float`, `bool`, `bit`, `string`, `address` are machine primitives. `Int`, `String`, `Array<T>` are managed objects. The naming convention makes the cost visible.

---

## Language Features

### Types

| Type | Width | Notes |
|------|-------|-------|
| `int` | 64-bit signed | General-purpose integer |
| `unsigned int` | 64-bit unsigned | |
| `byte` | 8-bit unsigned | Memory, I/O, protocol buffers |
| `unsigned byte` | 8-bit unsigned | Alias for byte |
| `float` | 64-bit | IEEE 754 double |
| `bool` | 1-bit logical | `true` / `false` |
| `bit` | 1-bit | Used in bitfields; same concept as `string` is to `i8*` |
| `string` | raw `i8*` | C-compatible pointer to character data |
| `address` | raw pointer | Untyped machine address |

```hopper
int    x   = 42
float  pi  = 3.14
byte   b   = 0xFF
bool   ok  = true
string msg = "hello"
```

### Structs

Memory-layout-only aggregates. `pad N` skips N bytes for alignment or reserved fields.

```hopper
struct PacketHeader {
    int  version
    pad  4          // reserved, skip 4 bytes
    int  length
    byte checksum
}
```

### Classes

Full objects with fields, methods, operator overloading, constructor, and destructor.

```hopper
class Counter {
    int value

    constructor() {
        self.value = 0
    }

    function increment() int {
        self.value = self.value + 1
        return self.value
    }

    operator ==(Counter other) bool {
        return self.value == other.value
    }
}
```

### Templates

Monomorphized generics. Free type parameters use `<T>` at the use site. Fixed-type parameters lock the concrete type at declaration — no `<>` at the use site.

```hopper
// free parameter — caller specifies T
template Box<T> {
    T value
    constructor(T v) { self.value = v }
}

Box<int>   n = Box<int>(42)
Box<float> f = Box<float>(3.14)

// fixed parameter — always byte, no <> at use site
template String<byte> {
    byte value
    // ...
}

String name    // not String<byte> name
```

### Bitfields

Bit-packed structures where fields are laid out sequentially from the LSB. Any primitive type can be a field. `bit name[N]` is an N-bit field — no special cases, same array syntax as `int arr[5]`. `pad N` skips N bits.

```hopper
bitfield StatusReg {
    bit  ready          // bit 0: single bit
    bit  error          // bit 1
    bit  mode[2]        // bits 2–3: two-bit field
    byte data           // bits 4–11: full byte
}

StatusReg reg
reg.ready = 1
reg.mode  = 3
reg.data  = 255
```

The container type (i8/i16/i32/i64) is chosen automatically from total bit count.

### Strict Bitfields — Hardware Register Access

`strict` attaches a bitfield (or any type) to a fixed hardware address. All reads and writes are automatically volatile — no macros, no casts, no manual shift/mask.

```hopper
bitfield GpioModer {
    bit mode0[2]
    bit mode1[2]
    bit mode2[2]
    bit mode3[2]
    bit mode4[2]
    bit mode5[2]    // PA5 — LED on Nucleo boards
    bit mode6[2]
    bit mode7[2]
    pad 16
}

strict GpioModer gpioa = 0x48000000

gpioa.mode5 = 1   // set PA5 to output: volatile load → clear → set → volatile store
```

This replaces entire CMSIS/HAL register macro ecosystems with readable, type-safe declarations.

### Memory Model

Hopper exposes the machine's address space directly with `::` operators:

```hopper
int n = 99
address ptr = n::address    // take address of n

ptr::value = 42             // write through pointer (modifies n)
int copy = ptr::value       // read through pointer

int sz = n::size            // byte size of the variable (8 for int)

// pointer arithmetic — automatically scaled to element size
address next = ptr + 1

// array element address
address elem = arr[2]::address
```

`null` is a valid literal for address types:

```hopper
address p = null
if (p == null) { ... }
```

### Control Flow

```hopper
if (x > 0) {
    // ...
} else {
    // ...
}

while (i < n) {
    i = i + 1
}

for (int i = 0; i < 10; i = i + 1) {
    // ...
}

break
continue
return value
defer cleanup()    // executes before function exit
```

### Arithmetic, Bitwise, and Logic

Full operator set with standard precedence:

```hopper
int a = (x + y) * z
int b = flags & 0xFF
int c = val | 0x80
int d = reg ^ mask
int e = bits << 3
int f = bits >> 1
int g = ~mask
bool h = (a == b) && (c != d)
float r = cast x          // context-inferred cast (int→float or float→int)
```

### Functions and Extern

```hopper
function add(int a, int b) int {
    return a + b
}

function log(string msg) {
    // procedure — no return type
}

extern function printf(string fmt, ...) int    // variadic C functions
```

### Entry, Bind, and Strict

Three keywords that replace the linker script, startup assembly, and volatile macro patterns:

```hopper
// entry — the unambiguous program entry point
entry main {
    // ...
}

// with arguments (OS or loader passes argc/argv)
entry main(int argc, string[] argv) {
    // ...
}

// address form — entry point is an existing function
entry main = startup::address

// bind — place a function pointer at a hardware address (interrupt vector table)
bind 0x00000004 = reset::address
bind 0x0000003c = timer::address

// strict — name a memory-mapped hardware address
strict int uart_dr = 0x40021000
strict int uart_sr = 0x40021004
```

### Inline Assembly

Direct register-level control inside a function body:

```hopper
function write(int fd, string buf, int len) {
    asm {
        rax = 1       // syscall: write
        rdi = fd
        rsi = buf
        rdx = len
        syscall
    }
}
```

### Import System

```hopper
import io from linux        // io module from the linux stdlib
import io, fs, sys from linux
import MyLib                // standalone module
```

### Compile-Time Contracts *(reserved — not yet implemented)*

Grammar is in place; semantics are planned for a future release.

```hopper
function divide(int a, int b) int
    requires b != 0
    ensures result * b == a
{
    return a / b
}

while (i < n) invariant i >= 0 {
    // ...
}

int x = input constrain [byte]    // compiler checks x fits in a byte
```

---

## Standard Library

### `modules/linux`

Pure syscall wrappers — no libc, no glibc dependency.

```hopper
import io, fs, sys from linux

print("hello\n", 6)               // write to stdout
error("failed\n", 7)              // write to stderr
int n = read(0, buf, 256)         // read from stdin

int fd = open("data.bin", O_RDONLY, 0)
int n  = read(fd, buf, 1024)
close(fd)

exit(0)
fork()
execve("/bin/sh", argv, envp)
waitpid(pid, status::address, 0)
```

File open flags: `O_RDONLY`, `O_WRONLY`, `O_RDWR`, `O_CREAT`, `O_TRUNC`, `O_APPEND`

### `modules/ds`

#### Heap — Bump Allocator

Bring-your-own-buffer allocator designed for embedded and constrained environments. No per-block overhead, no fragmentation. Reset clears all allocations at once.

```hopper
import Heap from ds

byte buf[4096]
Heap h = Heap(buf::address, 4096)

address ptr = h.alloc(64)         // returns null if out of space
int left    = h.remaining()
h.reset()                         // free everything
```

### `modules/llvm`

Full LLVM C API bindings — used by the Hopper compiler itself to emit IR. Covers module/context lifecycle, type construction, IR builder, and verification.

---

## A Complete Example

A bare-metal UART boot sequence on ARM Cortex-M, written entirely in Hopper:

```hopper
// interrupt vector table
bind 0x00000004 = reset::address
bind 0x00000008 = nmi::address
bind 0x0000000c = hardfault::address

// UART control register — STM32F4
bitfield UartCR1 {
    pad 3
    bit te      // bit 3: transmitter enable
    bit re      // bit 4: receiver enable
    pad 8
    bit ue      // bit 13: USART enable
    pad 18
}

// GPIO mode register — GPIOA
bitfield GpioModer {
    bit mode0[2]
    bit mode1[2]
    bit mode2[2]
    bit mode3[2]
    bit mode4[2]
    bit mode5[2]
    bit mode6[2]
    bit mode7[2]
    pad 16
}

strict UartCR1   uart_cr1 = 0x40013800
strict int       uart_dr  = 0x40013804
strict GpioModer gpioa    = 0x48000000

function uart_send(byte c) {
    uart_dr = c
}

function reset() {
    uart_cr1.ue = 1
    uart_cr1.te = 1
    uart_cr1.re = 1
    gpioa.mode5 = 1    // PA5 → output (LED)
    uart_send(65)      // 'A'
}

function nmi()       { }
function hardfault() { }

entry main = reset::address
```

No linker script. No CMSIS. No startup file. The hardware layout is the program.

---

## Roadmap

### Now — Language Core *(complete)*
- Full type system: `int`, `byte`, `float`, `bool`, `bit`, `string`, `address`, `unsigned` variants
- Structs with `pad`, classes with methods and operators, monomorphized templates
- Bitfields — bit-packed structures with shift/mask codegen
- `strict` bitfields — volatile hardware register access with automatic shift/mask
- `entry`, `bind`, `strict` — program structure without toolchain directives
- Memory model — `::address`, `::value`, `::size`, pointer arithmetic
- Inline assembly
- Full expression system including `cast`, bitwise, logical operators
- Import system
- Linux syscall stdlib (`io`, `fs`, `sys`)
- Bump allocator (`Heap`)
- LLVM IR backend
- 26 passing tests

### Next — Data Structures
- `Array<T>` — growable heap-allocated array
- `String` — managed string via `template String<byte>`
- `Stack<T>`, `Queue<T>`, `LinkedList<T>`, `Deque<T>`
- `HashMap<K,V>`, `Set<T>`
- `MinHeap<T>`, `MaxHeap<T>`
- `Ring<T>` — fixed-capacity circular buffer for interrupt/I/O use
- `BitVec` — packed bit array

### Then — Toolchain
- Build tool — one command from `.hop` to ELF
- Linker script generator from `bind` declarations
- Startup file written in Hopper
- ARM Cortex-M and RISC-V targets

### Goal
Write an Arduino program in Hopper. One command. No C toolchain. No header files.

---

## Status

Version 0.1 — prototype. Syntax and APIs will change. Nothing is stable yet.

The compiler frontend parses a full ANTLR4 grammar and generates LLVM IR. A complete bare-metal toolchain is the target.
