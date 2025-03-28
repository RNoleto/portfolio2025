<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'
import 'swiper/css/pagination';

// Props: espera um array de projetos, onde cada projeto é um objeto com as propriedades:
// - image: string (caminho da imagem)
// - title: string (título do projeto)
// - description: string (descrição do projeto)
// - technologies: array (lista de ícones, podendo ser URLs de imagens ou classes de ícones)
const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
});

// Configurações do Swiper para exibir um slide centralizado e com parte do próximo visível.
const swiperOptions = {
  slidesPerView: 'auto',      // Permite definir a largura dos slides manualmente
  spaceBetween: 16,           // Espaço entre slides
  centeredSlides: true,       // Centraliza o slide ativo
  loop: true,                 // Permite loop infinito
};
</script>

<template>
<Swiper v-bind="swiperOptions" class="translate-x-10  w-[300px]">
    <SwiperSlide
      v-for="(project, index) in projects"
      :key="index"
      class="flex-shrink-0 w-[80%] md:w-[60%] lg:w-[50%]"
    >
      <div class="overflow-hidden">
        <img :src="project.image" :alt="project.title" class="w-[260px] h-[200px] object-cover" />
        <div class="ml-6 mt-2 text-darkCream w-[234px]">
          <h3 class="text-xl font-bold mb-1">{{ project.title }}</h3>
          <p class="mb-4">{{ project.description }}</p>
          <div class="flex justify-end space-x-2">
            <template v-for="(tech, idx) in project.technologies" :key="idx">
              <!-- Supondo que cada tech seja uma URL para a imagem do ícone -->
              <img :src="tech" :alt="`Ícone da tecnologia ${idx}`" class="w-6 h-6" />
            </template>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>

</style>