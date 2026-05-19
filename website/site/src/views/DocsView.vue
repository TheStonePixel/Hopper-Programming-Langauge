<script setup>
import CodeBlock from '../components/CodeBlock.vue'

const codes = {
  hello: `entry main {
    println("hello, world")
}`,

  compile: `# compile and run
hopper build hello.hop -o hello
./hello

# with optimization (strips contracts, enables LLVM -O2)
hopper build --release hello.hop -o hello

# bare-metal ARM target (no OS, no libc)
hopper build --target=armv6-bare blink.hop -o blink.elf

# strict mode — contract violations become compile-time errors
hopper build --strict hello.hop -o hello`,

  project: `// hopper.json — project manifest
{
    "name": "myapp",
    "version": "0.1.0",
    "entry": "src/main.hop"
}

// recommended layout
myapp/
  src/
    main.hop
  modules/         // local module overrides (shadow stdlib)
  hopper.json`,

  importSelective: `// import specific names from a module
import io     from core     // print, println, eprint, eprintln
import result from core     // Result<T>
import assert from core     // assert, assertEq, assertNe

import file   from io       // FileReader, FileWriter
import fs     from io       // readFile, writeFile, exists

import thread from linux    // spawn, join, threadId
import net    from linux    // connect, listen, accept, send, recv`,

  importBulk: `// bulk import — loads every .hop file in modules/linux/src/
import linux

// names are immediately available
int pid = getpid()
int fd  = open("log.txt", 1, 0o644)
write(fd, "hello\\n", 6)
close(fd)`,

  moduleResolution: `// Resolution order for 'import io from core':
// 1. <current dir>/modules/core/src/io.hop
// 2. <parent dirs up>/modules/core/src/io.hop
// 3. Hopper stdlib modules/core/src/io.hop

// Local modules/ shadow the stdlib — override any module without
// forking the compiler.

// Circular imports are detected and skipped automatically.`,

  addressOp: `int x = 42

// take the address of a variable
address p = x::address

// read through an address (dereference)
int v = p::value          // v == 42

// write through an address
p::value = 99             // x is now 99

// address arithmetic (byte offset)
address next = p + 8      // 8 bytes forward

// address of an array element
address ep = arr[3]::address

// size of a type (compile-time constant)
int s  = int::size        // 8
int s2 = Point::size      // sizeof(struct Point)`,

  heapAlloc: `// allocate N bytes — like malloc, but a keyword
address buf = allocate 1024
// ... use buf ...
deallocate buf

// allocate a class or struct instance (sizeof automatically used)
Node node = allocate 1    // allocates sizeof(Node) bytes
deallocate node

// always pair with defer to prevent leaks on early return
function process() {
    address buf = allocate 256
    defer deallocate buf    // runs on every exit path

    int fd = open("data.bin", 0, 0)
    if (fd < 0) { return } // deallocate called here automatically
    defer close(fd)

    // ... work ...
}                           // both defers fire in reverse order here`,

  smartPointers: `import Pointer from Pointer

// Pointer<T> — raw unmanaged pointer (for FFI / bare-metal)
Pointer<byte> raw = Pointer(buf)
byte b = raw.get()
raw.set(0x41)

// Unique<T> — single-owner, freed when it goes out of scope
Unique<Node> u = Unique(Node(42))
int v = u.get().value      // 42

// Shared<T> — reference-counted; freed when last reference drops
Shared<Node> a = Shared(Node(1))
Shared<Node> b = a         // refcount = 2
// both a and b freed when both go out of scope`,

  deferExample: `// defer runs cleanup on every exit path — not just the happy path
function openAndRead(string path) bool {
    int fd = open(path, 0, 0)
    if (fd < 0) { return false }
    defer close(fd)              // guaranteed — even on error returns

    address buf = allocate 4096
    defer deallocate buf         // also guaranteed

    int n = read(fd, buf, 4096)
    if (n < 0) { return false }  // close() + deallocate called here too

    // ... process buf ...
    return true
}

// multiple defers execute in LIFO order (last-deferred runs first)`,

  resultType: `import result from core

// Result<T> wraps a success value or an error code
function divide(int a, int b) Result<int> {
    if (b == 0) { return Result(ErrorCode.DIVBYZERO) }
    return Result(a / b)
}

Result<int> r = divide(10, 2)
if (r.isOk()) {
    println(r.unwrap())        // 5
} else {
    println(r.errorCode())     // ErrorCode.DIVBYZERO
}

// unwrapOr returns a fallback on error
int v = divide(10, 0).unwrapOr(0)`,

  strictMMIO: `// strict — names a memory-mapped register at a fixed hardware address
// every read/write compiles to a volatile load/store (no caching)
strict int  UART_DR = 0x40021000   // data register
strict int  UART_SR = 0x40021004   // status register
strict byte GPIO_IN = 0x48000010   // GPIO input

// use like ordinary variables — the compiler emits volatile access
UART_DR = cast 'A'                 // write character 'A' to UART
int status = UART_SR               // volatile read of status

// works with any numeric type
strict unsigned int TIMER_CNT = 0x40000024`,

  bindExample: `// bind — places a function pointer at a specific address
// the linker writes it directly into the interrupt vector table
bind 0x00000004 = reset::address
bind 0x00000008 = nmi::address
bind 0x0000000C = hardfault::address
bind 0x0000003C = timer_irq::address

function reset() {
    // ARM Cortex-M reset entry — runs before any runtime setup
    // initialise .data, zero .bss, call entry main
}

function timer_irq() {
    // fires every timer tick — must return quickly
}`,

  bitfieldExample: `// bitfield — sub-byte-granularity struct for hardware register layouts
// fields are packed from LSB; container width auto-selected (i8→i64)
bitfield UartStatus {
    bit txEmpty        // bit 0 — TX FIFO empty
    bit rxFull         // bit 1 — RX FIFO full
    pad 4              // bits 2-5 — reserved
    byte errorCode     // bits 6-13 — error flags
    bit enabled[4]     // bits 14-17 — channel enables
}

// combine with strict for a full register model
strict UartStatus uart_sr = 0x40021004

// reads compile to: volatile load → shift → mask
// writes compile to: volatile load → mask → OR → volatile store`,

  contracts: `// requires — precondition; checked on function entry
// ensures  — postcondition; checked before every return
//            'result' binds to the return value inside ensures
function divide(int a, int b) int
    requires b != 0
    ensures  result * b == a
{
    return a / b
}

// invariant — assertion re-checked at every loop iteration header
function sumTo(int n) int
    requires n >= 0
{
    int total = 0
    int i = 0
    while (i <= n) invariant total >= 0 && i >= 0 {
        total = total + i
        i = i + 1
    }
    return total
}

// constrain — asserts a value fits in a type's range on assignment
int age = userInput constrain [0, 150]
byte b  = val        constrain [byte]    // shorthand: fits in byte range`,

  contractFlags: `# debug (default) — contracts compiled in, violations call abort()
hopper build app.hop -o app

# release — contracts stripped entirely, zero overhead
hopper build --release app.hop -o app

# strict — violations are compile-time errors (static proof pass)
# the compiler rejects programs it cannot prove are contract-safe
hopper build --strict app.hop -o app`,

  asmExample: `// inline assembly — inputs/outputs bound by variable name, no constraint strings
function getpid() int {
    int pid
    asm {
        rax = 39        // syscall number (input)
        syscall
        pid = rax       // output written back to Hopper variable
    }
    return pid
}

function exit(int code) {
    asm {
        rax = 60        // SYS_exit
        rdi = code      // argument from Hopper variable
        syscall
    }
}`,
}
</script>

<template>
  <div class="page">

    <header class="page-header">
      <div class="header-inner">
        <span class="label">Documentation</span>
        <h1>Hopper Docs</h1>
        <p class="sub">Guides for the module system, memory model, hardware model, and contract system.</p>
      </div>
    </header>

    <div class="layout">

      <!-- Sidebar -->
      <aside class="sidebar">
        <nav class="toc">
          <span class="toc-group">Getting Started</span>
          <a href="#hello">Hello World</a>
          <a href="#compilation">Compilation</a>
          <a href="#project">Project Layout</a>

          <span class="toc-group">Language</span>
          <a href="#types">Types</a>
          <a href="#operators">Operators</a>

          <span class="toc-group">Module System</span>
          <a href="#imports">Imports</a>
          <a href="#resolution">Resolution</a>
          <a href="#stdlib">Standard Library</a>

          <span class="toc-group">Memory Model</span>
          <a href="#address">Address &amp; Deref</a>
          <a href="#heap">Heap Allocation</a>
          <a href="#smart">Smart Pointers</a>
          <a href="#defer">Defer</a>
          <a href="#result">Result&lt;T&gt;</a>

          <span class="toc-group">Hardware Model</span>
          <a href="#strict">strict</a>
          <a href="#bind">bind</a>
          <a href="#bitfield">bitfield</a>

          <span class="toc-group">Contracts</span>
          <a href="#contracts">requires / ensures</a>
          <a href="#contract-flags">Build Flags</a>

          <span class="toc-group">Low Level</span>
          <a href="#asm">Inline Assembly</a>
        </nav>
      </aside>

      <!-- Content -->
      <main class="content">

        <!-- ── Getting Started ── -->

        <section id="hello">
          <h2>Hello World</h2>
          <p>Every Hopper program has exactly one <code>entry</code>. It is the program's named jump target — not a function. On Linux it becomes the ELF entry point; on bare metal it becomes the reset handler.</p>
          <CodeBlock :code="codes.hello" />
          <p>The <code>println</code> function comes from <code>import io from core</code>. For a standalone file you can call it without importing; the compiler resolves core I/O implicitly when no import statement is present.</p>
        </section>

        <section id="compilation">
          <h2>Compilation</h2>
          <p>The <code>hopper</code> CLI drives the full pipeline: ANTLR parse → AST → LLVM IR → <code>clang</code> for machine code. All steps are in-process except the final <code>clang</code> invocation.</p>
          <CodeBlock :code="codes.compile" />
          <p>The <code>--release</code> flag strips all contract checks and enables LLVM optimisations. The <code>--strict</code> flag turns contract violations into compile-time errors instead of runtime aborts. The <code>--target=armv6-bare</code> flag switches to 32-bit ARM with no libc.</p>
        </section>

        <section id="project">
          <h2>Project Layout</h2>
          <p>A <code>hopper.json</code> manifest declares the project name and entry file. The <code>modules/</code> directory inside your project shadows the stdlib — drop a file there to override any standard module without touching the compiler.</p>
          <CodeBlock :code="codes.project" />
        </section>

        <!-- ── Language ── -->

        <section id="types">
          <h2>Types</h2>
          <p>Hopper is strongly typed. There are no implicit conversions — every widening or reinterpretation is spelled out with <code>cast</code>.</p>
          <table class="type-table">
            <thead><tr><th>Type</th><th>Width</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>int</code></td><td>64-bit</td><td>Signed integer</td></tr>
              <tr><td><code>unsigned int</code></td><td>64-bit</td><td>Unsigned integer</td></tr>
              <tr><td><code>byte</code></td><td>8-bit</td><td>Signed byte</td></tr>
              <tr><td><code>unsigned byte</code></td><td>8-bit</td><td>Unsigned byte</td></tr>
              <tr><td><code>bool</code></td><td>1-bit</td><td><code>true</code> or <code>false</code></td></tr>
              <tr><td><code>float</code></td><td>64-bit</td><td>IEEE 754 double</td></tr>
              <tr><td><code>char</code></td><td>8-bit</td><td>ASCII character</td></tr>
              <tr><td><code>bit</code></td><td>1-bit</td><td>Single bit — used inside <code>bitfield</code> only</td></tr>
              <tr><td><code>string</code></td><td>pointer</td><td>Null-terminated string literal (read-only)</td></tr>
              <tr><td><code>address</code></td><td>64-bit</td><td>Raw memory address — equivalent to <code>void*</code></td></tr>
              <tr><td><code>string[]</code></td><td>pointer</td><td>Array of string pointers (e.g. <code>argv</code>)</td></tr>
            </tbody>
          </table>
          <p>User-defined types — <code>struct</code>, <code>class</code>, <code>template</code>, <code>enum</code>, <code>alias</code>, <code>bitfield</code> — are also valid type names.</p>
        </section>

        <section id="operators">
          <h2>Operators</h2>
          <table class="type-table">
            <thead><tr><th>Category</th><th>Operators</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td>Arithmetic</td><td><code>+&nbsp; -&nbsp; *&nbsp; /&nbsp; %</code></td><td>Integer and float</td></tr>
              <tr><td>Comparison</td><td><code>==&nbsp; !=&nbsp; &lt;&nbsp; &lt;=&nbsp; &gt;&nbsp; &gt;=</code></td><td>Returns <code>bool</code></td></tr>
              <tr><td>Logical</td><td><code>&amp;&amp;&nbsp; ||&nbsp; !</code></td><td>Short-circuit evaluation</td></tr>
              <tr><td>Bitwise</td><td><code>&amp;&nbsp; |&nbsp; ^&nbsp; ~&nbsp; &lt;&lt;&nbsp; &gt;&gt;</code></td><td>Integer only</td></tr>
              <tr><td>Unary</td><td><code>-&nbsp; !&nbsp; ~&nbsp; cast</code></td><td><code>cast</code> is an explicit widening or reinterpretation</td></tr>
              <tr><td>Address</td><td><code>x::address&nbsp; p::value&nbsp; T::size</code></td><td>Take address / dereference / sizeof</td></tr>
              <tr><td>Subscript</td><td><code>arr[i]&nbsp; arr[i] = v</code></td><td>Read and write — separate overloadable operators</td></tr>
            </tbody>
          </table>
          <p>Precedence (high → low): unary → <code>* / %</code> → <code>+ -</code> → <code>&lt;&lt; &gt;&gt;</code> → <code>&lt; &lt;= &gt; &gt;=</code> → <code>== !=</code> → <code>&amp;</code> → <code>^</code> → <code>|</code> → <code>&amp;&amp;</code> → <code>||</code>.</p>
        </section>

        <!-- ── Module System ── -->

        <section id="imports">
          <h2>Imports</h2>
          <p>Hopper has two import forms. Selective import loads specific files by name; bulk import loads every source file in a module directory.</p>

          <h3>Selective import</h3>
          <p>The name after <code>from</code> is the module directory; the name before it is the source file within that directory's <code>src/</code> folder.</p>
          <CodeBlock :code="codes.importSelective" />

          <h3>Bulk import</h3>
          <p>Omit <code>from</code> to load the entire module. All names exported by every file in <code>modules/X/src/</code> become available.</p>
          <CodeBlock :code="codes.importBulk" />
        </section>

        <section id="resolution">
          <h2>Module Resolution</h2>
          <p>The compiler walks up the directory tree looking for a <code>modules/</code> folder, then falls back to the stdlib. This lets local modules shadow the stdlib without any configuration.</p>
          <CodeBlock :code="codes.moduleResolution" />
        </section>

        <section id="stdlib">
          <h2>Standard Library</h2>
          <table class="type-table">
            <thead><tr><th>Module</th><th>Import</th><th>Provides</th></tr></thead>
            <tbody>
              <tr>
                <td><code>core/io</code></td>
                <td><code>import io from core</code></td>
                <td><code>print</code>, <code>println</code>, <code>eprint</code>, <code>eprintln</code>, <code>printInt</code></td>
              </tr>
              <tr>
                <td><code>core/result</code></td>
                <td><code>import result from core</code></td>
                <td><code>Result&lt;T&gt;</code> — <code>isOk()</code>, <code>isErr()</code>, <code>unwrap()</code>, <code>unwrapOr()</code>, <code>errorCode()</code></td>
              </tr>
              <tr>
                <td><code>core/error</code></td>
                <td><code>import error from core</code></td>
                <td><code>ErrorCode</code> enum — 20+ standard codes (I/O, memory, data, system)</td>
              </tr>
              <tr>
                <td><code>core/assert</code></td>
                <td><code>import assert from core</code></td>
                <td><code>assert</code>, <code>assertEq</code>, <code>assertNe</code></td>
              </tr>
              <tr>
                <td><code>ds</code></td>
                <td><code>import Array from ds</code></td>
                <td><code>Array&lt;T&gt;</code>, <code>Stack&lt;T&gt;</code>, <code>Queue&lt;T&gt;</code>, <code>Deque&lt;T&gt;</code>, <code>LinkedList&lt;T&gt;</code>, <code>DoublyLinkedList&lt;T&gt;</code>, <code>HashMap&lt;K,V&gt;</code>, <code>Set&lt;T&gt;</code>, <code>MinHeap&lt;T&gt;</code>, <code>MaxHeap&lt;T&gt;</code>, <code>BST&lt;T&gt;</code>, <code>Trie</code>, <code>Graph</code>, <code>StringBuilder</code>, <code>BumpAllocator</code></td>
              </tr>
              <tr>
                <td><code>math</code></td>
                <td><code>import math from math</code></td>
                <td><code>abs</code>, <code>min</code>, <code>max</code>, <code>clamp</code>, <code>pow</code>, <code>factorial</code>, <code>gcd</code>, <code>lcm</code>, <code>fib</code>, <code>isqrt</code></td>
              </tr>
              <tr>
                <td><code>algo</code></td>
                <td><code>import algo from algo</code></td>
                <td><code>quickSort</code>, <code>mergeSort</code>, <code>insertionSort</code></td>
              </tr>
              <tr>
                <td><code>string</code></td>
                <td><code>import ascii from string</code></td>
                <td><code>IString</code> interface, ASCII and UTF-8 encoding/decoding, emoji support</td>
              </tr>
              <tr>
                <td><code>Pointer</code></td>
                <td><code>import Pointer from Pointer</code></td>
                <td><code>Pointer&lt;T&gt;</code> (raw), <code>Unique&lt;T&gt;</code> (single-owner RAII), <code>Shared&lt;T&gt;</code> (reference-counted)</td>
              </tr>
              <tr>
                <td><code>stream</code></td>
                <td><code>import stream from stream</code></td>
                <td><code>Stream&lt;T&gt;</code> — non-owning view over a slice with iterator protocol</td>
              </tr>
              <tr>
                <td><code>io</code></td>
                <td><code>import file from io</code></td>
                <td><code>FileReader</code>, <code>FileWriter</code>, filesystem operations</td>
              </tr>
              <tr>
                <td><code>json</code></td>
                <td><code>import json from json</code></td>
                <td><code>JsonReader</code>, <code>JsonNode</code> — JSON parsing</td>
              </tr>
              <tr>
                <td><code>path</code></td>
                <td><code>import path from path</code></td>
                <td><code>basename</code>, <code>dirname</code>, <code>join</code>, <code>isAbsolute</code>, <code>normalize</code></td>
              </tr>
              <tr>
                <td><code>char</code></td>
                <td><code>import char from char</code></td>
                <td>Character classification and conversion utilities</td>
              </tr>
              <tr>
                <td><code>concurrent</code></td>
                <td><code>import concurrent from concurrent</code></td>
                <td><code>Channel&lt;T&gt;</code>, <code>Mutex</code>, <code>Future&lt;T&gt;</code> — threading primitives over <code>pthread</code></td>
              </tr>
              <tr>
                <td><code>linux</code></td>
                <td><code>import linux</code></td>
                <td>Full Linux syscall coverage — <code>sys</code>, <code>io</code>, <code>fs</code>, <code>mem</code>, <code>net</code>, <code>thread</code>, <code>timer</code>, <code>poll</code>, <code>io_uring</code>, and more (16 files)</td>
              </tr>
              <tr>
                <td><code>x86_64</code></td>
                <td><code>import x86_64</code></td>
                <td>CPU intrinsics — <code>cpuid</code>, <code>msr</code>, <code>paging</code>, <code>gdt</code>, <code>idt</code>, <code>port</code>, <code>vmx</code>, <code>tsc</code>, and more (15 files)</td>
              </tr>
              <tr>
                <td><code>sys</code></td>
                <td><code>import sys from sys</code></td>
                <td>Cross-platform syscall mirror of <code>linux/</code> for portable programs</td>
              </tr>
              <tr>
                <td><code>uart</code></td>
                <td><code>import uart from uart</code></td>
                <td>UART initialisation, send/receive helpers for bare-metal targets</td>
              </tr>
            </tbody>
          </table>
        </section>

        <!-- ── Memory Model ── -->

        <section id="address">
          <h2>Address &amp; Dereference</h2>
          <p>Hopper exposes raw memory through the <code>::</code> operator family. There are no implicit pointer types — every pointer is an <code>address</code>, and reads/writes through it are explicit.</p>
          <CodeBlock :code="codes.addressOp" />
          <p><code>T::size</code> is a compile-time constant — it resolves to the byte width of <code>T</code> (same as C's <code>sizeof</code>). Address arithmetic uses byte offsets.</p>
        </section>

        <section id="heap">
          <h2>Heap Allocation</h2>
          <p><code>allocate</code> and <code>deallocate</code> are keywords, not library calls. They lower to <code>malloc</code>/<code>free</code> in the LLVM IR. Every allocation must have a matching <code>deallocate</code> — pair them with <code>defer</code> to make the cleanup automatic.</p>
          <CodeBlock :code="codes.heapAlloc" />
        </section>

        <section id="smart">
          <h2>Smart Pointers</h2>
          <p>The <code>Pointer</code> module provides three ownership models. All are implemented as regular Hopper classes — no compiler magic required.</p>
          <CodeBlock :code="codes.smartPointers" />
          <table class="type-table" style="margin-top:1rem">
            <thead><tr><th>Type</th><th>Ownership</th><th>Use when</th></tr></thead>
            <tbody>
              <tr><td><code>Pointer&lt;T&gt;</code></td><td>None — raw pointer</td><td>FFI, bare-metal, casting from <code>address</code></td></tr>
              <tr><td><code>Unique&lt;T&gt;</code></td><td>Single owner (RAII)</td><td>Most heap-allocated objects</td></tr>
              <tr><td><code>Shared&lt;T&gt;</code></td><td>Reference-counted</td><td>Shared ownership across multiple variables</td></tr>
            </tbody>
          </table>
        </section>

        <section id="defer">
          <h2>Defer</h2>
          <p><code>defer</code> schedules an expression to run when the surrounding function returns, regardless of which <code>return</code> statement is taken. Multiple defers execute in last-in first-out order.</p>
          <CodeBlock :code="codes.deferExample" />
          <p>Use <code>defer</code> to pair every resource acquisition with its release at the point of acquisition — not at every return site.</p>
        </section>

        <section id="result">
          <h2>Result&lt;T&gt;</h2>
          <p><code>Result&lt;T&gt;</code> wraps either a success value of type <code>T</code> or an <code>ErrorCode</code>. It is the standard way to propagate recoverable errors without exceptions.</p>
          <CodeBlock :code="codes.resultType" />
          <p>The full <code>ErrorCode</code> enum is in <code>core/error.hop</code> and covers I/O errors, memory errors, data errors, and system errors.</p>
        </section>

        <!-- ── Hardware Model ── -->

        <section id="strict">
          <h2>strict — MMIO Register Aliases</h2>
          <p><code>strict</code> binds a name to a fixed hardware address. Every access through that name compiles to a volatile load or store — the compiler never caches the value in a register or reorders it across sequence points.</p>
          <CodeBlock :code="codes.strictMMIO" />
          <p>This is the idiomatic way to model memory-mapped I/O in Hopper. No <code>volatile</code> keyword, no pointer casts — the hardware intent is declared once, at the top of the file.</p>
        </section>

        <section id="bind">
          <h2>bind — Interrupt Vector Table</h2>
          <p><code>bind</code> places a function pointer at a specific linker address. The linker writes the address into the binary at that location, which is how ARM Cortex-M and similar cores load their vector tables.</p>
          <CodeBlock :code="codes.bindExample" />
          <p>The function must exist in the same compilation unit. No separate startup assembly file or linker script is needed — the vector table is expressed entirely in Hopper.</p>
        </section>

        <section id="bitfield">
          <h2>bitfield — Bit-Packed Hardware Registers</h2>
          <p><code>bitfield</code> packs fields at the bit level, starting from the LSB. The compiler automatically selects the smallest integer container (<code>i8</code>, <code>i16</code>, <code>i32</code>, or <code>i64</code>) that holds all the declared bits.</p>
          <CodeBlock :code="codes.bitfieldExample" />
          <p>Field reads compile to a volatile load + shift + mask. Field writes compile to a volatile load + mask + OR + volatile store — the standard read-modify-write pattern for hardware registers.</p>
        </section>

        <!-- ── Contracts ── -->

        <section id="contracts">
          <h2>requires / ensures / invariant / constrain</h2>
          <p>Hopper has a first-class contract system. Contracts are not comments or annotations — they are checked code. In debug builds they are runtime assertions; in strict mode they are compile-time proofs.</p>
          <CodeBlock :code="codes.contracts" />
          <ul class="bullet-list">
            <li><code>requires</code> — precondition; verified on function entry. Violation calls <code>abort()</code>.</li>
            <li><code>ensures</code> — postcondition; verified before every <code>return</code>. The identifier <code>result</code> is bound to the return value.</li>
            <li><code>invariant</code> — loop invariant; verified at every evaluation of the loop condition.</li>
            <li><code>constrain</code> — range assertion; verified on assignment. <code>constrain [byte]</code> is shorthand for <code>constrain [-128, 127]</code>.</li>
          </ul>
        </section>

        <section id="contract-flags">
          <h2>Build Flags</h2>
          <p>Contracts have three modes selected at build time. The same source file compiles correctly in all three.</p>
          <CodeBlock :code="codes.contractFlags" />
          <table class="type-table">
            <thead><tr><th>Flag</th><th>Contracts</th><th>Use for</th></tr></thead>
            <tbody>
              <tr><td>(none)</td><td>Runtime assertions — violation calls <code>abort()</code></td><td>Development and testing</td></tr>
              <tr><td><code>--release</code></td><td>Stripped entirely — zero overhead</td><td>Production builds</td></tr>
              <tr><td><code>--strict</code></td><td>Compile-time proof — violations are errors</td><td>Safety-critical code, formal verification</td></tr>
            </tbody>
          </table>
        </section>

        <!-- ── Low Level ── -->

        <section id="asm">
          <h2>Inline Assembly</h2>
          <p>The <code>asm</code> block emits raw instructions inline. Hopper variables are bound to registers by name — no GCC-style constraint strings.</p>
          <CodeBlock :code="codes.asmExample" />
          <p>Assignment <em>into</em> a register (<code>rax = value</code>) is an input binding. Assignment <em>from</em> a register (<code>variable = rax</code>) is an output binding. Bare instructions with no assignment are emitted as-is.</p>
        </section>

      </main>
    </div>
  </div>
</template>

<style scoped>
/* ── Layout ── */
.page {
  min-height: 100vh;
  background: #faf9f6;
}

.page-header {
  background: #ffffff;
  border-bottom: 2px solid #e5e7eb;
  padding: 4rem 5vw 3.5rem;
}

.header-inner { max-width: 1100px; margin: 0 auto; }

.label {
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #9ca3af;
  margin-bottom: 1rem;
  font-weight: 600;
}

.page-header h1 {
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: -2px;
  color: #111827;
  margin-bottom: 0.75rem;
}

.page-header .sub {
  font-size: 1.05rem;
  color: #6b7280;
}

.layout {
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 5vw;
  gap: 3rem;
  align-items: flex-start;
}

/* ── Sidebar ── */
.sidebar {
  position: sticky;
  top: calc(56px + 2rem);
  width: 180px;
  flex-shrink: 0;
}

.toc {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.toc-group {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #d1d5db;
  padding: 0.9rem 0.6rem 0.3rem;
}

.toc a {
  font-size: 0.85rem;
  color: #6b7280;
  text-decoration: none;
  padding: 0.28rem 0.6rem;
  border-radius: 5px;
  transition: color 0.15s, background 0.15s;
  font-weight: 500;
}

.toc a:hover {
  color: #2563eb;
  background: #eff6ff;
}

/* ── Content ── */
.content {
  flex: 1;
  min-width: 0;
}

section {
  margin-bottom: 4rem;
  scroll-margin-top: 72px;
}

section h2 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e5e7eb;
}

section h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin: 1.5rem 0 0.6rem;
}

section p {
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.8;
  margin-bottom: 1rem;
}

section p code,
section li code {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.85em;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 3px;
  padding: 0.1em 0.35em;
  color: #1e293b;
}

/* ── Tables ── */
.type-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  margin-bottom: 1.25rem;
  text-align: left;
}

.type-table th {
  padding: 0.6rem 1rem;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #9ca3af;
  font-weight: 600;
}

.type-table td {
  padding: 0.6rem 1rem;
  border: 1px solid #e5e7eb;
  color: #374151;
  line-height: 1.6;
}

.type-table td code {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.85em;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 3px;
  padding: 0.1em 0.35em;
  color: #1e293b;
}

.type-table tr:hover td {
  background: #f9fafb;
}

/* ── Lists ── */
.bullet-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.bullet-list li {
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.7;
  padding-left: 1.25rem;
  position: relative;
}

.bullet-list li::before {
  content: '–';
  position: absolute;
  left: 0;
  color: #d1d5db;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .sidebar { display: none; }
  .layout  { padding: 2rem 5vw; }
  .page-header h1 { font-size: 2.5rem; }
}
</style>
