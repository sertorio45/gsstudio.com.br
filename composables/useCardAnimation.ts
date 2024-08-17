// composables/useCardAnimation.js
import { onMounted } from 'vue';

export function useCardAnimation() {
  onMounted(() => {
    const cards = document.querySelectorAll('.gscard');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const randomDelay = Math.random() * 500; // Delay aleatório entre 0 e 1000ms
          setTimeout(() => {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Para de observar após a animação
          }, randomDelay);
        }
      });
    }, {
      threshold: 0.3 // Ajuste este valor conforme necessário
    });

    cards.forEach(card => {
      // Verifica se a carta já está visível
      if (card.getBoundingClientRect().top < window.innerHeight) {
        card.classList.add('animate');
      } else {
        observer.observe(card);
      }
    });
  });
}
