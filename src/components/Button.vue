<template>
  <a
    :target="target"
    :href="url"
    :class="[btnClass, btnSize, btnVariants]"
    :variant="variant"
    :size="size"
    :arrow="arrow"
    :shadow="shadow"
  >
    {{ text }}
    <svg
      v-if="arrow"
      class="mx-2 inline-flex fill-current transition-all"
      width="13"
      height="10"
      viewBox="0 0 13 10"
    >
      <path
        d="M5.374.147C4.741-.18 4.457.06 4.37.65v1.79H1.157C.35 2.462 0 2.877 0 3.576v3.057c0 .633.393.982 1 1.026h3.392V9.23c0 .611.262.917.96.699C7.711 8.51 10 7.07 12.318 5.519c.35-.35.284-.633-.022-.917C10.07 3.052 7.754 1.589 5.374.147z"
      />
    </svg>
  </a>
</template>

<script>
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
  computed: {
    btnClass() {
      return {
        "inline-flex items-center justify-center whitespace-nowrap border-2 rounded-full shadow font-bold transition-all": true
      };
    },

    btnSize() {
      return {
        "px-6 md:px-8 py-2 h-9 md:h-12 text-sm lg:text-lg leading-normal":
          this.size === "normal",
        "px-6 py-2 h-9 text-sm leading-normal": this.size === "small"
      };
    },

    btnVariants() {
      return {
        "bg-red border-transparent hover:bg-red-dark text-white":
          this.variant === "primary",
        "bg-orange border-transparent hover:bg-orange-dark text-purple":
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
