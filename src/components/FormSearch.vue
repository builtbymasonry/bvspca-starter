<template>
  <div class="relative">
    <input
      class="w-full px-4 md:px-6 py-2 md:py-4 pl-12 md:pl-20 rounded-sm lg:rounded-lg border-none bg-gray-dark text-base md:text-2lg placeholder:text-gray-light focus:ring-orange"
      type="text"
      :placeholder="placeholder"
    >
    <button
      class="absolute top-1/2 left-4 md:left-6 -mt-2 md:-mt-3"
      type="submit"
    >
      <BaseIcon
        name="search"
        class="text-red w-4 md:w-6 h-4 md:h-6"
      />
    </button>
  </div>
</template>

<script setup>
import BaseIcon from '@/components/BaseIcon.vue'

const props = defineProps({
  placeholder: String
});
</script>
