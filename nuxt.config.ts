import { VitePWA } from 'vite-plugin-pwa'


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

  routeRules: {
    '/': { prerender: true },
    '/api/*': { cache: { maxAge: 60 * 60 } },
  },

  ssr: true,

  nitro: {
    preset: 'netlify',
    debug: true,
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/robots.txt'],
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
    '@nuxtjs/web-vitals',
    '@vite-pwa/nuxt',
  ],

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

  vitalizer: {
    disableStylesheets: 'entry',
    disablePrefetchLinks: true,
  },

  webVitals: {
    debug: true, // Logs desabilitados para produção
    provider: "gtm",
    disabled: true, // Ativar o Web Vitals
  },

  runtimeConfig: {
    public: {
      VITE_STRAPI_URL: process.env.VITE_STRAPI_URL || 'https://str-gsstudio.gsstudio.com.br',
      apiBase: '/api',
      // gtm: {
      //   id: 'GTM-N3X2JT4',
      // },
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
    quality: 75,
    domains: ['s3.gsstudio.com.br', 'gsstudio.com.br'],
    provider: 'ipx',
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
    '@/plugins/web-vitals.client.ts',
  ],

  pwa: {
    registerType: 'autoUpdate',
    workbox: {
      clientsClaim: true,
      skipWaiting: true,
    }
  },

  compatibilityDate: '2024-04-03',
});