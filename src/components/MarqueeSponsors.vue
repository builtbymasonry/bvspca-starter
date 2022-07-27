<template>
  <div class="py-8">
    <!-- <Vue3Marquee :duration="30" :pauseOnHover="true" :clone="true"> -->
    <div
      ref="grid"
      class="grid h-[760px] grid-rows-2 bg-pink-100 py-20"
      :class="[gridColumnClass()]"
      :style="{ width: columnsCount * COLUMN_SIZE + 'px' }"
    >
      <div
        v-for="(slide, i) in slides"
        v-html="generateBubble(slide)"
        class="flex p-1"
        :class="randomPosClass(getRandomNum())"
        :key="i"
      ></div>
    </div>
    <!-- </Vue3Marquee> -->
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";

const grid = ref(null);
const slidesCount = ref(props.slides.length);
const columnsCount = ref(props.slides.length / 2);

const SIZES = ["bubble-sm", "bubble-md", "bubble-lg"];
const COLUMN_SIZE = 300;

const getRandomNum = () => Math.floor(Math.random() * (9 - 1 + 1) + 1);

const randomPosClass = (num) => {
  switch (num) {
    case 1:
      return "items-start justify-start";
      break;
    case 2:
      return "items-start justify-center";
      break;
    case 3:
      return "items-start justify-end";
      break;
    case 4:
      return "items-center justify-start";
      break;
    case 5:
      return "items-center justify-center";
      break;
    case 6:
      return "items-center justify-end";
      break;
    case 7:
      return "items-end justify-start";
      break;
    case 8:
      return "items-end justify-center";
      break;
    case 9:
      return "items-end justify-end";
      break;
    default:
      break;
  }
};

const gridColumnClass = () => "grid-cols-" + columnsCount.value;

const generateBubble = (slide) => {
  const size = SIZES[Math.floor(Math.random() * SIZES.length)];

  const { img, url } = slide;

  return `<a href="${url}" class="inline-flex items-center justify-center bg-white shadow rounded-full ${size}">
  <img src="${img.src}" class="max-w-full" alt="${img.alt}"/>
  </a>`;
};

// onMounted(() => {
//   grid.value.style.width = columnsCount.value * COLUMN_SIZE + "px";
// });

const props = defineProps({
  slides: {
    type: Array,
    required: true
  }
});
</script>

<style>
.bubble-sm {
  width: 120px;
  height: 120px;
  padding: 20px;
}
.bubble-md {
  width: 175px;
  height: 175px;
  padding: 40px;
}
.bubble-lg {
  width: 215px;
  height: 215px;
  padding: 40px;
}
</style>
