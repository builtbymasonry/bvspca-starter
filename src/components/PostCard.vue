<template>
  <div class="text-xs">
    <a
      :href="url"
      class="mb-8 block overflow-hidden rounded-sm shadow md:rounded-lg"
    >
      <img
        class="w-full transition-all hover:scale-[102%]"
        v-bind="img"
      />
    </a>
    <h3
      v-if="title"
      class="mb-2 text-xl font-bold"
      :class="[
        title.size === 'md' && 'sm:text-2xl'
      ]"
    >
      {{ title.text }}
    </h3>
    <p class="mb-8">{{ text }}</p>
    <div v-if="share" class="mb-9 flex">
      <span class="mr-6 text-lg font-bold md:text-xl">Share:</span>
      <Socials :socials="socialList" class="space-x-4" />
    </div>
    <ButtonLink v-if="buttonLink" :text="buttonLink.text" :url="url" />
    <Button v-if="button" class="mt-2" v-bind="button" :url="url" />
  </div>
</template>

<script setup>
import ButtonLink from "./ButtonLink.vue";
import Button from "./Button.vue";
import Socials from "./Socials.vue";

const props = defineProps({
  url: {
    type: String,
    required: true,
    default: ""
  },
  img: Object,
  title: Object,
  text: String,
  share: {
    type: Boolean,
    default: false
  },
  button: {
    type: Object
  },
  buttonLink: {
    type: Object
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
