<template>
  <section class="mx-auto max-w-screen-2xl">
    <div class="lg:flex">
      <div class="grow-1 w-full px-6 pt-6 lg:py-16 lg:pr-10 2xl:pl-20">
        <h1
          class="mb-7 text-center text-2xl font-bold text-black lg:text-left xl:mb-8 xl:text-6xl"
        >
          Locations
        </h1>
        <div
          class="relative mx-auto mb-10 w-[215px] shrink-0 grow-0 lg:mx-0 lg:mb-14"
        >
          <input
            class="focus:ring-orange bg-gray-dark w-full rounded-[10px] border-none py-[11.5px] pl-4 pr-9 text-sm leading-none transition-all focus:ring-2"
            type="text"
            placeholder="Your zip code"
          />
          <button class="text-red absolute top-1/2 right-3 -mt-2">
            <BaseIcon name="search" class="h-4 w-4" />
            <span class="sr-only">Search</span>
          </button>
        </div>
        <div
          @click="handleScreenSwitch"
          class="after:bg-red relative mx-auto mb-7 flex h-[35px] w-[158px] rounded-sm bg-[#CFCFCF] text-sm font-bold leading-normal after:absolute after:top-0 after:left-0 after:h-full after:w-1/2 after:rounded-sm after:shadow after:transition-transform after:content-[''] lg:hidden"
          :class="activeScreen === 'map' ? 'after:translate-x-full' : ''"
        >
          <button
            data-screen="list"
            aria-label="show list of locations"
            type="button"
            class="z-2 relative w-1/2 rounded-sm transition-colors"
            :class="activeScreen === 'list' ? 'text-white' : 'text-black'"
          >
            List
          </button>
          <button
            data-screen="map"
            aria-label="show locations on a map"
            type="button"
            class="z-2 relative w-1/2 rounded-sm transition-colors"
            :class="activeScreen === 'map' ? 'text-white' : 'text-black'"
          >
            Map
          </button>
        </div>
        <div
          v-show="(mobileMode && activeScreen === 'list') || !mobileMode"
          class="2xl:-ml-12"
        >
          <ul
            class="border-gray-dark mx-auto mb-12 max-w-md border-t-2 pt-7 text-sm leading-[1.85] text-black sm:max-w-2xl sm:pt-9 lg:max-w-none lg:border-none lg:pt-0"
          >
            <li
              v-for="(location, i) in locationsRef"
              :key="location.name"
              class="mb-7 last:mb-0 sm:mb-11"
            >
              <div class="flex">
                <div
                  class="relative mr-3 -mt-[5px] hidden h-[40px] w-[24px] shrink-0 items-center justify-center md:mr-[17px] md:w-[30px] lg:inline-flex"
                >
                  <span
                    class="z-1 relative pb-2 text-lg font-bold leading-none text-white"
                    >{{ i + 1 }}</span
                  >
                  <svg
                    class="absolute top-0 left-0 w-full"
                    width="30px"
                    height="40px"
                    viewBox="0 0 30 40"
                  >
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="#D50032"
                      fill-rule="evenodd"
                    >
                      <g
                        transform="translate(-103.000000, -480.000000)"
                        fill="#D50032"
                      >
                        <path
                          d="M117.663746,519.999571 C117.263632,519.81235 116.92796,519.510172 116.699746,519.131572 C112.983819,513.871502 109.239748,508.631575 105.544035,503.355862 C104.136393,501.331005 103.28425,498.972792 103.07225,496.515721 C102.448365,490.11558 105.908178,483.959296 111.776533,481.420011 C117.472389,478.952083 122.852244,479.704083 127.668672,483.652154 C129.120957,484.832653 130.325742,486.288581 131.213885,487.935938 C132.102027,489.583509 132.656384,491.389866 132.844741,493.252079 C133.323256,496.992864 132.343627,500.77422 130.108671,503.812076 C126.511315,508.878789 122.91153,513.95493 119.308674,519.039929 C119.074303,519.4565 118.718553,519.791571 118.288603,520 L117.663746,519.999571 Z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div
                  class="grow-1 border-gray-dark w-full border-b-2 pb-7 sm:pb-9"
                >
                  <div class="-mx-2 mb-4 justify-between sm:mb-2 sm:flex">
                    <div
                      class="mb-2 flex justify-between space-x-1 px-2 sm:mb-0 sm:w-1/2 sm:justify-start md:w-2/3 lg:w-1/2 xl:w-2/3"
                    >
                      <h2 class="text-lg font-bold leading-tight">
                        {{ location.name }}
                      </h2>
                      <span class="whitespace-nowrap"
                        >({{ location.distance }}&nbsp; mi)</span
                      >
                    </div>
                    <div class="px-2 sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3">
                      <address
                        v-if="location.address"
                        class="text-red font-bold not-italic"
                      >
                        {{ location.address.join(" ") }}
                      </address>
                    </div>
                  </div>
                  <dl class="-m-2 mb-5 flex flex-col sm:flex-row sm:flex-wrap">
                    <ul
                      v-if="location.phone"
                      class="p-2 sm:order-3 md:w-1/3 lg:w-1/2 xl:w-1/3"
                    >
                      <li
                        v-for="phone in location.phone"
                        :key="phone.number"
                        class="flex font-bold sm:block"
                      >
                        <span
                          v-html="phone.title ? `${phone.title}:&nbsp;` : ''"
                          class="w-[120px] shrink-0 pr-2 sm:w-auto sm:pr-0"
                        ></span>
                        <a
                          :href="`tel:${phone.number}`"
                          class="text-red hover:text-red-light transition-colors"
                          >{{ phone.number }}</a
                        >
                      </li>
                    </ul>
                    <div
                      v-for="item in location.hours"
                      :key="item.title"
                      class="flex whitespace-pre-wrap p-2 sm:block sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3"
                    >
                      <dt
                        v-html="item.title ? `${item.title}:&nbsp;` : '&nbsp;'"
                        class="w-[120px] shrink-0 pr-2 font-bold sm:w-auto"
                      ></dt>
                      <dd v-if="item.description">
                        {{ item.description }}
                        <div>
                          <a
                            v-if="item.link"
                            :href="item.link.url"
                            class="text-red hover:text-red-light font-bold transition-colors"
                            >{{ item.link.text }}</a
                          >
                        </div>
                      </dd>
                    </div>
                  </dl>
                  <div>
                    <ButtonLink
                      text="More info"
                      target="_blank"
                      url="/location-profile"
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <Pagination
            class="mb-16 justify-center lg:mb-0 lg:ml-[47px] lg:justify-start"
          />
        </div>
      </div>
      <div
        class="shrink-0 px-6 lg:h-auto lg:min-h-[600px] lg:w-[500px] lg:px-0 xl:w-[540px]"
        v-show="(mobileMode && activeScreen === 'map') || !mobileMode"
      >
        <div class="-mx-6 h-[90vw] lg:-mx-0 lg:h-full lg:w-full">
          <GoogleMap
            ref="mapRef"
            :api-key="GOOGLE_API_KEY"
            :zoom="DEFAULT_MAP_ZOOM"
            style="height: 100%; width: 100%"
            disableDefaultUi
            :clickableIcons="false"
            class="locations"
          >
            <Marker
              v-for="(location, i) in locationsRef"
              :key="location.name"
              :options="{
                position: location.coordinates,
                icon: mobileMode ? pinHeart : pin,
                label: !mobileMode
                  ? {
                      text: (i + 1).toString(),
                      className: 'marker-label'
                    }
                  : null
              }"
            >
              <InfoWindow class="w-[240px] py-8 px-2 text-center text-black">
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
                  url="/location-profile"
                  size="small"
                  text="Location details"
                /> </InfoWindow
            ></Marker>
          </GoogleMap>
        </div>
        <div v-show="mobileMode" class="mx-auto max-w-md sm:max-w-2xl">
          <div class="flex items-center px-1 pt-5 pb-6">
            <button
              @click="setCurrentLocation(currentLocationIndex - 1)"
              aria-label="Go to previous location"
              type="button"
              class="inline-flex h-7 w-7 shrink touch-manipulation select-none items-center justify-center"
              :class="
                currentLocationIndex === 0
                  ? 'pointer-events-none text-red-400'
                  : 'text-red hover:text-red-light'
              "
              :disabled="currentLocationIndex === 0"
            >
              <BaseIcon name="angleLeft" aria-hidden="true" class="h-3 w-3" />
            </button>
            <div class="flex shrink grow flex-col px-3 text-center">
              <span
                class="mb-1 select-none text-lg font-bold leading-tight text-black"
                >{{ currentLocation?.name }}</span
              >
              <address
                v-if="currentLocation?.address"
                class="text-red flex flex-col text-sm font-bold not-italic"
              >
                <span v-for="item in currentLocation?.address" :key="item">{{
                  item
                }}</span>
              </address>
              <span class="text-sm"
                >({{ currentLocation?.distance }}&nbsp; mi)</span
              >
            </div>
            <button
              @click="setCurrentLocation(currentLocationIndex + 1)"
              aria-label="Go to next location"
              type="button"
              class="inline-flex h-7 w-7 shrink touch-manipulation select-none items-center justify-center"
              :class="
                currentLocationIndex === locations.length - 1
                  ? 'pointer-events-none text-red-400'
                  : 'text-red hover:text-red-light'
              "
              :disabled="currentLocationIndex === locations.length - 1"
            >
              <BaseIcon name="angleRight" aria-hidden="true" class="h-3 w-3" />
            </button>
          </div>
          <div class="border-gray-dark border-t-2 py-7 text-sm leading-[1.85]">
            <dl class="-m-2 flex flex-col sm:flex-row sm:flex-wrap">
              <ul
                v-if="currentLocation?.phone"
                class="p-2 sm:order-3 md:w-1/3 lg:w-1/2 xl:w-1/3"
              >
                <li
                  v-for="phone in currentLocation.phone"
                  :key="phone.number"
                  class="flex font-bold sm:block"
                >
                  <span
                    v-html="phone.title ? `${phone.title}:&nbsp;` : ''"
                    class="w-[120px] shrink-0 pr-2 sm:w-auto sm:pr-0"
                  ></span>
                  <a
                    :href="`tel:${phone.number}`"
                    class="text-red hover:text-red-light transition-colors"
                    >{{ phone.number }}</a
                  >
                </li>
              </ul>
              <div
                v-for="item in currentLocation?.hours"
                :key="item.title"
                class="flex whitespace-pre-wrap p-2 sm:block sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3"
              >
                <dt
                  v-html="item.title ? `${item.title}:&nbsp;` : '&nbsp;'"
                  class="w-[120px] shrink-0 pr-2 font-bold sm:w-auto"
                ></dt>
                <dd v-if="item.description">
                  {{ item.description }}
                  <div>
                    <a
                      v-if="item.link"
                      :href="item.link.url"
                      class="text-red hover:text-red-light font-bold transition-colors"
                      >{{ item.link.text }}</a
                    >
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";
import { useWindowSize } from "vue-window-size";

import pin from "@/assets/img/pin-empty.svg";
import pinHeart from "@/assets/img/pin-heart.svg";

import Button from "./Button.vue";
import ButtonLink from "./ButtonLink.vue";
import BaseIcon from "./BaseIcon.vue";
import Pagination from "./Pagination.vue";

const { width: windowWidth, _ } = useWindowSize();

const GOOGLE_API_KEY = "AIzaSyBIKsc31TXAvusDAeRpJ8_p6TnMOsU324s";
const DEFAULT_MAP_ZOOM = 9;
const MOBILE_MAP_ZOOM = 14;

const mapRef = ref(null);

const locationsRef = ref(props.locations);
const currentLocationIndex = ref(0);
const currentLocation = ref(locationsRef[currentLocationIndex]);

const mobileMode = ref(false);
const activeScreen = ref("list");

const handleScreenSwitch = (e) => {
  e.preventDefault();

  const screenName = e.target.dataset.screen;

  if (activeScreen.value === screenName) return;

  activeScreen.value = screenName;
};

const setCurrentLocation = (index) => {
  if (index < 0 || index > props.locations.length - 1) return;
  currentLocationIndex.value = index;
  currentLocation.value = props.locations[currentLocationIndex.value];

  panToCurrentLocation();
};

const panToCurrentLocation = () => {
  if (mobileMode.value) {
    mapRef.value.map.zoom = MOBILE_MAP_ZOOM;
  } else {
    mapRef.value.map.zoom = DEFAULT_MAP_ZOOM;
  }

  // Move to current location
  mapRef.value.map.panTo(currentLocation.value.coordinates);
};

const setMobileMode = () => {
  if (window.innerWidth < 1024) {
    if (!mobileMode.value) {
      mobileMode.value = true;
    }
  } else {
    if (mobileMode.value) {
      mobileMode.value = false;
    }
  }
};

onMounted(() => {
  setMobileMode();
});

//Initial map render
watch(
  () => mapRef.value?.ready,
  (ready) => {
    if (!ready) return;

    setCurrentLocation(currentLocationIndex.value);
  }
);

watch(windowWidth, () => {
  setMobileMode();
  setCurrentLocation(currentLocationIndex.value);
});

const props = defineProps({
  locations: {
    type: Array,
    required: true
  }
});
</script>

<style>
.locations .gm-style {
  font-family: "century-gothic";
}
.locations .gm-style .gm-style-iw-c,
.locations .gm-style .gm-style-iw-d {
  padding: 0;
  border-radius: 35px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
}

.locations .gm-style .gm-style-iw-d {
  overflow: auto !important;
}

.locations .gm-style .gm-style-iw-t::after {
  box-shadow: none;
}

.locations .gm-style .gm-style-iw {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.71;
}

.locations .gm-style-iw button {
  top: 7px !important;
  right: 7px !important;
}

.locations .marker-label {
  font-weight: 700;
  color: white !important;
  font-family: inherit !important;
  font-size: 18px !important;
  line-height: 1;
  padding-bottom: 8px;
}
.locations .gm-style .gm-style-iw-tc {
  filter: none !important;
}
</style>
