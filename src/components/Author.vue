<template>
  <div class="flex items-center">
    <div class="w-16 sm:w-20 md:w-[90px] h-16 sm:h-20 md:h-[90px] shrink-0 overflow-hidden rounded-full mr-5 md:mr-8">
      <img class="w-full h-full" v-bind="img" />
    </div>
    <div>
      <h3 class="text-lg md:text-xl font-bold">{{ name }}</h3>
      <p class="text-xs font-bold text-gray-light">{{ position }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  position: String,
  img: Object
});
</script>
