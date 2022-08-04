<template>
  <div class="flex items-center">
    <a
      href="#"
      class="text-orange hover:text-orange-dark flex h-10 w-12 items-center justify-center rounded-[10px] bg-white shadow transition-colors"
    >
      <BaseIcon name="arrowLeft" />
    </a>

    <ul
      class="mx-6 flex items-center justify-center text-sm font-bold sm:mx-12 sm:text-lg"
    >
      <li v-for="item in list" :key="item.number">
        <a
          v-if="item.number"
          :href="item.url"
          class="hover:bg-purple-light flex h-6 w-6 items-center justify-center rounded-full transition-colors hover:text-white sm:h-7 sm:w-7"
          :class="[
            item.current ? 'bg-purple-light pointer-events-none text-white' : ''
          ]"
        >
          {{ item.number }}
        </a>
        <span
          v-if="item.dots"
          class="block w-6 cursor-pointer text-center sm:w-7"
          tabindex="0"
          role="button"
          >…</span
        >
      </li>
    </ul>

    <a
      href="#"
      class="text-orange hover:text-orange-dark flex h-10 w-12 items-center justify-center rounded-[10px] bg-white shadow transition-colors"
    >
      <BaseIcon name="arrowRight" />
    </a>
  </div>
</template>

<script setup>
import BaseIcon from "./BaseIcon.vue";

const list = [
  { number: "1", url: "#", current: true },
  { number: "2", url: "#" },
  { number: "3", url: "#" },
  { number: "4", url: "#" },
  { number: "5", url: "#" },
  { dots: true },
  { number: "15", url: "#" }
];
</script>
