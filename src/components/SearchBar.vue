<template>
  <form class="m-0 inline-flex">
    <div class="flex items-center">
      <a href="#" class="inline-flex items-center text-white hover:text-orange">
        <span class="text-sm font-bold">Search</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </a>
    </div>

    <div class="sm:hidden flex justify-center items-center relative w-64 border-2 border-white rounded-full">
      <input class="w-full px-3 py-[0.35rem] bg-transparent border-none text-xs text-white placeholder:text-gray-light focus:ring-transparent" type="search" autocomplete="off" spellcheck="false" aria-live="polite" placeholder="Hello, is it me you’re looking for?">
      <button class="px-2 py-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  </form>
</template>
