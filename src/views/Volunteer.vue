<template>
  <HeroInner v-bind="heroInnerData" class="bg-gray-dark" />

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-5xl px-4">
      <PostInline v-bind="postInlineData" />
    </div>
  </section>

  <section class="bg-gray-dark py-14 lg:py-28">
    <div class="mx-auto max-w-6xl px-4">
      <div class="mx-auto mb-10 max-w-2xl text-center text-sm sm:mb-14">
        <h2 class="mb-2 text-2xl font-bold sm:text-4xl lg:text-5xl">
          Volunteer Opportunities
        </h2>
        <Select
          class="mx-4 mt-8 text-left md:hidden"
          inputLabel="Select Category"
          :options="categories"
          themeColor="white"
        />
      </div>

      <div class="space-y-10 text-center md:text-left lg:space-y-14">
        <PostCardInline
          v-for="post in volunteerData"
          v-bind="post"
          :key="post.title"
        />
      </div>
    </div>
  </section>

  <TextBanner class="bg-purple text-white" v-bind="textBannerData" />

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-7xl px-4">
      <h2
        class="mb-10 text-center text-2xl font-bold tracking-wide md:mb-16 md:text-3xl xl:text-5xl"
      >
        Other ways to help out
      </h2>

      <div
        class="grid grid-cols-1 items-start gap-14 text-center sm:grid-cols-2 sm:gap-8 sm:text-left lg:grid-cols-3"
      >
        <PostCardBox
          v-for="post in postCardBoxes"
          :key="post.title"
          v-bind="post"
        />
      </div>
    </div>
  </section>

  <TextBanner class="pt-0 lg:pt-0" v-bind="textBannerData2" />

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
      <PostInline v-bind="postInlineData2" />
    </div>
  </section>

  <PostCardsSection v-bind="postCardsSectionData" />
</template>

<script setup>
import Button from "@/components/Button.vue";
import Select from "@/components/Select.vue";
import HeroInner from "@/components/HeroInner.vue";
import PostInline from "@/components/PostInline.vue";
import PostCardInline from "@/components/PostCardInline.vue";
import TextBanner from "@/components/TextBanner.vue";
import PostCard from "@/components/PostCard.vue";
import PostCardsSection from "@/components/PostCardsSection.vue";
import PostCardBox from "@/components/PostCardBox.vue";
import InfoCard from "@/components/InfoCard.vue";

const heroInnerData = {
  title: "Volunteer",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
  img: { src: "src/assets/img/hero-image-11.jpg", alt: "Volunteer" }
};

const categories = [
  {
    value: 0,
    label: "Select",
    disabled: true,
    selected: true
  },
  {
    value: 1,
    label: "option 01"
  },
  {
    value: 2,
    label: "option 02"
  },
  {
    value: 3,
    label: "option 03"
  },
  {
    value: 4,
    label: "option 04"
  }
];

const postInlineData = {
  img: { src: "src/assets/img/content-img-16.jpg", alt: "" },
  title: "The Brandywine Valley SPCA has a wide variety of volunteer opportunities",
  text: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi. Pellentesque finibus lorem dignissim bibendum pretium. Maecenas efficitur varius feugiat. Vestibulum eu mi ac diam mollis euismod."],
  buttons: [{ text: "Learn more about us", url: "#!" }]
};

const postInlineData2 = {
  title: "Give back to your community",
  text: ["Open the door to endless possibilities. Together, we will create positive change within our community, help control the homeless animal population, and improve the lives of pets and their families."],
  img: { src: "src/assets/img/content-img-04.jpg", alt: "" },
  reverse: true,
  buttons: [{ variant: "secondary", text: "Donate", url: "#!" }]
};

const volunteerData = [
  {
    img: {
      src: "src/assets/img/post-card-inline-img-07.jpg",
      alt: "Dog & cat volunteer"
    },
    title: "Dog & cat volunteer",
    titleExtra: "lg:text-2xl",
    text: "Work closely with staff to meet all the needs of our adorable adoptable pets including training, exercising, grooming, and other enriching activities.",
    buttonLink: { text: "Apply now", url: "#!" }
  },
  {
    img: {
      src: "src/assets/img/post-card-inline-img-08.jpg",
      alt: "Junior volunteer"
    },
    title: "Junior volunteer",
    titleExtra: "lg:text-2xl",
    text: "Is your child interested in volunteering? If you are between 8-12 years of age, you can join our junior volunteer program! After you and your chaperon or guardian (18 years+) have both submitted volunteer applications and have attended a volunteer orientation you are welcome to volunteer within our organization. Junior volunteers can tag along as you help out, and participate in several activities such as puppy socialization, kitten socialization, grooming, reading to companions, etc. all under your supervision.",
    buttonLink: { text: "Apply now", url: "#!" }
  },
  {
    img: {
      src: "src/assets/img/post-card-inline-img-09.jpg",
      alt: "Event ambassador"
    },
    title: "Event ambassador",
    titleExtra: "lg:text-2xl",
    text: "Take adoptable shelter animals to participating pet stores, local community events, or other BVSPCA fundraisers. While at these locations, talk to customers and attendees about our available pets and the Brandywine Valley SPCA. In order to participate you must have a valid driver’s license and a reliable vehicle.",
    buttonLink: { text: "Apply now", url: "#!" }
  },
  {
    img: {
      src: "src/assets/img/post-card-inline-img-10.jpg",
      alt: "Adoption Counselors"
    },
    title: "Adoption Counselors",
    titleExtra: "lg:text-2xl",
    text: "Train to become an adoption counselor and help us match pets with their forever homes. Work closely with our staff to learn the steps needed to process adoptions at our shelter.",
    buttonLink: { text: "Apply now", url: "#!" }
  },
  {
    img: {
      src: "src/assets/img/post-card-inline-img-11.jpg",
      alt: "Kids programs"
    },
    title: "Kids programs",
    titleExtra: "lg:text-2xl",
    text: "Love children AND animals? Explore our kid friendly programs—Critter Camp and birthday parties! Help children foster a positive relationship with animals through engaging activities and educational programs. Looking for a way to connect your inner party animal with adoptable pets? Join our volunteer birthday party team, and help us plan and organize birthday parties at the Brandywine Valley SPCA.",
    buttonLink: { text: "Apply now", url: "#!" }
  },
  {
    img: {
      src: "src/assets/img/post-card-inline-img-12.jpg",
      alt: "Administration"
    },
    title: "Administration",
    titleExtra: "lg:text-2xl",
    text: "Have a knack for computers, data entry, filing, etc? Consider helping out our administration team! All computer savvy volunteers are welcome to lend a hand.",
    buttonLink: { text: "Apply now", url: "#!" }
  },
  {
    img: {
      src: "src/assets/img/post-card-inline-img-13.jpg",
      alt: "Wellness clinic"
    },
    title: "Wellness clinic",
    titleExtra: "lg:text-2xl",
    text: "Help out vet staff with creating sterilized surgical packs for our extensive spay and neuter services. Assist our clinic with minor administrative tasks such as filing, data entry, and follow-up calls. On the job training will be provided. Time Commitment: available Tuesday–Friday between 9am and 4pm",
    buttonLink: { text: "Apply now", url: "#!" }
  },
  {
    img: {
      src: "src/assets/img/post-card-inline-img-14.jpg",
      alt: "Photography"
    },
    title: "Photography",
    titleExtra: "lg:text-2xl",
    text: "Help us capture all of our shelter pet’s unique quirks through photography! Your photographs will be used to update our website and social media accounts. Photographers are expected to bring their own supplies.",
    buttonLink: { text: "Apply now", url: "#!" }
  }
];

const textBannerData = {
  title: "Looking for community service?",
  text: "Community service and volunteering are often confused. If you’ve been court-ordered to do community service or need school credit we’ve got you covered.",
  buttons: [{ variant: "secondary", text: "View community service" }]
};

const textBannerData2 = {
  title: "Have questions or need help?",
  text: "Give us a call or stop by one of our healthcare locations for more help.",
  buttons: [
    { text: "Contact us" },
    { variant: "outline", text: "Wellness clinic locations" }
  ]
};

const postCardBoxes = [
  {
    url: "#!",
    img: { src: "src/assets/img/postcardbox-img-01.jpg", alt: "" },
    title: "Kong stuffing parties",
    text: [
      "Looking for a fun activity for kids to help out at the shelter? Schedule a Kong Stuffing Party and help us feed our dogs in an enriching way! The kongs (a hard hollow rubber toy) are stuffed with a mixture of kibble and peanut butter, and then frozen for a delicious treat for our four-legged friends. Email Hailey Marcus at hmarcus@bvspca.org, to schedule your kong stuffing party!",
      "Please note: this opportunity is for kids 7 years +, group size maximum 15 kids."
    ],
    button: { text: "Schedule today", url: "#!" }
  },
  {
    url: "#!",
    img: { src: "src/assets/img/postcardbox-img-02.jpg", alt: "" },
    title: "Baking",
    text: [
      "Want a group activity that helps the shelter dogs? Consider baking homemade dog treats for our canine residents. The BVSPCA has several approved recipes that are easy to make. Drop off the homemade treats during shelter hours."
    ],
    button: { text: "Get Recipe", url: "#!" }
  },
  {
    url: "#!",
    img: { src: "src/assets/img/postcardbox-img-03.jpg", alt: "" },
    title: "Homemade toys",
    text: [
      "Would you like to help our feline friends stay entertained? Create fun and easy cat toys to provide entertainment and enrichment for the cats and kittens while they are in our care. Click below for DIY cat toy instructions."
    ],
    button: { text: "Learn how", url: "#!" }
  }
];

const postCardsSectionData = {
  title: "Volunteer related events & resources",
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

const infoCardData = {
  title: "We place over 16,000 animals a year",
  text: "We were the first open-admission no-kill shelter in Pennsylvania, and we have led Delaware to becoming the first no-kill state in the United States.",
  img: { src: "src/assets/img/content-img-01.jpg", alt: "" },
  buttons: [
    { text: "Learn more about our impact", url: "#!" }
  ]
};
</script>
