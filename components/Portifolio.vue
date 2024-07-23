<template>
  <section class="portfolio-section my-5 min-vh-100 text-center">
    <div class="container-fluid my-5">
      <div class="row">
        <div class="col-12 text-center">
          <h2>Portifolio</h2>
        </div>
      </div>
      <div class="row justify-content-center m-5">
        <div v-for="(row, rowIndex) in imageRows" :key="rowIndex" class="col-12 image-row">
          <div class="row justify-content-center">
            <div v-for="(image, index) in row" :key="index" class="col-4 col-md-2 mb-4">
              <img
                :src="image.src"
                @click="showImg(rowIndex * perRow + index)"
                class="image-thumbnail img-fluid"
              />
            </div>
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
      <vue-easy-lightbox :visible="visibleRef" :imgs="images" :index="indexRef" @hide="onHide" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';

// Import images dynamically using import.meta.glob
const imageModules = import.meta.glob('public/img/portifolio/*.{png,jpg,jpeg,webp,gif}', { eager: true });

const images = ref<Array<{ src: string }>>([]);
const perRow = 4;
const rows = ref(2);
const loading = ref(false);
const visibleRef = ref(false);
const indexRef = ref(0);

// Load images from imported modules
const fetchImages = () => {
  for (const path in imageModules) {
    images.value.push({ src: imageModules[path].default });
  }
};

onMounted(() => {
  fetchImages();
});

const imageRows = computed(() => {
  const rowsArr = [];
  for (let i = 0; i < rows.value; i++) {
    rowsArr.push(images.value.slice(i * perRow, (i + 1) * perRow));
  }
  return rowsArr;
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
</script>

<style scoped>
.image-thumbnail {
  width: 100%;
  object-fit: contain;
  cursor: pointer;
}
</style>
