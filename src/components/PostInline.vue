<template>
  <div
    class="flex flex-col items-center gap-10 text-center lg:gap-20 lg:text-left"
    :class="reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'"
  >
    <div
      class="relative mx-auto w-full max-w-sm shrink-0 md:max-w-md lg:w-1/2 lg:max-w-full"
    >
      <img
        v-if="img"
        class="w-full"
        :class="img.type === 'default' ? '' : 'rounded-sm shadow md:rounded-md'"
        v-bind="img"
      />
      <div
        v-if="video"
        v-on="video ? { click: openVideo, keyup: openVideo } : {}"
        :tabindex="video ? 0 : -1"
        class="group relative cursor-pointer overflow-hidden rounded-sm shadow md:rounded-md"
      >
        <img
          class="w-full transition-transform duration-300 group-hover:scale-105"
          v-bind="video.thumb"
        />
        <div
          class="absolute top-1/2 left-1/2 -mx-10 -my-10 flex h-20 w-20 items-center justify-center rounded-full bg-white/70 transition-colors duration-300 group-hover:bg-white/90"
        >
          <BaseIcon
            name="angleRight"
            class="text-red ml-[5%] h-[30%] w-[30%]"
          />
        </div>
      </div>
      <Carousel class="w-full" v-if="carousel" :slides="carousel.slides" />
    </div>
    <div
      class="py-2 text-xs lg:flex lg:w-1/2 lg:flex-col lg:items-start lg:justify-center"
    >
      <h2 v-if="title" class="mb-3 text-2xl font-bold md:text-3xl xl:text-4xl">
        {{ title }}
      </h2>
      <h3 v-if="subtitle" class="mb-3 text-2xl font-bold">{{ subtitle }}</h3>
      <div v-if="text" class="space-y-5">
        <p v-for="p in text" :key="p">{{ p }}</p>
      </div>
      <ul
        v-if="list"
        class="mx-auto mt-5 max-w-lg list-disc space-y-2 pl-5 text-left marker:text-xs lg:max-w-none"
      >
        <li v-for="(item, i) in list" :key="i" class="pl-2">
          {{ item }}
        </li>
      </ul>
      <div v-if="share" class="mt-6 flex">
        <span class="mr-6 text-lg font-bold md:text-xl">Share:</span>
        <Socials :socials="socialList" variant="red" class="space-x-4" />
      </div>
      <div
        v-if="buttons"
        class="mt-10 flex flex-wrap justify-center space-x-10 lg:justify-start"
      >
        <Button v-for="button in buttons" :key="button.text" v-bind="button" />
      </div>
      <ButtonLink
        v-if="video"
        class="mt-10"
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
      :rounded="false"
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

const openVideo = (e) => {
  if (e.key && e.key !== "Enter") return;

  modal.value.openModal();
};

const props = defineProps({
  title: String,
  subtitle: String,
  text: Array,
  list: Array,
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
    type: Object
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
