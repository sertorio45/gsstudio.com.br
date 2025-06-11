import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'

// Interface para o artigo
export interface Article {
  id: string;
  slug: string;
  title: string;
  description?: string;
  content: string;
  category_id: string;
  category_title?: string;
  created_at: string;
  updated_at: string;
  publish_status: string;
  tenant_id: string;
}

// Interface para categoria
export interface ArticleCategory {
  id: string;
  title: string;
  description?: string;
  created_at: string;
}

export function useArticles() {
  const articles = ref<Article[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const config = useRuntimeConfig()
  
  const supabase = createClient(
    config.SUPABASE_URL || 'https://srzohnuulwgonduoudfp.supabase.co',
    config.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyem9obnV1bHdnb25kdW91ZGZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3OTM1NDgsImV4cCI6MjA2MzM2OTU0OH0.Swg2RXgjK_0jlsdVIZextQdufDkfRkaCI5YQH2bA-kg'
  )

  const TENANT_ID = config.SUPABASE_TENANT_ID || '286f2ba0-b7a0-4685-b44a-24a55f6119c8'

  async function fetchArticles(): Promise<Article[]> {
    loading.value = true
    error.value = null
    
    try {
      // Buscar artigos publicados do tenant
      const { data: articlesData, error: articlesError } = await supabase
        .from('articles')
        .select('*')
        .eq('tenant_id', TENANT_ID)
        .eq('publish_status', 'published')
        .order('created_at', { ascending: false })

      if (articlesError || !articlesData) {
        throw new Error(articlesError?.message || 'Erro ao buscar artigos')
      }

      // Buscar categorias
      const { data: categories, error: categoriesError } = await supabase
        .from('articles_category')
        .select('*')

      if (categoriesError || !categories) {
        throw new Error(categoriesError?.message || 'Erro ao buscar categorias')
      }

      // Relacionar artigos com nome da categoria
      const articlesWithCategories: Article[] = articlesData.map((article: any) => {
        const category = categories.find((cat: any) => cat.id === article.category_id)
        return {
          ...article,
          category_title: category ? category.title : 'Sem categoria',
        } as Article
      })

      articles.value = articlesWithCategories
      return articlesWithCategories
      
    } catch (err: any) {
      error.value = err.message || 'Erro ao buscar artigos'
      console.error('Erro ao buscar artigos:', err)
      return []
    } finally {
      loading.value = false
    }
  }

  // Função para buscar um artigo específico por slug
  async function fetchArticleBySlug(slug: string): Promise<Article | null> {
    try {
      const { data: articleData, error: articleError } = await supabase
        .from('articles')
        .select('*')
        .eq('tenant_id', TENANT_ID)
        .eq('publish_status', 'published')
        .eq('slug', slug)
        .single()

      if (articleError || !articleData) {
        return null
      }

      // Buscar categoria do artigo
      const { data: category, error: categoryError } = await supabase
        .from('articles_category')
        .select('*')
        .eq('id', articleData.category_id)
        .single()

      return {
        ...articleData,
        category_title: category ? category.title : 'Sem categoria',
      } as Article

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