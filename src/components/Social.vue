<template>
    <a
    :target="target"
    :href="url"
    >
    {{ text }}
  </a>
</template>

<script setup>
const props = defineProps({
  target: {
    type: String,
    default: "_self"
  },
  url: {
    type: String,
    default: "#"
  },
  text: String,
})
</script>
