<script setup>
defineProps({
  width: { type: String, default: 'md' }, // 'sm' | 'md' | 'lg'
  gutter: { type: Boolean, default: true },
})
</script>

<template>
  <div :class="['container', `container--${width}`, { 'container--no-gutter': !gutter }]">
    <slot />
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  padding: 0 var(--page-gutter);
  width: 100%;
}
.container--sm { max-width: var(--container-sm); }
.container--md { max-width: var(--container-md); }
.container--lg { max-width: var(--container-lg); }
.container--no-gutter { padding: 0; }
</style>
