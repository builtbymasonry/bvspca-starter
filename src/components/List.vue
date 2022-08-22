<template>
  <ul class="space-y-5">
    <li
      v-for="item in data"
      :key="item"
      class="pl-10 relative break-inside-avoid"
    >
      <BaseIcon
        name="check"
        class="absolute top-0 left-0 w-6 h-6"
        :class="bulletClass"
      />
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
import BaseIcon from "@/components/BaseIcon.vue";

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  bulletClass: {
    type: String,
    default: 'text-orange'
  }
});
</script>
