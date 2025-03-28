<script setup>
import Polaroid from '../components/ui/Polaroid.vue'
</script>

<template>
    <section class="aboutMe">
        <div class="image-container relative">
            <img src="/public/AboutMe.svg" alt="">
        </div>
        <Polaroid imageSrc="../../public/img/RamonNoleto.jpg" caption="Ramon Noleto" class="absolute top-2 left-[205px] rotate-20 animeRight z-1"/>
        <div class="flex flex-col gap-2.5 text-body animeLeft mt-[-200px]">
            <p class="w-[200px]">Sou um desenvolvedor web especializado em criar experiências digitais focadas em performance e acessibilidade. </p>
            <p class="">Minha missão é<br>transformar ideias em <br> soluções eficientes que <br> proporcionem aos usuários <br> uma navegação intuitiva e agradável.</p>
            <p>Ao longo da minha carreira, participei de diversos projetos desafiadores que me permitiram aprimorar habilidades em HTML, CSS, JavaScript, PHP, Vue. Cada experiência contribuiu para meu crescimento profissional e reforçou meu compromisso com a qualidade e a inovação.</p>
            <p>Estou sempre em busca de oportunidades para colaborar em projetos que valorizem a eficiência e a inclusão digital. Se você procura um profissional dedicado a entregar soluções web de alto desempenho e acessíveis a todos, vamos conversar!​</p>
        </div>
    </section>
</template>

<style scoped>
.aboutMe {
  position: relative;
  padding: 1.25rem;
  background: var(--color-cream);
  height: calc(100vh - 64px);
}

.image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}

.image-container img {
  width: 100%;
  height: auto;
  display: block;
}
</style>