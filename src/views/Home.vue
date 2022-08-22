<template>
  <div>
    <Hero v-bind="heroData" />

    <Stats />

    <section class="py-12 md:py-20 lg:py-28">
      <div class="px-4 mx-auto max-w-7xl">
        <h2
          class="mb-10 text-2xl font-bold text-center md:mb-16 md:text-3xl xl:text-5xl"
        >
          You can make a difference by getting involved today
        </h2>

        <div class="flex flex-wrap justify-center gap-y-10 md:-mx-0 md:gap-y-8">
          <div
            class="w-full px-6 sm:w-1/2 md:px-4 lg:w-1/4"
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

    <PostCardsSection
      class="pt-12 pb-5 text-white bg-skew bg-purple lg:pt-20 lg:pb-5"
      v-bind="postCardsPetsData"
    />

    <section class="relative pt-48 pb-28 sm:pt-60 md:pb-0">
      <div class="absolute top-0 left-0 w-full h-full">
        <picture>
          <source
            media="(max-width: 767px)"
            srcset="/img/bg-image-01-sm.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcset="/img/bg-image-01.jpg"
          />
          <img
            class="absolute top-0 left-0 object-cover w-full h-full"
            src="/img/bg-image-01.jpg"
            alt="background"
          />
        </picture>
      </div>

      <InfoCard v-bind="infoCardData" />
    </section>

    <section class="pt-16 pb-20 bg-gray-dark md:pt-56 md:pb-24">
      <div class="mx-auto max-w-[61rem] px-4">
        <h2
          class="mb-10 text-2xl font-bold text-center md:mb-16 md:text-3xl xl:text-5xl"
        >
          For your pet
        </h2>

        <div class="flex flex-wrap justify-center gap-y-10 md:-mx-0 md:gap-y-8">
          <div
            class="w-full px-6 sm:w-1/2 md:px-4 lg:w-1/3"
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

    <section class="py-14 lg:py-28">
      <div class="px-4 mx-auto max-w-7xl">
        <PostModule v-bind="postModuleData" />
      </div>
    </section>

    <section class="pt-10 pb-40 md:pb-60">
      <div class="max-w-5xl px-4 mx-auto">
        <PostModule class="text-xs" v-bind="postModuleData2" />
      </div>
    </section>

    <section
      class="pt-8 pb-20 text-white bg-skew bg-skew-reverse bg-purple lg:pb-28"
    >
      <div class="mx-auto max-w-[67rem] px-4">
        <h2
          class="mb-10 text-2xl font-bold text-center md:mb-16 md:text-3xl xl:text-5xl"
        >
          Great or small, all donations are appreciated
        </h2>

        <div
          class="grid grid-cols-1 text-center gap-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:gap-16"
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

    <section class="py-14 lg:py-28">
      <div class="max-w-5xl px-4 mx-auto">
        <PostModule class="text-sm" v-bind="postModuleData3" />
      </div>
    </section>

    <PostCardsSection class="bg-gray-dark" v-bind="postCardsSectionData" />

    <section class="hidden py-12 bg-white md:block">
      <h2 class="px-5 mb-10 text-2xl font-bold text-center lg:text-4xl">
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
import PostCardsSection from "@/components/sections/PostCardsSection.vue";

import PostModule from "@/components/PostModule.vue";

import InfoCard from "@/components/InfoCard.vue";

import MarqueeSlider from "@/components/MarqueeSlider.vue";

const heroData = {
  img: { src: "/img/hero-image-01.jpg", alt: "family" },
  title: "Putting the human back in humane",
  text: "We strive to end animal suffering and empower communities to find the heart in humanity",
  buttons: [
    { text: "Save a life", url: "#!" },
    { variant: "outline", text: "Learn more", url: "#!" }
  ]
};

const postModuleData = {
  img: { src: "/img/content-img-02.jpg", alt: "" },
  title: { text: "Need help?", size: "lg" },
  text: [
    "Supporting our community by providing the resources needed to improve the lives and well-being of animals is what we do"
  ],
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
  buttons: [{ text: "See all ways to get help", url: "#!" }],
  layoutAlt: true,
  stretchColumns: true
};

const postModuleData2 = {
  title: { text: "A second chance at nine lives", size: "md" },
  text: [
    "Whiskers got his leg caught in a fox trap after getting loose from his home. He lost a lot of skin, suffered nerve damage,   ahd a quickly spreading infection. His family brought him to our New Castle Animal Health Center. They couldn’t afford the entirety od his care and were condisdering euthanasia since the infection would soon be life-threatening. Thanks to our pet retention grant from Petco Love, we were able to bridge what his owners couldn’t afford and saved Whiskers by amputating the badly damaged leg. Whiskers now lives a life of three-legged luxury. We’re grateful for Petco Love’s support, which results from all of you who donate at checkout at the Petco stores."
  ],
  carousel: {
    slides: [
      { src: "/img/slide01.jpg", alt: "kitty" },
      { src: "/img/slide02.jpg", alt: "" }
    ]
  },
  reverse: true
};

const postModuleData3 = {
  title: {
    text: "Support our lifesaving work and look good doing it",
    size: "lg"
  },
  text: [
    "Get your paws on our original and limited edition merchandise. Your purchases go towards the care of the 16,000+ animals we take in each year. "
  ],
  imgGrid: [
    {
      img: { src: "/img/merch-img-01.jpg", alt: "" }
    },
    {
      img: { src: "/img/merch-img-02.jpg", alt: "" }
    },
    {
      img: { src: "/img/merch-img-03.jpg", alt: "" }
    },
    {
      img: { src: "/img/merch-img-04.jpg", alt: "" }
    }
  ],
  buttons: [{ text: "Shop now", url: "#!" }]
};

const postCardsPetsData = {
  title: "Featured dogs",
  blogPosts: [
    {
      url: "#!",
      img: { src: "/img/img-pet-01.jpg", alt: "Chewie fka Monkey" },
      title: { text: "Chewie fka Monkey", size: "md"},
      text: "Chewie is a big sweetheart who loves taking over your side of the bed. He also loves attention and affection from his people and gets along well …",
      share: true,
      buttonLink: { text: "Learn more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "/img/img-pet-02.jpg" },
      title: { text: "Slim aka Spunk", size: "md"},
      text: "Slim (aka Spunk) is a big fellow with an equally big heart! This wonderful guy is bonded with Magic, on whom he relies for comfort and love. As a bonded …",
      share: true,
      buttonLink: { text: "Learn more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "/img/img-pet-03.jpg" },
      title: { text: "Boo Boo", size: "md"},
      text: "Boo Boo loves tennis balls! He likes to play with them, walk with them, and swim in our doggie pools with them. If you have a stash of tennis balls, Boo Boo …",
      share: true,
      buttonLink: { text: "Learn more", url: "#!" }
    }
  ],
  buttons: [
    { variant: "secondary", text: "All adoptable dogs", url: "#!" },
    { variant: "secondary", text: "All adoptable cats", url: "#!" }
  ]
};

const cards = [
  {
    url: "#!",
    img: { src: "/img/icon-pet.svg", alt: "Adopt" },
    title: "Adopt",
    text: "Over 16,000 animals enter our shelters in hopes of finding a home to call their own. Is your new family member waiting for you?"
  },
  {
    url: "#!",
    img: { src: "/img/icon-volunteer.svg", alt: "Volunteer" },
    title: "Volunteer",
    text: "The Brandywine Valley SPCA has a wide variety of volunteer opportunities at both our Delaware and Pennsylvania campuses."
  },
  {
    url: "#!",
    img: { src: "/img/icon-dog-house.svg", alt: "Foster" },
    title: "Foster",
    text: "We’re saving more babies than ever, and one of the best ways for you to help is to become a foster."
  },
  {
    url: "#!",
    img: {
      src: "/img/icon-father-and-son.svg",
      alt: "Get kids involved"
    },
    title: "Get kids involved",
    text: "Is your child interested in volunteering? If you are between 8-12 years of age, you can join our junior volunteer program!"
  }
];

const cardsForPet = [
  {
    url: "#!",
    img: { src: "/img/icon-heart-rate.svg", alt: "Wellness clinic" },
    title: "Wellness clinic",
    text: "Low-cost, quality veterinary services available to the public"
  },
  {
    url: "#!",
    img: { src: "/img/icon-dog.svg", alt: "Spay & neuter" },
    title: "Spay & neuter",
    text: "Low-cost spay and neutering services for your pet"
  },
  {
    url: "#!",
    img: { src: "/img/icon-pet-shop.svg", alt: "Daycare & boarding" },

    title: "Daycare & boarding",
    text: "Luxury boarding & daycare for pampered pets"
  }
];

const cardsDonations = [
  {
    url: "#!",
    img: { src: "/img/img-pet-04.jpg", alt: "" },
    title: { text: "Save a Life"},
    text: "Every dollar you donate will go to the programs and services that help save the lives of thousands of homeless animals each year.",
    button: { variant: "secondary", text: "Save a life", url: "#!" }
  },
  {
    url: "#!",
    img: { src: "/img/img-pet-05.jpg", alt: "" },
    title: { text: "Circle of Life"},
    text: "Your generous monthly donation helps provide shelter, food, and medical care to thousands of animals who enter our shelters each year.",
    button: { variant: "secondary", text: "Become a member", url: "#!" }
  },
  {
    url: "#!",
    img: { src: "/img/img-pet-06.jpg", alt: "" },
    title: { text: "1929 Society"},
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non.",
    button: { variant: "secondary", text: "Join the society", url: "#!" }
  }
];

const postCardsSectionData = {
  title: "What’s happening at BVSPCA",
  blogPosts: [
    {
      url: "#!",
      img: { src: "/img/img-pet-07.jpg", alt: "" },
      title: { text: "$5 off our 5K Color Run", size: "md"},
      text: "We're so excited to be offering a number of new activities to this year's line-up of fun, including a Color Run for you and your furry running partner. Register today!",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "/img/img-pet-08.jpg", alt: "" },
      title: { text: "Walk-4-Paws", size: "md"},
      text: "We’re bringing back the most popular activities PLUS we’ve changed our 5K to a Color Run, expanded Yoga with Puppies, added live music, and added more fun things.",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "/img/content-img-03.jpg", alt: "" },
      title: { text: "Critter Camp", size: "md"},
      text: "Kids ages 7 to 12 will have a howling good time at our Critter Camp day camp. Our next session is a Spring-themed Weekend: April 9 – April 10 for kids ages 10 through 12. ",
      buttonLink: { text: "Read more", url: "#!" }
    }
  ],
  buttons: [{ text: "View all news, events & resources", url: "#!" }]
};

const marqueeSlides = [
  {
    url: "#",
    img: { src: "/img/sponsors/petco-love.png", alt: "petco logo" }
  },
  {
    url: "#",
    img: { src: "/img/sponsors/discover.png", alt: "discover logo" }
  },
  {
    url: "#",
    img: {
      src: "/img/sponsors/faegre-drinker.png",
      alt: "faegre-drinker logo"
    }
  },
  {
    url: "#",
    img: { src: "/img/sponsors/idexx.png", alt: "idexx logo" }
  },
  {
    url: "#",
    img: { src: "/img/sponsors/merck.png", alt: "merck logo" }
  },
  {
    url: "#",
    img: {
      src: "/img/sponsors/barnes-thornbur.png",
      alt: "barnes-thornbur logo"
    }
  }
];

const infoCardData = {
  img: { src: "/img/content-img-01.jpg", alt: "work" },
  title: "We place over 16,000 animals a year",
  text: "We were the first open-admission no-kill shelter in Pennsylvania, and we have led Delaware to becoming the first no-kill state in the United States.",
  buttons: [{ text: "Learn more about our impact" }]
};
</script>
