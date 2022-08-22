<template>
  <div
    class="flex w-full flex-col rounded-sm bg-white px-8 py-16 text-center text-xs text-black md:rounded-lg lg:text-sm xl:px-12 xl:py-20"
  >
    <div
      v-if="img"
      class="-mt-5 mb-8 flex items-end justify-center sm:h-[90px]"
    >
      <img v-bind="img" />
    </div>
    <h3 v-if="title" class="mb-1 text-xl font-bold lg:text-2xl">{{ title }}</h3>
    <h4 v-if="subtitle" class="mb-8 text-sm lg:text-base">{{ subtitle }}</h4>
    <List
      class="mb-10 whitespace-pre-line text-left"
      v-if="customList"
      v-bind="customList"
    />
    <div class="-mx-2 mt-auto xl:-mx-4">
      <Button class="w-full" v-if="button" v-bind="button" />
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue";
import List from "@/components/List.vue";

const props = defineProps({
  img: Object,
  title: String,
  subtitle: String,
  customList: Object,
  button: Object
});
</script>
