<template>
  <component
    :is="as"
    :target="as === 'a' ? target : null"
    :href="as === 'a' ? url : null"
    :type="as === 'button' ? type : null"
    :class="[
      classDefault,
      classSize(),
      classVariant(),
      disabled ? 'bg-gray-darker pointer-events-none' : ''
    ]"
  >
    {{ text }}
    <BaseIcon
      v-if="icon"
      :name="icon"
      class="ml-3 mt-0.5 inline-flex h-3 w-3 md:mt-0"
    />
  </component>
</template>

<script setup>
import BaseIcon from "./BaseIcon.vue";

const props = defineProps({
  as: {
    type: String,
    default: "a"
  },
  type: {
    type: String,
    default: null
  },
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
  variant: {
    type: String,
    default: "primary"
  },
  size: {
    type: String,
    default: "normal"
  },
  icon: {
    type: String,
    default: null
  },
  disabled: Boolean
});

const classDefault =
  "inline-flex items-center justify-center whitespace-nowrap border-2 rounded-full font-bold transition-colors";

const classSize = () => ({
  "px-6 md:px-8 py-2 h-[35px] md:h-[50px] text-sm lg:text-lg leading-normal":
    props.size === "normal",
  "px-6 py-2 h-[35px] text-sm leading-normal": props.size === "small"
});

const classVariant = () => ({
  "bg-red border-transparent hover:bg-red-dark text-white shadow":
    props.variant === "primary",
  "bg-orange border-transparent hover:bg-orange-dark text-purple shadow":
    props.variant === "secondary",
  "border-red hover:border-red-dark hover:bg-red-dark text-red hover:text-white":
    props.variant === "outline",
  "border-orange hover:border-orange-dark hover:bg-orange-dark text-white hover:text-purple":
    props.variant === "outlineSecondary"
});
</script>
