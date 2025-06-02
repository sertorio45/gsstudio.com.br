export const useSeo = (article: Ref<any>, route: ReturnType<typeof useRoute>) => {
  const siteUrl = 'https://gsstudio.com.br';

  useHead({
    meta: [
      {
        name: 'canonical',
        content: `${siteUrl}/${route.params.slug}`,
      },
    ],
  });

  useSeoMeta({
    title: () => article.value?.title ?? '',
    description: () => article.value?.meta_description ?? article.value?.content?.substring(0, 150) ?? '',
    robots: 'index, follow',
    ogLocale: 'pt-br',
    ogImageAlt: () => article.value?.title ?? '',
    ogTitle: () => article.value?.title ?? '',
    ogType: 'article',
    ogUrl: () => `${siteUrl}/${route.params.slug}`,
    ogDescription: () => article.value?.meta_description ?? article.value?.content?.substring(0, 150) ?? '',
    twitterTitle: () => article.value?.title ?? '',
    twitterDescription: () => article.value?.meta_description ?? article.value?.content?.substring(0, 150) ?? '',
    twitterCard: 'summary',
    fbAppId: '603230818880308',
  });
};
