<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
// Páginas
import Hero from './views/Hero.vue';
import AboutMe from './views/AboutMe.vue';
import Education from './views/Education.vue';
import Work from './views/Work.vue';
import Projects from './views/Projects.vue';
import Skills from './views/Skills.vue';
import Courses from './views/Courses.vue';
import Contact from './views/Contact.vue';
</script>

<template>
  <Header/>
  <main class="AppBody scroll-pt-16">
    <Hero/>
    <AboutMe />
    <Education />
    <Work />
    <Projects />
    <Skills />
    <Courses />
    <Contact />
  </main>
  <!-- <Footer /> -->
</template>

<style scoped></style>
