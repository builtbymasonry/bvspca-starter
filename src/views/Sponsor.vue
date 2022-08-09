<template>
  <HeroInner v-bind="heroInnerData" />

  <section class="bg-gray-dark py-14 lg:py-28">
    <div class="mx-auto max-w-7xl px-4">
      <PostModule class="text-xs" v-bind="postModuleData" />
    </div>
  </section>

  <section class="bg-skew bg-purple py-14 pb-8 text-white lg:py-28 lg:pb-8">
    <div class="xsm:px-8 mx-auto max-w-7xl px-4">
      <div class="mx-auto mb-16 max-w-2xl text-center text-xs font-bold">
        <h2 class="mb-3 text-2xl md:text-3xl xl:text-5xl">
          Sponsorship Levels
        </h2>
        <p>
          Whether it’s a shout-out to your business on our social media handles,
          a premier ad spot in our Gala Program Book, or your company logo
          featured on a 20-foot banner during one of our Mega Adoption Events,
          sponsoring with the BVSPCA will help you extend your scope of
          influence to a whole new level.
        </p>
      </div>
      <div class="xsm:-m-4 -m-2 flex flex-wrap justify-center">
        <div
          v-for="card in sposnorshipLevelsData"
          :key="card.title"
          class="grow-1 xsm:p-4 flex w-full p-2 sm:w-1/2 lg:w-1/3"
        >
          <CardLevel v-bind="card" />
        </div>
      </div>
    </div>
  </section>

  <section class="relative pt-40 pb-28 sm:pt-60 md:pb-0">
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
    class="bg-gray-dark hidden py-14 md:block md:pt-48 lg:py-28 lg:pt-60"
  >
    <div class="mx-auto max-w-7xl px-4">
      <h2 class="mb-10 text-center text-2xl font-bold md:text-3xl xl:text-5xl">
        Our sponsors
      </h2>
    </div>
    <MarqueeSponsors :slides="sponsorSlides" />
  </section>

  <section>
    <div class="divide-gray-light mx-auto max-w-6xl divide-y-2 px-4">
      <div class="px-5 py-14 md:px-14 lg:py-28">
        <h2
          class="mb-10 text-center text-2xl font-bold md:mb-20 md:text-3xl xl:text-5xl"
        >
          Gold sponsors
        </h2>
        <div
          class="grid grid-cols-2 items-center justify-center gap-10 sm:grid-cols-3 sm:gap-14 md:gap-20"
        >
          <div
            class="flex items-center justify-center"
            v-for="logo in goldSponsorsLogos"
            :key="logo.src"
            v-bind="logo"
          >
            <a class="hover:scale-[105%] transition-transform" :href="logo.url" target="_blank">
              <img :src="logo.src" :alt="logo.alt" />
            </a>
          </div>
        </div>
      </div>

      <div class="px-5 py-14 md:px-14 lg:py-28">
        <h2
          class="mb-10 text-center text-2xl font-bold md:mb-20 md:text-3xl xl:text-5xl"
        >
          Silver sponsors
        </h2>
        <div
          class="grid grid-cols-2 items-center justify-center gap-10 sm:grid-cols-3 sm:gap-14 md:gap-20"
        >
          <div
            class="flex items-center justify-center"
            v-for="logo in goldSponsorsLogos"
            :key="logo.src"
            v-bind="logo"
          >
            <a class="hover:scale-[105%] transition-transform" :href="logo.url" target="_blank">
              <img :src="logo.src" :alt="logo.alt" />
            </a>
          </div>
        </div>
      </div>

      <div class="px-5 py-14 md:px-14 lg:py-28">
        <h2
          class="mb-10 text-center text-2xl font-bold md:mb-20 md:text-3xl xl:text-5xl"
        >
          Bronze sponsors
        </h2>
        <div
          class="grid grid-cols-2 items-center justify-center gap-10 sm:grid-cols-3 sm:gap-14 md:gap-20"
        >
          <div
            class="flex items-center justify-center"
            v-for="logo in goldSponsorsLogos"
            :key="logo.src"
            v-bind="logo"
          >
            <a class="hover:scale-[105%] transition-transform" :href="logo.url" target="_blank">
              <img :src="logo.src" :alt="logo.alt" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <PostCardsSection class="bg-gray-dark" v-bind="postCardsSectionData" />
</template>

<script setup>
import HeroInner from "@/components/HeroInner.vue";
import PostModule from "@/components/PostModule.vue";
import CardLevel from "@/components/CardLevel.vue";
import InfoCard from "@/components/InfoCard.vue";
import MarqueeSponsors from "@/components/MarqueeSponsors.vue";
import PostCardsSection from "@/components/sections/PostCardsSection.vue";

const heroInnerData = {
  title: "Sponsor",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
  img: { src: "src/assets/img/hero-image-21.jpg", alt: "" }
};

const postModuleData = {
  title: {
    text: "Give back to your community and help your business",
    size: "md"
  },
  text: [
    "When you team up with the Brandywine Valley SPCA as a Corporate Sponsor, you open the door to endless possibilities. Together, we will create positive change within our community, help control the homeless animal population, and improve the lives of pets and their families. Aligning your business with the positive mission of humane animal treatment will create an incredible impact on your corporate brand and support the needs of the community.",
    "With continuous successes, the BVSPCA offers our Corporate Sponsors a variety of opportunities for exposure throughout Southeastern Pennsylvania, the entire state of Delaware, parts of Maryland and New Jersey, and even on an ever-growing national level as we reach a large and loyal following of animal advocates across the region. Our immensely popular signature events (Walk for Paws, Forget-Me-Not Gala, and Bark on the Boards) intimately connect us with more than 1,000 attendees each year."
  ],
  carousel: {
    slides: [
      { src: "src/assets/img/slide10.jpg", alt: "" },
      { src: "src/assets/img/slide09.jpg", alt: "" },
      { src: "src/assets/img/slide08.jpg", alt: "" },
      { src: "src/assets/img/slide07.jpg", alt: "" }
    ]
  },
  reverse: true
};

const postCardsSectionData = {
  title: "Donation related events & resources",
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

const sposnorshipLevelsData = [
  {
    img: { src: "src/assets/img/pet-dog-01.svg", alt: "" },
    title: "Bronze",
    subtitle: "$5,000",
    customList: {
      data: [
        "Quarter page advertisement in signature event programs",
        "Vendor table at Walk for Paws or Bark on the Boards",
        "Two tickets to our \nForget-Me-Not Gala"
      ],
      bulletClass: "text-red"
    },
    button: { text: "Become a bronze sponsor", url: "#!" }
  },
  {
    img: { src: "src/assets/img/pet-dog-02.svg", alt: "" },
    title: "Silver",
    subtitle: "$10,000",
    customList: {
      data: [
        "Banner at signature events",
        "Half page advertisement in signature event programs",
        "Vendor table at Walk for Paws or Bark on the Boards in prominent location",
        "Six tickets to our \nForget-Me-Not Gala"
      ],
      bulletClass: "text-red"
    },
    button: { text: "Become a silver sponsor", url: "#!" }
  },
  {
    img: { src: "src/assets/img/pet-dog-03.svg", alt: "" },
    title: "Gold",
    subtitle: "$20,000",
    customList: {
      data: [
        "Banner at signature events",
        "Full page advertisement in signature event programs",
        "Recognition at signature events",
        "Vendor table at Walk for Paws or Bark on the Boards in prime location",
        "Corporate table with ten tickets at our Forget-Me-Not Gala"
      ],
      bulletClass: "text-red"
    },
    button: { text: "Become a gold sponsor", url: "#!" }
  }
];

const infoCardData = {
  img: { src: "src/assets/img/content-img-32.jpg", alt: "" },
  title: "Our brand reaches more than 175,000 contacts",
  text: "Social media and email marketing, plus 6,000 new users visit the BVSPCA website daily. Each week, we are featured in at least 15 media outlets, and we regularly receive coverage on our local Fox, ABC, and NBC affiliates.",
  buttons: [
    { text: "Learn more about our impact", url: "#!" },
    { variant: "outline", text: "Get involved", url: "#!" }
  ]
};

const sponsorSlides = [
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo01.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo02.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo03.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo04.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo05.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo06.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo07.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo07.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo01.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo02.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo03.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo04.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo02.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo03.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo04.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo02.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo03.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo04.png", alt: "" },
    url: "#!"
  }
];

const goldSponsorsLogos = [
  { url: "#", src: "src/assets/img/sponsors/sponsor-logo01.png", alt: "" },
  { url: "#", src: "src/assets/img/sponsors/sponsor-logo02.png", alt: "" },
  { url: "#", src: "src/assets/img/sponsors/sponsor-logo04.png", alt: "" },
  { url: "#", src: "src/assets/img/sponsors/sponsor-logo05.png", alt: "" },
  { url: "#", src: "src/assets/img/sponsors/sponsor-logo07.png", alt: "" },
  {
    url: "#",
    src: "src/assets/img/sponsors/sponsor-della-torre-team.png",
    alt: ""
  },
  { url: "#", src: "src/assets/img/sponsors/sponsor-dc-medical.png", alt: "" },
  {
    url: "#",
    src: "src/assets/img/sponsors/sponsor-diamond-chiropractic.png",
    alt: ""
  },
  { url: "#", src: "src/assets/img/sponsors/sponsor-logo03.png", alt: "" },
  { url: "#", src: "src/assets/img/sponsors/sponsor-logo06.png", alt: "" },
  { url: "#", src: "src/assets/img/sponsors/sponsor-terra.png", alt: "" },
  { url: "#", src: "src/assets/img/sponsors/sponsor-united.png", alt: "" }
];
</script>
