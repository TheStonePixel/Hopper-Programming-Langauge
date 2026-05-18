<script setup>
defineProps({
  label: { type: String, default: '' }
})
</script>

<template>
  <div class="code-block">
    <span v-if="label" class="code-label">{{ label }}</span>
    <slot />
  </div>
</template>

<style scoped>
.code-block {
  position: relative;
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  margin-bottom: 1.25rem;
}

.code-label {
  position: absolute;
  top: 0.7rem;
  right: 0.9rem;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #cbd5e1;
  pointer-events: none;
  user-select: none;
  z-index: 1;
}

/* ── Pre / code ── */
.code-block :deep(pre) {
  margin: 0;
  padding: 1.5rem 1.75rem;
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 1.9;
  background: transparent;
}

.code-block :deep(code) {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  color: #1e293b;
}

/* ── Token colors (supports both naming conventions) ── */
.code-block :deep(.c),
.code-block :deep(.comment) { color: #94a3b8; font-style: italic; }
.code-block :deep(.kw)      { color: #2563eb; font-weight: 600; }
.code-block :deep(.kw2)     { color: #7c3aed; }
.code-block :deep(.type)    { color: #0891b2; }
.code-block :deep(.str)     { color: #16a34a; }
.code-block :deep(.num)     { color: #b45309; }
.code-block :deep(.hex)     { color: #c2410c; }
.code-block :deep(.op)      { color: #9ca3af; }
</style>
