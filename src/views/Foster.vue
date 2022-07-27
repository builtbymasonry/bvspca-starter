<template>
  <HeroInner v-bind="heroInnerData" class="bg-gray-dark" />

  <PostSection v-bind="postSectionData" />

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
        <Button variant="secondary" text="All fosterable dogs" url="#!" />
        <Button variant="secondary" text="All fosterable cats" url="#!" />
      </div>
    </div>
  </section>

  <section class="bg-gray-dark pb-14 pt-48 sm:pt-60 lg:pb-28">
    <div class="mx-auto grid max-w-7xl grid-cols-1 px-4 lg:grid-cols-2">
      <div class="pb-14 text-xs sm:text-sm lg:pr-20 lg:pb-0 2xl:pr-36">
        <h3 class="mb-6 text-2xl font-bold sm:text-4xl">
          We’re saving more babies than ever, and one of the best ways for you
          to help is to become a foster.
        </h3>
        <p class="mb-6">
          Fosters can watch infant puppies and kittens grow to adoption age, as
          well as older animals who need time to socialize or recover after
          medical procedures.
        </p>
        <p class="mb-12">
          Foster timeframes range from two weeks to two months. We provide you
          with all of the supplies you need, and we’ll work with you to tailor
          timeframe and pets to your unique situation.
        </p>
        <h4 class="mb-6 text-lg font-bold tracking-wider">
          Other suggestions include:
        </h4>
        <ul class="list-disc space-y-2 pl-5 marker:text-xs">
          <li class="pl-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </li>
          <li class="pl-2">Curabitur in dapibus nisl.</li>
          <li class="pl-2">
            Donec at libero eget odio lacinia aliquam non eu arcu.
          </li>
          <li class="pl-2">Suspendisse potenti. Pellentesque eu orci nisi.</li>
          <li class="pl-2">
            Pellentesque finibus lorem dignissim bibendum pretium.
          </li>
          <li class="pl-2">
            Maecenas efficitur varius feugiat. Vestibulum eu mi ac diam mollis
            euismod.
          </li>
          <li class="pl-2">Etiam pharetra dui sit amet tempus scelerisque.</li>
          <li class="pl-2">Vivamus et dolor tellus.</li>
          <li class="pl-2">
            Donec vulputate, justo vitae lobortis tempus, metu.
          </li>
        </ul>
      </div>

      <div class="rounded-lg bg-white p-8 shadow sm:p-12 xl:p-20">
        <FormFosterCare />
      </div>
    </div>
  </section>

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-3xl px-4">
      <h2
        class="mb-10 text-center text-2xl font-bold md:mb-16 md:text-3xl xl:text-5xl"
      >
        Frequently Asked Questions
      </h2>
      <Accordion :items="faq" />
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

  <PostCardsSection class="bg-gray-dark" v-bind="postCardsSectionData" />
</template>

<script setup>
import Button from "@/components/Button.vue";
import HeroInner from "@/components/HeroInner.vue";
import PostSection from "@/components/PostSection.vue";
import PostCard from "@/components/PostCard.vue";
import PostCardsSection from "@/components/PostCardsSection.vue";
import FormFosterCare from "@/components/FormFosterCare.vue";
import Accordion from "@/components/Accordion.vue";
import InfoCard from "@/components/InfoCard.vue";
import PostInline from "@/components/PostInline.vue";

const heroInnerData = {
  title: "Foster",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
  img: { src: "src/assets/img/hero-image-12.jpg", alt: "Volunteer" }
};

const postSectionData = {
  img: { src: "src/assets/img/content-img-17.jpg", alt: "" },
  subtitle:
    "Fostering is an amazing way to help a shelter animal without committing to adopting.",
  textGrid: [
    {
      title: "Benefit one",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia."
    },
    {
      title: "Benefit two",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia."
    },
    {
      title: "Benefit three",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia."
    },
    {
      title: "Benefit four",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia."
    }
  ],
  buttons: [{ text: "Apply now", url: "#!" }]
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

const faq = [
  {
    button: "Lorem ipsum dolor sit amet consectetur?",
    panel:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in. Penatibus et magnis dis parturient. Dictum at tempor commodo ullamcorper a lacus."
  },
  {
    button: "Lorem ipsum dolor sit amet?",
    panel:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    button: "Lorem ipsum dolor sit amet consectetur?",
    panel:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in. Penatibus et magnis dis parturient. Dictum at tempor commodo ullamcorper a lacus."
  },
  {
    button: "Lorem ipsum dolor sit amet?",
    panel:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    button: "Lorem ipsum dolor sit amet consectetur?",
    panel:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in. Penatibus et magnis dis parturient. Dictum at tempor commodo ullamcorper a lacus."
  },
  {
    button: "Lorem ipsum dolor sit amet?",
    panel:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    button: "Lorem ipsum dolor sit amet consectetur?",
    panel:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in. Penatibus et magnis dis parturient. Dictum at tempor commodo ullamcorper a lacus."
  },
  {
    button: "Lorem ipsum dolor sit amet?",
    panel:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

const infoCardData = {
  title: "We place over 16,000 animals a year",
  text: "We were the first open-admission no-kill shelter in Pennsylvania, and we have led Delaware to becoming the first no-kill state in the United States.",
  img: { src: "src/assets/img/content-img-01.jpg", alt: "" },
  buttons: [
    { text: "Learn more about our impact", url: "#!" }
  ]
};

const postInlineData = {
  title: "Give back to your community",
  text: ["Open the door to endless possibilities. Together, we will create positive change within our community, help control the homeless animal population, and improve the lives of pets and their families."],
  img: { src: "src/assets/img/content-img-04.jpg", alt: "" },
  reverse: true,
  buttons: [{ variant: "secondary", text: "Donate", url: "#!" }]
};

const postCardsSectionData = {
  title: "Foster related events & resources",
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
    { text: "View all news, events & resources", url: "#!" }
  ]
};
</script>
