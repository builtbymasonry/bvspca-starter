<template>
  <div>
    <a :href="url" class="mb-5 sm:mb-8 block overflow-hidden rounded-sm md:rounded-lg shadow">
      <img
        class="w-full transition-all duration-300 hover:scale-[102%]"
        v-bind="img"
      />
    </a>
    <h3 class="mb-4 text-xl sm:text-2xl font-bold">{{ title }}</h3>
    <dl
      v-if="list"
      class="space-y-1"
    >
      <div
        v-for="row in list"
        :key="row.title"
        class="flex text-sm"
      >
        <dt class="w-[75px] mr-1 flex-shrink-0 font-bold">{{row.title}}</dt>
        <dd>{{row.value}}</dd>
      </div>
    </dl>
    <Button v-if="button" class="mt-8" v-bind="button" :url="url" />
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
  list: Array,
  button: {
    type: Object
  },
});
</script>
