import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  

  delayHydration: {
    mode: 'init',
  },
  ssr: true,
  nitro: {
    preset: 'node-server'
  },
  app: {
    head: {
      titleTemplate: 'GS STUDIO | %s',
      htmlAttrs: {
        lang: 'pt-BR',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'GS Studio' },
        { property: 'og:type', content: 'website' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  
  site: {
    url: 'https://gsstudio.com.br',
    name: 'GS STUDIO',
  },

  devtools: { enabled: true },


  modules: ['@nuxt/image', 'nuxt-swiper', 'nuxt-easy-lightbox', '@nuxtjs/google-fonts', '@nuxtjs/robots', '@vee-validate/nuxt', '@nuxtjs/sitemap', 'nuxt-schema-org', 'nuxt-vitalizer', '@zadigetvoltaire/nuxt-gtm', '@dargmuesli/nuxt-cookie-control', '@nuxtjs/html-validator', '@nuxtjs/partytown', '@vite-pwa/nuxt', 'nuxt-delay-hydration', 'nuxt-og-image'],
  

  gtm: {
    id: 'GTM-N3X2JT4',
    defer: true, 
    compatibility: false, 
    nonce: '2726c7f26c', 
    enabled: true,
    debug: true,
    loadScript: true,
    enableRouterSync: true,
    trackOnNextTick: false,
  },
  
  runtimeConfig: {
    public: {
      gtm: {
        id: 'GTM-N3X2JT4',
      },
    },
  },
  
  googleFonts: {
    families: {
      'DM Sans': [400, 700],
      'Unbounded': [400, 700],
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
    domains: ['s3.gsstudio.com.br', 'gsstudio.com.br'],
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