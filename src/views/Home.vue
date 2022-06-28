<script>
import MarqueeSlider from "../components/MarqueeSlider.vue";
import Carousel from "../components/Carousel.vue";
import ButtonLink from "../components/ButtonLink.vue";

import slideImg01 from "@/assets/img/slide01.jpg";
import slideImg02 from "@/assets/img/slide02.jpg";
const carouselSlides = [slideImg01, slideImg02, slideImg01, slideImg02];

import logo01 from "@/assets/img/sponsors/petco-love.png";
import logo02 from "@/assets/img/sponsors/discover.png";
import logo03 from "@/assets/img/sponsors/faegre-drinker.png";
import logo04 from "@/assets/img/sponsors/idexx.png";
import logo05 from "@/assets/img/sponsors/merck.png";
import logo06 from "@/assets/img/sponsors/barnes-thornbur.png";

const marqueeSlides = [
  {
    url: "#",
    logo: logo01
  },
  {
    url: "#",
    logo: logo02
  },
  {
    url: "#",
    logo: logo03
  },
  {
    url: "#",
    logo: logo04
  },
  {
    url: "#",
    logo: logo05
  },
  {
    url: "#",
    logo: logo06
  }
];

export default {
  setup() {
    return {
      carouselSlides,
      marqueeSlides
    };
  },
  components: { MarqueeSlider, Carousel, ButtonLink }
};
</script>

<template>
  <div>
    <section class="py-10">
      <div class="px-5 max-w-5xl mx-auto">
        <div class="flex flex-col-reverse md:flex-row">
          <div class="w-auto md:w-1/2">
            <div
              class="text-xs leading-loose text-center md:text-left md:pr-16"
            >
              <h2 class="text-2xl md:text-4xl font-bold mb-4">
                A second chance at nine lives
              </h2>
              <p>
                Whiskers got his leg caught in a fox trap after getting loose
                from his home. He lost a lot of skin, suffered nerve damage, ahd
                a quickly spreading infection. His family brought him to our New
                Castle Animal Health Center. They couldn’t afford the entirety
                od his care and were condisdering euthanasia since the infection
                would soon be life-threatening. Thanks to our pet retention
                grant from Petco Love, we were able to bridge what his owners
                couldn’t afford and saved Whiskers by amputating the badly
                damaged leg. Whiskers now lives a life of three-legged luxury.
                We’re grateful for Petco Love’s support, which results from all
                of you who donate at checkout at the Petco stores.
              </p>
            </div>
          </div>
          <div class="w-auto md:w-1/2">
            <div class="mb-8 md:mb-0">
              <Carousel :slides="carouselSlides" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-10 bg-white hidden sm:block">
      <h2 class="px-5 mb-5 text-center text-2xl lg:text-4xl font-bold">
        Thank you to our wonderful sponsors!
      </h2>
      <div class="mb-10">
        <MarqueeSlider :slides="marqueeSlides" />
      </div>
      <div class="px-5 text-center">
        <ButtonLink :text="'Become a sponsor'" />
      </div>
    </section>
  </div>
</template>
