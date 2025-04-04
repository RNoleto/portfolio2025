<script setup>
import Swiper from '../components/Swiper.vue';

const title = "PROJETOS";
const letters = title.split("");

const projects = [
    {
        image: '../img/projects/Estuday.png',
        title: 'Estuday',
        description: 'Estuday é uma plataforma de aprendizado rápido e eficiente para concurseiros, que permite gerenciar seu tempo de estudo, acompanhar métricas das questões resolvidas e acessar insights personalizados gerados por inteligência artificial.',
        technologies: ['../img/stacks/vue.svg', '../img/stacks/laravel.svg', '../img/stacks/tailwind.svg', '../img/stacks/pgsql.svg', '../img/stacks/stripe.svg']
    },
    {
        image: '../img/projects/Dogs.png',
        title: 'Dogs',
        description: 'O Dogs foi criado para conectar apaixonados por cães e seus melhores amigos de quatro patas! Inspirado no conceito das redes sociais tradicionais, este projeto oferece um espaço interativo onde tutores podem compartilhar momentos especiais, interagir com outros donos e até mesmo encontrar novas amizades para seus pets.',
        technologies: ['../img/stacks/react.svg']
    },
    {
        image: '../img/projects/AnimaisFantasticos.png',
        title: 'Animais Fantásticos',
        description: 'O projeto Animais Fantásticos é uma página interativa que celebra a diversidade da fauna ao nosso redor. A ideia é proporcionar uma experiência visual e informativa, destacando diferentes espécies de animais encontrados na natureza.',
        technologies: ['../img/stacks/html5.svg', '../img/stacks/css3.svg', '../img/stacks/js.svg']
    },
    {
        image: '../img/projects/FlexBlog.png',
        title: 'FlexBlog',
        description: 'O FlexBlog é um projeto de página única e responsiva desenvolvido com foco total em Flexbox. A proposta é explorar ao máximo essa poderosa técnica de CSS, criando um layout fluido, dinâmico e adaptável a diferentes dispositivos.',
        technologies: ['../img/stacks/html5.svg', '../img/stacks/css3.svg']
    },
    {
        image: '../img/projects/FinanceAI.png',
        title: 'Finance.ai',
        description: 'A Finance AI é uma plataforma de gestão financeira que utiliza IA para monitorar suas movimentações, e oferecer insights personalizados, facilitando o controle do seu orçamento.',
        technologies: ['../img/stacks/typescript.svg', '../img/stacks/nodejs.svg']
    }
]
</script>

<template>
    <section class="relative" id="projects">
        <div class="absolute z-3 left-0 top-0  w-[100px] flex flex-col items-center animeLeft">
            <img src="/ProjetosLetras.svg" alt="projetos">
        </div>
        <span class="barra absolute z-1 left-0 top-0 bg-redCream w-[100px] h-full flex flex-col items-center animeLeft">
        </span>
        <span class="absolute z-2 left-[40px] top-[240px] bg-redCream w-[60px] h-[425px] animeLeft"></span>
        <Swiper :projects="projects" class="relative z-5 animeRight"/>
    </section>
</template>

<style scoped>
.barra{
    box-shadow: 2px 0 3px var(--color-lightText);
}
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
