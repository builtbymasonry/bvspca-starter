<template>
  <HeroInner v-bind="heroInnerData" class="bg-gray-dark" />

  <PostCardsSection v-bind="postCardsDogsData" />

  <section class="bg-gray-dark py-14 lg:py-28">
    <div class="mx-auto max-w-7xl px-4">
      <h2 class="mb-10 text-center text-2xl font-bold md:text-3xl xl:text-5xl">
        All adoptable dogs
      </h2>

      <FilterBar class="mb-10" />

      <div
        class="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 sm:gap-y-20 lg:grid-cols-3"
      >
        <CardPetProfile
          v-for="profile in profileList"
          :key="profile.title"
          v-bind="profile"
        />
      </div>

      <Pagination class="mt-16 justify-center lg:mt-24" />
    </div>
  </section>

  <section class="relative pt-20 pb-40 sm:pt-32 sm:pb-56 md:pb-28">
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

  <section
    class="bg-skew bg-skew-reverse bg-purple pt-8 pb-20 text-white md:py-24 lg:py-32"
  >
    <div class="mx-auto max-w-4xl px-4">
      <PostInline v-bind="postInlineData" />
    </div>
  </section>

  <PostCardsSection v-bind="postCardsSectionData" />
</template>

<script setup>
import Button from "@/components/Button.vue";
import HeroInner from "@/components/HeroInner.vue";
import PostCard from "@/components/PostCard.vue";
import CardPetProfile from "@/components/CardPetProfile.vue";
import PostInline from "@/components/PostInline.vue";
import InfoCard from "@/components/InfoCard.vue";
import PostCardsSection from "@/components/PostCardsSection.vue";
import FilterBar from "@/components/FilterBar.vue";
import Pagination from "@/components/Pagination.vue";

const heroInnerData = {
  title: "Adopt a dog",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
  img: { src: "src/assets/img/hero-image-18.jpg", alt: "" }
};

const profileList = [
  {
    url: "/pet-profile",
    img: { src: "src/assets/img/img-pet-01.jpg", alt: "Chewie fka Monkey" },
    title: "Chewie fka Monkey",
    description: [
      { title: "Age:", value: "2 years 4 months 5 days" },
      { title: "Gender:", value: "Female" },
      { title: "Breed:", value: "Retriever, Labrador/Mix" },
      { title: "Location:", value: "WC Main Dog Kennel" },
      { title: "ID:", value: "49144731" }
    ]
  },
  {
    url: "/pet-profile",
    img: { src: "src/assets/img/img-pet-02.jpg" },
    title: "Slim aka Spunk",
    description: [
      { title: "Age:", value: "2 years 4 months 5 days" },
      { title: "Gender:", value: "Female" },
      { title: "Breed:", value: "Retriever, Labrador/Mix" },
      { title: "Location:", value: "WC Main Dog Kennel" },
      { title: "ID:", value: "49144731" }
    ]
  },
  {
    url: "/pet-profile",
    img: { src: "src/assets/img/img-pet-03.jpg" },
    title: "Boo Boo",
    description: [
      { title: "Age:", value: "2 years 4 months 5 days" },
      { title: "Gender:", value: "Female" },
      { title: "Breed:", value: "Retriever, Labrador/Mix" },
      { title: "Location:", value: "WC Main Dog Kennel" },
      { title: "ID:", value: "49144731" }
    ]
  },
  {
    url: "/pet-profile",
    img: { src: "src/assets/img/img-pet-01.jpg", alt: "Chewie fka Monkey" },
    title: "Chewie fka Monkey",
    description: [
      { title: "Age:", value: "2 years 4 months 5 days" },
      { title: "Gender:", value: "Female" },
      { title: "Breed:", value: "Retriever, Labrador/Mix" },
      { title: "Location:", value: "WC Main Dog Kennel" },
      { title: "ID:", value: "49144731" }
    ]
  },
  {
    url: "/pet-profile",
    img: { src: "src/assets/img/img-pet-02.jpg" },
    title: "Slim aka Spunk",
    description: [
      { title: "Age:", value: "2 years 4 months 5 days" },
      { title: "Gender:", value: "Female" },
      { title: "Breed:", value: "Retriever, Labrador/Mix" },
      { title: "Location:", value: "WC Main Dog Kennel" },
      { title: "ID:", value: "49144731" }
    ]
  },
  {
    url: "/pet-profile",
    img: { src: "src/assets/img/img-pet-03.jpg" },
    title: "Boo Boo",
    description: [
      { title: "Age:", value: "2 years 4 months 5 days" },
      { title: "Gender:", value: "Female" },
      { title: "Breed:", value: "Retriever, Labrador/Mix" },
      { title: "Location:", value: "WC Main Dog Kennel" },
      { title: "ID:", value: "49144731" }
    ]
  },
  {
    url: "/pet-profile",
    img: { src: "src/assets/img/img-pet-01.jpg", alt: "Chewie fka Monkey" },
    title: "Chewie fka Monkey",
    description: [
      { title: "Age:", value: "2 years 4 months 5 days" },
      { title: "Gender:", value: "Female" },
      { title: "Breed:", value: "Retriever, Labrador/Mix" },
      { title: "Location:", value: "WC Main Dog Kennel" },
      { title: "ID:", value: "49144731" }
    ]
  },
  {
    url: "/pet-profile",
    img: { src: "src/assets/img/img-pet-02.jpg" },
    title: "Slim aka Spunk",
    description: [
      { title: "Age:", value: "2 years 4 months 5 days" },
      { title: "Gender:", value: "Female" },
      { title: "Breed:", value: "Retriever, Labrador/Mix" },
      { title: "Location:", value: "WC Main Dog Kennel" },
      { title: "ID:", value: "49144731" }
    ]
  },
  {
    url: "/pet-profile",
    img: { src: "src/assets/img/img-pet-03.jpg" },
    title: "Boo Boo",
    description: [
      { title: "Age:", value: "2 years 4 months 5 days" },
      { title: "Gender:", value: "Female" },
      { title: "Breed:", value: "Retriever, Labrador/Mix" },
      { title: "Location:", value: "WC Main Dog Kennel" },
      { title: "ID:", value: "49144731" }
    ]
  }
];

const infoCardData = {
  title: "We place over 16,000 animals a year",
  text: "We were the first open-admission no-kill shelter in Pennsylvania, and we have led Delaware to becoming the first no-kill state in the United States.",
  img: { src: "src/assets/img/content-img-01.jpg", alt: "" },
  buttons: [{ text: "Learn more about our impact", url: "#!" }]
};

const postInlineData = {
  title: "Give back to your community",
  text: [
    "Open the door to endless possibilities. Together, we will create positive change within our community, help control the homeless animal population, and improve the lives of pets and their families."
  ],
  img: { src: "src/assets/img/content-img-04.jpg", alt: "" },
  reverse: true,
  buttons: [
    { variant: "secondary", text: "Donate", url: "#!" },
    { variant: "outlineSecondary", text: "Sponsor", url: "#!" }
  ]
};

const postCardsDogsData = {
  title: "Featured dogs",
  blogPosts: [
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
  ]
};

const postCardsSectionData = {
  title: "Dog adoption related events & resources",
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
  buttons: [{ text: "View all news, events & resources", url: "#!" }]
};
</script>
