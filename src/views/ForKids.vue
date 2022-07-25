<template>
  <HeroInner v-bind="heroInnerData" class="bg-gray-dark" />

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-5xl px-4">
      <PostInline v-bind="postInlineData" />
    </div>
  </section>

  <PostSection class="bg-gray-dark" v-bind="postSectionData" />











</template>

<script setup>
import HeroInner from "@/components/HeroInner.vue";
import PostInline from "@/components/PostInline.vue";
import PostSection from "@/components/PostSection.vue";

const heroInnerData = {
  title: "For Kids",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
  img: { src: "src/assets/img/hero-image-13.jpg", alt: "Volunteer" }
};

const postInlineData = {
  title: "Whatever you need, we’re here to help",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi. Pellentesque finibus lorem dignissim bibendum pretium. Maecenas efficitur varius feugiat. Vestibulum eu mi ac diam mollis euismod.",
  buttons: [{ variant: "primary", text: "Learn more about us", url: "#!" }],
  carousel: {
    slides: [
      { src: "src/assets/img/slide03.jpg", alt: "slide alt1" },
      { src: "src/assets/img/slide04.jpg", alt: "slide alt2" },
      { src: "src/assets/img/slide03.jpg", alt: "slide alt3" },
      { src: "src/assets/img/slide04.jpg", alt: "slide alt4" }
    ]
  },
  reverse: true
};

const postSectionData = {
  img: { src: "src/assets/img/content-img-18.jpg", alt: "" },
  title: "Critter Camp",
  textList: [
    { text: "Kids ages 7 to 12 will have a howling good time at our Critter Camp day camp. Our next session is a new Valentine’s Day Weekend (Feb. 12th & 13th) for kids ages 7 through 9. This is one of a number of themed weekend sessions in addition to our summer dates offered across all BVSPCA campuses that welcome kids ages 7-9 and 10-12. Camps will feature a variety of guest speakers (virtual and in person), new animal friends, and activities galore." },
    { text: "At camp, young animal lovers will:" }
  ],
  list: [
    { text: "Learn special skills through our camp workshops, such as pet CPR, grooming, and behavioral training" },
    { text: "Learn about animal care" },
    { text: "Hear from guest speakers in the animal world using video conferencing" },
    { text: "Meet adoptable pet" },
    { text: "Engage in creative and educational activities" },
    { text: "Participate in team-building workshops" },
    { text: "Practice their reading skills by reading to our companions" },
    { text: "Each camp session runs from 9am to 3pm with an aftercare option available during summer programs only. The weekly cost covers all activities, arts & crafts materials, snacks, and camp t-shirt." }
  ],
  buttons: [
    { variant: "primary", text: "Register today", url: "#!" },
  ]
};
</script>
