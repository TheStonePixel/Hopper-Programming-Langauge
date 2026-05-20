<template>
  <div class="page">

    <header class="page-header">
      <div class="inner">
        <span class="label">Roadmap</span>
        <h1>Where Hopper Is</h1>
        <p class="sub">What's built, what's in progress, and where it's going.</p>
      </div>
    </header>

    <!-- Design Principles -->
    <section class="section alt">
      <div class="inner">
        <h2>Design principles</h2>
        <div class="principles">

          <div class="principle">
            <div class="principle-num">01</div>
            <h3>Hardware is first-class</h3>
            <p>
              <code>strict</code>, <code>bind</code>, <code>bitfield</code>, and <code>entry</code>
              are keywords. A complete bare-metal ARM program — vector table, MMIO registers,
              reset handler, all of it — is expressible in pure Hopper with no assembly files
              and no linker script.
            </p>
          </div>

          <div class="principle">
            <div class="principle-num">02</div>
            <h3>Nothing is implicit</h3>
            <p>
              No implicit type conversions, no implicit allocations, no implicit copies.
              Every cast is spelled out with <code>cast</code>. Every heap allocation is a
              keyword. The reader always knows exactly what the machine is doing — because
              the programmer had to write it explicitly.
            </p>
          </div>

          <div class="principle">
            <div class="principle-num">03</div>
            <h3>Correctness is built in</h3>
            <p>
              <code>requires</code> and <code>ensures</code> are contract annotations, not
              comments. <code>invariant</code> is a loop assertion, not a convention.
              In debug builds they are runtime checks; in <code>--strict</code> mode they
              are compile-time proofs. Production builds strip them to zero overhead.
            </p>
          </div>

          <div class="principle">
            <div class="principle-num">04</div>
            <h3>One language, full stack</h3>
            <p>
              The same language that blinks an LED on bare-metal ARM also sorts data
              structures, reads JSON, and drives a TUI. No embedded dialect, no unsafe
              subset. The hardware primitives are additive — they do not restrict what
              the language can express elsewhere.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- Language at a glance -->
    <section class="section">
      <div class="inner">
        <h2>Language at a glance</h2>
        <div class="glance-grid">
          <div class="glance-col">
            <div class="glance-group">
              <div class="glance-heading">Type system</div>
              <ul>
                <li>Primitive types: <code>int</code>, <code>float</code>, <code>byte</code>, <code>bool</code>, <code>char</code>, <code>bit</code>, <code>address</code>, <code>string</code></li>
                <li>User types: <code>struct</code>, <code>class</code>, <code>enum</code>, <code>bitfield</code>, <code>alias</code></li>
                <li>Generics via monomorphized <code>template</code></li>
                <li>Compile-time <code>interface</code> contracts (no vtable)</li>
                <li>No implicit conversions — explicit <code>cast</code> everywhere</li>
              </ul>
            </div>
            <div class="glance-group">
              <div class="glance-heading">Memory</div>
              <ul>
                <li><code>allocate</code> / <code>deallocate</code> keywords</li>
                <li>Smart pointers: <code>Unique&lt;T&gt;</code>, <code>Shared&lt;T&gt;</code>, <code>Pointer&lt;T&gt;</code></li>
                <li><code>defer</code> for guaranteed cleanup</li>
                <li><code>Result&lt;T&gt;</code> for recoverable errors</li>
                <li>No garbage collector, no runtime</li>
              </ul>
            </div>
          </div>
          <div class="glance-col">
            <div class="glance-group">
              <div class="glance-heading">Hardware</div>
              <ul>
                <li><code>strict</code> — volatile MMIO register alias</li>
                <li><code>bind</code> — interrupt vector table entry</li>
                <li><code>bitfield</code> — bit-packed register layout</li>
                <li><code>entry</code> — program entry / reset handler</li>
                <li>Targets: x86-64 Linux, ARMv6 bare-metal</li>
              </ul>
            </div>
            <div class="glance-group">
              <div class="glance-heading">Correctness</div>
              <ul>
                <li><code>requires</code> / <code>ensures</code> function contracts</li>
                <li><code>invariant</code> loop assertions</li>
                <li><code>constrain</code> range checks on assignment</li>
                <li><code>--release</code>: contracts stripped, zero cost</li>
                <li><code>--strict</code>: violations are compile-time errors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Status -->
    <section class="section alt">
      <div class="inner">
        <h2>Current status</h2>
        <p>
          Hopper is in active prototype development. The core language is complete and
          functional. The toolchain compiles Hopper source to native binaries via LLVM,
          with 594 passing assertions across the full test suite.
        </p>
        <div class="status-grid">
          <div class="status-col">
            <div class="status-heading">Done</div>
            <ul class="status-list done">
              <li>Full grammar and ANTLR4 parser</li>
              <li>LLVM IR code generator</li>
              <li>All primitive types and operators</li>
              <li>Classes, structs, templates, enums, interfaces</li>
              <li>Inline assembly, extern FFI</li>
              <li>Hardware keywords: <code>strict</code>, <code>bind</code>, <code>bitfield</code>, <code>entry</code></li>
              <li>Contract system: <code>requires</code>, <code>ensures</code>, <code>invariant</code>, <code>constrain</code></li>
              <li>Bare-metal ARMv6 target</li>
              <li>Standard library: 20+ modules</li>
              <li>594-assertion test suite</li>
              <li>VS Code syntax extension</li>
            </ul>
          </div>
          <div class="status-col">
            <div class="status-heading">In progress</div>
            <ul class="status-list inprogress">
              <li>Self-hosted compiler (bootstrap)</li>
              <li>Parser written in Hopper</li>
              <li>LLVM IR emitter written in Hopper</li>
            </ul>
            <div class="status-heading" style="margin-top: 1.5rem">Planned</div>
            <ul class="status-list planned">
              <li>Error propagation operator (<code>?</code> / <code>try</code>)</li>
              <li>LSP language server</li>
              <li><code>hopper fmt</code>, <code>hopper debug</code> CLI commands</li>
              <li>Package registry</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision -->
    <section class="section">
      <div class="inner">
        <h2>Where it's going</h2>
        <p>
          The immediate goal is self-hosting — a Hopper compiler written in Hopper, with
          no Node.js dependency in the compilation path. This is the milestone that closes
          the feedback loop: the language must be expressive enough to implement itself.
        </p>
        <p>
          Beyond that: a package registry built on the existing <code>hopper.json</code>
          manifest format, a custom bytecode IR for faster compilation and a smaller
          toolchain binary, and eventually a JIT layer for hot-path optimization in
          long-running programs.
        </p>
        <p>
          The long-term vision is a single statically-linked binary — compiler, formatter,
          package manager, debugger — written entirely in Hopper, distributed with no
          external dependencies.
        </p>
      </div>
    </section>

  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  background: #faf9f6;
}

.inner {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 5vw;
}

.label {
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #9ca3af;
  margin-bottom: 1rem;
  font-weight: 600;
}

.page-header {
  background: #ffffff;
  border-bottom: 2px solid #e5e7eb;
  padding: 4rem 0 3.5rem;
}

.page-header h1 {
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: -2px;
  color: #111827;
  margin-bottom: 0.75rem;
}

.page-header .sub {
  font-size: 1.05rem;
  color: #6b7280;
}

.section {
  padding: 4.5rem 0;
  border-bottom: 1px solid #e5e7eb;
  background: #faf9f6;
}

.section.alt { background: #ffffff; }

.section h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
  padding-bottom: 0.6rem;
  border-bottom: 2px solid #e5e7eb;
}

.section p {
  font-size: 0.975rem;
  color: #4b5563;
  line-height: 1.9;
  margin-bottom: 1rem;
  max-width: 680px;
}

.section p code {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.85em;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 3px;
  padding: 0.1em 0.35em;
  color: #1e293b;
}

/* Principles */
.principles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.principle {
  background: #faf9f6;
  border: 1.5px solid #e5e7eb;
  border-radius: 10px;
  padding: 1.75rem;
}

.section.alt .principle { background: #ffffff; }

.principle-num {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #2563eb;
  margin-bottom: 0.6rem;
}

.principle h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.65rem;
}

.principle p {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.75;
  margin: 0;
  max-width: none;
}

.principle p code {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.85em;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 3px;
  padding: 0.1em 0.35em;
  color: #1e293b;
}

/* Glance */
.glance-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
}

.glance-group { margin-bottom: 1.75rem; }
.glance-group:last-child { margin-bottom: 0; }

.glance-heading {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #9ca3af;
  margin-bottom: 0.75rem;
}

.glance-group ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.glance-group li {
  font-size: 0.9rem;
  color: #4b5563;
  line-height: 1.6;
  padding-left: 1rem;
  position: relative;
}

.glance-group li::before {
  content: '·';
  position: absolute;
  left: 0;
  color: #2563eb;
  font-weight: 700;
}

.glance-group li code {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.82em;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 3px;
  padding: 0.1em 0.3em;
  color: #1e293b;
}

/* Status */
.status-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  margin-top: 1.5rem;
}

.status-heading {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #9ca3af;
  margin-bottom: 0.75rem;
}

.status-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.status-list li {
  font-size: 0.9rem;
  color: #4b5563;
  line-height: 1.6;
  padding-left: 1.4rem;
  position: relative;
}

.status-list.done li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #16a34a;
  font-size: 0.8rem;
  font-weight: 700;
  top: 0.05em;
}

.status-list.inprogress li::before {
  content: '◐';
  position: absolute;
  left: 0;
  color: #2563eb;
  font-size: 0.8rem;
  top: 0.05em;
}

.status-list.planned li::before {
  content: '○';
  position: absolute;
  left: 0;
  color: #d1d5db;
  font-size: 0.8rem;
  top: 0.05em;
}

.status-list li code {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.82em;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 3px;
  padding: 0.1em 0.3em;
  color: #1e293b;
}

@media (max-width: 768px) {
  .principles  { grid-template-columns: 1fr; }
  .glance-grid { grid-template-columns: 1fr; }
  .status-grid { grid-template-columns: 1fr; }
  .page-header h1 { font-size: 2.75rem; }
}
</style>
