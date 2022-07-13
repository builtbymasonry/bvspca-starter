<template>
  <div class="relative overflow-hidden">
    <img
      class="relative top-0 left-0 w-full object-cover md:absolute md:h-full"
      :src="imgSrc"
      :alt="imgDescr"
    />

    <div class="relative md:bg-gradient-radial from-white to-white/30 md:max-w-lg px-5 md:px-12 xl:px-20 pb-14 py-8 md:py-12 xl:py-20 md:mx-10 xl:mx-20 2xl:mx-40 md:my-12 lg:my-20 md:rounded-lg text-center md:text-left">
      <h1 class="mb-2 font-bold text-4xl md:text-5xl lg:text-6xl">
      For your pet
      </h1>
      <p class="text-base lg:text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
      dapibus nisl.
      </p>
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
});
</script>
