<script setup>
import CodeBlock from '../components/CodeBlock.vue'

const codes = {
  types: `// Primitive types
int    x = 42
float  y = 3.14
bool   flag = true
byte   b = 0xFF
string msg = "hello"
address ptr = allocate 16

// Unsigned variants
unsigned int  u = 4000000000
unsigned byte ub = 200`,

  functions: `// Function — returns a value
function add(int a, int b) int {
    return a + b
}

// Procedure — no return value
function log(string msg) {
    write(1, msg::address, strlen(msg))
}

// Extern — bind to a C function
extern function printf(string fmt, ...) int

// Call
int result = add(10, 20)`,

  control: `// If / else
if (x > 0) {
    positive()
} else {
    negative()
}

// While loop
int i = 0
while (i < 10) {
    process(i)
    i = i + 1
}

// For loop
for (int j = 0; j < n; j = j + 1) {
    work(j)
}`,

  structs: `// Struct — memory layout only
struct Point {
    int x
    int y
    pad 8    // 8 bytes of explicit padding
}

// Bitfield — bit-level packing
bitfield Flags {
    bool read  [1]
    bool write [1]
    bool exec  [1]
    pad  5
}

// Usage
Point p = Point(10, 20)
int px = p.x`,

  classes: `// Class — data + methods
class Counter {
    int value

    constructor(int start) {
        self.value = start
    }

    function inc() {
        self.value = self.value + 1
    }

    function get() int {
        return self.value
    }
}

Counter c = Counter(0)
c.inc()
int v = c.get()   // 1`,

  templates: `// Parameterized class — monomorphized at use sites
template Box<T> {
    T value

    constructor(T v) {
        self.value = v
    }

    function get() T {
        return self.value
    }
}

// Each use generates a separate concrete type
Box<int>   bi = Box(42)
Box<float> bf = Box(3.14)
int  i = bi.get()
float f = bf.get()`,

  hardware: `// strict — named alias for a hardware register address
strict int uart_dr = 0x40021000
strict int uart_sr = 0x40021004

// bind — place function pointer in the vector table
bind 0x00000004 = reset::address
bind 0x0000003c = timer::address

// Reading and writing registers is just assignment
int status = uart_sr
uart_dr = cast byte_val`,

  asm: `// Inline assembly — scoped asm {} block
// Registers are assigned directly; raw instructions pass through
function sysWrite(int fd, address buf, int len) int {
    int n = 0
    asm {
        rax = 1     // syscall: write
        rdi = fd
        rsi = buf
        rdx = len
        syscall
        n = rax
    }
    return n
}`,

  memory: `// Explicit heap allocation
address buf = allocate 256

// Pointer arithmetic
address next = buf + 8

// Read/write through a pointer
int val = buf::value        // deref as int
buf::value = 99

// Address of a variable
address ptr = x::address

// Size of a type or variable
int sz = int::size          // 8 (bytes)
int vsz = x::size

// Explicit deallocation
deallocate buf`,

  entry: `// entry — the program entry point (not a function)

// Simple entry block
entry main {
    run()
}

// Entry with command-line arguments
entry main(string[] argv, int argc) {
    if (argc < 2) {
        usage()
        return
    }
    process(argv[1])
}`,
}
</script>

<template>
  <div class="page">
    <div class="syntax-hero">
      <div class="container">
        <span class="label">Language Reference</span>
        <h1>Hopper Syntax</h1>
        <p>A quick reference for the Hopper type system, control flow, and hardware primitives.</p>
      </div>
    </div>

    <div class="syntax-body">
      <div class="container">

        <section class="syn-section">
          <h2>Types &amp; Variables</h2>
          <p>Hopper is strongly typed. All variables must be explicitly typed. No implicit conversions — use <code>cast</code> to reinterpret values.</p>
          <CodeBlock :code="codes.types" label="types.hop" />
        </section>

        <section class="syn-section">
          <h2>Functions</h2>
          <p>Functions return a value; procedures (no return type) do not. Both use the same <code>function</code> keyword. Extern functions bind to foreign ABIs.</p>
          <CodeBlock :code="codes.functions" label="functions.hop" />
        </section>

        <section class="syn-section">
          <h2>Control Flow</h2>
          <p>Standard if/else, while, and for. No implicit fallthrough, no switch statement — use if/else chains or a lookup table.</p>
          <CodeBlock :code="codes.control" label="control.hop" />
        </section>

        <section class="syn-section">
          <h2>Structs &amp; Bitfields</h2>
          <p>Structs define memory layout only — no methods, no default values, no constructors. Bitfields pack fields at the bit level, sequentially from the LSB.</p>
          <CodeBlock :code="codes.structs" label="structs.hop" />
        </section>

        <section class="syn-section">
          <h2>Classes</h2>
          <p>Classes add behaviour to data. Constructors, destructors, methods, and operator overloading are all supported. No inheritance — use composition.</p>
          <CodeBlock :code="codes.classes" label="classes.hop" />
        </section>

        <section class="syn-section">
          <h2>Templates</h2>
          <p>Parameterized classes are monomorphized — each type argument generates a distinct concrete type at compile time. No runtime generics, no type erasure.</p>
          <CodeBlock :code="codes.templates" label="templates.hop" />
        </section>

        <section class="syn-section">
          <h2>Hardware Primitives</h2>
          <p><code>strict</code> declares a memory-mapped register alias. <code>bind</code> places a function's address into the vector table at a fixed address. Both are first-class language features.</p>
          <CodeBlock :code="codes.hardware" label="hardware.hop" />
        </section>

        <section class="syn-section">
          <h2>Inline Assembly</h2>
          <p>The <code>asm {}</code> block captures raw x86-64 instructions. Register assignments (<code>rax = val</code>) wire Hopper variables directly into LLVM inline asm constraints. Raw instructions pass through unchanged.</p>
          <CodeBlock :code="codes.asm" label="asm.hop" />
        </section>

        <section class="syn-section">
          <h2>Memory Operations</h2>
          <p>Explicit <code>allocate</code> / <code>deallocate</code>. Pointer arithmetic via address addition. <code>::address</code>, <code>::value</code>, and <code>::size</code> for pointer operations.</p>
          <CodeBlock :code="codes.memory" label="memory.hop" />
        </section>

        <section class="syn-section">
          <h2>Entry Points</h2>
          <p><code>entry</code> declares the program's start. Unlike a function, it does not return a value. Command-line arguments are optional — only declare them if you need them.</p>
          <CodeBlock :code="codes.entry" label="entry.hop" />
        </section>

      </div>
    </div>
  </div>
</template>

<style scoped>
.page { background: #fff; }

.syntax-hero {
  background: linear-gradient(160deg, #eff6ff 0%, #f9fafb 60%);
  border-bottom: 1px solid #e5e7eb;
  padding: 4rem 0 3rem;
}

.container {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 5vw;
}

.label {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2563eb;
  margin-bottom: 0.5rem;
}

.syntax-hero h1 {
  font-size: 2.5rem;
  font-weight: 900;
  color: #111827;
  letter-spacing: -0.03em;
  margin-bottom: 0.75rem;
}

.syntax-hero p {
  font-size: 1.05rem;
  color: #4b5563;
  line-height: 1.6;
}

.syntax-body {
  padding: 3rem 0 5rem;
}

.syn-section {
  margin-bottom: 3.5rem;
}

.syn-section h2 {
  font-size: 1.35rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.syn-section p {
  font-size: 0.9rem;
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.syn-section code {
  font-family: 'Fira Code', ui-monospace, monospace;
  font-size: 0.85em;
  background: #eff6ff;
  color: #2563eb;
  padding: 0.1em 0.35em;
  border-radius: 3px;
}
</style>
