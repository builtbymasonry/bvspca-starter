<template>
  <div class="">
    <a href="#">
        <img class="w-full mb-8 rounded-lg shadow" :src="imgSrc" :alt="imgAlt"/>
    </a>
    <h3 class="font-bold text-2xl mb-2">{{props.title}}</h3>
    <p class="mb-8 text-sm leading-loose">{{props.text}}</p>
    <div class="flex mb-9">
        <span class="mr-6 text-xl font-bold">Share:</span>
        <Socials :socials="socialList" class="space-x-4 text-orange"/>
    </div>
    <ButtonLink variant="outline" text="Learn more"/>
  </div>
</template>

<script setup>
import ButtonLink from './ButtonLink.vue';
import Socials from './Socials.vue';

const props = defineProps({
  imgSrc: {
    type: String,
    default: "#"
  },
  imgAlt: {
    type: String,
    default: 'Image Description'
  },
  title: String,
  text: String
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
