<template>
  <div>
    <HeroInner v-bind="heroInnerData" />

    <section class="py-14 lg:py-28 bg-gray-dark">
      <div class="px-4 mx-auto max-w-7xl">
        <PostModule v-bind="postModuleData" />
      </div>
    </section>

    <section class="py-14 lg:py-28">
      <div class="max-w-5xl px-4 mx-auto">
        <h2
          class="mb-8 text-2xl font-bold text-center sm:text-3xl md:mb-12 lg:text-5xl"
        >
          Spay & neuter services
        </h2>
        <div class="space-y-10">
          <TableServices :data="tableExamsData" />
          <TableServices :data="tableVaccinesData" />
          <TableServices :data="tablePreventionData" />
        </div>
        <div class="flex justify-center mt-16">
          <Button variant="primary" text="Schedule an appointment" url="#!" />
        </div>
      </div>
    </section>

    <section
      class="pt-20 pb-4 text-white bg-skew bg-purple mt-36 sm:mt-40 sm:pb-0 lg:mt-28"
    >
      <div class="max-w-5xl px-4 mx-auto">
        <TextBox
          class="mb-16 -mt-52 sm:-mt-56 md:mb-20 lg:mb-24"
          v-bind="textBoxData"
        />
      </div>
      <TextBanner class="py-0 lg:py-0" v-bind="textBannerData" />
    </section>

    <section class="relative pt-40 pb-28 sm:pt-60 md:mb-32 md:pb-0">
      <div class="absolute top-0 left-0 w-full h-full">
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
            class="absolute top-0 left-0 object-cover w-full h-full"
            src="/img/bg-image-01.jpg"
            alt="background"
          />
        </picture>
      </div>

      <InfoCard v-bind="infoCardData" />
    </section>

    <section class="py-14 lg:py-28">
      <div class="max-w-5xl px-4 mx-auto">
        <PostModule v-bind="postModuleData2" />
      </div>
    </section>

    <PostCardsSection class="bg-gray-dark" v-bind="postCardsSectionData" />
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue";
import HeroInner from "@/components/HeroInner.vue";
import TableServices from "@/components/TableServices.vue";
import TextBox from "@/components/TextBox.vue";
import TextBanner from "@/components/TextBanner.vue";
import PostCard from "@/components/PostCard.vue";
import PostCardsSection from "@/components/sections/PostCardsSection.vue";
import PostModule from "@/components/PostModule.vue";
import InfoCard from "@/components/InfoCard.vue";

const heroInnerData = {
  img: { src: "/img/hero-image-05.jpg", alt: "" },
  title: "Spay & neuter",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl."
};

const postModuleData = {
  img: { src: "/img/content-img-11.jpg", alt: "" },
  title: { text: "Spaying/Neutering your pet helps fight pet overpopulation, reducing the number of homeless animals and decreasing euthanasia numbers."},
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

const postModuleData2 = {
  img: { src: "/img/content-img-08.jpg", alt: "" },
  title: { text: "Pay it forward, your free time has so much value", size: "md"},
  text: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi. "],
  buttons: [{ text: "Get involved", url: "#!" }],
  reverse: true
};

const tableExamsData = {
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

const tableVaccinesData = {
  title: "Vaccines & Other Services",
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

const tablePreventionData = {
  title: "Flea, Tick & Heartworm Prevention",
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

const textBoxData = {
  title: { text: "Looking other wellness services?"},
  text: "Our accomplished veterinarians and medical staff operate in a professional, caring manner and will handle your pet kindly.",
  button: { type: "buttonLink", text: "All wellness services", url: "#!" }
};

const textBannerData = {
  title: "Have questions or need help?",
  text: "Give us a call or stop by one of our healthcare locations for more help.",
  buttons: [
    {
      variant: "secondary",
      text: "Contact us",
      url: "#!"
    },
    {
      variant: "outlineSecondary",
      text: "Wellness clinic locations",
      url: "#!"
    }
  ]
};

const infoCardData = {
  img: { src: "/img/content-img-01.jpg", alt: "" },
  title: "We place over 16,000 animals a year",
  text: "We were the first open-admission no-kill shelter in Pennsylvania, and we have led Delaware to becoming the first no-kill state in the United States.",
  buttons: [{ text: "Learn more about our impact", url: "#!" }]
};

const postCardsSectionData = {
  title: "Spay & neuter related events & resources",
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
