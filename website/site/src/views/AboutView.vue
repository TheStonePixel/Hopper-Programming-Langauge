<template>
  <div class="page">

    <header class="page-header">
      <div class="inner">
        <span class="label">About</span>
        <h1>Hopper</h1>
        <p class="sub">A systems and hardware programming language built from first principles.</p>
      </div>
    </header>

    <!-- Why Hopper Exists -->
    <section class="section phil-first">
      <div class="inner">
        <span class="phil-label">Philosophy</span>
        <h2>Why Hopper Exists</h2>
        <p>
          I am building Hopper because the tools I want to build require a language that does not currently exist.
        </p>
        <div class="pull-quote">
          <p>The compiler is the means.<br>The tools are the end.</p>
        </div>
        <p>
          Most existing systems languages solve part of the problem. Few solve the whole thing
          coherently. Some prioritize abstraction over visibility. Some prioritize safety over
          control. Some accumulated so much complexity over time that the language itself became
          harder to reason about than the software written in it.
        </p>
        <p>
          Hopper exists because I believe most of the important problems in systems programming
          were already solved decades ago — just not in the same place.
        </p>
        <div class="pull-quote">
          <p>The goal is not reinvention.<br>The goal is assembly.</p>
        </div>
      </div>
    </section>

    <!-- What I Believe -->
    <section class="section alt">
      <div class="inner">
        <h2>What I Believe</h2>
        <ul class="beliefs">
          <li>I believe systems programming should expose the machine instead of hiding it.</li>
          <li>I believe the runtime cost of code should be obvious from the source.</li>
          <li>I believe abstraction is useful only when it preserves clarity and control.</li>
          <li>I believe languages become fragile when they grow faster than their users can fully understand them.</li>
          <li>I believe stability matters more than novelty.</li>
          <li>I believe "finished" is one of the highest compliments a language can earn.</li>
        </ul>
        <p>
          A language that changes constantly forces its users to continuously relearn the
          foundation beneath them. A language that stabilizes becomes infrastructure.
          Infrastructure lasts.
        </p>
        <p>
          Hopper is designed with the intention of eventually becoming stable enough to stop
          evolving in fundamental ways. Not abandoned. Finished.
        </p>
      </div>
    </section>

    <!-- Direction -->
    <section class="section">
      <div class="inner">
        <h2>Direction</h2>
        <p>Hopper has a single direction-setter.</p>
        <p>That is intentional.</p>
        <p>
          I am not building Hopper by committee, consensus process, or market research. I am
          building it according to a coherent philosophy and a long-term design direction.
          Contributions are welcome. Disagreement is expected. Forking is permitted.
        </p>
        <p>Apache 2.0 guarantees that nobody is trapped.</p>
        <div class="pull-quote">
          <p>The direction remains centralized.<br>The exit remains open.</p>
        </div>
        <p>Both are necessary.</p>
      </div>
    </section>

    <!-- Building Things That Last -->
    <section class="section alt">
      <div class="inner">
        <h2>Building Things That Last</h2>
        <p>I believe long projects are completed by persistence more than brilliance.</p>
        <p>
          Most ambitious software projects fail slowly. Not because the ideas were impossible,
          but because the people building them eventually stopped showing up.
        </p>
        <p>The people who finish things are usually the people still in the chair years after the excitement wears off.</p>
        <p>I plan to still be in the chair.</p>
        <p>
          I also plan to leave it cleanly when the work is done. I want to build tools,
          operating systems, compilers, runtimes, and hardware-oriented software. Hopper exists
          to make those possible. The language itself is not the final product.
        </p>
      </div>
    </section>

    <!-- On Other Languages -->
    <section class="section">
      <div class="inner">
        <h2>On Other Languages</h2>
        <p>Hopper is not built from rejection of the past. It is built from respect for it.</p>
        <div class="orbit-wrap">
          <div class="orbit-ring"></div>
          <div class="orbit-center">
            <p>The problem is not that previous languages failed to teach us anything.</p>
            <p>The problem is that the industry keeps forgetting the lessons.</p>
          </div>
          <div class="orbit-node n-c">
            <div class="node-name">C</div>
            <div class="node-desc">Proved how much could be accomplished with a small language close to the machine.</div>
          </div>
          <div class="orbit-node n-cpp">
            <div class="node-name">C++</div>
            <div class="node-desc">Proved deterministic resource management and zero-overhead abstractions could scale.</div>
          </div>
          <div class="orbit-node n-ada">
            <div class="node-name">Ada</div>
            <div class="node-desc">Proved contracts and correctness systems mattered in real-world safety-critical software.</div>
          </div>
          <div class="orbit-node n-forth">
            <div class="node-name">Forth</div>
            <div class="node-desc">Proved hardware description could live in user space instead of compiler internals.</div>
          </div>
          <div class="orbit-node n-lisp">
            <div class="node-name">Lisp</div>
            <div class="node-desc">Proved small languages can survive for generations.</div>
          </div>
        </div>
        <p>Hopper borrows from all of them because all of them discovered something important.</p>
      </div>
    </section>

    <!-- Memento Mori -->
    <section class="section alt">
      <div class="inner">
        <h2>All Things Must Die</h2>
        <p>I do not expect Hopper to last forever. Nothing does.</p>
        <p>
          If Hopper succeeds, eventually something better should replace it. That is healthy.
          Languages should earn their survival through usefulness, not institutional inertia.
        </p>
        <p>
          Too many ecosystems survive indefinitely through accumulated compatibility obligations,
          governance structures, and endless revision cycles. Languages become permanent
          construction projects instead of stable foundations.
        </p>
        <p>
          I would rather Hopper become stable, useful, and eventually obsolete than endlessly
          "modernized." All things are impermanent.
        </p>
        <div class="memento-block">
          <p class="memento-text">Memento mori.</p>
        </div>
      </div>
    </section>

    <!-- Final Principle -->
    <section class="final-principle">
      <div class="inner">
        <p class="fp-line">The compiler is the kernel.</p>
        <p class="fp-line">Everything else is userland.</p>
        <p class="fp-sub">That is Hopper.</p>
      </div>
    </section>

    <!-- Built Openly -->
    <section class="section alt">
      <div class="inner">
        <h2>Built openly</h2>
        <p>
          Hopper is developed in public. The full source — compiler, standard library,
          programs, and website — is on GitHub. The language is being designed and built
          iteratively, with every decision visible in the commit history.
        </p>
        <p>
          If you want to follow development, read code, or contribute, the repository is
          the place to start. Everything in progress is tracked in the roadmap.
        </p>
        <div class="link-row">
          <a class="link-btn primary" href="https://github.com/thestonepixel/hopper-programming-langauge" target="_blank">GitHub</a>
          <a class="link-btn" href="/docs">Documentation</a>
          <a class="link-btn" href="/roadmap">Roadmap</a>
        </div>
      </div>
    </section>

    <footer class="page-footer">
      <div class="inner">
        <p>Hopper — open source systems language &nbsp;·&nbsp; prototype</p>
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
  max-width: 860px;
  margin: 0 auto;
  padding: 0 5vw;
}

/* ── Header ── */
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

/* ── Sections ── */
.section {
  padding: 4.5rem 0;
  border-bottom: 1px solid #e5e7eb;
  background: #faf9f6;
}

.section.alt {
  background: #ffffff;
}

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

.section p:last-child { margin-bottom: 0; }

/* ── Link row ── */
.link-row {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.75rem;
  flex-wrap: wrap;
}

.link-btn {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.6rem 1.25rem;
  border-radius: 7px;
  text-decoration: none;
  border: 1.5px solid #e5e7eb;
  color: #374151;
  background: #ffffff;
  transition: border-color 0.15s, color 0.15s;
}

.link-btn:hover {
  border-color: #2563eb;
  color: #2563eb;
}

.link-btn.primary {
  background: #2563eb;
  color: #ffffff;
  border-color: #2563eb;
}

.link-btn.primary:hover {
  background: #1d4ed8;
  border-color: #1d4ed8;
  color: #ffffff;
}

/* ── Footer ── */
.page-footer {
  padding: 2.5rem 0;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
  text-align: center;
}

.page-footer p {
  font-size: 0.85rem;
  color: #9ca3af;
}

/* ── Philosophy ── */
.phil-first {
  border-top: 2px solid #e5e7eb;
}

.phil-label {
  display: block;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #2563eb;
  margin-bottom: 1.25rem;
}

.pull-quote {
  border-left: 3px solid #2563eb;
  padding: 0.5rem 0 0.5rem 1.5rem;
  margin: 2rem 0;
}

.pull-quote p {
  font-size: 1.15rem;
  font-style: italic;
  color: #1e293b;
  line-height: 1.75;
  margin: 0;
  max-width: none;
  font-weight: 500;
}

/* ── Beliefs ── */
.beliefs {
  list-style: none;
  padding: 0;
  margin: 1.75rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.beliefs li {
  font-size: 0.975rem;
  color: #374151;
  line-height: 1.75;
  padding-left: 1.25rem;
  position: relative;
}

.beliefs li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: #2563eb;
  font-weight: 700;
}

/* ── Language orbit ── */
.orbit-wrap {
  position: relative;
  width: 600px;
  height: 600px;
  margin: 2.5rem auto;
}

.orbit-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 440px;
  height: 440px;
  transform: translate(-50%, -50%);
  border: 1px dashed #e5e7eb;
  border-radius: 50%;
  pointer-events: none;
}

.orbit-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 210px;
  text-align: center;
}

.orbit-center p {
  font-size: 0.85rem;
  font-style: italic;
  color: #374151;
  line-height: 1.65;
  margin: 0 0 0.6rem;
  max-width: none;
}

.orbit-center p:last-child { margin-bottom: 0; }

.orbit-node {
  position: absolute;
  width: 125px;
  transform: translate(-50%, -50%);
  text-align: center;
}

/* Pentagon: container 600×600, center (300,300), radius 220px
   C     270°: (300,  80) → 50%,   13.3%
   C++   342°: (509, 232) → 84.8%, 38.7%
   Ada    54°: (429, 478) → 71.5%, 79.7%
   Forth 126°: (171, 478) → 28.5%, 79.7%
   Lisp  198°: ( 91, 232) → 15.2%, 38.7% */
.n-c     { left: 50%;   top: 13.3%; }
.n-cpp   { left: 84.8%; top: 38.7%; }
.n-ada   { left: 71.5%; top: 79.7%; }
.n-forth { left: 28.5%; top: 79.7%; }
.n-lisp  { left: 15.2%; top: 38.7%; }

.node-name {
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #2563eb;
  margin-bottom: 0.3rem;
}

.node-desc {
  font-size: 0.775rem;
  color: #9ca3af;
  line-height: 1.55;
}

/* ── Memento ── */
.memento-block {
  margin-top: 2.5rem;
}

.memento-text {
  font-size: 1.4rem;
  font-style: italic;
  font-weight: 600;
  color: #111827 !important;
  margin: 0 !important;
}

.memento-translation {
  font-size: 0.85rem;
  color: #9ca3af !important;
  font-style: italic;
  margin: 0.35rem 0 0 !important;
  letter-spacing: 0.02em;
}

/* ── Final Principle ── */
.final-principle {
  background: #111827;
  padding: 6rem 0;
  text-align: center;
}

.fp-line {
  font-size: 1.6rem;
  font-weight: 700;
  color: #f9fafb;
  line-height: 1.6;
  letter-spacing: -0.5px;
  margin: 0;
  max-width: none;
}

.fp-sub {
  font-size: 1rem;
  color: #6b7280;
  margin-top: 1.5rem !important;
  max-width: none;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .page-header h1 { font-size: 2.75rem; }
  .fp-line { font-size: 1.25rem; }

  .orbit-wrap {
    position: static;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin: 1.75rem 0;
  }
  .orbit-ring { display: none; }
  .orbit-center {
    position: static;
    transform: none;
    width: 100%;
    text-align: left;
    order: -1;
  }
  .orbit-node {
    position: static;
    transform: none;
    width: 100%;
    text-align: left;
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
  }
  .node-desc { flex: 1; }
}
</style>
