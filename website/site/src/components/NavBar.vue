<script setup>
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()

const links = [
  { to: '/docs',      label: 'Documentation' },
  { to: '/syntax',    label: 'Syntax' },
  { to: '/programs',  label: 'Programs' },
  { to: '/examples',  label: 'Examples' },
  { to: '/benchmark', label: 'Benchmark' },
  { to: '/roadmap',   label: 'Roadmap' },
  { to: '/about',     label: 'About' },
]
</script>

<template>
  <nav class="navbar">
    <div class="nav-inner">
      <RouterLink to="/" class="nav-logo">Hopper</RouterLink>
      <ul class="nav-links">
        <li v-for="link in links" :key="link.to">
          <RouterLink :to="link.to" :class="{ active: route.path === link.to }">
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.nav-inner {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 0 var(--page-gutter);
  height: var(--nav-height);
  max-width: var(--container-lg);
  margin: 0 auto;
}

.nav-logo {
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--color-brand);
  text-decoration: none;
  letter-spacing: -0.5px;
  flex-shrink: 0;
  transition: color var(--transition-fast);
}

.nav-logo:hover { color: var(--color-brand-hover); }

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
}

.nav-links a {
  position: relative;
  display: inline-block;
  padding: 0.35rem 0.85rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-soft);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: color var(--transition-fast), background var(--transition-fast);
}

.nav-links a::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -2px;
  width: 0;
  height: 2px;
  background: var(--color-brand);
  border-radius: 2px;
  transform: translateX(-50%);
  transition: width var(--transition-med);
}

.nav-links a:hover {
  color: var(--color-text);
  background: var(--color-surface-muted);
}

.nav-links a.active {
  color: var(--color-brand);
  background: var(--color-brand-tint);
}

.nav-links a.active::after { width: 60%; }
</style>
