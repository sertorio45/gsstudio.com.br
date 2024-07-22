<template>
  <section class="portfolio-section my-5 min-vh-100">
    <div class="container-flex my-5">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <h2>Portifolio</h2>
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div v-for="(row, rowIndex) in imageRows" :key="rowIndex" class="col-12 image-row">
          <div class="row">
            <div v-for="(image, index) in row" :key="index" class="col-4 col-md-2 mb-4">
              <img
                :src="image.src"
                @click="showImg(rowIndex * perRow + index)"
                class="image-thumbnail"
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
import { ref, computed, onMounted } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

const images = ref<Array<{ src: string }>>([])
const perRow = 6
const rows = ref(2)
const loading = ref(false)
const visibleRef = ref(false)
const indexRef = ref(0)

const fetchImages = async () => {
  try {
    const response = await fetch('/api/portifolio')
    const data = await response.json() as string[]
    images.value = data.map((file: string) => ({ src: `/img/portifolio/${file}` }))
  } catch (error) {
    console.error('Error fetching images:', error)
  }
}

onMounted(() => {
  fetchImages()
})

const imageRows = computed(() => {
  const rowsArr = []
  for (let i = 0; i < rows.value; i++) {
    rowsArr.push(images.value.slice(i * perRow, (i + 1) * perRow))
  }
  return rowsArr
})

const loadMore = async () => {
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate loading delay
  rows.value += 1
  loading.value = false
}

const showImg = (index: number) => {
  indexRef.value = index
  visibleRef.value = true
}

const onHide = () => {
  visibleRef.value = false
}
</script>

<script lang="ts">
export default {
  name: 'Portfolio',
  components: {
    VueEasyLightbox
  }
}
</script>

<style scoped>

.image-row {
  margin-bottom: 20px;
}
.image-thumbnail {
  width: 100%;
  height: 100px;
  object-fit: cover;
  cursor: pointer;
}
</style>
