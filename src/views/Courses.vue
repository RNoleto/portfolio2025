<script setup>
import { computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import Ticket from '../components/ui/Ticket.vue';

const courses = [
  {
    codigo:"MOK65QH5",
    nomeEvento:"Introdução ao React Native",
    mesAno:"Março - 2025",
    descricao:"Gerenciamento de estados com React e criação de aplicativo para gerar senha.",
    producao:"Dio.me",
    imagem:"/img/stacks/react.svg",
    corFundoCode:"bg-turquoise",
    corFundo:"bg-[#DEE9ED]",
    corTexto:"text-cream",
    corBorda:"border-darkText",
  },
  {
    codigo:"7c81b067",
    nomeEvento:"JavaScript Completo ES6",
    mesAno:"Março - 2025",
    descricao:"Estudo da Linguagem JavaScript e aplicação durante criação de uma página web.",
    producao:"Origamid",
    imagem:"/img/stacks/js.svg",
    corFundoCode:"bg-[#9C8F5D]",
    corFundo:"bg-[#F5F5D0]",
    corTexto:"text-cream",
    corBorda:"border-darkText",
  },
  {
    codigo:"EVT125",
    nomeEvento:"Advanced Vue",
    mesAno:"Junho - 2024",
    descricao:"Evento para desenvolver habilidades avançadas em Vue.js.",
    producao:"Tech Eventos",
    imagem:"/img/stacks/react.svg",
    corFundoCode:"bg-turquoise",
    corFundo:"bg-turquoise",
    corTexto:"text-cream",
    corBorda:"border-darkText",
  },
  {
    codigo:"EVT126",
    nomeEvento:"Frontend Meetup",
    mesAno:"Julho - 2024",
    descricao:"Encontro de profissionais de Frontend.",
    producao:"Tech Eventos",
    imagem:"/img/stacks/react.svg",
    corFundoCode:"bg-turquoise",
    corFundo:"bg-turquoise",
    corTexto:"text-cream",
    corBorda:"border-darkText",
  },
  {
    codigo:"EVT127",
    nomeEvento:"JS Conf",
    mesAno:"Agosto - 2024",
    descricao:"Conferência sobre JavaScript.",
    producao:"Tech Eventos",
    imagem:"/img/stacks/react.svg",
    corFundoCode:"bg-turquoise",
    corFundo:"bg-turquoise",
    corTexto:"text-cream",
    corBorda:"border-darkText",
  },
  {
    codigo:"EVT128",
    nomeEvento:"Fullstack Forum",
    mesAno:"Setembro - 2024",
    descricao:"Fórum para desenvolvedores fullstack.",
    producao:"Tech Eventos",
    imagem:"/img/stacks/react.svg",
    corFundoCode:"bg-turquoise",
    corFundo:"bg-turquoise",
    corTexto:"text-cream",
    corBorda:"border-darkText",
  }
];

function groupArrayBy(arr, groupSize) {
  const groups = [];
  for (let i = 0; i < arr.length; i += groupSize) {
    groups.push(arr.slice(i, i + groupSize));
  }
  return groups;
}

const groupedCourses = computed(() => groupArrayBy(courses, 5));
</script>

<template>
  <section id="courses">
    <p class="handwritten-title">Cursos</p>
    <p class="handwritten-text text-sm my-1">Ingressos dos cursos que participei.</p>

    <swiper
      :slides-per-view="1.2"
      :space-between="20"
      :loop="false"
      class="custom-swiper mt-2"
    >
      <!-- Para cada grupo (máximo 5 tickets) gera um slide -->
      <swiper-slide v-for="(group, groupIndex) in groupedCourses" :key="groupIndex">
        <div class="flex flex-col gap-2">
          <!-- Renderiza cada Ticket dentro do grupo -->
          <Ticket
            v-for="(course, index) in group"
            :key="index"
            :codigo="course.codigo"
            :nomeEvento="course.nomeEvento"
            :mesAno="course.mesAno"
            :descricao="course.descricao"
            :producao="course.producao"
            :imagem="course.imagem"
            :corFundoCode="course.corFundoCode"
            :corFundo="course.corFundo"
            :corTexto="course.corTexto"
            :corBorda="course.corBorda"
          />
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style scoped>
section {
  min-height: 100vh;
  font-family: var(--font-anton);
  font-size: 24px;
}

.custom-swiper {
  width: 100%;
}
</style>
