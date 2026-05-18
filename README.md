# Hopper

> Donations fund velocity, not direction.<br>
> Direction is non-negotiable.<br>
> Velocity is for sale.<br>
> Vision is not.

---

Hopper is a clean, strongly typed systems language designed for hardware-level programming. It compiles to LLVM IR and targets bare-metal first.

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

A hardware-level language should be able to describe hardware directly. The entry point, the interrupt vector table, the memory-mapped registers — these are part of the program, not instructions handed to an external tool. Hopper treats them as first-class declarations:

```hopper
// interrupt vector table — burned into flash
bind 0x00000004 = reset::address
bind 0x0000003c = timer::address

// hardware register — volatile by definition
bitfield UartCR1 {
    pad 3
    bit te      // bit 3: transmitter enable
    bit re      // bit 4: receiver enable
    pad 8
    bit ue      // bit 13: USART enable
    pad 18
}

strict UartCR1 uart_cr1 = 0x40013800

entry main {
    uart_cr1.ue = 1     // volatile load → set bit 13 → volatile store
    uart_cr1.te = 1
    uart_cr1.re = 1
}
```

No linker script. No startup assembly. No header files. It's all code.

---

## Design Principles

**No global variables.** Program-lifetime state lives in a class on the stack. The only exceptions are `bind` (linker-time, zero RAM cost) and `strict` (a name for a hardware address, not a variable).

**No operating system required.** Hopper is designed for freestanding, bare-metal execution. An OS can run on top of Hopper — it is not a dependency of it.

**The language and the linker speak the same language.** `bind`, `strict`, and `entry` are not directives to an external tool. They are declarations in the same language as the rest of your program.

**It's all code, not instructions.** Describe what exists. The toolchain figures out the rest.

**Lowercase is primitive, uppercase is object.** `int`, `byte`, `float`, `bool`, `bit`, `string`, `address` are machine primitives. `String`, `Array<T>`, `HashMap<K,V>` are managed objects. The naming convention makes the cost visible at a glance.

---

## Language

### Types

| Type | Width | Notes |
|------|-------|-------|
| `int` | 64-bit signed | General-purpose integer |
| `unsigned int` | 64-bit unsigned | |
| `byte` | 8-bit | Memory, I/O, protocol buffers |
| `char` | 8-bit | Character data |
| `float` | 64-bit | IEEE 754 double |
| `bool` | logical | `true` / `false` |
| `bit` | 1-bit | Used inside bitfields |
| `string` | raw `i8*` | C-compatible string literal pointer |
| `address` | untyped pointer | Raw machine address |

```hopper
int    x   = 42
float  pi  = 3.14
byte   b   = 0xFF
bool   ok  = true
string msg = "hello"
address p  = null
```

### Structs

Memory-layout aggregates. `pad N` skips N bytes for alignment or reserved fields.

```hopper
struct PacketHeader {
    int  version
    pad  4
    int  length
    byte checksum
}
```

### Classes

Fields, methods, operator overloading, constructor, and destructor.

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

    destructor() { }
}
```

### Templates

Monomorphized generics — no runtime overhead. Free type parameters use `<T>` at the call site. Fixed-type parameters lock the type at declaration.

```hopper
// free parameter — caller specifies T
template Box<T> {
    T value
    constructor(T v) { self.value = v }
    function get() T { return self.value }
}

Box<int>   n = Box<int>(42)
Box<float> f = Box<float>(3.14)

// fixed parameter — concrete type baked in, no <> at use site
template String<byte> {
    byte value
    // ...
}

String name
```

### Bitfields

Bit-packed structures laid out from the LSB. `bit field[N]` is an N-bit field. `pad N` skips N bits. The container type (i8/i16/i32/i64) is selected automatically.

```hopper
bitfield StatusReg {
    bit  ready          // bit 0
    bit  error          // bit 1
    bit  mode[2]        // bits 2–3: two-bit field
    byte data           // bits 4–11
}

StatusReg reg
reg.ready = 1
reg.mode  = 3
```

### Hardware Register Access

`strict` binds a type to a fixed hardware address. All reads and writes are automatically volatile — no casts, no manual shift/mask.

```hopper
bitfield GpioModer {
    bit mode0[2]
    bit mode1[2]
    bit mode2[2]
    bit mode3[2]
    bit mode4[2]
    bit mode5[2]    // PA5
    bit mode6[2]
    bit mode7[2]
    pad 16
}

strict GpioModer gpioa = 0x48000000

gpioa.mode5 = 1   // volatile load → clear bits 10–11 → set → volatile store
```

### Memory Model

```hopper
int    n   = 99
address ptr = n::address    // take address
int    sz  = n::size        // byte size of variable (8 for int)

ptr::value = 42             // write through pointer
int copy = ptr::value       // read through pointer

address next = ptr + 1      // pointer arithmetic

address elem = arr[2]::address
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

defer cleanup()     // executes before function exit
```

### Functions and Extern

```hopper
function add(int a, int b) int {
    return a + b
}

extern function printf(string fmt, ...) int
```

### Entry, Bind, Strict

```hopper
entry main { }                          // bare program entry
entry main(int argc, string[] argv) { } // with arguments
entry main = startup::address           // bind to existing function

bind 0x00000004 = reset::address        // interrupt vector slot
bind 0x0000003c = timer::address

strict int uart_dr = 0x40013804         // memory-mapped register
```

### Inline Assembly

```hopper
function write(int fd, string buf, int len) {
    asm {
        rax = 1
        rdi = fd
        rsi = buf
        rdx = len
        syscall
    }
}
```

### Enums

```hopper
enum Direction {
    NORTH = 0
    SOUTH = 1
    EAST  = 2
    WEST  = 3
}
```

### Interfaces

Compile-time contracts on classes.

```hopper
interface IString {
    function length() int
    function get(int index) byte
    function isEmpty() bool
}

class MyString implements IString {
    // must implement all three methods
}
```

### Imports

```hopper
import io from linux
import io, fs, sys from linux
import array from ds
```

### Contracts *(reserved — not yet implemented)*

```hopper
function divide(int a, int b) int
    requires b != 0
    ensures result * b == a
{
    return a / b
}

int x = input constrain [byte]
```

---

## Standard Library

### `linux` — Syscall Wrappers

Direct kernel interface. No libc.

```hopper
import io, fs, sys from linux

int fd = open("data.bin", O_RDONLY, 0)
int n  = read(fd, buf, 1024)
close(fd)
exit(0)
```

Submodules: `io`, `fs`, `sys`, `mem`, `thread`, `net`, `timer`, `random`, `msg`, `sem`, `shm`, `poll`, `tty`, `ptrace`, `io_uring`

File flags: `O_RDONLY`, `O_WRONLY`, `O_RDWR`, `O_CREAT`, `O_TRUNC`, `O_APPEND`, `O_NONBLOCK`, `O_CLOEXEC`

### `io` — High-Level I/O

```hopper
import io from io

print("hello")
println("world")
newline()

int n = readLine(buf, 256)
int v = parseInt(buf, n)

FileReader r = FileReader(path)
FileWriter w = FileWriter(path)
```

### `core` — Target-Neutral Output

```hopper
import io from core

print("msg")
println("msg")
eprint("err")
printInt(42)
```

### `ds` — Data Structures

All containers are monomorphized templates.

```hopper
import array, stack, queue, hashmap from ds

Array<int>      arr  = Array<int>(16)
Stack<address>  stk  = Stack<address>(8)
Queue<int>      q    = Queue<int>(8)
HashMap<int,int> map = HashMap<int,int>(32)
```

| Container | Methods |
|-----------|---------|
| `Array<T>` | `get`, `set`, `push`, `pop`, `len`, `cap`, `indexOf`, `contains`, `remove`, `insert` |
| `Stack<T>` | `push`, `pop`, `peek`, `len`, `empty` |
| `Queue<T>` | `enqueue`, `dequeue`, `front`, `back`, `len`, `empty` |
| `Deque<T>` | `pushFront`, `pushBack`, `popFront`, `popBack`, `front`, `back` |
| `LinkedList<T>` | `prepend`, `append`, `removeFirst`, `removeLast`, `get` |
| `DoublyLinkedList<T>` | `prepend`, `append`, `remove`, `get` |
| `HashMap<K,V>` | `get`, `set`, `remove`, `contains`, `len`, `cap` |
| `Set<T>` | `add`, `remove`, `contains`, `len` |
| `MinHeap<T>` | `insert`, `extractMin`, `peek`, `len` |
| `MaxHeap<T>` | `insert`, `extractMax`, `peek`, `len` |
| `BST<T>` | `insert`, `contains`, `remove` |
| `Trie` | `insert`, `contains`, `startsWith` |
| `Graph` | `addEdge`, `bfs`, `dfs` |
| `StringBuilder` | `append`, `appendLiteral`, `toString` |

#### `Heap` — Bump Allocator

```hopper
import Heap from ds

byte buf[4096]
Heap h = Heap(buf::address, 4096)

address ptr = h.alloc(64)
int     rem = h.remaining()
h.reset()
```

### `stream` — Stream Views

Non-owning view over contiguous data.

```hopper
import stream from stream

Stream<byte> s = Stream<byte>(data, len)
byte b = s.peek()
s.advance()
int left = s.remaining()
```

### `Pointer` — Smart Pointers

```hopper
import unique from Pointer

Unique<byte> buf = Unique(1024)   // allocates 1024 bytes
address ptr = buf.ptr()
buf.destroy()
```

| Type | Semantics |
|------|-----------|
| `Pointer<T>` | Single-value owning pointer; `get`, `set`, `ptr`, `destroy` |
| `Unique<T>` | Unique ownership; `ptr`, `get`, `destroy` |
| `Shared<T>` | Reference counted; `ptr`, `get`, `addRef`, `release` |

### `ascii` — ASCII String

```hopper
import String from ascii

String s = String(64)
s.appendLiteral("hello")
int len = s.length()
byte c  = s.get(0)
```

### `math` — Integer Math

```hopper
import math from math

int v = math.abs(-5)
int m = math.max(a, b)
int g = math.gcd(12, 8)
int p = math.pow(2, 10)
```

Functions: `abs`, `min`, `max`, `clamp`, `pow`, `factorial`, `gcd`, `lcm`, `fib`, `isqrt`

### `algo` — Algorithms

```hopper
import sort from algo

sort.quickSort(arr, ascending)
sort.mergeSort(arr, descending)
sort.insertionSort(arr, ascending)
```

### `json` — JSON Parser

```hopper
import reader from json

JsonReader r = JsonReader(src, len)
address node = r.parseValue()
JsonNode v   = node::value

if (v.kind == JsonKind.INT) {
    int n = v.numVal
}
```

Kinds: `JsonKind.NONE`, `BOOL`, `INT`, `STRING`, `ARRAY`, `OBJECT`

### `path` — Path Manipulation

```hopper
import path from path

Path p = Path("/usr/local/bin")
Path b = p.basename()
Path d = p.dirname()
bool abs = p.isAbsolute()
p.join("file.txt")
```

### `fs` — File System

```hopper
import fs from fs

FileSystem fsys = FileSystem()
bool exists = fsys.exists(Path("/tmp"))
bool isDir  = fsys.isDirectory(Path("/usr"))
fsys.makeDirectory(Path("/tmp/myproject"))

Directory dir = Directory(Path("/tmp"))
while (true) {
    Path entry = dir.next()
    if (entry.length() == 0) { break }
}
dir.close()
```

### `linux` (Architecture Variants)

`x86_64` provides the syscall implementations. `target` selects the active architecture. `llvm` provides full LLVM C API bindings used by the Hopper compiler itself.

---

## CLI

Install via the `kindling` Node.js compiler frontend.

```
hopper init <name>                    scaffold a new project
hopper build [file.hop] [-o out]      compile to executable
hopper build module <name>            scaffold modules/<name>/ with tests/
hopper run [binary]                   execute a built binary
hopper run test [module]              run test suite
hopper install [module...]            install from stdlib or registry
hopper uninstall <module...>          remove installed packages
hopper publish [name]                 publish to registry
hopper revoke [name]                  remove from registry
hopper check [file.hop] [flags]       compile with sanitizers
hopper debug [file.hop]               debug support (coming soon)
hopper profile [file.hop]             profiling support (coming soon)
hopper format [-w] <file.hop...>      reformat source files
hopper test [module]                  run tests
hopper ir <file.hop>                  print LLVM IR
hopper ast <file.hop>                 print AST as JSON
```

### Project Structure

`hopper init myproject` creates:

```
myproject/
  main.hop
  hopper.json
  src/
  modules/
  .gitignore
```

`hopper.json`:

```json
{
  "name": "myproject",
  "version": "0.1.0",
  "entry": "main.hop",
  "dependencies": {}
}
```

### Package Registry

Packages are hosted under the [HopperLangauge](https://github.com/HopperLangauge) GitHub organization. `hopper install` checks the local stdlib first, then fetches from the registry.

```
hopper install json       # install json module
hopper publish            # publish current project to registry
hopper revoke mypackage   # permanently remove from registry
```

Publish and revoke require `HOPPER_TOKEN` or `GITHUB_TOKEN` env var.

---

## Tests

Tests live in `modules/<name>/tests/` as `.hop` files. Directives in comments drive the runner:

```hopper
// TEST: parse integer
// EXPECT: int ok

entry main {
    // ...
    println("int ok")
}
```

| Directive | Meaning |
|-----------|---------|
| `// TEST: name` | Named test section |
| `// EXPECT: line` | Assert this line appears in stdout |
| `// COMPILE_ONLY` | Verify compilation, don't run |
| `// EXPECT_ERROR: msg` | Compilation should fail with this message |
| `// XFAIL` | Expected failure — shown but not counted |

```
hopper test          # run all tests
hopper test ds       # run modules/ds/tests/ only
```

---

## Complete Example

Bare-metal UART boot on ARM Cortex-M:

```hopper
bind 0x00000004 = reset::address
bind 0x00000008 = nmi::address
bind 0x0000000c = hardfault::address

bitfield UartCR1 {
    pad 3
    bit te
    bit re
    pad 8
    bit ue
    pad 18
}

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
    gpioa.mode5 = 1
    uart_send(65)
}

function nmi()       { }
function hardfault() { }

entry main = reset::address
```

---

## Status

Version 0.1 — active development. Syntax and APIs will change.

- **425 tests passing**, 2 expected failures
- Full CLI — init, build, run, install, publish, check, format, test
- Complete standard library — data structures, I/O, filesystem, JSON, math, algorithms, smart pointers
- LLVM IR backend via `kindling` (Node.js)
- ARM Cortex-M and RISC-V targets planned
- Self-hosted compiler is a long-term goal
