<script setup>

</script>

<template>
    <section id="skills">
        <p>As principais tecnologias e ferramentas que utilizo diariamente para desenvolver soluções digitais eficientes, acessíveis e de alta performance.</p>
        <!-- Barra de Habilidade -->
        <div class="image-container relative animeLeft mt-2.5 bg-turquoise shadow-sm">
            <img src="/Habilidades.svg" alt="Habilidade" class="m-auto">
        </div>
        <div class="mt-[120px] flex justify-between flex-wrap overflow-hidden">
            <!-- Html e Css -->
            <div class="flex">
                <img src="/img/stickers/html.png" alt="html" class="sticker h-[120px]">
                <img src="/img/stickers/css.png" alt="css" class="sticker h-[90px] ml-[-40px]">
            </div>
            <!-- JavaScript e Php -->
            <div class="flex">
                <img src="/img/stickers/javascript.png" alt="javacript" class="sticker h-[90px]">
                <img src="/img/stickers/php.png" alt="php" class="sticker h-[70px] ml-[-20px]">
            </div>
            <!-- Vue e React -->
            <div class="flex">
                <img src="/img/stickers/vue.png" alt="vue" class="sticker h-[120px]">
                <img src="/img/stickers/react.png" alt="react" class="sticker h-[100px] ml-[-30px]">
            </div>
            <!-- Wordpress e Figma -->
            <div class="flex">
                <img src="/img/stickers/wordpress.png" alt="wordpress" class="sticker h-[80px]">
                <img src="/img/stickers/figma.png" alt="figma" class="sticker h-[90px] ml-[-35px]">
            </div>
            <!-- MySQL e PostgreSQL -->
            <div class="flex">
                <img src="/img/stickers/mysql.png" alt="mysql" class="sticker h-[100px]">
                <img src="/img/stickers/postgresql.png" alt="" class="sticker h-[100px] ml-[-55px]">
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
</style>