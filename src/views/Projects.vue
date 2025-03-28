<script setup>
import Swiper from '../components/Swiper.vue';

const title = "PROJETOS";
const letters = title.split("");

const projects = [
    {
        image: '../img/projects/Dogs.png',
        title: 'Dogs',
        description: 'O Dogs foi criado para conectar apaixonados por cães e seus melhores amigos de quatro patas! Inspirado no conceito das redes sociais tradicionais, este projeto oferece um espaço interativo onde tutores podem compartilhar momentos especiais, interagir com outros donos e até mesmo encontrar novas amizades para seus pets.',
        technologies: ['../vite.svg']
    },
    {
        image: '../img/projects/AnimaisFantasticos.png',
        title: 'Animais Fantásticos',
        description: 'O projeto Animais Fantásticos é uma página interativa que celebra a diversidade da fauna ao nosso redor. A ideia é proporcionar uma experiência visual e informativa, destacando diferentes espécies de animais encontrados na natureza.',
        technologies: ['../vite.svg']
    },
    {
        image: '../img/projects/FlexBlog.png',
        title: 'FlexBlog',
        description: 'O FlexBlog é um projeto de página única e responsiva desenvolvido com foco total em Flexbox. A proposta é explorar ao máximo essa poderosa técnica de CSS, criando um layout fluido, dinâmico e adaptável a diferentes dispositivos.',
        technologies: ['../vite.svg']
    },
    {
        image: '../img/projects/FinanceAI.png',
        title: 'Finance.ai',
        description: 'A Finance AI é uma plataforma de gestão financeira que utiliza IA para monitorar suas movimentações, e oferecer insights personalizados, facilitando o controle do seu orçamento.',
        technologies: ['../vite.svg']
    }
]
</script>

<template>
    <section class="relative">
        <div class="flex flex-col items-center absolute left-0 top-0 bg-redCream w-[100px] h-full animeLeft">
          <span v-for="(letter, index) in letters" :key="index" class="feature">
            {{ letter }}
          </span>
        </div>
        <Swiper :projects="projects"/>
    </section>
</template>

<style scoped>
.feature{
    display: block;
    color: var(--color-cream);
    font-family: var(--font-anton);
    font-size: 100px;
    font-weight: bold;
    line-height: 1px;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: auto 0;

}
</style>
