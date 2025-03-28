<script setup>
const title = "PROJETOS";
const letters = title.split("");
</script>

<template>
    <section class="relative">
        <div class="flex flex-col items-center absolute left-0 top-0 bg-redCream w-[100px] h-full animeLeft">
          <span v-for="(letter, index) in letters" :key="index" class="feature">
            {{ letter }}
          </span>
        </div>
    </section>
</template>

<style scoped>
.feature{
    display: block;
    color: var(--color-cream);
    font-family: var(--font-anton);
    font-size: 100px;
    font-weight: 900;
    line-height: 1px;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: auto 0;

}
</style>
