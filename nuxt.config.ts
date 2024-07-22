export default defineNuxtConfig({
    // Configurações do cabeçalho da página
    app: {
      head: {
        title: 'GS Studio - Agência Especializada em Design, Marketing e Tecnologia',
        htmlAttrs: {
          lang: 'pt-br'
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: 'Descrição da GS Studio' },
          { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
        ],
      },
    },
  
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxt/image", "nuxt-swiper", "nuxt-easy-lightbox", ],
  swiper: {
    // Swiper options
    //----------------------
    prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  css: [
    'swiper/swiper-bundle.css',
    'swiper/css/effect-creative',
    'swiper/css/zoom',
    '@/assets/css/main.css'
  ],
  plugins: [
    '~/plugins/main.client.ts',
    '~/plugins/bootstrap.client.ts',
    '~/plugins/vuesax.client.ts'
  ],
});