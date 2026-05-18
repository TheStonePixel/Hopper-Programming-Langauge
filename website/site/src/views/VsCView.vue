<script setup>
</script>

<template>
  <div class="page">

    <header class="page-header">
      <div class="container">
        <span class="label">Memory Operations</span>
        <h1>Hopper vs C</h1>
        <p class="subtitle">
          Every memory operation, side by side. Same semantics — cleaner syntax, zero ambiguity.
          All examples are compiled and tested.
        </p>
      </div>
    </header>

    <!-- 1. Address-of and Read -->
    <section class="compare">
      <div class="container">
        <div class="compare-header">
          <span class="num-badge">01</span>
          <h2>Address-of and Read</h2>
          <p>
            In C, <code>*</code> means both "multiply" and "dereference" — context determines which.
            In Hopper, <code>::address</code> takes an address and <code>::value</code> reads through it.
            No overloaded sigils.
          </p>
        </div>
        <div class="pair">
          <div class="block">
            <div class="block-label c-label">C</div>
            <pre><code><span class="type">int</span> n <span class="op">=</span> <span class="num">42</span><span class="op">;</span>
<span class="type">int</span> <span class="op">*</span>ptr <span class="op">=</span> <span class="op">&amp;</span>n<span class="op">;</span>

printf(<span class="str">"%d\n"</span><span class="op">,</span> <span class="op">*</span>ptr)<span class="op">;</span>   <span class="comment">// 42</span></code></pre>
          </div>
          <div class="block">
            <div class="block-label hop-label">Hopper</div>
            <pre><code><span class="type">int</span> n <span class="op">=</span> <span class="num">42</span>
<span class="kw">address</span> ptr <span class="op">=</span> n<span class="op">::</span>address

printf(<span class="str">"%d\n"</span><span class="op">,</span> ptr<span class="op">::</span>value)   <span class="comment">// 42</span></code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Write Through Pointer -->
    <section class="compare alt">
      <div class="container">
        <div class="compare-header">
          <span class="num-badge">02</span>
          <h2>Write Through Pointer</h2>
          <p>
            Mutation through a pointer. In C, <code>*ptr = val</code> looks like a dereference-then-assign.
            In Hopper, <code>ptr::value = val</code> reads left-to-right: "the value at ptr gets val."
          </p>
        </div>
        <div class="pair">
          <div class="block">
            <div class="block-label c-label">C</div>
            <pre><code><span class="op">*</span>ptr <span class="op">=</span> <span class="num">99</span><span class="op">;</span>
printf(<span class="str">"%d\n"</span><span class="op">,</span> n)<span class="op">;</span>   <span class="comment">// 99 — n was modified</span></code></pre>
          </div>
          <div class="block">
            <div class="block-label hop-label">Hopper</div>
            <pre><code>ptr<span class="op">::</span>value <span class="op">=</span> <span class="num">99</span>
printf(<span class="str">"%d\n"</span><span class="op">,</span> n)   <span class="comment">// 99 — n was modified</span></code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Size Operations -->
    <section class="compare">
      <div class="container">
        <div class="compare-header">
          <span class="num-badge">03</span>
          <h2>Size Operations</h2>
          <p>
            C's <code>sizeof</code> is platform-dependent — <code>sizeof(int)</code> is 4 on 32-bit, 8 on 64-bit.
            In Hopper, <code>::size</code> lives on the variable using the same <code>::</code> operator,
            and <code>int</code> is always 64-bit.
          </p>
        </div>
        <div class="pair">
          <div class="block">
            <div class="block-label c-label">C</div>
            <pre><code><span class="type">int</span> n <span class="op">=</span> <span class="num">42</span><span class="op">;</span>
<span class="type">char</span> b <span class="op">=</span> <span class="num">0</span><span class="op">;</span>
<span class="type">int</span> <span class="op">*</span>ptr <span class="op">=</span> <span class="op">&amp;</span>n<span class="op">;</span>

printf(<span class="str">"%zu\n"</span><span class="op">,</span> sizeof(n))<span class="op">;</span>    <span class="comment">// 4 or 8 — platform dependent</span>
printf(<span class="str">"%zu\n"</span><span class="op">,</span> sizeof(b))<span class="op">;</span>    <span class="comment">// 1</span>
printf(<span class="str">"%zu\n"</span><span class="op">,</span> sizeof(ptr))<span class="op">;</span>  <span class="comment">// 8</span></code></pre>
          </div>
          <div class="block">
            <div class="block-label hop-label">Hopper</div>
            <pre><code><span class="type">int</span> n <span class="op">=</span> <span class="num">42</span>
<span class="type">byte</span> b <span class="op">=</span> <span class="num">0</span>
<span class="kw">address</span> ptr <span class="op">=</span> n<span class="op">::</span>address

printf(<span class="str">"%d\n"</span><span class="op">,</span> n<span class="op">::</span>size)    <span class="comment">// 8 — always</span>
printf(<span class="str">"%d\n"</span><span class="op">,</span> b<span class="op">::</span>size)    <span class="comment">// 1</span>
printf(<span class="str">"%d\n"</span><span class="op">,</span> ptr<span class="op">::</span>size)  <span class="comment">// 8</span></code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Struct Size -->
    <section class="compare alt">
      <div class="container">
        <div class="compare-header">
          <span class="num-badge">04</span>
          <h2>Struct Size</h2>
          <p>
            C requires <code>sizeof(struct Point)</code> or <code>sizeof(p)</code> — two different spellings for the same thing.
            Hopper uses <code>p::size</code> consistently, the same operator as everything else.
          </p>
        </div>
        <div class="pair">
          <div class="block">
            <div class="block-label c-label">C</div>
            <pre><code><span class="kw">struct</span> Point <span class="op">{</span> <span class="type">int</span> x<span class="op">;</span> <span class="type">int</span> y<span class="op">;</span> <span class="op">};</span>
<span class="kw">struct</span> Point p<span class="op">;</span>

printf(<span class="str">"%zu\n"</span><span class="op">,</span> sizeof(p))<span class="op">;</span>   <span class="comment">// 8 or 16 — depends on platform</span></code></pre>
          </div>
          <div class="block">
            <div class="block-label hop-label">Hopper</div>
            <pre><code><span class="kw">struct</span> Point <span class="op">{</span>
    <span class="type">int</span> x
    <span class="type">int</span> y
<span class="op">}</span>

Point p
printf(<span class="str">"%d\n"</span><span class="op">,</span> p<span class="op">::</span>size)   <span class="comment">// 16 — always (int is 64-bit)</span></code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Array Element Address -->
    <section class="compare">
      <div class="container">
        <div class="compare-header">
          <span class="num-badge">05</span>
          <h2>Array Element Address</h2>
          <p>
            Taking the address of an array element and reading or writing through it.
            In Hopper, <code>arr[2]::address</code> makes the intent explicit — you are asking for
            the address of a specific element, not relying on array decay.
          </p>
        </div>
        <div class="pair">
          <div class="block">
            <div class="block-label c-label">C</div>
            <pre><code><span class="type">int</span> arr<span class="op">[</span><span class="num">5</span><span class="op">]</span> <span class="op">=</span> <span class="op">{</span><span class="num">10</span><span class="op">,</span> <span class="num">20</span><span class="op">,</span> <span class="num">30</span><span class="op">,</span> <span class="num">40</span><span class="op">,</span> <span class="num">50</span><span class="op">};</span>
<span class="type">int</span> <span class="op">*</span>elem <span class="op">=</span> <span class="op">&amp;</span>arr<span class="op">[</span><span class="num">2</span><span class="op">];</span>

printf(<span class="str">"%d\n"</span><span class="op">,</span> <span class="op">*</span>elem)<span class="op">;</span>   <span class="comment">// 30</span>
<span class="op">*</span>elem <span class="op">=</span> <span class="num">99</span><span class="op">;</span>
printf(<span class="str">"%d\n"</span><span class="op">,</span> arr<span class="op">[</span><span class="num">2</span><span class="op">]</span>)<span class="op">;</span>  <span class="comment">// 99</span></code></pre>
          </div>
          <div class="block">
            <div class="block-label hop-label">Hopper</div>
            <pre><code><span class="type">int</span> arr<span class="op">[</span><span class="num">5</span><span class="op">]</span> <span class="op">=</span> <span class="op">[</span><span class="num">10</span><span class="op">,</span> <span class="num">20</span><span class="op">,</span> <span class="num">30</span><span class="op">,</span> <span class="num">40</span><span class="op">,</span> <span class="num">50</span><span class="op">]</span>
<span class="kw">address</span> elem <span class="op">=</span> arr<span class="op">[</span><span class="num">2</span><span class="op">]</span><span class="op">::</span>address

printf(<span class="str">"%d\n"</span><span class="op">,</span> elem<span class="op">::</span>value)  <span class="comment">// 30</span>
elem<span class="op">::</span>value <span class="op">=</span> <span class="num">99</span>
printf(<span class="str">"%d\n"</span><span class="op">,</span> arr<span class="op">[</span><span class="num">2</span><span class="op">]</span>)       <span class="comment">// 99</span></code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Pointer Arithmetic -->
    <section class="compare alt">
      <div class="container">
        <div class="compare-header">
          <span class="num-badge">06</span>
          <h2>Pointer Arithmetic</h2>
          <p>
            Both C and Hopper scale pointer arithmetic by the element size automatically.
            In Hopper, the typed address carries the element type, so <code>walk + 1</code>
            advances one <code>int</code> (8 bytes) — no manual <code>sizeof</code> multiply needed.
          </p>
        </div>
        <div class="pair">
          <div class="block">
            <div class="block-label c-label">C</div>
            <pre><code><span class="type">int</span> <span class="op">*</span>walk <span class="op">=</span> <span class="op">&amp;</span>arr<span class="op">[</span><span class="num">0</span><span class="op">];</span>

printf(<span class="str">"%d\n"</span><span class="op">,</span> <span class="op">*</span>(walk <span class="op">+</span> <span class="num">1</span>))<span class="op">;</span>  <span class="comment">// 20</span>
printf(<span class="str">"%d\n"</span><span class="op">,</span> <span class="op">*</span>(walk <span class="op">+</span> <span class="num">3</span>))<span class="op">;</span>  <span class="comment">// 40</span></code></pre>
          </div>
          <div class="block">
            <div class="block-label hop-label">Hopper</div>
            <pre><code><span class="kw">address</span> walk <span class="op">=</span> arr<span class="op">[</span><span class="num">0</span><span class="op">]</span><span class="op">::</span>address

<span class="kw">address</span> step1 <span class="op">=</span> walk <span class="op">+</span> <span class="num">1</span>   <span class="comment">// advances one int (8 bytes)</span>
<span class="kw">address</span> step3 <span class="op">=</span> walk <span class="op">+</span> <span class="num">3</span>
printf(<span class="str">"%d\n"</span><span class="op">,</span> step1<span class="op">::</span>value)  <span class="comment">// 20</span>
printf(<span class="str">"%d\n"</span><span class="op">,</span> step3<span class="op">::</span>value)  <span class="comment">// 40</span></code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Null Check -->
    <section class="compare">
      <div class="container">
        <div class="compare-header">
          <span class="num-badge">07</span>
          <h2>Null Check</h2>
          <p>
            In C, <code>NULL</code> is a preprocessor macro — <code>#define NULL 0</code>.
            It doesn't exist until the header is included. In Hopper, <code>null</code> is a
            first-class keyword built into the language.
          </p>
        </div>
        <div class="pair">
          <div class="block">
            <div class="block-label c-label">C</div>
            <pre><code><span class="type">int</span> <span class="op">*</span>maybe <span class="op">=</span> NULL<span class="op">;</span>   <span class="comment">// NULL is #define 0</span>

<span class="kw">if</span> (maybe <span class="op">==</span> NULL) <span class="op">{</span>
    printf(<span class="str">"null\n"</span>)<span class="op">;</span>
<span class="op">}</span></code></pre>
          </div>
          <div class="block">
            <div class="block-label hop-label">Hopper</div>
            <pre><code><span class="kw">address</span> maybe <span class="op">=</span> <span class="kw">null</span>   <span class="comment">// null is a keyword</span>

<span class="kw">if</span> (maybe <span class="op">==</span> <span class="kw">null</span>) <span class="op">{</span>
    printf(<span class="str">"null\n"</span>)
<span class="op">}</span></code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. Swap Via Pointers -->
    <section class="compare alt">
      <div class="container">
        <div class="compare-header">
          <span class="num-badge">08</span>
          <h2>Swap Via Pointers</h2>
          <p>
            The classic pointer swap. In C, the <code>*</code> sigil appears on declarations,
            reads, and writes — three different contexts. In Hopper, <code>::address</code>
            and <code>::value</code> each have one meaning.
          </p>
        </div>
        <div class="pair">
          <div class="block">
            <div class="block-label c-label">C</div>
            <pre><code><span class="type">int</span> a <span class="op">=</span> <span class="num">7</span><span class="op">,</span> bv <span class="op">=</span> <span class="num">13</span><span class="op">;</span>
<span class="type">int</span> <span class="op">*</span>pa <span class="op">=</span> <span class="op">&amp;</span>a<span class="op">,</span> <span class="op">*</span>pb <span class="op">=</span> <span class="op">&amp;</span>bv<span class="op">;</span>

<span class="type">int</span> tmp <span class="op">=</span> <span class="op">*</span>pa<span class="op">;</span>
<span class="op">*</span>pa <span class="op">=</span> <span class="op">*</span>pb<span class="op">;</span>
<span class="op">*</span>pb <span class="op">=</span> tmp<span class="op">;</span>

printf(<span class="str">"%d %d\n"</span><span class="op">,</span> a<span class="op">,</span> bv)<span class="op">;</span>   <span class="comment">// 13 7</span></code></pre>
          </div>
          <div class="block">
            <div class="block-label hop-label">Hopper</div>
            <pre><code><span class="type">int</span> a <span class="op">=</span> <span class="num">7</span>
<span class="type">int</span> bv <span class="op">=</span> <span class="num">13</span>
<span class="kw">address</span> pa <span class="op">=</span> a<span class="op">::</span>address
<span class="kw">address</span> pb <span class="op">=</span> bv<span class="op">::</span>address

<span class="type">int</span> tmp <span class="op">=</span> pa<span class="op">::</span>value
pa<span class="op">::</span>value <span class="op">=</span> pb<span class="op">::</span>value
pb<span class="op">::</span>value <span class="op">=</span> tmp

printf(<span class="str">"%d %d\n"</span><span class="op">,</span> a<span class="op">,</span> bv)   <span class="comment">// 13 7</span></code></pre>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="container">
        <p>All examples compiled and verified against the Hopper test suite.</p>
      </div>
    </footer>

  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  background: #faf9f6;
}

.container {
  width: 100%;
  padding: 0 5vw;
}

.label {
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #9ca3af;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

/* ── Page Header ── */
.page-header {
  padding: 4rem 0 3.5rem;
  background: #ffffff;
  border-bottom: 2px solid #e5e7eb;
}

.page-header h1 {
  font-size: 5rem;
  font-weight: 800;
  letter-spacing: -3px;
  color: #111827;
  margin-bottom: 1.25rem;
}

.subtitle {
  font-size: 1.05rem;
  color: #6b7280;
  max-width: 700px;
  line-height: 1.7;
}

/* ── Compare Sections ── */
.compare {
  padding: 4rem 0;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
}

.compare.alt {
  background: #faf9f6;
}

.compare-header {
  margin-bottom: 2rem;
}

.num-badge {
  font-size: 0.7rem;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  color: #d1d5db;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 0.6rem;
  font-weight: 700;
}

.compare-header h2 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.6rem;
}

.compare-header p {
  font-size: 0.95rem;
  color: #6b7280;
  max-width: 900px;
  line-height: 1.7;
}

.compare-header code {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.82rem;
  color: #2563eb;
  background: #eff6ff;
  padding: 1px 5px;
  border-radius: 4px;
}

/* ── Code Pair ── */
.pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.block {
  display: flex;
  flex-direction: column;
}

.block-label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0.4rem 0.85rem;
  border-radius: 6px 6px 0 0;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  width: fit-content;
  font-weight: 700;
}

.c-label {
  color: #6b7280;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-bottom: none;
}

.hop-label {
  color: #2563eb;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-bottom: none;
}

pre {
  background: #f8fafc;
  border: 1px solid #e5e7eb;
  border-radius: 0 6px 6px 6px;
  padding: 1.75rem;
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 2;
  margin: 0;
  flex: 1;
}

.block:has(.hop-label) pre {
  background: #f0f7ff;
  border-color: #bfdbfe;
}

code {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}

.comment { color: #9ca3af; }
.kw      { color: #2563eb; }
.type    { color: #059669; }
.str     { color: #d97706; }
.num     { color: #7c3aed; }
.op      { color: #9ca3af; }

/* ── Footer ── */
footer {
  padding: 3rem 0;
  text-align: center;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
}

footer p {
  font-size: 0.85rem;
  color: #9ca3af;
}
</style>
