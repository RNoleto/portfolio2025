<script setup>

</script>

<template>
    <section id="skills">
        <p>As principais tecnologias e ferramentas que utilizo diariamente para desenvolver soluções digitais eficientes, acessíveis e de alta performance.</p>
        <div class="image-container relative animeLeft mt-2.5">
            <img src="/Habilidade.png" alt="Habilidade">
        </div>
        <div class="mt-[105px] flex justify-between flex-wrap overflow-hidden">
            <!-- Html e Css -->
            <div class="flex">
                <img src="/img/stickers/html.svg" alt="html">
                <img src="/img/stickers/css.svg" alt="css" class="ml-[-30px]">
            </div>
            <!-- JavaScript e Php -->
            <div class="flex">
                <img src="/img/stickers/javascript.svg" alt="javacript">
                <img src="/img/stickers/php.svg" alt="php" class="ml-[-20px] mr-[20px]">
            </div>
            <div class="flex">
                <img src="/img/stickers/vue.svg" alt="vue">
                <img src="/img/stickers/react.svg" alt="react" class="ml-[-25px]">
            </div>

            <div class="flex">
                <img src="/img/stickers/wordpress.svg" alt="wordpress">
                <img src="/img/stickers/figma.svg" alt="figma" class="ml-[-35px] mr-[20px]">
            </div>

            <div class="flex">
                <img src="/img/stickers/mysql.svg" alt="mysql">
                <img src="/img/stickers/postgresql2.png" alt="" class="postgresql ml-[-55px]">
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

.postgresql{
    width: auto;
    height: 120px;
}
</style>