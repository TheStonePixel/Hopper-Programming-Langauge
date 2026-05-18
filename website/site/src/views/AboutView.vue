<template>
  <div class="page">
    <header class="page-header">
      <div class="inner">
        <span class="label">About</span>
        <h1>Hopper</h1>
        <p class="sub">A systems and hardware programming language built from the ground up.</p>
      </div>
    </header>

    <section class="section">
      <div class="inner">
        <h2>What is Hopper?</h2>
        <p>
          Hopper is a compiled, statically typed systems language designed for bare-metal hardware
          programming, operating systems, compilers, and high-performance software. It targets LLVM
          and produces native binaries with no runtime overhead.
        </p>
        <p>
          The language is built around a simple idea: the toolchain complexity that plagues C projects
          exists because the language itself failed to express what the programmer needed. Hopper fixes
          that at the language level — vector tables, MMIO registers, and interrupt handlers are all
          first-class language constructs, not workarounds in linker scripts.
        </p>
      </div>
    </section>

    <section class="section alt">
      <div class="inner">
        <h2>Status</h2>
        <p>
          Hopper is in active prototype development. The core language is functional: functions,
          classes, templates, structs, bitfields, enums, interfaces, inline assembly, extern FFI,
          and the full hardware primitive set (<code>bind</code>, <code>strict</code>, <code>entry</code>)
          all compile and run. The test suite covers 500+ assertions.
        </p>
        <p>
          Everything is open to change. The language is being built openly, in public.
        </p>
      </div>
    </section>

    <footer class="page-footer">
      <div class="inner">
        <p>Hopper v0.1 — prototype.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  background: #faf9f6;
}

.inner {
  max-width: 780px;
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
  padding: 4rem 0;
  background: #faf9f6;
  border-bottom: 1px solid #e5e7eb;
}

.section.alt {
  background: #ffffff;
}

.section h2 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.25rem;
}

.section p {
  font-size: 0.975rem;
  color: #4b5563;
  line-height: 1.85;
  margin-bottom: 1rem;
}

.section p:last-child {
  margin-bottom: 0;
}

.section code {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.85rem;
  color: #2563eb;
  background: #eff6ff;
  padding: 1px 6px;
  border-radius: 4px;
}

.page-footer {
  padding: 3rem 0;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
  text-align: center;
}

.page-footer p {
  font-size: 0.85rem;
  color: #9ca3af;
}
</style>
