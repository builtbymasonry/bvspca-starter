<template>
  <div class="relative z-10 mx-auto flex max-w-5xl px-4">
    <div
      class="mb-0 md:-mb-32 mx-auto sm:max-w-lg lg:max-w-full flex flex-col overflow-hidden rounded-sm md:rounded-lg bg-white shadow"
      :class="reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'"
    >
      <div class="relative h-80 overflow-hidden md:h-96 lg:h-auto lg:w-[46%]">
        <img
          class="absolute top-0 left-0 h-full w-full object-cover"
          v-bind="img"
        />
      </div>
      <div
        class="px-9 py-9 pb-14 text-center text-xs sm:px-16 sm:py-12 lg:w-[54%] lg:py-20 lg:text-left"
      >
        <h3 class="mb-2 lg:-mr-4 text-xl font-bold sm:text-4xl">{{ title }}</h3>
        <p>{{ text }}</p>
        <div
          v-if="buttons"
          class="mt-10 space-y-10"
        >
          <Button
            v-for="button in buttons"
            :key="button.text"
            v-bind="button"
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
  img: Object,
  reverse: {
    type: Boolean,
    default: false
  }
});
</script>
