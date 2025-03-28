<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
// Páginas
import Hero from './views/Hero.vue';
import AboutMe from './views/AboutMe.vue';
import Projects from './views/Projects.vue';
</script>

<template>
  <Header/>
  <main class="AppBody mt-[64px]">
    <Hero/>
    <AboutMe />
    <Projects />
  </main>
  <!-- <Footer /> -->
</template>

<style scoped></style>
