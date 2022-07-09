<template>
  <a
    :target="target"
    :href="url"
    class="inline-flex items-center whitespace-nowrap text-lg font-bold group hover:text-orange transition-all"
    >
    {{ text }}
    <BaseIcon name="arrowRight" class="inline-flex mx-3 mt-1 w-3 h-3 text-orange" />
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
        default: "Button Link"
      }
    },
    components: {
      BaseIcon
    }
  };
</script>
