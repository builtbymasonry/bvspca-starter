<template>
  <form class="m-0 flex xl:inline-flex justify-center" ref="form">
    <div :class="isOpen ? 'hidden' : ''">
      <a
        @click.prevent="setOpen"
        href="#"
        class="hover:text-orange inline-flex items-center text-white transition-colors"
      >
        <span class="text-sm font-bold">Search</span>
        <BaseIcon name="search" class="ml-3 w-3 h-3" />
      </a>
    </div>

    <div
      class="-my-1 flex justify-center items-center relative xl:w-64 border-2 border-white rounded-full"
      :class="!isOpen ? 'hidden' : ''"
    >
      <input
        class="w-full px-3 py-[0.15rem] bg-transparent border-none text-xs text-white placeholder:text-gray-light focus:ring-transparent"
        type="text"
        autocomplete="off"
        spellcheck="false"
        aria-live="polite"
        placeholder="Hello, is it me you’re looking for?"
      />
      <button
        aria-label="search"
        class="mr-2 text-white"
        type="submit"
      >
        <BaseIcon name="search" class="w-3 h-3" />
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import BaseIcon from './BaseIcon.vue';

const isOpen = ref(false);
const form = ref(null);

const setOpen = () => {
  isOpen.value = true;
};

const setClose = () => {
  isOpen.value = false;
};

onMounted(() => {
  document.body.addEventListener("click", setOutsideBarClick);
});

onUnmounted(() => {
  document.body.removeEventListener("click", setOutsideBarClick);
});

const setOutsideBarClick = (e) => {
  if (isOpen && !form.value.contains(e.target)) setClose();
};
</script>
