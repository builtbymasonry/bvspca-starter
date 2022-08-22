<template>
  <HeroInner v-bind="heroInnerData" />

  <section class="bg-gray py-14 lg:py-28">
    <div class="mx-auto max-w-6xl px-4">
      <PostModule v-bind="postModuleData" />
      <PostModule class="mt-10 text-sm" v-bind="postModuleData2" />
    </div>
  </section>

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-5xl px-4">
      <div class="mb-10 space-y-2 text-center text-xs md:mb-14">
        <h2 class="text-2xl font-bold md:text-3xl xl:text-5xl">
          Adoption fees
        </h2>
        <p>
          We value every animal equally and consider them all to be priceless.
          Our adoption fees vary and are dependent on many factors, including:
          age, size, breed, behavior, medical condition, and public demand. The
          higher adoption fees for easier to place animals gives us additional
          resources to provide extra help to other animals in our shelter – such
          as those that may require additional surgery, medical treatment, or
          behavior training; those who are on hold due to pending animal cruelty
          investigations; or those who simply have a more difficult time finding
          the right family and take a little longer to find their forever home.
        </p>
      </div>

      <div class="mb-10 text-sm md:mb-20">
        <h3
          v-if="petFeesData.title"
          class="bg-purple rounded-full p-3 text-center text-lg font-bold text-white"
        >
          {{ petFeesData.title }}
        </h3>
        <div
          v-for="row in petFeesData.rows"
          :key="row.title"
          class="odd:bg-gray-dark flex rounded px-5 py-5 sm:px-10 sm:py-3 lg:rounded-lg lg:px-0"
        >
          <div
            class="w-3/5 pr-12 sm:pr-0 lg:grid lg:w-[70%] lg:grid-cols-2 lg:space-x-10 lg:px-12"
          >
            <h4 class="font-bold">{{ row.title }}</h4>
            <p
              v-if="row.description"
              class="mt-1 text-xs leading-relaxed lg:mt-0 lg:text-sm"
            >
              {{ row.description }}
            </p>
          </div>
          <div
            class="w-2/5 text-right font-bold lg:w-[30%] lg:pl-16 lg:text-left"
          >
            <div>{{ row.price }}</div>
            <div class="text-xxs font-normal">{{ row.priceInfo }}</div>
          </div>
        </div>
      </div>

      <div
        class="rounded-sm bg-white px-6 py-12 shadow sm:mx-6 sm:p-14 lg:rounded-lg lg:p-20"
      >
        <h2
          class="mb-6 text-center text-2xl font-bold sm:mb-10 md:text-3xl xl:text-5xl"
        >
          {{ whatsIncludedCardData.title }}
        </h2>
        <List
          class="text-xs md:columns-2 md:text-sm lg:px-10"
          v-bind="whatsIncludedCardData.list"
        />
      </div>
    </div>
  </section>

  <MapLocations class="bg-gray-dark" :locations="locations" />

  <section class="bg-gray py-14 lg:py-28">
    <div class="mx-auto max-w-3xl px-4">
      <h2 class="mb-10 text-center text-2xl font-bold md:text-3xl xl:text-5xl">
        Frequently asked questions
      </h2>
      <Accordion :items="faq" dividerColor="border-gray-darkest" />
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
    class="bg-skew bg-skew-reverse bg-purple pt-8 pb-20 text-white md:py-24 lg:py-32"
  >
    <div class="mx-auto max-w-4xl px-4">
      <PostModule class="text-sm" v-bind="PostModuleData3" />
    </div>
  </section>

  <PostCardsSection v-bind="postCardsSectionData" />
</template>

<script setup>
import HeroInner from "@/components/HeroInner.vue"
import PostModule from "@/components/PostModule.vue"
import List from "@/components/List.vue"
import MapLocations from "@/components/MapLocations.vue"
import Accordion from "@/components/Accordion.vue"
import InfoCard from "@/components/InfoCard.vue"
import PostCardsSection from "@/components/sections/PostCardsSection.vue"

const heroInnerData = {
  title: "Adoption info",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
  img: { src: "/img/hero-image-19.jpg", alt: "" }
};

const postModuleData = {
  title: { text: "Adoption Process", size: "md" },
  text: [
    "We strongly encourage all members of a family to come and meet with any pet being considered, being that the addition of a new pet is, in our eyes, the equivalent of adding a new family member.  We also recommend that potential adopters be mindful of lifestyle, level of activity, work situations, and living situations when deciding which dog or cat is right for them."
  ],
  textGrid: [
    {
      title: "Feature one",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia."
    },
    {
      title: "Feature two",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia."
    }
  ],
  carousel: {
    slides: [
      { src: "/img/slide09.jpg", alt: "slide alt1" },
      { src: "/img/slide03.jpg", alt: "slide alt2" },
      { src: "/img/slide04.jpg", alt: "slide alt3" },
      { src: "/img/slide06.jpg", alt: "slide alt4" }
    ]
  },
  reverse: true
};

const postModuleData2 = {
  title: { text: "What to bring", size: "md" },
  customList: {
    data: [
      "A current driver’s license (you must be over 18 years of age to adopt)",
      "Necessary fees for adoption (credit card payment only, no cash or checks)",
      "Appropriate handling items for the animal that you are adopting: a carrier for a cat or other small item (available to be purchased at our shelter) or a collar and leash if you are adopting a dog (also available to be purchased at our shelter)"
    ],
    bulletClass: "text-red"
  },
  img: { src: "/img/content-img-26.jpg", alt: "" },
  buttons: [{ text: "Adopt today", url: "#!" }]
};

const PostModuleData3 = {
  title: { text: "Give back to your community", size: "lg" },
  text: [
    "Open the door to endless possibilities. Together, we will create positive change within our community, help control the homeless animal population, and improve the lives of pets and their families."
  ],
  img: { src: "/img/content-img-04.jpg", alt: "" },
  buttons: [
    { variant: "secondary", text: "Donate", url: "#!" },
    { variant: "outlineSecondary", text: "Sponsor", url: "#!" }
  ],
  reverse: true
};

const petFeesData = {
  title: "Fees by pet",
  rows: [
    {
      title: "Small dogs",
      description: "Over 6 months old, under 40 lbs.",
      price: "$350"
    },
    {
      title: "Large dogs",
      description: "Over 6 months old, under 40 lbs.",
      price: "$225 or $350",
      priceInfo: "(depending on factors like age & size)"
    },
    {
      title: "Puppies",
      description: "Up to 6 months old",
      price: "$20 Cats"
    },
    {
      title: "Cats",
      description: "Over to 6 months old",
      price: "$35"
    },
    {
      title: "Kittens",
      description: "Up to 6 months old",
      price: "$65"
    },
    {
      title: "Rabbits",
      price: "$30"
    },
    {
      title: "Guinea Pigs",
      price: "$20"
    },
    {
      title: "Ferrets",
      price: "$60"
    },
    {
      title: "Mice, Gerbils, Rats, Hamsters",
      price: "$10"
    }
  ]
};

const whatsIncludedCardData = {
  title: "What’s Included",
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
    ],
    bulletClass: "text-red"
  }
};

const locations = [
  {
    name: "Dover",
    address: ["1757 Horsepond Rd.", "Dover, DE 19901"],
    phone: [
      { title: "Main", number: "(484) 302-0018" },
      { title: "AHC", number: "(302) 516-1004" }
    ],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 39.1414900571048,
      lng: -75.47439972883507
    }
  },
  {
    name: "New Castle",
    address: ["600 South Street", "New Castle, DE 19720"],
    phone: [{ title: "Main", number: "(302) 516-1005" }],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 39.65997584020019,
      lng: -75.57023031534025
    }
  },
  {
    name: "Georgetown",
    address: ["22918 Dupont Boulevard", "Georgetown, DE 19947"],
    phone: [
      { title: "Main", number: "(302) 858-4203" },
      { title: "AHC", number: "(302) 516-1004" }
    ],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 38.66560267717307,
      lng: -75.38127138650519
    }
  },
  {
    name: "West Chester",
    address: ["600 South Street", "New Castle, DE 19720"],
    phone: [{ title: "Main", number: "(302) 516-1005" }],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 39.65997584020019,
      lng: -75.57023031534025
    }
  },
  {
    name: "Malvern",
    address: ["600 South Street", "New Castle, DE 19720"],
    phone: [{ title: "Main", number: "(302) 516-1005" }],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 39.65997584020019,
      lng: -75.57023031534025
    }
  },
  {
    name: "Plymouth Meeting",
    address: ["600 South Street", "New Castle, DE 19720"],
    phone: [{ title: "Main", number: "(302) 516-1005" }],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 39.65997584020019,
      lng: -75.57023031534025
    }
  },
  {
    name: "ARC",
    address: ["600 South Street", "New Castle, DE 19720"],
    phone: [{ title: "Main", number: "(302) 516-1005" }],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 39.65997584020019,
      lng: -75.57023031534025
    }
  },
  {
    name: "Eastern Shore Pet Resort",
    address: ["600 South Street", "New Castle, DE 19720"],
    phone: [{ title: "Main", number: "(302) 516-1005" }],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 39.65997584020019,
      lng: -75.57023031534025
    }
  }
];

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

const infoCardData = {
  title: "We place over 16,000 animals a year",
  text: "We were the first open-admission no-kill shelter in Pennsylvania, and we have led Delaware to becoming the first no-kill state in the United States.",
  img: { src: "/img/content-img-01.jpg", alt: "" },
  buttons: [{ text: "Learn more about our impact", url: "#!" }]
};

const postCardsSectionData = {
  title: "Adoption related events & resources",
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
