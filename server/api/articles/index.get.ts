export default defineEventHandler(async (event) => {
  protectApiRoute(event)

  try {
    const publications = await fetchPublications()
    return publications.map((publication) =>
      mapPublicationToArticle(publication, { includeBody: false }),
    )
  } catch (error: any) {
    if (error?.statusCode) throw error

    throw createError({
      statusCode: 500,
      statusMessage: error?.message || 'Erro ao buscar artigos',
    })
  }
})
