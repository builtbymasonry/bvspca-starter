<template>
  <div class="h-[360px] sm:h-[480px] md:h-[83%] md:mb-[20px]">
    <Swiper
      :thumbs="{ swiper: thumbsSwiper }"
      :pagination="{ clickable: true }"
      :modules="modules"
      class="mainSlider h-full"
    >
      <SwiperSlide v-for="(slide, i) in slides" :key="i">
        <video
          v-if="slide.video"
          width="500"
          class="absolute inset-0 h-full w-full object-cover"
          height="240"
          controls
          :poster="slide.video.poster && slide.video.poster"
        >
          <source :src="slide.video.src" type="video/mp4" />
        </video>
        <img v-else v-bind="slide.img" class="absolute inset-0 h-full w-full object-cover" />
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
    class="hidden md:block !m-0 h-[17%]"
  >
    <SwiperSlide v-for="(slide, i) in slides" :key="i">
      <div class="relative block w-full h-full group">
        <img
          v-bind="slide.img"
          class="absolute inset-0 h-full w-full object-cover"
        />
        <div
          v-show="slide.video"
          class="absolute top-1/2 left-1/2 -mx-5 -my-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/70 transition-colors duration-300 group-hover:bg-white/90"
        >
          <BaseIcon
            name="angleRight"
            class="text-red ml-[5%] h-[30%] w-[30%]"
          />
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Thumbs, Pagination } from "swiper";
import BaseIcon from "@/components/BaseIcon.vue";

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
.mainSlider {
  overflow: visible;
}
.mainSlider .swiper-slide {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mainSlider .swiper-pagination {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
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
  .mainSlider {
    overflow: hidden;
  }
  .mainSlider .swiper-pagination {
    display: none;
  }
}
</style>
