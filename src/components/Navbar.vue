<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isActive = ref(false);
const isMobile = ref(window.innerWidth < 640);

function toggleMenu() {
  isActive.value = !isActive.value;
}

function closeMenu() {
  if (isMobile.value) {
    isActive.value = false;
  }
}

function updateIsMobile() {
  isMobile.value = window.innerWidth < 640;
}

onMounted(() => {
  window.addEventListener('resize', updateIsMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobile);
});
</script>

<template>
  <!-- Botão de menu: só aparece em mobile -->
  <button 
    @click="toggleMenu"
    :class="{ active: isActive }"
    class="relative bg-[#eee] rounded-sm w-[40px] h-[40px] flex flex-col gap-1 border-transparent border-1 items-center justify-center cursor-pointer sm:hidden"
  >
    <span :class="{ active: isActive }"></span>
  </button>

  <!-- Menu de navegação:
       Se não for mobile, sempre exibe;
       Se for mobile, exibe apenas se isActive for verdadeiro -->
  <Transition name="fade-slide">
    <nav v-show="!isMobile || isActive" 
         class="absolute mt-1 top-12 right-1 border border-gray-300 rounded-lg p-2 bg-zinc-50 shadow-md sm:static sm:flex sm:gap-4 sm:rounded-none sm:border-0 sm:shadow-none">
      <ul class="flex flex-col gap-2 min-w-[120px] sm:flex-row sm:gap-4 sm:min-w-0">
        <li @click="closeMenu" class="px-1 py-2 sm:px-4 sm:py-2">Home</li>
        <li @click="closeMenu" class="px-1 py-2 sm:px-4 sm:py-2">Sobre mim</li>
        <li @click="closeMenu" class="px-1 py-2 sm:px-4 sm:py-2">Projetos</li>
        <li @click="closeMenu" class="px-1 py-2 sm:px-4 sm:py-2">Contato</li>
      </ul>
    </nav>
  </Transition>
</template>

<style scoped>
/* Transição suave do menu */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Estilização do botão de menu */
button span {
  content: '';
  position: relative;
  width: 1.2rem;
  height: 2px;
  border-radius: 2px;
  background: currentColor;
  transition: 0.3s;
}

button span::before {
  content: '';
  position: absolute;
  top: -6px;
  display: block;
  width: 1.2rem;
  height: 2px;
  border-radius: 2px;
  background: currentColor;
  transition: 0.3s;
}

button span::after {
  content: '';
  position: absolute;
  top: 6px;
  display: block;
  width: 1.2rem;
  height: 2px;
  border-radius: 2px;
  background: currentColor;
  transition: 0.3s;
}

/* Estados de foco/hover/ativo do botão */
button:focus,
button:hover,
button.active {
  outline: none;
  background: white;
  box-shadow: 0 0 0 3px #A6E3FF;
  border-color: #00BCFF;
  color: #00BCFF;
}

/* Transformação para o ícone ativo (</>) */
span.active {
  transform: rotate(110deg);
}

span.active::before,
span.active::after {
  transform: rotate(-65deg);
  width: 10px; 
  height: 10px;
}

span.active::before {
  top: 2px;
  left: 6px;
  border-left: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  background: transparent;
}

span.active::after {
  left: 2px;
  top: -10px;
  border-right: 2px solid currentColor;
  border-top: 2px solid currentColor;
  background: transparent;
}

li:hover,
li:focus {
  cursor: pointer;
  color: #00BCFF;
}
</style>
