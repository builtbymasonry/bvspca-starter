<template>
  <HeroInner v-bind="heroInnerData" />

  <Stats />

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-7xl px-4">
      <PostModule class="text-sm" v-bind="postModuleData" />
    </div>
  </section>

  <section class="py-14 lg:py-28 bg-gray-dark">
    <div class="mx-auto max-w-5xl px-4">
      <h2 class="mb-10 lg:mb-14 text-2xl md:text-3xl xl:text-5xl font-bold text-center">Other ways to give</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PostCardBox
          v-for="post in postCardBoxes"
          :key="post.title"
          v-bind="post"
        />
      </div>
    </div>
  </section>

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-5xl px-4">
      <PostModule class="text-xs" v-bind="postModuleData2" />
      <PostModule class="mt-16 text-xs" v-bind="postModuleData3" />
    </div>
  </section>

  <section class="py-14 lg:py-28 bg-skew bg-purple text-white">
    <div class="mx-auto max-w-5xl px-4">
      <PostModule class="text-xs" v-bind="postModuleData4" />
    </div>
  </section>

  <section class="py-14 lg:py-28 bg-gray-dark">
    <div class="mx-auto max-w-5xl px-4">
      <TextBox
        class="-mt-12 lg:-mt-28 mb-14 lg:mb-24 relative z-2"
        v-bind="textBoxData"
      />

      <div class="text-center">
        <h2 class="mb-10 lg:mb-12 text-2xl font-bold">Accountability & Transparency</h2>
        <ul class="-mx-9 -my-2 mb-11 flex flex-wrap flex-col sm:flex-row items-center justify-center">
          <li
            v-for="link in linkList"
            :key="link.text"
            class="mx-9 my-2"
          >
            <ButtonLink :text="link.text" :url="link.url" />
          </li>
        </ul>
        <p class="text-sm">BVSPCA Tax Id:  23-1381030</p>
      </div>
    </div>
  </section>

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-7xl px-4">
      <div class="xl:-mx-24 -my-14 sm:-my-0 flex flex-wrap flex-col sm:flex-row sm:divide-x-2 divide-y-2 sm:divide-y-0 divide-gray-dark text-center text-xs">
        <div class="sm:w-1/2 px-5 lg:px-10 xl:px-24 py-14 sm:py-8">
          <div class="mb-6 min-h-4 flex items-center justify-center">
            <img src="src/assets/img/icon-crane.svg" alt="image description" />
          </div>
          <h3 class="mb-2 text-2xl lg:text-3xl xl:text-4xl font-bold">Have a vehicle to donate?</h3>
          <p>Donate your car, boat, truck, RV, jet ski or snowmobile to the Brandywine Valley SPCA and receive a tax deduction. Contact our fundraising partner, CARS to begin the no-cost, no-hassle process.</p>
          <Button class="mt-12" text="Learn more" url="#" />
        </div>
        <div class="sm:w-1/2 px-5 lg:px-10 xl:px-24 py-14 sm:py-8">
          <div class="mb-6 min-h-4 flex items-center justify-center">
            <img src="src/assets/img/icon-memorial.svg" alt="image description" />
          </div>
          <h3 class="mb-2 text-2xl lg:text-3xl xl:text-4xl font-bold">Walk of Life</h3>
          <p>Walk of Life bricks offer a permanent way to remember, honor or celebrate. Whether it’s the birth of a grandchild, a 60th wedding anniversary or simply a desire to demonstrate how much you love your own animals your brick will show you care for years to come.</p>
          <Button class="mt-12" text="Give now" url="#" />
        </div>
      </div>

      <PostModule class="mt-24 text-xs" v-bind="postModuleData5" />
    </div>
  </section>

  <section class="py-14 lg:py-28 bg-gray-dark">
    <div class="mx-auto max-w-5xl px-4">
      <PostModule class="text-sm" v-bind="postModuleData6" />
    </div>
  </section>

  <PostCardsSection v-bind="postCardsSectionData" />
</template>

<script setup>
import Button from "@/components/Button.vue"
import ButtonLink from "@/components/ButtonLink.vue"
import HeroInner from "@/components/HeroInner.vue"
import Stats from "@/components/Stats.vue"
import PostModule from "@/components/PostModule.vue"
import PostCardBox from "@/components/PostCardBox.vue"
import TextBox from "@/components/TextBox.vue"
import PostCardsSection from "@/components/sections/PostCardsSection.vue"

const heroInnerData = {
  title: "Donate",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
  img: { src: "src/assets/img/hero-image-20.jpg", alt: "Volunteer" }
};

const postModuleData = {
  title: { text: "Monthly Giving", size: "lg" },
  text: ["Become a Circle of Life Member to make a difference and save the lives of homeless animals across the Brandywine Valley. Your generous monthly donation helps provide shelter, food, and medical care to thousands of animals who enter our shelters each year. Pellentesque finibus lorem dignissim bibendum pretium. Maecenas efficitur varius feugiat. Vestibulum eu mi ac diam mollis euismod. "],
  img: { src: "src/assets/img/content-img-27.jpg", alt: "" },
  buttons: [{ text: "Give now", url: "#!" }],
  reverse: true
};

const postModuleData2 = {
  title: { text: "1929 Society", size: "md" },
  text: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi."],
  img: { src: "src/assets/img/content-img-28.jpg", alt: "" },
  buttons: [{ text: "Become a member", url: "#!" }]
};

const postModuleData3 = {
  title: { text: "Wishlist", size: "md" },
  text: ["The Brandywine Valley SPCA is able to fulfill its mission and provide service in a variety of areas through the support of our many generous donors. All donations, no matter how large or small, make a difference."],
  img: { src: "src/assets/img/content-img-29.jpg", alt: "" },
  buttons: [{ text: "View our wishlist", url: "#!" }],
  reverse: true
};

const postModuleData4 = {
  title: { text: "Become a sponsor", size: "md" },
  text: ["Becoming a Corporate Partner with the Brandywine Valley SPCA has many benefits for Pennsylvania and Delaware businesses. Together we will create positive change within our community."],
  img: { src: "src/assets/img/content-img-30.jpg", alt: "" },
  buttons: [{ variant:"secondary", text: "Learn more about sponsoring", url: "#!" }]
};

const postModuleData5 = {
  title: { text: "Our mission & vision", size: "md" },
  text: ["Founded in 1929, the Brandywine Valley SPCA exists to end animal suffering and to involve the entire community in the welfare and well-being of animals. Our mission is to put the “human” back in humane animal treatment and advocate on their behalf. Our vision is to be the recognized leader in animal welfare that empowers communities to treat life with respect and dignity."],
  img: { src: "src/assets/img/content-img-31.jpg", alt: "", type: "default" },
  buttons: [{ text: "Learn more about us", url: "#!" }],
  reverse: true
};

const postModuleData6 = {
  title: { text: "Support our lifesaving work and look good doing it", size: "lg"},
  text: ["Get your paws on our original and limited edition merchandise. Your purchases go towards the care of the 16,000+ animals we take in each year. "],
  imgGrid: [
    {
      img: { src: "src/assets/img/merch-img-01.jpg", alt: "" }
    },
    {
      img: { src: "src/assets/img/merch-img-02.jpg", alt: "" }
    },
    {
      img: { src: "src/assets/img/merch-img-03.jpg", alt: "" }
    },
    {
      img: { src: "src/assets/img/merch-img-04.jpg", alt: "" }
    }
  ],
  buttons: [
    { text: "Shop now", url: "#!" },
  ]
};

const postCardBoxes = [
  {
    url: "#!",
    img: { src: "src/assets/img/postcardbox-img-04.jpg", alt: "" },
    title: "Save a life",
    text: [
      "Every dollar you donate will go to the programs and services that help save the lives of thousands of homeless animals each year. Great or small, all donations are appreciated."
    ],
    buttons: [{ type: "button", text: "Give now", url: "#!" }],
    center: true
  },
  {
    url: "#!",
    img: { src: "src/assets/img/postcardbox-img-05.jpg", alt: "" },
    title: "Honor a life",
    text: [
      "Giving a donation in honor of a lost loved one, birthday, wedding, graduation, anniversary, or other life event is a kind way to salute the recipient. Not only is it a wonderful thank you for a person’s deed or service, but it is also a meaningful way to show that you care."
    ],
    buttons: [{ type: "button", text: "Give now", url: "#!" }],
    center: true
  }
];

const textBoxData = {
  title: { text: "Planned giving", size: "lg"},
  text: "Please consider naming the Brandywine Valley SPCA as a beneficiary in your will, trust, or insurance documents in order to help provide food and shelter for the homeless pets in our community.",
  button: { type: "button", text: "Learn more about planned giving", url: "#!" }
};

const linkList = [
  { text: "Donor Privacy Policy", url: "#"},
  { text: "Annual Reports", url: "#"},
  { text: "Form 990", url: "#"},
  { text: "Audited Financial Statements", url: "#"}
];

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
</script>
