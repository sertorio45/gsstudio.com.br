import { createClient } from '@supabase/supabase-js'
import { defineEventHandler, createError, getRouterParam } from 'h3'

const tenantId = process.env.SUPABASE_TENANT_ID as string

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
)

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  try {
    // Buscar artigo pelo slug e tenant
    const { data: article, error: articleError } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', slug)
      .eq('tenant_id', tenantId)
      .single()

    if (articleError) throw articleError
    if (!article) return null

    // Buscar categoria do artigo
    const { data: category, error: categoryError } = await supabase
      .from('articles_category')
      .select('*')
      .eq('id', article.category_id)
      .eq('tenant_id', tenantId)
      .single()

    if (categoryError) throw categoryError

    return {
      ...article,
      category_title: category ? category.title : 'Sem categoria',
    }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: error.message || 'Erro ao buscar artigo'
    })
  }
}) 