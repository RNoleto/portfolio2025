<script setup>
import Swiper from '../components/Swiper.vue';

const title = "PROJETOS";
const letters = title.split("");

const projects = [
    {
        image: '../img/projects/Estuday.png',
        title: 'Estuday',
        description: 'Estuday é uma plataforma de aprendizado ágil voltada para concurseiros, que permite organizar a rotina de estudos, acompanhar métricas de desempenho e obter insights personalizados com o apoio da inteligência artificial, tornando o estudo mais eficiente.',
        link: 'https://estuday.com.br',
        technologies: ['../img/stacks/vue.svg', '../img/stacks/pinia.svg', '../img/stacks/laravel.svg', '../img/stacks/tailwind.svg', '../img/stacks/pgsql.svg', '../img/stacks/stripe.svg']
    },
    {
        image: '../img/projects/webscraper.webp',
        title: 'Webscraper Concursos',
        description: '​O Webscraper-Concursos é um scraper em PHP que coleta e estrutura diariamente dados de concursos públicos do site PCI Concursos. Ele extrai cargos, vagas e salários dos editais em PDF, gerando um arquivo JSON pronto para integração com outras plataformas.',
        link: 'https://rnoleto.github.io/webscraper-concursos/',
        technologies: ['../img/stacks/php.svg', '../github.svg']
    },
    {
        image: '../img/projects/vivoItajai.webp',
        title: 'Vivo Itajaí',
        description: 'Página responsiva desenvolvida para a loja Vivo Itajaí, permitindo o envio de links para avaliações no Google e lojas de apps, além de divulgar os contatos dos consultores, mantendo o design fiel à identidade da Vivo.',
        link: 'https://loja-vivo.vercel.app/',
        technologies: ['../img/stacks/vue.svg', '../img/stacks/tailwind.svg']
    },
    {
        image: '../img/projects/Dogs.png',
        title: 'Dogs',
        description: 'O Dogs foi criado para conectar amantes de cães aos seus fiéis companheiros. Inspirado em redes sociais, o projeto oferece um ambiente interativo onde tutores compartilham momentos especiais, trocam experiências e encontram novas amizades para eles e seus pets.',
        link: 'https://dogs-lime-two.vercel.app/',
        technologies: ['../img/stacks/react.svg']
    },
    {
        image: '../img/projects/AnimaisFantasticos.png',
        title: 'Animais Fantásticos',
        description: 'Animais Fantásticos é uma página interativa que celebra a diversidade da fauna, oferecendo uma experiência visual e educativa. O projeto destaca diferentes espécies e curiosidades do reino animal, despertando o interesse pela natureza de forma leve e envolvente.',
        link: 'https://rnoleto.github.io/Animais-Fantasticos/',
        technologies: ['../img/stacks/html5.svg', '../img/stacks/css3.svg', '../img/stacks/js.svg']
    },
    {
        image: '../img/projects/FlexBlog.png',
        title: 'FlexBlog',
        description: 'FlexBlog é uma página única e responsiva criada com foco total em Flexbox. O projeto explora ao máximo essa poderosa técnica de CSS, resultando em um layout moderno, fluido e adaptável, ideal para destacar conteúdos em diferentes dispositivos.',
        link: 'https://rnoleto.github.io/FlexBlog/',
        technologies: ['../img/stacks/html5.svg', '../img/stacks/css3.svg']
    },
    {
        image: '../img/projects/FinanceAI.png',
        title: 'Finance.ai',
        description: 'Finance AI é uma plataforma inteligente de gestão financeira que usa inteligência artificial para acompanhar suas movimentações e gerar insights personalizados, tornando mais fácil controlar seu orçamento e tomar decisões mais assertivas.',
        link: 'https://finance-ai-cyan-five.vercel.app/login',
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
