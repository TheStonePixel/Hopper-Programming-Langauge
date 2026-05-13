<template>
  <div class="page">

    <header class="hero">
      <div class="hero-inner">
        <h1>Hopper</h1>
        <p class="tagline">The ultimate systems and hardware programming language.</p>
        <p class="sub">From bare metal to high-level abstractions — one language, no compromises.</p>
      </div>
    </header>

    <section class="thesis">
      <div class="container">
        <span class="label">The Thesis</span>
        <p class="thesis-statement">
          The toolchain is complicated because the language failed.<br>
          Fix the language, and the toolchain becomes simple.
        </p>
        <p>
          Every bare-metal C project ships with a linker script, a startup file, a Makefile,
          and a handful of pragma hacks. That complexity isn't accidental — it's the bill
          that comes due for every design decision the language couldn't make cleanly.
          Decades of duct tape on top of duct tape.
        </p>
        <p>
          Hopper is built from the ground up for systems and hardware programming.
          It gives you direct access to hardware, full control over memory, and modern
          language features — without any of the legacy baggage.
        </p>
      </div>
    </section>

    <section class="what">
      <div class="container">
        <span class="label">What is Hopper</span>
        <div class="what-grid">
          <div class="what-card">
            <h3>A systems language</h3>
            <p>Strongly typed, multiparadigm, and designed for low-level control. Functions, classes, templates, structs, generics — everything you need to write an OS, a compiler, or a database from scratch.</p>
          </div>
          <div class="what-card">
            <h3>A hardware language</h3>
            <p>First-class bare metal support. Vector tables, MMIO registers, interrupt handlers, and entry points are all expressed in Hopper itself — not in separate linker scripts or assembly files.</p>
          </div>
          <div class="what-card">
            <h3>A self-describing toolchain</h3>
            <p>A Hopper program can describe its own hardware layout. The language and the linker speak the same language because they are the same language. It's all code — not instructions to an external tool.</p>
          </div>
          <div class="what-card">
            <h3>A clean foundation</h3>
            <p>No global variables. No footguns. No syntax inherited from 1972 that exists only because removing it would break everything. Hopper is simple because it was designed to be — not simplified after the fact.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="code-example">
      <div class="container">
        <span class="label">It's all code</span>
        <p class="section-desc">Hardware description, program logic, and entry point — all in one language.</p>
        <pre><code><span class="comment">// vector table — burned into flash by the linker</span>
<span class="kw">bind</span> <span class="hex">0x00000004</span> <span class="op">=</span> reset<span class="op">::</span>address
<span class="kw">bind</span> <span class="hex">0x0000003c</span> <span class="op">=</span> timer<span class="op">::</span>address

<span class="comment">// hardware registers — volatile load/store aliases</span>
<span class="kw">volatile</span> <span class="type">int</span> uart_dr <span class="op">=</span> <span class="hex">0x40021000</span>
<span class="kw">volatile</span> <span class="type">int</span> uart_sr <span class="op">=</span> <span class="hex">0x40021004</span>

<span class="comment">// classes and templates work anywhere — even bare metal</span>
<span class="kw">template</span> Buffer<span class="op">&lt;</span>T<span class="op">&gt;</span> {
    T value
    <span class="kw">constructor</span>(T v) { self.value <span class="op">=</span> v }
    <span class="kw">function</span> get() T { <span class="kw">return</span> self.value }
}

<span class="comment">// unambiguous program entry point</span>
<span class="kw">entry</span> main {
    Buffer<span class="op">&lt;</span><span class="type">int</span><span class="op">&gt;</span> b <span class="op">=</span> Buffer(<span class="num">42</span>)
    uart_dr <span class="op">=</span> b.get()
}</code></pre>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <span class="label">Language Features</span>
        <div class="feature-grid">
          <div class="feature">
            <h4>Classes &amp; Methods</h4>
            <p>Full OOP with constructors, destructors, and operator overloading.</p>
          </div>
          <div class="feature">
            <h4>Templates</h4>
            <p>Monomorphized generics. <code>Box&lt;int&gt;</code> and <code>Box&lt;float&gt;</code> compile to separate concrete types.</p>
          </div>
          <div class="feature">
            <h4>Structs</h4>
            <p>Memory-layout-only types with explicit padding. Full control over wire format.</p>
          </div>
          <div class="feature">
            <h4>Extern Functions</h4>
            <p>Call into C, assembly, or any foreign ABI. Variadic functions supported.</p>
          </div>
          <div class="feature">
            <h4>Type Aliases</h4>
            <p>Clean aliasing for complex types. Improve readability without runtime cost.</p>
          </div>
          <div class="feature">
            <h4>Defer</h4>
            <p>Resource cleanup that runs when a scope exits, regardless of control flow.</p>
          </div>
          <div class="feature">
            <h4>Address Operations</h4>
            <p><code>value::address</code> and <code>ptr::value</code> for explicit pointer manipulation.</p>
          </div>
          <div class="feature">
            <h4>Strong Typing</h4>
            <p>Explicit casts required. No silent narrowing. No implicit conversions.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="principles">
      <div class="container">
        <span class="label">Design Principles</span>
        <div class="grid">
          <div class="card">
            <h3>No global variables</h3>
            <p>One of the most common sources of bugs and complexity in systems code — gone. State is explicit, scoped, and owned. Libraries handle what they need. Nothing hides.</p>
          </div>
          <div class="card">
            <h3>No OS required</h3>
            <p>Hopper runs on the machine, not on top of an abstraction. Write firmware, bootloaders, and operating systems — Hopper doesn't depend on any of them.</p>
          </div>
          <div class="card">
            <h3>Hardware is just code</h3>
            <p>Vector tables, memory-mapped registers, and interrupt handlers are expressed in Hopper — not in a separate language bolted on the side. One syntax for everything.</p>
          </div>
          <div class="card">
            <h3>No legacy baggage</h3>
            <p>Every feature earns its place. Hopper is shaped by what systems programming should be — not by decisions made in 1972 that nobody can change because everything depends on them.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="layers">
      <div class="container">
        <span class="label">The Vision</span>
        <p class="vision-statement">One language. Three altitudes. Each tier built on the one below it — in Hopper itself.</p>
        <p class="vision-sub">
          Hopper builds the runtime. That runtime becomes the foundation Hopper+ runs on.
          Hopper+ builds the Shell. The same grammar and type system runs at every level —
          <code>int</code> is <code>int</code> everywhere. The language doesn't fracture as you move up the stack.
          You don't learn a new language. You just have more of it available.
        </p>
        <div class="layer-stack">
          <div class="layer top future">
            <div class="layer-info">
              <div class="layer-name">Hopper Shell</div>
              <div class="layer-analogy">like early Python / JS</div>
            </div>
            <div class="layer-desc">An embedded scripting layer that binds to application functionality. Drop it into any Hopper+ application and let users extend behavior without recompiling. Built on Hopper+.</div>
          </div>
          <div class="layer mid future">
            <div class="layer-info">
              <div class="layer-name">Hopper+</div>
              <div class="layer-analogy">like C# / Java</div>
            </div>
            <div class="layer-desc">The application tier. Shares ~90% of Hopper's syntax and type system. Hardware primitives removed, high-level abstractions added. Built entirely on Hopper — no foreign runtime.</div>
          </div>
          <div class="layer bottom">
            <div class="layer-info">
              <div class="layer-name">Hopper</div>
              <div class="layer-analogy">like Assembly / C</div>
            </div>
            <div class="layer-desc">The machine tier. Hardware access, bare metal execution, OS kernels, compilers, firmware. No dependencies. The foundation everything else is built on.</div>
          </div>
        </div>
        <p class="future-note">Hopper+ and Hopper Shell are long-term goals — not a roadmap, a direction.</p>
      </div>
    </section>

    <section class="roadmap">
      <div class="container">
        <span class="label">Roadmap</span>
        <div class="steps">
          <div class="step done">
            <span class="step-label">Now</span>
            <h3>Language Core</h3>
            <p>Functions, classes, templates, structs, <code>entry</code>, <code>bind</code>, <code>volatile</code>, LLVM IR codegen. 13/13 tests passing.</p>
          </div>
          <div class="step">
            <span class="step-label">Next</span>
            <h3>Toolchain</h3>
            <p><code>sizeof(T)</code>, heap allocator, build tool, linker script generator, startup file written in Hopper.</p>
          </div>
          <div class="step">
            <span class="step-label">Then</span>
            <h3>Bare Metal Targets</h3>
            <p>AVR (Arduino Uno), ARM Cortex-M (STM32, RP2040), bare metal stdlib using <code>volatile</code> and <code>bind</code>.</p>
          </div>
          <div class="step goal">
            <span class="step-label">Goal</span>
            <h3>Self-hosting toolchain</h3>
            <p>Write an Arduino program in Hopper. One command. No C toolchain. The compiler, linker, and stdlib all written in Hopper itself.</p>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="container">
        <p>Hopper v0.1 — prototype. Everything is open to change.</p>
      </div>
    </footer>

  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
}

.container {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 2rem;
}

.label {
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: #555;
  margin-bottom: 1.5rem;
}

.section-desc {
  color: #888;
  margin-bottom: 2rem;
  max-width: 560px;
}

/* ── Hero ── */
.hero {
  padding: 7rem 2rem 6rem;
  text-align: center;
  border-bottom: 1px solid #1a1a1a;
}

.hero h1 {
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: -3px;
  color: #ffffff;
}

.tagline {
  margin-top: 1.25rem;
  font-size: 1.25rem;
  color: #ccc;
  font-weight: 500;
}

.sub {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #666;
}

/* ── Thesis ── */
.thesis {
  padding: 5rem 0;
  border-bottom: 1px solid #1a1a1a;
}

.thesis-statement {
  font-size: 1.6rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.4;
  margin-bottom: 2rem;
}

.thesis p {
  color: #888;
  max-width: 640px;
  margin-bottom: 1rem;
}

/* ── What ── */
.what {
  padding: 5rem 0;
  border-bottom: 1px solid #1a1a1a;
}

.what-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.what-card {
  padding: 1.75rem;
  background: #111;
  border: 1px solid #1e1e1e;
  border-radius: 8px;
}

.what-card h3 {
  font-size: 1rem;
  color: #fff;
  margin-bottom: 0.6rem;
}

.what-card p {
  font-size: 0.875rem;
  color: #777;
  line-height: 1.7;
}

/* ── Code ── */
.code-example {
  padding: 5rem 0;
  border-bottom: 1px solid #1a1a1a;
}

pre {
  background: #0a0a0a;
  border: 1px solid #1e1e1e;
  border-radius: 8px;
  padding: 2rem;
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 1.9;
  margin-top: 1.5rem;
}

code {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}

.comment { color: #4a4a4a; }
.kw      { color: #569cd6; }
.type    { color: #4ec9b0; }
.hex     { color: #ce9178; }
.num     { color: #b5cea8; }
.op      { color: #666; }

/* ── Features ── */
.features {
  padding: 5rem 0;
  border-bottom: 1px solid #1a1a1a;
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.feature {
  padding: 1.25rem 1.5rem;
  border-left: 2px solid #1e1e1e;
}

.feature h4 {
  font-size: 0.9rem;
  color: #ddd;
  margin-bottom: 0.35rem;
}

.feature p {
  font-size: 0.825rem;
  color: #666;
  line-height: 1.6;
}

.feature code {
  font-size: 0.78rem;
  color: #569cd6;
  background: #1a1a1a;
  padding: 1px 5px;
  border-radius: 3px;
}

/* ── Principles ── */
.principles {
  padding: 5rem 0;
  border-bottom: 1px solid #1a1a1a;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.card {
  background: #111;
  border: 1px solid #1e1e1e;
  border-radius: 8px;
  padding: 1.5rem;
}

.card h3 {
  font-size: 0.95rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.card p {
  font-size: 0.875rem;
  color: #777;
  line-height: 1.6;
}

.card code {
  font-size: 0.8rem;
  color: #569cd6;
  background: #1a1a1a;
  padding: 1px 5px;
  border-radius: 3px;
}

/* ── Layers ── */
.layers {
  padding: 5rem 0;
  border-bottom: 1px solid #1a1a1a;
}

.vision-statement {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ddd;
  margin-bottom: 1rem;
}

.vision-sub {
  font-size: 0.9rem;
  color: #777;
  max-width: 640px;
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.vision-sub code {
  font-size: 0.82rem;
  color: #569cd6;
  background: #1a1a1a;
  padding: 1px 5px;
  border-radius: 3px;
}

.future-note {
  margin-top: 1.5rem;
  font-size: 0.8rem;
  color: #444;
  font-style: italic;
}

.layer-stack {
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-width: 660px;
}

.layer {
  padding: 1.5rem 1.75rem;
  border-radius: 6px;
  display: flex;
  gap: 2rem;
}

.layer.top    { background: #161b22; border: 1px solid #21262d; }
.layer.mid    { background: #111820; border: 1px solid #1c2230; }
.layer.bottom { background: #0d1117; border: 1px solid #161b22; }
.layer.future { opacity: 0.5; }

.layer-info {
  min-width: 140px;
}

.layer-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: #ccc;
}

.layer.bottom .layer-name { color: #569cd6; }
.layer.mid    .layer-name { color: #4ec9b0; }
.layer.top    .layer-name { color: #aaa; }

.layer-analogy {
  font-size: 0.72rem;
  color: #444;
  margin-top: 0.2rem;
}

.layer-desc {
  font-size: 0.85rem;
  color: #555;
  line-height: 1.7;
}

/* ── Roadmap ── */
.roadmap {
  padding: 5rem 0;
  border-bottom: 1px solid #1a1a1a;
}

.steps {
  border-left: 1px solid #222;
  padding-left: 2rem;
}

.step {
  padding-bottom: 2.5rem;
  position: relative;
}

.step::before {
  content: '';
  position: absolute;
  left: -2.4rem;
  top: 0.4rem;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #222;
  border: 1px solid #333;
}

.step.done::before { background: #569cd6; border-color: #569cd6; }
.step.goal::before { background: #4ec9b0; border-color: #4ec9b0; }

.step-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #555;
}

.step.done .step-label { color: #569cd6; }
.step.goal .step-label { color: #4ec9b0; }

.step h3 {
  font-size: 1rem;
  color: #ddd;
  margin: 0.25rem 0 0.4rem;
}

.step p {
  font-size: 0.875rem;
  color: #666;
  max-width: 540px;
}

.step code {
  font-size: 0.8rem;
  color: #569cd6;
  background: #1a1a1a;
  padding: 1px 5px;
  border-radius: 3px;
}

/* ── Footer ── */
footer {
  padding: 2.5rem 0;
  text-align: center;
}

footer p {
  font-size: 0.8rem;
  color: #444;
}

/* ── Responsive ── */
@media (max-width: 640px) {
  .hero h1        { font-size: 3rem; letter-spacing: -1px; }
  .tagline        { font-size: 1rem; }
  .thesis-statement { font-size: 1.2rem; }
  .what-grid,
  .grid,
  .feature-grid   { grid-template-columns: 1fr; }
  .layer          { flex-direction: column; gap: 0.25rem; }
}
</style>
