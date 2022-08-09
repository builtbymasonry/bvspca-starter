<template>
  <HeroInner v-bind="heroInnerData" class="bg-gray-dark" />

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-6xl px-4">
      <PostModule class="text-sm" v-bind="postModuleData" />
    </div>
  </section>

  <section class="bg-gray-dark py-14 lg:py-28">
    <div class="mx-auto max-w-5xl px-4">
      <div
        class="mx-auto flex max-w-xs flex-col justify-center gap-10 text-center text-xs sm:max-w-none sm:flex-row sm:gap-5 lg:gap-20"
      >
        <div v-for="item in itemsListData" :key="item.title" class="px-5 sm:px-0 sm:w-1/3">
          <img class="mx-auto mb-6" v-bind="item.img" />
          <h3 class="mb-2 text-xl font-bold lg:text-2xl">{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-purple py-14 text-white lg:py-28">
    <div class="mx-auto max-w-7xl px-4">
      <h2 class="mb-8 text-center text-2xl font-bold md:text-3xl xl:text-4xl">
        Who we’re looking for
      </h2>
      <List
        class="mx-auto max-w-5xl text-xs font-bold sm:text-sm md:columns-2 md:gap-10 lg:gap-14 lg:px-14"
        v-bind="listData"
      />
    </div>
  </section>

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-7xl px-4">
      <h2 class="mb-8 md:mb-14 text-center text-2xl font-bold md:text-3xl xl:text-5xl">
        Available positions
      </h2>

      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div v-for="card in cardsPosition" :key="card.title">
          <CardPosition v-bind="card" />
        </div>
      </div>
    </div>
  </section>

  <TextBanner class="bg-gray-dark" v-bind="textBannerData" />

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-5xl px-4">
      <PostModule class="text-sm" v-bind="postModuleData2" />
    </div>
  </section>
</template>

<script setup>
import Button from "@/components/Button.vue";
import HeroInner from "@/components/HeroInner.vue";
import PostModule from "@/components/PostModule.vue";
import List from "@/components/List.vue";
import CardPosition from "@/components/CardPosition.vue";
import TextBanner from "@/components/TextBanner.vue";

const heroInnerData = {
  title: "Careers",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
  img: { src: "src/assets/img/hero-image-15.jpg", alt: "" }
};

const postModuleData = {
  title: { text: "Our company culture", size: "md"},
  text: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  ],
  buttons: [{ text: "Learn more about us", url: "#!" }],
  carousel: {
    slides: [
      { src: "src/assets/img/slide07.jpg", alt: "slide alt1" },
      { src: "src/assets/img/slide06.jpg", alt: "slide alt2" },
      { src: "src/assets/img/slide03.jpg", alt: "slide alt3" },
      { src: "src/assets/img/slide04.jpg", alt: "slide alt4" }
    ]
  },
  reverse: true
};

const postModuleData2 = {
  title: { text: "Support our lifesaving work and look good doing it", size: "lg"},
  text: ["Get your paws on our original and limited edition merchandise. Your purchases go towards the care of the 16,000+ animals we take in each year. "],
  imgGrid: [
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
  ],
  buttons: [
    { text: "Shop now", url: "#!" },
  ]
};

const itemsListData = [
  {
    title: "Core value 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: { src: "src/assets/img/icon-rocket.svg", alt: "" }
  },
  {
    title: "Core value 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: { src: "src/assets/img/icon-badge.svg", alt: "" }
  },
  {
    title: "Core value 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: { src: "src/assets/img/icon-star.svg", alt: "" }
  }
];

const listData = {
  data: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  ]
};

const cardsPosition = [
  {
    title: "Here is a job title, it can be pretty long",
    subtitle: "Multiple locations",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttons: [
      { type: "button", text: "Apply now", url: "#!!" },
      { type: "buttonLink", text: "View more details", url: "#!" }
    ]
  },
  {
    title: "Here is a job title, it can be pretty long",
    subtitle: "New Castle, DE",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttons: [
      { type: "button", text: "Apply now", url: "#!" },
      { type: "buttonLink", text: "View more details", url: "#!" }
    ]
  },
  {
    title: "Here is a job title, it can be pretty long",
    subtitle: "West Chester, PA",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttons: [
      { type: "button", text: "Apply now", url: "#!" },
      { type: "buttonLink", text: "View more details", url: "#!" }
    ]
  },
  {
    title: "Here is a job title, it can be pretty long",
    subtitle: "Georgetown, DE",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttons: [
      { type: "button", text: "Apply now", url: "#!" },
      { type: "buttonLink", text: "View more details", url: "#!" }
    ]
  }
];

const textBannerData = {
  title: "Have questions or need help?",
  text: "Give us a call or stop by one of our locations for more help.",
  buttons: [{ text: "Contact us" }, { variant: "outline", text: "Locations" }]
};

const imgGrid = [
  { img: { src: "src/assets/img/merch-img-01.jpg", alt: "" } },
  { img: { src: "src/assets/img/merch-img-02.jpg", alt: "" } },
  { img: { src: "src/assets/img/merch-img-03.jpg", alt: "" } },
  { img: { src: "src/assets/img/merch-img-04.jpg", alt: "" } }
];
</script>
