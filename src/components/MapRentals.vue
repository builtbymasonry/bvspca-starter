<template>
  <div class="overflow-hidden rounded-lg bg-white shadow">
    <div class="block md:flex">
      <div class="h-[600px] min-h-[648px] w-full grow md:h-auto">
        <GoogleMap
          :api-key="GOOGLE_API_KEY"
          style="height: 100%; width: 100%"
          :zoom="zoomIndex || 8"
          :center="locationsCenter"
          disableDefaultUi
        >
          <Marker
            v-for="(location, i) in locations"
            :options="{ position: location.coordinates, icon: pin }"
            :key="i"
          >
          </Marker>
        </GoogleMap>
      </div>
      <div
        class="w-full shrink-0 py-12 px-5 text-center md:w-[300px] md:py-16 md:pl-10 md:pr-8 md:text-left lg:w-[385px] lg:pl-16"
      >
        <div class="mb-8">
          <h3
            v-if="title"
            class="mb-1 text-xl font-bold leading-tight text-black"
          >
            {{ title }}
          </h3>
          <p v-if="description" class="text-sm leading-snug">
            {{ description }}
          </p>
        </div>
        <ul
          v-if="locations && Array.isArray(locations)"
          class="text-sm leading-relaxed text-black"
        >
          <li
            v-for="location in locations"
            :key="location.name"
            class="mb-9 last:mb-0"
          >
            <h4 class="mb-2 font-bold">{{ location.name }}</h4>
            <address
              class="mb-2 flex flex-col not-italic"
              v-html="renderAddress(location.address)"
            ></address>
            <p v-if="location.tel">
              <a
                class="text-red hover:text-red-light font-bold transition-colors"
                :href="'tel:' + location.tel"
                >{{ location.tel }}</a
              >
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { GoogleMap, Marker } from "vue3-google-map";

import pin from "/img/pin-cat.svg";

const GOOGLE_API_KEY = "AIzaSyBIKsc31TXAvusDAeRpJ8_p6TnMOsU324s";

const renderAddress = (address) => {
  if (Array.isArray(address)) {
    return address.map((string) => `<span>${string}</span>`).join(" ");
  } else if (typeof address === "string") {
    return address;
  }
};

const props = defineProps({
  title: {
    type: String,
    default: null
  },
  description: {
    type: String,
    default: null
  },
  locations: {
    type: Object,
    required: true
  },
  locationsCenter: Object,
  zoomIndex: Number
});
</script>
