<template>
  <div>
    <HeroInner v-bind="heroInnerData" />

    <PostSection v-bind="postSectionData" class="bg-gray-dark" />

    <section class="py-14 lg:py-28">
      <div class="mx-auto max-w-5xl px-4">
        <h2
          class="mb-8 text-center text-2xl font-bold sm:text-3xl md:mb-12 lg:text-5xl"
        >
          Community cat services
        </h2>
        <TableServices class="mb-14 lg:mb-20" :data="tableData" />

        <div
          class="divide-gray-dark mb-14 flex flex-col divide-y-2 rounded-lg bg-white px-8 text-center text-sm shadow md:flex-row md:divide-y-0 md:divide-x-2 md:px-0 lg:mx-6 lg:mb-20"
        >
          <div class="py-14 sm:px-10 md:w-1/2 lg:px-20">
            <h3 class="mb-2 text-xl font-bold">Scheduling Surgery</h3>
            <p class="mb-5 leading-snug">
              If community cat trapping organization or individual with one or
              two cats, no appointment is necessary for Malvern.
            </p>
            <dl class="space-y-3 text-sm font-bold">
              <div class="grid grid-cols-2 gap-6">
                <dt class="text-right">Georgetown</dt>
                <dd class="text-left">
                  <a
                    class="text-red hover:text-red-dark"
                    href="tel:(302) 856-6361"
                    >(302) 856-6361</a
                  >
                </dd>
              </div>
              <div class="grid grid-cols-2 gap-6">
                <dt class="text-right">Malvern</dt>
                <dd class="text-left">
                  <a
                    class="text-red hover:text-red-dark"
                    href="tel:(610) 482-4289"
                    >(610) 482-4289</a
                  >
                </dd>
              </div>
              <div class="grid grid-cols-2 gap-6">
                <dt class="text-right">New Castle</dt>
                <dd class="text-left">
                  <a
                    class="text-red hover:text-red-dark"
                    href="tel:(302) 516-1005"
                    >(302) 516-1005</a
                  >
                </dd>
              </div>
            </dl>
          </div>
          <div class="py-14 sm:px-10 md:w-1/2 lg:px-20">
            <h3 class="mb-2 text-xl font-bold">Drop Off & Pick up Hours</h3>
            <p class="mb-5 leading-snug">
              Cats need to be in humane live release traps. In most cases,
              community cats are released the same day as their surgery.
            </p>
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
      class="bg-skew bg-skew-reverse bg-purple mt-44 py-14 text-white sm:mt-72 lg:mt-64 lg:py-28"
    >
      <div class="mx-auto max-w-5xl px-4">
        <TextBox
          v-bind="textBoxData"
          class="-mt-56 mb-14 sm:-mt-80 lg:-mt-96 lg:mb-24"
        />
        <PostInline v-bind="postInlineData" />
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
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 sm:gap-8"
        >
          <PostCard
            v-for="post in blogPosts"
            :key="post.title"
            v-bind="post"
          />
        </div>

        <div
          class="mt-16 flex flex-col items-center justify-center md:flex-row"
        >
          <Button
            variant="primary"
            text="View all news, events & resources"
            url="#!"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue";
import HeroInner from "@/components/HeroInner.vue";
import PostSection from "@/components/PostSection.vue";
import MapRentals from "@/components/MapRentals.vue";
import TableServices from "@/components/TableServices.vue";
import TextBox from "@/components/TextBox.vue";
import PostInline from "@/components/PostInline.vue";
import PostCard from "@/components/PostCard.vue";

const heroInnerData = {
  img: { src: "src/assets/img/hero-image-04.jpg", alt: "" },
  title: "Community cats",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl."
};

const postSectionData = {
  img: { src: "src/assets/img/content-img-09.jpg", alt: "" },
  title: "Outdoor cats need love too",
  text: "Our services increase the health and wellness of community cats while proactively reducing the number of animals being born without homes in our community. TNVR has been shown to be the most humane, most efficient, and least costly method of stabilizing community cat populations.",
  textGrid: [
    {
      title: "Feature one",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia."
    },
    {
      title: "Feature two",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia."
    },
    {
      title: "Feature three",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia."
    },
    {
      title: "Feature four",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia."
    }
  ],
  buttons: [
    { variant: "primary", text: "Schedule an appointment" },
    { variant: "outline", text: "Learn more about our impact" }
  ],
  reverse: true
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
  buttonLink: { text: "Spay & neuter services", url: "#!" }
};

const postInlineData = {
  img: { src: "src/assets/img/content-img-10.jpg", alt: "" },
  title: "Help keep our Community Cats program alive",
  text: "Open the door to endless possibilities. Together, we will create positive change within our community, help control the homeless animal population, and improve the lives of pets and their families. ",
  buttons: [{ variant: "secondary", text: "Donate", url: "#!" }]
};

const blogPosts = [
  {
    url: "#!",
    img: { src: "src/assets/img/img-pet-07.jpg", alt: "" },
    title: "$5 off our 5K Color Run",
    text: "We're so excited to be offering a number of new activities to this year's line-up of fun, including a Color Run for you and your furry running partner. Register today!",
    buttonLink: { text: "Read more" }
  },
  {
    url: "#!",
    img: { src: "src/assets/img/img-pet-08.jpg", alt: "" },
    title: "Walk-4-Paws",
    text: "We’re bringing back the most popular activities PLUS we’ve changed our 5K to a Color Run, expanded Yoga with Puppies, added live music, and added more fun things.",
    buttonLink: { text: "Read more" }
  },
  {
    url: "#!",
    img: { src: "src/assets/img/content-img-03.jpg", alt: "" },
    title: "Critter Camp",
    text: "Kids ages 7 to 12 will have a howling good time at our Critter Camp day camp. Our next session is a Spring-themed Weekend: April 9 – April 10 for kids ages 10 through 12. ",
    buttonLink: { text: "Read more" }
  }
];
</script>
