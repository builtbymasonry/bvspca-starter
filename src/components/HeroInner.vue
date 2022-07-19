<template>
  <div class="relative overflow-hidden">
    <div class="mx-auto max-w-screen-2xl md:px-4">
      <img
        class="relative top-0 left-0 w-full object-cover md:absolute md:h-full"
        v-bind="img"
      />

      <div
        class="md:bg-gradient-radial relative from-white to-white/30 px-5 py-6 pb-10 text-center md:my-12 md:max-w-xl md:rounded-lg md:bg-transparent md:px-12 md:py-12 md:text-left lg:my-20 xl:px-20 xl:py-20"
      >
        <h1 class="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
          {{ title }}
        </h1>
        <p class="text-sm md:text-base lg:text-lg">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";

const props = defineProps({
  title: String,
  text: String,
  img: Object
});
</script>
