<template>
  <div class="w-full">
    <div class="h-[496px] w-full">
      <GoogleMap
        ref="mapRef"
        :api-key="GOOGLE_API_KEY"
        :zoom="DEFAULT_MAP_ZOOM"
        style="height: 100%; width: 100%"
        disableDefaultUi
      >
        <CustomMarker
          v-for="(location, i) in locations"
          :options="{ position: location.coordinates }"
          :key="i"
        >
          <div style="width: 30px; height: 40px">
            <img :src="pin" />
          </div>
        </CustomMarker>
      </GoogleMap>
    </div>
    <div class="z-5 relative -mt-40 w-full px-8 md:px-12">
      <div class="mx-auto max-w-6xl rounded-lg bg-white shadow">
        <div class="border-purple-light border-b px-8 md:px-12 lg:px-14">
          <!-- Minimalistic navigation  -->
          <div
            class="flex items-center"
            :class="!isNavOverflowed ? 'h-0 overflow-hidden p-0' : 'pt-7 pb-6'"
          >
            <button
              @click="setCurrentLocation(currentLocationIndex - 1)"
              aria-label="Go to previous location"
              class="text-red hover:text-red-light -0 inline-flex h-7 w-7 shrink touch-manipulation items-center justify-center"
            >
              <BaseIcon name="angleLeft" aria-hidden="true" class="h-3 w-3" />
            </button>
            <span
              ref="locationNameRef"
              class="xsm:text-xl shrink grow select-none px-3 text-center text-base font-bold leading-tight text-black"
              >{{ currentLocation ? currentLocation.name : "" }}</span
            >
            <button
              @click="setCurrentLocation(currentLocationIndex + 1)"
              aria-label="Go to next location"
              class="text-red hover:text-red-light -0 inline-flex h-7 w-7 shrink touch-manipulation items-center justify-center"
            >
              <BaseIcon name="angleRight" aria-hidden="true" class="h-3 w-3" />
            </button>
          </div>
          <!-- Extended navigation -->
          <ul
            ref="navRef"
            class="-mx-3 -mb-[3px] flex justify-between overflow-x-auto overflow-y-hidden"
            :class="isNavOverflowed ? 'h-0 pt-0' : 'pt-12'"
          >
            <li
              class="px-3"
              v-for="(location, i) in locations"
              :key="location.name"
            >
              <button
                @click.prevent="setCurrentLocation(i)"
                class="touch-manipulation select-none whitespace-nowrap border-b-[5px] pb-5 text-sm font-bold leading-none transition-colors"
                :class="
                  i === currentLocationIndex
                    ? 'text-red border-red'
                    : 'border-transparent text-black'
                "
              >
                {{ location.name }}
              </button>
            </li>
          </ul>
        </div>
        <div class="px-10 py-7 lg:py-16">
          <div
            v-for="(location, i) in locations"
            :key="location.name"
            class="mx-auto lg:max-w-4xl"
          >
            <div
              class="-m-3 flex flex-wrap text-sm leading-normal"
              v-show="i === currentLocationIndex"
            >
              <div
                v-if="location.address"
                class="shrink grow basis-full p-3 text-center md:basis-1/2 md:text-left lg:basis-0"
              >
                <h4 class="text-sm font-bold text-black md:text-xl">Address</h4>
                <address
                  v-html="renderAddress(location.address)"
                  class="flex flex-col not-italic"
                ></address>
              </div>
              <div
                v-if="location.phone"
                class="shrink grow basis-full p-3 text-center md:basis-1/2 md:text-left lg:basis-0"
              >
                <h4 class="text-sm font-bold text-black md:text-xl">Phone</h4>
                <ul>
                  <li
                    v-for="phone in location.phone"
                    :key="phone.number"
                    v-html="renderPhone(phone)"
                    class="mb-2 last:mb-0"
                  ></li>
                </ul>
              </div>
              <div
                v-if="location.email"
                class="shrink grow basis-full p-3 text-center md:basis-1/2 md:text-left lg:basis-0"
              >
                <h4 class="text-sm font-bold text-black md:text-xl">Email</h4>
                <ul>
                  <li
                    v-for="email in location.email"
                    :key="email"
                    v-html="
                      `<a class='text-red font-bold hover:text-red-light' href='mailto:${email}'>${email}</a>`
                    "
                    class="mb-2 last:mb-0"
                  ></li>
                </ul>
              </div>
              <div
                v-if="location.buttonContact"
                class="shrink basis-full p-3 text-center md:basis-1/2 md:text-left lg:basis-0"
              >
                <Button v-bind="location.buttonContact" text="Contact us" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { GoogleMap, CustomMarker } from "vue3-google-map";
import { useWindowSize } from "vue-window-size";
import Button from "./Button.vue";
import BaseIcon from "./BaseIcon.vue";

import pin from "@/assets/img/pin-heart.svg";

const GOOGLE_API_KEY = "AIzaSyBIKsc31TXAvusDAeRpJ8_p6TnMOsU324s";
const DEFAULT_MAP_ZOOM = 12;
const LAT_OFFSET = 0.015; // Offset to match design

const mapRef = ref(null);
const currentLocationIndex = ref(0);
const currentLocation = ref(null);
const navRef = ref(null);
const isNavOverflowed = ref(false);

const setIsNavOverflowed = () => {
  if (navRef.value.clientWidth !== navRef.value.scrollWidth) {
    if (!isNavOverflowed.value) {
      isNavOverflowed.value = true;
    }
  } else {
    if (isNavOverflowed.value) {
      isNavOverflowed.value = false;
    }
  }
};

const setCurrentLocation = (index) => {
  if (index < 0 || index > props.locations.length - 1) return;
  currentLocationIndex.value = index;
  currentLocation.value = props.locations[currentLocationIndex.value];

  moveMapToLocation();
};

const moveMapToLocation = () => {
  // Reset zoom to default if initial was changed
  if (DEFAULT_MAP_ZOOM !== mapRef.value.map.zoom) {
    mapRef.value.map.zoom = DEFAULT_MAP_ZOOM;
  }

  // Move to current location
  mapRef.value.map.panTo(computePosition.value);
};

const renderAddress = (address) =>
  address.map((str) => `<span>${str}</span>`).join("");

const renderPhone = (phone) =>
  `<span class="font-bold flex justify-center md:justify-start flex-wrap">${phone.title}:&nbsp;<a class="text-red hover:text-red-light" href="tel:${phone.number}">${phone.number}</a></span>`;

const computePosition = computed(() => {
  return {
    lat: currentLocation.value.coordinates.lat - LAT_OFFSET,
    lng: currentLocation.value.coordinates.lng
  };
});

//Initial map render
watch(
  () => mapRef.value?.ready,
  (ready) => {
    if (!ready) return;

    moveMapToLocation();
  }
);

const { width: windowWidth, height } = useWindowSize();

watch(windowWidth, () => {
  setIsNavOverflowed();
});

onMounted(() => {
  currentLocation.value = props.locations[currentLocationIndex.value];

  setIsNavOverflowed();
});

const props = defineProps({
  locations: {
    type: Array,
    required: true
  }
});
</script>
