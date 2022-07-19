<template>
  <div class="flex flex-col-reverse lg:flex-row">
    <div class="w-auto lg:w-1/2">
      <div class="text-center text-xs lg:pr-16 lg:text-left">
        <h2 class="mb-4 text-2xl font-bold md:text-4xl">{{ title }}</h2>
        <p v-if="text">{{ text }}</p>
      </div>
    </div>
    <div class="mx-auto w-full max-w-md lg:w-1/2 lg:max-w-full">
      <div class="mb-8 lg:mb-0">
        <Carousel :slides="slides" />
      </div>
    </div>
  </div>
</template>
<script setup>
import Carousel from "./Carousel.vue";
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  text: String,
  slides: {
    type: Array,
    required: true
  }
});
</script>
