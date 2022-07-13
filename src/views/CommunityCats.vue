<template>
  <div>
    <section class="py-8">
      <div class="mx-auto max-w-5xl px-4">
        <TableServices :data="tableData" />
      </div>
    </section>
    <section class="py-8">
      <div class="mx-auto max-w-5xl px-4">
        <MapRentals v-bind="map" />
      </div>
    </section>
  </div>
</template>
<script setup>
import MapRentals from "@/components/MapRentals.vue";
import TableServices from "@/components/TableServices.vue";

const tableData = {
  title: "Exams",
  content: [
    {
      title: "Regular Exam",
      description: [
        "For all preventative services including new patients and annual vaccines.",
        "* Additional $5 for pets 1 year and over that are not spayed or neutered. "
      ],
      price: "$45"
    },
    {
      title: "Tech Appointment",
      description:
        "For anal glands, lab-work and returning patient vaccine boosters (rabies excluded).",
      price: "$25"
    },
    {
      title: "Nail Trim",
      description:
        "For a visit just for a nail trim. (A nail trim during an annual/regular visit is $15.)",
      price: ["$20 Cats", "$30 Dogs"]
    },
    {
      title: "Recheck Appointment",
      description: "Appointments for recurring issues.",
      price: "$35"
    },
    {
      title: "Sick Exam/Walk-In ",
      description:
        "Additional $5 for pets 1 year and over that are not spayed or neutered. ",
      price: "$65"
    }
  ]
};

const map = {
  title: "Trap rentals",
  description: "Rental Period: 1-14 days (maximum)",
  locationsCenter: { lat: 39.3443091461365, lng: -75.63985351727538 },
  locations: [
    {
      name: "West Chester",
      address: ["1212 Phoenixville Pike", "West Chester, PA 19380"],
      tel: "(484) 302-0018",
      coordinates: {
        lat: 39.9998077725332,
        lng: -75.59375539999999
      }
    },
    {
      name: "New Castle",
      address: ["600 South Street", "New Castle, DE 19720"],
      tel: "(302) 516-1005",
      coordinates: {
        lat: 39.65964363297543,
        lng: -75.57012141561196
      }
    },
    {
      name: "Georgetown",
      address: ["22918 Dupont Boulevard", "Georgetown, DE 19947"],
      tel: "(302) 856-6361",
      coordinates: {
        lat: 38.6695080498251,
        lng: -75.38105993716913
      }
    }
  ]
};
</script>
