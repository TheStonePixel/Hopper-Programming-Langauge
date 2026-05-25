<script setup>
import PageContainer from './PageContainer.vue'

defineProps({
  label: { type: String, default: '' },
  title: { type: String, default: '' },
  sub:   { type: String, default: '' },
  width: { type: String, default: 'md' },  // container width
  size:  { type: String, default: 'md' },  // 'sm' | 'md' | 'lg' — h1 size
})
</script>

<template>
  <header :class="['page-header', `page-header--${size}`]">
    <PageContainer :width="width">
      <span v-if="label" class="label">{{ label }}</span>
      <h1 v-if="title">{{ title }}</h1>
      <p v-if="sub" class="sub">{{ sub }}</p>
      <slot />
    </PageContainer>
  </header>
</template>

<style scoped>
.page-header {
  background: var(--color-surface);
  border-bottom: 2px solid var(--color-border);
  padding: 4rem 0 3.5rem;
}

.label {
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--color-text-faint);
  margin-bottom: 1rem;
  font-weight: 600;
}

.page-header h1 {
  font-weight: 800;
  letter-spacing: -2px;
  color: var(--color-text);
  margin-bottom: 0.75rem;
  line-height: 1.05;
}

.page-header--sm h1 { font-size: 3.5rem; }
.page-header--md h1 { font-size: 4rem; }
.page-header--lg h1 {
  font-size: 5rem;
  letter-spacing: -3px;
  margin-bottom: 1.25rem;
}

.sub {
  font-size: 1.05rem;
  color: var(--color-text-soft);
  line-height: 1.7;
  max-width: 700px;
}

@media (max-width: 768px) {
  .page-header--sm h1 { font-size: 2.5rem; }
  .page-header--md h1 { font-size: 2.75rem; }
  .page-header--lg h1 { font-size: 3rem; }
}
</style>
