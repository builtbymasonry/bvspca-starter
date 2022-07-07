<template>
  <a class="px-5 md:px-6 pt-8 pb-11 xl:py-12 border-2 border-transparent rounded-md text-center shadow hover:border-orange bg-white" href="#0">
    <div class="flex align-end pb-1 md:pb-4 min-h-5 md:min-h-7">
      <img class="mx-auto scale-75 md:scale-100" :src="imgSrc" :alt="imgAlt">
    </div>
    <div>
      <h3 class="font-bold text-xl mb-2">{{props.title}}</h3>
      <p class="mb-6 md:mb-0 text-xs leading-loose">{{props.text}}</p>
      <ButtonLink class="md:hidden" variant="outline" text="Learn more"/>
    </div>
  </a>
</template>

<script setup>
import ButtonLink from './ButtonLink.vue';

const props = defineProps({
  imgSrc: {
    type: String,
    default: "#"
  },
  imgAlt: {
    type: String,
    default: 'Image Description'
  },
  title: String,
  text: String,
})
</script>
