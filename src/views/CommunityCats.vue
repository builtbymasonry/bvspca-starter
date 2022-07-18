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
      imgAlt="Outdoor cats need love too"
      v-bind="postSectionData"
      :buttons="[
        { variant: 'primary', text: 'Schedule an appointment' },
        { variant: 'outline', text: 'Learn more about our impact' }
      ]"
      reverse
    />

    <section class="py-14 lg:py-28">
      <div class="mx-auto max-w-5xl px-4">
        <h2 class="mb-8 md:mb-12 text-center text-2xl font-bold sm:text-3xl lg:text-5xl">
          Community cat services
        </h2>
        <TableServices class="mb-14 lg:mb-20" :data="tableData" />

        <div class="px-8 md:px-0 lg:mx-6 mb-14 lg:mb-20 flex flex-col md:flex-row divide-y-2 md:divide-y-0 md:divide-x-2 divide-gray-dark rounded-lg text-sm text-center shadow bg-white">
          <div class="md:w-1/2 sm:px-10 lg:px-20 py-14">
            <h3 class="mb-2 text-xl font-bold">Scheduling Surgery</h3>
            <p class="mb-5 leading-snug">If community cat trapping organization or individual with one or two cats, no appointment is necessary for Malvern.</p>
            <dl class="space-y-3 text-sm font-bold">
              <div class="grid grid-cols-2 gap-6">
                <dt class="text-right">Georgetown</dt>
                <dd class="text-left"><a class="text-red hover:text-red-dark" href="#">(302) 856-6361</a></dd>
              </div>
              <div class="grid grid-cols-2 gap-6">
                <dt class="text-right">Malvern</dt>
                <dd class="text-left"><a class="text-red hover:text-red-dark" href="#">(610) 482-4289</a></dd>
              </div>
              <div class="grid grid-cols-2 gap-6">
                <dt class="text-right">New Castle</dt>
                <dd class="text-left"><a class="text-red hover:text-red-dark" href="#">(302) 516-1005</a></dd>
              </div>
            </dl>
          </div>
          <div class="md:w-1/2 sm:px-10 lg:px-20 py-14">
            <h3 class="mb-2 text-xl font-bold">Drop Off & Pick up Hours</h3>
            <p class="mb-5 leading-snug">Cats need to be in humane live release traps. In most cases, community cats are released the same day as their surgery.</p>
            <h4 class="font-bold">Drop off:</h4>
            <ul class="mb-1">
              <li>PA 9:00 a.m. – 9:30 a.m.</li>
              <li>DE 8:00 a.m. – 8:30 a.m.</li>
            </ul>
            <h4 class="font-bold">Pick up:</h4>
            <ul>
              <li>4 p.m. – 5 p.m.</li>
            </ul>
          </div>
        </div>

        <MapRentals class="lg:mx-6" v-bind="map" />
      </div>
    </section>

    <section
      class="bg-skew bg-skew-reverse mt-44 bg-purple py-14 text-white sm:mt-72 lg:mt-64 lg:py-28"
    >
      <div class="mx-auto max-w-5xl px-4">
        <TextBox
          class="-mt-56 mb-14 sm:-mt-80 lg:-mt-96 lg:mb-24"
          v-bind="textBoxData"
          buttonText="Spay & neuter services"
        />
        <PostInline
          :imgSrc="postInlineImg01"
          imgAlt="Your pet is in good hands"
          v-bind="postInlineData"
          :buttons="[{ variant: 'secondary', text: 'Donate' }]"
        />
      </div>
    </section>

    <section class="py-12 lg:py-20">
      <div class="mx-auto max-w-7xl px-4">
        <h2
          class="mb-10 text-center text-2xl font-bold tracking-wide md:mb-16 md:text-3xl xl:text-5xl"
        >
          Community cats related events & resources
        </h2>

        <div
          class="grid grid-cols-1 gap-10 px-0 sm:px-8 md:grid-cols-2 md:gap-8 md:px-0 lg:grid-cols-3"
        >
          <PostCard
            :imgSrc="PostCardImg07"
            imgAlt="$5 off our 5K Color Run"
            title="$5 off our 5K Color Run"
            text="We're so excited to be offering a number of new activities to this year's line-up of fun, including a Color Run for you and your furry running partner. Register today!"
            :buttonLink="{ text: 'Read more' }"
          />
          <PostCard
            :imgSrc="PostCardImg08"
            imgAlt="Walk-4-Paws"
            title="Walk-4-Paws"
            text="We’re bringing back the most popular activities PLUS we’ve changed our 5K to a Color Run, expanded Yoga with Puppies, added live music, and added more fun things."
            :buttonLink="{ text: 'Read more' }"
          />
          <PostCard
            :imgSrc="PostCardImg09"
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
import heroImg from "@/assets/img/hero-image-04.jpg";

import PostSection from "@/components/PostSection.vue";
import postSectionImg from "@/assets/img/content-img-09.jpg";

import MapRentals from "@/components/MapRentals.vue";
import TableServices from "@/components/TableServices.vue";

import TextBox from "@/components/TextBox.vue";

import PostInline from "@/components/PostInline.vue";
import postInlineImg01 from "@/assets/img/content-img-10.jpg";

import PostCard from "@/components/PostCard.vue";
import PostCardImg07 from "@/assets/img/img-pet-07.jpg";
import PostCardImg08 from "@/assets/img/img-pet-08.jpg";
import PostCardImg09 from "@/assets/img/content-img-03.jpg";

const heroInnerData = {
  title: "Community cats",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
};

const postSectionData = {
  title: "Outdoor cats need love too",
  text: "Our services increase the health and wellness of community cats while proactively reducing the number of animals being born without homes in our community. TNVR has been shown to be the most humane, most efficient, and least costly method of stabilizing community cat populations.",
  textGrid: [
    {
      title: "Feature one",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia.",
    },
    {
      title: "Feature two",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia.",
    },
    {
      title: "Feature three",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia.",
    },
    {
      title: "Feature four",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia.",
    },
  ],
};

const tableData = {
  title: "Exams",
  content: [
    {
      title: "Regular Exam",
      description: [
        "For all preventative services including new patients and annual vaccines.",
        "* Additional $5 for pets 1 year and over that are not spayed or neutered. "
      ],
      price: "$45"
    },
    {
      title: "Tech Appointment",
      description:
        "For anal glands, lab-work and returning patient vaccine boosters (rabies excluded).",
      price: "$25"
    },
    {
      title: "Nail Trim",
      description:
        "For a visit just for a nail trim. (A nail trim during an annual/regular visit is $15.)",
      price: ["$20 Cats", "$30 Dogs"]
    },
    {
      title: "Recheck Appointment",
      description: "Appointments for recurring issues.",
      price: "$35"
    },
    {
      title: "Sick Exam/Walk-In ",
      description:
        "Additional $5 for pets 1 year and over that are not spayed or neutered. ",
      price: "$65"
    }
  ]
};

const map = {
  title: "Trap rentals",
  description: "Rental Period: 1-14 days (maximum)",
  locationsCenter: { lat: 39.3443091461365, lng: -75.63985351727538 },
  locations: [
    {
      name: "West Chester",
      address: ["1212 Phoenixville Pike", "West Chester, PA 19380"],
      tel: "(484) 302-0018",
      coordinates: {
        lat: 39.9998077725332,
        lng: -75.59375539999999
      }
    },
    {
      name: "New Castle",
      address: ["600 South Street", "New Castle, DE 19720"],
      tel: "(302) 516-1005",
      coordinates: {
        lat: 39.65964363297543,
        lng: -75.57012141561196
      }
    },
    {
      name: "Georgetown",
      address: ["22918 Dupont Boulevard", "Georgetown, DE 19947"],
      tel: "(302) 856-6361",
      coordinates: {
        lat: 38.6695080498251,
        lng: -75.38105993716913
      }
    }
  ]
};

const textBoxData = {
  title: "Looking for spay & neuter services?",
  text: "Our accomplished veterinarians and medical staff operate in a professional, caring manner and will handle your pet kindly.",
};

const postInlineData = {
  title: "Help keep our Community Cats program alive",
  text: "Open the door to endless possibilities. Together, we will create positive change within our community, help control the homeless animal population, and improve the lives of pets and their families. ",
};
</script>
