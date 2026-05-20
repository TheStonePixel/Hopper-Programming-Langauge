<script setup>
import { computed } from 'vue'
import PageShell from '@/components/PageShell.vue'
import PageHeader from '@/components/PageHeader.vue'
import SidebarLayout from '@/components/SidebarLayout.vue'
import { useTheme } from '@/lib/useTheme.js'

// All numbers are from live runs on x86-64 Linux.
// Same algorithm (100,000 bot-vs-bot Battleship games), same RNG seed (42).

const { theme } = useTheme()

// Variant → token-resolved {color, bg} pair. Re-computes on theme change.
const variantPalette = computed(() => {
  theme.value  // dependency so we recompute when the theme flips
  if (typeof window === 'undefined') return {}
  const cs = getComputedStyle(document.documentElement)
  const v = (n) => cs.getPropertyValue(n).trim()
  return {
    brand:   { color: v('--color-brand'),      bg: v('--color-brand-tint') },
    neutral: { color: v('--color-text-soft'),  bg: v('--color-surface-alt') },
  }
})

// ── Hopper vs C ──────────────────────────────────────────────────────────────
const vsC = [
  { name: 'Hopper dev',        desc: 'hopperc → clang -O0', time: 7400, throughput: 13514, variant: 'brand'   },
  { name: 'C -O0',             desc: 'gcc -O0',             time: 6091, throughput: 16419, variant: 'neutral' },
  { name: 'Hopper production', desc: 'hopperc → clang -O2', time: 880,  throughput: 113636,variant: 'brand'   },
  { name: 'C -O2',             desc: 'gcc -O2',             time: 907,  throughput: 110254,variant: 'neutral' },
]

const vsCUnopt = vsC.slice(0, 2)
const vsCOpt   = vsC.slice(2, 4)

// ── Contract system (Battleship 4) ───────────────────────────────────────────
const contracts = [
  { name: 'Debug',   desc: 'runtime contract checks (13 sites)', time: 9234, throughput: 10829, variant: 'brand'   },
  { name: 'Release', desc: '--release, all contracts stripped',  time: 7590, throughput: 13175, variant: 'neutral' },
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
  <PageShell>

    <PageHeader
      label="Performance"
      title="Benchmarks"
      sub="Real numbers from real programs."
      width="lg"
      size="sm"
    />

    <SidebarLayout width="lg">

      <template #sidebar>
        <a href="#overview">Overview</a>
        <a href="#vs-c">Hopper vs C</a>
        <a href="#contracts">Contract Overhead</a>
        <a href="#methodology">Methodology</a>
      </template>

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
                  <span class="badge" :style="{ background: variantPalette[r.variant]?.bg, color: variantPalette[r.variant]?.color }">{{ r.name }}</span>
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
                <rect x="118" y="6" :width="barWidth(r.time, maxOf(vsCUnopt, 'time'))" height="22" :fill="variantPalette[r.variant]?.color" rx="3" />
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
                  <span class="badge" :style="{ background: variantPalette[r.variant]?.bg, color: variantPalette[r.variant]?.color }">{{ r.name }}</span>
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
                <rect x="118" y="6" :width="barWidth(r.time, maxOf(vsCOpt, 'time'))" height="22" :fill="variantPalette[r.variant]?.color" rx="3" />
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
                  <span class="badge" :style="{ background: variantPalette[r.variant]?.bg, color: variantPalette[r.variant]?.color }">{{ r.name }}</span>
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
                <rect x="78" y="6" :width="barWidth(r.time, maxOf(contracts, 'time'))" height="22" :fill="variantPalette[r.variant]?.color" rx="3" />
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

    </SidebarLayout>
  </PageShell>
</template>

<style scoped>
.content h2 {
  font-size: 1.55rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 2.5rem 0 0.75rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.content h2:first-child { border-top: none; margin-top: 0; padding-top: 0; }

.content h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-strong);
  margin: 1.5rem 0 0.5rem;
}

.content p {
  font-size: 0.95rem;
  color: var(--color-text-strong);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.content ul {
  font-size: 0.95rem;
  color: var(--color-text-strong);
  line-height: 1.7;
  padding-left: 1.4rem;
  margin-bottom: 1rem;
}

.content li { margin-bottom: 0.3rem; }

.content code {
  font-family: var(--font-mono);
  font-size: 0.83rem;
  background: var(--color-surface-muted);
  padding: 0.1em 0.35em;
  border-radius: var(--radius-sm);
  color: var(--color-text);
}

.disclaimer {
  background: var(--color-warning-pale);
  border: 1px solid var(--color-warning-pale-border);
  border-radius: var(--radius-lg);
  padding: 1rem 1.25rem;
  font-size: 0.9rem;
  color: var(--color-warning-text);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.callout {
  background: var(--color-surface-soft);
  border-left: 3px solid var(--color-brand);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding: 0.85rem 1rem;
  font-size: 0.88rem;
  color: var(--color-text-strong);
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
  background: var(--color-surface-alt);
  border-bottom: 2px solid var(--color-border);
  font-weight: 600;
  color: var(--color-text-strong);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.results-table td {
  padding: 0.7rem;
  border-bottom: 1px solid var(--color-border-soft);
  color: var(--color-text);
  vertical-align: middle;
}

.results-table td.num {
  font-family: var(--font-mono);
  font-size: 0.88rem;
}

.badge {
  display: inline-block;
  padding: 0.18em 0.55em;
  border-radius: var(--radius-sm);
  font-weight: 700;
  font-size: 0.8rem;
  margin-right: 0.4rem;
}

.sub-label {
  font-size: 0.75rem;
  color: var(--color-text-faint);
}

.dim {
  font-weight: 400;
  color: var(--color-text-faint);
  font-size: 0.85rem;
}

.chart-wrap {
  margin: 0.5rem 0 1.5rem;
  overflow-x: auto;
}

.chart { display: block; }

.bar-label {
  font-size: 11px;
  fill: var(--color-text-strong);
  font-weight: 600;
  dominant-baseline: middle;
}

.bar-value {
  font-size: 11px;
  fill: var(--color-text-soft);
  font-family: var(--font-mono);
  dominant-baseline: middle;
}
</style>
