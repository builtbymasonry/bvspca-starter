<template>
  <div>
    <a :href="link">
      <img class="w-full mb-8 rounded-lg shadow" :src="imgSrc" :alt="imgAlt" />
    </a>
    <h3 class="mb-2 text-2xl font-bold">{{title}}</h3>
    <p class="mb-8 text-sm">{{text}}</p>
    <div v-if="share" class="flex mb-9">
      <span class="mr-6 text-xl font-bold">Share:</span>
      <Socials
        :socials="socialList"
        class="space-x-4"
      />
    </div>
    <ButtonLink v-if="buttonLink" :text="buttonLink.text" :url="link" />
    <Button v-if="button" class="mt-2" :variant="button.variant" :text="button.text" :url="link" />
  </div>
</template>

<script setup>
import ButtonLink from './ButtonLink.vue';
import Button from './Button.vue';
import Socials from './Socials.vue';

const props = defineProps({
  link: {
    type: String,
    default: "#"
  },
  imgSrc: {
    type: String,
    default: "#"
  },
  imgAlt: {
    type: String,
    default: 'Image Description'
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
    icon: 'facebook'
  },
  {
    url: "#",
    icon: 'twitter'
  },
  {
    url: "#",
    icon: 'share'
  },
]
</script>
