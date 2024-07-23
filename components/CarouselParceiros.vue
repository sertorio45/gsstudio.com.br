<template>
  <div class="swiper-container my-5">
    <Swiper
      :modules="[SwiperAutoplay]"
      :slides-per-view="7"
      :space-between="10"
      :loop="true"
      :autoplay="{ delay: 500, disableOnInteraction: false }"
    >
      <SwiperSlide v-for="(parceiro, index) in parceiros" :key="index">
        <img :src="parceiro" class="d-block w-100 parceiro-img" :alt="'Parceiros' + (index + 1)">
      </SwiperSlide>
      
    </Swiper>
    <div class="swiper-gradient-left"></div>
    <div class="swiper-gradient-right"></div> 
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

const parceiros = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('api/parceiros');
    const data = await response.json();
    parceiros.value = data.map(file => `img/parceiros/${file}`);
  } catch (error) {
    console.error('Error loading images:', error);
  }
});
</script>

<style scoped>
.swiper-container {
  position: relative;
}

.parceiro-img {
  height: auto;
  max-height: 150px;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.parceiro-img:hover {
  filter: grayscale(0%);
}

.swiper-gradient-left, .swiper-gradient-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40%;
  z-index: 10;
}

.swiper-gradient-left {
  left: 0;
  background: linear-gradient(to right, white, transparent);
}

.swiper-gradient-right {
  right: 0;
  background: linear-gradient(to left, white, transparent);
}
</style>
