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
            class="bg-[#eee] rounded-sm w-[40px] h-[40px] flex flex-col gap-1 border-transparent border-1 items-center justify-center cursor-pointer"
        ></button>
        <nav v-show="isActive">
            Opções do menu
        </nav>
</template>

<style scoped>
button::after{
    content: '';
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: .2s;
}

button:focus,
button:hover,
.active{
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #A6E3FF;
    border-color: #00BCFF;
    color: #00BCFF;
}

.active::after{
    transform: rotate(-90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px currentColor, 0 -8px currentColor;
}
</style>