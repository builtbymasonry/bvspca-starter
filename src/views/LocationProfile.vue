<template>
  <LocationDetails :location="locationProfile" />

  <section class="bg-gray-dark py-14 lg:py-28">
    <div class="mx-auto max-w-7xl px-4">
      <h2 class="mb-8 text-center text-2xl font-bold md:text-3xl xl:text-4xl">
        Services offered at this location
      </h2>
      <List
        class="mx-auto max-w-3xl text-xs font-bold sm:text-sm md:columns-2 md:gap-5"
        v-bind="listData"
      />
    </div>
  </section>
</template>

<script setup>
import LocationDetails from "@/components/LocationDetails.vue";
import List from "@/components/List.vue";

const locationProfile = {
  img: { src: "src/assets/img/location-photo-01.jpg", alt: "Dover" },
  name: "Dover",
  address: ["1757 Horsepond Rd.", "Dover, DE 19901"],
  phone: [
    { title: "Phone", number: "(302) 601-7000" },
    { title: "AHC Phone", number: "(302) 516-1004" }
  ],
  hours: [
    {
      title: "Shelter hours",
      description: `Sun - Thurs 11am - 9pm \nFri & Sat 11am - 10pm`
    },
    {
      title: "Spay/Neuter Surgery hours",
      description: "Tuesdays and Fridays, by appointment"
    },
    {
      title: "Animal Health Center hours",
      description: `Monday: 9:00 am – 5:00 pm \n(sick visit walk-ins end at 1:00 \npm; waiting times may vary)`
    },
    {
      description: `Thursday& Friday: 10:00 am – 5:00 pm \n(sick visit walk-ins end at 1:00 pm; \nwaiting times may vary)`
    }
  ],
  coordinates: { lat: 39.14137979713557, lng: -75.47439046561871 }
};

const listData = {
  data: [
    "Spaying/neutering",
    "Current vaccinations",
    "Deworming",
    "Heartworm test (for dogs)",
    "Flea/tick treatment(s)",
    "Microchipping",
    "A free “starter” bag of Science Diet dry food",
    "Access to our 24-hour emergency line for post-adoption health or behavior concerns",
    "Free access to our behavior team for follow-up behavioral training and counseling",
    "A free follow-up exam at our clinic or a VCA hospital within 2 weeks of adoption, plus $250 in post-adoption services as needed"
  ],
  bulletClass: "text-red"
};
</script>
