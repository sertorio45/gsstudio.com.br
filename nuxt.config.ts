import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  ssr: true,
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
        { property: 'og:image', content: 'https://s3.gsstudio.com.br/gsstudio/site/img/thumb_gsstudio.webp' },
        { property: 'og:url', content: 'https://www.gsstudio.com.br' },
        { property: 'og:type', content: 'website' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: 'GS Studio - Agência Especializada em Design, Marketing e Tecnologia' },
        { property: 'twitter:description', content: 'GS Studio é uma agência focada em design, marketing e tecnologia.' },
        { property: 'twitter:image', content: 'https://s3.gsstudio.com.br/gsstudio/site/img/thumb_gsstudio.webp' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
      ],
    },
    baseURL: '/',
  },

  devtools: { enabled: true },
  modules: ["@nuxt/image", "nuxt-swiper", "nuxt-easy-lightbox", "@nuxtjs/google-fonts", "@nuxtjs/robots", "@vee-validate/nuxt"],
  
  googleFonts: {
    families: {
      'DM Sans': [400, 700],
      'Unbounded' : [400, 700], // Incluindo regular e bold (400 e 700)
    },
    fontsDir: 'assets/fonts',
    base64: true,
    overwriting: false,
  },

  swiper: {
    prefix: 'Swiper',
  },

  image: {
    quality: 80,
    domains: [ 's3.gsstudio.com.br' , 'gsstudio.com.br' ],
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

  compatibilityDate: '2024-09-30',
});