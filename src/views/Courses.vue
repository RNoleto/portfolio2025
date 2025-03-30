<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
</script>

<template>
  <section id="courses">
    <p class="title">Cursos</p>
    <p class="font-detail text-sm mt-1">Ingressos dos cursos que participei.</p>
    <swiper
      slides-per-view="1.2"
      space-between="20"
      :loop="false"
      class="custom-swiper mt-2"
    >
      <swiper-slide class="slide">
        <div class="flex flex-col gap-2">
          <img src="/img/tickets/Ticket1.png" alt="React Native" class="shadow-md" />
          <img src="/img/tickets/Ticket2.png" alt="JavaScript" class="shadow-md" />
          <img src="/img/tickets/Ticket3.png" alt="React" class="shadow-md" />
          <img src="/img/tickets/Ticket4.png" alt="NLW React" class="shadow-md" />
          <img src="/img/tickets/Ticket5.png" alt="NLW React" class="shadow-md" />
        </div>
      </swiper-slide>
      <swiper-slide class="slide">
        <div class="flex flex-col gap-2">
          <img src="/img/tickets/Ticket6.png" alt="NLW JavaScript" class="shadow-md" />
          <img src="/img/tickets/Ticket7.png" alt="UI Design" class="shadow-md" />
          <img src="/img/tickets/Ticket8.png" alt="WordPress" class="shadow-md" />
          <img src="/img/tickets/Ticket9.png" alt="CSS Grid" class="shadow-md" />
          <img src="/img/tickets/Ticket10.png" alt="CSS FlexBox" class="shadow-md" />
        </div>
      </swiper-slide>
      <swiper-slide class="slide">
        <div class="flex flex-col gap-2">
          <img src="/img/tickets/Ticket11.png" alt="SW Weekend" class="shadow-md" />
          <img src="/img/tickets/Ticket12.png" alt="NextJs" class="shadow-md" />
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style scoped>
section {
  min-height: 100vh;
  font-family: var(--font-anton);
  font-size: 24px;
}

.slide {
  width: 80%; /* Ajuste a largura conforme necessário */
}
</style>
