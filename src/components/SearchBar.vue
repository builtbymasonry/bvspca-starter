<template>
  <form class="m-0 flex xl:inline-flex justify-center">
    <div class="hidden first-letter:flex items-center">
      <a href="#" class="inline-flex items-center text-white hover:text-orange">
        <span class="text-sm font-bold">Search</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </a>
    </div>

    <div class="flex justify-center items-center relative w-full xl:w-64 max-w-[85%] xl:max-w-full border-2 border-white rounded-full">
      <input class="w-full px-5 xl:px-3 py-3 xl:py-[0.15rem] bg-transparent border-none text-sm xl:text-xs text-white placeholder:text-gray-light focus:ring-transparent" type="text" autocomplete="off" spellcheck="false" aria-live="polite" placeholder="Hello, is it me you’re looking for?">
      <button class="mr-4 xl:mr-3 text-orange xl:text-white" type="submit">
        <BaseIcon name="search" class="w-5 h-5 xl:w-3 xl:h-3" />
      </button>
    </div>
  </form>
</template>

<script setup>
  import BaseIcon from './BaseIcon.vue';
</script>
