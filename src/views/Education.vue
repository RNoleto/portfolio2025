<script setup>

const educations = [
    {
        university: 'Unicesumar',
        graduation: 'Engenharia de Software',
        year: '2024 - 2025'
    },
    {
        university: 'ESAB - Escola Aberta do Brasil',
        graduation: 'Pós Graduação em Engenharia de Sistemas',
        year: '2012 - 2014'
    },
    {
        university: 'FAMA - Faculdade de Macapá',
        graduation: 'Gerenciamento em Redes de Computadores',
        year: '2007 - 2009'
    }
]
</script>

<template>
    <section id="education">
        <h1 class="title text-darkCream mb-2">Educação</h1>
        <p class="text-body mb-4">
            Ao longo da minha trajetória acadêmica, busquei constantemente aprimorar meus conhecimentos e habilidades na área de tecnologia. A seguir, apresento minhas principais formações:
        </p>
        <div class="flex flex-col text-darkText md:flex-row flex-wrap justify-center gap-4">
            <div v-for="(education, index) in educations" :key="index" class="bg-lightCream p-4 border rounded-md shadow-sm w-full md:w-1/3">
                <h2 class="text-lg font-semibold">{{ education.university }}</h2>
                <p class="text-md">{{ education.graduation }}</p>
                <p class="text-sm text-gray-600">{{ education.year }}</p>
            </div>
        </div>
    </section>
</template>