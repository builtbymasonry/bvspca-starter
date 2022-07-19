<template>
  <div>
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
        <h2 class="mb-1 text-xl font-bold">{{ title }}</h2>
        <h3 class="text-gray-light mb-4 text-xs font-bold">{{ subtitle }}</h3>
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  text: String,
  img: Object,
  reverse: {
    type: Boolean,
    default: false
  }
});
</script>
