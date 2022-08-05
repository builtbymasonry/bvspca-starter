<template>
  <div class="px-8 xl:px-12 py-16 xl:py-20 flex flex-col rounded-sm md:rounded-lg bg-white text-xs lg:text-sm text-black text-center">
    <div v-if="img" class="sm:h-[90px] -mt-5 mb-8 flex items-end justify-center">
      <img v-bind="img" />
    </div>
    <h3 v-if="title" class="mb-1 text-xl lg:text-2xl font-bold">{{title}}</h3>
    <h4 v-if="subtitle" class="mb-8 text-sm lg:text-base">{{subtitle}}</h4>
    <List
      class="mb-10 text-left whitespace-pre-line"
      v-if="customList"
      v-bind="customList"
    />
    <div class="-mx-2 xl:-mx-4 mt-auto">
      <Button
        class="w-full"
        v-if="button"
        v-bind="button"
      />
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue"
import List from "@/components/List.vue"

const props = defineProps({
  img: Object,
  title: String,
  subtitle: String,
  customList: Object,
  button: Object
});
</script>
