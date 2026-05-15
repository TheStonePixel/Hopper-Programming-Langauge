<script setup>
import { RouterLink } from 'vue-router'
</script>

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

    <section class="separation">
      <div class="container">
        <span class="label">The Separation</span>
        <p class="sep-statement">
          Hopper is intentionally hostile to application development.<br>
          That friction is the feature.
        </p>
        <p class="sep-body">
          C++ tried to be a systems language and an application language at the same time.
          The result is a language so complex that no two codebases agree on which subset to use.
          Decades of committees, dialects, and footguns — because the boundary between
          "close to the metal" and "close to the programmer" was never enforced.
        </p>
        <p class="sep-body">
          Hopper enforces it by design. No exceptions. No garbage collector. No closures,
          no async, no string class. When an application developer picks up Hopper and tries
          to build a web interface, they hit a wall. That wall says: <em>you want Hopper+.</em>
        </p>
        <div class="sep-example">
          <div class="sep-col">
            <div class="sep-col-label">Hopper</div>
            <div class="sep-col-sub">The foundation</div>
            <ul>
              <li>TCP socket handling</li>
              <li>Connection pooling</li>
              <li>Request parsing</li>
              <li>Memory management</li>
              <li>Raw syscalls</li>
            </ul>
            <p class="sep-col-note">What makes it fast.</p>
          </div>
          <div class="sep-divider">+</div>
          <div class="sep-col right">
            <div class="sep-col-label hopper-plus">Hopper+</div>
            <div class="sep-col-sub">The interface</div>
            <ul>
              <li>Route handlers</li>
              <li>Middleware</li>
              <li>Request / Response objects</li>
              <li>JSON, templates, strings</li>
              <li>Exception handling</li>
            </ul>
            <p class="sep-col-note">What makes it ergonomic.</p>
          </div>
          <div class="sep-divider">+</div>
          <div class="sep-col script">
            <div class="sep-col-label hopper-script">Hopper Script</div>
            <div class="sep-col-sub">The extension layer</div>
            <ul>
              <li>Shell scripting</li>
              <li>Website interactivity</li>
              <li>Plugin and mod systems</li>
              <li>User-defined behavior</li>
              <li>Embedded in any Hopper+ app</li>
            </ul>
            <p class="sep-col-note">What makes it extensible.</p>
          </div>
        </div>
        <p class="sep-payoff">
          The application developer writes route handlers in Hopper+. Every byte that moves
          through the network is handled by Hopper underneath. And when the end user wants to
          extend the application — write a shell script, add a plugin, mod a game — they reach
          for Hopper Script. Like Lua in a game engine, or Python in Blender. One language family,
          owned end to end. No foreign boundary at any layer.
        </p>
      </div>
    </section>

    <section class="code-example">
      <div class="container">
        <span class="label">It's all code</span>
        <p class="section-desc">Hardware description, program logic, and entry point — all in one language.</p>
        <RouterLink to="/vs-c" class="compare-link">See Hopper vs C: memory operations side by side →</RouterLink>
        <pre><code><span class="comment">// vector table — burned into flash by the linker</span>
<span class="kw">bind</span> <span class="hex">0x00000004</span> <span class="op">=</span> reset<span class="op">::</span>address
<span class="kw">bind</span> <span class="hex">0x0000003c</span> <span class="op">=</span> timer<span class="op">::</span>address

<span class="comment">// hardware registers — strict load/store aliases</span>
<span class="kw">strict</span> <span class="type">int</span> uart_dr <span class="op">=</span> <span class="hex">0x40021000</span>
<span class="kw">strict</span> <span class="type">int</span> uart_sr <span class="op">=</span> <span class="hex">0x40021004</span>

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
            <p>Functions, classes, templates, structs, <code>entry</code>, <code>bind</code>, <code>strict</code>, LLVM IR codegen. 13/13 tests passing.</p>
          </div>
          <div class="step">
            <span class="step-label">Next</span>
            <h3>Toolchain</h3>
            <p><code>sizeof(T)</code>, heap allocator, build tool, linker script generator, startup file written in Hopper.</p>
          </div>
          <div class="step">
            <span class="step-label">Then</span>
            <h3>Bare Metal Targets</h3>
            <p>AVR (Arduino Uno), ARM Cortex-M (STM32, RP2040), bare metal stdlib using <code>strict</code> and <code>bind</code>.</p>
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
/* ── Palette ──────────────────────────────────────────
   blue:   #2563eb   (Hopper)
   green:  #059669   (Hopper+)
   amber:  #d97706   (Hopper Script)
   bg:     #faf9f6   (warm off-white)
   card:   #ffffff
   text:   #111827
   muted:  #6b7280
   border: #e5e7eb
──────────────────────────────────────────────────── */
.page {
  min-height: 100vh;
  background: #faf9f6;
}

.container {
  width: 100%;
  padding: 0 5vw;
}

.label {
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #9ca3af;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.section-desc {
  color: #6b7280;
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.7;
}

/* ── Hero ── */
.hero {
  padding: 9rem 5vw 8rem;
  background: #ffffff;
  border-bottom: 2px solid #e5e7eb;
}

.hero-inner {
  max-width: 900px;
}

.hero h1 {
  font-size: 9rem;
  font-weight: 800;
  letter-spacing: -6px;
  color: #111827;
  line-height: 0.9;
  margin-bottom: 2.5rem;
}

.tagline {
  font-size: 1.5rem;
  color: #374151;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.sub {
  font-size: 1.05rem;
  color: #9ca3af;
}

/* ── Thesis ── */
.thesis {
  padding: 6rem 0;
  background: #faf9f6;
  border-bottom: 1px solid #e5e7eb;
}

.thesis-statement {
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.3;
  margin-bottom: 2rem;
  max-width: 860px;
}

.thesis p {
  color: #6b7280;
  max-width: 780px;
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.8;
}

/* ── What ── */
.what {
  padding: 6rem 0;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
}

.what-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.what-card {
  padding: 2rem;
  background: #faf9f6;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  border-top: 3px solid #2563eb;
}

.what-card:nth-child(2) { border-top-color: #059669; }
.what-card:nth-child(3) { border-top-color: #d97706; }
.what-card:nth-child(4) { border-top-color: #7c3aed; }

.what-card h3 {
  font-size: 1.05rem;
  color: #111827;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.what-card p {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.7;
}

.compare-link {
  display: inline-block;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid #bfdbfe;
  padding-bottom: 2px;
  transition: color 0.15s, border-color 0.15s;
}

.compare-link:hover {
  color: #1d4ed8;
  border-color: #2563eb;
}

/* ── Separation ── */
.separation {
  padding: 6rem 0;
  background: #faf9f6;
  border-bottom: 1px solid #e5e7eb;
}

.sep-statement {
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.3;
  margin-bottom: 2rem;
  max-width: 860px;
}

.sep-body {
  font-size: 1rem;
  color: #6b7280;
  max-width: 860px;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.sep-body em {
  color: #111827;
  font-style: normal;
  font-weight: 600;
}

.sep-example {
  display: flex;
  align-items: flex-start;
  gap: 0;
  margin: 3rem 0;
}

.sep-col {
  flex: 1;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-top: 3px solid #2563eb;
  border-radius: 12px;
  padding: 2rem;
}

.sep-col.right {
  border-top-color: #059669;
}

.sep-col.script {
  border-top-color: #d97706;
}

.sep-col-label {
  font-size: 1rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 0.2rem;
}

.sep-col-label.hopper-plus  { color: #059669; }
.sep-col-label.hopper-script { color: #d97706; }

.sep-col-sub {
  font-size: 0.7rem;
  color: #9ca3af;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
}

.sep-col ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1.25rem;
}

.sep-col ul li {
  font-size: 0.9rem;
  color: #374151;
  padding: 0.4rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.sep-col ul li::before {
  content: '→ ';
  color: #d1d5db;
}

.sep-col-note {
  font-size: 0.8rem;
  color: #9ca3af;
  font-style: italic;
}

.sep-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  font-size: 1.25rem;
  color: #d1d5db;
  margin-top: 3rem;
  flex-shrink: 0;
}

.sep-payoff {
  font-size: 1rem;
  color: #6b7280;
  max-width: 860px;
  line-height: 1.8;
}

.sep-payoff em {
  color: #111827;
  font-style: normal;
  font-weight: 600;
}

/* ── Code ── */
.code-example {
  padding: 6rem 0;
  background: #1e1e2e;
  border-bottom: 1px solid #e5e7eb;
}

.code-example .label { color: #6272a4; }
.code-example .section-desc { color: #8892b0; }
.code-example .compare-link {
  color: #79b8ff;
  border-bottom-color: #2a4a7a;
}
.code-example .compare-link:hover { color: #a8d8ff; border-bottom-color: #79b8ff; }

pre {
  background: #12121e;
  border: 1px solid #2d2d3d;
  border-radius: 12px;
  padding: 2.5rem;
  overflow-x: auto;
  font-size: 0.9rem;
  line-height: 2;
  margin-top: 1.5rem;
}

code {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}

.comment { color: #44475a; }
.kw      { color: #79b8ff; }
.type    { color: #56d364; }
.hex     { color: #f78c6c; }
.num     { color: #e0af68; }
.op      { color: #6272a4; }

/* ── Features ── */
.features {
  padding: 6rem 0;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}

.feature {
  padding: 1.75rem 2rem;
  border-left: 3px solid #2563eb;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
}

.feature:nth-child(4n+2) { border-left-color: #059669; }
.feature:nth-child(4n+3) { border-left-color: #d97706; }
.feature:nth-child(4n+4) { border-left-color: #7c3aed; }

.feature h4 {
  font-size: 0.95rem;
  color: #111827;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.feature p {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.6;
}

.feature code {
  font-size: 0.8rem;
  color: #2563eb;
  background: #eff6ff;
  padding: 1px 5px;
  border-radius: 4px;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}

/* ── Principles ── */
.principles {
  padding: 6rem 0;
  background: #faf9f6;
  border-bottom: 1px solid #e5e7eb;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem;
}

.card h3 {
  font-size: 1rem;
  color: #111827;
  margin-bottom: 0.6rem;
  font-weight: 600;
}

.card p {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.7;
}

.card code {
  font-size: 0.82rem;
  color: #2563eb;
  background: #eff6ff;
  padding: 1px 5px;
  border-radius: 4px;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}

/* ── Layers ── */
.layers {
  padding: 6rem 0;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
}

.vision-statement {
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  max-width: 860px;
}

.vision-sub {
  font-size: 1rem;
  color: #6b7280;
  max-width: 860px;
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.vision-sub code {
  font-size: 0.85rem;
  color: #2563eb;
  background: #eff6ff;
  padding: 1px 6px;
  border-radius: 4px;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}

.future-note {
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: #9ca3af;
  font-style: italic;
}

.layer-stack {
  display: flex;
  flex-direction: column;
  gap: 3px;
  max-width: 1000px;
}

.layer {
  padding: 1.75rem 2rem;
  border-radius: 10px;
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
}

.layer.top    { background: #fefce8; border: 1px solid #fde68a; }
.layer.mid    { background: #f0fdf4; border: 1px solid #bbf7d0; }
.layer.bottom { background: #eff6ff; border: 1px solid #bfdbfe; }
.layer.future { opacity: 0.6; }

.layer-info {
  min-width: 160px;
}

.layer-name {
  font-size: 1rem;
  font-weight: 700;
}

.layer.bottom .layer-name { color: #2563eb; }
.layer.mid    .layer-name { color: #059669; }
.layer.top    .layer-name { color: #d97706; }

.layer-analogy {
  font-size: 0.72rem;
  color: #9ca3af;
  margin-top: 0.25rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.layer-desc {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.7;
}

/* ── Roadmap ── */
.roadmap {
  padding: 6rem 0;
  background: #faf9f6;
  border-bottom: 1px solid #e5e7eb;
}

.steps {
  border-left: 2px solid #e5e7eb;
  padding-left: 2.5rem;
}

.step {
  padding-bottom: 2.5rem;
  position: relative;
}

.step::before {
  content: '';
  position: absolute;
  left: -2.85rem;
  top: 0.4rem;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #e5e7eb;
  border: 2px solid #d1d5db;
}

.step.done::before { background: #2563eb; border-color: #2563eb; }
.step.goal::before { background: #059669; border-color: #059669; }

.step-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #9ca3af;
  font-weight: 600;
}

.step.done .step-label { color: #2563eb; }
.step.goal .step-label { color: #059669; }

.step h3 {
  font-size: 1.05rem;
  color: #111827;
  margin: 0.3rem 0 0.5rem;
  font-weight: 600;
}

.step p {
  font-size: 0.9rem;
  color: #6b7280;
  max-width: 600px;
  line-height: 1.7;
}

.step code {
  font-size: 0.82rem;
  color: #2563eb;
  background: #eff6ff;
  padding: 1px 5px;
  border-radius: 4px;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}

/* ── Footer ── */
footer {
  padding: 3rem 0;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
  text-align: center;
}

footer p {
  font-size: 0.85rem;
  color: #9ca3af;
}
</style>
