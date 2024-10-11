import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({

  generate: {
    dir: 'dist'  // Certifique-se que o caminho está correto ou altere para `.output/public`
  },

  delayHydration: {
    mode: 'init',
  },
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true, // Nuxt rastreia links automaticamente para pré-renderizar
      routes: [],       // Rotas dinâmicas serão geradas sob demanda com ISR
    },
    preset: 'node-server',
  },
  router: {
    options: {
      linkActiveClass: 'active-link',
      linkExactActiveClass: 'exact-active-link'
    }
  },
  routeRules: {
    // Configura ISR para as rotas dinâmicas de artigos
    '/:slug': { isr: 60 },  // A página será regenerada a cada 60 segundos
  },
  hooks: {
    async 'nitro:config'(nitroConfig) {
      nitroConfig.prerender = nitroConfig.prerender || {}

      const getRoutes = async (): Promise<string[]> => {
        const baseURL = 'https://str-gsstudio.gsstudio.com.br'

        try {
          const response = await fetch(`${baseURL}/articles`)
          if (!response.ok) {
            throw new Error(`Erro ao buscar artigos: ${response.statusText}`)
          }
          const articles = await response.json()

          return articles.map((article: { slug: string }) => `/${article.slug}`)
        } catch (error) {
          console.error('Erro ao buscar os artigos:', error)
          return [] // Retorna um array vazio em caso de erro
        }
      }

      const dynamicRoutes = await getRoutes()
      nitroConfig.prerender.routes = nitroConfig.prerender.routes || []
      nitroConfig.prerender.routes.push(...dynamicRoutes)
    }
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