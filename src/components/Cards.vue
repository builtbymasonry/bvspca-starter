<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <div class="mx-auto max-w-7xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      <h2 class="text-3xl sm:text-4xl font-bold text-center">
        You can make a difference by getting involved today
      </h2>

      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <!--Card 1-->
        <a class="border-2 border-transparent rounded-md text-center shadow hover:border-orange" href="#0">
          <div class="px-6 pt-16 pb-4">
            <img class="mx-auto" src="../assets/img/icon-pet.svg" alt="Adopt"/>
          </div>
          <div class="px-6 py-4">
            <h3 class="font-bold text-xl mb-2">Mountain</h3>
            <p class="text-xs">
              Over 16,000 animals enter our shelters in hopes of finding a home to call their own. Is your new family member waiting for you?
            </p>
          </div>
        </a>
        <!--Card 2-->
        <a class="border-2 border-transparent rounded-md text-center shadow hover:border-orange" href="#0">
          <div class="px-6 pt-16 pb-4">
            <img class="mx-auto" src="../assets/img/icon-volunteer.svg" alt="Volunteer"/>
          </div>
          <div class="px-6 py-4">
            <h3 class="font-bold text-xl mb-2">Volunteer</h3>
            <p class="text-xs">
              The Brandywine Valley SPCA has a wide variety of volunteer opportunities at both our Delaware and Pennsylvania campuses.
            </p>
          </div>
        </a>
        <!--Card 3-->
        <a class="border-2 border-transparent rounded-md text-center shadow hover:border-orange" href="#0">
          <div class="px-6 pt-16 pb-4">
            <img class="mx-auto" src="../assets/img/icon-dog-house.svg" alt="Adopt"/>
          </div>
          <div class="px-6 py-4">
            <h3 class="font-bold text-xl mb-2">Foster</h3>
            <p class="text-xs">
              We’re saving more babies than ever, and one of the best ways for you to help is to become a foster.
            </p>
          </div>
        </a>
        <!--Card 4-->
       <a class="border-2 border-transparent rounded-md text-center shadow hover:border-orange" href="#0">
          <div class="px-6 pt-16 pb-4">
            <img class="mx-auto" src="../assets/img/icon-father-and-son.svg" alt="Adopt"/>
          </div>
          <div class="px-6 py-4">
            <h3 class="font-bold text-xl mb-2">Get kids involved</h3>
            <p class="text-xs">
              Is your child interested in volunteering? If you are between 8-12 years of age, you can join our junior volunteer program!
            </p>
          </div>
        </a>
      </div>

      <div class="mt-5 text-center">
        <Button variant="primary" text="See all ways to get involved" />
      </div>
    </div>
  </div>
</template>

<script>
  import Button from "./Button.vue";

  export default {
    components: {
      Button
    }
  }
</script>
