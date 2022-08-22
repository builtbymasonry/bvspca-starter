<template>
  <div
    class="rounded-sm bg-white px-8 py-10 shadow sm:px-14 sm:py-12 lg:rounded-lg lg:px-24 lg:py-16"
  >
    <div class="text- mb-8 sm:mb-12">
      <ButtonLink
        url="/news-events"
        text="Back to all"
        reverse
        class="!text-base sm:!text-lg"
      />
    </div>
    <time
      v-if="timestamp"
      :datetime="timestamp"
      v-html="new Date(timestamp).toLocaleDateString('en-US')"
      class="mb-4 block text-xs sm:text-sm"
    ></time>
    <h1 class="xsm:text-2xl mb-4 text-xl font-bold sm:text-3xl md:text-4xl">
      {{ title }}
    </h1>
    <div v-html="content" class="text-xs"></div>
    <Author
      v-if="author"
      v-bind="author"
      class="border-gray-dark mt-12 border-t-2 pt-8 sm:pt-10 lg:mt-16"
    />
  </div>
</template>

<script setup>
import ButtonLink from "@/components/ButtonLink.vue";
import Author from "@/components/Author.vue";

const props = defineProps({
  timestamp: String,
  title: String,
  content: String,
  author: Object
});
</script>
