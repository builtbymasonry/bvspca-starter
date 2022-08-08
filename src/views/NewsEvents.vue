<template>
  <PostsFeed v-bind="feedData" />

  <section class="py-14 lg:py-28">
    <div class="mx-auto flex max-w-5xl flex-col items-center gap-5 gap-y-10 px-4 text-center lg:flex-row-reverse lg:text-left">
      <div class="relative mx-auto w-full max-w-sm md:max-w-md lg:w-2/3 lg:max-w-full">
        <img
          class="w-full"
          src="src/assets/img/content-img-21.png"
          alt="image description"
        />
      </div>
      <div class="py-2 pr-5 text-xs lg:flex lg:w-1/3 lg:flex-col lg:items-start lg:justify-center">
        <h2 class="mb-3 text-2xl font-bold md:text-3xl xl:text-4xl">
          Check out upcoming events
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
          dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu.
          Suspendisse potenti. Pellentesque eu orci nisi.
        </p>
        <Button class="mt-10" text="View event calendar" url="#!" />
      </div>
    </div>
  </section>

  <section class="py-14 lg:py-28 bg-gray-dark">
    <div class="mx-auto max-w-5xl px-4">
      <PostModule class="text-sm" v-bind="postModuleData" />
    </div>
  </section>
</template>

<script setup>
import Button from "@/components/Button.vue"
import PostsFeed from "@/components/sections/PostsFeed.vue"
import PostModule from "@/components/PostModule.vue"

const feedData = {
  title: "News, events & resources",
  posts: [
    {
      url: "#!",
      img: { src: "src/assets/img/img-pet-07.jpg", alt: "" },
      title: { text: "$5 off our 5K Color Run"},
      text: "We're so excited to be offering a number of new activities to this year's line-up of fun, including a Color Run for you and your furry running partner. Register today!",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/img-pet-08.jpg", alt: "" },
      title: { text: "Walk-4-Paws"},
      text: "We’re bringing back the most popular activities PLUS we’ve changed our 5K to a Color Run, expanded Yoga with Puppies, added live music, and added more fun things.",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/content-img-03.jpg", alt: "" },
      title: { text: "Critter Camp"},
      text: "Kids ages 7 to 12 will have a howling good time at our Critter Camp day camp. Our next session is a Spring-themed Weekend: April 9 – April 10 for kids ages 10 through 12. ",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/img-pet-07.jpg", alt: "" },
      title: { text: "$5 off our 5K Color Run"},
      text: "We're so excited to be offering a number of new activities to this year's line-up of fun, including a Color Run for you and your furry running partner. Register today!",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/img-pet-08.jpg", alt: "" },
      title: { text: "Walk-4-Paws"},
      text: "We’re bringing back the most popular activities PLUS we’ve changed our 5K to a Color Run, expanded Yoga with Puppies, added live music, and added more fun things.",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/content-img-03.jpg", alt: "" },
      title: { text: "Critter Camp"},
      text: "Kids ages 7 to 12 will have a howling good time at our Critter Camp day camp. Our next session is a Spring-themed Weekend: April 9 – April 10 for kids ages 10 through 12. ",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/img-pet-07.jpg", alt: "" },
      title: { text: "$5 off our 5K Color Run"},
      text: "We're so excited to be offering a number of new activities to this year's line-up of fun, including a Color Run for you and your furry running partner. Register today!",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/img-pet-08.jpg", alt: "" },
      title: { text: "Walk-4-Paws"},
      text: "We’re bringing back the most popular activities PLUS we’ve changed our 5K to a Color Run, expanded Yoga with Puppies, added live music, and added more fun things.",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/content-img-03.jpg", alt: "" },
      title: { text: "Critter Camp"},
      text: "Kids ages 7 to 12 will have a howling good time at our Critter Camp day camp. Our next session is a Spring-themed Weekend: April 9 – April 10 for kids ages 10 through 12. ",
      buttonLink: { text: "Read more", url: "#!" }
    }
  ]
};

const postModuleData = {
  title: {
    text: "Support our lifesaving work and look good doing it",
    size: "lg"
  },
  text: [
    "Get your paws on our original and limited edition merchandise. Your purchases go towards the care of the 16,000+ animals we take in each year. "
  ],
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
  buttons: [{ text: "Shop now", url: "#!" }]
};
</script>
