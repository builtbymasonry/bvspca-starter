<template>
  <div class="relative overflow-hidden">
    <img
      class="relative top-0 left-0 w-full object-cover md:absolute md:h-full"
      v-bind="img"
    />

    <div
      class="md:bg-gradient-radial relative from-white to-white/30 px-5 py-8 pb-14 text-center md:mx-10 md:my-12 md:max-w-lg md:rounded-lg md:px-12 md:py-12 md:text-left xl:mx-20 xl:my-24 xl:max-w-xl xl:px-20 xl:py-16"
    >
      <h1 class="mb-1 text-4xl font-bold md:text-6xl xl:text-7xl">{{title}}</h1>
      <p class="mr-10 text-base md:text-lg xl:text-2lg">{{text}}</p>
      <div
        class="mt-7 xl:mt-12 flex flex-wrap justify-center md:justify-start space-x-5 xl:space-x-10"
      >
        <Button
          v-for="button in buttons"
          :key="button.text"
          v-bind="button"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";

const props = defineProps({
  img: Object,
  title: String,
  text: String,
  buttons: Array
});
</script>
