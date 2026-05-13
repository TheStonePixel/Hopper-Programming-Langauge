<template>
  <div class="page">

    <header class="hero">
      <div class="hero-inner">
        <h1>Hopper</h1>
        <p class="tagline">A bare-metal systems language that compiles to LLVM IR.</p>
      </div>
    </header>

    <section class="thesis">
      <div class="container">
        <h2>The Thesis</h2>
        <p class="thesis-statement">
          The toolchain is complicated because the language failed.<br>
          Fix the language, and the toolchain becomes simple.
        </p>
        <p>
          Every bare-metal C project ships with a linker script, a startup file, a Makefile,
          and a handful of pragma hacks. That complexity isn't accidental — it's the bill
          that comes due for every design decision the language couldn't make cleanly.
        </p>
        <p>
          Hopper's answer is to make hardware description part of the language itself.
          Not flags. Not directives. Just code.
        </p>
      </div>
    </section>

    <section class="code-example">
      <div class="container">
        <h2>It's all code</h2>
        <pre><code><span class="comment">// vector table — burned into flash by the linker</span>
<span class="kw">bind</span> <span class="hex">0x00000004</span> <span class="op">=</span> reset<span class="op">::</span>address
<span class="kw">bind</span> <span class="hex">0x0000003c</span> <span class="op">=</span> timer<span class="op">::</span>address

<span class="comment">// hardware registers — volatile load/store aliases</span>
<span class="kw">volatile</span> <span class="type">int</span> uart_dr <span class="op">=</span> <span class="hex">0x40021000</span>
<span class="kw">volatile</span> <span class="type">int</span> uart_sr <span class="op">=</span> <span class="hex">0x40021004</span>

<span class="comment">// unambiguous program entry point</span>
<span class="kw">entry</span> main {
    uart_dr <span class="op">=</span> <span class="num">65</span>
}</code></pre>
        <p class="caption">No linker script. No startup assembly. No build flags.</p>
      </div>
    </section>

    <section class="principles">
      <div class="container">
        <h2>Design Principles</h2>
        <div class="grid">
          <div class="card">
            <h3>No global variables</h3>
            <p>Program-lifetime state lives in a Runtime class on the stack. <code>bind</code> and <code>volatile</code> are hardware descriptions, not variables.</p>
          </div>
          <div class="card">
            <h3>No OS required</h3>
            <p>Hopper is designed for freestanding, bare-metal execution. An OS can run on top of Hopper — it is not a dependency of it.</p>
          </div>
          <div class="card">
            <h3>Self-describing programs</h3>
            <p>A Hopper program describes its own hardware layout. The language and the linker speak the same language because they are the same language.</p>
          </div>
          <div class="card">
            <h3>Declarative, not imperative</h3>
            <p>You don't tell the toolchain how to operate. You describe what exists, and the toolchain figures out the rest.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="roadmap">
      <div class="container">
        <h2>Roadmap</h2>
        <div class="steps">
          <div class="step done">
            <span class="step-label">Now</span>
            <h3>Language Core</h3>
            <p>Functions, classes, templates, structs, <code>entry</code>, <code>bind</code>, <code>volatile</code>, LLVM IR codegen.</p>
          </div>
          <div class="step">
            <span class="step-label">Next</span>
            <h3>Toolchain</h3>
            <p><code>sizeof(T)</code>, heap allocator, build tool, linker script generator, startup file in Hopper.</p>
          </div>
          <div class="step">
            <span class="step-label">Then</span>
            <h3>Bare Metal Targets</h3>
            <p>AVR (Arduino Uno), ARM Cortex-M (STM32, RP2040), bare metal stdlib.</p>
          </div>
          <div class="step goal">
            <span class="step-label">Goal</span>
            <h3>One Command</h3>
            <p>Write an Arduino program in Hopper. One command. No C toolchain.</p>
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

/* ── Hero ── */
.hero {
  padding: 6rem 2rem 5rem;
  text-align: center;
  border-bottom: 1px solid #1e1e1e;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: -2px;
  color: #ffffff;
}

.tagline {
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #888;
}

/* ── Thesis ── */
.thesis {
  padding: 5rem 0;
  border-bottom: 1px solid #1e1e1e;
}

.thesis h2 {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #555;
  margin-bottom: 1.5rem;
}

.thesis-statement {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.4;
  margin-bottom: 2rem;
}

.thesis p {
  color: #999;
  max-width: 620px;
  margin-bottom: 1rem;
}

/* ── Code example ── */
.code-example {
  padding: 5rem 0;
  border-bottom: 1px solid #1e1e1e;
}

.code-example h2 {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #555;
  margin-bottom: 1.5rem;
}

pre {
  background: #111;
  border: 1px solid #222;
  border-radius: 8px;
  padding: 1.75rem;
  overflow-x: auto;
  font-size: 0.9rem;
  line-height: 1.8;
}

code {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}

.comment { color: #555; }
.kw      { color: #569cd6; }
.type    { color: #4ec9b0; }
.hex     { color: #ce9178; }
.num     { color: #b5cea8; }
.op      { color: #888; }

.caption {
  margin-top: 1rem;
  font-size: 0.85rem;
  color: #555;
}

/* ── Principles ── */
.principles {
  padding: 5rem 0;
  border-bottom: 1px solid #1e1e1e;
}

.principles h2 {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #555;
  margin-bottom: 2rem;
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
  color: #ffffff;
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

/* ── Roadmap ── */
.roadmap {
  padding: 5rem 0;
  border-bottom: 1px solid #1e1e1e;
}

.roadmap h2 {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #555;
  margin-bottom: 2rem;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 0;
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
  background: #333;
  border: 1px solid #444;
}

.step.done::before {
  background: #569cd6;
  border-color: #569cd6;
}

.step.goal::before {
  background: #4ec9b0;
  border-color: #4ec9b0;
}

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
  margin: 0.25rem 0 0.5rem;
}

.step p {
  font-size: 0.875rem;
  color: #666;
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
  padding: 2rem 0;
  text-align: center;
}

footer p {
  font-size: 0.8rem;
  color: #444;
}

/* ── Responsive ── */
@media (max-width: 600px) {
  .hero h1 { font-size: 2.5rem; }
  .thesis-statement { font-size: 1.2rem; }
  .grid { grid-template-columns: 1fr; }
}
</style>
