<template>
  <div>
    <Vue3Marquee :duration="82" :pauseOnHover="true" :clone="true">
      <div class="relative block h-[660px] w-[1620px]">
        <a
          v-for="(slide, i) in initSlides"
          :href="slide.url"
          :key="i"
          target="_blank"
          :class="slideClass(i)"
          class="absolute flex items-center justify-center rounded-full p-4 shadow transition-transform duration-300 hover:scale-105"
        >
          <img v-bind="slide.img" class="max-w-full" />
        </a>
      </div>
    </Vue3Marquee>
  </div>
</template>
<script setup>
import { onBeforeMount, ref } from "vue";

import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";

const initSlides = ref([]);
const MAX_SLIDES = 15; // Max amount of slides to be displayed, rest will be removed

const slideClass = (index) => {
  {
    switch (index) {
      case 0:
        return "top-[30px] left-[30px] w-[175px] h-[175px]";
        break;

      case 1:
        return "top-[232px] left-[142px] w-[120px] h-[120px]";
        break;

      case 2:
        return "top-[420px] left-[38px] w-[215px] h-[215px]";
        break;
      case 3:
        return "top-[34px] left-[357px] w-[215px] h-[215px]";
        break;

      case 4:
        return "top-[319px] left-[318px] w-[175px] h-[175px]";
        break;

      case 5:
        return "top-[248px] left-[644px] w-[120px] h-[120px]";
        break;

      case 6:
        return "top-[463px] left-[587px] w-[175px] h-[175px]";
        break;

      case 7:
        return "top-[60px] left-[794px] w-[175px] h-[175px]";
        break;
      case 8:
        return "top-[303px] left-[846px] w-[215px] h-[215px]";
        break;
      case 9:
        return "top-[116px] left-[1071px] w-[120px] h-[120px]";
        break;

      case 10:
        return "top-[296px] left-[1175px] w-[175px] h-[175px]";
        break;

      case 11:
        return "top-[523px] left-[1130px] w-[120px] h-[120px]";
        break;

      case 12:
        return "top-[30px] left-[1331px] w-[215px] h-[215px]";
        break;

      case 13:
        return "top-[450px] left-[1410px] w-[120px] h-[120px]";
        break;

      case 14:
        return "top-[284px] left-[1476px] w-[120px] h-[120px]";
        break;

      default:
        return;
        break;
    }
  }
};

onBeforeMount(() => {
  // If received slides amount in props is less than MAX_SLIDES it will add duplicates to initSlides if it's more - will trim to MAX_SLIDES amount
  if (props.slides.length < MAX_SLIDES) {
    const missingCoeff = Math.ceil(MAX_SLIDES / props.slides.length);
    let tempSlides = [];

    for (let i = 1; i <= missingCoeff; i++) {
      tempSlides.push(...props.slides);
    }

    initSlides.value = tempSlides.slice(0, MAX_SLIDES);
  } else {
    initSlides.value = props.slides.slice(0, MAX_SLIDES);
  }
});

const props = defineProps({
  slides: {
    type: Array,
    required: true
  }
});
</script>
