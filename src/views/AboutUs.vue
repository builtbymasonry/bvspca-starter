<template>
  <HeroInner v-bind="heroInnerData" class="bg-gray-dark" />

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-5xl px-4">
      <PostInline v-bind="postInlineData" />
    </div>
  </section>

  <section class="py-14 lg:py-28 bg-gray-dark">
    <div class="mx-auto max-w-7xl px-4">
      <PostInline v-bind="postInlineData2" />
    </div>
  </section>



</template>

<script setup>
import HeroInner from "@/components/HeroInner.vue";
import PostInline from "@/components/PostInline.vue";

const heroInnerData = {
  title: "For Kids",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
  img: { src: "src/assets/img/hero-image-13.jpg", alt: "Volunteer" }
};

const postInlineData = {
  title: "Our mission & vision",
  text: ["Founded in 1929, the Brandywine Valley SPCA exists to end animal suffering and to involve the entire community in the welfare and well-being of animals. Our mission is to put the “human” back in humane animal treatment and advocate on their behalf. Our vision is to be the recognized leader in animal welfare that empowers communities to treat life with respect and dignity."],
  video: {
    src: "https://www.youtube.com/embed/BHACKCNDMW8",
    thumb: {
      src: "src/assets/img/content-img-99.jpg",
      alt: ""
    }
  }
};

const postInlineData2 = {
  title: "Birthday parties",
  text: [ "The BVSPCA is dedicated to promoting the welfare and humane treatment of animals, so why not start early? Birthday celebrations at the BVSPCA teach children how to be compassionate to our four-legged friends. It’s sure to be a howling good time!",
    "Parties can be scheduled on Saturdays & Sundays between the hours of 11am and 5pm. Please provide a few additional dates in the event that your preferred date is not available. We require a $50.00 non-refundable deposit to secure your date and time. Minimum age requirement is 7 years old." ],
  carousel: {
    slides: [
      { src: "src/assets/img/slide05.jpg", alt: "slide alt1" },
      { src: "src/assets/img/slide02.jpg", alt: "slide alt2" },
      { src: "src/assets/img/slide01.jpg", alt: "slide alt3" },
      { src: "src/assets/img/slide02.jpg", alt: "slide alt4" }
    ]
  },
  reverse: true
};
</script>
