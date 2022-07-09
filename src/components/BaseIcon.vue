<template>
  <svg
    :class="$attrs.class || 'inline-flex w-5 h-5'"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    v-html="icons[props.name]"
    aria-hidden="true"
  >
  </svg>
</template>

<script setup>
  import icons from '../icons'

  const props = defineProps({
    name: {
      type: String,
      required: true
    }
  })
</script>
