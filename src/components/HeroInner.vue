<template>
  <div class="relative overflow-hidden">
    <div class="mx-auto max-w-7xl px-4">
      <img
        class="relative top-0 left-0 w-full object-cover md:absolute md:h-full"
        :src="imgSrc"
        :alt="imgDescr"
      />

      <div class="relative bg-gray-dark md:bg-transparent md:bg-gradient-radial from-white to-white/30 md:max-w-lg px-5 md:px-12 xl:px-20 pb-10 py-6 md:py-12 xl:py-20 md:my-12 lg:my-20 md:rounded-lg text-center md:text-left">
        <h1 class="mb-2 font-bold text-4xl md:text-5xl lg:text-6xl">{{title}}</h1>
        <p class="text-sm md:text-base lg:text-lg">{{text}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";

const props = defineProps({
  imgSrc: {
    type: String,
    default: "#",
  },
  imgDescr: {
    type: String,
    default: "Image Description",
  },
  title: String,
  text: String
});
</script>
