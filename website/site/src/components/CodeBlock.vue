<script setup>
import { ref, watchEffect, onBeforeUnmount } from 'vue'
import { highlight } from '@/lib/highlight.js'

const props = defineProps({
  label: { type: String, default: '' },
  code:  { type: String, default: '' },
})

const highlighted = ref('')
const copied = ref(false)
let copyTimer = null

watchEffect(async () => {
  if (props.code) {
    highlighted.value = await highlight(props.code)
  }
})

async function copy() {
  if (!props.code) return
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    clearTimeout(copyTimer)
    copyTimer = setTimeout(() => { copied.value = false }, 1500)
  } catch {
    // ignore — clipboard API can fail in non-secure contexts
  }
}

onBeforeUnmount(() => clearTimeout(copyTimer))
</script>

<template>
  <div class="code-block">
    <span v-if="label" class="code-label">{{ label }}</span>

    <button
      v-if="code"
      type="button"
      class="copy-btn"
      :class="{ 'is-copied': copied }"
      :aria-label="copied ? 'Copied' : 'Copy code'"
      @click="copy"
    >
      <svg v-if="!copied" width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="4.5" y="4.5" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.4"/>
        <path d="M2.5 11V3a1.5 1.5 0 0 1 1.5-1.5h8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      </svg>
      <svg v-else width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3 8.5l3.5 3.5L13 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

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
  transition: border-color var(--transition-fast),
              box-shadow var(--transition-fast);
}

.code-block:hover {
  border-color: var(--card-hover-border);
  box-shadow: var(--card-hover-shadow);
}

.code-label {
  position: absolute;
  top: 0.7rem;
  right: 2.6rem;
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

.copy-btn {
  position: absolute;
  top: 0.55rem;
  right: 0.55rem;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-faint);
  cursor: pointer;
  opacity: 0;
  transition: opacity var(--transition-fast),
              background var(--transition-fast),
              border-color var(--transition-fast),
              color var(--transition-fast),
              transform var(--transition-fast);
}

.code-block:hover .copy-btn,
.copy-btn:focus-visible {
  opacity: 1;
}

/* On touch / no-hover devices, keep the button visible at all times */
@media (hover: none) {
  .copy-btn { opacity: 1; }
}

.copy-btn:hover {
  background: var(--color-brand-tint);
  border-color: var(--color-brand-tint-border);
  color: var(--color-brand);
}

.copy-btn:active { transform: scale(0.94); }

.copy-btn.is-copied {
  opacity: 1;
  background: var(--color-success-tint);
  border-color: var(--color-success-tint-border);
  color: var(--color-success-deep);
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
