<template>
  <section class="hero-animated d-flex align-items-center justify-content-center flex-column text-center">
    <svg width="0" height="0">
      <filter id="liquid">
        <feTurbulence id="turb" type="turbulence" baseFrequency="0.02 0.03" numOctaves="2" result="turb" seed="2"/>
        <feDisplacementMap in2="turb" in="SourceGraphic" scale="0" xChannelSelector="R" yChannelSelector="G" id="disp"/>
      </filter>
    </svg>
    <h1 class="hero-title mb-3">Mentes criativas que criam</h1>
    <div class="hero-animated-phrase-wrapper">
      <h2 ref="animatedPhrase" class="hero-animated-phrase" style="filter: url(#liquid)"><em>{{ phrases[currentPhrase] }}</em></h2>
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

  // Direções possíveis: cima, baixo, direita, esquerda
  const directions = [
    { out: { y: -30, x: 0 }, in: { y: 30, x: 0 } },    // sobe
    { out: { y: 30, x: 0 }, in: { y: -30, x: 0 } },    // desce
    { out: { x: 30, y: 0 }, in: { x: -30, y: 0 } },    // direita
    { out: { x: -30, y: 0 }, in: { x: 30, y: 0 } }     // esquerda
  ]
  const random = Math.floor(Math.random() * directions.length)
  const dir = directions[random]

  // Anima o efeito liquid (distorção)
  const disp = document.getElementById('disp')
  if (disp) {
    gsap.fromTo(disp, { attr: { scale: 0 } }, { attr: { scale: 60 }, duration: 0.5, ease: 'power2.in' })
  }

  gsap.to(el, {
    ...dir.out,
    opacity: 0,
    duration: 0.5,
    ease: 'power2.in',
    onComplete: () => {
      currentPhrase.value = nextIndex
      if (disp) {
        gsap.fromTo(disp, { attr: { scale: 60 } }, { attr: { scale: 0 }, duration: 0.5, ease: 'power2.out' })
      }
      gsap.fromTo(
        el,
        { ...dir.in, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      )
    }
  })
}

onMounted(() => {
  intervalId = setInterval(() => {
    const next = (currentPhrase.value + 1) % phrases.length
    animateOutIn(next)
  }, 1500)
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>

.hero-title {
  font-size: 2.7rem;
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
  font-size: 7rem;
  font-weight: 600;
}
@media (max-width: 576px) {
  .hero-title {
    font-size: 2rem!important;
  }
  .hero-animated-phrase {
    font-size: calc(100vw / 10)!important;
  }
}
@media (max-width: 767.98px) {
  .hero-title {
    font-size: 1.7rem;
  }
  .hero-animated-phrase {
    font-size: 3vw;
  }
}
@media (max-width: 991.98px) {
  .hero-animated-phrase {
    font-size:11vw;
  }
}
@media (max-width: 1199.98px) {
  .hero-animated-phrase {
    font-size:8vw;
  }
}

</style> 