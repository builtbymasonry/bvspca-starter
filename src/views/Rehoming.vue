<template>
  <HeroInner v-bind="heroInnerData" />

  <section class="bg-gray-dark py-14 lg:py-28">
    <div
      class="mx-auto grid max-w-4xl grid-cols-1 items-center gap-10 px-4 text-center text-sm sm:grid-cols-2 sm:text-left"
    >
      <div>
        <h2 class="mb-4 text-2xl font-bold md:text-3xl xl:text-4xl">
          Finding a new family
        </h2>
        <p>
          Sometimes emergencies happen, and families are forced to part with a
          pet. However, surrendering your pet to a sheltering agency should be
          considered a last resort. We can offer guidance and tips to help you
          find a new family for your dog or cat.
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
import ContactCard from "@/components/ContactCard.vue";
import PostInline from "@/components/PostInline.vue";
import InfoCard from "@/components/InfoCard.vue";
import PostCard from "@/components/PostCard.vue";
import PostCardsSection from "@/components/PostCardsSection.vue";

const heroInnerData = {
  title: "Rehoming consultation",
  img: { src: "src/assets/img/hero-image-09.jpg", alt: "Rehoming consultation" }
};

const contactCard = {
  contactItems: [
    {
      title: `For a rehoming consultation, \n please contact our free Pet Resource Center:`,
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
  img: { src: "src/assets/img/content-img-01.jpg", alt: "" },
  buttons: [
    { text: "Learn more about our impact", url: "#!" }
  ]
};

const postInlineData = {
  title: "Help keep programs like this alive",
  text: ["Open the door to endless possibilities. Together, we will create positive change within our community, help control the homeless animal population, and improve the lives of pets and their families."],
  img: { src: "src/assets/img/content-img-04.jpg", alt: "" },
  reverse: true,
  buttons: [{ variant: "secondary", text: "Donate", url: "#!" }]
};

const postCardsSectionData = {
  title: "Rehoming related resources",
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
