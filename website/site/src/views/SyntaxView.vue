<template>
  <div class="page">

    <header class="page-header">
      <div class="header-inner">
        <span class="label">Reference</span>
        <h1>Syntax Guide</h1>
        <p class="sub">Everything Hopper can do, with working examples.</p>
      </div>
    </header>

    <div class="layout">

      <!-- Sidebar -->
      <aside class="sidebar">
        <nav class="toc">
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
          <a href="#operators">Operators</a>
        </nav>
      </aside>

      <!-- Content -->
      <main class="content">

        <!-- Types -->
        <section id="types">
          <h2>Types</h2>
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
          <h2>Variables</h2>
          <p>Declare with type first. An initializer is required unless the variable is a struct or class instance that will be populated field-by-field.</p>
          <pre><code><span class="c">// declaration with initializer</span>
<span class="kw">int</span> x = <span class="num">42</span>
<span class="kw">bool</span> ready = <span class="kw2">true</span>
<span class="kw">float</span> pi = <span class="num">3.14</span>
<span class="kw">byte</span> b = <span class="num">255</span>
<span class="kw">string</span> greeting = <span class="str">"hello"</span>
<span class="kw">address</span> ptr = <span class="kw2">null</span>

<span class="c">// reassignment (same type, no keyword)</span>
x = <span class="num">100</span>

<span class="c">// hex literals</span>
<span class="kw">int</span> flags = <span class="hex">0xFF00</span>

<span class="c">// char literals</span>
<span class="kw">char</span> newline = <span class="str">'\n'</span>

<span class="c">// no implicit widening — cast explicitly</span>
<span class="kw">int</span> big = <span class="kw">cast</span> b     <span class="c">// byte → int</span></code></pre>
        </section>

        <!-- Functions -->
        <section id="functions">
          <h2>Functions</h2>
          <p>Functions have explicit return types. A function with no return value omits the type.</p>
          <pre><code><span class="c">// function that returns a value</span>
<span class="kw">function</span> add(<span class="kw">int</span> a, <span class="kw">int</span> b) <span class="kw">int</span> {
    <span class="kw">return</span> a + b
}

<span class="c">// procedure — no return type means void</span>
<span class="kw">function</span> greet(<span class="kw">string</span> name) {
    println(name)
}

<span class="c">// multiple parameters of different types</span>
<span class="kw">function</span> clamp(<span class="kw">int</span> val, <span class="kw">int</span> lo, <span class="kw">int</span> hi) <span class="kw">int</span> {
    <span class="kw">if</span> (val &lt; lo) { <span class="kw">return</span> lo }
    <span class="kw">if</span> (val &gt; hi) { <span class="kw">return</span> hi }
    <span class="kw">return</span> val
}

<span class="c">// address parameter — pointer passing</span>
<span class="kw">function</span> strlen(<span class="kw">address</span> s) <span class="kw">int</span> {
    <span class="kw">int</span> n = <span class="num">0</span>
    <span class="kw">while</span> (<span class="kw">true</span>) {
        <span class="kw">address</span> p = s + n
        <span class="kw">byte</span> c = p<span class="op">::</span>value
        <span class="kw">int</span> ci = <span class="kw">cast</span> c
        <span class="kw">if</span> (ci == <span class="num">0</span>) { <span class="kw">return</span> n }
        n = n + <span class="num">1</span>
    }
    <span class="kw">return</span> n
}

<span class="c">// callback parameter — function pointer type</span>
<span class="kw">function</span> apply(<span class="kw">int</span> x, <span class="kw">callback</span>(<span class="kw">int</span>) <span class="kw">int</span> fn) <span class="kw">int</span> {
    <span class="kw">return</span> fn(x)
}</code></pre>
        </section>

        <!-- Control Flow -->
        <section id="control">
          <h2>Control Flow</h2>

          <h3>if / else</h3>
          <pre><code><span class="kw">if</span> (x &gt; <span class="num">0</span>) {
    println(<span class="str">"positive"</span>)
} <span class="kw">else</span> {
    println(<span class="str">"non-positive"</span>)
}

<span class="c">// braces always required — no single-line if</span></code></pre>

          <h3>while</h3>
          <pre><code><span class="kw">int</span> i = <span class="num">0</span>
<span class="kw">while</span> (i &lt; <span class="num">10</span>) {
    i = i + <span class="num">1</span>
}

<span class="c">// infinite loop</span>
<span class="kw">while</span> (<span class="kw">true</span>) {
    <span class="c">// break to exit</span>
    <span class="kw">break</span>
}</code></pre>

          <h3>for</h3>
          <pre><code><span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i &lt; <span class="num">10</span>; i = i + <span class="num">1</span>) {
    <span class="c">// i is scoped to the loop</span>
}

<span class="c">// all three clauses are optional</span>
<span class="kw">for</span> (;; i = i + <span class="num">1</span>) { ... }
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i &lt; n;) { i = i + <span class="num">2</span> }</code></pre>

          <h3>break / continue / return</h3>
          <pre><code><span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i &lt; <span class="num">100</span>; i = i + <span class="num">1</span>) {
    <span class="kw">if</span> (i == <span class="num">5</span>) { <span class="kw">continue</span> }   <span class="c">// skip 5</span>
    <span class="kw">if</span> (i == <span class="num">10</span>) { <span class="kw">break</span> }     <span class="c">// stop at 10</span>
}

<span class="kw">function</span> early(<span class="kw">int</span> n) <span class="kw">int</span> {
    <span class="kw">if</span> (n &lt; <span class="num">0</span>) { <span class="kw">return</span> <span class="num">0</span> }     <span class="c">// early return</span>
    <span class="kw">return</span> n * <span class="num">2</span>
}</code></pre>
        </section>

        <!-- Classes -->
        <section id="classes">
          <h2>Classes</h2>
          <p>Classes bundle data and behavior. They support constructors, destructors, methods, and operator overloading. The <code>self</code> keyword refers to the current instance.</p>
          <pre><code><span class="kw">class</span> Counter {
    <span class="kw">int</span> value

    <span class="kw">constructor</span>(<span class="kw">int</span> start) {
        self.value = start
    }

    <span class="kw">destructor</span>() {
        <span class="c">// cleanup, if needed</span>
    }

    <span class="kw">function</span> increment() {
        self.value = self.value + <span class="num">1</span>
    }

    <span class="kw">function</span> get() <span class="kw">int</span> {
        <span class="kw">return</span> self.value
    }

    <span class="kw">operator</span> +(<span class="kw">int</span> n) <span class="kw">int</span> {
        <span class="kw">return</span> self.value + n
    }
}

<span class="c">// instantiation</span>
Counter c = Counter(<span class="num">10</span>)
c.increment()
<span class="kw">int</span> n = c.get()
<span class="kw">int</span> m = c + <span class="num">5</span></code></pre>

          <h3>Operator overloading</h3>
          <p>Any arithmetic, comparison, bitwise, or subscript operator can be overloaded:</p>
          <pre><code><span class="kw">operator</span> ==(<span class="kw">int</span> other) <span class="kw">bool</span> {
    <span class="kw">return</span> self.value == other
}

<span class="kw">operator</span> [](<span class="kw">int</span> i) <span class="kw">int</span> {
    <span class="c">// subscript read: obj[i]</span>
    <span class="kw">return</span> self.data.get(i)
}

<span class="kw">operator</span> [] =(<span class="kw">int</span> i, <span class="kw">int</span> v) {
    <span class="c">// subscript write: obj[i] = v</span>
    self.data.set(i, v)
}</code></pre>
        </section>

        <!-- Structs -->
        <section id="structs">
          <h2>Structs</h2>
          <p>Structs are memory-layout-only types — fields are packed sequentially with no padding unless you add it explicitly. No methods, no constructors.</p>
          <pre><code><span class="kw">struct</span> Point {
    <span class="kw">int</span> x
    <span class="kw">int</span> y
}

<span class="kw">struct</span> UartRegs {
    <span class="kw">int</span> dr     <span class="c">// data register</span>
    <span class="kw">int</span> sr     <span class="c">// status register</span>
    <span class="kw">pad</span> <span class="num">8</span>      <span class="c">// reserved bytes</span>
    <span class="kw">int</span> cr     <span class="c">// control register</span>
}

<span class="c">// instantiation</span>
Point p
p.x = <span class="num">3</span>
p.y = <span class="num">4</span></code></pre>
        </section>

        <!-- Bitfields -->
        <section id="bitfields">
          <h2>Bitfields</h2>
          <p>Bitfields pack fields at the bit level, starting from LSB. Used for hardware register layouts and compact flags.</p>
          <pre><code><span class="kw">bitfield</span> StatusReg {
    <span class="kw">bit</span>  txEmpty        <span class="c">// 1 bit</span>
    <span class="kw">bit</span>  rxFull         <span class="c">// 1 bit</span>
    <span class="kw">pad</span>  <span class="num">4</span>             <span class="c">// 4 reserved bits</span>
    <span class="kw">byte</span> errorCode      <span class="c">// 8 bits</span>
    <span class="kw">bit</span>  enabled[<span class="num">4</span>]    <span class="c">// 4-element bit array</span>
}

<span class="kw">strict</span> <span class="kw">int</span> uart_sr = <span class="hex">0x40021004</span>
<span class="c">// read field using cast and mask in practice</span></code></pre>
        </section>

        <!-- Templates -->
        <section id="templates">
          <h2>Templates</h2>
          <p>Templates are parameterized classes, monomorphized at each use site. Type parameters are free variables (<code>T</code>); fixed parameters are concrete primitive types.</p>

          <h3>Free type parameters</h3>
          <pre><code><span class="kw">template</span> Box&lt;T&gt; {
    T value

    <span class="kw">constructor</span>(T v) {
        self.value = v
    }

    <span class="kw">function</span> get() T {
        <span class="kw">return</span> self.value
    }

    <span class="kw">function</span> set(T v) {
        self.value = v
    }
}

Box&lt;<span class="kw">int</span>&gt;   intBox   = Box(<span class="num">42</span>)
Box&lt;<span class="kw">float</span>&gt; floatBox = Box(<span class="num">3.14</span>)
<span class="kw">int</span>        n        = intBox.get()</code></pre>

          <h3>Fixed-type parameters (no angle brackets at use site)</h3>
          <pre><code><span class="kw">template</span> Vec3&lt;<span class="kw">float</span>&gt; {
    <span class="kw">float</span> x
    <span class="kw">float</span> y
    <span class="kw">float</span> z

    <span class="kw">constructor</span>(<span class="kw">float</span> x, <span class="kw">float</span> y, <span class="kw">float</span> z) {
        self.x = x
        self.y = y
        self.z = z
    }
}

Vec3 v = Vec3(<span class="num">1.0</span>, <span class="num">0.0</span>, <span class="num">0.0</span>)   <span class="c">// no &lt;&gt; needed</span></code></pre>

          <h3>Multiple type parameters</h3>
          <pre><code><span class="kw">template</span> Pair&lt;K, V&gt; {
    K key
    V val

    <span class="kw">constructor</span>(K k, V v) {
        self.key = k
        self.val = v
    }
}

Pair&lt;<span class="kw">int</span>, <span class="kw">bool</span>&gt; p = Pair(<span class="num">1</span>, <span class="kw2">true</span>)</code></pre>

          <h3>String template</h3>
          <pre><code><span class="c">// built-in String&lt;T&gt; template — dynamic byte/int string</span>
String&lt;<span class="kw">byte</span>&gt; s = String()
s.append(<span class="str">"hello"</span>)
<span class="kw">int</span> len = s.length()</code></pre>
        </section>

        <!-- Enums -->
        <section id="enums">
          <h2>Enums</h2>
          <p>Enums are compile-time constants. Variants can be integer-backed or string-backed. Values are erased at runtime — an int enum becomes a literal integer, a string enum becomes a pointer to a string constant.</p>

          <h3>Integer-backed enum</h3>
          <pre><code><span class="kw">enum</span> Color {
    Red    = <span class="num">0</span>
    Green  = <span class="num">1</span>
    Blue   = <span class="num">2</span>
    Custom = <span class="num">10</span>
    AfterCustom           <span class="c">// auto-increments to 11</span>
}

<span class="kw">int</span> c = Color.Red
<span class="kw">if</span> (c == Color.Blue) { ... }</code></pre>

          <h3>String-backed enum</h3>
          <pre><code><span class="kw">enum</span> Direction {
    North = <span class="str">"north"</span>
    South = <span class="str">"south"</span>
    East  = <span class="str">"east"</span>
    West  = <span class="str">"west"</span>
}

<span class="kw">address</span> heading = Direction.North
<span class="c">// heading is a pointer to the string "north"</span></code></pre>

          <h3>Auto-increment</h3>
          <p>Integer variants without an explicit value increment from the previous value. The first variant defaults to 0.</p>
          <pre><code><span class="kw">enum</span> JsonKind {
    NONE     <span class="c">// = 0</span>
    BOOL     <span class="c">// = 1</span>
    INT      <span class="c">// = 2</span>
    STRING   <span class="c">// = 3</span>
    ARRAY    <span class="c">// = 4</span>
    OBJECT   <span class="c">// = 5</span>
}</code></pre>
        </section>

        <!-- Interfaces -->
        <section id="interfaces">
          <h2>Interfaces</h2>
          <p>Interfaces define compile-time method contracts. A class that <code>implements</code> an interface is checked at compile time to provide every declared method.</p>
          <pre><code><span class="kw">interface</span> Printable {
    <span class="kw">function</span> print()
}

<span class="kw">interface</span> Comparable {
    <span class="kw">function</span> compareTo(<span class="kw">int</span> other) <span class="kw">int</span>
}

<span class="kw">class</span> Score <span class="kw">implements</span> Printable, Comparable {
    <span class="kw">int</span> value

    <span class="kw">constructor</span>(<span class="kw">int</span> v) { self.value = v }

    <span class="kw">function</span> print() {
        println(self.value)
    }

    <span class="kw">function</span> compareTo(<span class="kw">int</span> other) <span class="kw">int</span> {
        <span class="kw">if</span> (self.value &lt; other) { <span class="kw">return</span> -<span class="num">1</span> }
        <span class="kw">if</span> (self.value &gt; other) { <span class="kw">return</span>  <span class="num">1</span> }
        <span class="kw">return</span> <span class="num">0</span>
    }
}</code></pre>
        </section>

        <!-- Imports -->
        <section id="imports">
          <h2>Imports &amp; Modules</h2>
          <p>Modules are directories under <code>modules/</code>. Import individual names or an entire module.</p>
          <pre><code><span class="c">// import specific names from a module</span>
<span class="kw">import</span> io <span class="kw">from</span> core        <span class="c">// print, println from core module</span>
<span class="kw">import</span> file <span class="kw">from</span> io        <span class="c">// fileRead, fileWrite</span>
<span class="kw">import</span> mem <span class="kw">from</span> core       <span class="c">// allocate helpers</span>

<span class="c">// import whole module</span>
<span class="kw">import</span> linux               <span class="c">// all of linux module</span></code></pre>

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
          <h2>Entry Point</h2>
          <p>Every Hopper program has exactly one <code>entry</code>. It is not a function — it is a named jump target. On Linux it becomes the ELF entry point; on bare metal it becomes the reset handler address.</p>
          <pre><code><span class="c">// basic entry</span>
<span class="kw">entry</span> main {
    println(<span class="str">"hello"</span>)
}

<span class="c">// with parameters (e.g. argc/argv on Linux)</span>
<span class="kw">entry</span> main(<span class="kw">int</span> argc, <span class="kw">string</span>[] argv) {
    println(argv[<span class="num">0</span>])
}

<span class="c">// address form — jump to a pre-existing symbol</span>
<span class="kw">entry</span> main = startup<span class="op">::</span>address</code></pre>
        </section>

        <!-- Memory -->
        <section id="memory">
          <h2>Memory Operations</h2>
          <p>Hopper exposes raw memory operations explicitly. There are no implicit heap allocations.</p>

          <h3>Address and dereference</h3>
          <pre><code><span class="kw">int</span> x = <span class="num">42</span>

<span class="c">// take the address of a variable</span>
<span class="kw">address</span> p = x<span class="op">::</span>address

<span class="c">// read through an address (dereference)</span>
<span class="kw">int</span> v = p<span class="op">::</span>value

<span class="c">// write through an address</span>
p<span class="op">::</span>value = <span class="num">99</span>

<span class="c">// size of a type or variable in bytes</span>
<span class="kw">int</span> s = x<span class="op">::</span>size

<span class="c">// address arithmetic</span>
<span class="kw">address</span> next = p + <span class="num">8</span>

<span class="c">// address of array element</span>
<span class="kw">address</span> ep = arr[<span class="num">3</span>]<span class="op">::</span>address</code></pre>

          <h3>Heap allocation</h3>
          <pre><code><span class="c">// allocate N bytes on the heap</span>
<span class="kw">address</span> buf = <span class="kw">allocate</span> <span class="num">256</span>

<span class="c">// allocate with a type (class or struct)</span>
Node node = <span class="kw">allocate</span> <span class="kw">1</span>   <span class="c">// sizeof(Node) bytes</span>

<span class="c">// free</span>
<span class="kw">deallocate</span> buf</code></pre>

          <h3>cast</h3>
          <p>Explicit numeric widening or reinterpretation. No implicit casts anywhere.</p>
          <pre><code><span class="kw">byte</span>  b   = <span class="num">200</span>
<span class="kw">int</span>   n   = <span class="kw">cast</span> b        <span class="c">// byte → int</span>
<span class="kw">float</span> f   = <span class="kw">cast</span> n        <span class="c">// int → float</span>
<span class="kw">int</span>   raw = <span class="kw">cast</span> f        <span class="c">// float → int (truncates)</span></code></pre>
        </section>

        <!-- Hardware -->
        <section id="hardware">
          <h2>Hardware &amp; Bare Metal</h2>
          <p>Hopper expresses hardware layout directly in source. No separate linker scripts or startup assembly files required.</p>

          <h3>strict — MMIO register alias</h3>
          <pre><code><span class="c">// creates a named alias for a memory-mapped address</span>
<span class="c">// reads/writes compile to direct load/store at that address</span>
<span class="kw">strict</span> <span class="kw">int</span>  uart_dr = <span class="hex">0x40021000</span>   <span class="c">// data register</span>
<span class="kw">strict</span> <span class="kw">int</span>  uart_sr = <span class="hex">0x40021004</span>   <span class="c">// status register</span>
<span class="kw">strict</span> <span class="kw">byte</span> gpio_in = <span class="hex">0x48000010</span>

<span class="c">// use like ordinary variables</span>
uart_dr = <span class="num">0x41</span>           <span class="c">// write 'A' to UART</span>
<span class="kw">int</span> status = uart_sr    <span class="c">// read status</span></code></pre>

          <h3>bind — vector table entry</h3>
          <pre><code><span class="c">// places a function pointer at a specific address</span>
<span class="c">// the linker writes the address into the binary</span>
<span class="kw">bind</span> <span class="hex">0x00000004</span> = reset<span class="op">::</span>address    <span class="c">// ARM reset vector</span>
<span class="kw">bind</span> <span class="hex">0x0000003c</span> = timer<span class="op">::</span>address    <span class="c">// timer interrupt</span>

<span class="kw">function</span> reset() {
    <span class="c">// hardware reset handler</span>
}

<span class="kw">function</span> timer() {
    <span class="c">// timer interrupt service routine</span>
}</code></pre>
        </section>

        <!-- Extern -->
        <section id="extern">
          <h2>Extern &amp; FFI</h2>
          <p>Call into C libraries or any foreign ABI. Extern functions declare a signature and resolve at link time.</p>
          <pre><code><span class="c">// simple C function</span>
<span class="kw">extern function</span> strlen(<span class="kw">string</span> s) <span class="kw">int</span>
<span class="kw">extern function</span> memcpy(<span class="kw">address</span> dst, <span class="kw">address</span> src, <span class="kw">int</span> n) <span class="kw">address</span>

<span class="c">// variadic C function (printf)</span>
<span class="kw">extern function</span> printf(<span class="kw">string</span> fmt, ...) <span class="kw">int</span>
<span class="kw">extern function</span> fprintf(<span class="kw">int</span> fd, <span class="kw">string</span> fmt, ...) <span class="kw">int</span>

<span class="c">// no return value (void)</span>
<span class="kw">extern function</span> exit(<span class="kw">int</span> code)

<span class="c">// use exactly like Hopper functions</span>
printf(<span class="str">"%d items\n"</span>, <span class="num">42</span>)</code></pre>
        </section>

        <!-- Aliases -->
        <section id="aliases">
          <h2>Type Aliases</h2>
          <p>An alias creates a new name for an existing type. No runtime cost; purely a compile-time name.</p>
          <pre><code><span class="kw">alias</span> Size    = <span class="kw">int</span>
<span class="kw">alias</span> NodePtr = <span class="kw">address</span>
<span class="kw">alias</span> IntBox  = Box&lt;<span class="kw">int</span>&gt;

Size len = <span class="num">1024</span>
IntBox b = Box(<span class="num">7</span>)</code></pre>
        </section>

        <!-- Defer -->
        <section id="defer">
          <h2>Defer</h2>
          <p><code>defer</code> runs an expression when the surrounding function returns, regardless of which <code>return</code> is taken. Useful for cleanup.</p>
          <pre><code><span class="kw">function</span> readFile(<span class="kw">string</span> path) <span class="kw">bool</span> {
    <span class="kw">int</span> fd = open(path, <span class="num">0</span>, <span class="num">0</span>)
    <span class="kw">if</span> (fd &lt; <span class="num">0</span>) { <span class="kw">return</span> <span class="kw2">false</span> }
    <span class="kw">defer</span> close(fd)          <span class="c">// runs on every return path</span>

    <span class="c">// ... do work ...</span>
    <span class="kw">return</span> <span class="kw2">true</span>
}</code></pre>
        </section>

        <!-- Asm -->
        <section id="asm">
          <h2>Inline Assembly</h2>
          <p>The <code>asm</code> block emits raw instructions. Inputs and outputs are bound by name to Hopper variables.</p>
          <pre><code><span class="c">// Linux syscall (x86-64)</span>
<span class="kw">function</span> exit(<span class="kw">int</span> code) {
    <span class="kw">asm</span> {
        rax = <span class="num">60</span>      <span class="c">// syscall: exit</span>
        rdi = code    <span class="c">// exit code from Hopper variable</span>
        syscall
    }
}

<span class="c">// read return value</span>
<span class="kw">function</span> getpid() <span class="kw">int</span> {
    <span class="kw">int</span> pid
    <span class="kw">asm</span> {
        rax = <span class="num">39</span>      <span class="c">// syscall: getpid</span>
        syscall
        pid = rax     <span class="c">// write register back to Hopper variable</span>
    }
    <span class="kw">return</span> pid
}</code></pre>
        </section>

        <!-- Operators -->
        <section id="operators">
          <h2>Operators</h2>
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
  gap: 0.15rem;
}

.toc a {
  font-size: 0.85rem;
  color: #6b7280;
  text-decoration: none;
  padding: 0.3rem 0.6rem;
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

/* ── Code blocks ── */
pre {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-left: 3px solid #2563eb;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 1.5rem 1.75rem;
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 1.9;
  margin-bottom: 1.25rem;
}

code {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  color: #1e293b;
}

pre code {
  background: none;
  padding: 0;
  font-size: inherit;
  color: inherit;
}

/* inline code */
section p code,
section li code,
table code {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.83rem;
  color: #374151;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  padding: 0.1em 0.45em;
  border-radius: 4px;
}

/* syntax highlighting inside pre — light theme */
.c   { color: #94a3b8; font-style: italic; }
.kw  { color: #2563eb; font-weight: 600; }
.kw2 { color: #7c3aed; }
.str { color: #16a34a; }
.num { color: #b45309; }
.hex { color: #c2410c; }
.op  { color: #9ca3af; }

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

.type-table tr:hover td {
  background: #f9fafb;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .sidebar { display: none; }
  .layout  { padding: 2rem 5vw; }
}
</style>
