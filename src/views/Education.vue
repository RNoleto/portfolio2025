<script setup>
const educations = [
  {
    university: 'Unicesumar',
    year: '2022 - 2025',
    graduation: 'Engenharia de Software',
  },
  {
    university: 'ESAB - Escola Superior Aberta do Brasil',
    year: '2012 - 2014',
    graduation: 'Pós Graduação em Engenharia de Sistemas',
  },
  {
    university: 'FAMA - Faculdade de Macapá',
    year: '2007 - 2009',
    graduation: 'Gerenciamento em Redes de Computadores',
  }
];
</script>

<template>
  <section id="education" class="education-section py-6 px-4">
    <h1 class="text-2xl font-heading mb-4 handwritten-title">Educação</h1>
    <p class="mb-6 handwritten-text">
      Aqui estão minhas formações acadêmicas, registradas com a mesma paixão de quem escreve em um caderno Moleskine.
    </p>
    <div class="space-y-4">
      <div
        v-for="(edu, index) in educations"
        :key="index"
        class="bg-lightCream p-4 rounded-lg shadow-md handwritten-card"
      >
        <h2 class="text-lg font-semibold mb-1 handwritten-university">{{ edu.university }}</h2>
        <p class="text-sm text-gray-600 mb-1 handwritten-year">{{ edu.year }}</p>
        <p class="text-md handwritten-graduation">{{ edu.graduation }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-section {
  background: var(--color-cream);
  /* Opcional: use uma imagem de textura para remeter ao papel (descomente e ajuste o caminho) */
  /* background-image: url('/img/texture-paper.png'); */
  background-size: cover;
}

.handwritten-card {
  border: 1px dashed var(--color-lightText);
  transform: rotate(-0.5deg);
  transition: transform 0.3s ease;
}

.handwritten-card:hover {
  transform: rotate(0deg);
}

.handwritten-university {
  font-family: 'Indie Flower', cursive; /* Mudar para fonte legivel */
  font-size: 1.125rem;
  color: var(--color-cobaltBlue);
}

.handwritten-year,
.handwritten-graduation {
  font-family: var(--font-body);
  color: var(--color-darkText);
}
</style>
