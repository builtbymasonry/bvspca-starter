<template>
  <div
    class="flex flex-col gap-5 text-center sm:gap-10 lg:gap-20 lg:text-left"
    :class="reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'"
  >
    <div
      class="mx-auto max-w-sm relative overflow-hidden rounded-sm md:max-w-md md:rounded-md lg:w-1/2 lg:max-w-full shadow"
    >
      <img class="w-full lg:absolute lg:h-full lg:object-cover" v-bind="img" />
    </div>
    <div class="flex-col items-start justify-center text-xs lg:flex lg:w-1/2">
      <h2 class="mb-3 text-2xl font-bold sm:text-4xl">{{ title }}</h2>
      <p>{{ text }}</p>
      <div
        v-if="buttons"
        class="mt-10 flex flex-wrap justify-center lg:justify-start space-x-10"
      >
        <Button
          v-for="button in buttons"
          :key="button.text"
          :url="button.url"
          :variant="button.variant || primary"
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
  img: Object,
  reverse: {
    type: Boolean,
    default: false
  }
});
</script>
