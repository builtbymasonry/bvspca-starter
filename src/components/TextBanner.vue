<template>
  <div class="py-14 lg:py-28">
    <div class="mx-auto max-w-7xl px-4 text-center text-xs md:text-sm">
      <h2 class="mb-2 text-2xl font-bold sm:text-4xl md:mb-4 md:text-5xl">
        {{ title }}
      </h2>
      <p>{{ text }}</p>
      <div
        v-if="buttons"
        class="mt-10 flex flex-col items-center justify-center space-y-10 md:flex-row md:space-y-0 md:space-x-5 lg:space-x-10"
      >
        <Button
          v-for="button in buttons"
          :key="button.text"
          :variant="button.variant || 'primary'"
          :text="button.text"
          :url="button.url"
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
  buttons: Array
});
</script>
