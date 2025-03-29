<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
});

// Configuração do Swiper
const swiperOptions = {
  slidesPerView: 'auto', // Controla a largura do slide manualmente
  spaceBetween: 10, // Espaço entre os slides
  centeredSlides: false, // Não centraliza o slide atual
  loop: true, // Permite loop infinito
};
</script>

<template>
  <Swiper v-bind="swiperOptions" class="translate-x-[20px] w-[320px] overflow-hidden">
    <SwiperSlide
      v-for="(project, index) in projects"
      :key="index"
      class="w-[85%] max-w-[280px] first:ml-0 last:mr-0"
    >
      <div class="overflow-hidden w-[280px]">
        <img
          :src="project.image"
          :alt="project.title"
          class="w-[360px] h-[200px] object-cover"
        />
        <div class="ml-[60px] mt-2 text-darkCream w-[206px]">
          <h3 class="text-xl font-bold mb-1">{{ project.title }}</h3>
          <p class="mb-4">{{ project.description }}</p>
          <div class="flex justify-end space-x-2">
            <template v-for="(tech, idx) in project.technologies" :key="idx">
              <img :src="tech" :alt="`Ícone da tecnologia ${idx}`" class="w-6 h-6" />
            </template>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
