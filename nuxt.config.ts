import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({

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
      titleTemplate: '%s | GS STUDIO',
      htmlAttrs: {
        lang: 'pt-br',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'GS Studio é uma agência especializada em design, marketing e tecnologia, oferecendo soluções completas com foco em resultados.' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'keywords', content: 'design em Ribeirão Preto, design em Sertãozinho, criação de marca em São Paulo, marketing em ribeirao preto, tráfego pago em sertaozinho, criação de sites em são paulo, marketing, desenvolvimento de sites, sites, comprar site, fazer loja online, ecommerce, e-commerce, gestao de conteudo, conteudo para redes sociais, agencia de marketing, agencia de publicidade' },
        { name: 'robots', content: 'index,follow' }, // Controle de indexação
        { name: 'googlebot', content: 'index, follow' }, // Controle para o Googlebot
        { name: 'author', content: 'GS Studio' },
        { name: 'canonical', content: 'https://www.gsstudio.com.br/' },
    
        // Open Graph Meta Tags
        { property: 'og:title', content: 'GS Studio - Soluções em Marketing, Design e Tecnologia' },
        { property: 'og:description', content: 'GS Studio é uma agência focada em design, marketing e tecnologia.' },
        { property: 'og:image', content: 'https://www.gsstudio.com.br/img/thumb_gsstudio.jpg?1200x630' }, // Imagem principal com tamanho adequado para redes sociais
        { property: 'og:image:type', content: 'image/jpeg' }, // Tipo da imagem (JPEG)
        { property: 'og:image:width', content: '1200' }, // Largura da imagem principal
        { property: 'og:image:height', content: '630' }, // Altura da imagem principal
        { property: 'og:url', content: 'https://www.gsstudio.com.br/' },
        { property: 'og:type', content: 'website' },
    
        // Fallback para imagens em PNG
        { hid: 'og:image:png', property: 'og:image', content: 'https://www.gsstudio.com.br/img/thumb_gsstudio.png' },
    
        // Facebook App ID (se aplicável)
        { property: 'fb:app_id', content: 'ID_do_Facebook_App' }, // Se estiver usando o Facebook App
    
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
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