export interface BlimberPublicationListItem {
  id: string
  kind: string
  publicationType: string
  locale: string
  path: string
  revisionId: string
  publishedAt: string
  content: {
    title: string
    slug: string
    excerpt?: string | null
    cover?: unknown
    termIds?: string[]
    seo?: {
      title?: string
      description?: string
    }
  }
}

export interface BlimberPublicationDetail extends BlimberPublicationListItem {
  content: BlimberPublicationListItem['content'] & {
    body?: string
    blocks?: unknown[]
  }
  seo?: {
    title?: string
    description?: string
  }
}

export interface ArticleDto {
  id: string
  slug: string
  title: string
  content: string
  meta_description: string
  category_id: string
  category_title: string
  created_at: string
  updated_at: string
  publish_status: string
  tenant_id: string
  path: string
  excerpt: string
  cover: unknown
}

interface BlimberConfig {
  baseUrl: string
  siteKey: string
}

function getBlimberConfig(): BlimberConfig {
  const config = useRuntimeConfig()
  const baseUrl = String(config.blimberCmsBaseUrl || '').replace(/\/$/, '')
  const siteKey = String(config.blimberSiteKey || '')

  if (!baseUrl || !siteKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Configuração do CMS Blimber ausente',
    })
  }

  return { baseUrl, siteKey }
}

function siteBase(config: BlimberConfig) {
  return `${config.baseUrl}/sites/${config.siteKey}`
}

export function mapPublicationToArticle(
  publication: BlimberPublicationListItem | BlimberPublicationDetail,
  options: { includeBody?: boolean } = {},
): ArticleDto {
  const { content } = publication
  const body =
    options.includeBody && 'body' in content && typeof content.body === 'string'
      ? content.body
      : ''

  return {
    id: publication.id,
    slug: content.slug,
    title: content.title,
    content: body || content.excerpt || '',
    meta_description:
      content.seo?.description || content.excerpt || content.title,
    category_id: content.termIds?.[0] || '',
    category_title: 'Artigo',
    created_at: publication.publishedAt,
    updated_at: publication.publishedAt,
    publish_status: 'published',
    tenant_id: 'gsstudio',
    path: publication.path,
    excerpt: content.excerpt || '',
    cover: content.cover ?? null,
  }
}

export async function fetchPublications(): Promise<BlimberPublicationListItem[]> {
  const config = getBlimberConfig()
  const items: BlimberPublicationListItem[] = []
  let cursor: string | null = null

  do {
    const query = cursor ? `?cursor=${encodeURIComponent(cursor)}` : ''
    const response = await $fetch<{
      data: BlimberPublicationListItem[]
      nextCursor: string | null
    }>(`${siteBase(config)}/publications${query}`)

    items.push(...(response.data || []))
    cursor = response.nextCursor
  } while (cursor)

  return items.filter((item) => item.publicationType === 'article')
}

export async function resolvePublicationBySlug(
  slug: string,
): Promise<BlimberPublicationDetail | null> {
  const config = getBlimberConfig()
  const path = `/artigos/${slug}`

  try {
    const response = await $fetch<{ data: BlimberPublicationDetail }>(
      `${siteBase(config)}/resolve`,
      { query: { path } },
    )

    if (!response?.data || response.data.publicationType !== 'article') {
      return null
    }

    return response.data
  } catch (error: any) {
    if (error?.statusCode === 404 || error?.response?.status === 404) {
      return null
    }
    throw error
  }
}
