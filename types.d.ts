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

interface Article {
  id: number;
  created_at: string;
  update_at: string;
  title: string;
  content: string;
  meta_description: string;
  tenant_id: string;
  author_id: string | null;
  slug: string;
  thumb_url: string;
  publish_status: string;
  category_id: number;
}

interface SocialNetwork {
  name: string;
  url: string;
  icon: string;
}

// global.d.ts
export {};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

