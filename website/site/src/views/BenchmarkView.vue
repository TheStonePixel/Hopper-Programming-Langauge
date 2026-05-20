<script setup>
// All numbers are from live runs on x86-64 Linux.
// Same algorithm (100,000 bot-vs-bot Battleship games), same RNG seed (42).

// ── Hopper vs C ──────────────────────────────────────────────────────────────
const vsC = [
  {
    name: 'Hopper dev',
    desc: 'hopperc → clang -O0',
    time: 7400,
    throughput: 13514,
    color: '#2563eb',
    bg: '#eff6ff',
  },
  {
    name: 'C -O0',
    desc: 'gcc -O0',
    time: 6091,
    throughput: 16419,
    color: '#6b7280',
    bg: '#f9fafb',
  },
  {
    name: 'Hopper production',
    desc: 'hopperc → clang -O2',
    time: 880,
    throughput: 113636,
    color: '#2563eb',
    bg: '#eff6ff',
  },
  {
    name: 'C -O2',
    desc: 'gcc -O2',
    time: 907,
    throughput: 110254,
    color: '#6b7280',
    bg: '#f9fafb',
  },
]

const vsCUnopt = vsC.slice(0, 2)
const vsCOpt   = vsC.slice(2, 4)

// ── Contract system (Battleship 4) ───────────────────────────────────────────
const contracts = [
  {
    name: 'Debug',
    desc: 'runtime contract checks (13 sites)',
    time: 9234,
    throughput: 10829,
    color: '#2563eb',
    bg: '#eff6ff',
  },
  {
    name: 'Release',
    desc: '--release, all contracts stripped',
    time: 7590,
    throughput: 13175,
    color: '#6b7280',
    bg: '#f9fafb',
  },
]

// ── Chart helpers ─────────────────────────────────────────────────────────────
function barWidth(val, max, scale = 380) {
  return ((val / max) * scale).toFixed(1)
}

function maxOf(rows, key) {
  return Math.max(...rows.map(r => r[key])) * 1.15
}
</script>

<template>
  <div class="page">

    <header class="page-header">
      <div class="header-inner">
        <span class="label">Performance</span>
        <h1>Benchmarks</h1>
        <p class="sub">Real numbers from real programs.</p>
      </div>
    </header>

    <div class="layout">

      <aside class="sidebar">
        <nav class="toc">
          <a href="#overview">Overview</a>
          <a href="#vs-c">Hopper vs C</a>
          <a href="#contracts">Contract Overhead</a>
          <a href="#methodology">Methodology</a>
        </nav>
      </aside>

      <main class="content">

        <!-- Disclaimer -->
        <div class="disclaimer">
          <strong>Note:</strong> This is a small, single-program sample and makes no claims
          against other languages. Its purpose is to show that Hopper compiles to real native
          code and to demonstrate measurable properties of specific features — not to characterize
          general-purpose performance.
        </div>

        <!-- Overview -->
        <section id="overview">
          <h2>Overview</h2>
          <p>
            All benchmarks run <strong>100,000 bot-vs-bot Battleship games</strong> with no I/O,
            using a deterministic LCG seeded at 42. Two independent measurements are taken:
          </p>
          <ul>
            <li><strong>Hopper vs C</strong> — same game algorithm in Hopper (Battleship 1) and C,
                compiled at equivalent optimization levels, to show end-to-end parity</li>
            <li><strong>Contract overhead</strong> — Battleship 4 debug vs release to show the
                cost of 13 runtime contract-check sites, and the guarantee that <code>--release</code> strips them entirely</li>
          </ul>
          <p>Timer: <code>clock_gettime(CLOCK_MONOTONIC)</code> inside the program. Avg shots per game: <strong>185</strong> across all runs.</p>
        </section>

        <!-- Hopper vs C -->
        <section id="vs-c">
          <h2>Hopper vs C</h2>
          <p>
            Battleship 1 (Hopper, raw-memory implementation) vs the equivalent C program.
            Same algorithm, same RNG, same board layout (100 × i64 cells = 800 bytes/board).
          </p>

          <h3>Unoptimized  <span class="dim">(-O0 / dev build)</span></h3>
          <table class="results-table">
            <thead>
              <tr><th>Build</th><th>Time (ms)</th><th>Throughput</th></tr>
            </thead>
            <tbody>
              <tr v-for="r in vsCUnopt" :key="r.name">
                <td>
                  <span class="badge" :style="{ background: r.bg, color: r.color }">{{ r.name }}</span>
                  <span class="sub-label">{{ r.desc }}</span>
                </td>
                <td class="num">{{ r.time.toLocaleString() }} ms</td>
                <td class="num">{{ r.throughput.toLocaleString() }} games/sec</td>
              </tr>
            </tbody>
          </table>
          <div class="chart-wrap">
            <svg width="520" height="110" class="chart">
              <g v-for="(r, i) in vsCUnopt" :key="r.name" :transform="`translate(0, ${i * 50})`">
                <text x="110" y="20" class="bar-label" text-anchor="end">{{ r.name }}</text>
                <rect x="118" y="6" :width="barWidth(r.time, maxOf(vsCUnopt, 'time'))" height="22" :fill="r.color" rx="3" />
                <text :x="118 + Number(barWidth(r.time, maxOf(vsCUnopt, 'time'))) + 7" y="21" class="bar-value">
                  {{ r.time.toLocaleString() }} ms
                </text>
              </g>
            </svg>
          </div>

          <h3>Optimized  <span class="dim">(-O2 / production build)</span></h3>
          <table class="results-table">
            <thead>
              <tr><th>Build</th><th>Time (ms)</th><th>Throughput</th></tr>
            </thead>
            <tbody>
              <tr v-for="r in vsCOpt" :key="r.name">
                <td>
                  <span class="badge" :style="{ background: r.bg, color: r.color }">{{ r.name }}</span>
                  <span class="sub-label">{{ r.desc }}</span>
                </td>
                <td class="num">{{ r.time.toLocaleString() }} ms</td>
                <td class="num">{{ r.throughput.toLocaleString() }} games/sec</td>
              </tr>
            </tbody>
          </table>
          <div class="chart-wrap">
            <svg width="520" height="110" class="chart">
              <g v-for="(r, i) in vsCOpt" :key="r.name" :transform="`translate(0, ${i * 50})`">
                <text x="110" y="20" class="bar-label" text-anchor="end">{{ r.name }}</text>
                <rect x="118" y="6" :width="barWidth(r.time, maxOf(vsCOpt, 'time'))" height="22" :fill="r.color" rx="3" />
                <text :x="118 + Number(barWidth(r.time, maxOf(vsCOpt, 'time'))) + 7" y="21" class="bar-value">
                  {{ r.time.toLocaleString() }} ms
                </text>
              </g>
            </svg>
          </div>

          <div class="callout">
            At <strong>-O0</strong>, Hopper is ~21% slower than C — expected, as the compiler
            does not yet apply IR optimizations before handing off to LLVM. At <strong>-O2</strong>,
            the gap closes to ~3%, well within run-to-run noise. The same LLVM backend optimizes
            both equally.
          </div>
        </section>

        <!-- Contract overhead -->
        <section id="contracts">
          <h2>Contract System Overhead</h2>
          <p>
            Battleship 4 adds Hopper's contract system to the same game logic: <code>requires</code>,
            <code>ensures</code>, and <code>invariant</code> clauses at 13 sites covering board bounds,
            RNG divisors, ship counts, and loop counters. The debug build emits runtime assertions;
            <code>--release</code> strips them entirely.
          </p>
          <table class="results-table">
            <thead>
              <tr><th>Build</th><th>Time (ms)</th><th>Throughput</th><th>Contract checks</th></tr>
            </thead>
            <tbody>
              <tr v-for="r in contracts" :key="r.name">
                <td>
                  <span class="badge" :style="{ background: r.bg, color: r.color }">{{ r.name }}</span>
                  <span class="sub-label">{{ r.desc }}</span>
                </td>
                <td class="num">{{ r.time.toLocaleString() }} ms</td>
                <td class="num">{{ r.throughput.toLocaleString() }} games/sec</td>
                <td class="num">{{ r.name === 'Debug' ? '13 sites' : '—' }}</td>
              </tr>
            </tbody>
          </table>
          <div class="chart-wrap">
            <svg width="520" height="110" class="chart">
              <g v-for="(r, i) in contracts" :key="r.name" :transform="`translate(0, ${i * 50})`">
                <text x="70" y="20" class="bar-label" text-anchor="end">{{ r.name }}</text>
                <rect x="78" y="6" :width="barWidth(r.time, maxOf(contracts, 'time'))" height="22" :fill="r.color" rx="3" />
                <text :x="78 + Number(barWidth(r.time, maxOf(contracts, 'time'))) + 7" y="21" class="bar-value">
                  {{ r.time.toLocaleString() }} ms
                </text>
              </g>
            </svg>
          </div>

          <div class="callout">
            At <code>-O0</code>, the 13 contract-check branches add ~22% overhead. In
            <code>--release</code>, the emitted IR contains zero contract branches — the binary
            is identical to one written without any contracts at all. Safety at debug time,
            zero cost at release time.
          </div>
        </section>

        <!-- Methodology -->
        <section id="methodology">
          <h2>Methodology</h2>
          <ul>
            <li><strong>Platform:</strong> x86-64 Linux</li>
            <li><strong>Compiler (Hopper):</strong> kindling/hopperc.js → LLVM IR → clang</li>
            <li><strong>Compiler (C):</strong> gcc</li>
            <li><strong>Optimization levels:</strong> dev / C -O0 = <code>clang/gcc -O0</code>; production / C -O2 = <code>clang/gcc -O2</code></li>
            <li><strong>Games:</strong> 100,000 bot-vs-bot, LCG seeded at 42, deterministic</li>
            <li><strong>Timer:</strong> <code>clock_gettime(CLOCK_MONOTONIC)</code> inside the program</li>
            <li><strong>Sampling:</strong> single run per build; representative, not a statistical mean</li>
            <li><strong>Sources:</strong> <code>programs/battleship/benchmark.hop</code>, <code>programs/battleship4/benchmark.hop</code>, <code>benchmarking/battleship.c</code></li>
          </ul>
        </section>

      </main>
    </div>
  </div>
</template>

<style scoped>
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
  display: block;
  padding: 0.3rem 0.6rem;
  font-size: 0.82rem;
  color: #6b7280;
  text-decoration: none;
  border-radius: 5px;
  transition: color 0.15s, background 0.15s;
}

.toc a:hover { color: #111827; background: #f3f4f6; }

.content { flex: 1; min-width: 0; }

.content h2 {
  font-size: 1.55rem;
  font-weight: 700;
  color: #111827;
  margin: 2.5rem 0 0.75rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
}

.content h2:first-child { border-top: none; margin-top: 0; padding-top: 0; }

.content h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin: 1.5rem 0 0.5rem;
}

.content p {
  font-size: 0.95rem;
  color: #374151;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.content ul {
  font-size: 0.95rem;
  color: #374151;
  line-height: 1.7;
  padding-left: 1.4rem;
  margin-bottom: 1rem;
}

.content li { margin-bottom: 0.3rem; }

.content code {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.83rem;
  background: #f3f4f6;
  padding: 0.1em 0.35em;
  border-radius: 4px;
  color: #1f2937;
}

.disclaimer {
  background: #fef9c3;
  border: 1px solid #fde047;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  font-size: 0.9rem;
  color: #713f12;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.callout {
  background: #f8fafc;
  border-left: 3px solid #2563eb;
  border-radius: 0 6px 6px 0;
  padding: 0.85rem 1rem;
  font-size: 0.88rem;
  color: #374151;
  line-height: 1.6;
  margin: 1rem 0 1.5rem;
}

.results-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.results-table th {
  text-align: left;
  padding: 0.55rem 0.7rem;
  background: #f9fafb;
  border-bottom: 2px solid #e5e7eb;
  font-weight: 600;
  color: #374151;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.results-table td {
  padding: 0.7rem 0.7rem;
  border-bottom: 1px solid #f3f4f6;
  color: #111827;
  vertical-align: middle;
}

.results-table td.num {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.88rem;
}

.badge {
  display: inline-block;
  padding: 0.18em 0.55em;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.8rem;
  margin-right: 0.4rem;
}

.sub-label {
  font-size: 0.75rem;
  color: #9ca3af;
}

.dim {
  font-weight: 400;
  color: #9ca3af;
  font-size: 0.85rem;
}

.chart-wrap {
  margin: 0.5rem 0 1.5rem;
  overflow-x: auto;
}

.chart { display: block; }

.bar-label {
  font-size: 11px;
  fill: #374151;
  font-weight: 600;
  dominant-baseline: middle;
}

.bar-value {
  font-size: 11px;
  fill: #6b7280;
  font-family: 'JetBrains Mono', monospace;
  dominant-baseline: middle;
}
</style>
