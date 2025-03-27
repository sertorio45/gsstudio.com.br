export const useSeo = (article: Ref<any>, route: ReturnType<typeof useRoute>) => {
  const siteUrl = 'https://gsstudio.com.br';

  useSeoMeta({
    title: () => article.value?.title ?? '',
    description: () => article.value?.meta_description ?? '',
    robots: 'index, follow',
    ogTitle: () => article.value?.title ?? '',
    ogDescription: () => article.value?.meta_description ?? '',
    ogType: 'article',
    ogUrl: () => `${siteUrl}/${route.params.slug}`,
    ogImageAlt: () => article.value?.title ?? '',
    twitterTitle: () => article.value?.title ?? '',
    twitterDescription: () => article.value?.meta_description ?? '',
    twitterCard: 'summary',
    fbAppId: '603230818880308',
  });

  useHead({
    meta: [
      {
        name: 'canonical',
        content: `${siteUrl}/${route.params.slug}`,
      },
    ],
  });
};
