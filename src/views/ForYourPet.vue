<template>
  <div>
    <HeroInner v-bind="heroInnerData" class="bg-gray-dark" />
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
            <Card v-bind="card" />
          </div>
        </div>
      </div>
    </section>

    <section class="relative pt-20 pb-40 sm:pt-32 sm:pb-56 md:pb-28">
      <div class="absolute top-0 left-0 h-full w-full">
        <img
          class="absolute top-0 left-0 h-full w-full object-cover"
          src="@/assets/img/bg-image-01.jpg"
          alt="image description"
        />
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
          <PostCard v-for="post in blogPosts" :key="post.title" v-bind="post" />
        </div>

        <div
          class="mt-16 flex flex-col items-center justify-center md:flex-row"
        >
          <Button
            variant="primary"
            text="View all news, events & resources"
            url="#!"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue";
import HeroInner from "@/components/HeroInner.vue";
import Card from "@/components/Card.vue";
import PostCard from "@/components/PostCard.vue";
import PostInline from "@/components/PostInline.vue";
import InfoCard from "@/components/InfoCard.vue";

const heroInnerData = {
  title: "For your pet",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
  img: { src: "src/assets/img/hero-image-02.jpg", alt: "Welness clinic" }
};

const cards = [
  {
    url: "#!",
    img: { src: "src/assets/img/icon-heart-rate.svg", alt: "" },
    title: "Adopt",
    text: "Over 16,000 animals enter our shelters in hopes of finding a home to call their own. Is your new family member waiting for you?"
  },
  {
    url: "#!",
    img: { src: "src/assets/img/icon-dog.svg", alt: "" },
    title: "Volunteer",
    text: "The Brandywine Valley SPCA has a wide variety of volunteer opportunities at both our Delaware and Pennsylvania campuses."
  },
  {
    url: "#!",
    img: { src: "src/assets/img/icon-pet-shop.svg", alt: "" },
    title: "Foster",
    text: "We’re saving more babies than ever, and one of the best ways for you to help is to become a foster."
  },
  {
    url: "#!",
    img: { src: "src/assets/img/icon-pet-insurance.svg", alt: "" },
    title: "Get kids involved",
    text: "Is your child interested in volunteering? If you are between 8-12 years of age, you can join our junior volunteer program!"
  },
  {
    url: "#!",
    img: { src: "src/assets/img/icon-cat.svg", alt: "" },
    title: "Get kids involved",
    text: "Is your child interested in volunteering? If you are between 8-12 years of age, you can join our junior volunteer program!"
  }
];

const postInlineData = {
  title: "Give back to your community",
  text: "Open the door to endless possibilities. Together, we will create positive change within our community, help control the homeless animal population, and improve the lives of pets and their families.",
  img: { src: "src/assets/img/content-img-04.jpg", alt: "" },
  reverse: true,
  buttons: [
    {
      variant: "secondary",
      text: "Donate",
      url: "#!"
    },
    {
      variant: "outlineSecondary",
      text: "Sponsor",
      url: "#!"
    }
  ]
};

const blogPosts = [
  {
    url: "#!",
    img: { src: "src/assets/img/img-pet-07.jpg", alt: "" },
    title: "$5 off our 5K Color Run",
    text: "We're so excited to be offering a number of new activities to this year's line-up of fun, including a Color Run for you and your furry running partner. Register today!",
    buttonLink: { text: "Read more" }
  },
  {
    url: "#!",
    img: { src: "src/assets/img/img-pet-08.jpg", alt: "" },
    title: "Walk-4-Paws",
    text: "We’re bringing back the most popular activities PLUS we’ve changed our 5K to a Color Run, expanded Yoga with Puppies, added live music, and added more fun things.",
    buttonLink: { text: "Read more" }
  },
  {
    url: "#!",
    img: { src: "src/assets/img/content-img-03.jpg", alt: "" },
    title: "Critter Camp",
    text: "Kids ages 7 to 12 will have a howling good time at our Critter Camp day camp. Our next session is a Spring-themed Weekend: April 9 – April 10 for kids ages 10 through 12. ",
    buttonLink: { text: "Read more" }
  }
];

const infoCardData = {
  title: "We place over 16,000 animals a year",
  text: "We were the first open-admission no-kill shelter in Pennsylvania, and we have led Delaware to becoming the first no-kill state in the United States.",
  img: { src: "src/assets/img/content-img-01.jpg", alt: "" },
  buttons: [
    { variant: "primary", text: "Learn more about our impact", url: "#!" }
  ]
};
</script>
