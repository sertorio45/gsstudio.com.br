import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  ssr: false,  // Certifique-se de que o SSR está habilitado, se necessário
  app: {
    head: {
      title: 'GS Studio - Agência Especializada em Design, Marketing e Tecnologia',
      htmlAttrs: {
        lang: 'pt-br'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Descrição da GS Studio, uma agência especializada em design, marketing e tecnologia.' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'keywords', content: 'design, marketing, tecnologia, agência, GS Studio' },
        { name: 'robots', content: 'index,follow' },
        { name: 'author', content: 'GS Studio' },
        { property: 'og:title', content: 'GS Studio - Agência Especializada em Design, Marketing e Tecnologia' },
        { property: 'og:description', content: 'GS Studio é uma agência focada em design, marketing e tecnologia, oferecendo soluções completas para empresas.' },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:url', content: 'https://www.gsstudio.com.br' },
        { property: 'og:type', content: 'website' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: 'GS Studio - Agência Especializada em Design, Marketing e Tecnologia' },
        { property: 'twitter:description', content: 'GS Studio é uma agência focada em design, marketing e tecnologia.' },
        { property: 'twitter:image', content: '/og-image.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
      ],
    },
    baseURL: '/gsstudio'
  },

  devtools: { enabled: true },
  modules: ["@nuxt/image", "nuxt-swiper", "nuxt-easy-lightbox", "@nuxtjs/google-fonts", "@nuxtjs/robots"],

  googleFonts: {
    families: {
      'DM Sans': [400, 700], // Incluindo regular e bold (400 e 700)
    },
    display: 'swap',
  },

  robots: {
    UserAgent: '*',
    Disallow: '/admin',
    Allow: '/'
  },

  swiper: {
    prefix: 'Swiper',
  },

  css: [
    'swiper/swiper-bundle.css',
    'swiper/css/effect-creative',
    'swiper/css/zoom',
    '@/assets/css/main.css',
    'boxicons/css/boxicons.min.css',
  ],

  plugins: [
    '@/plugins/main.client.ts',
    '@/plugins/bootstrap.client.ts',
  ],

  compatibilityDate: '2024-07-22'
});
