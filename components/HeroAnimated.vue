<template>
  <section class="hero-animated d-flex align-items-center justify-content-center flex-column text-center">
    <h1 class="hero-title mb-3">Mentes criativas que criam</h1>
    <div class="hero-animated-phrase-wrapper">
      <h2 ref="animatedPhrase" class="hero-animated-phrase"><em>{{ phrases[currentPhrase] }}</em></h2>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const phrases = [
  'valor',
  'identidade',
  'presença',
  'conexões',
  'significado',
  'impacto',
  'estratégia',
  'clareza',
  'soluções',
  'confiança',
  'experiências',
  'propósito'
]

const currentPhrase = ref(0)
const animatedPhrase = ref(null)
let intervalId = null

function animateOutIn(nextIndex) {
  const el = animatedPhrase.value
  if (!el) return
  gsap.to(el, { y: 30, opacity: 0, duration: 0.5, ease: 'power2.in', onComplete: () => {
    currentPhrase.value = nextIndex
    gsap.fromTo(el, { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' })
  }})
}

onMounted(() => {
  intervalId = setInterval(() => {
    const next = (currentPhrase.value + 1) % phrases.length
    animateOutIn(next)
  }, 2200)
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>

.hero-title {
  font-size: 2rem;
  font-weight: 400;
}
.hero-animated-phrase-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  text-transform: uppercase;
}

.hero-animated-phrase {
  font-size: 4rem;
  font-weight: 600;
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 2.5rem!important;
  }
  .hero-animated-phrase {
    font-size: 5rem!important;
  }
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  .hero-animated-phrase {
    font-size: 4.8rem!important;
  }
}

@media (min-width: 320px) {
  .hero-title {
    font-size: 1.5rem;
  }
  .hero-animated-phrase {
    font-size: 2.1rem;
  }
}


</style> 