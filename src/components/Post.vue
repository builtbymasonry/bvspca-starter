<template>
  <div class="px-8 sm:px-14 lg:px-24 py-10 sm:py-12 lg:py-16 rounded-sm lg:rounded-lg shadow bg-white text-xs">
    <ButtonLink
      v-if="buttonLink"
      v-bind="buttonLink"
      class="mb-8 sm:mb-12"
    />
    <time class="block mb-2 text-xs sm:text-sm" datetime="2020-02-15">2/15/2020</time>
    <h1 class="mb-5 text-2xl sm:text-3xl md:text-4xl font-bold">{{ title }}</h1>
    <p class="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi. Pellentesque finibus lorem dignissim bibendum pretium. Maecenas efficitur varius feugiat. Vestibulum eu mi ac diam mollis euismod. Etiam pharetra dui sit amet tempus scelerisque. Vivamus et dolor tellus. Donec vulputate, justo vitae lobortis tempus, metu.</p>
    <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu.</p>
    <ul class="mb-6 list-disc pl-3 sm:pl-5 marker:text-xs">
      <li
        v-for="item in list"
        :key="item"
        class="pl-2"
      >
        {{ item }}
      </li>
    </ul>
    <div class="my-8 sm:my-12">
      <img class="mx-auto rounded-sm lg:rounded-lg" src="src/assets/img/content-img-33.jpg" alt="image description" />
    </div>
    <p class="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi. Pellentesque finibus lorem dignissim bibendum pretium. Maecenas efficitur varius feugiat. Vestibulum eu mi ac diam mollis euismod. Etiam pharetra dui sit amet tempus scelerisque. Vivamus et dolor tellus. Donec vulputate, justo vitae lobortis tempus, metu.</p>
    <h2 class="mb-2 text-lg font-bold">Lorem ipsum dolor</h2>
    <p class="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi. Pellentesque finibus lorem dignissim bibendum pretium. Maecenas efficitur varius feugiat. Vestibulum eu mi ac diam mollis euismod. Etiam pharetra dui sit amet tempus scelerisque. Vivamus et dolor tellus. Donec vulputate, justo vitae lobortis tempus, metu.</p>
    <h2 class="mb-2 text-lg font-bold">Lorem ipsum dolor</h2>
    <p class="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi. Pellentesque finibus lorem dignissim bibendum pretium. Maecenas efficitur varius feugiat. Vestibulum eu mi ac diam mollis euismod. Etiam pharetra dui sit amet tempus scelerisque. Vivamus et dolor tellus. Donec vulputate, justo vitae lobortis tempus, metu.</p>
    <h2 class="mb-2 text-lg font-bold">Lorem ipsum dolor</h2>
    <p class="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi. Pellentesque finibus lorem dignissim bibendum pretium. Maecenas efficitur varius feugiat. Vestibulum eu mi ac diam mollis euismod. Etiam pharetra dui sit amet tempus scelerisque. Vivamus et dolor tellus. Donec vulputate, justo vitae lobortis tempus, metu.</p>
    <Author class="mt-12 lg:mt-16 pt-8 sm:pt-10 border-t-2 border-gray-dark" v-bind="author" />
  </div>
</template>

<script setup>
import ButtonLink from '@/components/ButtonLink.vue'
import Author from '@/components/Author.vue'

const props = defineProps({
  title: String,
  list: Object,
  author: Object,
  buttonLink: Object
});
</script>
