<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps({
  width: { type: String, default: 'lg' },
})

const sidebarEl = ref(null)
const contentEl = ref(null)

let observer = null
let linkMap = new Map()  // id → <a> element

function setActive(id) {
  for (const [linkId, a] of linkMap) {
    a.classList.toggle('active', linkId === id)
  }
}

onMounted(() => {
  if (!sidebarEl.value || !contentEl.value) return

  const links = sidebarEl.value.querySelectorAll('a[href^="#"]')
  const targets = []
  linkMap = new Map()

  links.forEach(a => {
    const id = a.getAttribute('href').slice(1)
    if (!id) return
    const target = document.getElementById(id)
    if (!target) return
    linkMap.set(id, a)
    targets.push(target)
  })

  if (targets.length === 0) return

  // Track which sections are currently in the viewport band
  const visible = new Set()
  observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) visible.add(e.target.id)
      else visible.delete(e.target.id)
    })

    // Pick the earliest (top-most) visible section in document order
    let chosen = null
    for (const t of targets) {
      if (visible.has(t.id)) { chosen = t.id; break }
    }
    if (chosen) setActive(chosen)
  }, {
    rootMargin: '-80px 0px -55% 0px',
    threshold: 0,
  })

  targets.forEach(t => observer.observe(t))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div :class="['layout', `layout--${width}`]">
    <aside class="sidebar" ref="sidebarEl">
      <nav class="toc">
        <slot name="sidebar" />
      </nav>
    </aside>
    <div class="content" ref="contentEl">
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
  position: relative;
  font-size: 0.85rem;
  color: var(--color-text-soft);
  text-decoration: none;
  padding: 0.3rem 0.6rem 0.3rem 0.8rem;
  border-radius: var(--radius-sm);
  transition: color var(--transition-fast),
              background var(--transition-fast),
              padding-left var(--transition-fast);
  font-weight: 500;
}

.toc :deep(a)::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 0;
  background: var(--color-brand);
  border-radius: 1px;
  transition: height var(--transition-fast);
}

.toc :deep(a:hover) {
  color: var(--color-brand);
  background: var(--color-brand-tint);
  padding-left: 0.9rem;
}

.toc :deep(a.active) {
  color: var(--color-brand);
  background: var(--color-brand-tint);
  font-weight: 600;
}

.toc :deep(a.active)::before {
  height: 60%;
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
