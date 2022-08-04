<template>
    <div class="p-12 px-8 sm:p-6 md:p-10 lg:p-14 xl:p-20 rounded-sm md:rounded-lg bg-white text-xs lg:text-sm text-black">
      <h3 class="mb-2 sm:mb-4 text-xl sm:text-lg lg:text-2xl font-bold">{{title}}</h3>
      <h4 class="mb-2 sm:mb-4 text-sm lg:text-lg font-bold">{{subtitle}}</h4>
      <ul class="list-disc space-y-2 pl-5 marker:text-xs">
        <li
          class="pl-2"
          v-for="item in list"
          :key="item"
        >
          {{item}}
        </li>
      </ul>
      <div
        v-if="buttons"
        class="mt-10 sm:mt-12 md:px-5 flex flex-col items-center space-y-8 sm:space-y-12"
      >
        <Button
          class="w-full"
          v-for="button in buttons"
          :key="button.text"
          v-bind="button"
        />
      </div>
    </div>
</template>

<script setup>
import Button from "@/components/Button.vue";

const props = defineProps({
  title: String,
  subtitle: String,
  list: Array,
  buttons: Array
});
</script>
