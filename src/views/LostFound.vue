<template>
  <div>
    <HeroInner v-bind="heroInnerData" class="bg-gray-dark" />

    <PostSection class="bg-gray-dark" v-bind="postSectionData" />

    <section class="py-14 lg:py-28">
      <div class="mx-auto grid max-w-7xl grid-cols-1 px-4 lg:grid-cols-2">
        <div class="pb-14 text-xs sm:text-sm lg:pr-20 lg:pb-0 2xl:pr-36">
          <h3 class="mb-2 text-2xl font-bold sm:text-4xl">
            If you have lost your pet, we invite you to fill out the report to
            the right
          </h3>
          <p class="mb-6">
            Please look at the list of
            <a class="text-red hover:text-red-dark font-bold" href="#0"
              >recently found pets</a
            >
            and you can also do a walk-through of our shelter to determine if
            your pet has been brought to us. If you do NOT see your Lost Report
            uploaded to our Lost & Found Facebook page after 24 hours or did not
            receive a confirmation email, please contact the shelter directly.
          </p>
          <p class="mb-12">
            All Lost/Found Reports will also be posted to our Lost/Found
            <a class="text-red hover:text-red-dark font-bold" href="#0"
              >Facebook Page</a
            >, an online community we have set up to help reunite pets and
            owners.
          </p>
          <h4 class="mb-6 text-lg font-bold tracking-wider">
            Other suggestions include:
          </h4>
          <ol
            class="list-decimal space-y-2 pl-5 marker:text-lg marker:font-bold"
          >
            <li class="pl-2">
              Contact friends and neighbors and hang up flyers in the community.
            </li>
            <li class="pl-2">
              Post your pet to online sites like Facebook, Instagram, Twitter,
              Next Door and CraigsList.
            </li>
            <li class="pl-2">
              In the event that you’ve lost a cat, put out something that smells
              familiar to your cat, such as a blanket or a bit of dirty litter.
              Many indoor cats will remain very close to the home and a familiar
              smell can lure them back into the home, safe and sound.
            </li>
            <li class="pl-2">Call local veterinary hospitals.</li>
            <li class="pl-2">
              Also, we strongly urge all pet owners to permanently identify
              their pet with a microchip. This can be done for at our
              <a class="text-red hover:text-red-dark font-bold" href="#0"
                >clinics</a
              >. While collars can fall off and tags can go missing, a microchip
              is permanent and ensures that your contact information remains
              with your pet at all times!
            </li>
          </ol>
        </div>

        <div class="rounded-lg bg-white p-8 shadow sm:p-12 xl:p-20">
          <FormLostFound />
        </div>
      </div>
    </section>

    <section class="relative pt-20 pb-40 sm:pt-32 sm:pb-56 md:pb-28">
      <div class="absolute top-0 left-0 h-full w-full">
        <img
          class="absolute top-0 left-0 h-full w-full object-cover"
          src="@/assets/img/bg-image-01.jpg"
          alt="image description"
        />
      </div>

      <InfoCard v-bind="infoCardData" />
    </section>

    <section
      class="bg-skew bg-skew-reverse bg-purple pt-8 pb-20 text-white md:py-24 lg:py-32"
    >
      <div class="mx-auto max-w-4xl px-4">
        <PostInline v-bind="postInlineData" />
      </div>
    </section>

    <section class="py-12 lg:py-20">
      <div class="mx-auto max-w-7xl px-4">
        <h2
          class="mb-10 text-center text-2xl font-bold tracking-wide md:mb-16 md:text-3xl xl:text-5xl"
        >
          Lost & found pets related news & resources
        </h2>

        <div
          class="grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
        >
          <PostCard v-for="post in blogPosts" :key="post.title" v-bind="post" />
        </div>

        <div
          class="mt-16 flex flex-col flex-wrap items-center justify-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-5 lg:space-x-10"
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
import FormLostFound from "@/components/FormLostFound.vue";
import PostInline from "@/components/PostInline.vue";
import InfoCard from "@/components/InfoCard.vue";
import PostCard from "@/components/PostCard.vue";

const heroInnerData = {
  title: "Lost & found pets",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
  img: { src: "src/assets/img/hero-image-06.jpg", alt: "Lost & found pets" }
};

const postSectionData = {
  img: { src: "src/assets/img/content-img-12.jpg", alt: "" },
  title: "Lost your pet? Found a pet?",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
  textGrid: [
    {
      title: "Tip one",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia."
    },
    {
      title: "Tip two",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia."
    },
    {
      title: "Tip three",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia."
    },
    {
      title: "Tip four",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia."
    }
  ],
  buttons: [
    { variant: "primary", text: "Check Facebook page DE ", url: "#!" },
    { variant: "outline", text: "Check Facebook page PA ", url: "#!" }
  ],
  reverse: true
};

const infoCardData = {
  title: "We place over 16,000 animals a year",
  text: "We were the first open-admission no-kill shelter in Pennsylvania, and we have led Delaware to becoming the first no-kill state in the United States.",
  img: { src: "src/assets/img/content-img-01.jpg", alt: "" },
  buttons: [
    { variant: "primary", text: "Learn more about our impact", url: "#!" }
  ]
};

const postInlineData = {
  title: "Give back to your community",
  text: "Open the door to endless possibilities. Together, we will create positive change within our community, help control the homeless animal population, and improve the lives of pets and their families.",
  img: { src: "src/assets/img/content-img-04.jpg", alt: "" },
  reverse: true,
  buttons: [
    {
      variant: "secondary",
      text: "Get involved",
      url: "#!"
    }
  ]
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
