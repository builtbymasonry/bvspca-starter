<template>
  <Swiper
    :modules="modules"
    :slides-per-view="1"
    :pagination="{
      clickable: true
    }"
    :autoplay="{
      disableOnInteraction: false,
      stopOnLastSlide: false
    }"
    :loop="true"
    :effect="'fade'"
    class="spca-carousel"
  >
    <SwiperSlide v-for="slide in slides" :key="slide">
      <img v-bind="slide" class="w-full" />
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

import { Pagination, EffectFade, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const props = defineProps({
  slides: {
    type: Array,
    required: true
  }
});

const modules = [Pagination, EffectFade, Autoplay];
</script>

<style>
.spca-carousel {
  overflow: visible;
}

.spca-carousel .swiper-wrapper {
  border-radius: 35px;
  overflow: hidden;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 28px;
}

.spca-carousel .swiper-pagination {
  display: flex;
  justify-content: center;
}

.spca-carousel .swiper-pagination-bullet {
  display: inline-flex;
  flex: 0 0 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #cfcfcf;
  margin: 0 5px;
  cursor: pointer;
}

.spca-carousel .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: #fdb813;
}
</style>
