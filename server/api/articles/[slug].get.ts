export default defineEventHandler(async (event) => {
  protectApiRoute(event)

  const slug = getRouterParam(event, 'slug')

  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Slug obrigatório',
    })
  }

  try {
    const publication = await resolvePublicationBySlug(slug)

    if (!publication) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Artigo não encontrado',
      })
    }

    return mapPublicationToArticle(publication, { includeBody: true })
  } catch (error: any) {
    if (error?.statusCode) throw error

    throw createError({
      statusCode: 500,
      statusMessage: error?.message || 'Erro ao buscar artigo',
    })
  }
})
