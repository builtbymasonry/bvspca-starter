<template>
  <Vue3Marquee :duration="200" :pauseOnHover="true" :clone="true">
    <ul class="flex items-center">
      <li v-for="item in slides" :key="item.url" class="max-w-[240px] px-10">
        <a
          :href="item.url"
          target="_blank"
          class="transition-opacity hover:opacity-80"
        >
          <img :src="item.logo" alt="" />
        </a>
      </li>
    </ul>
  </Vue3Marquee>
</template>

<script>
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";

export default {
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  components: {
    Vue3Marquee
  }
};
</script>
