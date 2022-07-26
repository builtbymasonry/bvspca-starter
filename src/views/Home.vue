<template>
  <div>
    <Hero v-bind="heroData" />

    <Stats />

    <section class="py-12 md:py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-4">
        <h2
          class="mb-10 text-center text-2xl font-bold md:mb-16 md:text-3xl xl:text-5xl"
        >
          You can make a difference by getting involved today
        </h2>

        <div class="-mx-4 flex flex-wrap justify-center gap-y-10 sm:gap-y-8">
          <div
            class="w-full px-12 sm:w-1/2 md:px-4 lg:w-1/4"
            v-for="card in cards"
            :key="card.title"
          >
            <Card v-bind="card" />
          </div>
        </div>

        <div class="mt-16 text-center">
          <Button text="See all ways to get involved" url="#!" />
        </div>
      </div>
    </section>

    <section class="bg-skew bg-purple pt-12 pb-5 text-white lg:pt-20">
      <div class="mx-auto max-w-7xl px-4">
        <h2
          class="mb-10 text-center text-2xl font-bold tracking-wide md:mb-16 md:text-3xl xl:text-5xl"
        >
          Featured pets
        </h2>

        <div
          class="grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
        >
          <PostCard
            v-for="post in featuredPets"
            :key="post.title"
            v-bind="post"
          />
        </div>

        <div
          class="mt-16 flex flex-col flex-wrap items-center justify-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-5 lg:space-x-10"
        >
          <Button variant="secondary" text="All adoptable dogs" url="#!" />
          <Button variant="secondary" text="All adoptable cats" url="#!" />
        </div>
      </div>
    </section>

    <section class="relative pt-48 pb-28 sm:pt-60 md:pb-0">
      <div class="absolute top-0 left-0 h-full w-full">
        <picture>
          <source
            media="(max-width: 767px)"
            srcset="src/assets/img/bg-image-01-sm.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcset="src/assets/img/bg-image-01.jpg"
          />
          <img
            class="absolute top-0 left-0 h-full w-full object-cover"
            src="src/assets/img/bg-image-01.jpg"
            alt="background"
          />
        </picture>
      </div>

      <InfoCard v-bind="infoCardData" />
    </section>

    <section class="bg-gray-dark pt-16 pb-20 md:pt-56 md:pb-24">
      <div class="mx-auto max-w-[61rem] px-4">
        <h2
          class="mb-10 text-center text-2xl font-bold md:mb-16 md:text-3xl xl:text-5xl"
        >
          For your pet
        </h2>

        <div class="-mx-4 flex flex-wrap justify-center gap-y-10 sm:gap-y-8">
          <div
            class="w-full px-12 sm:w-1/2 md:px-4 lg:w-1/3"
            v-for="card in cardsForPet"
            :key="card.title"
          >
            <Card v-bind="card" />
          </div>
        </div>

        <div class="mt-16 text-center">
          <Button variant="primary" text="See all pet services" />
        </div>
      </div>
    </section>

    <PostSection v-bind="postSectionData" />

    <section class="pt-10 pb-40 md:pb-60">
      <div class="mx-auto max-w-5xl px-4">
        <PostInline v-bind="postInlineData" />
      </div>
    </section>

    <section
      class="bg-skew bg-skew-reverse bg-purple pb-20 pt-8 text-white lg:pb-28"
    >
      <div class="mx-auto max-w-[67rem] px-4">
        <h2
          class="mb-10 text-center text-2xl font-bold tracking-wide md:mb-16 md:text-3xl xl:text-5xl"
        >
          Great or small, all donations are appreciated
        </h2>

        <div
          class="grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:gap-16"
        >
          <PostCard
            v-for="card in cardsDonations"
            :key="card.title"
            v-bind="card"
          />
        </div>

        <div class="mt-16 text-center">
          <ButtonLink text="See more ways to help" url="#!" />
        </div>
      </div>
    </section>

    <section class="py-20 lg:py-28">
      <div class="mx-auto max-w-5xl items-center px-4 lg:flex">
        <div
          class="mx-auto mb-12 grid max-w-md flex-shrink-0 grid-cols-2 gap-6 sm:gap-8 lg:mr-20 lg:mb-0 lg:w-[43%] lg:max-w-full xl:mr-28"
        >
          <div
            class="flex items-center justify-center overflow-hidden rounded-sm bg-white shadow sm:rounded-lg"
            v-for="item in imgGrid"
            :key="item"
          >
            <img v-bind="item.img" />
          </div>
        </div>
        <div
          class="mx-auto max-w-2xl text-center text-xs sm:text-sm lg:max-w-none lg:text-left"
        >
          <h3 class="mb-2 text-2xl font-bold sm:text-3xl md:text-5xl">
            Support our lifesaving work and look good doing it
          </h3>
          <p class="mb-10 lg:mr-24">
            Get your paws on our original and limited edition merchandise. Your
            purchases go towards the care of the 16,000+ animals we take in each
            year.
          </p>
          <Button variant="primary" text="Shop now" />
        </div>
      </div>
    </section>

    <PostCardsSection class="bg-gray-dark" v-bind="postCardsSectionData" />

    <section class="hidden bg-white py-12 md:block">
      <h2 class="mb-10 px-5 text-center text-2xl font-bold lg:text-4xl">
        Thank you to our wonderful sponsors!
      </h2>
      <div class="mb-10">
        <MarqueeSlider :slides="marqueeSlides" />
      </div>
      <div class="px-5 text-center">
        <ButtonLink text="Become a sponsor" />
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from "@/components/Hero.vue";

import Button from "@/components/Button.vue";
import ButtonLink from "@/components/ButtonLink.vue";

import Stats from "@/components/Stats.vue";

import Card from "@/components/Card.vue";
import PostCard from "@/components/PostCard.vue";
import PostCardsSection from "@/components/PostCardsSection.vue";

import PostSection from "@/components/PostSection.vue";

import InfoCard from "@/components/InfoCard.vue";
import PostInline from "@/components/PostInline.vue";

import MarqueeSlider from "@/components/MarqueeSlider.vue";

const heroData = {
  img: { src: "src/assets/img/hero-image-01.jpg", alt: "family" },
  title: "Putting the human back in humane",
  text: "We strive to end animal suffering and empower communities to find the heart in humanity",
  buttons: [
    { variant: "primary", text: "Save a life", url: "#!" },
    { variant: "outline", text: "Learn more", url: "#!" }
  ]
};

const postInlineData = {
  title: "A second chance at nine lives",
  text: "Whiskers got his leg caught in a fox trap after getting loose from his home. He lost a lot of skin, suffered nerve damage,   ahd a quickly spreading infection. His family brought him to our New Castle Animal Health Center. They couldn’t afford the entirety od his care and were condisdering euthanasia since the infection would soon be life-threatening. Thanks to our pet retention grant from Petco Love, we were able to bridge what his owners couldn’t afford and saved Whiskers by amputating the badly damaged leg. Whiskers now lives a life of three-legged luxury. We’re grateful for Petco Love’s support, which results from all of you who donate at checkout at the Petco stores.",
  carousel: {
    slides: [
      { src: "src/assets/img/slide01.jpg", alt: "kitty" },
      { src: "src/assets/img/slide02.jpg", alt: "" }
    ]
  },
  reverse: true
};

const featuredPets = [
  {
    url: "#!",
    img: { src: "src/assets/img/img-pet-01.jpg", alt: "Chewie fka Monkey" },
    title: "Chewie fka Monkey",
    text: "Chewie is a big sweetheart who loves taking over your side of the bed. He also loves attention and affection from his people and gets along well …",
    share: true,
    buttonLink: { text: "Learn more", url: "#!" }
  },
  {
    url: "#!",
    img: { src: "src/assets/img/img-pet-02.jpg" },
    title: "Slim aka Spunk",
    text: "Slim (aka Spunk) is a big fellow with an equally big heart! This wonderful guy is bonded with Magic, on whom he relies for comfort and love. As a bonded …",
    share: true,
    buttonLink: { text: "Learn more", url: "#!" }
  },
  {
    url: "#!",
    img: { src: "src/assets/img/img-pet-03.jpg" },
    title: "Boo Boo",
    text: "Boo Boo loves tennis balls! He likes to play with them, walk with them, and swim in our doggie pools with them. If you have a stash of tennis balls, Boo Boo …",
    share: true,
    buttonLink: { text: "Learn more", url: "#!" }
  }
];

const cards = [
  {
    url: "#!",
    img: { src: "src/assets/img/icon-pet.svg", alt: "Adopt" },
    title: "Adopt",
    text: "Over 16,000 animals enter our shelters in hopes of finding a home to call their own. Is your new family member waiting for you?"
  },
  {
    url: "#!",
    img: { src: "src/assets/img/icon-volunteer.svg", alt: "Volunteer" },
    title: "Volunteer",
    text: "The Brandywine Valley SPCA has a wide variety of volunteer opportunities at both our Delaware and Pennsylvania campuses."
  },
  {
    url: "#!",
    img: { src: "src/assets/img/icon-dog-house.svg", alt: "Foster" },
    title: "Foster",
    text: "We’re saving more babies than ever, and one of the best ways for you to help is to become a foster."
  },
  {
    url: "#!",
    img: {
      src: "src/assets/img/icon-father-and-son.svg",
      alt: "Get kids involved"
    },
    title: "Get kids involved",
    text: "Is your child interested in volunteering? If you are between 8-12 years of age, you can join our junior volunteer program!"
  }
];

const cardsForPet = [
  {
    url: "#!",
    img: { src: "src/assets/img/icon-heart-rate.svg", alt: "Wellness clinic" },
    title: "Wellness clinic",
    text: "Low-cost, quality veterinary services available to the public"
  },
  {
    url: "#!",
    img: { src: "src/assets/img/icon-dog.svg", alt: "Spay & neuter" },
    title: "Spay & neuter",
    text: "Low-cost spay and neutering services for your pet"
  },
  {
    url: "#!",
    img: { src: "src/assets/img/icon-pet-shop.svg", alt: "Daycare & boarding" },

    title: "Daycare & boarding",
    text: "Luxury boarding & daycare for pampered pets"
  }
];

const cardsDonations = [
  {
    url: "#!",
    img: { src: "src/assets/img/img-pet-04.jpg", alt: "" },
    title: "Save a Life",
    text: "Every dollar you donate will go to the programs and services that help save the lives of thousands of homeless animals each year.",
    button: { variant: "secondary", text: "Save a life", url: "#!" }
  },
  {
    url: "#!",
    img: { src: "src/assets/img/img-pet-05.jpg", alt: "" },
    title: "Circle of Life",
    text: "Your generous monthly donation helps provide shelter, food, and medical care to thousands of animals who enter our shelters each year.",
    button: { variant: "secondary", text: "Become a member", url: "#!" }
  },
  {
    url: "#!",
    img: { src: "src/assets/img/img-pet-06.jpg", alt: "" },
    title: "1929 Society",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non.",
    button: { variant: "secondary", text: "Join the society", url: "#!" }
  }
];

const postCardsSectionData = {
  title: "What’s happening at BVSPCA",
  blogPosts: [
    {
      url: "#!",
      img: { src: "src/assets/img/img-pet-07.jpg", alt: "" },
      title: "$5 off our 5K Color Run",
      text: "We're so excited to be offering a number of new activities to this year's line-up of fun, including a Color Run for you and your furry running partner. Register today!",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/img-pet-08.jpg", alt: "" },
      title: "Walk-4-Paws",
      text: "We’re bringing back the most popular activities PLUS we’ve changed our 5K to a Color Run, expanded Yoga with Puppies, added live music, and added more fun things.",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/content-img-03.jpg", alt: "" },
      title: "Critter Camp",
      text: "Kids ages 7 to 12 will have a howling good time at our Critter Camp day camp. Our next session is a Spring-themed Weekend: April 9 – April 10 for kids ages 10 through 12. ",
      buttonLink: { text: "Read more", url: "#!" }
    }
  ],
  buttons: [
    { variant: "primary", text: "View all news, events & resources", url: "#!" }
  ]
};

const marqueeSlides = [
  {
    url: "#",
    img: { src: "src/assets/img/sponsors/petco-love.png", alt: "petco logo" }
  },
  {
    url: "#",
    img: { src: "src/assets/img/sponsors/discover.png", alt: "discover logo" }
  },
  {
    url: "#",
    img: {
      src: "src/assets/img/sponsors/faegre-drinker.png",
      alt: "faegre-drinker logo"
    }
  },
  {
    url: "#",
    img: { src: "src/assets/img/sponsors/idexx.png", alt: "idexx logo" }
  },
  {
    url: "#",
    img: { src: "src/assets/img/sponsors/merck.png", alt: "merck logo" }
  },
  {
    url: "#",
    img: {
      src: "src/assets/img/sponsors/barnes-thornbur.png",
      alt: "barnes-thornbur logo"
    }
  }
];

const imgGrid = [
  {
    img: { src: "src/assets/img/merch-img-01.jpg", alt: "" }
  },
  {
    img: { src: "src/assets/img/merch-img-02.jpg", alt: "" }
  },
  {
    img: { src: "src/assets/img/merch-img-03.jpg", alt: "" }
  },
  {
    img: { src: "src/assets/img/merch-img-04.jpg", alt: "" }
  }
];

const postSectionData = {
  img: { src: "src/assets/img/content-img-02.jpg", alt: "" },
  title: "Need help?",
  text: "Supporting our community by providing the resources needed to improve the lives and well-being of animals is what we do",

  textGrid: [
    {
      title: "Lost & found pets",
      text: "Losing your furry friend or finding another’s beloved animal can be a very harrowing and emotional process. ",
      button: { text: "Learn more", url: "#!" }
    },
    {
      title: "Reporting animal cruelty",
      text: "Our Animal Protective Services Department works tirelessly to prevent abuse and protect companion animals. ",
      button: { text: "Learn more", url: "#!" }
    },
    {
      title: "Pet food pantry",
      text: "Free food assistance for pet owners living below the poverty line. ",
      button: { text: "Learn more", url: "#!" }
    },
    {
      title: "Behavior resources",
      text: "We offer phone, e-mail and on-site support for our adopters, foster families and pet owners seeking behavior assistance.",
      button: { text: "Learn more", url: "#!" }
    }
  ],
  buttons: [{ variant: "primary", text: "See all ways to get help", url: "#!" }]
};

const infoCardData = {
  img: { src: "src/assets/img/content-img-01.jpg", alt: "work" },
  title: "We place over 16,000 animals a year",
  text: "We were the first open-admission no-kill shelter in Pennsylvania, and we have led Delaware to becoming the first no-kill state in the United States.",
  buttons: [{ variant: "primary", text: "Learn more about our impact" }]
};
</script>
