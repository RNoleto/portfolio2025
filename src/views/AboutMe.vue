<script setup>
import Polaroid from '../components/ui/Polaroid.vue'
</script>

<template>
    <section class="aboutMe" id="about">
        <div class="image-container relative animeLeft">
            <img src="/AboutMe.svg" alt="">
        </div>
        <Polaroid imageSrc="../img/RamonNoleto.jpg" caption="Ramon Noleto" class="absolute top-2 left-[205px] rotate-20 animeRight z-1 sm:left-[450px] sm:w-[250px] lg:left-[700px] xl:left-[870px]"/>
        <div class="flex flex-col gap-2.5 text-body animeLeft mt-[-160px] sm:mt-[-140px] lg:mt-[-60px] xl:mt-[-20px]">
            <p>Sou um desenvolvedor <br class="hidden"> web <br class="sm:hidden"> especializado em <br class="hidden">criar <br class="lg:hidden"> experiências <br class="hidden lg:block xl:hidden"> digitais <br class="sm:hidden"> focadas em <br class="hidden lg:hidden"> performance <br class="sm:block lg:hidden"> e <br class="hidden xl:block"> acessibilidade.</p>

            <p>Minha missão é <br class="sm:hidden lg:hidden"> transformar ideias em <br class="sm:hidden">soluções <br class="hidden sm:block lg:hidden"> eficientes <br class="hidden lg:hidden">que <br class="sm:hidden"> proporcionem aos usuários <br class="sm:hidden lg:block xl:hidden"> uma navegação <br class="hidden sm:block lg:hidden"> intuitiva e <br class="hidden"> agradável.</p>
            
            <p>Ao longo da minha carreira, participei de diversos projetos desafiadores que me permitiram aprimorar habilidades em HTML, CSS, JavaScript, PHP, Vue. Cada experiência contribuiu para meu crescimento profissional e reforçou meu compromisso com a qualidade e a inovação.</p>
            
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