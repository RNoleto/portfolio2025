<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
// Páginas
import Hero from './views/Hero.vue';
import AboutMe from './views/AboutMe.vue';
import Projects from './views/Projects.vue';
import Skills from './views/Skills.vue';
</script>

<template>
  <Header/>
  <main class="AppBody scroll-pt-16">
    <Hero/>
    <AboutMe />
    <Projects />
    <Skills />
  </main>
  <!-- <Footer /> -->
</template>

<style scoped></style>
