<script setup>
import PageContainer from './PageContainer.vue'

defineProps({
  alt:   { type: Boolean, default: false },
  width: { type: String,  default: 'md' },
  bare:  { type: Boolean, default: false }, // skip container if true
})
</script>

<template>
  <section :class="['section', { 'section--alt': alt }]">
    <template v-if="bare">
      <div class="section-body"><slot /></div>
    </template>
    <PageContainer v-else :width="width">
      <div class="section-body"><slot /></div>
    </PageContainer>
  </section>
</template>

<style scoped>
.section {
  padding: 4.5rem 0;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg);
}

.section--alt { background: var(--color-surface); }

.section-body :deep(h2) {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  padding-bottom: 0.6rem;
  border-bottom: 2px solid var(--color-border);
}

.section-body :deep(p) {
  font-size: 0.975rem;
  color: var(--color-text-muted);
  line-height: 1.9;
  margin-bottom: 1rem;
  max-width: 680px;
}

.section-body :deep(p:last-child) { margin-bottom: 0; }

.section-body :deep(p code),
.section-body :deep(li code) {
  font-family: var(--font-mono);
  font-size: 0.85em;
  background: var(--color-surface-code);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-xs);
  padding: 0.1em 0.35em;
  color: var(--color-text-deep);
}
</style>
