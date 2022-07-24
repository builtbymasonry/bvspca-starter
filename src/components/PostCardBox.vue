<template>
  <div class="overflow-hidden rounded-lg bg-white shadow">
    <a
      class="transition-all duration-300 hover:opacity-90"
      :href="url"
    >
      <img class="w-full" v-bind="img" />
    </a>
    <div class="p-8 xl:p-10 text-xs">
      <h3 class="mb-2 text-xl sm:text-2xl font-bold">{{ title }}</h3>
      <p
        class="mb-6 last-of-type:mb-0"
        v-for="item in text"
        :key="item.paragraph"
      >
        {{ item.paragraph }}
      </p>
      <ButtonLink
        class="mt-8"
        v-if="buttonLink"
        :text="buttonLink.text"
        :url="url"
      />
    </div>
  </div>
</template>

<script setup>
import ButtonLink from "./ButtonLink.vue";
import Button from "./Button.vue";
import Socials from "./Socials.vue";

const props = defineProps({
  url: {
    type: String,
    required: true,
    default: "",
  },
  img: Object,
  title: String,
  text: Array,
  buttonLink: {
    type: Object,
  },
});
</script>
