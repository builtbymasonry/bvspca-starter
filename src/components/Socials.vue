<template>
  <ul class="flex items-center">
    <li v-for="item in socials" :key="item.url">
      <a
        :href="item.url"
        target="_blank"
      >
        <BaseIcon name="facebook" class="w-6 h-6" />
      </a>
    </li>
  </ul>
</template>

<script setup>
  import BaseIcon from './BaseIcon.vue';

  const props = defineProps({
    socials: {
      type: Array,
      required: true
    },
  });
</script>
