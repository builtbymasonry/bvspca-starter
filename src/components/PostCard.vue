<template>
  <div>
    <a :href="url">
      <img
        class="mb-8 w-full rounded-lg shadow transition-all duration-500 hover:scale-[102%]"
        :src="imgSrc"
        :alt="imgAlt"
      />
    </a>
    <h3 class="mb-2 text-2xl font-bold">{{ title }}</h3>
    <p class="mb-8 text-sm">{{ text }}</p>
    <div v-if="share" class="mb-9 flex">
      <span class="mr-6 text-xl font-bold">Share:</span>
      <Socials :socials="socialList" class="space-x-4" />
    </div>
    <ButtonLink v-if="buttonLink" :text="buttonLink.text" :url="url" />
    <Button
      v-if="button"
      class="mt-2"
      :variant="button.variant"
      :text="button.text"
      :url="url"
    />
  </div>
</template>

<script setup>
import ButtonLink from "./ButtonLink.vue";
import Button from "./Button.vue";
import Socials from "./Socials.vue";

const props = defineProps({
  url: {
    type: String,
    default: "#"
  },
  imgSrc: {
    type: String,
    default: "#"
  },
  imgAlt: {
    type: String,
    default: "Image Description"
  },
  title: String,
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
