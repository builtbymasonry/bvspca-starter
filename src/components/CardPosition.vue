<template>
  <div
    class="rounded-sm bg-white p-10 text-center text-xs shadow sm:rounded-lg lg:p-12 lg:text-left xl:p-16"
  >
    <span v-if="subtitle" class="text-gray-light block text-xs font-bold">{{
      subtitle
    }}</span>
    <h3 v-if="title" class="mb-2 text-lg font-bold">{{ title }}</h3>
    <p v-if="text">{{ text }}</p>
    <div
      v-if="buttons"
      class="mt-10 flex flex-col flex-wrap items-center justify-center space-y-8 lg:mt-12 lg:flex-row lg:justify-start lg:space-x-10 lg:space-y-0 xl:space-x-12"
    >
      <div v-for="button in buttons" :key="button.text">
        <Button
          v-if="button.type === 'button'"
          :url="button.url"
          :text="button.text"
        />
        <ButtonLink
          v-if="button.type === 'buttonLink'"
          :url="button.url"
          :text="button.text"
        />
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
