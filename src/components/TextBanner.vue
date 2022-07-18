<template>
  <div class="py-14 lg:py-28">
    <div class="mx-auto max-w-7xl px-4 text-xs md:text-sm text-center">
      <h2 class="mb-2 md:mb-4 text-2xl sm:text-4xl md:text-5xl font-bold">{{title}}</h2>
      <p>{{text}}</p>
      <div
        v-if="buttons"
        class="flex flex-col md:flex-row items-center justify-center mt-10 space-y-10 md:space-y-0 md:space-x-5 lg:space-x-10"
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
</template>

<script setup>
import Button from "@/components/Button.vue";

const props = defineProps({
  title: String,
  text: String,
  buttons: Array
});
</script>
