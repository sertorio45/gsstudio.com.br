<!-- components/Icon.vue -->

<template>
  <i :class="`bx ${icon}`" :style="computedStyle"></i>
</template>

<script setup>
import { computed } from 'vue';

// Definindo as props
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#000',
  },
  fontSize: {
    type: String,
    default: '16px',
  },
  style: {
    type: Object,
    default: () => ({}),
  },
});

// Computed para juntar os estilos padrão com os fornecidos
const computedStyle = computed(() => ({
  color: props.color,
  fontSize: props.fontSize,
  ...props.style,
}));
</script>
