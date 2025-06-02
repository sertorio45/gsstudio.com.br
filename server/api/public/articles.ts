export default defineEventHandler(async (event) => {
  // Retornar os dados de artigos conforme o novo formato
  return {
    success: true,
    data: [
      {
        id: 1,
        title: "Teste",
        content: "Conteúdo de teste",
        meta_description: null,
        slug: "teste-1744738112",
        categories: null,
        tags: null,
        created_at: "2025-04-15T17:28:33.028Z",
        updated_at: "2025-04-15T17:34:19.014Z"
      }
    ]
  };
}); 