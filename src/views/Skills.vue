<script setup>

</script>

<template>
    <section id="skills">
        <p class="text-body lg:mt-10">As principais tecnologias e ferramentas que utilizo diariamente para desenvolver soluções digitais eficientes, acessíveis e de alta performance.</p>
        <!-- Barra de Habilidade -->
        <div class="image-container relative animeLeft mt-2.5 bg-turquoise shadow-sm">
            <img src="/Habilidades.svg" alt="Habilidade" class="m-auto">
        </div>
        <div class="mt-[120px] flex justify-between flex-wrap overflow-hidden lg:mt-[180px] lg:gap-10 lg:justify-between">
            <!-- Html e Css -->
            <div class="flex">
                <img src="/img/stickers/html.png" alt="html" class="sticker h-[120px] lg:h-[200px]">
                <img src="/img/stickers/css.png" alt="css" class="sticker h-[90px] ml-[-40px] lg:h-[150px] lg:ml-[-70px]">
            </div>
            <!-- JavaScript e Php -->
            <div class="flex">
                <img src="/img/stickers/javascript.png" alt="javacript" class="sticker h-[90px] lg:h-[150px]">
                <img src="/img/stickers/php.png" alt="php" class="sticker h-[70px] ml-[-20px] lg:h-[120px]">
            </div>
            <!-- Vue e React -->
            <div class="flex">
                <img src="/img/stickers/vue.png" alt="vue" class="sticker h-[100px] ml-[10px] lg:h-[150px]">
                <img src="/img/stickers/react.png" alt="react" class="sticker h-[100px] ml-[-30px] lg:h-[150px]">
            </div>
            <!-- Tailwind e Laravel -->
            <!-- <div class="flex">
                <img src="/img/stickers/laravel.png" alt="vue" class="sticker h-[100px] ml-[10px] lg:h-[150px]">
                <img src="/img/stickers/react.png" alt="react" class="sticker h-[100px] ml-[-30px] lg:h-[150px]">
            </div> -->
            <!-- Wordpress e Figma -->
            <div class="flex">
                <img src="/img/stickers/wordpress.png" alt="wordpress" class="sticker h-[80px] lg:h-[160px]">
                <img src="/img/stickers/figma.png" alt="figma" class="sticker h-[90px] ml-[-35px] lg:h-[135px] lg:ml-[-50px]">
            </div>
            <!-- MySQL e PostgreSQL -->
            <div class="flex">
                <img src="/img/stickers/mysql.png" alt="mysql" class="sticker h-[100px] lg:h-[150px]">
                <img src="/img/stickers/postgresql.png" alt="" class="sticker h-[100px] ml-[-55px] lg:h-[160px] lg:ml-[-80px]">
            </div>
        </div>
    </section>
</template>

<style scoped>
#skills{
    position: relative;
    color: var(--color-darkCream);
    font-size: 14px;
    letter-spacing: 1.2px;
    line-height: 20px;
}

.image-container{
    position: absolute;
    left: 0px;
    width: 100%;
}

.sticker{
    width: auto;
}
.sticker:hover{
    transform: rotate(10deg);
    transition: .3s;
}
</style>