

interface Article {
  id: string;
  slug: string;
  title: string;
  meta_description?: string;
  content: string;
  category_id: string;
  category_title?: string;
  created_at: string;
  updated_at: string;
  publish_status: string;
  tenant_id: string;
}

export function useArticleSeo(article: Article | null, canonicalUrl: string) {
  if (!article) return;
  useSeoMeta({
    title: article.title,
    description: article.meta_description,
    robots: 'index, follow',
    ogTitle: article.title,
    ogDescription: article.meta_description,
    ogType: 'article',
    ogUrl: canonicalUrl,
    ogLocale: 'pt_BR',
    ogImageAlt: article.title,
    twitterCard: 'summary',
    twitterTitle: article.title,
    twitterDescription: article.meta_description,
    fbAppId: '603230818880308'
  })
} 