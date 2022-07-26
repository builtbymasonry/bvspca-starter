<template>
  <div class="overflow-hidden rounded-lg bg-white shadow">
    <a class="transition-all duration-300 hover:opacity-90" :href="url">
      <img class="w-full" v-bind="img" />
    </a>
    <div class="p-8 xl:p-10">
      <h3 class="mb-2 text-xl font-bold sm:text-2xl">{{ title }}</h3>
      <div v-if="text" class="text-xs">
        <p v-for="string in text" :key="string" class="mb-6 last-of-type:mb-0">
          {{ string }}
        </p>
      </div>
      <ButtonLink
        v-if="button"
        class="mt-8"
        :text="button.text"
        :url="button.url"
      />
    </div>
  </div>
</template>

<script setup>
import ButtonLink from "./ButtonLink.vue";
import Socials from "./Socials.vue";

const props = defineProps({
  url: {
    type: String,
    required: true,
    default: ""
  },
  img: Object,
  title: String,
  text: Array,
  button: {
    type: Object
  }
});
</script>
