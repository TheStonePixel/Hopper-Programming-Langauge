<script setup>
import { ref, onMounted } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

// ── Typing animation ──────────────────────────────────────────────────────────

const DEMO_CODE = `strict int GPIO_OUT = 0x20200028

class Led {
    int pin
    constructor(int p) {
        self.pin = p
    }
    function on()  { GPIO_OUT = 1 << self.pin }
    function off() { GPIO_OUT = 0 }
}

entry main {
    Led led = Led(15)
    while (true) {
        led.on()
        led.off()
    }
}`

const typedCode   = ref('')
const phase       = ref('typing')   // 'typing' | 'compiling' | 'welcome'
const welcomeFont = ref('"Inter", sans-serif')
const compileDots = ref('')

const FONTS = [
    '"Georgia", serif',
    '"Courier New", monospace',
    'Impact, fantasy',
    '"Palatino", serif',
    '"Comic Sans MS", cursive',
    '"Arial Black", sans-serif',
    '"Trebuchet MS", sans-serif',
    '"Inter", sans-serif',
]

onMounted(() => {
    let i = 0
    const typeInterval = setInterval(() => {
        typedCode.value = DEMO_CODE.slice(0, ++i)
        if (i >= DEMO_CODE.length) {
            clearInterval(typeInterval)
            setTimeout(() => {
                phase.value = 'compiling'
                let d = 0
                const dotInterval = setInterval(() => {
                    compileDots.value = '.'.repeat((++d % 4))
                }, 250)
                setTimeout(() => {
                    clearInterval(dotInterval)
                    phase.value = 'welcome'
                    let fi = 0
                    const fontInterval = setInterval(() => {
                        welcomeFont.value = FONTS[fi++ % FONTS.length]
                    }, 350)
                    setTimeout(() => {
                        clearInterval(fontInterval)
                        welcomeFont.value = '"Inter", sans-serif'
                    }, 3200)
                }, 1400)
            }, 400)
        }
    }, 22)
})

// ── CLI tool cards ──────────────────────────────────────────────────────────

const tools = [
    { cmd: 'hopper install',  icon: '⬇',  name: 'Install',  desc: 'Add stdlib modules or packages from the registry. Hopper manages dependencies for you — no CMake, no conan, no vcpkg.' },
    { cmd: 'hopper build',    icon: '⚙',  name: 'Build',    desc: 'Compile your project to a native executable. One command, zero config — the project manifest is written in Hopper itself.' },
    { cmd: 'hopper run',      icon: '▶',  name: 'Run',      desc: 'Build and execute in one step. Works on hosted platforms and outputs the exit code for shell scripting.' },
    { cmd: 'hopper test',     icon: '✓',  name: 'Test',     desc: 'Run the built-in test suite. Test functions live alongside the code they test — no separate framework required.' },
    { cmd: 'hopper check',    icon: '🛡',  name: 'Check',   desc: 'Compile with AddressSanitizer, ThreadSanitizer, or UBSan to catch memory errors, data races, and undefined behaviour.' },
    { cmd: 'hopper debug',    icon: '🐛',  name: 'Debug',   desc: 'Launch a debug build with full symbol information. Integrates with GDB and LLDB out of the box.' },
    { cmd: 'hopper profile',  icon: '📊', name: 'Profile',  desc: 'Generate profiling data with perf or Instruments. Find the hot paths before you optimise the wrong thing.' },
    { cmd: 'hopper flash',    icon: '⚡',  name: 'Flash',   desc: 'Write a bare-metal image directly to an SD card or flash device. From source to hardware in one command.' },
    { cmd: 'hopper format',   icon: '✎',  name: 'Format',   desc: 'Reformat source files using the opinionated built-in style. No config — like gofmt, the style is the language.' },
]

// ── Code layer examples ───────────────────────────────────────────────────────

const asmCode = `// Inline assembly — direct x86-64 syscall
function sysWrite(int fd, address buf, int len) int {
    int n = 0
    asm {
        rax = 1     // SYS_write
        rdi = fd    // file descriptor
        rsi = buf   // buffer address
        rdx = len   // byte count
        syscall
        n = rax     // capture return value
    }
    return n
}`

const driverCode = `// Hardware driver — MMIO registers via strict
strict int GPFSEL4 = 0x20200010
strict int GPSET1  = 0x20200020
strict int GPCLR1  = 0x2020002C

class GpioPin {
    int bit
    constructor(int pin) {
        self.bit = pin - 32
        GPFSEL4 = GPFSEL4 | (1 << 21)  // output
    }
    function set()   { GPSET1 = 1 << self.bit }
    function clear() { GPCLR1 = 1 << self.bit }
}`

const libraryCode = `// LED library — built on the GPIO driver
import GpioPin from drivers

function delay(int cycles) {
    int i = 0
    while (i < cycles) { i = i + 1 }
}

class Led {
    GpioPin pin
    constructor(int gpio) {
        self.pin = GpioPin(gpio)
    }
    function on()  { self.pin.set()   }
    function off() { self.pin.clear() }
    function blink(int ms) {
        self.on()
        delay(ms * 250)
        self.off()
        delay(ms * 250)
    }
}`

const mainCode = `// Entry point — clean, readable application code
import Led from lib.led

entry main {
    Led led = Led(47)    // GPIO 47 — Pi Zero ACT LED

    while (true) {
        led.blink(500)   // 1 Hz blink
    }
}`
</script>

<template>
  <div class="page">

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->

    <header class="hero">
      <div class="hero-inner">
        <h1 class="hero-title">The Hopper Programming Language</h1>
        <p class="hero-sub">
          A strongly typed language for hardware, systems, and low-level applications.
        </p>

        <div class="hero-demo">
          <div class="demo-terminal" v-if="phase !== 'welcome'">
            <div class="terminal-bar">
              <span class="dot red" /><span class="dot yellow" /><span class="dot green" />
              <span class="terminal-file">main.hop</span>
            </div>
            <pre class="terminal-body"><code>{{ typedCode }}<span v-if="phase === 'typing'" class="cursor">▊</span></code></pre>
            <div v-if="phase === 'compiling'" class="compile-line">
              <span class="prompt">$</span>
              <span> hopper build main.hop</span>
              <span class="compile-dots">{{ compileDots }}</span>
            </div>
          </div>

          <div v-if="phase === 'welcome'" class="welcome-display">
            <div class="welcome-text" :style="{ fontFamily: welcomeFont }">
              Welcome to Hopper
            </div>
            <p class="welcome-sub">Your program compiled successfully.</p>
          </div>
        </div>
      </div>
    </header>

    <!-- ── Unified Build System ──────────────────────────────────────────── -->

    <section class="toolchain">
      <div class="container">
        <span class="label">Unified Build System</span>
        <p class="section-sub">Install, build, test, debug, profile, and flash — all from one tool. No Makefile. No CMake. No separate package manager.</p>
        <div class="tool-grid">
          <div class="tool-card" v-for="t in tools" :key="t.cmd">
            <div class="tool-header">
              <span class="tool-icon">{{ t.icon }}</span>
              <code class="tool-cmd">{{ t.cmd }}</code>
            </div>
            <p class="tool-desc">{{ t.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── What We're Solving ────────────────────────────────────────────── -->

    <section class="why">
      <div class="container">
        <span class="label">A Different Approach</span>
        <p class="section-sub">Systems programming has three dominant languages. Each one made important trade-offs. Hopper starts from a different set of them.</p>
        <div class="lang-grid">
          <div class="lang-card">
            <div class="lang-name c">C</div>
            <p class="lang-desc">Brilliant simplicity and proven staying power. But C was designed in 1972 for machines with 64 KB of RAM. No generics, no classes, string handling is manual labour, and the toolchain complexity it creates is staggering.</p>
            <p class="lang-take">Hopper inherits C's simplicity and hardware access — without the 50 years of workarounds.</p>
          </div>
          <div class="lang-card">
            <div class="lang-name cpp">C++</div>
            <p class="lang-desc">Extraordinarily powerful, but tries to be everything to everyone. Multiple incompatible paradigms, decades of accumulated features, and no two codebases that agree on which subset to use. The complexity ceiling is enormous.</p>
            <p class="lang-take">Hopper is intentionally focused. One way to do each thing. No subset problem.</p>
          </div>
          <div class="lang-card">
            <div class="lang-name rust">Rust</div>
            <p class="lang-desc">Rigorous memory safety with zero runtime cost — impressive engineering. But the ownership and borrow checker model is a significant cognitive barrier, especially for embedded and real-time work where you just need to write to a register.</p>
            <p class="lang-take">Hopper keeps you close to the metal. Safety through strong types and explicit operations, not through the compiler fighting you.</p>
          </div>
          <div class="lang-card featured">
            <div class="lang-name hopper">Hopper</div>
            <p class="lang-desc">Strongly typed. Hardware-first. Classes, templates, and structs work identically on bare metal and on a full OS. Inline assembly lives in the source file, not in a separate .s file. The toolchain is one command.</p>
            <p class="lang-take">Expressive where it matters. Minimal where it doesn't.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── It's All Code ────────────────────────────────────────────────── -->

    <section class="layers">
      <div class="container">
        <span class="label">It's All Code</span>
        <p class="section-sub">From raw syscalls to clean application logic — one language, one toolchain, one syntax.</p>

        <!-- Row 1: ASM left, description right -->
        <div class="layer-row">
          <div class="layer-code">
            <CodeBlock :code="asmCode" label="Assembly" />
          </div>
          <div class="layer-desc">
            <h3>Inline Assembly</h3>
            <p>Write x86-64 instructions directly inside Hopper functions using scoped <code>asm {}</code> blocks. No string literals, no quotes — register assignments and raw instructions sit alongside normal code.</p>
            <p>The compiler wires Hopper variables directly into LLVM inline asm constraints. Your variables reach the hardware.</p>
          </div>
        </div>

        <div class="layer-connector">
          <span class="connector-dot" /><span class="connector-dot" /><span class="connector-dot" />
        </div>

        <!-- Row 2: description left, driver right -->
        <div class="layer-row reverse">
          <div class="layer-desc">
            <h3>Hardware Driver</h3>
            <p>Memory-mapped I/O registers are declared with <code>strict</code> — named aliases for hardware addresses. Reading or writing them generates direct load/store instructions with no indirection.</p>
            <p>Wrap them in a class and you have a type-safe, zero-overhead driver with no external headers.</p>
          </div>
          <div class="layer-code">
            <CodeBlock :code="driverCode" label="Driver" />
          </div>
        </div>

        <div class="layer-connector">
          <span class="connector-dot" /><span class="connector-dot" /><span class="connector-dot" />
        </div>

        <!-- Row 3: library left, description right -->
        <div class="layer-row">
          <div class="layer-code">
            <CodeBlock :code="libraryCode" label="Library" />
          </div>
          <div class="layer-desc">
            <h3>Library Layer</h3>
            <p>Build higher-level abstractions on top of your drivers using the same class system. Import, compose, and encapsulate — <code>import</code> works identically whether you're on bare metal or a hosted OS.</p>
            <p>No virtual dispatch unless you ask for it. No hidden cost.</p>
          </div>
        </div>

        <div class="layer-connector">
          <span class="connector-dot" /><span class="connector-dot" /><span class="connector-dot" />
        </div>

        <!-- Row 4: description left, main right -->
        <div class="layer-row reverse">
          <div class="layer-desc">
            <h3>Entry Point</h3>
            <p>The application code is clean and readable. <code>entry main</code> is unambiguous — there's no signature confusion, no implicit argc/argv unless you declare them.</p>
            <p>The complexity stays in the layers below. The caller sees the abstraction, not the hardware.</p>
          </div>
          <div class="layer-code">
            <CodeBlock :code="mainCode" label="Main" />
          </div>
        </div>
      </div>
    </section>

    <!-- ── The Separation ───────────────────────────────────────────────── -->

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
      </div>
    </section>

    <!-- ── Footer ───────────────────────────────────────────────────────── -->

    <footer class="site-footer">
      <div class="container">
        <div class="footer-status">
          <span class="status-badge">Pre-Alpha</span>
          <span class="version">Version 0.1.0</span>
        </div>
        <p class="footer-timeline">Expected Alpha: January 2027</p>
        <p class="footer-note">Hopper is under active development. Everything is open to change.</p>
      </div>
    </footer>

  </div>
</template>

<style scoped>
/* ── Layout ─────────────────────────────────────────────────────────────── */
.page { background: #fff; }

.container {
  max-width: 1100px;
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
  margin-bottom: 0.75rem;
}

.section-sub {
  font-size: 1.05rem;
  color: #4b5563;
  max-width: 700px;
  margin-bottom: 2.5rem;
  line-height: 1.7;
}

/* ── Hero ───────────────────────────────────────────────────────────────── */
.hero {
  background: linear-gradient(160deg, #eff6ff 0%, #f9fafb 60%);
  border-bottom: 1px solid #e5e7eb;
  padding: 5rem 0 4rem;
}

.hero-inner {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 5vw;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 900;
  color: #111827;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin: 0 0 1rem;
}

.hero-sub {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #4b5563;
  line-height: 1.6;
  margin: 0 0 2.5rem;
  max-width: 600px;
}

/* ── Demo Terminal ──────────────────────────────────────────────────────── */
.hero-demo {
  max-width: 620px;
}

.demo-terminal {
  background: #0f172a;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.25);
  font-family: 'Fira Code', 'JetBrains Mono', ui-monospace, monospace;
}

.terminal-bar {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1rem;
  background: #1e293b;
}

.dot {
  width: 12px; height: 12px;
  border-radius: 50%;
}
.dot.red    { background: #ef4444; }
.dot.yellow { background: #f59e0b; }
.dot.green  { background: #22c55e; }

.terminal-file {
  margin-left: 0.5rem;
  font-size: 0.78rem;
  color: #94a3b8;
}

.terminal-body {
  margin: 0;
  padding: 1.25rem 1.5rem;
  color: #e2e8f0;
  font-size: 0.82rem;
  line-height: 1.65;
  min-height: 200px;
  white-space: pre;
  overflow: hidden;
}

.terminal-body code {
  font-family: inherit;
}

.cursor {
  animation: blink 1s step-end infinite;
  color: #60a5fa;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

.compile-line {
  padding: 0.6rem 1.5rem;
  background: #0f172a;
  border-top: 1px solid #1e293b;
  font-size: 0.82rem;
  color: #22c55e;
}

.prompt { color: #6366f1; }

.compile-dots {
  display: inline-block;
  min-width: 24px;
  color: #94a3b8;
}

/* ── Welcome Display ────────────────────────────────────────────────────── */
.welcome-display {
  text-align: center;
  padding: 2.5rem 2rem;
  background: #0f172a;
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.25);
}

.welcome-text {
  display: block;
  font-size: clamp(1.5rem, 4vw, 2.75rem);
  font-weight: 700;
  color: #22c55e;
  transition: font-family 0.1s;
  margin-bottom: 0.75rem;
}

.welcome-sub {
  color: #64748b;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  margin: 0;
}

/* ── Toolchain ──────────────────────────────────────────────────────────── */
.toolchain {
  padding: 5rem 0;
  background: #fff;
}

.tool-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

.tool-card {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  transition: border-color 0.15s, box-shadow 0.15s;
}

.tool-card:hover {
  border-color: #93c5fd;
  box-shadow: 0 4px 16px rgba(37,99,235,0.08);
}

.tool-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
}

.tool-icon {
  font-size: 1.1rem;
}

.tool-cmd {
  font-family: 'Fira Code', ui-monospace, monospace;
  font-size: 0.85rem;
  font-weight: 600;
  color: #2563eb;
  background: #eff6ff;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
}

.tool-desc {
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
}

/* ── Why ────────────────────────────────────────────────────────────────── */
.why {
  padding: 5rem 0;
  background: #f9fafb;
  border-top: 1px solid #f3f4f6;
}

.lang-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.25rem;
}

.lang-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1.5rem;
}

.lang-card.featured {
  border-color: #2563eb;
  box-shadow: 0 0 0 1px #2563eb20, 0 4px 20px rgba(37,99,235,0.08);
}

.lang-name {
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}

.lang-name.c    { color: #059669; }
.lang-name.cpp  { color: #7c3aed; }
.lang-name.rust { color: #d97706; }
.lang-name.hopper { color: #2563eb; }

.lang-desc {
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.65;
  margin-bottom: 0.75rem;
}

.lang-take {
  font-size: 0.83rem;
  color: #374151;
  font-style: italic;
  border-left: 2px solid #e5e7eb;
  padding-left: 0.75rem;
  margin: 0;
}

.lang-card.featured .lang-take {
  border-left-color: #2563eb;
  color: #1d4ed8;
}

/* ── Layers (It's All Code) ─────────────────────────────────────────────── */
.layers {
  padding: 5rem 0;
  background: #fff;
}

.layer-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .layer-row { grid-template-columns: 1fr; }
  .layer-row.reverse .layer-desc { order: -1; }
}

.layer-row.reverse .layer-code  { order: 2; }
.layer-row.reverse .layer-desc  { order: 1; }

.layer-desc {
  padding: 1rem 0;
}

.layer-desc h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.75rem;
}

.layer-desc p {
  font-size: 0.9rem;
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 0.75rem;
}

.layer-desc p:last-child { margin-bottom: 0; }

.layer-desc code {
  font-family: 'Fira Code', ui-monospace, monospace;
  font-size: 0.85em;
  background: #eff6ff;
  color: #2563eb;
  padding: 0.1em 0.35em;
  border-radius: 3px;
}

.layer-connector {
  display: flex;
  justify-content: center;
  gap: 6px;
  padding: 2rem 0;
}

.connector-dot {
  display: inline-block;
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #d1d5db;
}

/* ── Separation ─────────────────────────────────────────────────────────── */
.separation {
  padding: 5rem 0;
  background: #f9fafb;
  border-top: 1px solid #f3f4f6;
}

.sep-statement {
  font-size: 1.3rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.45;
  margin: 0 0 1.5rem;
}

.sep-body {
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.75;
  max-width: 720px;
  margin-bottom: 1rem;
}

.sep-example {
  display: flex;
  align-items: stretch;
  gap: 0;
  margin: 2.5rem 0;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
}

.sep-col {
  flex: 1;
  padding: 1.75rem;
  background: #fff;
}

.sep-col.right   { background: #f0fdf4; }
.sep-col.script  { background: #fffbeb; }

.sep-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  flex-shrink: 0;
  background: #f9fafb;
  font-size: 1.25rem;
  font-weight: 800;
  color: #9ca3af;
  border-left: 1px solid #e5e7eb;
  border-right: 1px solid #e5e7eb;
}

.sep-col-label {
  font-size: 0.95rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 0.25rem;
}

.sep-col-label.hopper-plus   { color: #059669; }
.sep-col-label.hopper-script { color: #d97706; }

.sep-col-sub {
  font-size: 0.78rem;
  color: #9ca3af;
  margin-bottom: 0.75rem;
}

.sep-col ul {
  padding-left: 1.1rem;
  margin: 0 0 0.75rem;
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.7;
}

.sep-col-note {
  font-size: 0.78rem;
  font-weight: 600;
  color: #6b7280;
  margin: 0;
}

/* ── Footer ─────────────────────────────────────────────────────────────── */
.site-footer {
  padding: 3rem 0;
  background: #0f172a;
  border-top: 1px solid #1e293b;
  text-align: center;
}

.footer-status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 0.4rem;
}

.status-badge {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: #f59e0b20;
  color: #f59e0b;
  border: 1px solid #f59e0b50;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
}

.version {
  font-size: 0.85rem;
  font-weight: 600;
  color: #94a3b8;
}

.footer-timeline {
  font-size: 0.8rem;
  color: #64748b;
  margin: 0 0 0.25rem;
}

.footer-note {
  font-size: 0.75rem;
  color: #475569;
  margin: 0;
}
</style>
