<template>
  <div>
    <HeroInner
     :imgSrc="heroImg"
     imgDescr="Hero Image"
     title="For your pet"
     text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl."
    />

    <section class="py-12 md:py-20 lg:py-28">
      <div class="mx-auto max-w-5xl px-4">
        <h2 class="mb-10 text-center text-2xl font-bold md:mb-16 md:text-3xl xl:text-5xl">
          Resources for pet owners and lovers
        </h2>

        <div class="flex flex-wrap justify-center -mx-4 gap-y-10 md:gap-y-8">
          <div class="md:w-1/2 lg:w-1/3 px-4">
            <!-- Card -->
            <Card
              :imgSrc="CardImg01"
              imgAlt="Wellness clinic"
              title="Wellness clinic"
              text="Our full-service, high-quality hospital offers medical care ranging from routine vaccinations and health checks, to sick visits and diagnostics, to spay/neuter and special surgeries."
            />
            <!-- /Card -->
          </div>
          <div class="md:w-1/2 lg:w-1/3 px-4">
            <!-- Card -->
            <Card
              :imgSrc="CardImg02"
              imgAlt="Spay & neuter"
              title="Spay & neuter"
              text="Spayed/neutered pets live longer. Our accomplished veterinarians and medical staff operate in a professional, caring manner and will handle your pet kindly."
            />
            <!-- /Card -->
          </div>
          <div class="md:w-1/2 lg:w-1/3 px-4">
            <!-- Card -->
            <Card
              :imgSrc="CardImg03"
              imgAlt="Daycare & boarding"
              title="Daycare & boarding"
              text="Now your pet can have a luxury stay in daycare or boarding while helping animals in need. Eastern Shore Pet Resort helps fund ongoing operation of important work."
            />
            <!-- /Card -->
          </div>
          <div class="md:w-1/2 lg:w-1/3 px-4">
            <!-- Card -->
            <Card
              :imgSrc="CardImg04"
              imgAlt="Pet insurance"
              title="Pet insurance"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti."
            />
            <!-- /Card -->
          </div>
          <div class="md:w-1/2 lg:w-1/3 px-4">
            <!-- Card -->
            <Card
              :imgSrc="CardImg05"
              imgAlt="Community cats"
              title="Community cats"
              text="Our services increase the health and wellness of community cats while proactively reducing the number of animals being born without homes in our community."
            />
            <!-- /Card -->
          </div>
        </div>
      </div>
    </section>

    <section class="pt-20 sm:pt-32 pb-40 sm:pb-56 md:pb-28 relative">
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

    <section class="md:py-24 lg:py-32 pt-8 pb-20 bg-skew bg-skew-reverse bg-purple text-white">
      <div class="mx-auto max-w-4xl px-4">
        <div class="flex flex-col-reverse lg:flex-row lg:gap-8">
          <div class="lg:w-1/2 lg:pr-12 text-xs sm:text-sm font-bold text-center lg:text-left">
            <h2 class="mb-3 text-2xl sm:text-3xl lg:text-5xl">
              Give back to your community
            </h2>
            <p>
              Open the door to endless possibilities. Together, we will create positive change within our community, help control the homeless animal population, and improve the lives of pets and their families.
            </p>
            <div class="mt-8 lg:mt-12 flex flex-wrap justify-center lg:justify-start">
              <Button
                class="mr-4 md:mr-5 lg:mr-10 md:px-10"
                variant="secondary"
                text="Donate"
              />
              <Button
                class="ml-4 md:ml-0 md:px-10"
                variant="outlineSecondary"
                text="Sponsor"
              />
            </div>
          </div>
          <div class="lg:w-1/2 w-full max-w-md lg:max-w-full mx-auto">
            <div class="mb-9 lg:mb-0">
              <img class="w-full rounded-sm md:rounded-lg" src="/src/assets/img/content-img-04.jpg" alt="image description"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 lg:py-20 bg-gray-dark">
      <div class="mx-auto max-w-7xl px-4">
        <h2 class="mb-10 text-center text-2xl font-bold tracking-wide md:mb-16 md:text-3xl xl:text-5xl">
          For your pet related news & resources
        </h2>

        <div class="grid grid-cols-1 gap-10 px-0 sm:px-8 md:grid-cols-2 md:gap-8 md:px-0 lg:grid-cols-3">
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
            text="View all news, events & resources"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue";

import HeroInner from "@/components/HeroInner.vue";
import heroImg from "@/assets/img/hero-image-02.jpg";

import Card from "@/components/Card.vue";
import CardImg01 from "@/assets/img/icon-heart-rate.svg";
import CardImg02 from "@/assets/img/icon-dog.svg";
import CardImg03 from "@/assets/img/icon-pet-shop.svg";
import CardImg04 from "@/assets/img/icon-pet-insurance.svg";
import CardImg05 from "@/assets/img/icon-cat.svg";

import PostCard from "@/components/PostCard.vue";
import PostCardImg07 from "@/assets/img/img-pet-07.jpg";
import PostCardImg08 from "@/assets/img/img-pet-08.jpg";
import PostCardImg09 from "@/assets/img/content-img-03.jpg";
</script>
