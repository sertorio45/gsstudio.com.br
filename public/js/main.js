document.addEventListener('DOMContentLoaded', () => {
  initCardAnimation();
});

function initCardAnimation() {
  const cards = document.querySelectorAll('.gscard');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // Para de observar após animar
        }, Math.random() * 300); // Atraso aleatório reduzido para melhor desempenho
      }
    });
  }, {
    threshold: 0.1 // Ajuste este valor conforme necessário
  });

  cards.forEach(card => {
    // Verifica se a carta já está visível
    if (card.getBoundingClientRect().top < window.innerHeight) {
      card.classList.add('animate');
    } else {
      observer.observe(card);
    }
  });
}
