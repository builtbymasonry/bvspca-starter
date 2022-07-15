<template>
  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-7xl items-start px-4 lg:flex lg:flex-row-reverse">
      <div
        class="xl:ml-18 mx-auto mb-10 max-w-sm flex-shrink-0 overflow-hidden rounded-sm md:max-w-md md:rounded-md lg:ml-14 lg:mb-0 lg:w-[37%] lg:max-w-full"
      >
        <img class="w-full" :src="imgSrc" :alt="imgAlt" />
      </div>
      <div class="pt-2 text-center text-sm sm:text-base md:text-left">
        <h3 class="mb-2 text-2xl font-bold sm:text-4xl">{{ title }}</h3>
        <p class="mb-10 sm:mb-8">{{ text }}</p>
        <div class="grid gap-8 sm:grid-cols-2 xl:pr-28">
          <div v-for="item in textGrid" :key="item.title">
            <h4 class="mb-2 text-xl font-bold">{{ item.title }}</h4>
            <p class="text-xs">{{ item.text }}</p>
          </div>
        </div>
        <div
          v-if="buttons"
          class="mt-8 sm:mt-16 flex flex-col flex-wrap items-center justify-center lg:flex-row lg:justify-start space-x-10"
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
  </section>
</template>

<script setup>
import Button from "@/components/Button.vue";

const props = defineProps({
  title: String,
  text: String,
  textGrid: Array,
  buttons: Array,
  imgSrc: {
    type: String,
    default: "#",
  },
  imgAlt: {
    type: String,
    default: "",
  },
});
</script>
