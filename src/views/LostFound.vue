<template>
  <div>
    <HeroInner v-bind="heroInnerData" />

    <section class="py-14 lg:py-28 bg-gray-dark">
      <div class="mx-auto max-w-7xl px-4">
        <PostModule v-bind="postModuleData" />
      </div>
    </section>

    <section class="py-14 lg:py-28">
      <div class="mx-auto grid max-w-7xl grid-cols-1 px-4 lg:grid-cols-2">
        <div class="pb-14 text-xs sm:text-sm lg:pr-20 lg:pb-0 2xl:pr-36">
          <h3 class="mb-2 text-2xl font-bold sm:text-4xl">
            If you have lost your pet, we invite you to fill out the report to
            the right
          </h3>
          <p class="mb-6">
            Please look at the list of
            <a class="text-red hover:text-red-dark font-bold transition-colors" href="#0"
              >recently found pets</a
            >
            and you can also do a walk-through of our shelter to determine if
            your pet has been brought to us. If you do NOT see your Lost Report
            uploaded to our Lost & Found Facebook page after 24 hours or did not
            receive a confirmation email, please contact the shelter directly.
          </p>
          <p class="mb-12">
            All Lost/Found Reports will also be posted to our Lost/Found
            <a class="text-red hover:text-red-dark font-bold transition-colors" href="#0"
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
              <a class="text-red hover:text-red-dark font-bold transition-colors" href="#0"
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
        <PostModule class="text-xs font-bold" v-bind="postModuleData2" />
      </div>
    </section>

    <PostCardsSection v-bind="postCardsSectionData" />
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue";
import HeroInner from "@/components/HeroInner.vue";
import FormLostFound from "@/components/FormLostFound.vue";
import PostModule from "@/components/PostModule.vue";
import InfoCard from "@/components/InfoCard.vue";
import PostCard from "@/components/PostCard.vue";
import PostCardsSection from "@/components/sections/PostCardsSection.vue";

const heroInnerData = {
  title: "Lost & found pets",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
  img: { src: "/img/hero-image-06.jpg", alt: "Lost & found pets" }
};

const postModuleData = {
  img: { src: "/img/content-img-12.jpg", alt: "" },
  title: { text: "Lost your pet? Found a pet?", size: "md" },
  text: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl."],
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
    { text: "Check Facebook page DE ", url: "#!" },
    { variant: "outline", text: "Check Facebook page PA ", url: "#!" }
  ],
  reverse: true,
  layoutAlt: true,
  stretchColumns: true
};

const infoCardData = {
  title: "We place over 16,000 animals a year",
  text: "We were the first open-admission no-kill shelter in Pennsylvania, and we have led Delaware to becoming the first no-kill state in the United States.",
  img: { src: "/img/content-img-01.jpg", alt: "" },
  buttons: [{ text: "Learn more about our impact", url: "#!" }]
};

const postModuleData2 = {
  title: { text: "Give back to your community", size: "md"},
  text: ["Open the door to endless possibilities. Together, we will create positive change within our community, help control the homeless animal population, and improve the lives of pets and their families."],
  img: { src: "/img/content-img-04.jpg", alt: "" },
  buttons: [
    {
      variant: "secondary",
      text: "Get involved",
      url: "#!"
    }
  ],
  reverse: true
};

const postCardsSectionData = {
  title: "Lost & found pets related news & resources",
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
