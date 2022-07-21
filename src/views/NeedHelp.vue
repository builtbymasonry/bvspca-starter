<template>
  <div>
    <HeroInner v-bind="heroInnerData" class="bg-gray-dark" />

    <section class="py-14 lg:py-28">
      <div class="mx-auto max-w-5xl px-4">
        <PostInline v-bind="postInlineData" />
      </div>
    </section>

    <section class="py-12 md:py-20 lg:py-28 bg-gray-dark">
      <div class="mx-auto max-w-5xl px-4">
        <h2 class="mb-10 text-center text-2xl font-bold md:mb-16 md:text-3xl xl:text-5xl">
          How can we help?
        </h2>

        <div class="-mx-4 flex flex-wrap justify-center gap-y-10 sm:gap-y-8">
          <div
            class="px-12 md:px-4 w-full sm:w-1/2 lg:w-1/3"
            v-for="card in cards"
            :key="card.title"
          >
            <Card v-bind="card" />
          </div>
        </div>
      </div>
    </section>

    <TextBanner v-bind="textBannerData" />

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
        <PostInline v-bind="postInlineData2" />
      </div>
    </section>

    <section class="py-12 lg:py-20">
      <div class="mx-auto max-w-7xl px-4">
        <h2
          class="mb-10 text-center text-2xl font-bold tracking-wide md:mb-16 md:text-3xl xl:text-5xl"
        >
          Need help related news & events
        </h2>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 sm:gap-8"
        >
          <PostCard
            v-for="post in blogPosts"
            :key="post.title"
            v-bind="post"
          />
        </div>

        <div
          class="mt-16 flex flex-wrap flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-5 lg:space-x-10"
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
import PostInline from "@/components/PostInline.vue";
import Card from "@/components/Card.vue";
import TextBanner from "@/components/TextBanner.vue";
import InfoCard from "@/components/InfoCard.vue";
import PostCard from "@/components/PostCard.vue";

const heroInnerData = {
  title: "Need help?",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
  img: { src: "src/assets/img/hero-image-07.jpg", alt: "Need help?" }
};

const postInlineData = {
  img: { src: "src/assets/img/content-img-13.jpg", alt: "" },
  title: "Whatever you need, we’re here to help",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi. Pellentesque finibus lorem dignissim bibendum pretium. Maecenas efficitur varius feugiat. Vestibulum eu mi ac diam mollis euismod.",
  buttons: [{ variant: "primary", text: "Learn more about us", url: "#!" }]
};

const cards = [
  {
    url: "#!",
    img: { src: "src/assets/img/icon-leash.svg", alt: "" },
    title: "Lost & found pets",
    text: "Losing your furry friend or finding another’s beloved animal can be a very harrowing and emotional process."
  },
  {
    url: "#!",
    img: { src: "src/assets/img/icon-bunny.svg", alt: "" },
    title: "Reporting animal cruelty",
    text: "Our Animal Protective Services Department works tirelessly to prevent abuse and protect companion animals."
  },
  {
    url: "#!",
    img: { src: "src/assets/img/icon-animal-shelter.svg", alt: "" },
    title: "Rehoming consultation",
    text: "Sometimes emergencies happen, and families are forced to part with a pet. We can offer guidance and tips to help you find a new family for your dog or cat."
  },
  {
    url: "#!",
    img: { src: "src/assets/img/icon-bowl.svg", alt: "" },
    title: "Pet food assistance",
    text: "Free food assistance for pet owners living below the poverty line."
  },
  {
    url: "#!",
    img: { src: "src/assets/img/icon-ribbon.svg", alt: "" },
    title: "Domestic violence survivors",
    text: "We provide victims of abuse free housing and care for their pets, as they transition to safety."
  },
  {
    url: "#!",
    img: { src: "src/assets/img/icon-whistle.svg", alt: "" },
    title: "Behavior resources",
    text: "We offer phone, e-mail and on-site support for our adopters, foster families and pet owners seeking behavior assistance."
  }
];

const textBannerData = {
  title: "Have questions or need help?",
  text: "Give us a call or stop by one of our healthcare locations for more help.",
  buttons: [
    {
      variant: "primary",
      text: "Contact us"
    },
    {
      variant: "outline",
      text: "Wellness clinic locations"
    }
  ]
};

const infoCardData = {
  title: "We place over 16,000 animals a year",
  text: "We were the first open-admission no-kill shelter in Pennsylvania, and we have led Delaware to becoming the first no-kill state in the United States.",
  img: { src: "src/assets/img/content-img-01.jpg", alt: "" },
  buttons: [
    { variant: "primary", text: "Learn more about our impact", url: "#!" }
  ]
};

const postInlineData2 = {
  title: "Pay it forward, your free time has so much value",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi.",
  img: { src: "src/assets/img/content-img-08.jpg", alt: "" },
  reverse: true,
  buttons: [
    {
      variant: "secondary",
      text: "Get involved",
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
</script>
