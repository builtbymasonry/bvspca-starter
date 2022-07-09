<template>
  <ul class="flex items-center">
    <li
      v-for="item in socials"
      :key="item.url"
      class="inline-flex items-center"
    >
      <a
        :href="item.url"
        target="_blank"
        class="transition-all"
        :class="classList()"
      >
        <BaseIcon
          :name="item.icon"
          :class="[
            iconSize,
            iconShadow ? 'shadow': ''
          ]"
        />
      </a>
    </li>
  </ul>
</template>

<script setup>
import { computed } from "vue";
import BaseIcon from "@/components/BaseIcon.vue";

const props = defineProps({
  socials: {
    type: Array,
    required: true
  },
  variant: {
    type: String,
    default: "orange"
  },
  iconSize: {
    type: String,
    default: 'w-5 h-5'
  },
  iconShadow: {
    type: Boolean,
    default: false
  }
});

const classList = () => {
  return [
    {
      "text-orange hover:text-white": props.variant === "orange"
    },
    {
      "text-white hover:text-orange": props.variant === "white"
    }
  ];
};
</script>
