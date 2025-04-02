<script setup>

const works = [
    {
        firm: 'BRD Soluções em Tecnologia',
        position: 'Desenvolvedor Fullstack Pleno',
        period: 'fev 2024 - até o momento',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est illo esse natus tempore fuga harum consequatur eligendi exercitationem. Dicta facere fugiat, quidem cupiditate dolores aut ipsam debitis dolor eveniet autem.'
    },
    {
        firm: 'INBRAEP',
        position: 'Desenvolvedor Fullstack',
        period: 'mar 2023 - fev 2023',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est illo esse natus tempore fuga harum consequatur eligendi exercitationem. Dicta facere fugiat, quidem cupiditate dolores aut ipsam debitis dolor eveniet autem.'
    },
    {
        firm: 'Foco Solution Provider',
        position: 'Analista de TI',
        period: 'jul 2021 - nov 2022',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est illo esse natus tempore fuga harum consequatur eligendi exercitationem. Dicta facere fugiat, quidem cupiditate dolores aut ipsam debitis dolor eveniet autem.'
    },
    {
        firm: 'Senac Amapá',
        position: 'Técnico Especializado em Ciências da Computação',
        period: 'jan 2014 - fev 2020',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est illo esse natus tempore fuga harum consequatur eligendi exercitationem. Dicta facere fugiat, quidem cupiditate dolores aut ipsam debitis dolor eveniet autem.'
    }
]
</script>

<template>
    <section id="works">
        <div v-for="(work, index) in works" key="index" class="border-2 my-2 p-2">
            <p>{{ work.position }}</p>
            <p>{{ work.firm }}</p>
            <p>{{ work.period }}</p>
            <p>{{ work.description }}</p>
        </div>
    </section>
</template>

<style scoped></style>