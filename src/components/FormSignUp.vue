<template>
  <form>
    <label class="block mb-4 text-sm font-bold">Sign up for our newsletter</label>

    <div class="flex border-2 border-gray-light rounded-full">
      <input class="w-full px-5 py-2 bg-transparent border-none text-xs text-white placeholder:text-gray-light focus:ring-transparent" type="text" autocomplete="off" spellcheck="false" aria-live="polite" placeholder="Email address">
      <button class="w-24 -m-[2px] flex items-center justify-center rounded-full bg-orange text-purple hover:bg-orange-dark" type="submit">
        <BaseIcon name="sendPlane" class="w-6 h-6 text-purple" />
      </button>
    </div>
  </form>
</template>

<script setup>
  import BaseIcon from './BaseIcon.vue';
</script>
