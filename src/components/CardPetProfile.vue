<template>
  <div>
    <a
      :href="url"
      class="mb-5 block overflow-hidden rounded-sm shadow sm:mb-8 md:rounded-lg"
    >
      <img
        class="w-full transition-all duration-300 hover:scale-[102%]"
        v-bind="img"
      />
    </a>
    <h3 class="mb-4 text-xl font-bold sm:text-2xl">{{ title }}</h3>
    <dl v-if="description" class="space-y-1">
      <div v-for="item in description" :key="item.title" class="flex text-sm">
        <dt class="mr-1 w-[75px] flex-shrink-0 font-bold">{{ item.title }}</dt>
        <dd>{{ item.value }}</dd>
      </div>
    </dl>
    <Button class="mt-8" text="Learn more" :url="url" />
  </div>
</template>

<script setup>
import Button from "./Button.vue";

const props = defineProps({
  url: {
    type: String,
    required: true,
    default: ""
  },
  img: Object,
  title: String,
  description: Array
});
</script>
