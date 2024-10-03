import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'GS Studio - Soluções em Marketing, Design e Tecnologia | Ribeirão Preto, Sertãozinho, São Paulo e Brasil',
      htmlAttrs: {
        lang: 'pt-br'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'GS Studio é uma agência full service especializada em design, marketing e tecnologia, oferecendo soluções completas com foco em resultados em Ribeirão Preto, Sertãozinho, São Paulo e outras cidades' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'keywords', content: 'design em Ribeirão Preto, design em Sertãozinho, criação de marca em São Paulo, marketing em ribeirao preto, tráfego pago em sertaozinho, criação de sites em são paulo' },
        { name: 'robots', content: 'index,follow' },
        { name: 'author', content: 'GS Studio' },
        { property: 'og:title', content: 'GS Studio - Soluções em Marketing, Design e Tecnologia | Ribeirão Preto, Sertãozinho, São Paulo e Brasil' },
        { property: 'og:description', content: 'GS Studio é uma agência full service especializada em design, marketing e tecnologia, oferecendo soluções completas com foco em resultados em Ribeirão Preto, Sertãozinho, São Paulo e outras cidades' },
        { property: 'og:image', content: '/thumb_gsstudio.webp' },
        { property: 'og:url', content: 'https://www.gsstudio.com.br' },
        { property: 'og:type', content: 'website' },
        { property: 'twitter:card', content: '/thumb_gsstudio.webp' },
        { property: 'twitter:title', content: 'GS Studio - Soluções em Marketing, Design e Tecnologia | Ribeirão Preto, Sertãozinho, São Paulo e Brasil' },
        { property: 'twitter:description', content: 'GS Studio é uma agência focada em design, marketing e tecnologia.' },
        { property: 'twitter:image', content: '/thumb_gsstudio.webp' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
      ],
    },
    },

  site: {
    url: 'https://gsstudio.com.br',
    name: 'GS STUDIO',
  },

  devtools: { enabled: true },
  modules: ["@nuxt/image", "nuxt-swiper", "nuxt-easy-lightbox", "@nuxtjs/google-fonts", "@nuxtjs/robots", "@vee-validate/nuxt", '@nuxtjs/sitemap', 'nuxt-schema-org', 'nuxt-vitalizer'],
  
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