<template>
  <a
    :target="target"
    :href="url"
    :class="[btnClass, btnVariants]"
    :variant="variant"
    :arrow="arrow"
    >
    {{ text }}
    <svg v-if="arrow" class="inline-flex ml-2 fill-current transition-all" width="13" height="10" viewBox="0 0 13 10">
      <path d="M5.374.147C4.741-.18 4.457.06 4.37.65v1.79H1.157C.35 2.462 0 2.877 0 3.576v3.057c0 .633.393.982 1 1.026h3.392V9.23c0 .611.262.917.96.699C7.711 8.51 10 7.07 12.318 5.519c.35-.35.284-.633-.022-.917C10.07 3.052 7.754 1.589 5.374.147z"/>
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
          "inline-flex items-center justify-center px-5 py-2 whitespace-nowrap border-2 rounded-full shadow text-sm lg:text-lg font-bold text-white transition-all": true
        }
      },

      btnVariants() {
        return {
          "bg-red border-transparent hover:bg-red-dark": this.variant === "primary",
          "bg-orange border-transparent text-purple-200 hover:bg-orange-dark": this.variant === "secondary",
          "border-red text-red hover:border-red-dark hover:bg-red-dark hover:text-white": this.variant === "outline"
        }
      }
    }
  };
</script>
