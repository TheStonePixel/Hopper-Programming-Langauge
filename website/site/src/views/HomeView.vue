<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

// ── Hero typing animation ────────────────────────────────────────────────────

const DEMO_CODE = `import String from UTF8
import io from core

function alwaysTrue() bool {
    return true
}

entry main(int argc, string[] argv) {
    callback isAwesome = alwaysTrue() bool

    if (isAwesome()) {
        print("Welcome To Hopper")
    }

    return 0
}`

const typedCode   = ref('')
const phase       = ref('typing')
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

// ── Tree code snippets ────────────────────────────────────────────────────────

const treeAsm = `// Raw CPU query — no OS, no libc required

function cpuId() int {
    int leaf = 0
    asm {
        xor eax, eax   // CPUID leaf 0
        cpuid
        leaf = eax
    }
    return leaf
}`

const treeBitfield = `// Hardware registers as named, typed variables

bitfield UartCR1 {
    bit re      // receiver enable
    bit te      // transmitter enable
    pad 11
    bit ue      // USART enable
    pad 18
}

strict UartCR1 uart_cr1 = 0x4001100C
strict UartCR1 uart_dr  = 0x40011004

bind 0x00000004 = isr_uart::address`

const treeMemory = `// Manual memory — you decide the lifetime

// T::size is a compile-time byte-width query
address rxBuf = allocate 256 * byte::size
address txBuf = allocate 64  * int::size

// pointer arithmetic and typed dereference
address ptr  = rxBuf + 4
ptr::value   = 0xFF

// explicit release — no hidden runtime
deallocate rxBuf
deallocate txBuf`

const treeUnique = `// Unique<T> — ownership with automatic cleanup

template Unique<T> {
    address ptr
    int     len

    constructor(int n) {
        self.ptr = allocate n * T::size
        self.len = n
    }

    function get() address { return self.ptr }
    function size() int    { return self.len  }

    destructor() {
        deallocate self.ptr   // freed when scope ends
    }
}`

const treeClass = `// Class: composes every layer into one abstraction

class UartDriver {
    Unique<byte> rxBuf

    constructor() {
        self.rxBuf  = Unique(256)
        uart_cr1.te = 1   // bitfield write → volatile store
        uart_cr1.re = 1
        uart_cr1.ue = 1
    }

    function send(byte c) {
        while (uart_cr1.te == 0) {}
        uart_dr.data = c
    }

    function recv() byte {
        while (uart_cr1.re == 0) {}
        return uart_dr.data
    }
}`

const treeSyscall = `// Linux write syscall — same asm syntax, any target

function write(int fd, address buf, int len) int {
    int n = 0
    asm {
        rax = 1        // SYS_write
        rdi = fd
        rsi = buf
        rdx = len
        syscall
        n = rax
    }
    return n
}`

const treeEntry = `// sys-probe.hop — the whole stack, one entry point

import UartDriver from driver
import write      from sys

// Hopper is 🔥
function isAwesome() bool { return true }

entry main {
    UartDriver uart = UartDriver()
    int leaf = cpuId()

    if (leaf > 0) { uart.send(79) }  // 'O'
    else          { uart.send(70) }  // 'F'

    write(1, uart.rxBuf.get(), uart.rxBuf.size())

    if (isAwesome()) {
        write(1, "Welcome To Hopper", 17)
    }
}`

// ── Tree SVG drawing ──────────────────────────────────────────────────────────

const treeWrapper = ref(null)
const treeSvg     = ref(null)
const refAsm      = ref(null)
const refBitfield = ref(null)
const refMemory   = ref(null)
const refUnique   = ref(null)
const refClass    = ref(null)
const refSyscall  = ref(null)
const refEntry    = ref(null)

function nodeBox(el) {
    const wr = treeWrapper.value.getBoundingClientRect()
    const r  = el.getBoundingClientRect()
    return {
        cx:     r.left + r.width  / 2 - wr.left,
        cy:     r.top  + r.height / 2 - wr.top,
        top:    r.top    - wr.top,
        bottom: r.bottom - wr.top,
        left:   r.left   - wr.left,
        right:  r.right  - wr.left,
    }
}

// Build an orthogonal SVG path (H/V segments only) with rounded corners.
// pts: [[x,y], ...] — every turn must be a 90° angle (H then V or V then H).
// r:   corner radius in px.
function orthoPath(pts, r = 12) {
    if (pts.length < 2) return ''
    let d = `M${pts[0][0]},${pts[0][1]}`
    for (let i = 1; i < pts.length; i++) {
        const [x0, y0] = pts[i - 1]
        const [x1, y1] = pts[i]
        const [x2, y2] = i < pts.length - 1 ? pts[i + 1] : [x1, y1]
        if (i === pts.length - 1) {
            // last segment — go straight to end
            d += ` L${x1},${y1}`
        } else {
            // shorten this segment by r before the corner, then Q through the corner
            const dx0 = x1 - x0, dy0 = y1 - y0
            const dx1 = x2 - x1, dy1 = y2 - y1
            const len0 = Math.sqrt(dx0 * dx0 + dy0 * dy0)
            const len1 = Math.sqrt(dx1 * dx1 + dy1 * dy1)
            const rc   = Math.min(r, len0 / 2, len1 / 2)
            // approach point (rc before the corner)
            const ax = x1 - (dx0 / len0) * rc
            const ay = y1 - (dy0 / len0) * rc
            // departure point (rc after the corner)
            const bx = x1 + (dx1 / len1) * rc
            const by = y1 + (dy1 / len1) * rc
            d += ` L${ax},${ay} Q${x1},${y1} ${bx},${by}`
        }
    }
    return d
}

function dot(svg, cx, cy, r = 4, fill = '#2563eb', opacity = 0.75) {
    const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    c.setAttribute('cx', cx); c.setAttribute('cy', cy)
    c.setAttribute('r',  r);  c.setAttribute('fill', fill)
    c.setAttribute('opacity', opacity)
    svg.appendChild(c)
}

function drawTreeLines() {
    const wrapper = treeWrapper.value
    const svg     = treeSvg.value
    if (!wrapper || !svg) return

    while (svg.firstChild) svg.removeChild(svg.firstChild)

    const W = wrapper.offsetWidth
    const H = wrapper.scrollHeight
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`)
    svg.style.width  = `${W}px`
    svg.style.height = `${H}px`

    const a  = nodeBox(refAsm.value)
    const b  = nodeBox(refBitfield.value)
    const m  = nodeBox(refMemory.value)
    const u  = nodeBox(refUnique.value)
    const cl = nodeBox(refClass.value)
    const s  = nodeBox(refSyscall.value)
    const e  = nodeBox(refEntry.value)

    const G  = 30  // routing gap (px between node edge and turn)
    const R  = 12  // corner radius

    // Vertical trunk X: centre of the gap between the two columns
    const tx = (a.right + b.left) / 2

    // Key Y levels
    const busY     = Math.max(a.bottom, b.bottom) + G      // horizontal bus connecting asm + bitfield
    const memBrY   = m.top  - G                            // where trunk T-junctions left to memory
    const clBrY    = cl.top - G                            // where trunk turns right into class top
    const underY   = Math.max(u.bottom, cl.bottom) + G     // underpass: unique routes under to class bottom
    const entY     = e.top  - G                            // where class + syscall converge before entry

    // ── Path definitions (waypoints for orthoPath) ───────────────────────────
    //
    //  [asm]                [bitfield]
    //    |                      |
    //  busY ────── tx ──────── busY     ← horizontal bus
    //               |
    //            memBrY ─── [memory]   ← T-branch left
    //               |          |
    //               |       [unique]
    //               |          |
    //            clBrY ─── [class]     ← turn right into class top
    //                          |    ←─ unique underpass into class bottom
    //                          |
    //  [syscall] ─── entY ─── entY     ← converge before entry
    //                          |
    //                       [entry]

    const segments = [
        // asm drops to bus
        { pts: [[a.cx, a.bottom], [a.cx, busY]], delay: 0 },
        // bitfield drops to bus
        { pts: [[b.cx, b.bottom], [b.cx, busY]], delay: 1 },
        // horizontal bus across the top
        { pts: [[a.cx, busY], [b.cx, busY]], delay: 2 },
        // trunk drops from bus midpoint, T-branches left to memory
        { pts: [[tx, busY], [tx, memBrY]], delay: 3 },
        { pts: [[tx, memBrY], [m.cx, memBrY], [m.cx, m.top]], delay: 4 },
        // memory straight down to Unique<T>
        { pts: [[m.cx, m.bottom], [u.cx, u.top]], delay: 5 },
        // trunk continues down, turns right into class top
        { pts: [[tx, memBrY], [tx, clBrY], [cl.cx, clBrY], [cl.cx, cl.top]], delay: 6 },
        // Unique<T> underpass: goes below both nodes, rises into class bottom
        { pts: [[u.cx, u.bottom], [u.cx, underY], [cl.cx, underY], [cl.cx, cl.bottom]], delay: 7 },
        // class drops to entry converge point, then into entry top
        { pts: [[cl.cx, cl.bottom], [cl.cx, entY], [e.cx, entY], [e.cx, e.top]], delay: 8 },
        // syscall routes right to entry converge point
        { pts: [[s.cx, s.bottom], [s.cx, entY], [e.cx, entY], [e.cx, e.top]], delay: 9 },
    ]

    // ensure keyframe
    if (!document.getElementById('hopper-tree-kf')) {
        const st = document.createElement('style')
        st.id = 'hopper-tree-kf'
        st.textContent = '@keyframes hopperDrawPath { to { stroke-dashoffset: 0; } }'
        document.head.appendChild(st)
    }

    segments.forEach(({ pts, delay }) => {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        path.setAttribute('d', orthoPath(pts, R))
        path.setAttribute('fill', 'none')
        path.setAttribute('stroke', '#2563eb')
        path.setAttribute('stroke-width', '1.75')
        path.setAttribute('stroke-opacity', '0.45')
        path.setAttribute('stroke-linecap', 'round')
        path.setAttribute('stroke-linejoin', 'round')
        const len = path.getTotalLength()
        path.style.strokeDasharray  = len
        path.style.strokeDashoffset = len
        path.style.animation = `hopperDrawPath 0.5s ease ${delay * 0.1}s forwards`
        svg.appendChild(path)
    })

    // Junction / merge dots (drawn after paths so they sit on top)
    dot(svg, tx,    busY,   5, '#2563eb')          // bus midpoint — trunk origin
    dot(svg, tx,    memBrY, 4, '#7c3aed')          // T-junction to memory
    dot(svg, tx,    clBrY,  4, '#2563eb')          // trunk turns into class
    dot(svg, e.cx,  entY,   5, '#059669')          // class + syscall converge before entry
}

// ── Hero + tree mount ─────────────────────────────────────────────────────────

let ro = null

onMounted(() => {
    // hero typing
    let i = 0
    const typeInterval = setInterval(() => {
        typedCode.value = DEMO_CODE.slice(0, ++i)
        if (i >= DEMO_CODE.length) {
            clearInterval(typeInterval)
            setTimeout(() => {
                phase.value = 'compiling'
                let d = 0
                const dotInterval = setInterval(() => {
                    compileDots.value = '.'.repeat(++d % 4)
                }, 200)
                setTimeout(() => {
                    clearInterval(dotInterval)
                    phase.value = 'welcome'
                    let fi = 0
                    const fontInterval = setInterval(() => {
                        welcomeFont.value = FONTS[fi++ % FONTS.length]
                    }, 550)
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

    // tree SVG — delay to let Shiki render code block heights
    setTimeout(drawTreeLines, 600)

    ro = new ResizeObserver(() => drawTreeLines())
    nextTick(() => { if (treeWrapper.value) ro.observe(treeWrapper.value) })
})

onUnmounted(() => { if (ro) ro.disconnect() })

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

        <!-- Title hidden until animation completes -->
        <h1 class="hero-title" :class="{ visible: phase === 'done' }">
          The Hopper Programming Language
        </h1>

        <!-- Typing terminal -->
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

        <!-- Welcome font-cycling display -->
        <transition name="fade">
          <div v-if="phase === 'welcome'" class="welcome-wrap" :class="{ fading: fadeOut }">
            <div class="welcome-text" :style="{ fontFamily: welcomeFont }">
              Welcome to Hopper
            </div>
            <div class="compile-success">
              <span class="success-dot">●</span> built successfully
            </div>
          </div>
        </transition>

        <!-- Language description fades in with the title -->
        <p class="hero-desc" :class="{ visible: phase === 'done' }">
          Hopper is a freestanding compiled language built on a single principle: every feature earns
          its place. The type system, module system, template engine, and memory model compose from one
          coherent core — no legacy compromises, no bolted-on afterthoughts. Statically typed. Compiled
          to native code. Fast, expressive, and correct by construction.
        </p>

      </div>
    </header>

    <!-- ── It's All Code — DAG tree ──────────────────────────────────────── -->

    <section class="layers">
      <div class="container">
        <span class="label">It's All Code</span>
        <h2 class="section-title">From bare metal to application.</h2>
        <p class="section-sub">Every node below is real, runnable Hopper. Each layer solves a specific problem — and every arrow is a dependency. Follow them down to see how the language composes.</p>

        <div class="tree-wrapper" ref="treeWrapper">

          <!-- SVG overlay for connecting lines -->
          <svg class="tree-svg" ref="treeSvg" aria-hidden="true" />

          <!-- Row 1: two root nodes -->
          <div class="tree-row tree-row-two">
            <div class="tree-node" ref="refAsm">
              <div class="node-badge badge-asm">Inline Assembly</div>
              <CodeBlock :code="treeAsm" label="asm.hop" />
              <p class="node-desc">The <code>asm {}</code> block puts raw x86 instructions inside typed Hopper functions. Register names bind directly to Hopper variables — no constraint strings, no quoted templates. Direct CPU access without leaving the language.</p>
            </div>
            <div class="tree-node" ref="refBitfield">
              <div class="node-badge badge-hw">Hardware Registers</div>
              <CodeBlock :code="treeBitfield" label="uart.hop" />
              <p class="node-desc"><code>bitfield</code> maps a struct layout to exact bit positions. <code>strict</code> binds a name to a physical address — volatile load/store is automatic. <code>bind</code> places a function pointer at an interrupt vector address. Hardware becomes named, typed, safe.</p>
            </div>
          </div>

          <!-- Row 2: manual memory (left only) -->
          <div class="tree-row tree-row-left">
            <div class="tree-node" ref="refMemory">
              <div class="node-badge badge-mem">Manual Memory</div>
              <CodeBlock :code="treeMemory" label="memory.hop" />
              <p class="node-desc"><code>allocate</code> and <code>deallocate</code> are keywords, not library calls. <code>T::size</code> queries the compile-time byte width of any type, enabling typed generic allocation. Pointer arithmetic and dereference use the <code>::</code> operator — consistent and readable.</p>
            </div>
          </div>

          <!-- Row 3: Unique<T> (left) + class (right) -->
          <div class="tree-row tree-row-two">
            <div class="tree-node" ref="refUnique">
              <div class="node-badge badge-mem">Unique&lt;T&gt;</div>
              <CodeBlock :code="treeUnique" label="unique.hop" />
              <p class="node-desc">A destructor guarantees the buffer is freed when the owner goes out of scope. No garbage collector. No runtime. The compiler inserts the <code>deallocate</code>. <code>Unique&lt;T&gt;</code> is written in Hopper — it's not a compiler primitive, it's just a template.</p>
            </div>
            <div class="tree-node" ref="refClass">
              <div class="node-badge badge-class">Class Composition</div>
              <CodeBlock :code="treeClass" label="driver.hop" />
              <p class="node-desc">The class composes bitfield registers, Unique ownership, and type-safe methods into one portable unit. Writing <code>uart_cr1.te = 1</code> generates a volatile read-modify-write on the MMIO register. The hardware complexity is internal; the interface is clean.</p>
            </div>
          </div>

          <!-- Row 4: linux syscall (left only) -->
          <div class="tree-row tree-row-left">
            <div class="tree-node" ref="refSyscall">
              <div class="node-badge badge-asm">Linux Syscall</div>
              <CodeBlock :code="treeSyscall" label="sys.hop" />
              <p class="node-desc">The same <code>asm {}</code> syntax that queries CPUID also invokes syscalls. One construct for all raw hardware interfaces — bare-metal UART or Linux kernel, same language, same rules.</p>
            </div>
          </div>

          <!-- Row 5: entry (centered, full-width feel) -->
          <div class="tree-row tree-row-center">
            <div class="tree-node tree-node-entry" ref="refEntry">
              <div class="node-badge badge-entry">Application Entry</div>
              <CodeBlock :code="treeEntry" label="sys-probe.hop" />
              <p class="node-desc"><code>entry main</code> is a declaration, not a function. No hidden signature, no runtime startup preamble. Every layer above composes here — inline assembly, MMIO registers, manual memory, smart ownership, class abstraction, and a Linux syscall — in one clean program.</p>
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

<!-- Global keyframe for SVG path draw-on animation (cannot be scoped) -->
<style>
@keyframes hopperDrawPath {
  to { stroke-dashoffset: 0; }
}
</style>

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
  opacity: 0;
  transform: translateY(-6px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.hero-title.visible {
  opacity: 1;
  transform: translateY(0);
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
.prompt      { color: #818cf8; }
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
  transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
}
.hero-desc.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ── Fade transition ─────────────────────────────────────────────────────── */
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to       { opacity: 0; }

/* ── Tree wrapper ────────────────────────────────────────────────────────── */
.layers {
  padding: 5rem 0;
  background: #fff;
}

.tree-wrapper {
  position: relative;
}

.tree-svg {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: visible;
}

/* ── Tree rows ───────────────────────────────────────────────────────────── */
.tree-row {
  display: grid;
  gap: 2rem 3rem;
  margin-bottom: 3rem;
}

.tree-row-two {
  grid-template-columns: 1fr 1fr;
}

.tree-row-left {
  grid-template-columns: 1fr 1fr;
}
.tree-row-left .tree-node {
  grid-column: 1;
}

.tree-row-center {
  display: flex;
  justify-content: center;
}

.tree-node {
  min-width: 0;
}

.tree-node-entry {
  width: min(640px, 100%);
}

/* ── Node badges ─────────────────────────────────────────────────────────── */
.node-badge {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  margin-bottom: 0.6rem;
}

.badge-asm   { background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; }
.badge-hw    { background: #fff7ed; color: #c2410c; border: 1px solid #fed7aa; }
.badge-mem   { background: #f5f3ff; color: #7c3aed; border: 1px solid #ddd6fe; }
.badge-class { background: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe; }
.badge-entry { background: #f0fdf4; color: #059669; border: 1px solid #a7f3d0; }

/* ── Node description ────────────────────────────────────────────────────── */
.node-desc {
  font-size: 0.82rem;
  color: #4b5563;
  line-height: 1.75;
  margin: 0.5rem 0 0;
}

.node-desc code {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.85em;
  background: #eff6ff;
  color: #2563eb;
  padding: 0.1em 0.3em;
  border-radius: 3px;
}

/* ── Responsive ──────────────────────────────────────────────────────────── */
@media (max-width: 700px) {
  .tree-row-two,
  .tree-row-left { grid-template-columns: 1fr; }
  .tree-row-left .tree-node { grid-column: auto; }
  .tree-svg { display: none; }
}

/* ── Toolchain ───────────────────────────────────────────────────────────── */
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
.sep-col.green { background: #f0fdf4; }
.sep-col.amber { background: #fffbeb; }

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
