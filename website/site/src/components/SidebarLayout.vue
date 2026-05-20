<script setup>
defineProps({
  width: { type: String, default: 'lg' },
})
</script>

<template>
  <div :class="['layout', `layout--${width}`]">
    <aside class="sidebar">
      <nav class="toc">
        <slot name="sidebar" />
      </nav>
    </aside>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  margin: 0 auto;
  padding: 3rem var(--page-gutter);
  gap: 3rem;
  align-items: flex-start;
}

.layout--md { max-width: var(--container-md); }
.layout--lg { max-width: var(--container-lg); }

.sidebar {
  position: sticky;
  top: calc(var(--nav-height) + 2rem);
  width: 180px;
  flex-shrink: 0;
}

.toc {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.toc :deep(.toc-group) {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-text-fainter);
  padding: 0.9rem 0.6rem 0.3rem;
}

.toc :deep(a) {
  font-size: 0.85rem;
  color: var(--color-text-soft);
  text-decoration: none;
  padding: 0.3rem 0.6rem;
  border-radius: var(--radius-sm);
  transition: color var(--transition-fast), background var(--transition-fast), padding-left var(--transition-fast);
  font-weight: 500;
}

.toc :deep(a:hover) {
  color: var(--color-brand);
  background: var(--color-brand-tint);
  padding-left: 0.85rem;
}

.content {
  flex: 1;
  min-width: 0;
}

@media (max-width: 768px) {
  .layout { padding: 2rem var(--page-gutter); }
  .sidebar { display: none; }
}
</style>
