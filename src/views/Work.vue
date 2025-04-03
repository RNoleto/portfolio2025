<script setup>
const works = [
  {
    firm: 'BRD Soluções em Tecnologia',
    position: 'Desenvolvedor Fullstack Pleno',
    period: 'fev 2024 - até o momento',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ...'
  },
  {
    firm: 'INBRAEP',
    position: 'Desenvolvedor Fullstack',
    period: 'mar 2023 - fev 2023',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ...'
  },
  {
    firm: 'Foco Solution Provider',
    position: 'Analista de TI',
    period: 'jul 2021 - nov 2022',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ...'
  },
  {
    firm: 'Senac Amapá',
    position: 'Técnico Especializado em Ciências da Computação',
    period: 'jan 2014 - fev 2020',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ...'
  }
];
</script>

<template>
  <section id="works" class="py-6 px-4">
    <!-- Título utilizando a classe global 'title' -->
    <h1 class="title mb-6 handwritten-title">Experiência Profissional</h1>
    <div class="space-y-4">
      <div
        v-for="(work, index) in works"
        :key="index"
        class="work-card bg-lightCream p-4 border-2 border-lightText rounded-md shadow-sm"
      >
        <h2 class="text-lg font-semibold mb-1">{{ work.firm }}</h2>
        <p class="text-sm text-gray-600 mb-1">{{ work.position }}</p>
        <p class="text-sm">{{ work.period }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* O estilo abaixo adiciona um toque "feito à mão" aos cartões de trabalho */
.work-card {
  transform: rotate(-1deg);
  transition: transform 0.3s ease;
  border-style: dashed;
}

.work-card:hover {
  transform: rotate(0deg);
}
</style>
