<script setup>
defineProps({
  codigo: { type: String, required: true },
  nomeEvento: { type: String, required: true },
  mesAno: { type: String, required: true },
  descricao: { type: String, required: true },
  producao: { type: String, required: true },
  imagem: { type: String, required: true },
  corFundo: { type: String, default: 'bg-turquoise' },
  corFundoCode: { type: String, default: 'bg-turquoise' },
  corTexto: { type: String, default: 'text-lightCream' },
  corBorda: { type: String, default: 'border-lightText' }
});
</script>

<template>
  <div class="flex font-codePro">
    <!-- Código do Evento -->
    <div 
      class="shadow-sm border-dashed border-1 rounded-md overflow-hidden px-4 py-2 text-center flex"
      :class="[corFundoCode, corBorda]"
    >
      <p class="[writing-mode:vertical-rl] text-sm font-bold" :class="corTexto">
        {{ codigo }}
      </p>
    </div>

    <!-- Informações do Evento -->
    <div 
      class="shadow-sm rounded-md border-dashed border-1 p-2 w-full relative overflow-hidden"
      :class="[corFundo, corBorda]"
    >
      <div class="text-sm flex flex-col justify-center">
        <p class="font-bold">{{ nomeEvento }}</p>
        <p class="text-[10px]">{{ mesAno }}</p>
        <p class="text-[10px]">{{ descricao }}</p>
        <p class="text-end text-[10px] z-10">{{ producao }}</p>
      </div>
      
      <!-- Ícone do evento -->
      <img 
        :src="imagem" 
        :alt="`Ícone de ${nomeEvento}`" 
        class="absolute w-[90px] right-[-5px] top-[10px] rotate-[-20deg] opacity-30"
      />
    </div>
  </div>
</template>

<style scoped>
.description{
  font-size: 10px;
}
</style>
