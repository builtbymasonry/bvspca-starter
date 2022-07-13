<template>
  <form>
    <label class="mb-4 block text-sm font-bold"
      >Sign up for our newsletter</label
    >

    <div class="border-gray-light flex rounded-full border-2">
      <input
        class="placeholder:text-gray-light w-full border-none bg-transparent px-5 py-2 text-xs text-white focus:ring-transparent"
        type="text"
        autocomplete="off"
        spellcheck="false"
        aria-live="polite"
        placeholder="Email address"
      />
      <button
        class="bg-orange text-purple hover:bg-orange-dark -m-[2px] flex w-24 items-center justify-center rounded-full"
        type="submit"
      >
        <span class="sr-only">Send</span>
        <BaseIcon name="sendPlane" class="text-purple h-6 w-6" />
      </button>
    </div>
  </form>
</template>

<script setup>
import BaseIcon from "./BaseIcon.vue";
</script>
