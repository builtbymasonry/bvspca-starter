<template>
  <div class="flex items-center justify-center">
    <a href="#" class="w-12 h-10 flex items-center justify-center bg-white rounded-[10px] shadow text-orange hover:text-orange-dark transition-colors">
      <BaseIcon name="arrowLeft" />
    </a>

    <ul class="flex items-center justify-center mx-6 sm:mx-12 text-sm sm:text-lg font-bold">
      <li
        v-for="item in list"
        :key="item.number"
      >
        <a
          v-if="item.number"
          :href="item.url"
          class="w-6 sm:w-7 h-6 sm:h-7 flex items-center justify-center rounded-full transition-colors hover:bg-purple-light hover:text-white"
          :class="[
            item.current ? 'bg-purple-light text-white pointer-events-none' : ''
          ]"
        >
         {{item.number}}
        </a>
        <span v-if="item.dots" class="block text-center w-6 sm:w-7 sm:ml-1">{{item.dots}}</span>
      </li>
    </ul>

    <a href="#" class="w-12 h-10 flex items-center justify-center bg-white rounded-[10px] shadow text-orange hover:text-orange-dark transition-colors">
      <BaseIcon name="arrowRight" />
    </a>
  </div>
</template>

<script setup>
import BaseIcon from "./BaseIcon.vue";

const list = [
  { number: "1", url: "#", current: true},
  { number: "2", url: "#"},
  { number: "3", url: "#"},
  { number: "4", url: "#"},
  { number: "5", url: "#"},
  { dots: "..."},
  { number: "15", url: "#"},
];
</script>
