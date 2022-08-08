<template>
  <section class="px-6 py-12 lg:py-24">
    <div
      class="mx-auto max-w-[615px] rounded-[35px] py-12 px-6 shadow md:py-16"
    >
      <form class="mx-auto max-w-[404px]">
        <div class="mb-10 text-center text-xs text-black">
          <h1
            class="xsm:text-3xl mb-1 text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl"
          >
            Get in touch with us
          </h1>
          <p>
            For general inquiries, please fill out the form below and one of our
            representatives will get back to you as quickly as possible.
          </p>
        </div>
        <div
          class="xsm:grid-cols-2 xsm:gap-x-6 xsm:gap-y-0 mb-2 grid grid-cols-1 gap-y-2"
        >
          <Input label="First Name*" />
          <Input label="Last Name*" />
        </div>
        <Input label="Email*" class="mb-2" />
        <Input label="Phone" class="mb-2" />
        <Input label="Comments" class="mb-12" type="textarea" />
        <div class="xsm:text-left text-center">
          <Button text="Submit" as="button" type="button" />
        </div>
      </form>
    </div>
  </section>
  <section class="bg-purple pb-12">
    <MapLocations :locations="locations" />
  </section>
</template>
<script setup>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import MapLocations from "@/components/MapLocations.vue";

const locations = [
  {
    name: "Dover",
    address: ["1757 Horsepond Rd.", "Dover, DE 19901"],
    contact: [
      { title: "Main", value: "(484) 302-0018", type: "tel" },
      { title: "AHC", value: "(302) 516-1004", type: "tel" },
      { title: "Email", value: "info@bvspca.org", type: "mailto" }
    ],
    hours: [
      {
        title: "Shelter",
        text: "Sun - Thurs 11am - 9pm \nFri & Sat 11am - 10pm"
      },
      {
        title: "Animal Health Center",
        text: "Monday & Thursday: 9:00am – 5:00pm",
        link: { text: "See full hours", url: "#!" }
      }
    ],
    coordinates: {
      lat: 39.1414900571048,
      lng: -75.47439972883507
    }
  },
  {
    name: "New Castle",
    address: ["600 South Street", "New Castle, DE 19720"],
    phone: [{ title: "Main", number: "(302) 516-1005" }],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 39.65997584020019,
      lng: -75.57023031534025
    }
  },
  {
    name: "Georgetown",
    address: ["22918 Dupont Boulevard", "Georgetown, DE 19947"],
    phone: [
      { title: "Main", number: "(302) 858-4203" },
      { title: "AHC", number: "(302) 516-1004" }
    ],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 38.66560267717307,
      lng: -75.38127138650519
    }
  },
  {
    name: "West Chester",
    address: ["600 South Street", "New Castle, DE 19720"],
    phone: [{ title: "Main", number: "(302) 516-1005" }],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 39.65997584020019,
      lng: -75.57023031534025
    }
  },
  {
    name: "Malvern",
    address: ["600 South Street", "New Castle, DE 19720"],
    phone: [{ title: "Main", number: "(302) 516-1005" }],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 39.65997584020019,
      lng: -75.57023031534025
    }
  },
  {
    name: "Plymouth Meeting",
    address: ["600 South Street", "New Castle, DE 19720"],
    phone: [{ title: "Main", number: "(302) 516-1005" }],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 39.65997584020019,
      lng: -75.57023031534025
    }
  },
  {
    name: "ARC",
    address: ["600 South Street", "New Castle, DE 19720"],
    phone: [{ title: "Main", number: "(302) 516-1005" }],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 39.65997584020019,
      lng: -75.57023031534025
    }
  },
  {
    name: "Eastern Shore Pet Resort",
    address: ["600 South Street", "New Castle, DE 19720"],
    phone: [{ title: "Main", number: "(302) 516-1005" }],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 39.65997584020019,
      lng: -75.57023031534025
    }
  }
];
</script>
