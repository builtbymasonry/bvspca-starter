<template>
  <HeroInner v-bind="heroInnerData" />

  <section class="bg-gray-dark py-14 lg:py-28">
    <div class="mx-auto max-w-4xl px-4">
      <div class="mx-auto mb-10 max-w-xl text-center text-sm">
        <h2 class="mb-4 text-2xl font-bold md:text-3xl xl:text-5xl">
          How do you report cruelty?
        </h2>
        <p>
          If you have any questions or concerns about animal protective services
          in your neighborhood, please reach out
        </p>
      </div>
      <div class="grid grid-cols-1 items-start gap-10 sm:grid-cols-2 sm:gap-8">
        <ContactCard
          v-for="card in contactCards"
          :key="card.title"
          v-bind="card"
        />
      </div>
    </div>
  </section>

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-7xl px-4">
      <PostModule v-bind="postModuleData" />
    </div>
  </section>

  <section class="bg-purple py-14 text-white lg:py-28">
    <div class="mx-auto max-w-7xl px-4">
      <h2 class="mb-8 text-center text-2xl font-bold md:text-3xl xl:text-4xl">
        The following are some guidelines to help you recognize cruelty:
      </h2>
      <List
        class="mx-auto max-w-5xl text-xs font-bold sm:text-sm md:columns-2 md:gap-10 lg:gap-14 lg:px-14"
        v-bind="listData"
      />
    </div>
  </section>

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-5xl px-4">
      <PostModule class="text-xs" v-bind="postModuleData2" />
      <div class="mx-auto max-w-2xl pt-14 text-center text-xs lg:pt-24">
        <h2 class="mb-4 text-2xl font-bold md:text-3xl xl:text-4xl">
          What should I do if an animal bites me?
        </h2>
        <p>
          In addition to seeking medical treatment, you should notify the
          Brandywine Valley SPCA’s Animal Protective Services Division at
          484-302-0018 as well as the local police department where the bite
          occurred. All animal bites, whether they are from stray, wild, or
          domesticated animals, should be reported right away.
        </p>
      </div>
    </div>
  </section>

  <section class="bg-gray-dark py-14 lg:py-28">
    <div class="mx-auto max-w-5xl px-4">
      <h2 class="mb-8 text-center text-2xl font-bold">
        A dog that is declared dangerous will return to its owner per state law
        and the owner is required to follow the directives of the law which
        include:
      </h2>
      <List
        class="mx-auto max-w-5xl text-xs sm:text-sm md:columns-2 md:gap-10 lg:gap-14 lg:px-10"
        v-bind="listData2"
      />
    </div>
  </section>

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-4xl px-4">
      <PostModule class="text-sm" v-bind="postModuleData3" />
    </div>
  </section>

  <PostCardsSection class="pt-0 lg:pt-0" v-bind="postCardsSectionData" />
</template>

<script setup>
import Button from "@/components/Button.vue";
import HeroInner from "@/components/HeroInner.vue";
import ContactCard from "@/components/ContactCard.vue";
import List from "@/components/List.vue";
import PostModule from "@/components/PostModule.vue";
import PostCard from "@/components/PostCard.vue";
import PostCardsSection from "@/components/sections/PostCardsSection.vue";

const heroInnerData = {
  title: `Reporting \nanimal cruelty`,
  img: { src: "src/assets/img/hero-image-08.jpg", alt: "Lost & found pets" }
};

const contactCards = [
  {
    title: "Pennsylvania APS",
    contactItems: [
      {
        title: "Chester and Delaware Counties only:",
        link: {
          url: "(484) 302-0018",
          type: "tel"
        }
      }
    ],
    button: { text: "Report abuse PA", url: "#!" }
  },
  {
    title: "Delaware Animal Services",
    contactItems: [
      {
        title: "New Castle, Kent & Sussex Counties:",
        link: {
          url: "(302) 255-4646",
          type: "tel"
        }
      },
      {
        title: "City of Newark – within city limits (Newark Police)",
        link: {
          url: "(302) 366-7111",
          type: "tel"
        }
      },
      {
        title: "City of Dover – within city limits (Dover Police)",
        link: {
          url: "(302) 736-7111",
          type: "tel"
        }
      }
    ],
    button: { text: "Report abuse DE", url: "#!" }
  }
];

const postModuleData = {
  img: { src: "src/assets/img/content-img-14.jpg", alt: "" },
  title: { text: "No animal deserves to suffer from cruelty and the Brandywine Valley SPCA’s Animal Protective Services Department works tirelessly to prevent abuse and protect companion animals." },
  textGrid: [
    {
      title: "Benefit one",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia."
    },
    {
      title: "Benefit two",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia."
    },
    {
      title: "Benefit three",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia."
    },
    {
      title: "Benefit four",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia."
    }
  ],
  layoutAlt: true,
  stretchColumns: true
};

const listData = {
  data: [
    "All animals require shelter from the rain, snow, wind, and sun. Shelter is any non-metal structure that will keep the animal warm and dry.",
    "All animals require necessary veterinary care. Necessary vet care is that which is required to treat illness or injury.",
    "All animals require clean and sanitary living conditions. Living space should be free of debris, and waste should be removed routinely.",
    "All animals require necessary drink and sustenance. Water and food must be provided in amounts sufficient to maintain weight and hydration.",
    "No animal can be abandoned. Abandoned animals are those whose caretaker has forsaken their duty of care.",
    "No animal can be beaten or neglected."
  ]
};

const listData2 = {
  bulletClass: "text-red",
  data: [
    "Register the animal with the Bureau of Dog Law Enforcement and re-register on an annual basis. The registration fee is $500 per calendar year for the life of the dog.",
    "Confine the dog in a proper enclosure and post a warning sign with a symbol that warns the public of the presence of a dangerous dog.",
    "Keep the dog muzzled and leashed when outside of the proper enclosure.",
    "Have the dog sterilized and microchipped.",
    "Remain compliant with court ordered restitution.",
    "Be compliant with court ordered restitution.",
    "Post a bond or purchase and maintain liability insurance in the amount of $50,000 to pay for injuries inflicted by the dog. This insurance must not be cancelled during the license period unless the owner disposes of the dog.",
    "Sign a statement providing that the owner will notify the Bureau of Dog Law Enforcement, state dog warden, and local police if the dog is loose, attacks a human or animal, or dies."
  ]
};

const postModuleData2 = {
  img: { src: "src/assets/img/content-img-15.jpg", alt: "" },
  title: { text: "Dangerous dogs", size: "md"},
  text: ["Dangerous dogs are governed by state law. By law, a dog may be declared dangerous dog if it has attacked, inflicted severe injury to, or killed a human being or a domestic animal without provocation. A dog may also be considered dangerous if it was involved in committing a crime. For a dog to be declared dangerous in Pennsylvania, a police officer must file a complaint with a magisterial district justice charging the owner or keeper with harboring a dangerous dog. Brandywine Valley SPCA’s Animal Protective Services Division does not have police powers and cannot file charges of harboring a dangerous dog. Police must file charges against the owner of the dog and the case must go before a judge in order for any dog to be declared dangerous. The judge will make the final disposition on the animal."],
  reverse: true
};

const postModuleData3 = {
  img: { src: "src/assets/img/content-img-04.jpg", alt: "" },
  title: { text: "Give back to your community", size: "md"},
  text: ["Open the door to endless possibilities. Together, we will create positive change within our community, help control the homeless animal population, and improve the lives of pets and their families."],
  buttons: [{ text: "Donate", url: "#!" }],
  reverse: true
};

const postCardsSectionData = {
  title: "Animal cruelty related news & resources",
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
</script>
