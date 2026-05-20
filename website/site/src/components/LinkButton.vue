<script setup>
defineProps({
  href:    { type: String, default: '#' },
  variant: { type: String, default: 'default' }, // 'default' | 'primary'
  external:{ type: Boolean, default: false },
})
</script>

<template>
  <a
    :href="href"
    :class="['link-btn', `link-btn--${variant}`]"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </a>
</template>

<style scoped>
.link-btn {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.6rem 1.25rem;
  border-radius: 7px;
  text-decoration: none;
  border: 1.5px solid var(--color-border);
  color: var(--color-text-strong);
  background: var(--color-surface);
  transition: border-color var(--transition-fast),
              color var(--transition-fast),
              background var(--transition-fast),
              transform var(--transition-fast);
}

.link-btn:hover {
  border-color: var(--color-brand);
  color: var(--color-brand);
  transform: translateY(-1px);
}

.link-btn--primary {
  background: var(--color-brand);
  color: var(--color-surface);
  border-color: var(--color-brand);
}

.link-btn--primary:hover {
  background: var(--color-brand-hover);
  border-color: var(--color-brand-hover);
  color: var(--color-surface);
}
</style>
