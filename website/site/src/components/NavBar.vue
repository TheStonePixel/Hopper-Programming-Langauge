<script setup>
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <nav class="navbar">
    <div class="nav-inner">
      <RouterLink to="/" class="nav-logo">Hopper</RouterLink>
      <ul class="nav-links">
        <li><RouterLink to="/docs"     :class="{ active: route.path === '/docs' }">Documentation</RouterLink></li>
        <li><RouterLink to="/syntax"   :class="{ active: route.path === '/syntax' }">Syntax</RouterLink></li>
        <li><RouterLink to="/programs" :class="{ active: route.path === '/programs' }">Programs</RouterLink></li>
        <li><RouterLink to="/examples"  :class="{ active: route.path === '/examples' }">Examples</RouterLink></li>
        <li><RouterLink to="/benchmark" :class="{ active: route.path === '/benchmark' }">Benchmark</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
}

.nav-inner {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 0 5vw;
  height: 56px;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-logo {
  font-size: 1.05rem;
  font-weight: 800;
  color: #2563eb;
  text-decoration: none;
  letter-spacing: -0.5px;
  flex-shrink: 0;
}

.nav-logo:hover { color: #1d4ed8; }

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links a {
  display: inline-block;
  padding: 0.35rem 0.85rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #6b7280;
  text-decoration: none;
  border-radius: 6px;
  transition: color 0.15s, background 0.15s;
}

.nav-links a:hover {
  color: #111827;
  background: #f3f4f6;
}

.nav-links a.active {
  color: #2563eb;
  background: #eff6ff;
}
</style>
