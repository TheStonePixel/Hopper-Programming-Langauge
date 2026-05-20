<script setup>
import { ref, watchEffect } from 'vue'
import { highlight } from '@/lib/highlight.js'

const props = defineProps({
  label: { type: String, default: '' },
  code:  { type: String, default: '' },
})

const highlighted = ref('')

watchEffect(async () => {
  if (props.code) {
    highlighted.value = await highlight(props.code)
  }
})
</script>

<template>
  <div class="code-block">
    <span v-if="label" class="code-label">{{ label }}</span>

    <!-- Auto-highlighted path: plain code string → Shiki -->
    <div v-if="code" class="shiki-wrap" v-html="highlighted" />

    <!-- Slot path: interactive content (home demo, manual spans) -->
    <slot v-else />
  </div>
</template>

<style scoped>
.code-block {
  position: relative;
  background: var(--color-surface);
  border: 1.5px solid var(--color-border-strong);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  margin-bottom: 1.25rem;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.code-block:hover {
  border-color: #cbd5e1;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.code-label {
  position: absolute;
  top: 0.7rem;
  right: 0.9rem;
  font-family: var(--font-mono);
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #cbd5e1;
  pointer-events: none;
  user-select: none;
  z-index: 1;
}

/* Shiki wraps the output in <pre><code>, inherit our design tokens */
.shiki-wrap :deep(pre) {
  margin: 0;
  padding: 1.5rem 1.75rem;
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 1.9;
  background: transparent !important;
}

.shiki-wrap :deep(code) {
  font-family: var(--font-mono);
}

/* Slot path — legacy manual-span colour classes kept for home demo */
.code-block :deep(pre) {
  margin: 0;
  padding: 1.5rem 1.75rem;
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 1.9;
  background: transparent;
}

.code-block :deep(code) {
  font-family: var(--font-mono);
  color: var(--color-text-deep);
}

.code-block :deep(.c),
.code-block :deep(.comment) { color: var(--color-syntax-comment); font-style: italic; }
.code-block :deep(.kw)      { color: var(--color-syntax-keyword); font-weight: 600; }
.code-block :deep(.kw2)     { color: var(--color-syntax-keyword-alt); }
.code-block :deep(.type)    { color: var(--color-syntax-type); }
.code-block :deep(.str)     { color: var(--color-syntax-string); }
.code-block :deep(.num)     { color: var(--color-syntax-number); }
.code-block :deep(.hex)     { color: var(--color-syntax-hex); }
.code-block :deep(.op)      { color: var(--color-syntax-op); }
</style>
