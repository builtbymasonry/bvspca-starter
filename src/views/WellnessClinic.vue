<template>
  <div>
    <HeroInner
     :imgSrc="heroImg"
     imgDescr="Hero Image"
     title="Wellness clinic"
     text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl."
    />

    <section class="py-14 lg:py-28">
      <div class="mx-auto max-w-7xl px-4 lg:flex lg:flex-row-reverse items-start">
        <div class="lg:w-[37%] max-w-sm md:max-w-md lg:max-w-full flex-shrink-0 mx-auto lg:ml-14 xl:ml-18 mb-10 lg:mb-0 rounded-sm md:rounded-md overflow-hidden">
          <img class="w-full" src="../assets/img/content-img-05.jpg" alt="image description" />
        </div>
        <div class="text-sm sm:text-base text-center md:text-left">
          <h3 class="mb-2 text-2xl sm:text-4xl font-bold">Affordable healthcare with an impact</h3>
          <p class="mb-10 sm:mb-8">In addition, by bringing their pets to our Brandywine vet hospitals for care, clients support the plight of homeless pets, as any proceeds from the BVSPCA’s clinics benefit the mission and programs at the Brandywine Valley SPCA.</p>

          <div class="grid sm:grid-cols-2 gap-8 xl:pr-28">
            <div>
              <h4 class="mb-2 text-xl font-bold">Feature one</h4>
              <p class="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia.</p>
              <ButtonLink :text="'Learn more'" />
            </div>
            <div>
              <h4 class="mb-2 text-xl font-bold">Feature two</h4>
              <p class="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia.</p>
              <ButtonLink :text="'Learn more'" />
            </div>
            <div>
              <h4 class="mb-2 text-xl font-bold">Feature three</h4>
              <p class="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia.</p>
              <ButtonLink :text="'Learn more'" />
            </div>
            <div>
              <h4 class="mb-2 text-xl font-bold">Feature four</h4>
              <p class="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia.</p>
              <ButtonLink :text="'Learn more'" />
            </div>
          </div>

          <div class="flex flex-wrap flex-col lg:flex-row items-center justify-center lg:justify-start mt-8 sm:mt-16">
            <Button class="mb-10 xl:mb-0 xl:mr-9" variant="primary" text="Schedule an appointment "/>
            <Button variant="outline" text="Learn more about our impact"/>
          </div>
        </div>
      </div>
    </section>






















  </div>
</template>

<script setup>
import Button from "@/components/Button.vue";

import HeroInner from "@/components/HeroInner.vue";
import heroImg from "@/assets/img/hero-image-03.jpg";
</script>
