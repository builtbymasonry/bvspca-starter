<template>
  <div
    class="mx-auto max-w-2xl rounded-lg bg-white p-12 text-center text-xs text-black shadow sm:p-20 sm:text-sm"
  >
    <h3 class="mb-2 text-2xl font-bold">{{ title }}</h3>
    <p>{{ text }}</p>
    <ButtonLink v-if="buttonLink" class="mt-8" v-bind="buttonLink" />
  </div>
</template>

<script setup>
import ButtonLink from "./ButtonLink.vue";

const props = defineProps({
  title: String,
  text: String,
  button: Object,
  buttonLink: Object
});
</script>
