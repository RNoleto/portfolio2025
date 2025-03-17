<script setup>
import { ref } from 'vue';

const isActive = ref(false);

function toggleMenu(){
    isActive.value = !isActive.value;
    console.log(isActive.value ? "menu aberto" : "menu fechado");
}

</script>

<template>
        <button 
            @click="toggleMenu"
            :class="{ active: isActive}"
            class="relative bg-[#eee] rounded-sm w-[40px] h-[40px] flex flex-col gap-1 border-transparent border-1 items-center justify-center cursor-pointer"
        >
        <span :class="{active: isActive}"></span>
        </button>
        <Transition name="fade-slide">
            <nav v-show="isActive" class="absolute mt-1 border-1 border-gray-300 rounded-md p-2 bg-zinc-50">
                <ul class="flex flex-col gap-2 min-w-[120px]">
                    <li class="px-1 py-2">Home</li>
                    <li class="px-1 py-2">Sobre mim</li>
                    <li class="px-1 py-2">Projetos</li>
                    <li class="px-1 py-2">Contato</li>
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
button span{
    content: '';
    position: relative;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
    transition: .3s;
}

button span:before{
    content: '';
    position: absolute;
    top: -6px;
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px ;
    background: currentColor;
}

span:after{
    content: '';
    position: absolute;
    top: 6px;
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px ;
    background: currentColor;
}

button:focus,
button:hover,
button.active{
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #A6E3FF;
    border-color: #00BCFF;
    color: #00BCFF;
}

/* Barra do meio */
span.active{
    content: '';
    transform: rotate(110deg);
    color: currentColor;
}

span.active::before,
span.active::after{
    transform: rotate(-65deg);
    width: 10px; 
    height: 10px;
}

/* Superior */
span.active::before{
    top: 2px;
    left: 6px;
    border-left: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    background: transparent ;
}

/* Inferior */
span.active::after{
    left: 2px;
    top: -10px;
    border-right: 2px solid currentColor;
    border-top: 2px solid currentColor;
    background: transparent ;
}

li:hover,
li:focus{
    cursor: pointer;
   color: #00BCFF;
}
</style>