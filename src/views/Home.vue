<template>
  <div>
    <Hero :imgSrc="heroImg" imgDescr="Hero Image" />

    <Stats />

    <section class="py-12 md:py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-4">
        <h2 class="mb-10 text-center text-2xl font-bold md:mb-16 md:text-3xl xl:text-5xl">
          You can make a difference by getting involved today
        </h2>

        <div class="flex flex-wrap justify-center -mx-4 gap-y-10 md:gap-y-8">
          <div class="md:w-1/2 lg:w-1/4 px-4">
            <!-- Card -->
            <Card
              :imgSrc="CardImg01"
              imgAlt="Adopt"
              title="Adopt"
              text="Over 16,000 animals enter our shelters in hopes of finding a home to call their own. Is your new family member waiting for you?"
            />
            <!-- /Card -->
          </div>
          <div class="md:w-1/2 lg:w-1/4 px-4">
            <!-- Card -->
            <Card
              :imgSrc="CardImg02"
              imgAlt="Volunteer"
              title="Volunteer"
              text="The Brandywine Valley SPCA has a wide variety of volunteer opportunities at both our Delaware and Pennsylvania campuses."
            />
            <!-- /Card -->
          </div>
          <div class="md:w-1/2 lg:w-1/4 px-4">
            <!-- Card -->
            <Card
              :imgSrc="CardImg03"
              imgAlt="Foster"
              title="Foster"
              text="We’re saving more babies than ever, and one of the best ways for you to help is to become a foster."
            />
            <!-- /Card -->
          </div>
          <div class="md:w-1/2 lg:w-1/4 px-4">
            <!-- Card -->
            <Card
              :imgSrc="CardImg04"
              imgAlt="Get kids involved"
              title="Get kids involved"
              text="Is your child interested in volunteering? If you are between 8-12 years of age, you can join our junior volunteer program!"
            />
            <!-- /Card -->
          </div>
        </div>

        <div class="mt-16 text-center">
          <Button variant="primary" text="See all ways to get involved" />
        </div>
      </div>
    </section>

    <section class="pt-12 lg:pt-20 pb-5 bg-skew bg-purple text-white">
      <div class="mx-auto max-w-7xl px-4">
        <h2
          class="mb-10 text-center text-2xl font-bold tracking-wide md:mb-16 md:text-3xl xl:text-5xl"
        >
          Featured pets
        </h2>

        <div
          class="grid grid-cols-1 gap-10 px-0 sm:px-8 md:grid-cols-2 md:gap-8 md:px-0 lg:grid-cols-3"
        >
          <PostCard
            :imgSrc="PostCardImg01"
            imgAlt="Chewie fka Monkey"
            title="Chewie fka Monkey"
            text="Chewie is a big sweetheart who loves taking over your side of the bed. He also loves attention and affection from his people and gets along well …"
            share
            :buttonLink="{text:'Learn more'}"
          />
          <PostCard
            :imgSrc="PostCardImg02"
            imgAlt="Slim aka Spunk"
            title="Slim aka Spunk"
            text="Slim (aka Spunk) is a big fellow with an equally big heart! This wonderful guy is bonded with Magic, on whom he relies for comfort and love. As a bonded …"
            share
            :buttonLink="{text:'Learn more'}"
          />
          <PostCard
            :imgSrc="PostCardImg03"
            imgAlt="Boo Boo"
            title="Boo Boo"
            text="Boo Boo loves tennis balls! He likes to play with them, walk with them, and swim in our doggie pools with them. If you have a stash of tennis balls, Boo Boo …"
            share
            :buttonLink="{text:'Learn more'}"
          />
        </div>

        <div class="mt-16 flex flex-col md:flex-row justify-center items-center">
          <Button
            class="mx-7 mb-8 md:mb-0 w-64"
            variant="secondary"
            text="All adoptable dogs"
          />
          <Button
            class="mx-7 mb-8 md:mb-0 w-64"
            variant="secondary"
            text="All adoptable cats"
          />
        </div>
      </div>
    </section>

    <section class="pt-48 sm:pt-60 pb-28 md:pb-0 relative">
      <div class="absolute top-0 left-0 w-full h-full">
         <img class="absolute top-0 left-0 w-full h-full object-cover" src="../assets/img/bg-image-01.jpg" alt="image description" />
      </div>

      <div class="flex mx-auto max-w-5xl px-4 relative z-10">
        <div class="flex flex-col lg:flex-row overflow-hidden mb-0 md:-mb-32 rounded-sm md:rounded-lg shadow bg-white">
          <div class="lg:w-[46%] h-80 md:h-96 lg:h-auto relative overflow-hidden">
            <img class="absolute top-0 left-0 object-cover w-full h-full" src="../assets/img/content-img-01.jpg" alt="image description" />
          </div>
          <div class="lg:w-[54%] px-9 sm:px-16 py-9 sm:py-12 pb-14 lg:py-20 text-center lg:text-left">
            <h3 class="text-xl sm:text-4xl leading-normal font-bold mb-2">We place over 16,000 animals a year</h3>
            <p class="text-xs leading-loose lg:mr-24">We were the first open-admission no-kill shelter in Pennsylvania, and we have led Delaware to becoming the first no-kill state in the United States.</p>
            <Button class="mt-10" variant="primary" text="Learn more about our impact"/>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-16 md:pt-56 pb-20 md:pb-24 bg-gray-dark">
      <div class="mx-auto max-w-[61rem] px-4">
        <h2
          class="mb-10 text-center text-2xl font-bold md:mb-16 md:text-3xl xl:text-5xl"
        >
          For your pet
        </h2>

        <div
          class="grid grid-cols-1 gap-10 px-8 sm:grid-cols-1 md:grid-cols-2 md:gap-8 md:px-0 lg:grid-cols-3"
        >
          <!-- Card -->
          <Card
            :imgSrc="CardImg05"
            imgAlt="Wellness clinic"
            title="Wellness clinic"
            text="Low-cost, quality veterinary services available to the public"
          />
          <!-- /Card -->
          <!-- Card -->
          <Card
            :imgSrc="CardImg06"
            imgAlt="Spay & neuter"
            title="Spay & neuter"
            text="Low-cost spay and neutering services for your pet"
          />
          <!-- /Card -->
          <!-- Card -->
          <Card
            :imgSrc="CardImg07"
            imgAlt="Daycare & boarding"
            title="Daycare & boarding"
            text="Luxury boarding & daycare for pampered pets"
          />
          <!-- /Card -->
        </div>

        <div class="mt-16 text-center">
          <Button variant="primary" text="See all pet services" />
        </div>
      </div>
    </section>

    <section class="py-20 pb-10 lg:py-28">
      <div class="mx-auto max-w-7xl px-4 lg:flex items-start">
        <div class="lg:w-[42%] max-w-sm md:max-w-md lg:max-w-full flex-shrink-0 mx-auto lg:mr-14 xl:mr-24 mb-8 sm:mb-10 lg:mb-0 rounded-md overflow-hidden shadow">
          <img class="w-full" src="../assets/img/content-img-02.jpg" alt="image description" />
        </div>
        <div class="text-sm sm:text-base">
          <h3 class="mb-2 text-2xl sm:text-5xl font-bold">Need help?</h3>
          <p class="mb-10 sm:mb-8">Supporting our community by providing the resources needed to improve the lives and well-being of animals is what we do</p>

          <div class="grid sm:grid-cols-2 gap-10 sm:gap-8">
            <div>
              <h4 class="mb-2 text-xl font-bold">Lost & found pets</h4>
              <p class="mb-5 text-xs leading-loose">Losing your furry friend or finding another’s beloved animal can be a very harrowing and emotional process.</p>
              <ButtonLink :text="'Learn more'" />
            </div>
            <div>
              <h4 class="mb-2 text-xl font-bold">Reporting animal cruelty</h4>
              <p class="mb-5 text-xs leading-loose">Our Animal Protective Services Department works tirelessly to prevent abuse and protect companion animals.</p>
              <ButtonLink :text="'Learn more'" />
            </div>
            <div>
              <h4 class="mb-2 text-xl font-bold">Pet food pantry</h4>
              <p class="sm:mr-24 mb-5 text-xs leading-loose">Free food assistance for pet owners living below the poverty line.</p>
              <ButtonLink :text="'Learn more'" />
            </div>
            <div>
              <h4 class="mb-2 text-xl font-bold">Behavior resources</h4>
              <p class="mb-5 text-xs leading-loose">We offer phone, e-mail and on-site support for our adopters, foster families and pet owners seeking behavior assistance.</p>
              <ButtonLink :text="'Learn more'" />
            </div>
          </div>

          <Button class="mt-16" variant="primary" text="See all ways to get help"/>
        </div>
      </div>
    </section>

    <section class="py-10 pb-36 md:pb-60">
      <div class="mx-auto max-w-5xl px-4">
        <div class="flex flex-col-reverse lg:flex-row">
          <div class="w-auto lg:w-1/2">
            <div
              class="text-center text-xs lg:pr-16 lg:text-left"
            >
              <h2 class="mb-4 text-2xl font-bold md:text-4xl">
                A second chance at nine lives
              </h2>
              <p>
                Whiskers got his leg caught in a fox trap after getting loose
                from his home. He lost a lot of skin, suffered nerve damage, ahd
                a quickly spreading infection. His family brought him to our New
                Castle Animal Health Center. They couldn’t afford the entirety
                od his care and were condisdering euthanasia since the infection
                would soon be life-threatening. Thanks to our pet retention
                grant from Petco Love, we were able to bridge what his owners
                couldn’t afford and saved Whiskers by amputating the badly
                damaged leg. Whiskers now lives a life of three-legged luxury.
                We’re grateful for Petco Love’s support, which results from all
                of you who donate at checkout at the Petco stores.
              </p>
            </div>
          </div>
          <div class="w-full lg:w-1/2 max-w-md lg:max-w-full mx-auto">
            <div class="mb-8 lg:mb-0">
              <Carousel :slides="carouselSlides" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-20 lg:pb-28 pt-8 bg-skew bg-skew-reverse bg-purple text-white">
      <div class="mx-auto max-w-[67rem] px-4">
        <h2
          class="mb-10 text-center text-2xl font-bold tracking-wide md:mb-16 md:text-3xl xl:text-5xl"
        >
          Great or small, all donations are appreciated
        </h2>

        <div
          class="grid grid-cols-1 gap-10 px-0 sm:px-8 md:grid-cols-2 md:gap-16 md:px-0 lg:grid-cols-3 text-center font-bold"
        >
          <PostCard
            :imgSrc="PostCardImg04"
            imgAlt="Save a Life"
            title="Save a Life"
            text="Every dollar you donate will go to the programs and services that help save the lives of thousands of homeless animals each year."
            :button="{variant:'secondary', text:'Save a life'}"
          />
          <PostCard
            :imgSrc="PostCardImg05"
            imgAlt="Circle of Life"
            title="Circle of Life"
            text="Your generous monthly donation helps provide shelter, food, and medical care to thousands of animals who enter our shelters each year."
            :button="{variant:'secondary', text:'Become a member'}"
          />
          <PostCard
            :imgSrc="PostCardImg06"
            imgAlt="1929 Society"
            title="1929 Society"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non."
            :button="{variant:'secondary', text:'Join the society'}"
          />
        </div>

        <div class="mt-16 text-center">
          <ButtonLink text="See more ways to help" />
        </div>
      </div>
    </section>

    <section class="py-20 lg:py-28">
      <div class="mx-auto max-w-5xl px-4 lg:flex items-center">
        <div class="lg:w-[43%] max-w-md lg:max-w-full flex-shrink-0 mx-auto lg:mr-20 xl:mr-28 mb-12 lg:mb-0 grid grid-cols-2 gap-6 sm:gap-8">
          <div class="overflow-hidden flex items-center justify-center rounded-sm sm:rounded-lg bg-white shadow">
            <img src="../assets/img/merch-img-01.jpg" alt="image description" />
          </div>
          <div class="overflow-hidden flex items-center justify-center rounded-sm sm:rounded-lg bg-white shadow">
            <img src="../assets/img/merch-img-02.jpg" alt="image description" />
          </div>
          <div class="overflow-hidden flex items-center justify-center rounded-sm sm:rounded-lg bg-white shadow">
            <img src="../assets/img/merch-img-03.jpg" alt="image description" />
          </div>
          <div class="overflow-hidden flex items-center justify-center rounded-sm sm:rounded-lg bg-white shadow">
            <img src="../assets/img/merch-img-04.jpg" alt="image description" />
          </div>
        </div>
        <div class="text-xs sm:text-sm text-center lg:text-left">
          <h3 class="mb-2 text-2xl sm:text-3xl md:text-5xl font-bold">Support our lifesaving work and look good doing it </h3>
          <p class="mb-10">Get your paws on our original and limited edition merchandise. Your purchases go towards the care of the 16,000+ animals we take in each year.</p>
          <Button variant="primary" text="Shop now"/>
        </div>
      </div>
    </section>

    <section class="py-12 lg:py-20 bg-gray-dark">
      <div class="mx-auto max-w-7xl px-4">
        <h2
          class="mb-10 text-center text-2xl font-bold tracking-wide md:mb-16 md:text-3xl xl:text-5xl"
        >
          What’s happening at BVSPCA
        </h2>

        <div
          class="grid grid-cols-1 gap-10 px-0 sm:px-8 md:grid-cols-2 md:gap-8 md:px-0 lg:grid-cols-3"
        >
          <PostCard
            :imgSrc="PostCardImg07"
            imgAlt="$5 off our 5K Color Run"
            title="$5 off our 5K Color Run"
            text="We're so excited to be offering a number of new activities to this year's line-up of fun, including a Color Run for you and your furry running partner. Register today!"
            :buttonLink="{text:'Read more'}"
          />
          <PostCard
            :imgSrc="PostCardImg08"
            imgAlt="Walk-4-Paws"
            title="Walk-4-Paws"
            text="We’re bringing back the most popular activities PLUS we’ve changed our 5K to a Color Run, expanded Yoga with Puppies, added live music, and added more fun things."
            :buttonLink="{text:'Read more'}"
          />
          <PostCard
            :imgSrc="PostCardImg09"
            imgAlt="Critter Camp"
            title="Critter Camp"
            text="Kids ages 7 to 12 will have a howling good time at our Critter Camp day camp. Our next session is a Spring-themed Weekend: April 9 – April 10 for kids ages 10 through 12."
            :buttonLink="{text:'Read more'}"
          />
        </div>

        <div class="mt-16 flex flex-col md:flex-row justify-center items-center">
          <Button
            variant="primary"
            text="View all news, events & resources "
          />
        </div>
      </div>
    </section>

    <section class="hidden bg-white py-12 md:block">
      <h2 class="mb-10 px-5 text-center text-2xl font-bold lg:text-4xl">
        Thank you to our wonderful sponsors!
      </h2>
      <div class="mb-10">
        <MarqueeSlider :slides="marqueeSlides" />
      </div>
      <div class="px-5 text-center">
        <ButtonLink :text="'Become a sponsor'" />
      </div>
    </section>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import heroImg from "@/assets/img/hero-image-01.jpg";

import Button from "@/components/Button.vue";
import ButtonLink from "@/components/ButtonLink.vue";

import Stats from "@/components/Stats.vue";

import Card from "@/components/Card.vue";
import CardImg01 from "@/assets/img/icon-pet.svg";
import CardImg02 from "@/assets/img/icon-volunteer.svg";
import CardImg03 from "@/assets/img/icon-dog-house.svg";
import CardImg04 from "@/assets/img/icon-father-and-son.svg";
import CardImg05 from "@/assets/img/icon-heart-rate.svg";
import CardImg06 from "@/assets/img/icon-dog.svg";
import CardImg07 from "@/assets/img/icon-pet-shop.svg";

import PostCard from "@/components/PostCard.vue";
import PostCardImg01 from "@/assets/img/img-pet-01.jpg";
import PostCardImg02 from "@/assets/img/img-pet-02.jpg";
import PostCardImg03 from "@/assets/img/img-pet-03.jpg";
import PostCardImg04 from "@/assets/img/img-pet-04.jpg";
import PostCardImg05 from "@/assets/img/img-pet-05.jpg";
import PostCardImg06 from "@/assets/img/img-pet-06.jpg";
import PostCardImg07 from "@/assets/img/img-pet-07.jpg";
import PostCardImg08 from "@/assets/img/img-pet-08.jpg";
import PostCardImg09 from "@/assets/img/content-img-03.jpg";

import Carousel from "@/components/Carousel.vue";
import slideImg01 from "@/assets/img/slide01.jpg";
import slideImg02 from "@/assets/img/slide02.jpg";
const carouselSlides = [slideImg01, slideImg02, slideImg01, slideImg02];

import MarqueeSlider from "@/components/MarqueeSlider.vue";
import logo01 from "@/assets/img/sponsors/petco-love.png";
import logo02 from "@/assets/img/sponsors/discover.png";
import logo03 from "@/assets/img/sponsors/faegre-drinker.png";
import logo04 from "@/assets/img/sponsors/idexx.png";
import logo05 from "@/assets/img/sponsors/merck.png";
import logo06 from "@/assets/img/sponsors/barnes-thornbur.png";

const marqueeSlides = [
  {
    url: "#",
    logo: logo01
  },
  {
    url: "#",
    logo: logo02
  },
  {
    url: "#",
    logo: logo03
  },
  {
    url: "#",
    logo: logo04
  },
  {
    url: "#",
    logo: logo05
  },
  {
    url: "#",
    logo: logo06
  }
];

export default {
  setup() {
    return {
      carouselSlides,
      marqueeSlides,
      heroImg,
      CardImg01,
      CardImg02,
      CardImg03,
      CardImg04,
      CardImg05,
      CardImg06,
      CardImg07,
      PostCardImg01,
      PostCardImg02,
      PostCardImg03,
      PostCardImg04,
      PostCardImg05,
      PostCardImg06,
      PostCardImg07,
      PostCardImg08,
      PostCardImg09
    };
  },
  components: {
    MarqueeSlider,
    Carousel,
    Button,
    ButtonLink,
    Hero,
    Stats,
    Card,
    PostCard
  }
};
</script>
