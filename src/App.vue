<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Hero from './views/Hero.vue';
import AboutMe from './views/AboutMe.vue';
</script>

<template>
  <Header/>
  <main class="AppBody mt-[64px]">
    <Hero/>
    <AboutMe />
  </main>
  <!-- <Footer /> -->
</template>

<style scoped></style>
