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
  <Swiper v-bind="swiperOptions" class="translate-x-[26px] w-[390px] overflow-hidden bg-transparent sm:w-[100%]">
    <SwiperSlide
      v-for="(project, index) in projects"
      :key="index"
      class="w-[85%] max-w-[280px] first:ml-0 last:mr-0"
    >
      <div class="overflow-hidden w-[280px]">
        <img
          :src="project.image"
          :alt="project.title"
          class="w-[360px] h-[215px] object-cover"
        />
        <div class="ml-[64px] mt-2 text-darkCream w-[200px]">
          <h3 class="text-xl font-bold mb-1">{{ project.title }}</h3>
          <p class="mb-4">{{ project.description }}</p>
          <a 
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="btn inline-block mt-auto text-white font-semibold py-2 px-4 rounded transition shadow-sm"
            >
            Acessar projeto
          </a>
          <div class="flex mt-4 space-x-2">
            <template v-for="(tech, idx) in project.technologies" :key="idx">
              <img :src="tech" :alt="`Ícone da tecnologia ${idx}`" class="w-6 h-6" />
            </template>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
  .btn{
    background: var(--color-redCream);  
  }

  .btn:hover{
    background: var(--color-darkRedCream);  
  }
</style>
