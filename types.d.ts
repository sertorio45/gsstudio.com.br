// types.d.ts
export interface Article {
    id: number;
    slug: string;
    titulo: string;
    thumb?: {
      url?: string;
    };
    published_at: string;
    category: number;
    imageLoaded?: boolean;
  }
  
  export interface Category {
    id: number;
    title: string;
  }

  // types/nuxt-mail.d.ts
declare module '@nuxt/schema' {
  interface NuxtConfig {
    mail?: {
      message: {
        from: string,
        to: string
      },
      smtp: {
        host: string,
        port: number,
        auth: {
          user: string,
          pass: string
        }
      }
    }
  }
}

  