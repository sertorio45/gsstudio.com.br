<template>
  <section class="portfolio-section my-5 min-vh-100 text-center">
    <div class="container-fluid my-5">
      <div class="row">
        <div class="col-12 text-center">
          <h2>Portifolio</h2>
          <div class="tabs my-5">
            <button 
              v-for="tab in tabs" 
              :key="tab" 
              :class="{ active: selectedTab === tab }" 
              @click="selectedTab = tab"
              class="tab-btn">
              {{ tab }}
            </button>
          </div>
        </div>
      </div>
      <div class="row justify-content-center my-5">
        <div class="col-12 image-grid">
          <div v-for="(image, index) in filteredImages" :key="index" class="image-container">
            <img
              :src="image.src"
              @click="showImg(index)"
              class="image-thumbnail img-fluid"
            />
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-auto">
          <button @click="loadMore" :disabled="loading" class="btn btn-primary">
            <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span v-else>Ver mais</span>
          </button>
        </div>
      </div>
      <vue-easy-lightbox :visible="visibleRef" :imgs="filteredImages" :index="indexRef" @hide="onHide" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';

interface ImageModule {
  default: string;
}

// Import images dynamically using import.meta.glob
const imageModules = import.meta.glob<{ default: string }>('public/img/portifolio/**/*.{png,jpg,jpeg,webp,gif}', { eager: true });

const images = ref<Array<{ src: string, category: string }>>([]);
const rows = ref(2);
const loading = ref(false);
const visibleRef = ref(false);
const indexRef = ref(0);
const selectedTab = ref('All');

// Predefined categories
const tabs = ref(['All', 'Gestão de Conteúdo', 'Branding', 'Comunicação Visual']);

// Load images from imported modules
const fetchImages = () => {
  for (const path in imageModules) {
    const module = imageModules[path] as ImageModule;
    const category = determineCategory(path); // Função que determina a categoria com base no caminho ou no nome do arquivo
    images.value.push({ src: module.default, category });
  }
};

// Determine category based on the folder name
const determineCategory = (path: string): string => {
  if (path.includes('gestao-de-conteudo')) return 'Gestão de Conteúdo';
  if (path.includes('branding')) return 'Branding';
  if (path.includes('comunicacao-visual')) return 'Comunicação Visual';
  return 'All'; // Categoria padrão para subpastas não categorizadas
};

onMounted(() => {
  fetchImages();
});

const loadMore = async () => {
  loading.value = true;
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simula atraso de carregamento
  rows.value += 1;
  loading.value = false;
};

const showImg = (index: number) => {
  indexRef.value = index;
  visibleRef.value = true;
};

const onHide = () => {
  visibleRef.value = false;
};

const filteredImages = computed(() => {
  if (selectedTab.value === 'All') {
    return images.value.slice(0, rows.value * 5); // Supondo 5 imagens por linha
  }
  return images.value.filter(image => image.category === selectedTab.value).slice(0, rows.value * 5);
});
</script>

<style scoped>
.image-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
}

.image-container {
  flex: 1 0 20%; /* Aproximadamente 5 imagens por linha */
  margin: 0;
  position: relative;
  overflow: hidden;
}

.image-thumbnail {
  width: 100%;
  height: 50vh;
  object-fit: cover;
  cursor: pointer;
  border-radius: 0 !important;
}

.tabs {
  margin-bottom: 20px;
}

.tab-btn {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #f8f9fa;
  border: none;
  cursor: pointer;
}

.tab-btn.active {
  background-color: #007bff;
  color: #fff;
}
</style>
