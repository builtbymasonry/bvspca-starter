<template>
  <a
    class="hover:border-orange rounded-md border-2 border-transparent bg-white px-5 pt-8 pb-11 text-center shadow md:px-6 xl:py-12"
    href="#0"
  >
    <div class="align-end min-h-5 md:min-h-7 flex pb-1 md:pb-4">
      <img class="mx-auto scale-75 md:scale-100" :src="imgSrc" :alt="imgAlt" />
    </div>
    <div>
      <h3 class="mb-2 text-xl font-bold">{{ title }}</h3>
      <p class="leading-lg mb-6 text-xs md:mb-0">{{ text }}</p>
      <ButtonLink class="md:hidden" variant="outline" text="Learn more" />
    </div>
  </a>
</template>

<script setup>
import ButtonLink from "./ButtonLink.vue";

const props = defineProps({
  imgSrc: {
    type: String,
    default: ""
  },
  imgAlt: {
    type: String,
    default: ""
  },
  title: String,
  text: String
});
</script>
