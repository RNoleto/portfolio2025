<script setup>
const works = [
  {
    firm: 'BRD Soluções em Tecnologia',
    position: 'Desenvolvedor Fullstack Pleno',
    period: 'fev 2024 - até o momento',
    description: 'Atuo como desenvolvedor backend dando suporte e desenvolvendo modulos para intranet junto com toda equipe de desenvolvimento da prefeitura de Itajaí - SC e desenvolvendo painéis no Metabase para as secretarias da prefeitura para ajuda-los na tomada de decisão.'
  },
  {
    firm: 'INBRAEP',
    position: 'Desenvolvedor Fullstack',
    period: 'mar 2023 - fev 2023',
    description: 'Atuei como desenvolvedor fullstack em um projeto de uma plataforma de ensino a distância utilizando Vue.js, Laravel e MySQL. Fui responsável pela manutenção e desenvolvimento das novas páginas da página institucional da empresa.'
  },
  {
    firm: 'Foco Solution Provider',
    position: 'Analista de TI',
    period: 'jul 2021 - nov 2022',
    description: 'Atuei como analista de TI, auxiliando o gestor na gerencia de projetos e auxiliando equipe de desenvolvimento na criação de sistemas, reuniões com clientes para entender as necessidades e desenvolver soluções. Tecnologias utilizadas na empresa eram React.js, Node.js, JavaScript, Bitbucket, Html, CSS e Netsuite.'
  },
  {
    firm: 'Senac Amapá',
    position: 'Técnico Especializado em Ciências da Computação',
    period: 'jan 2014 - fev 2020',
    description: 'Atuei junto com a equipe de TI do Senac Amapá na manutenção da infraestrutura de TI, manutenção de computadores e servidores, suporte técnico aos alunos e professores, manutenção de sistemas internos e desenvolvimento e manutenção do site institucional do Senac Amapá.'
  }
];
</script>

<template>
  <section id="works" class="py-6 px-4">
    <!-- Título utilizando a classe global 'title' -->
    <h1 class="title mb-6 handwritten-title">Experiência Profissional</h1>
    <div class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-2">
      <div
        v-for="(work, index) in works"
        :key="index"
        class="work-card bg-lightCream p-4 border-2 border-lightText rounded-md shadow-sm"
      >
        <h2 class="text-lg font-semibold mb-1">{{ work.firm }}</h2>
        <p class="text-sm text-darkCream mb-1 sm:text-lg">{{ work.position }}</p>
        <p class="text-sm">{{ work.period }}</p>
        <p class="text-md mt-2 text-darkText hidden sm:block">{{ work.description }}</p>
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
