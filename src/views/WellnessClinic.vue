<template>
  <div>
    <HeroInner
      class="bg-gray-dark"
      :imgSrc="heroImg"
      imgAlt="Welness clinic"
      v-bind="heroInnerData"
    />

    <PostSection
      :imgSrc="postSectionImg"
      imgAlt="Affordable healthcare with an impact"
      v-bind="postSectionData"
      :buttons="[
        { variant: 'primary', text: 'Schedule an appointment' },
        { variant: 'outline', text: 'Learn more about our impact' }
      ]"
      reverse
    />

    <section class="py-14 lg:py-28 bg-purple">
      <div class="mx-auto max-w-6xl px-4">
        <h2 class="mb-8 md:mb-12 text-center text-2xl font-bold sm:text-3xl lg:text-5xl text-white">
          Dog wellness packages
        </h2>
        <TablePackages :data="dogPackages" />
      </div>
    </section>

    <section class="py-14 lg:py-28 bg-orange">
      <div class="mx-auto max-w-5xl px-4">
        <h2 class="mb-8 md:mb-12 text-center text-2xl font-bold sm:text-3xl lg:text-5xl">Cat wellness packages</h2>
        <TablePackages :data="catPackages" />
      </div>
    </section>

    <TextBanner
      class="bg-gray-dark"
      v-bind="textBannerData"
    />

    <section class="py-14 lg:py-28">
      <div class="mx-auto max-w-5xl px-4">
        <h2 class="mb-8 md:mb-12 text-center text-2xl font-bold sm:text-3xl lg:text-5xl">
          All Services
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
          :buttons="[{ variant: 'secondary', text: 'Clinic staff' }]"
        />
      </div>
    </section>

    <section class="py-14 lg:py-28">
      <div class="mx-auto max-w-5xl px-4">
        <PostInline
          class="mb-14 lg:mb-28"
          :imgSrc="postInlineImg02"
          imgAlt="Help us keep pet wellness affordable"
          v-bind="postInlineData2"
          :buttons="[{ variant: 'primary', text: 'Donate' }]"
          reverse
        />
        <PostInline
          :imgSrc="postInlineImg03"
          imgAlt="Pay it forward, your free time has so much value"
          v-bind="postInlineData3"
          :buttons="[{ variant: 'primary', text: 'Get involved' }]"
        />
      </div>
    </section>

    <section class="bg-gray-dark py-12 lg:py-20">
      <div class="mx-auto max-w-7xl px-4">
        <h2
          class="mb-10 text-center text-2xl font-bold tracking-wide md:mb-16 md:text-3xl xl:text-5xl"
        >
          Wellness clinic related news & resources
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
import ButtonLink from "@/components/ButtonLink.vue";

import HeroInner from "@/components/HeroInner.vue";
import heroImg from "@/assets/img/hero-image-03.jpg";

import PostSection from "@/components/PostSection.vue";
import postSectionImg from "@/assets/img/content-img-05.jpg";

import TablePackages from "@/components/TablePackages.vue";

import TableServices from "@/components/TableServices.vue";
import TextBox from "@/components/TextBox.vue";
import TextBanner from "@/components/TextBanner.vue";

import PostInline from "@/components/PostInline.vue";
import postInlineImg01 from "@/assets/img/content-img-06.jpg";
import postInlineImg02 from "@/assets/img/content-img-07.jpg";
import postInlineImg03 from "@/assets/img/content-img-08.jpg";

import PostCard from "@/components/PostCard.vue";
import PostCardImg07 from "@/assets/img/img-pet-07.jpg";
import PostCardImg08 from "@/assets/img/img-pet-08.jpg";
import PostCardImg09 from "@/assets/img/content-img-03.jpg";

const heroInnerData = {
  title: "Wellness clinic",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
};

const postSectionData = {
  title: "Affordable healthcare with an impact",
  text: "In addition, by bringing their pets to our Brandywine vet hospitals for care, clients support the plight of homeless pets, as any proceeds from the BVSPCA’s clinics benefit the mission and programs at the Brandywine Valley SPCA.",
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
  title: "Looking for spay & neuter services?",
  text: "Our accomplished veterinarians and medical staff operate in a professional, caring manner and will handle your pet kindly.",
};

const textBannerData = {
  title: "Have questions or need help?",
  text: "Give us a call or stop by one of our healthcare locations for more help.",
  buttons: [
    {
      variant: "primary",
      text: "Contact us",
    },
    {
      variant: "outline",
      text: "Wellness clinic locations",
    },
  ],
};

const postInlineData = {
  title: "Your pet is in good hands",
  text: "Get to know our experienced veterinary team. They’re ready to help your pet with routine check-ups, preventative care, and medical issues and so much more.",
};

const postInlineData2 = {
  title: "Help us keep pet wellness affordable",
  text: "Open the door to endless possibilities. Together, we will create positive change within our community, help control the homeless animal population, and improve the lives of pets and their families.",
};

const postInlineData3 = {
  title: "Pay it forward, your free time has so much value",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi.",
};

const dogPackages = {
  desktop: [
    [
      { headTitle: "Services Included" },
      {
        headTitle: "Puppy Package",
        currentPrice: 70,
        normalPrice: 80,
        priceDifference: 10
      },
      {
        headTitle: "Canine Basic Package",
        currentPrice: 85,
        normalPrice: 100,
        priceDifference: 15
      },
      {
        headTitle: "Canine Adult Package",
        currentPrice: 140,
        normalPrice: 155,
        priceDifference: 15
      }
    ],
    [
      {
        title: "Physical Exam - $45"
      },
      {
        included: true
      },
      {
        included: true
      },
      {
        included: true
      }
    ],
    [
      {
        title: "DA2PPv - $20"
      },
      {
        included: true
      },
      {
        included: true
      },
      {
        included: true
      }
    ],
    [
      {
        title: "Dewormer - $15"
      },
      {
        included: true
      },
      {
        included: true
      },
      {
        included: true
      }
    ],
    [
      {
        title: "1 year Rabies Vaccine - $20",
        description: "(3 year vaccine can be given for additional $7)"
      },
      {
        included: false
      },
      {
        included: true
      },
      {
        included: true
      }
    ],
    [
      {
        title: "Bordetella - $20"
      },
      {
        included: false
      },
      {
        included: false
      },
      {
        included: true
      }
    ],
    [
      {
        title: "Heartworm Test (4DX) – $35"
      },
      {
        included: false
      },
      {
        included: false
      },
      {
        included: true
      }
    ],
    [
      {},
      {},
      {
        description: [
          "* Additional $5 for pets 1 year and over that are not spayed or neutered.",
          "** $3 rabies surcharge required in the state of Delaware."
        ]
      },
      {
        description: [
          "* Additional $5 for pets 1 year and over that are not spayed or neutered.",
          "** $3 rabies surcharge required in the state of Delaware."
        ]
      }
    ]
  ],
  mobile: [
    {
      head: {
        title: "Puppy Package",
        currentPrice: 70,
        normalPrice: 80,
        priceDifference: 10
      },
      body: [
        { title: "Physical Exam - $45" },
        { title: "DA2PPv - $20" },
        { title: "Dewormer - $15" }
      ]
    },
    {
      head: {
        title: "Canine Basic Package",
        currentPrice: 85,
        normalPrice: 100,
        priceDifference: 15
      },
      body: [
        { title: "Physical Exam - $45" },
        { title: "DA2PPv - $20" },
        { title: "Dewormer - $15" },
        {
          title: "1 year Rabies Vaccine - $20",
          description: "(3 year vaccine can be given for additional $7)"
        }
      ]
    },
    {
      head: {
        title: "Canine Adult Package",
        currentPrice: 140,
        normalPrice: 155,
        priceDifference: 15
      },
      body: [
        { title: "Physical Exam - $45" },
        { title: "DA2PPv - $20" },
        { title: "Dewormer - $15" },
        {
          title: "1 year Rabies Vaccine - $20",
          description: "(3 year vaccine can be given for additional $7)"
        },
        { title: "Bordetella - $20" },
        { title: "Heartworm Test (4DX) – $35" }
      ]
    }
  ]
};

const catPackages = {
  desktop: [
    [
      { headTitle: "Services Included" },
      {
        headTitle: "Puppy Package",
        currentPrice: 70,
        normalPrice: 80,
        priceDifference: 10
      },
      {
        headTitle: "Canine Basic Package",
        currentPrice: 85,
        normalPrice: 100,
        priceDifference: 15
      }
    ],
    [
      {
        title: "Physical Exam - $45"
      },
      {
        included: true
      },
      {
        included: true
      }
    ],
    [
      {
        title: "DA2PPv - $20"
      },
      {
        included: true
      },
      {
        included: true
      }
    ],
    [
      {
        title: "Dewormer - $15"
      },
      {
        included: true
      },
      {
        included: true
      }
    ],
    [
      {
        title: "1 year Rabies Vaccine - $20",
        description: "(3 year vaccine can be given for additional $7)"
      },
      {
        included: false
      },
      {
        included: true
      }
    ],
    [
      {},
      {},
      {
        description: [
          "* Additional $5 for pets 1 year and over that are not spayed or neutered.",
          "** $3 rabies surcharge required in the state of Delaware."
        ]
      }
    ]
  ],
  mobile: [
    {
      head: {
        title: "Puppy Package",
        currentPrice: 70,
        normalPrice: 80,
        priceDifference: 10
      },
      body: [
        { title: "Physical Exam - $45" },
        { title: "DA2PPv - $20" },
        { title: "Dewormer - $15" }
      ]
    },
    {
      head: {
        title: "Canine Basic Package",
        currentPrice: 85,
        normalPrice: 100,
        priceDifference: 15
      },
      body: [
        { title: "Physical Exam - $45" },
        { title: "DA2PPv - $20" },
        { title: "Dewormer - $15" },
        {
          title: "1 year Rabies Vaccine - $20",
          description: "(3 year vaccine can be given for additional $7)"
        }
      ]
    }
  ]
};
</script>
