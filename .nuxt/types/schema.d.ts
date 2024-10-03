import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     */
    ["swiper"]: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-easy-lightbox`
     */
    ["easyLightbox"]: typeof import("nuxt-easy-lightbox").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/google-fonts`
     */
    ["googleFonts"]: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]: typeof import("/Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/robots`
     */
    ["robots"]: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@vee-validate/nuxt`
     */
    ["veeValidate"]: typeof import("@vee-validate/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     */
    ["sitemap"]: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-schema-org`
     */
    ["schemaOrg"]: typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-vitalizer`
     */
    ["vitalizer"]: typeof import("nuxt-vitalizer").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@zadigetvoltaire/nuxt-gtm`
     */
    ["gtm"]: typeof import("@zadigetvoltaire/nuxt-gtm").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@dargmuesli/nuxt-cookie-control`
     */
    ["cookieControl"]: typeof import("@dargmuesli/nuxt-cookie-control").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     */
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-easy-lightbox`
     */
    ["easyLightbox"]?: typeof import("nuxt-easy-lightbox").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/google-fonts`
     */
    ["googleFonts"]?: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]?: typeof import("/Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/robots`
     */
    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vee-validate/nuxt`
     */
    ["veeValidate"]?: typeof import("@vee-validate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     */
    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-schema-org`
     */
    ["schemaOrg"]?: typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-vitalizer`
     */
    ["vitalizer"]?: typeof import("nuxt-vitalizer").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@zadigetvoltaire/nuxt-gtm`
     */
    ["gtm"]?: typeof import("@zadigetvoltaire/nuxt-gtm").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@dargmuesli/nuxt-cookie-control`
     */
    ["cookieControl"]?: typeof import("@dargmuesli/nuxt-cookie-control").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["nuxt-easy-lightbox", Exclude<NuxtConfig["easyLightbox"], boolean>] | ["@nuxtjs/google-fonts", Exclude<NuxtConfig["googleFonts"], boolean>] | ["/Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>] | ["@vee-validate/nuxt", Exclude<NuxtConfig["veeValidate"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["nuxt-schema-org", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["nuxt-vitalizer", Exclude<NuxtConfig["vitalizer"], boolean>] | ["@zadigetvoltaire/nuxt-gtm", Exclude<NuxtConfig["gtm"], boolean>] | ["@dargmuesli/nuxt-cookie-control", Exclude<NuxtConfig["cookieControl"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     * @see https://www.npmjs.com/package/nuxt-swiper
     */
    ["swiper"]: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-easy-lightbox`
     * @see https://www.npmjs.com/package/nuxt-easy-lightbox
     */
    ["easyLightbox"]: typeof import("nuxt-easy-lightbox").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/google-fonts`
     * @see https://www.npmjs.com/package/@nuxtjs/google-fonts
     */
    ["googleFonts"]: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package//Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/nuxt-site-config/dist/module
     */
    ["site"]: typeof import("/Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/robots`
     * @see https://www.npmjs.com/package/@nuxtjs/robots
     */
    ["robots"]: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@vee-validate/nuxt`
     * @see https://www.npmjs.com/package/@vee-validate/nuxt
     */
    ["veeValidate"]: typeof import("@vee-validate/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     * @see https://www.npmjs.com/package/@nuxtjs/sitemap
     */
    ["sitemap"]: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-schema-org`
     * @see https://www.npmjs.com/package/nuxt-schema-org
     */
    ["schemaOrg"]: typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-vitalizer`
     * @see https://www.npmjs.com/package/nuxt-vitalizer
     */
    ["vitalizer"]: typeof import("nuxt-vitalizer").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@zadigetvoltaire/nuxt-gtm`
     * @see https://www.npmjs.com/package/@zadigetvoltaire/nuxt-gtm
     */
    ["gtm"]: typeof import("@zadigetvoltaire/nuxt-gtm").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@dargmuesli/nuxt-cookie-control`
     * @see https://www.npmjs.com/package/@dargmuesli/nuxt-cookie-control
     */
    ["cookieControl"]: typeof import("@dargmuesli/nuxt-cookie-control").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     * @see https://www.npmjs.com/package/nuxt-swiper
     */
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-easy-lightbox`
     * @see https://www.npmjs.com/package/nuxt-easy-lightbox
     */
    ["easyLightbox"]?: typeof import("nuxt-easy-lightbox").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/google-fonts`
     * @see https://www.npmjs.com/package/@nuxtjs/google-fonts
     */
    ["googleFonts"]?: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package//Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/nuxt-site-config/dist/module
     */
    ["site"]?: typeof import("/Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/robots`
     * @see https://www.npmjs.com/package/@nuxtjs/robots
     */
    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vee-validate/nuxt`
     * @see https://www.npmjs.com/package/@vee-validate/nuxt
     */
    ["veeValidate"]?: typeof import("@vee-validate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     * @see https://www.npmjs.com/package/@nuxtjs/sitemap
     */
    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-schema-org`
     * @see https://www.npmjs.com/package/nuxt-schema-org
     */
    ["schemaOrg"]?: typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-vitalizer`
     * @see https://www.npmjs.com/package/nuxt-vitalizer
     */
    ["vitalizer"]?: typeof import("nuxt-vitalizer").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@zadigetvoltaire/nuxt-gtm`
     * @see https://www.npmjs.com/package/@zadigetvoltaire/nuxt-gtm
     */
    ["gtm"]?: typeof import("@zadigetvoltaire/nuxt-gtm").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@dargmuesli/nuxt-cookie-control`
     * @see https://www.npmjs.com/package/@dargmuesli/nuxt-cookie-control
     */
    ["cookieControl"]?: typeof import("@dargmuesli/nuxt-cookie-control").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["nuxt-easy-lightbox", Exclude<NuxtConfig["easyLightbox"], boolean>] | ["@nuxtjs/google-fonts", Exclude<NuxtConfig["googleFonts"], boolean>] | ["/Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>] | ["@vee-validate/nuxt", Exclude<NuxtConfig["veeValidate"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["nuxt-schema-org", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["nuxt-vitalizer", Exclude<NuxtConfig["vitalizer"], boolean>] | ["@zadigetvoltaire/nuxt-gtm", Exclude<NuxtConfig["gtm"], boolean>] | ["@dargmuesli/nuxt-cookie-control", Exclude<NuxtConfig["cookieControl"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   sitemap: {
      isI18nMapped: boolean,

      sitemapName: string,

      isMultiSitemap: boolean,

      excludeAppSources: Array<any>,

      cacheMaxAgeSeconds: number,

      autoLastmod: boolean,

      defaultSitemapsChunkSize: number,

      minify: boolean,

      sortEntries: boolean,

      debug: boolean,

      discoverImages: boolean,

      discoverVideos: boolean,

      sitemapsPathPrefix: string,

      isNuxtContentDocumentDriven: boolean,

      xsl: string,

      xslTips: boolean,

      xslColumns: Array<{

      }>,

      credits: boolean,

      version: string,

      sitemaps: {
         "sitemap.xml": {
            sitemapName: string,

            route: string,

            defaults: any,

            include: Array<any>,

            exclude: Array<string>,

            includeAppSources: boolean,
         },
      },
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,
   },

   "nuxt-robots": {
      version: string,

      usingNuxtContent: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      header: boolean,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,
   },

   "nuxt-simple-robots": {
      version: string,

      usingNuxtContent: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      header: boolean,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,
   },
  }
  interface PublicRuntimeConfig {
   gtm: {
      devtools: boolean,

      id: string,

      defer: boolean,

      compatibility: boolean,

      nonce: string,

      enabled: boolean,

      debug: boolean,

      loadScript: boolean,

      enableRouterSync: boolean,

      trackOnNextTick: boolean,
   },

   "nuxt-schema-org": {
      reactive: boolean,

      minify: boolean,

      scriptAttributes: {
         id: string,
      },

      identity: any,

      version: string,
   },

   cookieControl: {
      barPosition: string,

      closeModalOnClickOutside: boolean,

      colors: {
         barBackground: string,

         barButtonBackground: string,

         barButtonColor: string,

         barButtonHoverBackground: string,

         barButtonHoverColor: string,

         barTextColor: string,

         checkboxActiveBackground: string,

         checkboxActiveCircleBackground: string,

         checkboxDisabledBackground: string,

         checkboxDisabledCircleBackground: string,

         checkboxInactiveBackground: string,

         checkboxInactiveCircleBackground: string,

         controlButtonBackground: string,

         controlButtonHoverBackground: string,

         controlButtonIconColor: string,

         controlButtonIconHoverColor: string,

         focusRingColor: string,

         modalBackground: string,

         modalButtonBackground: string,

         modalButtonColor: string,

         modalButtonHoverBackground: string,

         modalButtonHoverColor: string,

         modalOverlay: string,

         modalOverlayOpacity: number,

         modalTextColor: string,

         modalUnsavedColor: string,
      },

      cookies: {
         necessary: Array<any>,

         optional: Array<any>,
      },

      cookieExpiryOffsetMs: number,

      cookieNameIsConsentGiven: string,

      cookieNameCookiesEnabledIds: string,

      cookieOptions: {
         path: string,

         sameSite: string,

         secure: any,
      },

      isAcceptNecessaryButtonEnabled: boolean,

      isControlButtonEnabled: boolean,

      isCookieIdVisible: boolean,

      isCssEnabled: boolean,

      isCssPonyfillEnabled: boolean,

      isDashInDescriptionEnabled: boolean,

      isIframeBlocked: boolean,

      isModalForced: boolean,

      locales: Array<string>,

      localeTexts: {
         en: {
            accept: string,

            acceptAll: string,

            bannerDescription: string,

            bannerTitle: string,

            close: string,

            cookiesFunctional: string,

            cookiesNecessary: string,

            cookiesOptional: string,

            decline: string,

            declineAll: string,

            here: string,

            iframeBlocked: string,

            manageCookies: string,

            save: string,

            settingsUnsaved: string,
         },

         pt: {
            accept: string,

            acceptAll: string,

            bannerDescription: string,

            bannerTitle: string,

            close: string,

            cookiesFunctional: string,

            cookiesNecessary: string,

            cookiesOptional: string,

            decline: string,

            declineAll: string,

            here: string,

            iframeBlocked: string,

            manageCookies: string,

            save: string,

            settingsUnsaved: string,
         },
      },
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }