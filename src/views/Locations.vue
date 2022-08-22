<template>
  <LocationsSection :locations="locationsData" />

  <section class="py-14 lg:py-28 bg-gray-dark">
    <div class="mx-auto flex max-w-5xl flex-col items-center gap-5 gap-y-10 px-4 text-center lg:flex-row-reverse lg:text-left">
      <div class="relative mx-auto w-full max-w-sm md:max-w-md lg:w-2/3 lg:max-w-full">
        <img
          class="w-full"
          src="/img/content-img-21.png"
          alt="image description"
        />
      </div>
      <div class="py-2 lg:pr-5 text-xs lg:flex lg:w-1/3 lg:flex-col lg:items-start lg:justify-center">
        <h2 class="mb-3 text-2xl font-bold md:text-3xl xl:text-4xl">
          Check out upcoming events
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
          dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu.
          Suspendisse potenti. Pellentesque eu orci nisi.
        </p>
        <Button class="mt-10" text="View event calendar" url="#!" />
      </div>
    </div>
  </section>

  <TextBanner v-bind="textBannerData" />
</template>

<script setup>
import Button from "@/components/Button.vue"
import LocationsSection from "@/components/Locations.vue"
import TextBanner from "@/components/TextBanner.vue"

const locationsData = [
  {
    name: "Dover",
    address: ["1757 Horsepond Rd.", "Dover, DE 19901"],
    distance: 2.9,
    phone: [
      { title: "Phone", number: "(484) 302-0018" },
      { title: "AHC Phone", number: "(302) 516-1004" }
    ],
    hours: [
      {
        title: "Shelter hours",
        description: `Sun - Thurs 11am - 9pm \nFri & Sat 11am - 10pm`
      },
      {
        title: "Animal Health Center hours",
        description: "Monday: 9:00 am – 5:00 pm",
        link: { url: "#!", text: "See full hours" }
      }
    ],
    coordinates: {
      lat: 39.1414900571048,
      lng: -75.47439972883507
    }
  },
  {
    name: "New Castle",
    address: ["1757 Horsepond Rd.", "Dover, DE 19901"],
    distance: 2.9,
    phone: [
      { title: "Phone", number: "(111) 111-1111" },
      { title: "AHC Phone", number: "(302) 516-1004" }
    ],
    hours: [
      {
        title: "Shelter hours",
        description: `Sun - Thurs 11am - 9pm \nFri & Sat 11am - 10pm`
      },
      {
        title: "Animal Health Center hours",
        description: "Monday: 9:00 am – 5:00 pm",
        link: { url: "#!", text: "See full hours" }
      }
    ],
    coordinates: {
      lat: 39.65997584020019,
      lng: -75.57023031534025
    }
  },
  {
    name: "Eastern Shore Pet Resort",
    address: ["1757 Horsepond Rd.", "Dover, DE 19901"],
    distance: 2.9,
    phone: [
      { title: "Phone", number: "(222) 222-2222" },
      { title: "AHC Phone", number: "(302) 516-1004" }
    ],
    hours: [
      {
        title: "Shelter hours",
        description: `Sun - Thurs 11am - 9pm \nFri & Sat 11am - 10pm`
      },
      {
        title: "Animal Health Center hours",
        description: "Monday: 9:00 am – 5:00 pm",
        link: { url: "#!", text: "See full hours" }
      }
    ],
    coordinates: {
      lat: 38.72256761723463,
      lng: -75.34210678465972
    }
  }
];

const textBannerData = {
  title: "Have questions or need help? \nShoot us a note ",
  buttons: [{ text: "Contact us", url: "#" }]
};
</script>
