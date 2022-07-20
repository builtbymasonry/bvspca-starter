<template>
  <div
    class="flex flex-col gap-5 text-center sm:gap-10 lg:gap-20 lg:text-left"
    :class="reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'"
  >
    <div
      class="relative mx-auto max-w-sm overflow-hidden rounded-sm md:max-w-md md:rounded-md lg:w-1/2 lg:max-w-full"
    >
      <img class="w-full" v-bind="img" />
      <div
        v-if="video"
        @click="openVideo"
        class="absolute top-1/2 left-1/2 -ml-10 -mt-10 h-20 w-20 cursor-pointer"
      >
        <svg class="w-full" viewBox="0 0 86 86">
          <circle
            id="Oval"
            fill="#FFFFFF"
            opacity="0.691824777"
            cx="43"
            cy="43"
            r="43"
          ></circle>
          <path
            d="M50.0024162,35.0030752 L61.9008492,50.1465353 C62.9244895,51.4493502 62.6981737,53.3353148 61.3953588,54.358955 C60.8668022,54.7742496 60.2140859,55 59.5418942,55 L34.1723915,55 C32.5155373,55 31.1723915,53.6568542 31.1723915,52 C31.1723915,51.3278083 31.398142,50.675092 31.8134365,50.1465353 L43.7118695,35.0030752 C45.0767232,33.2659887 47.5913426,32.9642343 49.3284291,34.329088 C49.5791516,34.5260843 49.80542,34.7523527 50.0024162,35.0030752 Z"
            id="Triangle-Copy-3"
            fill="#D50032"
            transform="translate(46.857143, 43.000000) rotate(-270.000000) translate(-46.857143, -43.000000) "
          ></path>
        </svg>
      </div>
    </div>
    <div class="flex-col items-start justify-center text-xs lg:flex lg:w-1/2">
      <h2 class="mb-3 text-2xl font-bold sm:text-4xl">{{ title }}</h2>
      <p>{{ text }}</p>
      <div
        v-if="buttons"
        class="mt-10 flex flex-wrap justify-center space-x-10 lg:justify-start"
      >
        <Button
          v-for="button in buttons"
          :key="button.text"
          :url="button.url"
          :variant="button.variant || primary"
          :text="button.text"
        />
      </div>
      <ButtonLink
        v-if="video"
        class="mt-12"
        text="Watch the video"
        @click.prevent="openVideo"
      />
    </div>
    <Modal
      v-if="video"
      ref="modal"
      size="5xl"
      :button="null"
      :innerGutter="false"
    >
      <iframe
        class="aspect-[16/9] w-full"
        :src="video.src"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from "vue";

import Button from "@/components/Button.vue";
import Modal from "./Modal.vue";
import Button1 from "@/components/Button.vue";
import ButtonLink from "./ButtonLink.vue";

const modal = ref(null);

const openVideo = () => {
  modal.value.openModal();
};

const props = defineProps({
  title: String,
  text: String,
  buttons: Array,
  img: Object,
  video: {
    type: Object,
    default: null
  },
  reverse: {
    type: Boolean,
    default: false
  }
});
</script>
