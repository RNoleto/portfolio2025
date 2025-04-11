<script setup>
const contacts = [
  {
    type: 'WhatsApp',
    value: '+55 96 98140-3089',
    link: 'https://wa.me/5596981403089',
    icon: '/whatsapp.svg',
    message: 'Olá Ramon! Vi seu portfólio e gostaria de conversar sobre um projeto.'
  },
  {
    type: 'Email',
    value: 'devnoleto@gmail.com',
    link: 'mailto:devnoleto@gmail.com',
    icon: '/email.svg'
  },
  {
    type: 'LinkedIn',
    value: 'linkedin.com/in/ramon-noleto',
    link: 'https://www.linkedin.com/in/ramon-noleto-b0913545/',
    icon: '/linkedin.svg'
  },
  {
    type: 'Discord',
    value: 'RNoleto',
    link: 'https://discord.com/users/586556129702576138',
    icon: '/discord.svg'
  },
  {
    type: 'Github',
    value: 'RNoleto',
    link: 'https://github.com/RNoleto',
    icon: '/github.svg'
  }
];

const getContactLink = (contact) => {
  if (contact.type === 'WhatsApp' && contact.message) {
    const encodedMessage = encodeURIComponent(contact.message);
    return `${contact.link}?text=${encodedMessage}`;
  }
  return contact.link;
};
</script>

<template>
  <section id="contact" class="py-6 px-4 bg-cream min-h-screen flex justify-center items-center">
    <div class="bg-turquoise flex flex-col justify-center items-center p-6 rounded-md shadow-md">
      <h1 class="title mb-6 text-lightCream">Contato</h1>
      
      <div class="flex flex-col items-center gap-4">
        <div 
          v-for="(contact, index) in contacts" 
          :key="index"
          class="flex items-center gap-3 bg-lightCream p-3 rounded-md shadow-sm w-full max-w-md border border-lightText"
        >
          <img 
            :src="contact.icon" 
            :alt="contact.type" 
            class="w-8 h-8 object-contain"
          />
          <a 
            :href="getContactLink(contact)" 
            class="text-body text-darkText hover:text-cobaltBlue"
            target="_blank" rel="noopener noreferrer"
          >
            {{ contact.value }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Você pode adicionar ajustes específicos aqui se desejar */
</style>
