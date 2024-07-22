export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
      const script = document.createElement('script');
      script.src = './js/main.js';
      script.async = true;
      document.body.appendChild(script);
    }
  });
  