<template>
  <button
    class="rainbow-btn btn btn-primary"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
// Não há props especiais, apenas slot e attrs
</script>

<style scoped>
.rainbow-btn {
  position: relative;
  overflow: hidden;
  color: #fff;
  border-radius: 1rem;
  font-weight: 500;
  padding: 0.5rem 2rem;
  background: linear-gradient(90deg, #ff5e62, #ff9966, #f9d423, #a1ffce, #fbc2eb, #ff5e62);
  background-size: 200% 200%;
  animation: rainbow-move 2s linear infinite;
  border: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  z-index: 1;
}

@keyframes rainbow-move {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

/* Efeito de brilho sutil ao passar o mouse */
.rainbow-btn:hover, .rainbow-btn:focus {
  filter: brightness(1.1);
  outline: none;
}
</style>