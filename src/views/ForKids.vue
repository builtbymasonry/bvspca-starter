<template>
  <HeroInner v-bind="heroInnerData" class="bg-gray-dark" />

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-5xl px-4">
      <PostCarousel v-bind="postCarouselData" />
    </div>
  </section>













</template>

<script setup>
import HeroInner from "@/components/HeroInner.vue";
import PostCarousel from "@/components/PostCarousel.vue";

const heroInnerData = {
  title: "For Kids",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
  img: { src: "src/assets/img/hero-image-13.jpg", alt: "Volunteer" }
};

const postCarouselData = {
  title: "A second chance at nine lives",
  text: "Whiskers got his leg caught in a fox trap after getting loose from his home. He lost a lot of skin, suffered nerve damage,   ahd a quickly spreading infection. His family brought him to our New Castle Animal Health Center. They couldn’t afford the entirety od his care and were condisdering euthanasia since the infection would soon be life-threatening. Thanks to our pet retention grant from Petco Love, we were able to bridge what his owners couldn’t afford and saved Whiskers by amputating the badly damaged leg. Whiskers now lives a life of three-legged luxury. We’re grateful for Petco Love’s support, which results from all of you who donate at checkout at the Petco stores.",
  slides: [
    { src: "src/assets/img/slide01.jpg", alt: "kitty" },
    { src: "src/assets/img/slide02.jpg", alt: "" }
  ]
};
</script>
