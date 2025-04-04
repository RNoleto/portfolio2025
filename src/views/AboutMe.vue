<script setup>
import Polaroid from '../components/ui/Polaroid.vue'
</script>

<template>
    <section class="aboutMe" id="about">
        <div class="image-container relative animeLeft">
            <img src="/AboutMe.svg" alt="">
        </div>
        <Polaroid imageSrc="../img/RamonNoleto.jpg" caption="Ramon Noleto" class="absolute top-2 left-[205px] rotate-20 animeRight z-1 sm:left-[790px] sm:w-[600px]"/>
        <div class="flex flex-col gap-2.5 text-body animeLeft mt-[-180px] sm:mt-[-100px]">
            <p>Sou um desenvolvedor <br class="sm:hidden"> web especializado em <br class="sm:hidden"> criar experiências digitais <br class="sm:hidden"> focadas em <br class="hidden sm:block"> performance <br class="sm:hidden"> e acessibilidade. </p>
            <p>Minha missão é <br class="sm:hidden"> transformar ideias em <br class="sm:hidden">soluções eficientes que <br class="sm:hidden"> proporcionem aos usuários <br> uma navegação intuitiva e agradável.</p>
            <p>Ao longo da minha carreira, participei de diversos projetos desafiadores que me permitiram aprimorar habilidades <br class="hidden sm:block"> em HTML, CSS, JavaScript, PHP, Vue. Cada experiência contribuiu para meu crescimento profissional e reforçou meu compromisso com a qualidade e a inovação.</p>
            <p>Estou sempre em busca de oportunidades para colaborar em projetos que valorizem a eficiência e a inclusão digital. Se você procura um profissional dedicado a entregar soluções web de alto desempenho e acessíveis a todos, vamos conversar!​</p>
        </div>
    </section>
</template>

<style scoped>
.aboutMe {
  position: relative;
  /* padding: 1.25rem; */
  /* background: var(--color-cream); */
  /* height: calc(100vh - 64px); */
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