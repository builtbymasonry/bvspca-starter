<template>
  <div class="overflow-hidden rounded-sm lg:rounded-lg shadow bg-white">
    <div class="w-full relative h-44">
      <img v-bind="img" class="absolute w-full h-full object-cover" />
    </div>

    <div class="p-8 pb-12 text-sm text-center">
      <h3 v-if="title" class="text-xl font-bold">{{ title }}</h3>
      <address v-if="address" class="mb-8 not-italic whitespace-pre-line">{{ address }}</address>
      <Button v-if="button" v-bind="button" />
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue"

const props = defineProps({
  img: Object,
  title: String,
  address: String,
  button: Object
});
</script>
