<script setup>

</script>

<template>
    <section id="skills">
        <p class="text-body lg:mt-10">As principais tecnologias e ferramentas que utilizo diariamente para desenvolver soluções digitais eficientes, acessíveis e de alta performance.</p>
        <!-- Barra de Habilidade -->
        <div class="image-container relative animeLeft mt-2.5 bg-turquoise shadow-sm">
            <img src="/Habilidades.svg" alt="Habilidade" class="w-[800px] h-[100px] md:w-[100%] md:h-[200px]">
        </div>
        <div class="mt-[120px] flex justify-between flex-wrap overflow-hidden md:mt-[500px] lg:mt-[220px] lg:gap-10 lg:justify-between">
            <!-- Html e Css -->
            <div class="flex">
                <img src="/img/stickers/html.webp" alt="html" class="sticker h-[120px] lg:h-[200px]" width="120" height="120">
                <img src="/img/stickers/css.webp" alt="css" class="sticker h-[90px] ml-[-40px] lg:h-[150px] lg:ml-[-70px]" width="90" height="90">
            </div>
            <!-- JavaScript e Php -->
            <div class="flex">
                <img src="/img/stickers/javascript.webp" alt="javacript" class="sticker h-[90px] lg:h-[150px]" width="90" height="90">
                <img src="/img/stickers/php.webp" alt="php" class="sticker h-[70px] ml-[-20px] lg:h-[120px]" width="70" height="70">
            </div>
            <!-- Vue e React -->
            <div class="flex">
                <img src="/img/stickers/vue.webp" alt="vue" class="sticker h-[100px] ml-[10px] lg:h-[150px]" width="100" height="100">
                <img src="/img/stickers/react.webp" alt="react" class="sticker h-[100px] ml-[-30px] lg:h-[150px]" width="100" height="100">
            </div>
            <!-- Tailwind e Laravel -->
            <!-- <div class="flex">
                <img src="/img/stickers/laravel.png" alt="vue" class="sticker h-[100px] ml-[10px] lg:h-[150px]">
                <img src="/img/stickers/react.png" alt="react" class="sticker h-[100px] ml-[-30px] lg:h-[150px]">
            </div> -->
            <!-- Wordpress e Figma -->
            <div class="flex">
                <img src="/img/stickers/wordpress.webp" alt="wordpress" class="sticker h-[80px] lg:h-[160px]" width="80" height="80">
                <img src="/img/stickers/figma.webp" alt="figma" class="sticker h-[90px] ml-[-35px] lg:h-[135px] lg:ml-[-50px]" width="90" height="90">
            </div>
            <!-- MySQL e PostgreSQL -->
            <div class="flex">
                <img src="/img/stickers/mysql.webp" alt="mysql" class="sticker h-[100px] lg:h-[150px]" width="100" height="100">
                <img src="/img/stickers/postgresql.webp" alt="postgresql" class="sticker h-[100px] ml-[-55px] lg:h-[160px] lg:ml-[-80px]" width="100" height="100">
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