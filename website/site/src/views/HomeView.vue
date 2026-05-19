<script setup>
import { ref, onMounted } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

// ── Hero typing animation ────────────────────────────────────────────────────

const DEMO_CODE = `// welcome.hop — a complete Hopper program

import io from std

enum Mood { Excited, Curious, Ready }

struct Greeter {
    string name
    Mood   mood
}

template<T>
function describe(T item) {
    io.print("Describing: " + item.name)
}

class WelcomeMessage {
    Greeter greeter
    string  language

    constructor(string lang) {
        self.language = lang
        self.greeter  = Greeter("Hopper", Mood.Excited)
    }

    function display() {
        describe(self.greeter)
        io.print("Welcome to " + self.language + "!")
    }
}

entry main {
    WelcomeMessage msg = WelcomeMessage("Hopper")
    msg.display()
}`

const typedCode   = ref('')
const phase       = ref('typing')   // 'typing' | 'compiling' | 'welcome' | 'done'
const welcomeFont = ref('"Inter", sans-serif')
const compileDots = ref('')
const fadeOut     = ref(false)

const FONTS = [
    'Impact, fantasy',
    '"Georgia", serif',
    '"Courier New", monospace',
    '"Palatino Linotype", serif',
    '"Comic Sans MS", cursive',
    '"Arial Black", sans-serif',
    '"Trebuchet MS", sans-serif',
    '"Brush Script MT", cursive',
    '"Copperplate", fantasy',
    '"Inter", sans-serif',
]

onMounted(() => {
    let i = 0
    const typeInterval = setInterval(() => {
        typedCode.value = DEMO_CODE.slice(0, ++i)
        if (i >= DEMO_CODE.length) {
            clearInterval(typeInterval)

            // brief pause, then show compile line
            setTimeout(() => {
                phase.value = 'compiling'
                let d = 0
                const dotInterval = setInterval(() => {
                    compileDots.value = '.'.repeat((++d % 4))
                }, 200)

                // compile finishes → show welcome
                setTimeout(() => {
                    clearInterval(dotInterval)
                    phase.value = 'welcome'

                    let fi = 0
                    const fontInterval = setInterval(() => {
                        welcomeFont.value = FONTS[fi++ % FONTS.length]
                    }, 550)

                    // settle on final font, then fade to static title
                    setTimeout(() => {
                        clearInterval(fontInterval)
                        welcomeFont.value = '"Inter", sans-serif'
                        setTimeout(() => {
                            fadeOut.value = true
                            setTimeout(() => { phase.value = 'done' }, 600)
                        }, 800)
                    }, 6000)
                }, 1200)
            }, 500)
        }
    }, 18)
})

// ── Code layers ──────────────────────────────────────────────────────────────

const layerTypes = `// Layer 1 — Enums and structs: the building blocks

enum Status { Active, Idle, Done }

struct Job {
    int    id
    Status status
    int    priority
}

function isReady(Job j) bool {
    return j.status == Status.Idle && j.priority > 0
}`

const layerTemplates = `// Layer 2 — Templates: write once, works for any type

template<T>
struct Queue {
    T   head
    int count
}

template<T>
function enqueue(Queue<T> q, T item) Queue<T> {
    q.head  = item
    q.count = q.count + 1
    return q
}

template<T>
function size(Queue<T> q) int {
    return q.count
}`

const layerClasses = `// Layer 3 — Classes compose structs and templates

import Job   from jobs
import Queue from std.collections

class Scheduler {
    Queue<Job> queue
    int        processed

    constructor() {
        self.queue     = Queue(0)
        self.processed = 0
    }

    function submit(Job j) {
        self.queue = enqueue(self.queue, j)
    }

    function run() {
        if (isReady(self.queue.head)) {
            self.processed = self.processed + 1
        }
    }
}`

const layerEntry = `// Layer 4 — Entry: clean program start, no boilerplate

import Scheduler from scheduler
import Job       from jobs
import Status    from jobs

entry main {
    Scheduler s = Scheduler()

    s.submit(Job(1, Status.Idle, 10))
    s.submit(Job(2, Status.Idle,  5))
    s.submit(Job(3, Status.Done,  1))

    s.run()
}`

// ── CLI tools ────────────────────────────────────────────────────────────────

const tools = [
    { cmd: 'install',  desc: 'Add packages from the stdlib or registry. Hopper manages dependencies — no CMake, no vcpkg, no Makefile.' },
    { cmd: 'build',    desc: 'Compile to a native executable. Zero config. The project manifest is written in Hopper itself.' },
    { cmd: 'run',      desc: 'Build and execute in one step. Exit code is forwarded for shell scripting.' },
    { cmd: 'test',     desc: 'Run the built-in test suite. Test functions live next to the code they test.' },
    { cmd: 'check',    desc: 'Compile with AddressSanitizer, ThreadSanitizer, or UBSan to catch memory and race bugs early.' },
    { cmd: 'debug',    desc: 'Full symbol debug build. Integrates with GDB and LLDB out of the box.' },
    { cmd: 'profile',  desc: 'Generate profiling data via perf or Instruments. Find the hot paths before you optimise.' },
    { cmd: 'flash',    desc: 'Write a bare-metal image directly to SD card or flash. Source to hardware in one command.' },
    { cmd: 'format',   desc: 'Reformat source in-place using the built-in canonical style. No config file — opinionated like gofmt.' },
]
</script>

<template>
  <div class="page">

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->

    <header class="hero">
      <div class="hero-inner">

        <!-- Static title (always visible) -->
        <h1 class="hero-title">The Hopper Programming Language</h1>

        <!-- Typing terminal (phases: typing / compiling) -->
        <transition name="fade">
          <div v-if="phase === 'typing' || phase === 'compiling'" class="demo-wrap">
            <div class="demo-terminal">
              <div class="terminal-bar">
                <span class="dot red"/><span class="dot yellow"/><span class="dot green"/>
                <span class="terminal-file">welcome.hop</span>
              </div>
              <pre class="terminal-body"><code>{{ typedCode }}<span v-if="phase === 'typing'" class="cursor">▊</span></code></pre>
              <div v-if="phase === 'compiling'" class="compile-line">
                <span class="prompt">$</span> hopper build welcome.hop<span class="compile-dots">{{ compileDots }}</span>
              </div>
            </div>
          </div>
        </transition>

        <!-- Welcome display (font cycling then fade out) -->
        <transition name="fade">
          <div v-if="phase === 'welcome'" class="welcome-wrap" :class="{ 'fading': fadeOut }">
            <div class="welcome-text" :style="{ fontFamily: welcomeFont }">
              Welcome to Hopper
            </div>
            <div class="compile-success">
              <span class="success-dot">●</span> built successfully
            </div>
          </div>
        </transition>

        <!-- Language description shown after animation settles -->
        <p class="hero-desc" :class="{ visible: phase === 'done' || phase === 'welcome' }">
          Hopper is a freestanding compiled language built on a single principle: every feature earns
          its place. The type system, module system, template engine, and memory model compose from one
          coherent core — no legacy compromises, no bolted-on afterthoughts. Statically typed. Compiled
          to native code. Fast, expressive, and correct by construction.
        </p>

      </div>
    </header>

    <!-- ── It's All Code — vertical timeline ─────────────────────────────── -->

    <section class="layers">
      <div class="container">
        <span class="label">It's All Code</span>
        <h2 class="section-title">One language, every abstraction.</h2>
        <p class="section-sub">From value types to generic algorithms to class hierarchies to program entry — every concept in Hopper builds on the last. No context switch, no FFI boundary, no separate dialect.</p>

        <div class="timeline">

          <!-- Layer 1: Value Types -->
          <div class="tl-row">
            <div class="tl-code">
              <CodeBlock :code="layerTypes" label="jobs.hop" />
            </div>
            <div class="tl-spine">
              <div class="tl-node">1</div>
              <div class="tl-line" />
            </div>
            <div class="tl-desc">
              <h3>Value Types &amp; Enums</h3>
              <p>Enums and structs define the shape of your data precisely. No class overhead, no implicit heap allocation — just value types that compose exactly as written.</p>
            </div>
          </div>

          <!-- Layer 2: Templates -->
          <div class="tl-row reverse">
            <div class="tl-desc">
              <h3>Generic Templates</h3>
              <p>Write an algorithm once and apply it to any type. <code>Queue&lt;T&gt;</code> works for <code>Job</code>, <code>int</code>, or any struct you define — no runtime boxing, no type erasure.</p>
            </div>
            <div class="tl-spine">
              <div class="tl-node">2</div>
              <div class="tl-line" />
            </div>
            <div class="tl-code">
              <CodeBlock :code="layerTemplates" label="collections.hop" />
            </div>
          </div>

          <!-- Layer 3: Classes -->
          <div class="tl-row">
            <div class="tl-code">
              <CodeBlock :code="layerClasses" label="scheduler.hop" />
            </div>
            <div class="tl-spine">
              <div class="tl-node">3</div>
              <div class="tl-line" />
            </div>
            <div class="tl-desc">
              <h3>Class Composition</h3>
              <p>Classes compose structs and templates into stateful abstractions. Constructors initialise, methods operate, <code>self</code> is always explicit — no hidden state, no surprise dispatch.</p>
            </div>
          </div>

          <!-- Layer 4: Entry (no line below last node) -->
          <div class="tl-row reverse last">
            <div class="tl-desc">
              <h3>Application Entry</h3>
              <p><code>entry main</code> is unambiguous. No signature confusion, no runtime preamble. Compose your types, construct your objects, run your program. Every concept from layers 1–3 is right there.</p>
            </div>
            <div class="tl-spine">
              <div class="tl-node">4</div>
            </div>
            <div class="tl-code">
              <CodeBlock :code="layerEntry" label="main.hop" />
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ── Unified Build System ──────────────────────────────────────────── -->

    <section class="toolchain">
      <div class="container">
        <span class="label">Unified Build System</span>
        <h2 class="section-title">One tool. Every step.</h2>
        <p class="section-sub">Install, build, test, debug, profile, and flash from a single CLI. No Makefile. No CMake. No separate package manager.</p>
        <div class="tool-grid">
          <div class="tool-card" v-for="t in tools" :key="t.cmd">
            <h3 class="tool-name">hopper {{ t.cmd }}</h3>
            <p class="tool-desc">{{ t.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── The Separation ───────────────────────────────────────────────── -->

    <section class="separation">
      <div class="container">
        <span class="label">The Separation</span>
        <h2 class="section-title">Intentionally hostile to application development.<br>That friction is the feature.</h2>
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
        <div class="sep-cols">
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
            <p class="sep-note">What makes it fast.</p>
          </div>
          <div class="sep-divider">+</div>
          <div class="sep-col green">
            <div class="sep-col-label hopper-plus">Hopper+</div>
            <div class="sep-col-sub">The interface</div>
            <ul>
              <li>Route handlers</li>
              <li>Middleware</li>
              <li>Request / Response objects</li>
              <li>JSON, templates, strings</li>
              <li>Exception handling</li>
            </ul>
            <p class="sep-note">What makes it ergonomic.</p>
          </div>
          <div class="sep-divider">+</div>
          <div class="sep-col amber">
            <div class="sep-col-label hopper-script">Hopper Script</div>
            <div class="sep-col-sub">The extension layer</div>
            <ul>
              <li>Shell scripting</li>
              <li>Website interactivity</li>
              <li>Plugin and mod systems</li>
              <li>User-defined behaviour</li>
              <li>Embedded in any Hopper+ app</li>
            </ul>
            <p class="sep-note">What makes it extensible.</p>
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
/* ── Reset / layout ──────────────────────────────────────────────────────── */
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
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #2563eb;
  margin-bottom: 0.6rem;
}

.section-title {
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 900;
  color: #111827;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin-bottom: 0.75rem;
}

.section-sub {
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.75;
  max-width: 680px;
  margin-bottom: 3rem;
}

/* ── Hero ───────────────────────────────────────────────────────────────── */
.hero {
  background: linear-gradient(160deg, #eff6ff 0%, #f9fafb 55%);
  border-bottom: 1px solid #e5e7eb;
  padding: 4rem 0 3.5rem;
  overflow: hidden;
}

.hero-inner {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 5vw;
}

.hero-title {
  font-size: clamp(1.8rem, 4.5vw, 3rem);
  font-weight: 900;
  color: #111827;
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin-bottom: 2rem;
}

/* ── Terminal ────────────────────────────────────────────────────────────── */
.demo-wrap { margin-bottom: 1.5rem; }

.demo-terminal {
  background: #0f172a;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.22);
  font-family: 'JetBrains Mono', 'Fira Code', ui-monospace, monospace;
  max-width: 700px;
}

.terminal-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0.55rem 1rem;
  background: #1e293b;
}

.dot { width: 11px; height: 11px; border-radius: 50%; }
.dot.red    { background: #ef4444; }
.dot.yellow { background: #f59e0b; }
.dot.green  { background: #22c55e; }

.terminal-file {
  margin-left: 8px;
  font-size: 0.75rem;
  color: #64748b;
}

.terminal-body {
  margin: 0;
  padding: 1.25rem 1.5rem;
  color: #cbd5e1;
  font-size: 0.8rem;
  line-height: 1.65;
  white-space: pre;
  overflow: hidden;
  min-height: 160px;
}

.terminal-body code { font-family: inherit; }

.cursor {
  animation: blink 0.9s step-end infinite;
  color: #60a5fa;
}
@keyframes blink { 50% { opacity: 0; } }

.compile-line {
  padding: 0.55rem 1.5rem;
  background: #0c1120;
  border-top: 1px solid #1e293b;
  font-size: 0.8rem;
  color: #22c55e;
  font-family: inherit;
}
.prompt { color: #818cf8; }
.compile-dots { color: #475569; min-width: 20px; display: inline-block; }

/* ── Welcome display ─────────────────────────────────────────────────────── */
.welcome-wrap {
  text-align: left;
  margin-bottom: 1.5rem;
  transition: opacity 0.6s ease;
}
.welcome-wrap.fading { opacity: 0; }

.welcome-text {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #22c55e;
  transition: font-family 0.08s;
  line-height: 1.1;
  margin-bottom: 0.5rem;
}

.compile-success {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: #4b5563;
}
.success-dot { color: #22c55e; }

/* ── Language description ────────────────────────────────────────────────── */
.hero-desc {
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.75;
  max-width: 720px;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.hero-desc.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ── Fade transition ─────────────────────────────────────────────────────── */
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to       { opacity: 0; }

/* ── Layers / timeline ───────────────────────────────────────────────────── */
.layers {
  padding: 5rem 0;
  background: #fff;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.tl-row {
  display: grid;
  grid-template-columns: 1fr 56px 1fr;
  align-items: start;
  gap: 0 2rem;
}

.tl-row.reverse .tl-code { order: 3; }
.tl-row.reverse .tl-spine { order: 2; }
.tl-row.reverse .tl-desc  { order: 1; }

@media (max-width: 768px) {
  .tl-row { grid-template-columns: 40px 1fr; }
  .tl-row .tl-code, .tl-row.reverse .tl-code  { order: 3; grid-column: 2; }
  .tl-row .tl-spine, .tl-row.reverse .tl-spine { order: 1; grid-column: 1; }
  .tl-row .tl-desc, .tl-row.reverse .tl-desc   { order: 2; grid-column: 2; }
}

/* Vertical spine */
.tl-spine {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
}

.tl-node {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #2563eb;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 1;
  box-shadow: 0 0 0 4px #eff6ff;
}

.tl-line {
  width: 2px;
  flex: 1;
  min-height: 60px;
  background: linear-gradient(to bottom, #2563eb40, #2563eb20);
  margin-top: 6px;
}

.tl-desc {
  padding: 1.25rem 0 2.5rem;
}

.tl-desc h3 {
  font-size: 1.15rem;
  font-weight: 800;
  color: #111827;
  margin: 0 0 0.6rem;
  letter-spacing: -0.02em;
}

.tl-desc p {
  font-size: 0.9rem;
  color: #4b5563;
  line-height: 1.75;
  margin: 0;
}

.tl-desc code {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.85em;
  background: #eff6ff;
  color: #2563eb;
  padding: 0.1em 0.35em;
  border-radius: 3px;
}

.tl-code { padding-bottom: 2rem; }
.tl-row.last .tl-code,
.tl-row.last .tl-desc { padding-bottom: 0; }

/* ── Toolchain ──────────────────────────────────────────────────────────── */
.toolchain {
  padding: 5rem 0;
  background: #f9fafb;
  border-top: 1px solid #f3f4f6;
}

.tool-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
}

.tool-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.75rem 2rem;
  transition: border-color 0.15s, box-shadow 0.15s;
}

.tool-card:hover {
  border-color: #93c5fd;
  box-shadow: 0 4px 20px rgba(37,99,235,0.09);
}

.tool-name {
  font-family: 'JetBrains Mono', 'Fira Code', ui-monospace, monospace;
  font-size: 1rem;
  font-weight: 700;
  color: #2563eb;
  margin: 0 0 0.6rem;
}

.tool-desc {
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.7;
  margin: 0;
}

/* ── Separation ─────────────────────────────────────────────────────────── */
.separation {
  padding: 5rem 0;
  background: #fff;
  border-top: 1px solid #f3f4f6;
}

.sep-body {
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.8;
  max-width: 720px;
  margin-bottom: 1rem;
}

.sep-cols {
  display: flex;
  gap: 0;
  margin-top: 2.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
}

.sep-col {
  flex: 1;
  padding: 2rem;
  background: #fff;
}
.sep-col.green  { background: #f0fdf4; }
.sep-col.amber  { background: #fffbeb; }

.sep-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  flex-shrink: 0;
  background: #f9fafb;
  border-left: 1px solid #e5e7eb;
  border-right: 1px solid #e5e7eb;
  font-size: 1.2rem;
  font-weight: 800;
  color: #9ca3af;
}

.sep-col-label {
  font-size: 1rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 0.2rem;
}
.sep-col-label.hopper-plus   { color: #059669; }
.sep-col-label.hopper-script { color: #d97706; }

.sep-col-sub {
  font-size: 0.75rem;
  color: #9ca3af;
  margin-bottom: 0.9rem;
}

.sep-col ul {
  padding-left: 1.1rem;
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.8;
  margin: 0 0 0.75rem;
}

.sep-note {
  font-size: 0.78rem;
  font-weight: 600;
  color: #6b7280;
  margin: 0;
}

/* ── Footer ─────────────────────────────────────────────────────────────── */
.site-footer {
  padding: 3rem 0;
  background: #0f172a;
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
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: rgba(245,158,11,0.15);
  color: #f59e0b;
  border: 1px solid rgba(245,158,11,0.35);
  padding: 0.2rem 0.65rem;
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
