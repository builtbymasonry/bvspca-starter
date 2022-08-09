<template>
  <HeroInner v-bind="heroInnerData" />

  <section class="bg-gray-dark py-14 lg:py-28">
    <div class="mx-auto max-w-7xl px-4">
      <PostModule class="text-xs" v-bind="postModuleData" />
    </div>
  </section>

  <section class="bg-gray-dark py-14 lg:-mt-36 lg:py-28">
    <div class="mx-auto max-w-5xl px-4">
      <h2 class="mb-10 text-center text-2xl font-bold md:text-3xl xl:text-5xl">
        Amazon wishlists
      </h2>
      <div class="-my-5 flex flex-wrap justify-center">
        <div
          class="w-full max-w-xs py-5 sm:w-1/2 sm:max-w-full sm:p-5 lg:w-1/3"
          v-for="card in wishlist"
          :key="card.title"
        >
          <CardWishlist v-bind="card" />
        </div>
      </div>
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

    <div class="z-3 relative mx-auto mb-0 max-w-5xl px-4 md:-mb-36">
      <div
        class="rounded-sm bg-white px-8 py-12 sm:px-12 sm:py-16 lg:rounded-lg lg:px-32 lg:py-20"
      >
        <h2
          class="mb-8 text-center text-2xl font-bold sm:mb-11 md:text-3xl xl:text-5xl"
        >
          What we need
        </h2>
        <div
          class="mb-10 grid grid-cols-1 gap-10 text-sm leading-5 sm:mb-14 md:grid-cols-2"
        >
          <div>
            <h3 class="mb-4 text-xl font-bold">For the pups</h3>
            <ul class="list-disc space-y-1 pl-5 text-left marker:text-xs">
              <li v-for="item in forPupsList" :key="item" class="pl-2">
                {{ item }}
              </li>
            </ul>
          </div>
          <div>
            <h3 class="mb-4 text-xl font-bold">For our fosters</h3>
            <ul
              class="mb-10 list-disc space-y-1 pl-5 text-left marker:text-xs md:mb-14"
            >
              <li v-for="item in forFostersList" :key="item" class="pl-2">
                {{ item }}
              </li>
            </ul>
            <h3 class="mb-4 text-xl font-bold">For the kittens</h3>
            <ul class="list-disc space-y-1 pl-5 text-left marker:text-xs">
              <li v-for="item in forKittensList" :key="item" class="pl-2">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <div class="text-center">
          <h3 class="mb-6 text-lg font-bold sm:mb-9 sm:text-xl md:text-2xl">
            Download the printable list
          </h3>
          <Button text="Download list" url="#" download />
        </div>
      </div>
    </div>
  </section>

  <section
    class="bg-skew bg-skew-reverse bg-purple pt-8 pb-20 text-white md:py-24 lg:py-32"
  >
    <div class="mx-auto max-w-4xl px-4">
      <PostModule class="text-sm font-bold" v-bind="PostModuleData2" />
    </div>
  </section>

  <section class="py-14 lg:py-28">
    <div
      class="mx-auto flex max-w-5xl flex-col items-center gap-5 gap-y-10 px-4 text-center lg:flex-row-reverse lg:text-left"
    >
      <div
        class="relative mx-auto w-full max-w-sm md:max-w-md lg:w-2/3 lg:max-w-full"
      >
        <img
          class="w-full"
          src="src/assets/img/content-img-21.png"
          alt="image description"
        />
      </div>
      <div
        class="py-2 lg:pr-5 text-xs lg:flex lg:w-1/3 lg:flex-col lg:items-start lg:justify-center"
      >
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

  <PostCardsSection class="bg-gray-dark" v-bind="postCardsSectionData" />
</template>

<script setup>
import Button from "@/components/Button.vue";
import HeroInner from "@/components/HeroInner.vue";
import PostModule from "@/components/PostModule.vue";
import CardWishlist from "@/components/CardWishlist.vue";
import PostCardsSection from "@/components/sections/PostCardsSection.vue";

const heroInnerData = {
  title: "Wishlist",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
  img: { src: "src/assets/img/hero-image-22.jpg", alt: "" }
};

const postModuleData = {
  title: { text: "Create change, one wish at a time", size: "md" },
  text: [
    "Make an even bigger impact with your donations! When you make your purchases through AmazonSmile, Amazon will donate 0.5% of the price to the charitable organization of your choice. Log in today at smile.amazon.com and give back to our four-legged friends today.",
    "You can also donate items directly from Amazon using our Amazon Wish List! Simply follow the links, and shop like you would from any other wish list. The items will be delivered directly to us, so you don’t have to worry about making the trip. Click here to find our lists for each of our campuses: Amazon Wish Lists. All donations, big and small, mean a great deal to us and to our animals!"
  ],
  carousel: {
    slides: [
      { src: "src/assets/img/slide11.jpg", alt: "" },
      { src: "src/assets/img/slide09.jpg", alt: "" },
      { src: "src/assets/img/slide08.jpg", alt: "" },
      { src: "src/assets/img/slide07.jpg", alt: "" }
    ]
  },
  buttons: [{ text: "Purchase through AmazonSmile", url: "#!" }],
  reverse: true
};

const PostModuleData2 = {
  title: { text: "Give back to your community", size: "lg" },
  text: [
    "Open the door to endless possibilities. Together, we will create positive change within our community, help control the homeless animal population, and improve the lives of pets and their families."
  ],
  img: { src: "src/assets/img/content-img-04.jpg", alt: "" },
  buttons: [
    { variant: "secondary", text: "Donate", url: "#!" },
    { variant: "outlineSecondary", text: "Sponsor", url: "#!" }
  ],
  reverse: true
};

const postCardsSectionData = {
  title: "Wishlist related events & resources",
  blogPosts: [
    {
      url: "#!",
      img: { src: "src/assets/img/img-pet-07.jpg", alt: "" },
      title: { text: "$5 off our 5K Color Run", size: "md"},
      text: "We're so excited to be offering a number of new activities to this year's line-up of fun, including a Color Run for you and your furry running partner. Register today!",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/img-pet-08.jpg", alt: "" },
      title: { text: "Walk-4-Paws", size: "md"},
      text: "We’re bringing back the most popular activities PLUS we’ve changed our 5K to a Color Run, expanded Yoga with Puppies, added live music, and added more fun things.",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/content-img-03.jpg", alt: "" },
      title: { text: "Critter Camp", size: "md"},
      text: "Kids ages 7 to 12 will have a howling good time at our Critter Camp day camp. Our next session is a Spring-themed Weekend: April 9 – April 10 for kids ages 10 through 12. ",
      buttonLink: { text: "Read more", url: "#!" }
    }
  ],
  buttons: [{ text: "View all news, events & resources", url: "#!" }]
};

const wishlist = [
  {
    img: { src: "src/assets/img/location-01.jpg", alt: "" },
    title: "West Chester",
    address: "1212 Phoenixville Pike \nWest Chester, PA 19380",
    button: { text: "Amazon wishlist", url: "#!", target: "_blank" }
  },
  {
    img: { src: "src/assets/img/location-01.jpg", alt: "" },
    title: "New Castle",
    address: "1212 Phoenixville Pike \nWest Chester, PA 19380",
    button: { text: "Amazon wishlist", url: "#!", target: "_blank" }
  },
  {
    img: { src: "src/assets/img/location-01.jpg", alt: "" },
    title: "Dover",
    address: "1212 Phoenixville Pike \nWest Chester, PA 19380",
    button: { text: "Amazon wishlist", url: "#!", target: "_blank" }
  },
  {
    img: { src: "src/assets/img/location-01.jpg", alt: "" },
    title: "Georgetown",
    address: "1212 Phoenixville Pike \nWest Chester, PA 19380",
    button: { text: "Amazon wishlist", url: "#!", target: "_blank" }
  },
  {
    img: { src: "src/assets/img/location-01.jpg", alt: "" },
    title: "ARC",
    address: "1212 Phoenixville Pike West Chester, PA 19380",
    button: { text: "Amazon wishlist", url: "#!", target: "_blank" }
  }
];

const forPupsList = [
  "Heavy duty dog toys",
  "Food puzzles",
  "No-pull harnesses: Freedom Harness, Balance Harness, EZ Walk (M/L/XL)",
  "Martingale collars: ¾ inch or 1 inch (M/L)",
  "Training clickers with wrist strap",
  "Travel pet carriers (S/M/L)",
  "Wet dog food",
  "Kongs (all sizes)",
  "E-collars",
  "Frisbees",
  "Carabeeners",
  "Peanut butter (smooth, nothing with xylitol)",
  "Towels and blankets (Washed, gently used items are great, but no knitted or crocheted items, down comforters, used dog beds or pillows please)"
];

const forFostersList = [
  "KMR powder",
  "Pet nursing bottles",
  "Dry and wet kitten food (no color added)",
  "Heating pads (Snuggle Safes)",
  "X-Pens",
  "Pureed baby food (chicken and gravy only)"
];

const forKittensList = [
  "Cat scratchers from stretchandscratch.com",
  "Cat toys",
  "Food puzzles",
  "Laser pointers",
  "Cat litter (clumping and unscented) and standard size litter boxes",
  "Small throw blankets"
];
</script>
