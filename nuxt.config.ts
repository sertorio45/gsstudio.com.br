export default defineNuxtConfig({
  // Configuração de e-mail para envio de mensagens via SMTP
  mail: {
    message: {
      from: 'noreply@gsstudio.com.br',
      to: 'giovannistr@gmail.com',
    },
    smtp: {
      host: 'mail.gsstudio.com.br',
      port: 587,
      auth: {
        user: 'noreply@gsstudio.com.br',
        pass: 'Agenciagsstudio1993#@!',
      },
    },
  },

  // Configuração do módulo robots para gerar o arquivo robots.txt
  robots: {
    credits: false,
    mergeWithRobotsTxtPath: true,
    robotsEnabledValue: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    enabled: true,
    allow: [ '*' ],
    debug: true,
  },

  // Configuração de delay na hidratação
  delayHydration: {
    mode: 'init',
  },

  // Configurações gerais de SSR
  ssr: true,

  // Configuração do Nitro para rodar em modo 'node-server'
  nitro: {
    preset: 'node-server',
    debug: true,
  },

  // Configurações de meta tags e cabeçalho
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
  
  // Configuração do site
  site: {
    url: 'https://gsstudio.com.br',
    name: 'GS STUDIO',
  },

  // Habilita ferramentas de desenvolvimento
  devtools: { enabled: false },

  // Módulos Nuxt utilizados
  modules: [
    '@nuxt/image', 
    'nuxt-swiper', 
    'nuxt-easy-lightbox', 
    '@nuxtjs/google-fonts', 
    '@nuxtjs/robots', 
    '@vee-validate/nuxt', 
    '@nuxtjs/sitemap', 
    'nuxt-schema-org', 
    'nuxt-vitalizer', 
    '@zadigetvoltaire/nuxt-gtm', 
    '@dargmuesli/nuxt-cookie-control', 
    '@nuxtjs/html-validator', 
    '@nuxtjs/partytown', 
    '@vite-pwa/nuxt', 
    'nuxt-delay-hydration', 
    'nuxt-og-image', 
    'nuxt-mail',
  ],

  // Configurações do Google Tag Manager (GTM)
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
  
  
  // Configurações em runtime (públicas)
  runtimeConfig: {
    public: {
      apiBase: '/api',
      gtm: {
        id: 'GTM-N3X2JT4',
      },
    },

  },
  
  // Configurações do Google Fonts
  googleFonts: {
    families: {
      'DM Sans': [400, 700],
      'Unbounded': [400, 700],
    },
    fontsDir: 'assets/fonts',
    base64: true,
    overwriting: false,
  },

  // Configurações do Swiper
  swiper: {
    prefix: 'Swiper',
  },

  // Configurações de otimização de imagens
  image: {
    quality: 80,
    domains: ['s3.gsstudio.com.br', 'gsstudio.com.br'],
    provider: 'ipx',
  },

  // Arquivos CSS incluídos
  css: [
    'swiper/swiper-bundle.css',
    'swiper/css/effect-creative',
    'swiper/css/zoom',
    '@/assets/css/main.css',
    'boxicons/css/boxicons.min.css',
  ],

  // Plugins incluídos
  plugins: [
    '@/plugins/main.client.ts',
    '@/plugins/bootstrap.client.ts',
  ],

  // Data de compatibilidade
  compatibilityDate: '2024-09-30',
});
