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
        <Marker
          v-for="(location, i) in locations"
          :options="{ position: location.coordinates, icon: pin }"
          :key="i"
        >
        </Marker>
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
              class="inline-flex h-7 w-7 shrink touch-manipulation items-center justify-center"
              :class="
                currentLocationIndex === 0
                  ? 'pointer-events-none text-red-400'
                  : 'text-red hover:text-red-light'
              "
            >
              <BaseIcon name="angleLeft" aria-hidden="true" class="h-3 w-3" />
            </button>
            <span
              ref="locationNameRef"
              class="xsm:text-xl shrink grow select-none px-3 text-center text-base font-bold leading-tight text-black"
              >{{ currentLocation && currentLocation.name }}</span
            >
            <button
              @click="setCurrentLocation(currentLocationIndex + 1)"
              aria-label="Go to next location"
              class="inline-flex h-7 w-7 shrink touch-manipulation items-center justify-center"
              :class="
                currentLocationIndex === locations.length - 1
                  ? 'pointer-events-none text-red-400'
                  : 'text-red hover:text-red-light'
              "
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
            class="mx-auto lg:max-w-5xl"
          >
            <div
              class="-m-3 flex flex-wrap text-sm leading-normal"
              v-show="i === currentLocationIndex"
            >
              <div
                v-if="location.address"
                class="shrink grow basis-full p-3 text-center md:basis-1/2 md:text-left lg:basis-0"
              >
                <h4 class="mb-1 text-sm font-bold text-black md:text-xl">Address</h4>
                <address
                  v-html="renderAddress(location.address)"
                  class="flex flex-col not-italic"
                ></address>
              </div>
              <div
                v-if="location.phone"
                class="shrink grow basis-full p-3 text-center md:basis-1/2 md:text-left lg:basis-0"
              >
                <h4 class="mb-1 text-sm font-bold text-black md:text-xl">Phone</h4>
                <ul>
                  <li
                    v-for="phone in location.phone"
                    :key="phone.number"
                    v-html="
                      `<span class='font-bold flex justify-center md:justify-start flex-wrap'>${
                        phone.title ? phone.title + ':&nbsp;' : ''
                      }<a class='text-red hover:text-red-light transition-colors' href='tel:${
                        phone.number
                      }'>${phone.number}</a></span>`
                    "
                    class="mb-2 last:mb-0"
                  ></li>
                </ul>
              </div>
              <div
                v-if="location.contact"
                class="shrink grow basis-full p-3 text-center md:basis-1/2 md:text-left lg:basis-0"
              >
                <h4
                  class="mb-2 text-sm font-bold leading-normal text-black md:text-xl"
                >
                  Contact
                </h4>
                <ul class="font-bold">
                  <li
                    v-for="contact in location.contact"
                    :key="contact.value"
                    v-html="
                      `${
                        contact.title ? `${contact.title}:&nbsp;` : ''
                      }<a class='text-red hover:text-red-light transition-colors' href='${
                        contact.type
                      }:${contact.value}'>${contact.value}</a>`
                    "
                    class="mb-2 last:mb-0"
                  ></li>
                </ul>
              </div>
              <div
                v-for="item in location?.hours"
                :key="item.title"
                class="shrink grow basis-full p-3 text-center md:basis-1/2 md:text-left lg:basis-0"
              >
                <h4
                  class="mb-2 text-sm font-bold leading-normal text-black md:text-xl"
                >
                  {{ item.title ? item.title : "&nbsp;" }}
                </h4>
                <p
                  v-if="item.text"
                  v-html="item.text"
                  class="whitespace-pre-line"
                ></p>
                <a
                  v-if="item.link"
                  :href="item.link.url"
                  class="text-red hover:text-red-light font-bold transition-colors"
                  >{{ item.link.text }}</a
                >
              </div>
              <div
                v-if="location.email"
                class="shrink grow basis-full p-3 text-center md:basis-1/2 md:text-left lg:basis-0"
              >
                <h4 class="mb-1 text-sm font-bold text-black md:text-xl">Email</h4>
                <ul>
                  <li
                    v-for="email in location.email"
                    :key="email"
                    v-html="
                      `<a class='text-red font-bold hover:text-red-light transition-colors' href='mailto:${email}'>${email}</a>`
                    "
                    class="mb-2 last:mb-0"
                  ></li>
                </ul>
              </div>
              <div
                v-if="location.button"
                class="shrink basis-full p-3 text-center md:basis-1/2 md:text-left lg:basis-0"
              >
                <Button v-bind="location.button" text="Contact us" />
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
import { GoogleMap, Marker } from "vue3-google-map";
import { useWindowSize } from "vue-window-size";
import Button from "./Button.vue";
import BaseIcon from "./BaseIcon.vue";

import pin from "/img/pin-heart.svg";

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

  panToCurrentLocation();
};

const panToCurrentLocation = () => {
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
  `<span class="font-bold flex justify-center md:justify-start flex-wrap">${
    phone.title ? phone.title + ":&nbsp;" : ""
  }<a class="text-red hover:text-red-light transition-colors" href="tel:${phone.number}">${
    phone.number
  }</a></span>`;

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

    panToCurrentLocation();
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
