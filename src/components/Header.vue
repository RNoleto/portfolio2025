<script setup>
import Navbar from './Navbar.vue';

</script>

<template>
    <header class="flex items-center justify-between py-3 px-5 bg-turquoise z-1">
        <p class="text-lightCream font-heading text-[16px]">RNoleto</p>
        <Navbar />
    </header>
</template>

<style scoped>
header{
    box-shadow: 0px 2px 4px var(--color-lightText);
}
</style>