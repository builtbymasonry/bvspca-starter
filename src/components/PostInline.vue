<template>
  <div
    class="flex flex-col gap-5 items-center gap-y-10 text-center lg:text-left"
    :class="reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'"
  >
    <div class="relative mx-auto max-w-sm md:max-w-md lg:max-w-full w-full lg:w-1/2">
      <img class="w-full rounded-sm md:rounded-md shadow" v-bind="img" />
      <div
        v-if="video"
        @click="openVideo"
        @keyup.enter="openVideo"
        tabindex="0"
        class="absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer group"
      >
        <div class="flex items-center justify-center w-[86px] h-[86px] rounded-full bg-white/70 group-hover:bg-white transition-all">
          <BaseIcon
            name="angleRight"
            class="ml-[5%] w-[30%] h-[30%] text-red"
          />
        </div>
      </div>
      <Carousel
        v-if="carousel"
        :slides="carousel.slides"
      />
    </div>
    <div
      class="py-2 lg:flex lg:flex-col lg:items-start lg:justify-center lg:w-1/2 text-xs"
      :class="reverse ? 'lg:pr-10' : 'lg:pl-10'"
    >
      <h2 v-if="title" class="mb-3 text-2xl md:text-3xl xl:text-4xl font-bold">{{ title }}</h2>
      <h3 v-if="subtitle" class="mb-3 text-2xl font-bold">{{ subtitle }}</h3>
      <div v-if="text" class="space-y-5">
        <p v-for="p in text" :key="p">{{ p }}</p>
      </div>
      <div v-if="share" class="mt-6 flex">
        <span class="mr-6 text-lg md:text-xl font-bold">Share:</span>
        <Socials
          :socials="socialList"
          variant="red"
          class="space-x-4"
        />
      </div>
      <div
        v-if="buttons"
        class="mt-10 flex flex-wrap justify-center space-x-10 lg:justify-start"
      >
        <Button
          v-for="button in buttons"
          :key="button.text"
          v-bind="button"
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
import ButtonLink from "@/components/ButtonLink.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import Modal from "@/components/Modal.vue";
import Carousel from "@/components/Carousel.vue";
import Socials from "@/components/Socials.vue";

const modal = ref(null);

const openVideo = () => modal.value.openModal();

const props = defineProps({
  title: String,
  subtitle: String,
  text: Array,
  buttons: Array,
  img: Object,
  share: {
    type: Boolean,
    default: false
  },
  video: {
    type: Object,
    default: null
  },
  carousel: {
    type: Object,
  },
  reverse: {
    type: Boolean,
    default: false
  }
});

const socialList = [
  {
    url: "#",
    icon: "facebook"
  },
  {
    url: "#",
    icon: "twitter"
  },
  {
    url: "#",
    icon: "share"
  }
];
</script>
