<template>
  <HeroInner v-bind="heroInnerData" class="bg-gray-dark" />

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-5xl px-4">
      <PostInline v-bind="postInlineData" />
    </div>
  </section>

  <section class="py-14 lg:py-28 bg-gray-dark">
    <div class="mx-auto max-w-6xl px-4">
      <PostInline v-bind="postInlineData2" />
    </div>
  </section>

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-6xl px-4">
      <h2 class="mb-10 text-center text-2xl font-bold md:mb-16 md:text-3xl xl:text-5xl">
        Our history
      </h2>

      <div class="mx-auto max-w-xs md:max-w-xl lg:max-w-3xl space-y-16 md:space-y-0">
        <div
          v-for="item in gridHistory"
          :key="item.title"
          class="lines w-full relative md:flex odd:justify-start even:justify-end"
        >
          <div class="p-5 w-full md:w-1/2 lg:w-2/5 h-56 relative z-2 flex flex-col items-center justify-center rounded-lg bg-white shadow whitespace-pre-wrap text-center">
            <img class="mx-auto mb-2" v-bind="item.img"/>
            <h3 class="text-lg font-bold">{{item.title}}</h3>
          </div>
          <img
            v-if="item.imgDecor"
            class="absolute top-1/2"
            :class="item.imgDecor.assets"
            v-bind="item.imgDecor"
          />
        </div>
      </div>
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
      <PostInline v-bind="postInlineData3" />
    </div>
  </section>

  <section class="py-14 lg:py-28 bg-gray-dark">
    <div class="mx-auto max-w-7xl px-14 sm:px-4">
      <h2 class="mb-10 text-center text-2xl font-bold md:mb-16 md:text-3xl xl:text-5xl">
        Get to know us
      </h2>
      <h3 class="pb-3 mb-10 border-b-2 border-gray-light text-lg text-gray-light font-bold text-center sm:text-left">Leadership</h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-8">
        <ContactPersonCard
          v-for="card in staff"
          v-bind="card"
          :key="card.title"
        />
      </div>
    </div>
  </section>

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-4xl px-4">
      <div class="mb-12 mx-auto max-w-xl text-xs text-center">
        <h2 class="mb-4 text-center text-2xl font-bold md:text-3xl xl:text-5xl">
          Board of Directors
        </h2>
        <p>The Brandywine Valley SPCA is governed by our Board of Directors who are elected and serve on the board for a two-year term. The board provides fundamental insight into the communities we are a part of, as well as utilize their resources to help fundraise on behalf of the organization.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-14 lg:gap-24 lg:px-7 text-center sm:text-left">
        <div class="space-y-4">
          <h3 class="pb-3 mb-8 border-b-2 border-gray-dark text-lg text-gray-light font-bold">Executive Committee</h3>
          <div
            v-for="item in executiveCommitteeData"
            :key="item.name"
          >
            <h4 class="mb-0.5 text-lg md:text-xl font-bold">{{item.name}}</h4>
            <p class="text-xs md:text-sm font-bold text-gray-light">{{item.role}}</p>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="pb-3 mb-8 border-b-2 border-gray-dark text-lg text-gray-light font-bold text-center sm:text-left">Board Members</h3>
          <div
            v-for="item in executiveCommitteeData"
            :key="item.name"
          >
            <h4 class="mb-0.5 text-lg md:text-xl font-bold">{{item.name}}</h4>
            <p class="text-xs md:text-sm font-bold text-gray-light">{{item.role}}</p>
          </div>
        </div>
      </div>

      <div class="mt-16 lg:mt-28 mx-auto max-w-5xl text-xs text-center">
        <h2 class="mb-10 text-center text-2xl font-bold md:mb-16 md:text-3xl xl:text-5xl">
          Advisory Board Members
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-8 text-center sm:text-left">
        <div class="space-y-4">
          <h3 class="pb-3 mb-8 border-b-2 border-gray-dark text-lg text-gray-light font-bold text-center sm:text-left">Executive Committee</h3>
          <div
            v-for="item in executiveCommitteeData"
            :key="item.name"
          >
            <h4 class="mb-0.5 text-lg md:text-xl font-bold">{{item.name}}</h4>
            <p class="text-xs md:text-sm font-bold text-gray-light">{{item.role}}</p>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="pb-3 mb-8 border-b-2 border-gray-dark text-lg text-gray-light font-bold text-center sm:text-left">Advisory Members</h3>
          <div
            v-for="item in executiveCommitteeData"
            :key="item.name"
          >
            <h4 class="mb-0.5 text-lg md:text-xl font-bold">{{item.name}}</h4>
            <p class="text-xs md:text-sm font-bold text-gray-light">{{item.role}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-14 lg:py-28 bg-gray-dark">
    <div class="mx-auto max-w-4xl px-4">
      <PostInline v-bind="postInlineData4" />
    </div>
  </section>

  <PostCardsSection v-bind="postCardsSectionData" />
</template>

<script setup>
import HeroInner from "@/components/HeroInner.vue";
import PostInline from "@/components/PostInline.vue";
import InfoCard from "@/components/InfoCard.vue";
import ContactPersonCard from "@/components/ContactPersonCard.vue";
import PostCardsSection from "@/components/PostCardsSection.vue";

const heroInnerData = {
  title: "About us",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
  img: { src: "src/assets/img/hero-image-14.jpg", alt: "About Us" }
};

const postInlineData = {
  title: "Our mission & vision",
  text: ["Founded in 1929, the Brandywine Valley SPCA exists to end animal suffering and to involve the entire community in the welfare and well-being of animals. Our mission is to put the “human” back in humane animal treatment and advocate on their behalf. Our vision is to be the recognized leader in animal welfare that empowers communities to treat life with respect and dignity."],
  video: {
    src: "https://www.youtube.com/embed/BHACKCNDMW8",
    thumb: {
      src: "src/assets/img/content-img-99.jpg",
      alt: ""
    }
  }
};

const postInlineData2 = {
  title: "How we do it",
  text: [ "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi. Pellentesque finibus lorem dignissim bibendum pretium. Maecenas efficitur varius feugiat. Vestibulum eu mi ac diam mollis euismod. Etiam pharetra dui sit amet tempus scelerisque. Vivamus et dolor tellus. Donec vulputate, justo vitae lobortis tempus, metu." ],
  buttons: [{ text: "Support our cause", url: "#!" }],
  carousel: {
    slides: [
      { src: "src/assets/img/slide06.jpg", alt: "slide alt1" },
      { src: "src/assets/img/slide04.jpg", alt: "slide alt2" },
      { src: "src/assets/img/slide03.jpg", alt: "slide alt3" },
      { src: "src/assets/img/slide04.jpg", alt: "slide alt4" }
    ]
  },
  reverse: true
};

const postInlineData3 = {
  title: "Give back to your community",
  text: ["Open the door to endless possibilities. Together, we will create positive change within our community, help control the homeless animal population, and improve the lives of pets and their families."],
  img: { src: "src/assets/img/content-img-04.jpg", alt: "" },
  reverse: true,
  buttons: [
    { variant: "secondary", text: "Donate", url: "#!" },
    { variant: "outlineSecondary", text: "Sponsor", url: "#!" }
  ]
};

const postInlineData4 = {
  title: "Join the team",
  text: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi. "],
  img: { src: "src/assets/img/content-img-22.jpg", alt: "" },
  buttons: [{ text: "View open positions", url: "#!" }]
};

const gridHistory = [
  {
    title: `The Chester County SPCA \nwas founded`,
    img: { src: "src/assets/img/label-history-01.svg", alt: "" }
  },
  {
    title: `Non-Profit status was \nofficially established`,
    img: { src: "src/assets/img/label-history-02.svg", alt: "" },
    imgDecor: {
      src: "src/assets/img/pet-dog-01.svg",
      alt: "",
      assets: "left-[8.3%] -mt-[34px]"
    }
  },
  {
    title: `The first CCSPCA Horse \nShow took place`,
    img: { src: "src/assets/img/label-history-03.svg", alt: "" },
    imgDecor: {
      src: "src/assets/img/pet-cat-01.svg",
      alt: "",
      assets: "left-[75%] lg:left-[51.5%] -mt-[33px]"
    }
  },
  {
    title: `The CCSPCA’s first \nWalk for Paws`,
    img: { src: "src/assets/img/label-history-04.svg", alt: "" },
    imgDecor: {
      src: "src/assets/img/pet-dog-02.svg",
      alt: "",
      assets: "left-[20%] lg:left-[42%] -mt-[52px]"
    }
  },
  {
    title: `The CCSPCA’s Forget-Me-\nNot Gala premiers`,
    img: { src: "src/assets/img/label-history-05.svg", alt: "" }
  },
  {
    title: "Began renovations to the Pennsylvania shelter",
    img: { src: "src/assets/img/label-history-06.svg", alt: "" },
    imgDecor: {
      src: "src/assets/img/pet-cat-02.svg",
      alt: "",
      assets: "left-[25.7%] -mt-[58px]"
    }
  },
  {
    title: "Completed Pennsylvania shelter renovations",
    img: { src: "src/assets/img/label-history-07.svg", alt: "" },
    imgDecor: {
      src: "src/assets/img/pet-dog-03.svg",
      alt: "",
      assets: "left-[50%] lg:left-[40%] -mt-[79px]"
    }
  },
  {
    title: "Opened the Muhly Spay/Neuter Clinic",
    img: { src: "src/assets/img/label-history-08.svg", alt: "" }
  },
  {
    title: "Announced CCSPCA as Pennsylvania’s first open admission, no-kill facility",
    img: { src: "src/assets/img/label-history-09.svg", alt: "" },
    imgDecor: {
      src: "src/assets/img/pet-cat-03.svg",
      alt: "",
      assets: "left-[73.8%] -mt-[28px]"
    }
  },
  {
    title: "Began servicing as Animal Control for Delaware State",
    img: { src: "src/assets/img/label-history-10.svg", alt: "" }
  },
  {
    title: "Opened shelter and clinic Delaware campus",
    img: { src: "src/assets/img/label-history-11.svg", alt: "" }
  },
  {
    title: "Opened new Pennsylvania clinic building",
    img: { src: "src/assets/img/label-history-12.svg", alt: "" },
    imgDecor: {
      src: "src/assets/img/pet-dog-04.svg",
      alt: "",
      assets: "left-[18.6%] -mt-[37px]"
    }
  },
  {
    title: `Re-branded as \nBrandywine Valley SPCA` ,
    img: { src: "src/assets/img/label-history-13.svg", alt: "" },
    imgDecor: {
      src: "src/assets/img/pet-dog-05.svg",
      alt: "",
      assets: "left-[61.5%] -mt-[61px]"
    }
  },
  {
    title: "Took over operations at the Georgetown, DE shelter",
    img: { src: "src/assets/img/label-history-14.svg", alt: "" }
  },
  {
    title: "Purchased the Animal Rescue Center in Georgetown and a shelter in Dover, DE",
    img: { src: "src/assets/img/label-history-15.svg", alt: "" },
    imgDecor: {
      src: "src/assets/img/pet-dog-06.svg",
      alt: "",
      assets: "left-[70%] lg:left-[47%] -mt-[32px]"
    }
  },
  {
    title: `Renovation of the \nGeorgetown campus`,
    img: { src: "src/assets/img/label-history-16.svg", alt: "" }
  },
  {
    title: `Opened the Dover \nCampus`,
    img: { src: "src/assets/img/label-history-17.svg", alt: "" },
    imgDecor: {
      src: "src/assets/img/pet-dog-07.svg",
      alt: "",
      assets: "left-[77%] -mt-[46px]"
    }
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

const staff = [
  {
    img: { src: "src/assets/img/person-01.jpg", alt: ""},
    title: "Adam Lamb",
    subtitle: "Chief Executive Officer",
    links: [
      { url: "(484) 302- 0025", type: "tel" },
      { url: "alamb@bvspca.org", type: "mailto" },
    ]
  },
  {
    img: { src: "src/assets/img/person-02.jpg", alt: ""},
    title: "Tanner Polce",
    subtitle: "Chief Advancement Officer",
    links: [
      { url: "(484) 302- 0025", type: "tel" },
      { url: "alamb@bvspca.org", type: "mailto" },
    ]
  },
  {
    img: { src: "src/assets/img/person-03.jpg", alt: ""},
    title: "Julie Landy",
    subtitle: "Chief Financial Officer",
    links: [
      { url: "alamb@bvspca.org", type: "mailto" },
    ]
  },
  {
    img: { src: "src/assets/img/person-04.jpg", alt: ""},
    title: "Linda Torelli",
    subtitle: "Chief Marketing Officer",
    links: [
      { url: "(302) 516-1013", type: "tel" },
      { url: "alamb@bvspca.org", type: "mailto" },
    ]
  },
  {
    img: { src: "src/assets/img/person-05.jpg", alt: ""},
    title: "Walter Fenstermacher",
    subtitle: "Director of Clinic Operations",
    links: [
      { url: "(302) 858-4200", type: "tel" },
      { url: "wfenstermacher@bvspca.org", type: "mailto" },
    ]
  },
  {
    img: { src: "src/assets/img/person-06.jpg", alt: ""},
    title: "Rachel Golub",
    subtitle: "Director of Operations",
    links: [
      { url: "(484) 302-8300", type: "tel" },
      { url: "rgolub@bvspca.org", type: "mailto" },
    ]
  },
  {
    img: { src: "src/assets/img/person-07.jpg", alt: ""},
    title: "AJ Haman",
    subtitle: "Sr. Operations Manager -PA",
    links: [
      { url: "(484) 302-0026", type: "tel" },
      { url: "ajhaman@bvspca.org", type: "mailto" },
    ]
  },
  {
    img: { src: "src/assets/img/person-08.jpg", alt: ""},
    title: "Lauren Cook",
    subtitle: "Sr. Operations Manager - DE",
    links: [
      { url: "(302) 516-1006", type: "tel" },
      { url: "lcook@bvspca.org", type: "mailto" },
    ]
  },
  {
    img: { src: "src/assets/img/person-09.jpg", alt: ""},
    title: "Eli Martinez",
    subtitle: "Sr/ Director of Development - PA",
    links: [
      { url: "(484) 302-0049", type: "tel" },
      { url: "emartinez@bvspca.org", type: "mailto" },
    ]
  },
  {
    img: { src: "src/assets/img/person-10.jpg", alt: ""},
    title: "Sarah Smith",
    subtitle: "Director of Annual Giving and Events",
    links: [
      { url: "(610) 424-0066", type: "tel" },
      { url: "ssmith@bvspca.org", type: "mailto" },
    ]
  },
  {
    img: { src: "src/assets/img/person-11.jpg", alt: ""},
    title: "Shelby Polce",
    subtitle: "Director of Community Engagement ",
    links: [
      { url: "(302) 219-1911", type: "tel" },
      { url: "spolce@bvspca.org", type: "mailto" },
    ]
  },
  {
    img: { src: "src/assets/img/person-12.jpg", alt: ""},
    title: "Crystal Cullin",
    subtitle: "Director of Clinic Services",
    links: [
      { url: "ccullin@bvspca.org", type: "mailto" },
    ]
  }
];

const executiveCommitteeData = [
  { name: "First Last", role: "President/Owner, Great Valley Propane"},
  { name: "First Last", role: "President/Owner, Great Valley Propane"},
  { name: "First Last", role: "President/Owner, Great Valley Propane"},
  { name: "First Last", role: "President/Owner, Great Valley Propane"},
  { name: "First Last", role: "President/Owner, Great Valley Propane"},
  { name: "First Last", role: "President/Owner, Great Valley Propane"},
  { name: "First Last", role: "President/Owner, Great Valley Propane"},
  { name: "First Last", role: "President/Owner, Great Valley Propane"}
];

const postCardsSectionData = {
  title: "What’s happening at BVSPCA",
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
