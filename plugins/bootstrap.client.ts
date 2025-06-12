export default defineNuxtPlugin(async () => {
  // Carrega o Bootstrap JavaScript apenas no cliente
  if (process.client) {
    try {
      // @ts-ignore
      await import('bootstrap/dist/js/bootstrap.bundle.min.js')
    } catch (error) {
      console.warn('Erro ao carregar Bootstrap JS:', error)
    }
  }
}) 