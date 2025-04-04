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
    corCodigo:"text-cream",
    corTexto:"text-darkCream",
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
    corCodigo:"text-cream",
    corTexto:"text-darkCream",
    corBorda:"border-darkText",
  },
  {
    codigo:"2851a24c",
    nomeEvento:"NLW - Mobile React Native",
    mesAno:"Dezembro - 2025",
    descricao:"Aprender React Native e Typescript, criar projeto Nearby App durante evento.",
    producao:"Origamid",
    imagem:"/img/stacks/react.svg",
    corFundoCode:"bg-turquoise",
    corFundo:"bg-[#DEE9ED]",
    corCodigo:"text-cream",
    corTexto:"text-darkCream",
    corBorda:"border-darkText",
  },
  {
    codigo:"d3478392",
    nomeEvento:"React Completo",
    mesAno:"Março - 2025",
    descricao:"Estudo em React Web e desenvolvimento do projeto Dogs usando conceitos do curso.",
    producao:"Origamid",
    imagem:"/img/stacks/react.svg",
    corFundoCode:"bg-turquoise",
    corFundo:"bg-[#DEE9ED]",
    corCodigo:"text-cream",
    corTexto:"text-darkCream",
    corBorda:"border-darkText",
  },
  {
    codigo:"2851a24c",
    nomeEvento:"NLW - Mobile React Native",
    mesAno:"Dezembro - 2024",
    descricao:"Aprender React Native e Typescript, criar projeto Nearby App durante evento.",
    producao:"Rocketseat",
    imagem:"/img/stacks/react.svg",
    corFundoCode:"bg-turquoise",
    corFundo:"bg-[#DEE9ED]",
    corCodigo:"text-cream",
    corTexto:"text-darkCream",
    corBorda:"border-darkText",
  },
  {
    codigo:"e30fa320",
    nomeEvento:"PHP",
    mesAno:"Outubro - 2024",
    descricao:"Desenvolver projeto FreelanceHours na prática usando Laravel + Livewire.",
    producao:"Rocketseat",
    imagem:"/img/stacks/php.svg",
    corFundoCode:"bg-[#57B1CA]",
    corFundo:"bg-[#DEE9ED]",
    corCodigo:"text-cream",
    corTexto:"text-darkCream",
    corBorda:"border-darkText",
  },
  {
    codigo:"6e964213",
    nomeEvento:"NLW - JavaScript FullStack",
    mesAno:"Setembro - 2024",
    descricao:"Criação do projeto In.Orbit com JavaScript e conceitos aprendidos durante a aula.",
    producao:"Rocketseat",
    imagem:"/img/stacks/js.svg",
    corFundoCode:"bg-[#9C8F5D]",
    corFundo:"bg-[#F5F5D0]",
    corCodigo:"text-cream",
    corTexto:"text-darkCream",
    corBorda:"border-darkText",
  },
  {
    codigo:"f42cc1d7",
    nomeEvento:"UI Design para Iniciantes",
    mesAno:"Junho - 2024",
    descricao:"Aplicação de técnicas de design e criação de projetos funcionais.",
    producao:"Origamid",
    imagem:"/img/stacks/figma.svg",
    corFundoCode:"bg-[#AD76EF]",
    corFundo:"bg-[#C0AAD4]",
    corCodigo:"text-cream",
    corTexto:"text-darkCream",
    corBorda:"border-darkText",
  },
  {
    codigo:"1617f8a1",
    nomeEvento:"WordPress Como CMS",
    mesAno:"Abril - 2024",
    descricao:"Criando e gerenciando páginas com WordPress.",
    producao:"Origamid",
    imagem:"/img/stacks/wordpress.svg",
    corFundoCode:"bg-[#57B1CA]",
    corFundo:"bg-[#ACD5E3]",
    corCodigo:"text-lightCream",
    corTexto:"text-darkCream",
    corBorda:"border-darkText",
  },
  {
    codigo:"d76680cb",
    nomeEvento:"CSS Grid Layout",
    mesAno:"Dezembro - 2024",
    descricao:"Criação de página Web usando técnicas css de Flexbox Layout.",
    producao:"Origamid",
    imagem:"/img/stacks/css3.svg",
    corFundoCode:"bg-[#48A7D5]",
    corFundo:"bg-[#2F9CD1]",
    corCodigo:"text-cream",
    corTexto:"text-cream",
    corBorda:"border-darkText",
  },
  {
    codigo:"c75c6b63",
    nomeEvento:"CSS Flexbox Layout",
    mesAno:"Novembro - 2024",
    descricao:"Criação de página Web usando técnicas CSS de Flexbox Layout",
    producao:"Origamid",
    imagem:"/img/stacks/css3.svg",
    corFundoCode:"bg-[#48A7D5]",
    corFundo:"bg-[#2F9CD1]",
    corCodigo:"text-cream",
    corTexto:"text-cream",
    corBorda:"border-darkText",
  },
  {
    codigo:"14H0R@$!",
    nomeEvento:"Full Stack Week - Next.js ",
    mesAno:"Novembro - 2024",
    descricao:"Desenvolvimento de micro SaaS de gerenciamento financeiro com insights gerados por IA.",
    producao:"Full Stack Clube",
    imagem:"/img/stacks/nextjs.svg",
    corFundoCode:"bg-[#566B72]",
    corFundo:"bg-[#566B72]",
    corCodigo:"text-cream",
    corTexto:"text-cream",
    corBorda:"border-darkText",
  },
  {
    codigo:"1ºLUGAR!",
    nomeEvento:"Startup Weekend",
    mesAno:"Setembro - 2024",
    descricao:"Evento de Startup em Itajaí com a vertical de Comércio Exterior e Logistica. Time 1º Colocado.",
    producao:"SW Itajaí",
    imagem:"/img/tickets/sw-itajai.svg",
    corFundoCode:"bg-[#2087C5]",
    corFundo:"bg-[#E0E0E9]",
    corCodigo:"text-cream",
    corTexto:"text-darckCream",
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
            :corCodigo="course.corCodigo"
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
