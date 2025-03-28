<script setup>
defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="bg-white shadow-md rounded-lg p-4 pb-8 relative w-[200px] max-w-xs">
    <img :src="imageSrc" alt="Polaroid photo" class="w-full rounded-md" />
    <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm text-darkText font-detail">
      {{ caption }}
    </div>
  </div>
</template>

<style scoped>
/* Os estilos estão definidos via Tailwind CSS */
</style>
