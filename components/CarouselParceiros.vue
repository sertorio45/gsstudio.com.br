<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

const parceiros = ref<string[]>([
  'img/parceiros/cliente-1.webp',
  'img/parceiros/cliente-2.webp',
  'img/parceiros/cliente-3.webp',
  'img/parceiros/cliente-4.webp',
  'img/parceiros/cliente-5.webp',
  'img/parceiros/cliente-6.webp',
  'img/parceiros/cliente-7.webp',
  'img/parceiros/cliente-8.webp',
  'img/parceiros/cliente-9.webp',
  'img/parceiros/cliente-10.webp',
  'img/parceiros/cliente-11.webp',
  'img/parceiros/cliente-12.webp',
  'img/parceiros/cliente-13.webp',
  'img/parceiros/cliente-14.webp',
  'img/parceiros/cliente-15.webp',
  'img/parceiros/cliente-16.webp',
  'img/parceiros/cliente-17.webp',
  'img/parceiros/cliente-18.webp',
  'img/parceiros/cliente-19.webp',
  'img/parceiros/cliente-20.webp',
  'img/parceiros/cliente-21.webp',
  'img/parceiros/cliente-22.webp',
  'img/parceiros/cliente-23.webp',
  'img/parceiros/cliente-24.webp',
  'img/parceiros/cliente-25.webp',
  'img/parceiros/cliente-26.webp',
  'img/parceiros/cliente-27.webp',
  'img/parceiros/cliente-28.webp',
  'img/parceiros/cliente-29.webp',
  'img/parceiros/cliente-30.webp',
  'img/parceiros/cliente-31.webp',
  'img/parceiros/cliente-32.webp',
  'img/parceiros/cliente-33.webp',
]);

</script>

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
        <img :src="parceiro" class="d-block w-100 parceiro-img" :alt="'Parceiro ' + (index + 1)">
      </SwiperSlide>
    </Swiper>
    <div class="swiper-gradient-left"></div>
    <div class="swiper-gradient-right"></div>
  </div>
</template>

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
