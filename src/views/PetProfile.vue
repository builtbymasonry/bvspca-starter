<template>
  <section
    class="mx-auto grid max-w-[1440px] grid-cols-1 text-center md:grid-cols-2 md:text-left"
  >
    <div
      class="order-2 ml-auto mt-7 w-full px-4 py-14 md:order-1 md:mt-0 md:max-w-xl xl:px-0"
    >
      <div class="hidden md:block">
        <ButtonLink
          class="mb-8 lg:mb-12"
          text="Back to all dogs"
          url="#!"
          reverse
        />
        <h2 class="mb-8 text-2xl font-bold md:text-3xl xl:text-5xl">
          Chewie fka Monkey
        </h2>
      </div>
      <dl class="mb-10 space-y-2 md:mb-12 lg:space-y-3">
        <div
          v-for="row in profile.list"
          :key="row.title"
          class="flex text-left text-xs lg:text-base xl:text-lg"
        >
          <dt
            class="mr-5 w-[125px] flex-shrink-0 pr-2 font-bold md:mr-2 lg:w-1/3"
          >
            {{ row.title }}
          </dt>
          <dd>{{ row.value }}</dd>
        </div>
      </dl>
      <h3 class="mb-8 text-lg font-bold">Ready to complete your family?</h3>
      <div
        v-if="profile.buttons"
        class="flex flex-wrap justify-center space-x-5 md:justify-start lg:space-x-10"
      >
        <Button
          v-for="button in profile.buttons"
          :key="button.text"
          v-bind="button"
        />
      </div>
    </div>
    <div class="order-1 flex-col justify-between md:order-2 md:flex">
      <div class="px-4 py-10 md:hidden">
        <ButtonLink
          class="mb-8 lg:mb-12"
          text="Back to all dogs"
          url="#!"
          reverse
        />
        <h2 class="text-2xl font-bold md:text-3xl xl:text-5xl">
          Chewie fka Monkey
        </h2>
      </div>
      <SliderThumbs :slides="profile.slides" />
    </div>
  </section>

  <section class="bg-gray-dark py-14 lg:py-28">
    <div
      class="relative mx-auto max-w-5xl px-4 text-center text-xs md:px-36 md:text-left md:text-sm lg:pr-60"
    >
      <h2 class="mb-4 text-2xl font-bold md:mb-7 md:text-3xl xl:text-5xl">
        Chewie fka Monkey
      </h2>
      <p>
        Chewie is a big sweetheart who loves taking over your side of the bed.
        He also loves attention and affection from his people and gets along
        well with kids. Chewie has got basic commands like sit, stay, down, out,
        and enough down pat. He's done well in dog playgroups at the shelter and
        would enjoy dogs he meets, but he does best as the only dog in the
        family. Come meet this big hunk of love and make him your newest family
        member.
      </p>
      <div
        class="top-5 left-11 mt-10 flex justify-center md:absolute md:mt-0 md:flex-col"
      >
        <span class="mr-4 text-lg font-bold md:mr-0 md:mb-4 md:block"
          >Share:</span
        >
        <Socials
          :socials="socialList"
          class="space-x-4 md:flex-col md:space-x-0 md:space-y-6"
        />
      </div>
    </div>
  </section>

  <section class="bg-purple py-14 text-white lg:py-28">
    <div class="mx-auto grid max-w-7xl grid-cols-1 px-4 lg:grid-cols-2">
      <div
        class="rounded-sm bg-white px-7 py-10 text-xs text-black sm:rounded-lg sm:p-20 lg:p-12 xl:p-20"
      >
        <h3
          class="mb-8 text-center text-xl font-bold sm:mb-4 md:text-2xl lg:text-left lg:text-4xl"
        >
          {{ requirementsData.title }}
        </h3>
        <div class="mx-auto max-w-md px-5 lg:max-w-none lg:px-0">
          <ul class="list-disc space-y-5 sm:list-none">
            <li
              v-for="item in requirementsData.list"
              :key="item.text"
              class="relative sm:pl-14"
            >
              <img
                class="absolute top-1/2 left-1 hidden -translate-y-1/2 sm:block"
                v-bind="item.img"
              />
              {{ item.text }}
            </li>
          </ul>
        </div>
      </div>
      <div
        class="px-2 pt-16 sm:px-20 lg:pl-12 lg:pr-0 lg:pt-0 xl:pl-36 xl:pr-20"
      >
        <h3
          class="mb-8 text-center text-2xl font-bold sm:mb-4 lg:text-left lg:text-4xl"
        >
          {{ whatsIncludedData.title }}
        </h3>
        <List class="text-sm font-bold" v-bind="whatsIncludedData.list" />
      </div>
    </div>
  </section>

  <TextBanner v-bind="textBannerData" />

  <PostCardsSection class="bg-gray-dark" v-bind="postCardsSectionData" />
</template>

<script setup>
import Button from "@/components/Button.vue";
import ButtonLink from "@/components/ButtonLink.vue";
import SliderThumbs from "@/components/SliderThumbs.vue";
import Socials from "@/components/Socials.vue";
import List from "@/components/List.vue";
import TextBanner from "@/components/TextBanner.vue";
import PostCardsSection from "@/components/PostCardsSection.vue";

const profile = {
  list: [
    { title: "Animal ID:", value: "46433923" },
    { title: "Species:", value: "Dog" },
    { title: "Breed:", value: "Mixed Breed, Large/Mix" },
    { title: "Age:", value: "5 years 21 days" },
    { title: "Gender:", value: "Male" },
    { title: "Size:", value: "Large" },
    { title: "Color:", value: "Black/Tan" },
    { title: "Spayed/Neutered:", value: "Yes" },
    { title: "Declawed:", value: "No" },
    { title: "Housetrained:", value: "Unknown" },
    { title: "Location:", value: "WC Main Dog Kennel" }
  ],
  buttons: [
    { text: "Contact us", url: "#!" },
    { variant: "outline", text: "Location info", url: "#!" }
  ],
  slides: [
    {
      img: { src: "src/assets/img/profile-slide01.jpg", alt: "" }
    },
    {
      img: { src: "src/assets/img/profile-slide02.jpg", alt: "" }
    },
    {
      img: { src: "src/assets/img/profile-slide01.jpg", alt: "" },
      video: {
        src: "src/assets/video/profile-slide-video.mp4",
        poster: "src/assets/img/profile-slide01.jpg"
      }
    },
    {
      img: { src: "src/assets/img/profile-slide01.jpg", alt: "" }
    },
    {
      img: { src: "src/assets/img/profile-slide02.jpg", alt: "" }
    },
    {
      img: { src: "src/assets/img/profile-slide01.jpg", alt: "" },
      video: {
        src: "src/assets/video/profile-slide-video.mp4",
        poster: "src/assets/img/profile-slide01.jpg"
      }
    }
  ]
};

const socialList = [
  { url: "#", icon: "facebook" },
  { url: "#", icon: "twitter" },
  { url: "#", icon: "share" }
];

const requirementsData = {
  title: "Adoption Requirements",
  list: [
    {
      text: "We ask that all adult residents meet the cat to ensure he or she is a match for the entire family.",
      img: { src: "src/assets/img/icon-contact-form.svg", alt: "" }
    },
    {
      text: "Meet with an adoption counselor and fill out our adoption application in person. Please plan to spend 60-90 minutes to complete the adoption process, including visitation and paperwork.",
      img: { src: "src/assets/img/icon-puzzle.svg", alt: "" }
    },
    {
      text: "You must be at least 18 years of age.",
      img: { src: "src/assets/img/icon-age-limit.svg", alt: "" }
    },
    {
      text: "You must show a picture ID with a current address. If this isn't available, we will accept a picture ID with a current utility bill.",
      img: { src: "src/assets/img/icon-driving-license.svg", alt: "" }
    },
    {
      text: "You must live within 100 miles of Austin. Adopters of cats who are not yet spayed or neutered must live within Travis or Williamson County, and must put down a refundable $100 deposit in order to take the cat home prior to the surgery.",
      img: { src: "src/assets/img/icon-mobility.svg", alt: "" }
    }
  ]
};

const whatsIncludedData = {
  title: "What’s Included?",
  list: {
    data: [
      "Spaying/neutering",
      "Current vaccinations",
      "Deworming",
      "Heartworm test (for dogs)",
      "Flea/tick treatment(s)",
      "Microchipping",
      "A free “starter” bag of Science Diet dry food",
      "Access to our 24-hour emergency line for post-adoption health or behavior concerns",
      "Free access to our behavior team for follow-up behavioral training and counseling",
      "A free follow-up exam at our clinic or a VCA hospital within 2 weeks of adoption, plus $250 in post-adoption services as needed"
    ]
  }
};

const textBannerData = {
  title: "Need more info on adopting or fostering?",
  text: "You’ve got questions and we’ve got you covered.",
  buttons: [
    { text: "Learn more about adoption" },
    { variant: "outline", text: "Learn more about fostering" }
  ]
};

const postCardsSectionData = {
  title: "Featured dogs",
  blogPosts: [
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
  ],
  buttons: [{ text: "All adoptable dogs", url: "#!" }]
};
</script>
