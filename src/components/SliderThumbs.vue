<template>
  <div class="mb-[20px]">
    <Swiper
      :thumbs="{ swiper: thumbsSwiper }"
      :pagination="{ clickable: true }"
      :modules="modules"
      class="mainSlider"
    >
      <SwiperSlide v-for="(slide, i) in slides" :key="i">
        <div v-if="slide.video" class="relative" tabindex="0">
          <video width="500" class="w-full" height="240" controls>
            <source :src="slide.video.src" type="video/mp4" />
          </video>
        </div>
        <div v-else>
          <img v-bind="slide.img" class="w-full" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  <Swiper
    @swiper="setThumbsSwiper"
    :spaceBetween="20"
    :slidesPerView="3"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="hidden md:block"
  >
    <SwiperSlide v-for="(slide, i) in slides" :key="i">
      <div class="relative block w-full pt-[66%]">
        <img
          v-bind="slide.img"
          class="absolute inset-0 h-full w-full object-cover"
        />
        <svg
          v-show="slide.video"
          class="absolute top-1/2 left-1/2 -ml-5 -mt-5 h-10 w-10"
          viewBox="0 0 86 86"
        >
          <circle
            fill="#FFFFFF"
            opacity="0.691824777"
            cx="43"
            cy="43"
            r="43"
          ></circle>
          <path
            d="M50.0024162,35.0030752 L61.9008492,50.1465353 C62.9244895,51.4493502 62.6981737,53.3353148 61.3953588,54.358955 C60.8668022,54.7742496 60.2140859,55 59.5418942,55 L34.1723915,55 C32.5155373,55 31.1723915,53.6568542 31.1723915,52 C31.1723915,51.3278083 31.398142,50.675092 31.8134365,50.1465353 L43.7118695,35.0030752 C45.0767232,33.2659887 47.5913426,32.9642343 49.3284291,34.329088 C49.5791516,34.5260843 49.80542,34.7523527 50.0024162,35.0030752 Z"
            fill="#D50032"
            transform="translate(46.857143, 43.000000) rotate(-270.000000) translate(-46.857143, -43.000000) "
          ></path>
        </svg>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Thumbs, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const modules = [FreeMode, Thumbs, Pagination];

const props = defineProps({
  slides: {
    type: Array,
    required: true
  }
});
</script>
<style>
.mainSlider .swiper-slide {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mainSlider .swiper-pagination {
  display: flex;
  justify-content: center;
  margin-top: 34px;
}

.mainSlider .swiper-pagination-bullet {
  display: inline-flex;
  flex: 0 0 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #cfcfcf;
  margin: 0 5px;
  cursor: pointer;
}

.mainSlider .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: #fdb813;
}

@media (min-width: 768px) {
  .mainSlider .swiper-pagination {
    display: none;
  }
}
</style>
