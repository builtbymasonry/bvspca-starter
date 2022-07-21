<template>
  <ul class="space-y-5">
    <li
      v-for="item in data"
      :key="item.text"
      v-bind="item"
      class="pl-10 relative break-inside-avoid"
    >
      <BaseIcon
        name="check"
        class="absolute top-0 left-0 w-6 h-6"
        :class="iconColor"
      />
      {{ item.text }}
    </li>
  </ul>
</template>

<script setup>
import BaseIcon from "@/components/BaseIcon.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  iconColor: {
    type: String,
    default: 'text-orange'
  }
});
</script>
