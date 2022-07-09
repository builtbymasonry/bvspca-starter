<template>
  <a
    :target="target"
    :href="url"
    :class="[btnClass, btnSize, btnVariants]"
    :variant="variant"
    :size="size"
    :arrow="arrow"
  >
    {{ text }}
    <BaseIcon
      v-if="arrow"
      name="arrowRight"
      class="inline-flex ml-3 mt-1 w-3 h-3"
    />
  </a>
</template>

<script>
import BaseIcon from './BaseIcon.vue';

export default {
  props: {
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
    arrow: {
      type: Boolean,
      default: false
    }
  },
  components: {
    BaseIcon
  },
  computed: {
    btnClass() {
      return {
        "inline-flex items-center justify-center whitespace-nowrap border-2 rounded-full font-bold transition-all": true
      };
    },

    btnSize() {
      return {
        "px-6 md:px-8 py-2 h-[35px] md:h-[50px] text-sm lg:text-lg leading-normal":
          this.size === "normal",
        "px-6 py-2 h-[35px] text-sm leading-normal": this.size === "small"
      };
    },

    btnVariants() {
      return {
        "bg-red border-transparent hover:bg-red-dark text-white shadow":
          this.variant === "primary",
        "bg-orange border-transparent hover:bg-orange-dark text-purple shadow":
          this.variant === "secondary",
        "border-red hover:border-red-dark hover:bg-red-dark text-red hover:text-white":
          this.variant === "outline",
        "border-orange hover:border-orange-dark hover:bg-orange-dark text-white hover:text-purple":
        this.variant === "outlineSecondary"
      };
    }
  }
};
</script>
