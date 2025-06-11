export default defineNuxtConfig({
  // Configuração de e-mail para envio de mensagens via SMTP
  mail: {
    message: {
      from: 'noreply@gsstudio.com.br',
      to: 'giovannistr@gmail.com',
    },
    smtp: {
      host: 'mail.gsstudio.com.br',
      port: 465,
      auth: {
        user: 'noreply@gsstudio.com.br',
        pass: 'Agenciagsstudio1993#@!',
      },
    },
  },

  ogImage: {
    fonts: [
      // will load the Noto Sans font from Google fonts
      'Unbounded:400',
    ],
  },

  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'GS Studio - Marketing em Ribeirão Preto, Sertãozinho e São Paulo',
      url: 'https://gsstudio.com.br',
      description:
        'Agência full service especializada em design, marketing e tecnologia, localizada em Ribeirão Preto, oferecendo soluções completas com foco em resultados.',
      sameAs: [
        'https://www.facebook.com/gsstudio',
        'https://www.instagram.com/gsstudio',
        'https://www.linkedin.com/company/gsstudio',
      ],
    },
  },

  robots: {
    credits: false,
    mergeWithRobotsTxtPath: false,
    debug: true,
    metaTag: true,
  },

  ssr: true,

  nitro: {    
    // preset: 'netlify',
    debug: true,
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/robots.txt'],
    },
  },

  
  
  // Configurações de cache e otimização para SSR
  routeRules: {
    '/': { prerender: false },
    '/api/**': { cache: { maxAge: 60 * 60 } }, // Cache API por 1 hora
    '/**': {
      // SSR com cache para todas as páginas de artigos
      ssr: true,
      cache: { maxAge: 60 * 10 }, // 10 minutos de cache
    },
  },

  hooks: {
    'robots:config': (config) => {
      config.sitemap = ['/sitemap.xml'];
    },
  },

  app: {
    baseURL: '/',
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
    '@nuxtjs/web-vitals',
    '@vite-pwa/nuxt',
    '@nuxtjs/color-mode',
    // '@nuxtjs/supabase',
  ],

  gtm: {
    id: 'GTM-N3X2JT4',
    defer: false,
    compatibility: false,
    enabled: true,
    debug: true,
  },

  vitalizer: {
    disableStylesheets: 'entry',
    disablePrefetchLinks: true,
  },

  webVitals: {
    debug: true, // Logs desabilitados para produção
    provider: "ga",
    disabled: false, // Ativar o Web Vitals
    ga: { id: 'G-PCWNHC1PD1' },
  },

  runtimeConfig: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    SUPABASE_TENANT_ID: process.env.SUPABASE_TENANT_ID,
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'https://gsstudio.com.br',
    }
  },

  googleFonts: {
    families: {
      'DM Sans': [400, 700],
      'Unbounded': [400, 700],
    },
    fontsDir: 'assets/fonts',
    base64: true,
    overwriting: false,
    download: true,
  },

  swiper: {
    prefix: 'Swiper',
  },

  image: {
    quality: 75,
    domains: [
      's3.gsstudio.com.br',
      'gsstudio.com.br',
      'painel.gsadmin.app',
    ],
  },

  css: [
    'swiper/swiper-bundle.css',
    'swiper/css/effect-creative',
    'swiper/css/zoom',
    '@/assets/css/main.css',
    'boxicons/css/boxicons.min.css',
  ],

  plugins: [
    // '@/plugins/main.client.ts',
    '@/plugins/bootstrap.client.ts',
    '@/plugins/web-vitals.client.ts',
  ],

  pwa: {
    registerType: 'autoUpdate',
    workbox: {
      clientsClaim: true,
      skipWaiting: true,
    }
  },

  compatibilityDate: '2025-03-26',
});