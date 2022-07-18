<template>
  <div>
    <HeroInner
      :imgSrc="heroImg"
      imgAlt="Welness clinic"
      v-bind="heroInnerData"
    />

    <PostSection
      class="bg-gray-dark"
      :imgSrc="postSectionImg"
      imgAlt="Affordable healthcare with an impact"
      v-bind="postSectionData"
    />

    <section class="py-14 lg:py-28">
      <div class="mx-auto max-w-5xl px-4">
        <h2 class="mb-8 md:mb-12 text-center text-2xl font-bold sm:text-3xl lg:text-5xl">
          Spay & neuter services
        </h2>
        <div class="space-y-10">
          <TableServices :data="tableExamsData" />
          <TableServices :data="tableVaccinesData" />
          <TableServices :data="tablePreventionData" />
        </div>
        <div class="mt-16 flex justify-center">
          <Button variant="primary" text="Schedule an appointment" />
        </div>
      </div>
    </section>

    <section class="mt-36 sm:mt-40 lg:mt-28 pt-20 pb-4 sm:pb-0 bg-skew bg-purple text-white">
      <div class="mx-auto max-w-5xl px-4">
        <TextBox
          class="mb-16 md:mb-20 lg:mb-24 -mt-52 sm:-mt-56"
          v-bind="textBoxData"
          buttonText="All wellness services"
        />
      </div>
      <TextBanner
        class="py-0 lg:py-0"
        v-bind="textBannerData"
      />
    </section>

    <section class="relative pt-40 pb-28 sm:pt-60 md:pb-0 md:mb-32">
      <div class="absolute top-0 left-0 h-full w-full">
        <img
          class="absolute top-0 left-0 h-full w-full object-cover"
          :src="bgImg01"
          alt="image description"
        />
      </div>

      <InfoCard
        :imgSrc="infoCardImg01"
        imgAlt="We place over 16,000 animals a year"
        v-bind="infoCardData"
        :buttons="[
          { variant: 'primary', text: 'Learn more about our impact' },
        ]"
        reverse
      />
    </section>

    <section class="py-14 lg:py-28">
      <div class="mx-auto max-w-5xl px-4">
        <PostInline
          :imgSrc="postInlineImg01"
          imgAlt="Volunteer"
          v-bind="postInlineData"
          :buttons="[{ variant: 'primary', text: 'Get involved' }]"
          reverse
        />
      </div>
    </section>

    <section class="py-12 lg:py-20 bg-gray-dark">
      <div class="mx-auto max-w-7xl px-4">
        <h2
          class="mb-10 text-center text-2xl font-bold tracking-wide md:mb-16 md:text-3xl xl:text-5xl"
        >
          Spay & neuter related events & resources
        </h2>

        <div
          class="grid grid-cols-1 gap-10 px-0 sm:px-8 md:grid-cols-2 md:gap-8 md:px-0 lg:grid-cols-3"
        >
          <PostCard
            :imgSrc="postCardImg07"
            imgAlt="$5 off our 5K Color Run"
            title="$5 off our 5K Color Run"
            text="We're so excited to be offering a number of new activities to this year's line-up of fun, including a Color Run for you and your furry running partner. Register today!"
            :buttonLink="{ text: 'Read more' }"
          />
          <PostCard
            :imgSrc="postCardImg08"
            imgAlt="Walk-4-Paws"
            title="Walk-4-Paws"
            text="We’re bringing back the most popular activities PLUS we’ve changed our 5K to a Color Run, expanded Yoga with Puppies, added live music, and added more fun things."
            :buttonLink="{ text: 'Read more' }"
          />
          <PostCard
            :imgSrc="postCardImg09"
            imgAlt="Critter Camp"
            title="Critter Camp"
            text="Kids ages 7 to 12 will have a howling good time at our Critter Camp day camp. Our next session is a Spring-themed Weekend: April 9 – April 10 for kids ages 10 through 12."
            :buttonLink="{ text: 'Read more' }"
          />
        </div>

        <div
          class="mt-16 flex flex-col items-center justify-center md:flex-row"
        >
          <Button variant="primary" text="View all news, events & resources" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue";

import HeroInner from "@/components/HeroInner.vue";
import heroImg from "@/assets/img/hero-image-05.jpg";

import PostSection from "@/components/PostSection.vue";
import postSectionImg from "@/assets/img/content-img-11.jpg";

import TableServices from "@/components/TableServices.vue";
import TextBox from "@/components/TextBox.vue";
import TextBanner from "@/components/TextBanner.vue";

import PostCard from "@/components/PostCard.vue";
import postCardImg07 from "@/assets/img/img-pet-07.jpg";
import postCardImg08 from "@/assets/img/img-pet-08.jpg";
import postCardImg09 from "@/assets/img/content-img-03.jpg";

import contentImg01 from "@/assets/img/content-img-01.jpg";
import bgImg01 from "@/assets/img/bg-image-01.jpg";

import PostInline from "@/components/PostInline.vue";
import postInlineImg01 from "@/assets/img/content-img-08.jpg";

import InfoCard from "@/components/InfoCard.vue";
import infoCardImg01 from "@/assets/img/content-img-01.jpg";

const heroInnerData = {
  title: "Spay & neuter",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
};

const postSectionData = {
  subtitle: "Spaying/Neutering your pet helps fight pet overpopulation, reducing the number of homeless animals and decreasing euthanasia numbers.",
  textGrid: [
    {
      title: "Benefit one",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia.",
    },
    {
      title: "Benefit two",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia.",
    },
    {
      title: "Benefit three",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia.",
    },
    {
      title: "Benefit four",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia.",
    },
  ],
};

const tableExamsData = {
  title: "Exams",
  content: [
    {
      title: "Regular Exam",
      description: [
        "For all preventative services including new patients and annual vaccines.",
        "* Additional $5 for pets 1 year and over that are not spayed or neutered. ",
      ],
      price: "$45",
    },
    {
      title: "Tech Appointment",
      description:
        "For anal glands, lab-work and returning patient vaccine boosters (rabies excluded).",
      price: "$25",
    },
    {
      title: "Nail Trim",
      description:
        "For a visit just for a nail trim. (A nail trim during an annual/regular visit is $15.)",
      price: ["$20 Cats", "$30 Dogs"],
    },
    {
      title: "Recheck Appointment",
      description: "Appointments for recurring issues.",
      price: "$35",
    },
    {
      title: "Sick Exam/Walk-In ",
      description:
        "Additional $5 for pets 1 year and over that are not spayed or neutered. ",
      price: "$65",
    },
  ],
};

const tableVaccinesData = {
  title: "Vaccines & Other Services",
  content: [
    {
      title: "Regular Exam",
      description: [
        "For all preventative services including new patients and annual vaccines.",
        "* Additional $5 for pets 1 year and over that are not spayed or neutered. ",
      ],
      price: "$45",
    },
    {
      title: "Tech Appointment",
      description:
        "For anal glands, lab-work and returning patient vaccine boosters (rabies excluded).",
      price: "$25",
    },
    {
      title: "Nail Trim",
      description:
        "For a visit just for a nail trim. (A nail trim during an annual/regular visit is $15.)",
      price: ["$20 Cats", "$30 Dogs"],
    },
    {
      title: "Recheck Appointment",
      description: "Appointments for recurring issues.",
      price: "$35",
    },
    {
      title: "Sick Exam/Walk-In ",
      description:
        "Additional $5 for pets 1 year and over that are not spayed or neutered. ",
      price: "$65",
    },
  ],
};

const tablePreventionData = {
  title: "Flea, Tick & Heartworm Prevention",
  content: [
    {
      title: "Regular Exam",
      description: [
        "For all preventative services including new patients and annual vaccines.",
        "* Additional $5 for pets 1 year and over that are not spayed or neutered. ",
      ],
      price: "$45",
    },
    {
      title: "Tech Appointment",
      description:
        "For anal glands, lab-work and returning patient vaccine boosters (rabies excluded).",
      price: "$25",
    },
    {
      title: "Nail Trim",
      description:
        "For a visit just for a nail trim. (A nail trim during an annual/regular visit is $15.)",
      price: ["$20 Cats", "$30 Dogs"],
    },
    {
      title: "Recheck Appointment",
      description: "Appointments for recurring issues.",
      price: "$35",
    },
    {
      title: "Sick Exam/Walk-In ",
      description:
        "Additional $5 for pets 1 year and over that are not spayed or neutered. ",
      price: "$65",
    },
  ],
};

const textBoxData = {
  title: "Looking other wellness services?",
  text: "Our accomplished veterinarians and medical staff operate in a professional, caring manner and will handle your pet kindly.",
};

const textBannerData = {
  title: "Have questions or need help?",
  text: "Give us a call or stop by one of our healthcare locations for more help.",
  buttons: [
    {
      variant: "secondary",
      text: "Contact us",
    },
    {
      variant: "outlineSecondary",
      text: "Wellness clinic locations",
    },
  ],
};

const postInlineData = {
  title: "Pay it forward, your free time has so much value",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi. ",
};

const infoCardData = {
  title: "We place over 16,000 animals a year",
  text: "We were the first open-admission no-kill shelter in Pennsylvania, and we have led Delaware to becoming the first no-kill state in the United States.",
};
</script>
