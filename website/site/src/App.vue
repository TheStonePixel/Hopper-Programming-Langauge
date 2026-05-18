<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: #faf9f6;
  color: #111827;
  font-family: 'Inter', system-ui, sans-serif;
  line-height: 1.6;
}
</style>
