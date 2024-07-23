function initCardAnimation() {
  const cards = document.querySelectorAll('.gscard');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // Stop observing once animated
        }, Math.random() * 300); // Reduced random delay to 0-500ms for better performance
      }
    });
  }, {
    threshold: 0.1 // Adjust this value as needed
  });

}


document.addEventListener('scroll', function() {
  const fixedBtn = document.getElementById('fixedBtn');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const start = 100; // Ponto em que a div começa a rolar
  const stop = 500; // Ponto em que a div para de rolar

  if (scrollTop > start && scrollTop < stop) {
    fixedBtn.style.top = `${scrollTop - start + 20}px`;
  } else if (scrollTop >= stop) {
    fixedBtn.style.top = `${stop - start + 20}px`;
  } else {
    fixedBtn.style.top = '20px';
  }
});
