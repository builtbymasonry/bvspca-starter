<template>
  <div>
    <HeroInner
      class="bg-gray-dark"
      :imgSrc="heroImg"
      imgAlt="Welness clinic"
      v-bind="heroInnerData"
    />

    <section class="py-12 md:py-20 lg:py-28">
      <div class="mx-auto max-w-5xl px-4">
        <h2
          class="mb-10 text-center text-2xl font-bold md:mb-16 md:text-3xl xl:text-5xl"
        >
          Resources for pet owners and lovers
        </h2>

        <div class="-mx-4 flex flex-wrap justify-center gap-y-10 md:gap-y-8">
          <div
            class="px-4 md:w-1/2 lg:w-1/3"
            v-for="card in cards"
            :key="card.title"
          >
            <Card
              :imgSrc="card.imgSrc"
              :imgAlt="card.imgAlt"
              :title="card.title"
              :text="card.text"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="relative pt-20 pb-40 sm:pt-32 sm:pb-56 md:pb-28">
      <div class="absolute top-0 left-0 h-full w-full">
        <img
          class="absolute top-0 left-0 h-full w-full object-cover"
          :src="bgImg01"
          alt="image description"
        />
      </div>

      <InfoCard
        :imgSrc="infoCardImg01"
        imgAlt="We place over 16,000 animals a year"
        v-bind="infoCardData"
        :buttons="[
          { variant: 'primary', text: 'Learn more about our impact' },
        ]"
      />
    </section>

    <section
      class="bg-skew bg-skew-reverse bg-purple pt-8 pb-20 text-white md:py-24 lg:py-32"
    >
      <div class="mx-auto max-w-4xl px-4">
        <PostInline
          :imgSrc="postInlineImg01"
          imgAlt="Pay it forward, your free time has so much value"
          v-bind="postInlineData"
          :buttons="[
            { variant: 'secondary', text: 'Donate' },
            { variant: 'outlineSecondary', text: 'Sponsor' }
          ]"
          reverse
        />
      </div>
    </section>

    <section class="bg-gray-dark py-12 lg:py-20">
      <div class="mx-auto max-w-7xl px-4">
        <h2
          class="mb-10 text-center text-2xl font-bold tracking-wide md:mb-16 md:text-3xl xl:text-5xl"
        >
          For your pet related news & resources
        </h2>

        <div
          class="grid grid-cols-1 gap-10 px-0 sm:px-8 md:grid-cols-2 md:gap-8 md:px-0 lg:grid-cols-3"
        >
          <PostCard
            :imgSrc="PostCardImg07"
            imgAlt="$5 off our 5K Color Run"
            title="$5 off our 5K Color Run"
            text="We're so excited to be offering a number of new activities to this year's line-up of fun, including a Color Run for you and your furry running partner. Register today!"
            :buttonLink="{ text: 'Read more' }"
          />
          <PostCard
            :imgSrc="PostCardImg08"
            imgAlt="Walk-4-Paws"
            title="Walk-4-Paws"
            text="We’re bringing back the most popular activities PLUS we’ve changed our 5K to a Color Run, expanded Yoga with Puppies, added live music, and added more fun things."
            :buttonLink="{ text: 'Read more' }"
          />
          <PostCard
            :imgSrc="PostCardImg09"
            imgAlt="Critter Camp"
            title="Critter Camp"
            text="Kids ages 7 to 12 will have a howling good time at our Critter Camp day camp. Our next session is a Spring-themed Weekend: April 9 – April 10 for kids ages 10 through 12."
            :buttonLink="{ text: 'Read more' }"
          />
        </div>

        <div
          class="mt-16 flex flex-col items-center justify-center md:flex-row"
        >
          <Button variant="primary" text="View all news, events & resources" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue";

import HeroInner from "@/components/HeroInner.vue";
import heroImg from "@/assets/img/hero-image-02.jpg";

import Card from "@/components/Card.vue";
import cardImg01 from "@/assets/img/icon-heart-rate.svg";
import cardImg02 from "@/assets/img/icon-dog.svg";
import cardImg03 from "@/assets/img/icon-pet-shop.svg";
import cardImg04 from "@/assets/img/icon-pet-insurance.svg";
import cardImg05 from "@/assets/img/icon-cat.svg";

import PostCard from "@/components/PostCard.vue";
import PostCardImg07 from "@/assets/img/img-pet-07.jpg";
import PostCardImg08 from "@/assets/img/img-pet-08.jpg";
import PostCardImg09 from "@/assets/img/content-img-03.jpg";

import PostInline from "@/components/PostInline.vue";
import postInlineImg01 from "@/assets/img/content-img-04.jpg";

import bgImg01 from "@/assets/img/bg-image-01.jpg";

import InfoCard from "@/components/InfoCard.vue";
import infoCardImg01 from "@/assets/img/content-img-01.jpg";

const heroInnerData = {
  title: "For your pet",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
};

const cards = [
  {
    imgSrc: cardImg01,
    imgAlt: "Adopt",
    title: "Adopt",
    text: "Over 16,000 animals enter our shelters in hopes of finding a home to call their own. Is your new family member waiting for you?",
  },
  {
    imgSrc: cardImg02,
    imgAlt: "Volunteer",
    title: "Volunteer",
    text: "The Brandywine Valley SPCA has a wide variety of volunteer opportunities at both our Delaware and Pennsylvania campuses.",
  },
  {
    imgSrc: cardImg03,
    imgAlt: "Foster",
    title: "Foster",
    text: "We’re saving more babies than ever, and one of the best ways for you to help is to become a foster.",
  },
  {
    imgSrc: cardImg04,
    imgAlt: "Get kids involved",
    title: "Get kids involved",
    text: "Is your child interested in volunteering? If you are between 8-12 years of age, you can join our junior volunteer program!",
  },
  {
    imgSrc: cardImg05,
    imgAlt: "Get kids involved",
    title: "Get kids involved",
    text: "Is your child interested in volunteering? If you are between 8-12 years of age, you can join our junior volunteer program!",
  }
];

const postInlineData = {
  title: "Give back to your community",
  text: "Open the door to endless possibilities. Together, we will create positive change within our community, help control the homeless animal population, and improve the lives of pets and their families.",
  buttons: [
    {
      variant: "secondary",
      text: "Donate",
    },
    {
      variant: "outlineSecondary",
      text: "Sponsor",
    },
  ],
};

const infoCardData = {
  title: "We place over 16,000 animals a year",
  text: "We were the first open-admission no-kill shelter in Pennsylvania, and we have led Delaware to becoming the first no-kill state in the United States.",
};
</script>
