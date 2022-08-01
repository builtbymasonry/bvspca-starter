<template>
  <HeroInner v-bind="heroInnerData" />

  <PostSection v-bind="postSectionData" class="bg-gray-dark" />

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-5xl px-4">
      <PostInline v-bind="postInlineData" />
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
      <PostInline v-bind="postInlineData2" />
    </div>
  </section>

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-5xl px-4">
      <PostInline v-bind="postInlineData3" />
    </div>
  </section>

  <section class="py-14 lg:py-28 bg-gray-dark">
    <div class="mx-auto max-w-4xl px-4">
      <PostInline v-bind="postInlineData4" />
    </div>
  </section>

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-4xl px-4">
      <PostInline v-bind="postInlineData5" />
    </div>
  </section>

  <PostCardsSection class="bg-gray-dark" v-bind="postCardsSectionData" />
</template>

<script setup>
import HeroInner from "@/components/HeroInner.vue"
import PostInline from "@/components/PostInline.vue"
import PostSection from "@/components/PostSection.vue";
import InfoCard from "@/components/InfoCard.vue";
import PostCardsSection from "@/components/PostCardsSection.vue";

const heroInnerData = {
  title: "Impact",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
  img: { src: "src/assets/img/hero-image-16.jpg", alt: "" }
};

const postInlineData = {
  title: "A second chance at nine lives",
  text: [
    "Whiskers got his leg caught in a fox trap after getting loose from his home. He lost a lot of skin, suffered nerve damage, and ahd a quickly spreading infection. His family brought him to our New Castle Animal Health Center. They couldn’t afford the entirety od his care and were condisdering euthanasia since the infection would soon be life-threatening. Thanks to our pet retention grant from Petco Love, we were able to bridge what his owners couldn’t afford and saved Whiskers by amputating the badly damaged leg. Whiskers now lives a life of three-legged luxury. We’re grateful for Petco Love’s support, which results from all of you who donate at checkout at the Petco stores."
  ],
  carousel: {
    slides: [
      { src: "src/assets/img/slide01.jpg", alt: "slide alt1" },
      { src: "src/assets/img/slide02.jpg", alt: "slide alt2" },
      { src: "src/assets/img/slide01.jpg", alt: "slide alt3" },
      { src: "src/assets/img/slide05.jpg", alt: "slide alt4" }
    ]
  },
  reverse: true
};

const postInlineData2 = {
  title: "Impacting lifesaving across the country",
  text: ["The past five years have seen substantial change in our area. We transformed the faltering then Chester County SPCA into the f irst open admission no-kill shelter in Pennsylvania. We then provided the leadership needed for the state of Delaware to become the f irst and only no-kill state in the country. Our next step is to share what we’ve learned and help other shelters achieve the same success."],
  img: { src: "src/assets/img/content-img-23.png", alt: "", type: 'default' },
  reverse: true
};

const postInlineData3 = {
  title: "Looking toward tomorrow",
  text: ["Late in 2020, we made a bold move to better serve the animals in our community and to improve our f inancial position. We purchased a former emergency veterinary center to replace our New Castle Campus."],
  list: [
    {text: "First in-house shelter ICU in Delaware to treat shelter animals that currently go for outside emergency care as well as for families who can’t afford specialty care for their pets"},
    {text: "Double the clinic space for veterinary care for family  pets"},
    {text: "New specialty surgery capabilities for shelter pets &  family pets from all of our locations"},
    {text: "Quarantine treatment rooms to help more shelter &  family pets with contagious diseases"},
    {text: "Indoor/outdoor dog runs & outdoor dog play yards"},
    {text: "Double the cat housing capacity Outdoor catio for adoptable cats"},
    {text: "Large community room for humane education and  service groups"}
  ],
  img: { src: "src/assets/img/content-img-25.png", alt: "", type: 'default' }
};

const postInlineData4 = {
  title: "Give back to your community",
  text: ["Open the door to endless possibilities. Together, we will create positive change within our community, help control the homeless animal population, and improve the lives of pets and their families."],
  img: { src: "src/assets/img/content-img-04.jpg", alt: "" },
  buttons: [
    { text: "Donate", url: "#!" },
    { variant: "outline", text: "Sponsor", url: "#!" },
  ],
  reverse: true
};

const postInlineData5 = {
  title: "Join the team",
  text: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi."],
  img: { src: "src/assets/img/content-img-22.jpg", alt: "" },
  buttons: [
    { text: "View open positions", url: "#!" }
  ]
};

const postSectionData = {
  carousel: {
    slides: [
      { src: "src/assets/img/slide01.jpg", alt: "slide alt1" },
      { src: "src/assets/img/slide02.jpg", alt: "slide alt2" },
      { src: "src/assets/img/slide01.jpg", alt: "slide alt3" },
      { src: "src/assets/img/slide05.jpg", alt: "slide alt4" }
    ]
  },
  title: "Finding the heart in humanity",
  text: ["Each year, we care for nearly 19,000 animals and we are finding homes or other placement for at least 95% of the homeless pets that enter our shelter. Through our dedication to maintaining an open door policy for all animals and our commitment to lifesaving and second chances, the Brandywine Valley SPCA is working tirelessly to cultivate a no-kill community."],
  textGrid: [
    {
      title: "Feature one",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia."
    },
    {
      title: "Feature two",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia."
    }
  ]
};

const infoCardData = {
  title: "Surpassing our goals",
  text: "When we released our goals in last year’s annual report, we were concerned that we wouldn’t reach them because of the pandemic, but while striving to do the right thing for the animals and their owners, a pattern emerged. Despite all that was going on in the world, we continued to succeed.  We attribute this anomaly to our hard work and perseverance.  By the end of the year, we exceeded our adoption goal by 2%, our spay/neuter goal by 16%, and our veterinary service goal by 17%.  We are humbled and grateful because we know we could not do what we did without a strong community at our backs. ",
  img: { src: "src/assets/img/content-img-24.jpg", alt: "" }
};

const postCardsSectionData = {
  title: "Impact related news & events",
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
