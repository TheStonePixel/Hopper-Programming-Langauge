<script setup>
import { ref, watchEffect } from 'vue'
import { highlight } from '../lib/highlight.js'

const props = defineProps({
    code:  { type: String, default: '' },
    label: { type: String, default: '' },
})

const highlighted = ref('')

watchEffect(async () => {
    if (props.code) highlighted.value = await highlight(props.code)
})
</script>

<template>
  <div class="code-block">
    <div v-if="label" class="code-label">{{ label }}</div>
    <div v-if="highlighted" class="code-body" v-html="highlighted" />
    <slot v-else />
  </div>
</template>

<style scoped>
.code-block {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  font-size: 0.875rem;
  line-height: 1.6;
}

.code-label {
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  padding: 0.35rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.code-body :deep(pre) {
  margin: 0;
  padding: 1rem 1.25rem;
  overflow-x: auto;
  background: #ffffff !important;
  tab-size: 4;
}

.code-body :deep(code) {
  font-family: 'Fira Code', 'Cascadia Code', 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}
</style>
