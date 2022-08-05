<template>
  <div class="mx-auto max-w-screen-2xl">
    <div class="lg:flex">
      <div class="py-8 pr-6 pl-6 lg:w-1/2 lg:py-16 lg:pr-12">
        <div
          class="flex flex-col items-center lg:flex-col-reverse lg:items-start"
        >
          <h1
            class="mb-4 text-center text-2xl font-bold text-black lg:mt-8 lg:mb-2 lg:text-left lg:text-4xl"
          >
            {{ location.name }} Location
          </h1>
          <img
            v-if="location.img"
            v-bind="location.img"
            class="mb-6 rounded-sm shadow md:rounded-lg lg:mb-0"
          />
        </div>
        <div
          class="mx-auto max-w-xl text-sm leading-[1.85] text-black lg:max-w-none"
        >
          <address
            class="text-red border-gray-dark mb-7 flex flex-col items-center border-b-2 pb-7 font-bold not-italic sm:mb-2 sm:border-none sm:pb-0 lg:flex-row"
            v-html="renderAddress(location.address)"
          ></address>
          <ul v-if="location.phone" class="mb-6 font-bold sm:mb-7">
            <li
              v-for="phone in location.phone"
              :key="phone.number"
              v-html="renderPhone(phone)"
              class="mb-6 flex last:mb-0 sm:mb-2 sm:block"
            ></li>
          </ul>
          <dl
            class="flex-wrap sm:-m-4 sm:flex md:whitespace-pre-wrap lg:whitespace-normal xl:whitespace-pre-wrap"
          >
            <div
              v-for="item in location.hours"
              :key="item.description"
              class="mb-6 flex last:mb-0 sm:mb-0 sm:block sm:w-1/2 sm:p-4"
            >
              <dt
                class="flex-basis-0 w-[120px] shrink-0 pr-2 font-bold sm:w-auto sm:pr-0"
                v-html="
                  item.title
                    ? `${item.title}<span class='inline sm:hidden'>:</span>`
                    : '&nbsp;'
                "
              ></dt>
              <dd>{{ item.description }}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="h-[92vw] lg:h-auto lg:min-h-[500px] lg:w-1/2">
        <GoogleMap
          ref="mapRef"
          :api-key="GOOGLE_API_KEY"
          :zoom="DEFAULT_MAP_ZOOM"
          :center="locationCenter"
          style="height: 100%; width: 100%"
          disableDefaultUi
          :clickableIcons="false"
          class="location-profile"
        >
          <Marker :options="{ position: locationCenter, icon: pin }"> </Marker>
          <InfoWindow
            ref="infoRef"
            :options="{ position: getInfoWindowPos }"
            class="w-[240px] py-8 px-2 text-center text-black"
          >
            <h3
              v-if="location.name"
              class="mb-1 text-lg font-bold leading-tight"
            >
              {{ location.name }}
            </h3>
            <div v-if="location.address" class="mb-3 flex flex-col">
              <span v-for="item in location.address" :key="item">{{
                item
              }}</span>
            </div>
            <Button
              :url="`http://maps.google.com/?q=${location.coordinates.lat}%2C${location.coordinates.lng}`"
              size="small"
              target="_blank"
              text="Get directions"
            />
          </InfoWindow>
        </GoogleMap>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref, watch } from "vue";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";

import Button from "./Button.vue";
import pin from "@/assets/img/pin-heart.svg";

const GOOGLE_API_KEY = "AIzaSyBIKsc31TXAvusDAeRpJ8_p6TnMOsU324s";
const DEFAULT_MAP_ZOOM = 14;
const ICON_OFFSET = 0.003;
const infoRef = ref(null);
const mapRef = ref(null);

const locationCenter = ref(null || props.location.coordinates);

const getInfoWindowPos = computed(() => {
  if (locationCenter.value) {
    return {
      lat: locationCenter.value.lat + ICON_OFFSET,
      lng: locationCenter.value.lng
    };
  }
});

const renderAddress = (address) =>
  address.map((str) => `<span>${str}</span>`).join("");

const renderPhone = (phone) => {
  return `<span class='flex-basis-0 shrink-0 w-[120px] sm:w-auto pr-2 sm:pr-0'>${phone.title}:&nbsp;</span><a class="text-red hover:text-red-light" href="tel:${phone.number}">${phone.number}</a>`;
};

const props = defineProps({
  location: {
    type: Object,
    required: true
  }
});
</script>
<style>
.location-profile .gm-style {
  font-family: "century-gothic";
}
.location-profile .gm-style .gm-style-iw-c,
.location-profile .gm-style .gm-style-iw-d {
  padding: 0;
  border-radius: 35px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
}
.location-profile .gm-style .gm-style-iw-d {
  overflow: auto !important;
}
.location-profile .gm-style .gm-style-iw-t::after {
  box-shadow: none;
}

.location-profile .gm-style .gm-style-iw {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.71;
}

.location-profile .gm-style-iw button {
  top: 7px !important;
  right: 7px !important;
  display: none !important;
}

.location-profile .gm-style .gm-style-iw-tc {
  filter: none !important;
}
</style>
