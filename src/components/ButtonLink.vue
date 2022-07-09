<template>
  <a
    :target="target"
    :href="url"
    class="inline-flex items-center whitespace-nowrap text-lg font-bold group hover:text-orange transition-all"
    :class="reverse ? 'flex-row-reverse' : ''"
  >
    {{ text }}
    <BaseIcon
      name="arrowRight"
      :class="[
        reverse ? 'mr-3 rotate-180' : 'ml-3',
        'inline-flex mt-1 w-3 h-3 text-orange'
      ]"
    />
  </a>
</template>

<script setup>
  import BaseIcon from './BaseIcon.vue';
  const props = defineProps({
    target: {
      type: String,
      default: "_self"
    },
    url: {
      type: String,
      default: "#"
    },
    text: {
      type: String,
      default: "Button"
    },
    reverse: {
      type: Boolean,
      default: false
    }
  });
</script>
