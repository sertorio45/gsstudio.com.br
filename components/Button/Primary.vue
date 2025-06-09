<template>
  <button
    class="btn btn-primary"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
// Não há props especiais, apenas slot e attrs
</script>

<style scoped>
/* .primary-btn {
  background-color: #000;
  color: #fff;
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  font-weight: 500;
  border: 2px solid;
}
.primary-btn:hover {
  border: 2px solid;
  background: 
    linear-gradient(to right, rgb(46, 46, 46), black);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-color: #000;
  animation: gradientMove 2s linear infinite;
  background-size: 100% 100%;
} */
</style>