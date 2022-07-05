<template>
  <div>
    <Hero :imgSrc="heroImg" imgDescr="Hero Image" />

    <Stats />

    <section class="py-12 md:py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-5">
        <h2
          class="mb-10 text-center text-2xl font-bold tracking-wide md:mb-16 md:text-3xl xl:text-4xl"
        >
          You can make a difference by getting involved today
        </h2>

        <div
          class="grid grid-cols-1 gap-10 px-8 sm:grid-cols-1 md:grid-cols-2 md:gap-8 md:px-0 lg:grid-cols-4"
        >
          <!-- Card -->
          <Card
            :imgSrc="CardImg01"
            imgAlt="Adopt"
            title="Adopt"
            text="Over 16,000 animals enter our shelters in hopes of finding a home to call their own. Is your new family member waiting for you?"
          />
          <!-- /Card -->
          <!-- Card -->
          <Card
            :imgSrc="CardImg02"
            imgAlt="Volunteer"
            title="Volunteer"
            text="The Brandywine Valley SPCA has a wide variety of volunteer opportunities at both our Delaware and Pennsylvania campuses."
          />
          <!-- /Card -->
          <!-- Card -->
          <Card
            :imgSrc="CardImg03"
            imgAlt="Foster"
            title="Foster"
            text="We’re saving more babies than ever, and one of the best ways for you to help is to become a foster."
          />
          <!-- /Card -->
          <!-- Card -->
          <Card
            :imgSrc="CardImg04"
            imgAlt="Get kids involved"
            title="Get kids involved"
            text="Is your child interested in volunteering? If you are between 8-12 years of age, you can join our junior volunteer program!"
          />
          <!-- /Card -->
        </div>

        <div class="mt-16 text-center">
          <Button variant="primary" text="See all ways to get involved" />
        </div>
      </div>
    </section>

    <section class="pt-12 lg:pt-20 pb-5 bg-skew bg-purple text-white ">
      <div class="mx-auto max-w-7xl px-5">
        <h2
          class="mb-10 text-center text-2xl font-bold tracking-wide md:mb-16 md:text-3xl xl:text-4xl"
        >
          Featured pets
        </h2>

        <div
          class="grid grid-cols-1 gap-10 px-0 sm:px-8 md:grid-cols-2 md:gap-8 md:px-0 lg:grid-cols-3"
        >
          <PostCard
            :imgSrc="PostCardImg01"
            imgAlt="Chewie fka Monkey"
            title="Chewie fka Monkey"
            text="Chewie is a big sweetheart who loves taking over your side of the bed. He also loves attention and affection from his people and gets along well …"
          />
          <PostCard
            :imgSrc="PostCardImg02"
            imgAlt="Slim aka Spunk"
            title="Slim aka Spunk"
            text="Slim (aka Spunk) is a big fellow with an equally big heart! This wonderful guy is bonded with Magic, on whom he relies for comfort and love. As a bonded …"
          />
          <PostCard
            :imgSrc="PostCardImg03"
            imgAlt="Boo Boo"
            title="Boo Boo"
            text="Boo Boo loves tennis balls! He likes to play with them, walk with them, and swim in our doggie pools with them. If you have a stash of tennis balls, Boo Boo …"
          />
        </div>

        <div class="mt-16 flex flex-col md:flex-row justify-center items-center">
          <Button
            class="mx-7 mb-8 md:mb-0 w-64"
            variant="secondary"
            text="All adoptable dogs"
          />
          <Button
            class="mx-7 mb-8 md:mb-0 w-64"
            variant="secondary"
            text="All adoptable cats"
          />
        </div>
      </div>
    </section>

    <section class="py-10">
      <div class="mx-auto max-w-5xl px-5">
        <div class="flex flex-col-reverse md:flex-row">
          <div class="w-auto md:w-1/2">
            <div
              class="text-center text-xs leading-loose md:pr-16 md:text-left"
            >
              <h2 class="mb-4 text-2xl font-bold md:text-4xl">
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

    <section class="hidden bg-white py-10 sm:block">
      <h2 class="mb-5 px-5 text-center text-2xl font-bold lg:text-4xl">
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

<script>
import Hero from "@/components/Hero.vue";
import heroImg from "@/assets/img/hero-image-01.jpg";

import Button from "@/components/Button.vue";
import ButtonLink from "@/components/ButtonLink.vue";

import Stats from "@/components/Stats.vue";

import Card from "@/components/Card.vue";
import CardImg01 from "@/assets/img/icon-pet.svg";
import CardImg02 from "@/assets/img/icon-volunteer.svg";
import CardImg03 from "@/assets/img/icon-dog-house.svg";
import CardImg04 from "@/assets/img/icon-father-and-son.svg";

import PostCard from "@/components/PostCard.vue";
import PostCardImg01 from "@/assets/img/img-pet-01.jpg";
import PostCardImg02 from "@/assets/img/img-pet-02.jpg";
import PostCardImg03 from "@/assets/img/img-pet-03.jpg";

import Carousel from "@/components/Carousel.vue";
import slideImg01 from "@/assets/img/slide01.jpg";
import slideImg02 from "@/assets/img/slide02.jpg";
const carouselSlides = [slideImg01, slideImg02, slideImg01, slideImg02];

import MarqueeSlider from "@/components/MarqueeSlider.vue";
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
      marqueeSlides,
      heroImg,
      CardImg01,
      CardImg02,
      CardImg03,
      CardImg04,
      PostCardImg01,
      PostCardImg02,
      PostCardImg03
    };
  },
  components: {
    MarqueeSlider,
    Carousel,
    Button,
    ButtonLink,
    Hero,
    Stats,
    Card,
    PostCard
  }
};
</script>
