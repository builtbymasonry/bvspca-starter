<template>
  <a
    :target="target"
    :href="url"
    class="hover:text-orange group inline-flex items-center whitespace-nowrap text-lg font-bold leading-normal transition-all"
    :class="reverse ? 'flex-row-reverse' : ''"
  >
    {{ text }}
    <BaseIcon
      :name="icon"
      :class="[
        iconStyle,
        reverse ? 'mr-3 rotate-180' : 'ml-3 mt-0.5',
        'text-orange inline-flex h-3 w-3',
      ]"
    />
  </a>
</template>

<script setup>
import BaseIcon from "./BaseIcon.vue";

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
  },
  icon: {
    type: String,
    default: "arrowRight"
  },
  iconStyle: String
});
</script>
