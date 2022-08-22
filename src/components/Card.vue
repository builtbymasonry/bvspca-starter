<template>
  <a
    class="hover:border-orange block h-full rounded-md border-2 border-transparent bg-white px-5 pt-8 pb-11 text-center shadow transition-colors md:px-6 xl:py-12"
    :href="url"
  >
    <div class="align-end min-h-5 md:min-h-7 flex pb-1 md:pb-4">
      <img class="mx-auto scale-75 md:scale-100" v-bind="img" />
    </div>
    <div>
      <h3 class="mb-2 text-xl font-bold">{{ title }}</h3>
      <p class="leading-lg mb-6 text-xs md:mb-0">{{ text }}</p>
      <ButtonLink class="md:hidden" variant="outline" text="Learn more" />
    </div>
  </a>
</template>

<script setup>
import ButtonLink from "@/components/ButtonLink.vue";

const props = defineProps({
  url: {
    type: String,
    required: true
  },
  img: Object,
  title: String,
  text: String
});
</script>
