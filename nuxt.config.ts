export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxt/image", "nuxt-swiper", "nuxt-easy-lightbox"],
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
    '~/plugins/bootstrap.client.ts'
  ],
});