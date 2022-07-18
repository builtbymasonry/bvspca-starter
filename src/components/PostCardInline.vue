<template>
  <div>
    <div class="flex flex-col md:flex-row overflow-hidden rounded-lg shadow bg-white">
      <div class="w-full md:w-1/3 h-80 md:h-auto flex-shrink-0 relative">
        <img class="w-full h-full absolute object-cover object-top" :src="imgSrc" :alt="imgAlt" />
      </div>
      <div class="p-10 lg:p-20 text-xs">
        <h2 class="mb-1 text-xl font-bold">{{title}}</h2>
        <h3 class="mb-4 text-xs font-bold text-gray-light">{{subtitle}}</h3>
        <p>{{text}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  text: String,
  imgSrc: {
    type: String,
    default: "#",
  },
  imgAlt: {
    type: String,
    default: "",
  },
  reverse: {
    type: Boolean,
    default: false
  }
});
</script>
