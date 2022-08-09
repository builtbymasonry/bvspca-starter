<template>
  <form class="relative">
    <input
      class="bg-gray-dark md:text-2lg placeholder:text-gray-light focus:ring-orange xsm:text-base w-full rounded-sm border-none px-4 py-2 pl-12 text-sm md:px-6 md:py-4 md:pl-20 lg:rounded-lg"
      type="text"
      :placeholder="placeholder"
    />
    <button
      class="absolute top-1/2 left-4 -mt-2 md:left-6 md:-mt-3"
      type="button"
    >
      <BaseIcon name="search" class="text-red h-4 w-4 md:h-6 md:w-6" />
      <span class="sr-only">Search</span>
    </button>
  </form>
</template>

<script setup>
import BaseIcon from "@/components/BaseIcon.vue";

const props = defineProps({
  placeholder: String
});
</script>
