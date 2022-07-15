<template>
  <div
    class="flex flex-col gap-5 sm:gap-10 lg:gap-20 text-center lg:text-left"
    :class="reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'"
  >
    <div class="mx-auto max-w-sm md:max-w-md lg:max-w-full lg:w-1/2 rounded-sm md:rounded-md overflow-hidden">
      <img class="w-full" :src="imgSrc" :alt="imgAlt" />
    </div>
    <div class="lg:w-1/2 lg:flex flex-col items-start justify-center text-xs">
      <h2 class="mb-3 text-2xl sm:text-4xl font-bold">{{title}}</h2>
      <p>{{text}}</p>
      <div
        v-if="buttons"
        class="mt-10 flex flex-wrap justify-center  lg:justify-start space-x-10"
      >
        <Button
          v-for="button in buttons"
          :key="button.text"
          :variant="button.variant"
          :text="button.text"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue";

const props = defineProps({
  title: String,
  text: String,
  buttons: Array,
  imgSrc: {
    type: String,
    default: "#",
  },
  imgAlt: {
    type: String,
    default: "",
  },
  reverse: {
    type: Boolean,
    default: false
  }
});
</script>
