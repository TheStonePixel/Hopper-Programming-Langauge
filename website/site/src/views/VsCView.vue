<script setup>
import CodeBlock from '@/components/CodeBlock.vue'
import PageShell from '@/components/PageShell.vue'
import PageHeader from '@/components/PageHeader.vue'
import PageContainer from '@/components/PageContainer.vue'

const codes = {
    c0: `int n = 42;
int *ptr = &n;

printf("%d\\n", *ptr);   // 42`,
    c1: `int n = 42
address ptr = n::address

printf("%d\\n", ptr::value)   // 42`,
    c2: `*ptr = 99;
printf("%d\\n", n);   // 99 — n was modified`,
    c3: `ptr::value = 99
printf("%d\\n", n)   // 99 — n was modified`,
    c4: `int n = 42;
char b = 0;
int *ptr = &n;

printf("%zu\\n", sizeof(n));    // 4 or 8 — platform dependent
printf("%zu\\n", sizeof(b));    // 1
printf("%zu\\n", sizeof(ptr));  // 8`,
    c5: `int n = 42
byte b = 0
address ptr = n::address

printf("%d\\n", n::size)    // 8 — always
printf("%d\\n", b::size)    // 1
printf("%d\\n", ptr::size)  // 8`,
    c6: `struct Point { int x; int y; };
struct Point p;

printf("%zu\\n", sizeof(p));   // 8 or 16 — depends on platform`,
    c7: `struct Point {
    int x
    int y
}

Point p
printf("%d\\n", p::size)   // 16 — always (int is 64-bit)`,
    c8: `int arr[5] = {10, 20, 30, 40, 50};
int *elem = &arr[2];

printf("%d\\n", *elem);   // 30
*elem = 99;
printf("%d\\n", arr[2]);  // 99`,
    c9: `int arr[5] = [10, 20, 30, 40, 50]
address elem = arr[2]::address

printf("%d\\n", elem::value)  // 30
elem::value = 99
printf("%d\\n", arr[2])       // 99`,
    c10: `int *walk = &arr[0];

printf("%d\\n", *(walk + 1));  // 20
printf("%d\\n", *(walk + 3));  // 40`,
    c11: `address walk = arr[0]::address

address step1 = walk + 1   // advances one int (8 bytes)
address step3 = walk + 3
printf("%d\\n", step1::value)  // 20
printf("%d\\n", step3::value)  // 40`,
    c12: `int *maybe = NULL;   // NULL is #define 0

if (maybe == NULL) {
    printf("null\\n");
}`,
    c13: `address maybe = null   // null is a keyword

if (maybe == null) {
    printf("null\\n")
}`,
    c14: `int a = 7, bv = 13;
int *pa = &a, *pb = &bv;

int tmp = *pa;
*pa = *pb;
*pb = tmp;

printf("%d %d\\n", a, bv);   // 13 7`,
    c15: `int a = 7
int bv = 13
address pa = a::address
address pb = bv::address

int tmp = pa::value
pa::value = pb::value
pb::value = tmp

printf("%d %d\\n", a, bv)   // 13 7`,
}
</script>

<template>
  <PageShell>

    <PageHeader
      label="Memory Operations"
      title="Hopper vs C"
      sub="Every memory operation, side by side. Same semantics — cleaner syntax, zero ambiguity. All examples are compiled and tested."
      width="lg"
      size="lg"
    />

    <!-- 1. Address-of and Read -->
    <section class="compare">
      <PageContainer width="lg">
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
          <CodeBlock label="C" :code="codes.c0" />
          <CodeBlock label="Hopper" :code="codes.c1" />
        </div>
      </PageContainer>
    </section>

    <!-- 2. Write Through Pointer -->
    <section class="compare alt">
      <PageContainer width="lg">
        <div class="compare-header">
          <span class="num-badge">02</span>
          <h2>Write Through Pointer</h2>
          <p>
            Mutation through a pointer. In C, <code>*ptr = val</code> looks like a dereference-then-assign.
            In Hopper, <code>ptr::value = val</code> reads left-to-right: "the value at ptr gets val."
          </p>
        </div>
        <div class="pair">
          <CodeBlock label="C" :code="codes.c2" />
          <CodeBlock label="Hopper" :code="codes.c3" />
        </div>
      </PageContainer>
    </section>

    <!-- 3. Size Operations -->
    <section class="compare">
      <PageContainer width="lg">
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
          <CodeBlock label="C" :code="codes.c4" />
          <CodeBlock label="Hopper" :code="codes.c5" />
        </div>
      </PageContainer>
    </section>

    <!-- 4. Struct Size -->
    <section class="compare alt">
      <PageContainer width="lg">
        <div class="compare-header">
          <span class="num-badge">04</span>
          <h2>Struct Size</h2>
          <p>
            C requires <code>sizeof(struct Point)</code> or <code>sizeof(p)</code> — two different spellings for the same thing.
            Hopper uses <code>p::size</code> consistently, the same operator as everything else.
          </p>
        </div>
        <div class="pair">
          <CodeBlock label="C" :code="codes.c6" />
          <CodeBlock label="Hopper" :code="codes.c7" />
        </div>
      </PageContainer>
    </section>

    <!-- 5. Array Element Address -->
    <section class="compare">
      <PageContainer width="lg">
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
          <CodeBlock label="C" :code="codes.c8" />
          <CodeBlock label="Hopper" :code="codes.c9" />
        </div>
      </PageContainer>
    </section>

    <!-- 6. Pointer Arithmetic -->
    <section class="compare alt">
      <PageContainer width="lg">
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
          <CodeBlock label="C" :code="codes.c10" />
          <CodeBlock label="Hopper" :code="codes.c11" />
        </div>
      </PageContainer>
    </section>

    <!-- 7. Null Check -->
    <section class="compare">
      <PageContainer width="lg">
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
          <CodeBlock label="C" :code="codes.c12" />
          <CodeBlock label="Hopper" :code="codes.c13" />
        </div>
      </PageContainer>
    </section>

    <!-- 8. Swap Via Pointers -->
    <section class="compare alt">
      <PageContainer width="lg">
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
          <CodeBlock label="C" :code="codes.c14" />
          <CodeBlock label="Hopper" :code="codes.c15" />
        </div>
      </PageContainer>
    </section>

    <footer>
      <PageContainer width="lg">
        <p>All examples compiled and verified against the Hopper test suite.</p>
      </PageContainer>
    </footer>

  </PageShell>
</template>

<style scoped>
.compare {
  padding: 4rem 0;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.compare.alt { background: var(--color-bg); }

.compare-header { margin-bottom: 2rem; }

.num-badge {
  font-size: 0.7rem;
  font-family: var(--font-mono);
  color: var(--color-text-fainter);
  letter-spacing: 2px;
  display: block;
  margin-bottom: 0.6rem;
  font-weight: 700;
}

.compare-header h2 {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.6rem;
}

.compare-header p {
  font-size: 0.95rem;
  color: var(--color-text-soft);
  max-width: 900px;
  line-height: 1.7;
}

.pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

footer {
  padding: 3rem 0;
  text-align: center;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
}

footer p {
  font-size: 0.85rem;
  color: var(--color-text-faint);
}

@media (max-width: 768px) {
  .pair { grid-template-columns: 1fr; }
}
</style>
