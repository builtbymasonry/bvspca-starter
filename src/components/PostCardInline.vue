<template>
  <div
    class="flex flex-col overflow-hidden rounded-lg bg-white shadow md:flex-row"
  >
    <div class="relative h-80 w-full flex-shrink-0 md:h-auto md:w-1/3">
      <img
        class="absolute h-full w-full object-cover object-top"
        v-bind="img"
      />
    </div>
    <div class="p-10 text-xs lg:p-20">
      <div class="mb-4">
        <h2
          v-if="title"
          class="text-xl font-bold"
          :class="titleExtra"
        >
          {{ title }}
        </h2>
        <h3 v-if="subtitle" class="mt-1 text-gray-light text-xs font-bold">{{ subtitle }}</h3>
      </div>
      <p>{{ text }}</p>
      <ButtonLink
        v-if="buttonLink"
        class="mt-8"
        :text="buttonLink.text"
        :url="buttonLink.url"
      />
    </div>
  </div>
</template>

<script setup>
import ButtonLink from "./ButtonLink.vue";

const props = defineProps({
  title: String,
  titleAlt: String,
  subtitle: String,
  text: String,
  img: Object,
  buttonLink: {
    type: Object
  },
  reverse: {
    type: Boolean,
    default: false
  },
  titleExtra: String
});
</script>
