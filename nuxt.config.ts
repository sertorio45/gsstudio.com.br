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
    '/': { prerender: false, ssr: true },
    '/api/**': {prerender: false, ssr: true},
    '/**': {
      // SSR com cache para todas as páginas de artigos
      ssr: true,
    },
  },

  hooks: {
    'robots:config': (config) => {
      config.sitemap = ['/sitemap.xml'];
    },
    'build:manifest': (manifest) => {
      const css = Object.values(manifest).find((options) => options.isEntry)?.css;
      if (css) {
        for (let i = css.length - 1; i >= 0; i--) {
          if (css[i].startsWith('entry')) css.splice(i, 1);
        }
      }
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
    '@nuxtjs/color-mode',
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



  runtimeConfig: {
    public: {
      apiBase: '/api',
      SUPABASE_URL: 'https://srzohnuulwgonduoudfp.supabase.co',
      SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyeW9obnV1bHdnb25kdXNvZHJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3OTM1NDgsImV4cCI6MjA2MzM2OTU0OH0.Swg2RXgjK_0jlsdVIZextQdufDkfRkaCI5YQH2bA-kg',
      SUPABASE_TENANT_ID: '286f2ba0-b7a0-4685-b44a-24a55f6119c8',
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
    'bootstrap/dist/css/bootstrap.css',
    'swiper/swiper-bundle.css',
    'swiper/css/effect-creative',
    'swiper/css/zoom',
    '@/assets/css/main.css',
    'boxicons/css/boxicons.min.css',
  ],

  plugins: [
    '~/plugins/bootstrap.client',
  ],

  pwa: {
    registerType: 'autoUpdate',
    workbox: {
      clientsClaim: true,
      skipWaiting: true,
      navigateFallback: null,
    },
    manifest: {
      name: 'GS Studio',
      short_name: 'GS Studio',
      description: 'Agência full service especializada em design, marketing e tecnologia',
      theme_color: '#000000',
      background_color: '#ffffff',
    }
  },

  compatibilityDate: '2025-03-26',
});