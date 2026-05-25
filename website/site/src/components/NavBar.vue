<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { useTheme } from '@/lib/useTheme.js'

const route = useRoute()
const { theme, toggleTheme } = useTheme()

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
      <button
        type="button"
        class="theme-toggle"
        :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
        :title="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
        @click="toggleTheme"
      >
        <!-- Sun (shown in dark mode → click to go light) -->
        <svg v-if="theme === 'dark'" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
        <!-- Moon (shown in light mode → click to go dark) -->
        <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"
            stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
        </svg>
      </button>
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

/* ── Theme toggle ─────────────────────────────────────────────────── */
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  margin-left: 0.75rem;
  padding: 0;
  background: var(--color-surface-alt);
  color: var(--color-text-strong);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background var(--transition-fast),
              color var(--transition-fast),
              border-color var(--transition-fast),
              transform var(--transition-fast);
}

.theme-toggle:hover {
  color: var(--color-brand);
  border-color: var(--color-brand-tint-border);
  background: var(--color-brand-tint);
}

.theme-toggle:active { transform: scale(0.92); }

.theme-toggle svg {
  transition: transform var(--transition-med);
}

.theme-toggle:hover svg {
  transform: rotate(15deg);
}
</style>
