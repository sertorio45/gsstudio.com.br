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
  