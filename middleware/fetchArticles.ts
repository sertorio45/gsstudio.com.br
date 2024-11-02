// middleware/fetchArticleBySlug.ts
import { defineNuxtRouteMiddleware, useRoute } from 'nuxt/app';
import { useArticleStore } from '~/stores/articles';

export default defineNuxtRouteMiddleware(async () => {
  const articleStore = useArticleStore();
  const route = useRoute();
  const slug = route.params.slug as string;

  // Verifica se o artigo atual corresponde ao slug, para evitar chamadas duplicadas
  if (!articleStore.article || articleStore.article.slug !== slug) {
    await articleStore.fetchArticleBySlug(slug);
  }
});
