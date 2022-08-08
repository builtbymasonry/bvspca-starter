<template>
  <div class="overflow-hidden rounded-sm lg:rounded-lg shadow bg-white">
    <div class="w-full h-44">
      <GoogleMap
        :api-key="GOOGLE_API_KEY"
        style="height: 100%; width: 100%"
        :zoom="zoomIndex || 9"
        :center="location"
        disableDefaultUi
      >
        <Marker :options="{ position: location, icon: pin }"></Marker>
      </GoogleMap>
    </div>

    <div class="p-8 pb-12 text-sm text-center">
      <h3 v-if="title" class="text-xl font-bold">{{ title }}</h3>
      <address v-if="address" class="mb-8 not-italic whitespace-pre-line">{{ address }}</address>
      <Button v-if="button" v-bind="button" />
    </div>
  </div>
</template>

<script setup>
import { GoogleMap, Marker } from "vue3-google-map"
import pin from "@/assets/img/pin-heart.svg"
import Button from "@/components/Button.vue"

const GOOGLE_API_KEY = "AIzaSyBIKsc31TXAvusDAeRpJ8_p6TnMOsU324s";

const props = defineProps({
  title: String,
  address: String,
  button: Object,
  location: {
    type: Object,
    required: true
  },
  zoomIndex: Number
});
</script>
