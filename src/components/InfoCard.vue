<template>
  <div class="mx-auto max-w-5xl px-4 flex relative z-10">
    <div
      class="mb-0 flex flex-col overflow-hidden rounded-sm bg-white shadow md:-mb-32 md:rounded-lg"
      :class="reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'"
    >
      <div class="relative h-80 overflow-hidden md:h-96 lg:h-auto lg:w-[46%]">
        <img
          class="absolute top-0 left-0 h-full w-full object-cover"
          :src="imgSrc"
          :alt="imgAlt"
        />
      </div>
      <div class="px-9 py-9 pb-14 text-center sm:px-16 sm:py-12 lg:w-[54%] lg:py-20 lg:text-left text-xs">
        <h3 class="mb-2 text-xl font-bold sm:text-4xl">{{title}}</h3>
        <p class="lg:mr-24">{{text}}</p>
        <div
          v-if="buttons"
          class="mt-10 flex flex-wrap justify-center lg:justify-start space-x-5 lg:space-x-10"
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
