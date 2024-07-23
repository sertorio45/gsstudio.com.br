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

