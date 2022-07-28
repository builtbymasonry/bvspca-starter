<template>
  <div
    class="flex flex-col overflow-hidden rounded-sm sm:rounded-lg bg-white shadow lg:flex-row"
  >
    <div class="relative h-64 w-full flex-shrink-0 lg:h-auto lg:w-1/3">
      <img
        class="absolute h-full w-full object-cover object-top"
        v-bind="img"
      />
    </div>
    <div class="py-8 px-10 lg:py-10 lg:px-14 w-full text-sm">
      <h2
        v-if="title"
        class="text-2xl font-bold"
      >
        {{ title }}
      </h2>
      <h3 v-if="subtitle" class="mb-1 text-gray-light font-bold">{{ subtitle }}</h3>
      <div v-for="(item, i) in links" :key="i">
        <a
          class="inline-flex items-center font-bold text-red hover:text-red-dark"
          :href="`${item.type ? item.type + ':' : ''}${
            item.url
          }`"
        >
          <BaseIcon
            :name= "item.type === 'mailto' ? 'envelope' : 'phone'"
            class="mr-2 w-3 h-3"
          />
          {{ item.url }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseIcon from "@/components/BaseIcon.vue";

const props = defineProps({
  title: String,
  subtitle: String,
  img: Object,
  links: Object,
});
</script>
