<template>
  <a
    :target="target"
    :href="url"
    class="hover:text-orange group inline-flex items-center justify-center whitespace-nowrap text-lg font-bold transition-all"
    :class="reverse ? 'flex-row-reverse' : ''"
  >
    {{ text }}
    <svg
      :class="reverse ? 'mr-3 rotate-180' : 'ml-3'"
      class="fill-orange group-hover:fill-orange mt-0.5 inline-flex transition-all"
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
  text: {
    type: String,
    default: "Button"
  },
  reverse: {
    type: Boolean,
    default: false
  }
});
</script>
