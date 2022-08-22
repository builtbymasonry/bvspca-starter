<template>
  <HeroInner v-bind="heroInnerData" class="bg-gray-dark" />

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-5xl px-4">
      <PostModule class="text-xs" v-bind="postModuleData" />
    </div>
  </section>

  <section class="py-14 lg:py-28 bg-gray-dark">
    <div class="mx-auto max-w-7xl px-4">
      <PostModule class="text-xs" v-bind="postModuleData2" />
    </div>
  </section>

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-3xl px-4">
      <h2
        class="mb-10 text-center text-2xl font-bold md:mb-16 md:text-3xl xl:text-5xl"
      >
        Critter Camp FAQ
      </h2>
      <Accordion :items="faq" />
    </div>
  </section>

  <section class="bg-purple py-14 text-white lg:py-28">
    <div class="mx-auto max-w-5xl px-4">
      <PostModule class="text-xs font-bold" v-bind="postModuleData3" />
    </div>
  </section>

  <section class="bg-purple pb-14 text-white lg:pb-28">
    <div class="mx-auto max-w-7xl px-4">
      <h2
        class="mb-10 text-center text-2xl font-bold md:mb-16 md:text-3xl xl:text-5xl"
      >
        Party packages
      </h2>
      <div class="grid grid-cols-1 items-start gap-7 sm:grid-cols-2">
        <PackageCard v-bind="packagePennsylvaniaData" />
        <PackageCard v-bind="packageDelawareData" />
      </div>
    </div>
  </section>

  <section class="bg-gray-dark py-14 lg:py-28">
    <div class="mx-auto max-w-4xl px-4">
      <PostModule class="text-xs" v-bind="postModuleData4" />
      <PostModule class="mt-24 text-xs" v-bind="postModuleData5" />
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
          src="/img/content-img-21.png"
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
import Accordion from "@/components/Accordion.vue";
import PackageCard from "@/components/PackageCard.vue";
import PostCardsSection from "@/components/sections/PostCardsSection.vue";

const heroInnerData = {
  title: "For Kids",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
  img: { src: "/img/hero-image-13.jpg", alt: "Volunteer" }
};

const postModuleData = {
  title: { text: "Junior volunteers", size: "md"},
  text: ["Is your child interested in volunteering? If you are between 8-12 years of age, you can join our junior volunteer program! After you and your chaperon or guardian (18 years+) have both submitted volunteer applications and have attended a volunteer orientation you are welcome to volunteer within our organization. Junior volunteers can tag along as you help out, and participate in several activities such as puppy socialization, kitten socialization, grooming, reading to companions, etc. all under your supervision."],
  buttons: [{ text: "Apply to be a junior volunteer", url: "#!" }],
  carousel: {
    slides: [
      { src: "/img/slide03.jpg", alt: "slide alt1" },
      { src: "/img/slide04.jpg", alt: "slide alt2" },
      { src: "/img/slide03.jpg", alt: "slide alt3" },
      { src: "/img/slide04.jpg", alt: "slide alt4" }
    ]
  },
  reverse: true
};

const postModuleData2 = {
  img: { src: "/img/content-img-18.jpg", alt: "" },
  title: { text: "Critter Camp", size: "md"},
  textList: [
    {
      text: "Kids ages 7 to 12 will have a howling good time at our Critter Camp day camp. Our next session is a new Valentine’s Day Weekend (Feb. 12th & 13th) for kids ages 7 through 9. This is one of a number of themed weekend sessions in addition to our summer dates offered across all BVSPCA campuses that welcome kids ages 7-9 and 10-12. Camps will feature a variety of guest speakers (virtual and in person), new animal friends, and activities galore."
    },
    { text: "At camp, young animal lovers will:" }
  ],
  list: [
    "Learn special skills through our camp workshops, such as pet CPR, grooming, and behavioral training",
    "Learn about animal care",
    "Hear from guest speakers in the animal world using video conferencing",
    "Meet adoptable pet",
    "Engage in creative and educational activities",
    "Participate in team-building workshops",
    "Practice their reading skills by reading to our companions",
    "Each camp session runs from 9am to 3pm with an aftercare option available during summer programs only. The weekly cost covers all activities, arts & crafts materials, snacks, and camp t-shirt."
  ],
  buttons: [{ text: "Register today", url: "#!" }],
  layoutAlt: true,
  stretchColumns: true
};

const postModuleData3 = {
  title: { text: "Birthday parties", size: "md"},
  text: [ "The BVSPCA is dedicated to promoting the welfare and humane treatment of animals, so why not start early? Birthday celebrations at the BVSPCA teach children how to be compassionate to our four-legged friends. It’s sure to be a howling good time!",
    "Parties can be scheduled on Saturdays & Sundays between the hours of 11am and 5pm. Please provide a few additional dates in the event that your preferred date is not available. We require a $50.00 non-refundable deposit to secure your date and time. Minimum age requirement is 7 years old." ],
  carousel: {
    slides: [
      { src: "/img/slide05.jpg", alt: "slide alt1" },
      { src: "/img/slide02.jpg", alt: "slide alt2" },
      { src: "/img/slide01.jpg", alt: "slide alt3" },
      { src: "/img/slide02.jpg", alt: "slide alt4" }
    ]
  },
  reverse: true
};

const postModuleData4 = {
  img: { src: "/img/content-img-19.jpg", alt: "" },
  title: { text: "Request friends and family to send items off our wish list instead of buying gifts" },
  text: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi."],
  share: true,
  buttons: [ {text: "View our wishlist", url: "#!" }],
  reverse: true
};

const postModuleData5 = {
  img: { src: "/img/content-img-20.jpg", alt: "" },
  title: { text: "Other ways to honor your special day with charitable causes" },
  text: [ "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi." ],
  buttons: [ {text: "Get involved", url: "#!" }],
};

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

const packagePennsylvaniaData = {
  title: "Pennsylvania Party Package",
  subtitle: "For $200, your party package includes:",
  list: [
    "Use of our party room and kitchenette for 1 ½ hours",
    "12 Children Maximum; must be accompanied by at least 2 chaperones (18 years and older) – A BVSPCA representative will lead the event",
    "Table and chairs (set up and break down) and birthday-themed decorations including balloons, a tablecloth, napkins and paper plates",
    "A tour of the facility/meet with some of our adorable adoptable animals",
    "One craft project (choices vary) or activity",
    "Special gift for the birthday boy or girl",
    "Small gift bags with party favors",
    "Downloadable party invitations",
    "You may bring cake, food, beverages and additional decorations – a refrigerator is available for your use"
  ],
  buttons: [{ text: "Schedule party - West Chester", url: "#!" }]
};

const packageDelawareData = {
  title: "Delaware Party Package",
  subtitle: "For $175, your party package includes:",
  list: [
    "Use of our party room and kitchenette for 1 ½ hours",
    "12 Children Maximum; must be accompanied by at least 2 chaperones (18 years and older) – A BVSPCA representative will lead the event",
    "Table and chairs (set up and break down) and birthday-themed decorations including balloons, a tablecloth, napkins and paper plates",
    "A tour of the facility/meet with some of our adorable adoptable animals",
    "One craft project (choices vary) or activity",
    "Special gift for the birthday boy or girl",
    "Small gift bags with party favors",
    "Downloadable party invitations",
    "You may bring cake, food, beverages and additional decorations – a refrigerator is available for your use"
  ],
  buttons: [
    { text: "Schedule party - New Castle", url: "#!" },
    { text: "Schedule party - Georgetown", url: "#!" }
  ]
};

const postCardsSectionData = {
  title: "For kids related events & resources",
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
    }
  ],
  buttons: [{ text: "View all news, events & resources", url: "#!" }]
};
</script>
