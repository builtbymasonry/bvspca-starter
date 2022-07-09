<template>
  <form class="m-0 flex items-center xl:inline-flex" ref="form">
    <div :class="isOpen ? 'hidden' : ''">
      <a
        @click.prevent="setOpen"
        href="#"
        class="hover:text-orange inline-flex items-center text-white transition-colors"
      >
        <span class="text-sm font-bold">Search</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ml-3 h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </a>
    </div>

    <div
      class="relative flex w-full max-w-[85%] items-center justify-center rounded-full border-2 border-white xl:w-64 xl:max-w-full"
      :class="!isOpen ? 'hidden' : ''"
    >
      <input
        class="placeholder:text-gray-light w-full border-none bg-transparent px-5 py-4 text-sm text-white focus:ring-transparent xl:px-3 xl:py-[0.35rem] xl:text-xs"
        type="text"
        autocomplete="off"
        spellcheck="false"
        aria-live="polite"
        placeholder="Hello, is it me you’re looking for?"
      />
      <button
        aria-label="search"
        class="text-orange mr-4 xl:mr-2 xl:text-white"
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 xl:h-3 xl:w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

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
