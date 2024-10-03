
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
interface _GlobalComponents {
      'App': typeof import("../components/App.vue")['default']
    'Blog': typeof import("../components/Blog.vue")['default']
    'CarouselParceiros': typeof import("../components/CarouselParceiros.vue")['default']
    'CookieConsent': typeof import("../components/CookieConsent.vue")['default']
    'Footer': typeof import("../components/Footer.vue")['default']
    'Form': typeof import("../components/Form.vue")['default']
    'Header': typeof import("../components/Header.vue")['default']
    'Icon': typeof import("../components/Icon.vue")['default']
    'Portifolio': typeof import("../components/Portifolio.vue")['default']
    'CookieControl': typeof import("../node_modules/@dargmuesli/nuxt-cookie-control/dist/runtime/components/CookieControl.vue")['default']
    'CookieIframe': typeof import("../node_modules/@dargmuesli/nuxt-cookie-control/dist/runtime/components/CookieIframe.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'Swiper': typeof import("../node_modules/swiper/swiper-vue")['Swiper']
    'SwiperSlide': typeof import("../node_modules/swiper/swiper-vue")['SwiperSlide']
    'SiteLink': typeof import("../node_modules/nuxt-site-config/dist/runtime/nuxt/component/SiteLink.vue")['default']
    'RobotMeta': typeof import("../node_modules/@nuxtjs/robots/dist/runtime/nuxt/components/RobotMeta")['default']
    'Field': typeof import("../node_modules/vee-validate/dist/vee-validate")['Field']
    'ErrorMessage': typeof import("../node_modules/vee-validate/dist/vee-validate")['ErrorMessage']
    'FieldArray': typeof import("../node_modules/vee-validate/dist/vee-validate")['FieldArray']
    'SchemaOrgDebug': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgDebug']
    'SchemaOrgArticle': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgArticle']
    'SchemaOrgBreadcrumb': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgBreadcrumb']
    'SchemaOrgComment': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgComment']
    'SchemaOrgEvent': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgEvent']
    'SchemaOrgFoodEstablishment': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgFoodEstablishment']
    'SchemaOrgHowTo': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgHowTo']
    'SchemaOrgImage': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgImage']
    'SchemaOrgJobPosting': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgJobPosting']
    'SchemaOrgLocalBusiness': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgLocalBusiness']
    'SchemaOrgOrganization': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgOrganization']
    'SchemaOrgPerson': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgPerson']
    'SchemaOrgProduct': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgProduct']
    'SchemaOrgQuestion': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgQuestion']
    'SchemaOrgRecipe': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgRecipe']
    'SchemaOrgReview': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgReview']
    'SchemaOrgVideo': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgVideo']
    'SchemaOrgWebPage': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgWebPage']
    'SchemaOrgWebSite': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgWebSite']
    'SchemaOrgMovie': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgMovie']
    'SchemaOrgCourse': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgCourse']
    'SchemaOrgItemList': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgItemList']
    'SchemaOrgBook': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgBook']
    'SchemaOrgSoftwareApp': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgSoftwareApp']
    'DelayHydration': typeof import("../node_modules/nuxt-delay-hydration/dist/runtime/components/DelayHydration")['default']
    'SkipHydration': typeof import("../node_modules/nuxt-vitalizer/dist/runtime/components/SkipHydration")['default']
    'VitePwaManifest': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
    'NuxtPwaManifest': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
    'NuxtPwaAssets': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets")['default']
    'PwaAppleImage': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleImage.vue")['default']
    'PwaAppleSplashScreenImage': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleSplashScreenImage.vue")['default']
    'PwaFaviconImage': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaFaviconImage.vue")['default']
    'PwaMaskableImage': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaMaskableImage.vue")['default']
    'PwaTransparentImage': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaTransparentImage.vue")['default']
    'HydrationStatus': typeof import("../node_modules/nuxt-delay-hydration/dist/runtime/components/HydrationStatus.vue")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyApp': typeof import("../components/App.vue")['default']
    'LazyBlog': typeof import("../components/Blog.vue")['default']
    'LazyCarouselParceiros': typeof import("../components/CarouselParceiros.vue")['default']
    'LazyCookieConsent': typeof import("../components/CookieConsent.vue")['default']
    'LazyFooter': typeof import("../components/Footer.vue")['default']
    'LazyForm': typeof import("../components/Form.vue")['default']
    'LazyHeader': typeof import("../components/Header.vue")['default']
    'LazyIcon': typeof import("../components/Icon.vue")['default']
    'LazyPortifolio': typeof import("../components/Portifolio.vue")['default']
    'LazyCookieControl': typeof import("../node_modules/@dargmuesli/nuxt-cookie-control/dist/runtime/components/CookieControl.vue")['default']
    'LazyCookieIframe': typeof import("../node_modules/@dargmuesli/nuxt-cookie-control/dist/runtime/components/CookieIframe.vue")['default']
    'LazyNuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'LazyNuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'LazyNuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'LazyClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'LazyDevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'LazyServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'LazyNuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'LazyNuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'LazyNuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'LazyNuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'LazyNuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'LazySwiper': typeof import("../node_modules/swiper/swiper-vue")['Swiper']
    'LazySwiperSlide': typeof import("../node_modules/swiper/swiper-vue")['SwiperSlide']
    'LazySiteLink': typeof import("../node_modules/nuxt-site-config/dist/runtime/nuxt/component/SiteLink.vue")['default']
    'LazyRobotMeta': typeof import("../node_modules/@nuxtjs/robots/dist/runtime/nuxt/components/RobotMeta")['default']
    'LazyField': typeof import("../node_modules/vee-validate/dist/vee-validate")['Field']
    'LazyErrorMessage': typeof import("../node_modules/vee-validate/dist/vee-validate")['ErrorMessage']
    'LazyFieldArray': typeof import("../node_modules/vee-validate/dist/vee-validate")['FieldArray']
    'LazySchemaOrgDebug': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgDebug']
    'LazySchemaOrgArticle': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgArticle']
    'LazySchemaOrgBreadcrumb': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgBreadcrumb']
    'LazySchemaOrgComment': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgComment']
    'LazySchemaOrgEvent': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgEvent']
    'LazySchemaOrgFoodEstablishment': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgFoodEstablishment']
    'LazySchemaOrgHowTo': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgHowTo']
    'LazySchemaOrgImage': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgImage']
    'LazySchemaOrgJobPosting': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgJobPosting']
    'LazySchemaOrgLocalBusiness': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgLocalBusiness']
    'LazySchemaOrgOrganization': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgOrganization']
    'LazySchemaOrgPerson': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgPerson']
    'LazySchemaOrgProduct': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgProduct']
    'LazySchemaOrgQuestion': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgQuestion']
    'LazySchemaOrgRecipe': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgRecipe']
    'LazySchemaOrgReview': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgReview']
    'LazySchemaOrgVideo': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgVideo']
    'LazySchemaOrgWebPage': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgWebPage']
    'LazySchemaOrgWebSite': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgWebSite']
    'LazySchemaOrgMovie': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgMovie']
    'LazySchemaOrgCourse': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgCourse']
    'LazySchemaOrgItemList': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgItemList']
    'LazySchemaOrgBook': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgBook']
    'LazySchemaOrgSoftwareApp': typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgSoftwareApp']
    'LazyDelayHydration': typeof import("../node_modules/nuxt-delay-hydration/dist/runtime/components/DelayHydration")['default']
    'LazySkipHydration': typeof import("../node_modules/nuxt-vitalizer/dist/runtime/components/SkipHydration")['default']
    'LazyVitePwaManifest': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
    'LazyNuxtPwaManifest': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
    'LazyNuxtPwaAssets': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets")['default']
    'LazyPwaAppleImage': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleImage.vue")['default']
    'LazyPwaAppleSplashScreenImage': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleSplashScreenImage.vue")['default']
    'LazyPwaFaviconImage': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaFaviconImage.vue")['default']
    'LazyPwaMaskableImage': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaMaskableImage.vue")['default']
    'LazyPwaTransparentImage': typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaTransparentImage.vue")['default']
    'LazyHydrationStatus': typeof import("../node_modules/nuxt-delay-hydration/dist/runtime/components/HydrationStatus.vue")['default']
    'LazyNuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'LazyNoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'LazyLink': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'LazyBase': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'LazyTitle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'LazyMeta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'LazyStyle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'LazyHead': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'LazyHtml': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'LazyBody': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'LazyNuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'LazyNuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const App: typeof import("../components/App.vue")['default']
export const Blog: typeof import("../components/Blog.vue")['default']
export const CarouselParceiros: typeof import("../components/CarouselParceiros.vue")['default']
export const CookieConsent: typeof import("../components/CookieConsent.vue")['default']
export const Footer: typeof import("../components/Footer.vue")['default']
export const Form: typeof import("../components/Form.vue")['default']
export const Header: typeof import("../components/Header.vue")['default']
export const Icon: typeof import("../components/Icon.vue")['default']
export const Portifolio: typeof import("../components/Portifolio.vue")['default']
export const CookieControl: typeof import("../node_modules/@dargmuesli/nuxt-cookie-control/dist/runtime/components/CookieControl.vue")['default']
export const CookieIframe: typeof import("../node_modules/@dargmuesli/nuxt-cookie-control/dist/runtime/components/CookieIframe.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const Swiper: typeof import("../node_modules/swiper/swiper-vue")['Swiper']
export const SwiperSlide: typeof import("../node_modules/swiper/swiper-vue")['SwiperSlide']
export const SiteLink: typeof import("../node_modules/nuxt-site-config/dist/runtime/nuxt/component/SiteLink.vue")['default']
export const RobotMeta: typeof import("../node_modules/@nuxtjs/robots/dist/runtime/nuxt/components/RobotMeta")['default']
export const Field: typeof import("../node_modules/vee-validate/dist/vee-validate")['Field']
export const ErrorMessage: typeof import("../node_modules/vee-validate/dist/vee-validate")['ErrorMessage']
export const FieldArray: typeof import("../node_modules/vee-validate/dist/vee-validate")['FieldArray']
export const SchemaOrgDebug: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgDebug']
export const SchemaOrgArticle: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgArticle']
export const SchemaOrgBreadcrumb: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgBreadcrumb']
export const SchemaOrgComment: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgComment']
export const SchemaOrgEvent: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgEvent']
export const SchemaOrgFoodEstablishment: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgFoodEstablishment']
export const SchemaOrgHowTo: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgHowTo']
export const SchemaOrgImage: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgImage']
export const SchemaOrgJobPosting: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgJobPosting']
export const SchemaOrgLocalBusiness: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgLocalBusiness']
export const SchemaOrgOrganization: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgOrganization']
export const SchemaOrgPerson: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgPerson']
export const SchemaOrgProduct: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgProduct']
export const SchemaOrgQuestion: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgQuestion']
export const SchemaOrgRecipe: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgRecipe']
export const SchemaOrgReview: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgReview']
export const SchemaOrgVideo: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgVideo']
export const SchemaOrgWebPage: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgWebPage']
export const SchemaOrgWebSite: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgWebSite']
export const SchemaOrgMovie: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgMovie']
export const SchemaOrgCourse: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgCourse']
export const SchemaOrgItemList: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgItemList']
export const SchemaOrgBook: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgBook']
export const SchemaOrgSoftwareApp: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgSoftwareApp']
export const DelayHydration: typeof import("../node_modules/nuxt-delay-hydration/dist/runtime/components/DelayHydration")['default']
export const SkipHydration: typeof import("../node_modules/nuxt-vitalizer/dist/runtime/components/SkipHydration")['default']
export const VitePwaManifest: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
export const NuxtPwaManifest: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
export const NuxtPwaAssets: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets")['default']
export const PwaAppleImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleImage.vue")['default']
export const PwaAppleSplashScreenImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleSplashScreenImage.vue")['default']
export const PwaFaviconImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaFaviconImage.vue")['default']
export const PwaMaskableImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaMaskableImage.vue")['default']
export const PwaTransparentImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaTransparentImage.vue")['default']
export const HydrationStatus: typeof import("../node_modules/nuxt-delay-hydration/dist/runtime/components/HydrationStatus.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyApp: typeof import("../components/App.vue")['default']
export const LazyBlog: typeof import("../components/Blog.vue")['default']
export const LazyCarouselParceiros: typeof import("../components/CarouselParceiros.vue")['default']
export const LazyCookieConsent: typeof import("../components/CookieConsent.vue")['default']
export const LazyFooter: typeof import("../components/Footer.vue")['default']
export const LazyForm: typeof import("../components/Form.vue")['default']
export const LazyHeader: typeof import("../components/Header.vue")['default']
export const LazyIcon: typeof import("../components/Icon.vue")['default']
export const LazyPortifolio: typeof import("../components/Portifolio.vue")['default']
export const LazyCookieControl: typeof import("../node_modules/@dargmuesli/nuxt-cookie-control/dist/runtime/components/CookieControl.vue")['default']
export const LazyCookieIframe: typeof import("../node_modules/@dargmuesli/nuxt-cookie-control/dist/runtime/components/CookieIframe.vue")['default']
export const LazyNuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const LazyNuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const LazyNuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const LazyClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const LazyDevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const LazyServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyNuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const LazyNuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const LazyNuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const LazyNuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const LazyNuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const LazySwiper: typeof import("../node_modules/swiper/swiper-vue")['Swiper']
export const LazySwiperSlide: typeof import("../node_modules/swiper/swiper-vue")['SwiperSlide']
export const LazySiteLink: typeof import("../node_modules/nuxt-site-config/dist/runtime/nuxt/component/SiteLink.vue")['default']
export const LazyRobotMeta: typeof import("../node_modules/@nuxtjs/robots/dist/runtime/nuxt/components/RobotMeta")['default']
export const LazyField: typeof import("../node_modules/vee-validate/dist/vee-validate")['Field']
export const LazyErrorMessage: typeof import("../node_modules/vee-validate/dist/vee-validate")['ErrorMessage']
export const LazyFieldArray: typeof import("../node_modules/vee-validate/dist/vee-validate")['FieldArray']
export const LazySchemaOrgDebug: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgDebug']
export const LazySchemaOrgArticle: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgArticle']
export const LazySchemaOrgBreadcrumb: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgBreadcrumb']
export const LazySchemaOrgComment: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgComment']
export const LazySchemaOrgEvent: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgEvent']
export const LazySchemaOrgFoodEstablishment: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgFoodEstablishment']
export const LazySchemaOrgHowTo: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgHowTo']
export const LazySchemaOrgImage: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgImage']
export const LazySchemaOrgJobPosting: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgJobPosting']
export const LazySchemaOrgLocalBusiness: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgLocalBusiness']
export const LazySchemaOrgOrganization: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgOrganization']
export const LazySchemaOrgPerson: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgPerson']
export const LazySchemaOrgProduct: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgProduct']
export const LazySchemaOrgQuestion: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgQuestion']
export const LazySchemaOrgRecipe: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgRecipe']
export const LazySchemaOrgReview: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgReview']
export const LazySchemaOrgVideo: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgVideo']
export const LazySchemaOrgWebPage: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgWebPage']
export const LazySchemaOrgWebSite: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgWebSite']
export const LazySchemaOrgMovie: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgMovie']
export const LazySchemaOrgCourse: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgCourse']
export const LazySchemaOrgItemList: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgItemList']
export const LazySchemaOrgBook: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgBook']
export const LazySchemaOrgSoftwareApp: typeof import("../node_modules/@unhead/schema-org/dist/vue")['SchemaOrgSoftwareApp']
export const LazyDelayHydration: typeof import("../node_modules/nuxt-delay-hydration/dist/runtime/components/DelayHydration")['default']
export const LazySkipHydration: typeof import("../node_modules/nuxt-vitalizer/dist/runtime/components/SkipHydration")['default']
export const LazyVitePwaManifest: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
export const LazyNuxtPwaManifest: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
export const LazyNuxtPwaAssets: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets")['default']
export const LazyPwaAppleImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleImage.vue")['default']
export const LazyPwaAppleSplashScreenImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleSplashScreenImage.vue")['default']
export const LazyPwaFaviconImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaFaviconImage.vue")['default']
export const LazyPwaMaskableImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaMaskableImage.vue")['default']
export const LazyPwaTransparentImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaTransparentImage.vue")['default']
export const LazyHydrationStatus: typeof import("../node_modules/nuxt-delay-hydration/dist/runtime/components/HydrationStatus.vue")['default']
export const LazyNuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const LazyNoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const LazyLink: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const LazyBase: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const LazyTitle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const LazyMeta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const LazyStyle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const LazyHead: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const LazyHtml: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const LazyBody: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const LazyNuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyNuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
