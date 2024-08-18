// utils/loadTypebotScript.ts
export const loadTypebotScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window.Typebot !== 'undefined') {
      resolve(); // Se o Typebot já está carregado, resolva imediatamente
      return;
    }

    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.2.60/dist/web.js';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Falha ao carregar o script do Typebot'));

    document.head.appendChild(script);
  });
};
