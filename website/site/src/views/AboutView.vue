<script setup>
import PageShell from '@/components/PageShell.vue'
import PageHeader from '@/components/PageHeader.vue'
import PageContainer from '@/components/PageContainer.vue'
import ContentSection from '@/components/ContentSection.vue'
import LinkButton from '@/components/LinkButton.vue'
</script>

<template>
  <PageShell>

    <PageHeader
      label="About"
      title="Hopper"
      sub="A systems and hardware programming language built from first principles."
      width="md"
      size="md"
    />

    <!-- Why Hopper Exists -->
    <ContentSection class="phil-first">
      <span class="phil-label">Philosophy</span>
      <h2 v-reveal>Why Hopper Exists</h2>
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
    </ContentSection>

    <!-- What I Believe -->
    <ContentSection alt>
      <h2 v-reveal>What I Believe</h2>
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
    </ContentSection>

    <!-- Direction -->
    <ContentSection>
      <h2 v-reveal>Direction</h2>
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
    </ContentSection>

    <!-- Determinism -->
    <ContentSection alt>
      <h2 v-reveal>Determinism</h2>
      <p>Hopper will stop. That is by design.</p>
      <p>
        A deterministic system produces the same output from the same input, every time.
        A language that keeps changing violates that contract. Every new version is a new
        variable introduced into every program ever written in it.
      </p>
      <p>The more you change a language, the more you change what it meant to have written something in it.</p>
      <p>Hopper is not a perpetual project. It is a problem to be solved.</p>
      <p>When the language is correct and expressive, development ends. Not because we stopped caring. Because we finished.</p>
    </ContentSection>

    <!-- On Other Languages -->
    <ContentSection>
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
    </ContentSection>

    <!-- Memento Mori -->
    <ContentSection alt>
      <h2 v-reveal>All Things Must Die</h2>
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
    </ContentSection>

    <!-- Final Principle -->
    <section class="final-principle">
      <PageContainer width="md">
        <p class="fp-line">The compiler is the kernel.</p>
        <p class="fp-line">Everything else is userland.</p>
        <p class="fp-sub">That is Hopper.</p>
      </PageContainer>
    </section>

    <!-- Built Openly -->
    <ContentSection alt>
      <h2 v-reveal>Built openly</h2>
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
        <LinkButton
          href="https://github.com/thestonepixel/hopper-programming-langauge"
          variant="primary"
          external
        >GitHub</LinkButton>
        <LinkButton href="/docs">Documentation</LinkButton>
        <LinkButton href="/roadmap">Roadmap</LinkButton>
      </div>
    </ContentSection>

    <footer class="page-footer">
      <PageContainer width="md">
        <p>Hopper — open source systems language &nbsp;·&nbsp; prototype</p>
      </PageContainer>
    </footer>

  </PageShell>
</template>

<style scoped>
/* ── Page-specific ── */
.phil-first { border-top: 2px solid var(--color-border); }

.phil-label {
  display: block;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--color-brand);
  margin-bottom: 1.25rem;
}

.pull-quote {
  border-left: 3px solid var(--color-brand);
  padding: 0.5rem 0 0.5rem 1.5rem;
  margin: 2rem 0;
}

.pull-quote p {
  font-size: 1.15rem;
  font-style: italic;
  color: var(--color-text-deep);
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
  color: var(--color-text-strong);
  line-height: 1.75;
  padding-left: 1.25rem;
  position: relative;
}

.beliefs li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--color-brand);
  font-weight: 700;
}

/* ── Language orbit ── */
.orbit-wrap {
  position: relative;
  width: 640px;
  height: 640px;
  margin: 2.5rem auto;
}

.orbit-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 460px;
  height: 460px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1.5px solid rgba(37, 99, 235, 0.3);
  background: transparent;
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
  color: var(--color-text-strong);
  line-height: 1.65;
  margin: 0 0 0.6rem;
  max-width: none;
}

.orbit-center p:last-child { margin-bottom: 0; }

.orbit-node {
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: var(--color-bg);
  border: 1.5px solid rgba(37, 99, 235, 0.3);
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  transition: transform var(--transition-fast), border-color var(--transition-fast);
}

.orbit-node:hover {
  transform: translate(-50%, -50%) scale(1.05);
  border-color: var(--color-brand);
}

/* Pentagon position */
.n-c     { left: 50%;   top: 14.1%; }
.n-cpp   { left: 84.2%; top: 38.9%; }
.n-ada   { left: 71.1%; top: 79.1%; }
.n-forth { left: 28.9%; top: 79.1%; }
.n-lisp  { left: 15.8%; top: 38.9%; }

.node-name {
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-brand);
  margin-bottom: 0.3rem;
}

.node-desc {
  font-size: 0.775rem;
  color: var(--color-text-faint);
  line-height: 1.55;
}

/* ── Memento ── */
.memento-block { margin-top: 2.5rem; }

.memento-text {
  font-size: 1.4rem;
  font-style: italic;
  font-weight: 600;
  color: var(--color-text) !important;
  margin: 0 !important;
}

/* ── Final Principle ── */
.final-principle {
  background: var(--color-surface-dark);
  padding: 6rem 0;
  text-align: center;
}

.fp-line {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-text-on-dark);
  line-height: 1.6;
  letter-spacing: -0.5px;
  margin: 0;
  max-width: none;
}

.fp-sub {
  font-size: 1rem;
  color: var(--color-text-soft);
  margin-top: 1.5rem !important;
  max-width: none;
}

/* ── Link row ── */
.link-row {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.75rem;
  flex-wrap: wrap;
}

/* ── Footer ── */
.page-footer {
  padding: 2.5rem 0;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  text-align: center;
}

.page-footer p {
  font-size: 0.85rem;
  color: var(--color-text-faint);
}

/* ── Responsive ── */
@media (max-width: 768px) {
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
    height: auto;
    border-radius: var(--radius-lg);
    padding: 0.75rem 1rem;
    text-align: left;
    flex-direction: row;
    align-items: baseline;
    gap: 0.75rem;
  }
  .orbit-node:hover { transform: none; }
  .node-desc { flex: 1; }
}
</style>
