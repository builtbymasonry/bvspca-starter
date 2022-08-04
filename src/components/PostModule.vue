<template>
  <div
    class="grid grid-cols-1 gap-10 sm:gap-14 xl:gap-20 text-center lg:text-left"
    :class="[
      layoutAlt ? 'lg:grid-cols-2/5' : 'lg:grid-cols-2',
      layoutAlt && reverse ? 'lg:grid-cols-5/2' : 'lg:grid-cols-2',
      stretchColumns ? '' : 'items-center'
    ]"
  >
    <div
      class="relative mx-auto w-full max-w-sm md:max-w-md lg:max-w-full"
      :class="reverse ? 'lg:order-2' : 'lg:order-1'"
    >
      <img
        v-if="img"
        class="w-full"
        :class="[
          img.type === 'default' ? '' : 'rounded-sm md:rounded-md shadow',
          img.type === 'cover' ? 'lg:absolute lg:h-full lg:object-cover' : ''
        ]"
        v-bind="img"
      />
      <div v-if="imgGrid" class="grid grid-cols-2 gap-6 sm:gap-8">
        <div
          class="flex items-center justify-center overflow-hidden rounded-sm bg-white shadow sm:rounded-lg"
          v-for="item in imgGrid"
          :key="item"
        >
          <img v-bind="item.img" />
        </div>
      </div>
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
      class="lg:py-2 flex flex-col items-center lg:items-start justify-center px-0 sm:px-10 lg:px-0"
      :class="reverse ? 'lg:order-1' : 'lg:order-2'"
    >
      <div class="space-y-2">
        <h3
          v-if="title"
          class="text-2xl font-bold"
          :class="[
            title.size === 'lg' ? 'sm:text-4xl lg:text-5xl' : '',
            title.size === 'md' ? 'sm:text-4xl' : '',
          ]"
        >
          {{ title.text }}
        </h3>
      </div>
      <div v-if="text" class="mt-2 space-y-5">
        <p v-for="p in text" :key="p">{{ p }}</p>
      </div>

      <div v-if="textGrid" class="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-8 text-xs text-center sm:text-left">
        <div v-for="item in textGrid" :key="item.title">
          <h4 class="mb-2 text-xl font-bold">{{ item.title }}</h4>
          <p>{{ item.text }}</p>
          <ButtonLink
            v-if="item.button"
            v-bind="item.button"
            target="_blank"
            class="mt-4 sm:mt-5"
          />
        </div>
      </div>

      <ul v-if="list" class="list-disc space-y-2 mt-5 pl-5 marker:text-xs">
        <li
          v-for="item in list"
          :key="item"
          class="pl-2"
        >
          {{item}}
        </li>
      </ul>

      <List
        v-if="customList"
        v-bind="customList"
        class="mt-6 text-left"
      />

      <div v-if="share" class="mt-6 flex">
        <span class="mr-6 text-lg font-bold md:text-xl">Share:</span>
        <Socials :socials="socialList" variant="red" class="space-x-4" />
      </div>

      <div
        v-if="buttons"
        class="mt-7 -m-5 flex flex-wrap flex-row items-center sm:items-start justify-center lg:justify-start"
      >
        <Button class="m-5" v-for="button in buttons" :key="button.text" v-bind="button" />
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

import Button from "@/components/Button.vue"
import ButtonLink from "@/components/ButtonLink.vue"
import BaseIcon from "@/components/BaseIcon.vue"
import Modal from "@/components/Modal.vue"
import Carousel from "@/components/Carousel.vue"
import Socials from "@/components/Socials.vue"
import List from "@/components/List.vue"

const modal = ref(null);

const openVideo = (e) => {
  if (e.key && e.key !== "Enter") return;

  modal.value.openModal();
};

const props = defineProps({
  title: Object,
  subtitle: String,
  text: Array,
  textGrid: Array,
  list: Array,
  customList: Object,
  buttons: Array,
  img: Object,
  imgGrid: Array,
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
  },
  layoutAlt: {
    type: Boolean,
    default: false
  },
  stretchColumns: {
    type: Boolean,
    default: false
  },
});

const socialList = [
  { url: "#", icon: "facebook" },
  { url: "#", icon: "twitter" },
  { url: "#", icon: "share" }
];
</script>
