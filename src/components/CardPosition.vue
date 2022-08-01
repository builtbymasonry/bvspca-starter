<template>
  <div class="p-10 lg:p-12 xl:p-16 text-xs text-center lg:text-left shadow rounded-sm sm:rounded-lg bg-white">
    <span v-if="subtitle" class="block text-xs font-bold text-gray-light">{{ subtitle }}</span>
    <h3 v-if="title" class="mb-2 text-lg font-bold">{{ title }}</h3>
    <p v-if="text">{{ text }}</p>
    <div
      v-if="buttons"
      class="mt-10 lg:mt-12 flex flex-wrap items-center justify-center lg:justify-start lg:space-x-10 xl:space-x-12 space-y-8 lg:space-y-0"
    >
      <div
        v-for="button in buttons"
        :key="button.text"
      >
        <Button v-if="button.type === 'button'" v-bind="button" />
        <ButtonLink v-if="button.type === 'buttonLink'" v-bind="button" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue";
import ButtonLink from "@/components/ButtonLink.vue";

const props = defineProps({
  title: String,
  subtitle: String,
  text: String,
  buttons: Array
});
</script>
