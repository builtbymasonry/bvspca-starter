<template>
  <HeroInner v-bind="heroInnerData" class="bg-gray-dark" />

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-5xl px-4">
      <PostInline v-bind="postInlineData" />
    </div>
  </section>

  <PostSection class="bg-gray-dark" v-bind="postSectionData" />

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-3xl px-4">
      <h2 class="mb-10 text-center text-2xl font-bold md:mb-16 md:text-3xl xl:text-5xl">
        Critter Camp FAQ
      </h2>
      <Accordion :items="faq" />
    </div>
  </section>

  <section class="py-14 lg:py-28 bg-purple text-white">
    <div class="mx-auto max-w-5xl px-4">
      <PostInline v-bind="postInlineData2" />
    </div>
  </section>

  <section class="pb-14 lg:pb-28 bg-purple text-white">
    <div class="mx-auto max-w-7xl px-4">
      <h2 class="mb-10 text-center text-2xl font-bold md:mb-16 md:text-3xl xl:text-5xl">
        Party packages
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 items-start gap-7">
        <PackageCard v-bind="packagePennsylvaniaData"/>
        <PackageCard v-bind="packageDelawareData"/>
      </div>
    </div>
  </section>

  <section class="py-14 lg:py-28 bg-gray-dark">
    <div class="mx-auto max-w-4xl px-4">
      <PostInline v-bind="postInlineData3" />
      <PostInline class="mt-24" v-bind="postInlineData4" />
    </div>
  </section>











</template>

<script setup>
import HeroInner from "@/components/HeroInner.vue";
import PostInline from "@/components/PostInline.vue";
import PostSection from "@/components/PostSection.vue";
import Accordion from "@/components/Accordion.vue";
import PackageCard from "@/components/PackageCard.vue";

const heroInnerData = {
  title: "For Kids",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
  img: { src: "src/assets/img/hero-image-13.jpg", alt: "Volunteer" }
};

const postInlineData = {
  title: "Whatever you need, we’re here to help",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi. Pellentesque finibus lorem dignissim bibendum pretium. Maecenas efficitur varius feugiat. Vestibulum eu mi ac diam mollis euismod.",
  buttons: [{ variant: "primary", text: "Learn more about us", url: "#!" }],
  carousel: {
    slides: [
      { src: "src/assets/img/slide03.jpg", alt: "slide alt1" },
      { src: "src/assets/img/slide04.jpg", alt: "slide alt2" },
      { src: "src/assets/img/slide03.jpg", alt: "slide alt3" },
      { src: "src/assets/img/slide04.jpg", alt: "slide alt4" }
    ]
  },
  reverse: true
};

const postInlineData2 = {
  title: "Birthday parties",
  textGroup: [
    {
      text: "The BVSPCA is dedicated to promoting the welfare and humane treatment of animals, so why not start early? Birthday celebrations at the BVSPCA teach children how to be compassionate to our four-legged friends. It’s sure to be a howling good time!"
    },
    {
      text: "Parties can be scheduled on Saturdays & Sundays between the hours of 11am and 5pm. Please provide a few additional dates in the event that your preferred date is not available. We require a $50.00 non-refundable deposit to secure your date and time. Minimum age requirement is 7 years old."
    }
  ],
  carousel: {
    slides: [
      { src: "src/assets/img/slide05.jpg", alt: "slide alt1" },
      { src: "src/assets/img/slide02.jpg", alt: "slide alt2" },
      { src: "src/assets/img/slide01.jpg", alt: "slide alt3" },
      { src: "src/assets/img/slide02.jpg", alt: "slide alt4" }
    ]
  },
  reverse: true
};

const postInlineData3 = {
  img: { src: "src/assets/img/content-img-19.jpg", alt: "" },
  subtitle: "Request friends and family to send items off our wish list instead of buying gifts",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi.",
  share: true,
  buttons: [ {variant: "primary", text: "View our wishlist", url: "#!" }],
  reverse: true
};

const postInlineData4 = {
  img: { src: "src/assets/img/content-img-20.jpg", alt: "" },
  subtitle: "Other ways to honor your special day with charitable causes",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi.",
  buttons: [ {variant: "primary", text: "Get involved", url: "#!" }],
};

const postSectionData = {
  img: { src: "src/assets/img/content-img-18.jpg", alt: "" },
  title: "Critter Camp",
  textList: [
    { text: "Kids ages 7 to 12 will have a howling good time at our Critter Camp day camp. Our next session is a new Valentine’s Day Weekend (Feb. 12th & 13th) for kids ages 7 through 9. This is one of a number of themed weekend sessions in addition to our summer dates offered across all BVSPCA campuses that welcome kids ages 7-9 and 10-12. Camps will feature a variety of guest speakers (virtual and in person), new animal friends, and activities galore." },
    { text: "At camp, young animal lovers will:" }
  ],
  list: [
    { text: "Learn special skills through our camp workshops, such as pet CPR, grooming, and behavioral training" },
    { text: "Learn about animal care" },
    { text: "Hear from guest speakers in the animal world using video conferencing" },
    { text: "Meet adoptable pet" },
    { text: "Engage in creative and educational activities" },
    { text: "Participate in team-building workshops" },
    { text: "Practice their reading skills by reading to our companions" },
    { text: "Each camp session runs from 9am to 3pm with an aftercare option available during summer programs only. The weekly cost covers all activities, arts & crafts materials, snacks, and camp t-shirt." }
  ],
  buttons: [
    { variant: "primary", text: "Register today", url: "#!" },
  ]
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
    {text: "Use of our party room and kitchenette for 1 ½ hours"},
    {text: "12 Children Maximum; must be accompanied by at least 2 chaperones (18 years and older) – A BVSPCA representative will lead the event"},
    {text: "Table and chairs (set up and break down) and birthday-themed decorations including balloons, a tablecloth, napkins and paper plates"},
    {text: "A tour of the facility/meet with some of our adorable adoptable animals"},
    {text: "One craft project (choices vary) or activity"},
    {text: "Special gift for the birthday boy or girl"},
    {text: "Small gift bags with party favors"},
    {text: "Downloadable party invitations"},
    {text: "You may bring cake, food, beverages and additional decorations – a refrigerator is available for your use"}
  ],
  buttons: [
    { variant: "primary", text: "Schedule party - West Chester", url: "#!" }
  ]
};

const packageDelawareData = {
  title: "Delaware Party Package",
  subtitle: "For $175, your party package includes:",
  list: [
    {text: "Use of our party room and kitchenette for 1 ½ hours"},
    {text: "12 Children Maximum; must be accompanied by at least 2 chaperones (18 years and older) – A BVSPCA representative will lead the event"},
    {text: "Table and chairs (set up and break down) and birthday-themed decorations including balloons, a tablecloth, napkins and paper plates"},
    {text: "A tour of the facility/meet with some of our adorable adoptable animals"},
    {text: "One craft project (choices vary) or activity"},
    {text: "Special gift for the birthday boy or girl"},
    {text: "Small gift bags with party favors"},
    {text: "Downloadable party invitations"},
    {text: "You may bring cake, food, beverages and additional decorations – a refrigerator is available for your use"}
  ],
  buttons: [
    { variant: "primary", text: "Schedule party - New Castle", url: "#!" },
    { variant: "primary", text: "Schedule party - Georgetown", url: "#!" }
  ]
}

</script>
