<template>
  <HeroInner v-bind="heroInnerData" />

  <PostCardsSection class="bg-gray-dark" v-bind="postCardsSectionData" />

  <PostCardsSection v-bind="postCardsSectionData2" />

  <section class="bg-gray-dark py-14 lg:py-28">
    <div
      class="mx-auto grid max-w-4xl grid-cols-1 items-center gap-10 px-4 text-center text-sm sm:grid-cols-2 sm:text-left"
    >
      <div>
        <h2 class="mb-4 text-2xl font-bold md:text-3xl xl:text-4xl">
          Behavior Team
        </h2>
        <p>
          The Brandywine Valley SPCA offers phone, e-mail and on-site support
          for our adopters, foster families and pet owners seeking assistance to
          keep their pet at home.
        </p>
      </div>
      <ContactCard class="lg:whitespace-pre-wrap" v-bind="contactCard" />
    </div>
  </section>

  <section class="relative pt-20 pb-40 sm:pt-32 sm:pb-56 md:pb-28">
    <div class="absolute top-0 left-0 h-full w-full">
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
          class="absolute top-0 left-0 h-full w-full object-cover"
          src="/img/bg-image-01.jpg"
          alt="background"
        />
      </picture>
    </div>
    <InfoCard v-bind="infoCardData" />
  </section>

  <section
    class="bg-skew bg-skew-reverse bg-purple border-b-2 border-white pt-8 pb-20 text-white md:py-24 lg:py-32"
  >
    <div class="mx-auto max-w-4xl px-4">
      <PostModule class="text-sm font-bold" v-bind="postModuleData" />
    </div>
  </section>
</template>

<script setup>
import Button from "@/components/Button.vue";
import HeroInner from "@/components/HeroInner.vue";
import PostCard from "@/components/PostCard.vue";
import PostCardsSection from "@/components/sections/PostCardsSection.vue";
import ContactCard from "@/components/ContactCard.vue";
import PostModule from "@/components/PostModule.vue";
import InfoCard from "@/components/InfoCard.vue";

const heroInnerData = {
  title: "Behavior resources",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
  img: { src: "/img/hero-image-10.jpg", alt: "Rehoming consultation" }
};

const postCardsSectionData = {
  title: "Dog behavior resources",
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
    },
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
  buttons: [{ text: "Load more", url: "#!" }]
};

const postCardsSectionData2 = {
  title: "Cat behavior resources",
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
    },
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
  buttons: [{ text: "Load more", url: "#!" }]
};

const contactCard = {
  contactItems: [
    {
      title: `Please contact our \n free Pet Resource Center at:`,
      link: {
        url: "(484) 301-5200",
        type: "tel"
      }
    },
    {
      title: "or",
      link: {
        url: "(302) 516-1010",
        type: "tel"
      }
    },
    {
      title: "Or email us at:",
      link: {
        url: "PetResourceCenter@bvspca.org",
        type: "mailto",
        textSize: "lg"
      }
    }
  ]
};

const infoCardData = {
  title: "We place over 16,000 animals a year",
  text: "We were the first open-admission no-kill shelter in Pennsylvania, and we have led Delaware to becoming the first no-kill state in the United States.",
  img: { src: "/img/content-img-01.jpg", alt: "" },
  buttons: [{ text: "Learn more about our impact", url: "#!" }]
};

const postModuleData = {
  title: { text: "Help keep programs like this alive", size: "md"},
  text: ["Open the door to endless possibilities. Together, we will create positive change within our community, help control the homeless animal population, and improve the lives of pets and their families."],
  img: { src: "/img/content-img-04.jpg", alt: "" },
  reverse: true,
  buttons: [
    { variant: "secondary", text: "Donate", url: "#!" },
    { variant: "outlineSecondary", text: "Sponsor", url: "#!" }
  ]
};
</script>
