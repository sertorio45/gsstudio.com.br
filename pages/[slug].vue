<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import { useSeoMeta, useHead } from '#app'; // Import useHead também para as meta tags extras

interface Article {
  id: number;
  slug: string;
  titulo: string;
  seo_description: string;
  seo_keywords: string;
  thumb?: {
    url?: string;
  };
  published_at: string;
  category: {
    id: number;
    title: string;
  };
  content: string;
}

interface SocialNetwork {
  name: string;
  url: string;
  icon: string;
}

export default defineComponent({
  name: 'ArticleDetail',
  setup() {
    const article = ref<Article | null>(null);
    const loading = ref(true);
    const imageLoaded = ref(false);
    const socialNetworks = ref<SocialNetwork[]>([]);
    const route = useRoute();
    const router = useRouter();
    const baseURL = import.meta.env.VITE_STRAPI_URL;
    const email = ref('');

    const isSubmitting = ref(false);
    const success = ref(false);
    const error = ref(false);

    const fetchArticleBySlug = async (slug: string) => {
      try {
        const response = await axios.get(`${baseURL}/articles?slug=${slug}`);
        if (response.data.length) {
          article.value = response.data[0];
        }
      } catch (err) {
        console.error('Erro ao buscar o artigo:', err);
      } finally {
        loading.value = false;
      }
    };

    const getArticleImage = (article: Article) => {
      if (article.thumb && article.thumb.url) {
        return new URL(article.thumb.url, baseURL).href;
      }
      return 'https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp'; // Substitua por uma URL de imagem padrão
    };

    const formatDate = (date: string) => {
      if (!date) return '';
      const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('pt-BR', options);
    };

    const hasThumbnail = (article: Article) => {
      return article && article.thumb && article.thumb.url;
    };

    const onImageLoad = () => {
      imageLoaded.value = true;
    };

    const handleImageError = (event: Event) => {
      const img = event.target as HTMLImageElement;
      img.src = 'https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp';
    };

    const goBack = () => {
      router.go(-1);
    };

    const share = (network: SocialNetwork) => {
      if (network.name === 'Link') {
        navigator.clipboard.writeText(network.url);
      } else {
        window.open(network.url, '_blank', 'noopener,noreferrer');
      }
    };

    const submitNewsletterForm = async () => {
      isSubmitting.value = true;
      success.value = false;
      error.value = false;
      const webhookUrl = 'https://webhook.gsstudio.com.br/webhook/gsstudionewsletter';
      try {
        const response = await axios.post(webhookUrl, { email: email.value }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status >= 200 && response.status < 300) {
          success.value = true;
          setTimeout(() => {
            email.value = '';
            success.value = false;
          }, 2000);
        } else {
          error.value = true;
        }
      } catch (err) {
        error.value = true;
      } finally {
        isSubmitting.value = false;
      }
    };

    // Atualiza os metadados de SEO quando o artigo for carregado
    watch(article, (newArticle) => {
      if (newArticle) {
        // Configura o SEO dinamicamente
        useSeoMeta({
          title: newArticle.titulo,
          description: newArticle.seo_description,
          keywords: newArticle.seo_keywords,
          ogTitle: newArticle.titulo,
          ogDescription: newArticle.seo_description,
          ogUrl: `https://www.gsstudio.com.br/blog/${newArticle.slug}`, // URL do artigo
          ogSiteName: 'GS STUDIO',
          ogImage: newArticle.thumb?.url ? getArticleImage(newArticle) : 'https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp',
          ogLocale: 'pt_BR',
        });

        // Configura outras meta tags como robots e canonical
        useHead({
        meta: [
          { name: 'robots', content: 'index, follow' },
        ],
        link: [
          { rel: 'canonical', href: `https://www.gsstudio.com.br/${newArticle.slug}` } // Corrigido: usando 'link' ao invés de 'meta'
        ]
      });

      }
    });

    onMounted(async () => {
      const slug = route.params.slug as string;
      await fetchArticleBySlug(slug);

      if (process.client) {
        socialNetworks.value = [
          { name: 'Facebook', url: `https://facebook.com/sharer/sharer.php?u=${window.location.href}`, icon: 'bx bxl-facebook' },
          { name: 'Twitter', url: `https://twitter.com/intent/tweet?url=${window.location.href}`, icon: 'bx bxl-twitter' },
          { name: 'LinkedIn', url: `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`, icon: 'bx bxl-linkedin' },
          { name: 'WhatsApp', url: `https://wa.me/?text=${window.location.href}`, icon: 'bx bxl-whatsapp' },
          { name: 'Email', url: `mailto:?subject=Confira este artigo&body=${window.location.href}`, icon: 'bx bx-envelope' },
          { name: 'Link', url: window.location.href, icon: 'bx bx-link' },
        ];
      }
    });

    return {
      article,
      loading,
      imageLoaded,
      email,
      socialNetworks,
      getArticleImage,
      hasThumbnail,
      formatDate,
      onImageLoad,
      goBack,
      share,
      submitNewsletterForm,
      handleImageError,
      isSubmitting,
      success,
      error,
    };
  },
});
</script>
