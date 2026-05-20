<script setup>
import CodeBlock from '@/components/CodeBlock.vue'
import PageShell from '@/components/PageShell.vue'
import PageHeader from '@/components/PageHeader.vue'
import SidebarLayout from '@/components/SidebarLayout.vue'

const codes = {
    c0: `// declaration with initializer
int x = 42
bool ready = true
float pi = 3.14
byte b = 255
string greeting = "hello"
address ptr = null

// reassignment (same type, no keyword)
x = 100

// hex literals
int flags = 0xFF00

// char literals
char newline = '\\n'

// no implicit widening — cast explicitly
int big = cast b     // byte → int`,
    c1: `// function that returns a value
function add(int a, int b) int {
    return a + b
}

// procedure — no return type means void
function greet(string name) {
    println(name)
}

// multiple parameters of different types
function clamp(int val, int lo, int hi) int {
    if (val < lo) { return lo }
    if (val > hi) { return hi }
    return val
}

// address parameter — pointer passing
function strlen(address s) int {
    int n = 0
    while (true) {
        address p = s + n
        byte c = p::value
        int ci = cast c
        if (ci == 0) { return n }
        n = n + 1
    }
    return n
}

// callback parameter — function pointer type
function apply(int x, callback(int) int fn) int {
    return fn(x)
}`,
    c2: `if (x > 0) {
    println("positive")
} else {
    println("non-positive")
}

// braces always required — no single-line if`,
    c3: `int i = 0
while (i < 10) {
    i = i + 1
}

// infinite loop
while (true) {
    // break to exit
    break
}`,
    c4: `for (int i = 0; i < 10; i = i + 1) {
    // i is scoped to the loop
}

// all three clauses are optional
for (;; i = i + 1) { ... }
for (int i = 0; i < n;) { i = i + 2 }`,
    c5: `for (int i = 0; i < 100; i = i + 1) {
    if (i == 5) { continue }   // skip 5
    if (i == 10) { break }     // stop at 10
}

function early(int n) int {
    if (n < 0) { return 0 }     // early return
    return n * 2
}`,
    c6: `class Counter {
    int value

    constructor(int start) {
        self.value = start
    }

    destructor() {
        // cleanup, if needed
    }

    function increment() {
        self.value = self.value + 1
    }

    function get() int {
        return self.value
    }

    operator +(int n) int {
        return self.value + n
    }
}

// instantiation
Counter c = Counter(10)
c.increment()
int n = c.get()
int m = c + 5`,
    c7: `operator ==(int other) bool {
    return self.value == other
}

operator [](int i) int {
    // subscript read: obj[i]
    return self.data.get(i)
}

operator [] =(int i, int v) {
    // subscript write: obj[i] = v
    self.data.set(i, v)
}`,
    c8: `struct Point {
    int x
    int y
}

struct UartRegs {
    int dr     // data register
    int sr     // status register
    pad 8      // reserved bytes
    int cr     // control register
}

// instantiation
Point p
p.x = 3
p.y = 4`,
    c9: `bitfield StatusReg {
    bit  txEmpty        // 1 bit
    bit  rxFull         // 1 bit
    pad  4             // 4 reserved bits
    byte errorCode      // 8 bits
    bit  enabled[4]    // 4-element bit array
}

strict int uart_sr = 0x40021004
// read field using cast and mask in practice`,
    c10: `template Box<T> {
    T value

    constructor(T v) {
        self.value = v
    }

    function get() T {
        return self.value
    }

    function set(T v) {
        self.value = v
    }
}

Box<int>   intBox   = Box(42)
Box<float> floatBox = Box(3.14)
int        n        = intBox.get()`,
    c11: `template Vec3<float> {
    float x
    float y
    float z

    constructor(float x, float y, float z) {
        self.x = x
        self.y = y
        self.z = z
    }
}

Vec3 v = Vec3(1.0, 0.0, 0.0)   // no <> needed`,
    c12: `template Pair<K, V> {
    K key
    V val

    constructor(K k, V v) {
        self.key = k
        self.val = v
    }
}

Pair<int, bool> p = Pair(1, true)`,
    c13: `// built-in String<T> template — dynamic byte/int string
String<byte> s = String()
s.append("hello")
int len = s.length()`,
    c14: `enum Color {
    Red    = 0
    Green  = 1
    Blue   = 2
    Custom = 10
    AfterCustom           // auto-increments to 11
}

int c = Color.Red
if (c == Color.Blue) { ... }`,
    c15: `enum Direction {
    North = "north"
    South = "south"
    East  = "east"
    West  = "west"
}

address heading = Direction.North
// heading is a pointer to the string "north"`,
    c16: `enum JsonKind {
    NONE     // = 0
    BOOL     // = 1
    INT      // = 2
    STRING   // = 3
    ARRAY    // = 4
    OBJECT   // = 5
}`,
    c17: `interface Printable {
    function print()
}

interface Comparable {
    function compareTo(int other) int
}

class Score implements Printable, Comparable {
    int value

    constructor(int v) { self.value = v }

    function print() {
        println(self.value)
    }

    function compareTo(int other) int {
        if (self.value < other) { return -1 }
        if (self.value > other) { return  1 }
        return 0
    }
}`,
    c18: `// import specific names from a module
import io from core        // print, println from core module
import file from io        // fileRead, fileWrite
import mem from core       // allocate helpers

// import whole module
import linux               // all of linux module`,
    c19: `// basic entry
entry main {
    println("hello")
}

// with parameters (e.g. argc/argv on Linux)
entry main(int argc, string[] argv) {
    println(argv[0])
}

// address form — jump to a pre-existing symbol
entry main = startup::address`,
    c20: `int x = 42

// take the address of a variable
address p = x::address

// read through an address (dereference)
int v = p::value

// write through an address
p::value = 99

// size of a type or variable in bytes
int s = x::size

// address arithmetic
address next = p + 8

// address of array element
address ep = arr[3]::address`,
    c21: `// allocate N bytes on the heap
address buf = allocate 256

// allocate with a type (class or struct)
Node node = allocate 1   // sizeof(Node) bytes

// free
deallocate buf`,
    c22: `byte  b   = 200
int   n   = cast b        // byte → int
float f   = cast n        // int → float
int   raw = cast f        // float → int (truncates)`,
    c23: `// creates a named alias for a memory-mapped address
// reads/writes compile to direct load/store at that address
strict int  uart_dr = 0x40021000   // data register
strict int  uart_sr = 0x40021004   // status register
strict byte gpio_in = 0x48000010

// use like ordinary variables
uart_dr = 0x41           // write 'A' to UART
int status = uart_sr    // read status`,
    c24: `// places a function pointer at a specific address
// the linker writes the address into the binary
bind 0x00000004 = reset::address    // ARM reset vector
bind 0x0000003c = timer::address    // timer interrupt

function reset() {
    // hardware reset handler
}

function timer() {
    // timer interrupt service routine
}`,
    c25: `// simple C function
extern function strlen(string s) int
extern function memcpy(address dst, address src, int n) address

// variadic C function (printf)
extern function printf(string fmt, ...) int
extern function fprintf(int fd, string fmt, ...) int

// no return value (void)
extern function exit(int code)

// use exactly like Hopper functions
printf("%d items\\n", 42)`,
    c26: `alias Size    = int
alias NodePtr = address
alias IntBox  = Box<int>

Size len = 1024
IntBox b = Box(7)`,
    c27: `function readFile(string path) bool {
    int fd = open(path, 0, 0)
    if (fd < 0) { return false }
    defer close(fd)          // runs on every return path

    // ... do work ...
    return true
}`,
    c28: `// Linux syscall (x86-64)
function exit(int code) {
    asm {
        rax = 60      // syscall: exit
        rdi = code    // exit code from Hopper variable
        syscall
    }
}

// read return value
function getpid() int {
    int pid
    asm {
        rax = 39      // syscall: getpid
        syscall
        pid = rax     // write register back to Hopper variable
    }
    return pid
}`,
    c29: `// requires — precondition checked at function entry
function divide(int a, int b) int
    requires b != 0
{
    return a / b
}

// ensures — postcondition checked before every return
// 'result' is bound to the return value inside ensures clauses
function clamp(int val, int lo, int hi) int
    requires lo <= hi
    ensures result >= lo && result <= hi
{
    if (val < lo) { return lo }
    if (val > hi) { return hi }
    return val
}

// invariant — checked at every loop-head evaluation
function sum(int n) int {
    int total = 0
    int i = 0
    while (i <= n)
        invariant i >= 0 && total >= 0
    {
        total = total + i
        i = i + 1
    }
    return total
}

// constrain — narrows storage to a smaller type's range
// fails at runtime (debug) or compile time (--strict) if out of range
int x = 42 constrain [byte]     // ok: 42 fits in [-128..127]
int y = 300 constrain [byte]    // runtime abort in debug, compile error in strict`,
}
</script>

<template>
  <PageShell>

    <PageHeader
      label="Reference"
      title="Syntax Guide"
      sub="Everything Hopper can do, with working examples."
      width="lg"
      size="sm"
    />

    <SidebarLayout width="lg">

      <template #sidebar>
        <a href="#types">Types</a>
        <a href="#variables">Variables</a>
        <a href="#functions">Functions</a>
        <a href="#control">Control Flow</a>
        <a href="#classes">Classes</a>
        <a href="#structs">Structs</a>
        <a href="#bitfields">Bitfields</a>
        <a href="#templates">Templates</a>
        <a href="#enums">Enums</a>
        <a href="#interfaces">Interfaces</a>
        <a href="#imports">Imports &amp; Modules</a>
        <a href="#entry">Entry Point</a>
        <a href="#memory">Memory Operations</a>
        <a href="#hardware">Hardware</a>
        <a href="#extern">Extern &amp; FFI</a>
        <a href="#aliases">Type Aliases</a>
        <a href="#defer">Defer</a>
        <a href="#asm">Inline Assembly</a>
        <a href="#contracts">Contracts</a>
        <a href="#operators">Operators</a>
      </template>

        <!-- Types -->
        <section id="types">
          <h2 v-reveal>Types</h2>
          <p>Hopper is strongly typed. Every variable has an explicit type; implicit conversions do not exist.</p>
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
              <tr><td><code>bit</code></td><td>1-bit</td><td>Single bit (used in bitfields)</td></tr>
              <tr><td><code>string</code></td><td>pointer</td><td>Null-terminated string literal</td></tr>
              <tr><td><code>address</code></td><td>64-bit</td><td>Raw memory address (like <code>void*</code>)</td></tr>
              <tr><td><code>string[]</code></td><td>pointer</td><td>Array of strings (e.g. argv)</td></tr>
            </tbody>
          </table>
          <p>User-defined types (structs, classes, templates) are also valid type names.</p>
        </section>

        <!-- Variables -->
        <section id="variables">
          <h2 v-reveal>Variables</h2>
          <p>Declare with type first. An initializer is required unless the variable is a struct or class instance that will be populated field-by-field.</p>
          <CodeBlock :code="codes.c0" />
        </section>

        <!-- Functions -->
        <section id="functions">
          <h2 v-reveal>Functions</h2>
          <p>Functions have explicit return types. A function with no return value omits the type.</p>
          <CodeBlock :code="codes.c1" />
        </section>

        <!-- Control Flow -->
        <section id="control">
          <h2 v-reveal>Control Flow</h2>

          <h3>if / else</h3>
          <CodeBlock :code="codes.c2" />

          <h3>while</h3>
          <CodeBlock :code="codes.c3" />

          <h3>for</h3>
          <CodeBlock :code="codes.c4" />

          <h3>break / continue / return</h3>
          <CodeBlock :code="codes.c5" />
        </section>

        <!-- Classes -->
        <section id="classes">
          <h2 v-reveal>Classes</h2>
          <p>Classes bundle data and behavior. They support constructors, destructors, methods, and operator overloading. The <code>self</code> keyword refers to the current instance.</p>
          <CodeBlock :code="codes.c6" />

          <h3>Operator overloading</h3>
          <p>Any arithmetic, comparison, bitwise, or subscript operator can be overloaded:</p>
          <CodeBlock :code="codes.c7" />
        </section>

        <!-- Structs -->
        <section id="structs">
          <h2 v-reveal>Structs</h2>
          <p>Structs are memory-layout-only types — fields are packed sequentially with no padding unless you add it explicitly. No methods, no constructors.</p>
          <CodeBlock :code="codes.c8" />
        </section>

        <!-- Bitfields -->
        <section id="bitfields">
          <h2 v-reveal>Bitfields</h2>
          <p>Bitfields pack fields at the bit level, starting from LSB. Used for hardware register layouts and compact flags.</p>
          <CodeBlock :code="codes.c9" />
        </section>

        <!-- Templates -->
        <section id="templates">
          <h2 v-reveal>Templates</h2>
          <p>Templates are parameterized classes, monomorphized at each use site. Type parameters are free variables (<code>T</code>); fixed parameters are concrete primitive types.</p>

          <h3>Free type parameters</h3>
          <CodeBlock :code="codes.c10" />

          <h3>Fixed-type parameters (no angle brackets at use site)</h3>
          <CodeBlock :code="codes.c11" />

          <h3>Multiple type parameters</h3>
          <CodeBlock :code="codes.c12" />

          <h3>String template</h3>
          <CodeBlock :code="codes.c13" />
        </section>

        <!-- Enums -->
        <section id="enums">
          <h2 v-reveal>Enums</h2>
          <p>Enums are compile-time constants. Variants can be integer-backed or string-backed. Values are erased at runtime — an int enum becomes a literal integer, a string enum becomes a pointer to a string constant.</p>

          <h3>Integer-backed enum</h3>
          <CodeBlock :code="codes.c14" />

          <h3>String-backed enum</h3>
          <CodeBlock :code="codes.c15" />

          <h3>Auto-increment</h3>
          <p>Integer variants without an explicit value increment from the previous value. The first variant defaults to 0.</p>
          <CodeBlock :code="codes.c16" />
        </section>

        <!-- Interfaces -->
        <section id="interfaces">
          <h2 v-reveal>Interfaces</h2>
          <p>Interfaces define compile-time method contracts. A class that <code>implements</code> an interface is checked at compile time to provide every declared method.</p>
          <CodeBlock :code="codes.c17" />
        </section>

        <!-- Imports -->
        <section id="imports">
          <h2 v-reveal>Imports &amp; Modules</h2>
          <p>Modules are directories under <code>modules/</code>. Import individual names or an entire module.</p>
          <CodeBlock :code="codes.c18" />

          <p>The core library includes:</p>
          <table class="type-table">
            <thead><tr><th>Module</th><th>What it provides</th></tr></thead>
            <tbody>
              <tr><td><code>core</code></td><td><code>print</code>, <code>println</code>, <code>TestSuite</code></td></tr>
              <tr><td><code>io</code></td><td><code>fileRead</code>, <code>fileWrite</code></td></tr>
              <tr><td><code>linux</code></td><td>syscall wrappers, <code>shellCapture</code>, filesystem ops</td></tr>
              <tr><td><code>sys</code></td><td>target platform metadata</td></tr>
            </tbody>
          </table>
        </section>

        <!-- Entry -->
        <section id="entry">
          <h2 v-reveal>Entry Point</h2>
          <p>Every Hopper program has exactly one <code>entry</code>. It is not a function — it is a named jump target. On Linux it becomes the ELF entry point; on bare metal it becomes the reset handler address.</p>
          <CodeBlock :code="codes.c19" />
        </section>

        <!-- Memory -->
        <section id="memory">
          <h2 v-reveal>Memory Operations</h2>
          <p>Hopper exposes raw memory operations explicitly. There are no implicit heap allocations.</p>

          <h3>Address and dereference</h3>
          <CodeBlock :code="codes.c20" />

          <h3>Heap allocation</h3>
          <CodeBlock :code="codes.c21" />

          <h3>cast</h3>
          <p>Explicit numeric widening or reinterpretation. No implicit casts anywhere.</p>
          <CodeBlock :code="codes.c22" />
        </section>

        <!-- Hardware -->
        <section id="hardware">
          <h2 v-reveal>Hardware &amp; Bare Metal</h2>
          <p>Hopper expresses hardware layout directly in source. No separate linker scripts or startup assembly files required.</p>

          <h3>strict — MMIO register alias</h3>
          <CodeBlock :code="codes.c23" />

          <h3>bind — vector table entry</h3>
          <CodeBlock :code="codes.c24" />
        </section>

        <!-- Extern -->
        <section id="extern">
          <h2 v-reveal>Extern &amp; FFI</h2>
          <p>Call into C libraries or any foreign ABI. Extern functions declare a signature and resolve at link time.</p>
          <CodeBlock :code="codes.c25" />
        </section>

        <!-- Aliases -->
        <section id="aliases">
          <h2 v-reveal>Type Aliases</h2>
          <p>An alias creates a new name for an existing type. No runtime cost; purely a compile-time name.</p>
          <CodeBlock :code="codes.c26" />
        </section>

        <!-- Defer -->
        <section id="defer">
          <h2 v-reveal>Defer</h2>
          <p><code>defer</code> runs an expression when the surrounding function returns, regardless of which <code>return</code> is taken. Useful for cleanup.</p>
          <CodeBlock :code="codes.c27" />
        </section>

        <!-- Asm -->
        <section id="asm">
          <h2 v-reveal>Inline Assembly</h2>
          <p>The <code>asm</code> block emits raw instructions. Inputs and outputs are bound by name to Hopper variables.</p>
          <CodeBlock :code="codes.c28" />
        </section>

        <!-- Contracts -->
        <section id="contracts">
          <h2 v-reveal>Contracts</h2>
          <p>
            Hopper's contract system lets you express correctness properties directly in source.
            Contracts are checked at runtime in debug builds and can be verified statically in
            <code>--strict</code> mode. They compile away entirely in <code>--release</code> builds.
          </p>
          <table class="type-table">
            <thead><tr><th>Keyword</th><th>Where</th><th>Meaning</th></tr></thead>
            <tbody>
              <tr><td><code>requires</code></td><td>function header</td><td>Precondition — must hold when the function is called</td></tr>
              <tr><td><code>ensures</code></td><td>function header</td><td>Postcondition — must hold before every return; <code>result</code> names the return value</td></tr>
              <tr><td><code>invariant</code></td><td>while header</td><td>Loop invariant — must hold at every loop-head evaluation</td></tr>
              <tr><td><code>constrain [T]</code></td><td>variable declaration</td><td>Narrows the variable's valid range to type <code>T</code>'s bounds</td></tr>
            </tbody>
          </table>
          <CodeBlock :code="codes.c29" />
          <h3>Compile modes</h3>
          <table class="type-table">
            <thead><tr><th>Flag</th><th>Effect</th></tr></thead>
            <tbody>
              <tr><td><em>(default)</em></td><td>All contracts emit runtime assertions — abort on violation</td></tr>
              <tr><td><code>--strict</code></td><td>Constant-folding pre-pass turns provable violations into compile errors; remaining contracts still check at runtime</td></tr>
              <tr><td><code>--release</code></td><td>All contract IR stripped — no overhead at runtime</td></tr>
            </tbody>
          </table>
        </section>

        <!-- Operators -->
        <section id="operators">
          <h2 v-reveal>Operators</h2>
          <table class="type-table">
            <thead><tr><th>Category</th><th>Operators</th></tr></thead>
            <tbody>
              <tr><td>Arithmetic</td><td><code>+  -  *  /  %</code></td></tr>
              <tr><td>Comparison</td><td><code>==  !=  &lt;  &lt;=  &gt;  &gt;=</code></td></tr>
              <tr><td>Logical</td><td><code>&amp;&amp;  ||  !</code></td></tr>
              <tr><td>Bitwise</td><td><code>&amp;  |  ^  ~  &lt;&lt;  &gt;&gt;</code></td></tr>
              <tr><td>Unary</td><td><code>-  !  ~  cast</code></td></tr>
              <tr><td>Address</td><td><code>x::address  p::value  p::value =  x::size</code></td></tr>
              <tr><td>Subscript</td><td><code>arr[i]  arr[i] = v</code></td></tr>
            </tbody>
          </table>
          <p>Precedence (highest to lowest): unary → multiplicative → additive → shift → relational → equality → bitwise AND → bitwise XOR → bitwise OR → logical AND → logical OR.</p>
        </section>

    </SidebarLayout>
  </PageShell>
</template>

<style scoped>
section {
  margin-bottom: 4rem;
  scroll-margin-top: 72px;
}

section h2 {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--color-border);
}

section h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-strong);
  margin: 1.5rem 0 0.6rem;
}

section p {
  font-size: 0.95rem;
  color: var(--color-text-soft);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.type-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  margin-bottom: 1.25rem;
  text-align: left;
}

.type-table th {
  padding: 0.6rem 1rem;
  background: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-text-faint);
  font-weight: 600;
}

.type-table td {
  padding: 0.6rem 1rem;
  border: 1px solid var(--color-border);
  color: var(--color-text-strong);
  line-height: 1.6;
}

.type-table tr:hover td { background: var(--color-surface-alt); }
</style>
