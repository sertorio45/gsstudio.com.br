export interface Article {
  id: string
  slug: string
  title: string
  meta_description?: string
  content: string
  category_id: string
  category_title?: string
  created_at: string
  updated_at: string
  publish_status: string
  tenant_id: string
  excerpt?: string
  path?: string
  cover?: unknown
}

export interface ArticleCategory {
  id: string
  title: string
  description?: string
  created_at: string
}

export function useArticles() {
  const articles = ref<Article[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchArticles(): Promise<Article[]> {
    loading.value = true
    error.value = null

    try {
      const data = await $fetch<Article[]>('/api/articles', {
        headers: useProtectedApiHeaders(),
      })
      articles.value = data || []
      return articles.value
    } catch (err: any) {
      error.value = err?.message || 'Erro ao buscar artigos'
      console.error('Erro ao buscar artigos:', err)
      return []
    } finally {
      loading.value = false
    }
  }

  async function fetchArticleBySlug(slug: string): Promise<Article | null> {
    try {
      return await $fetch<Article>(`/api/articles/${slug}`, {
        headers: useProtectedApiHeaders(),
      })
    } catch (err: any) {
      console.error('Erro ao buscar artigo por slug:', err)
      return null
    }
  }

  return {
    articles,
    loading,
    error,
    fetchArticles,
    fetchArticleBySlug,
  }
}
