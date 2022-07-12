<template>
  <div class="relative overflow-hidden">
    <img
      class="relative top-0 left-0 w-full object-cover md:absolute md:h-full"
      :src="imgSrc"
      :alt="imgDescr"
    />

    <div
      class="md:bg-gradient-radial relative from-white to-white/30 px-5 py-8 pb-14 text-center md:mx-10 md:my-12 md:max-w-lg md:rounded-lg md:px-12 md:py-12 md:text-left xl:mx-20 xl:my-24 xl:max-w-xl xl:px-20 xl:py-16"
    >
      <h1 class="mb-3 text-4xl font-bold md:text-5xl lg:text-7xl">
        Putting the human back in humane
      </h1>
      <p class="lg:text-2lg text-base leading-normal">
        We strive to end animal suffering and empower communities to find the
        heart in humanity
      </p>
      <div
        class="mt-7 flex flex-wrap justify-center md:mx-0 md:justify-start xl:mt-12"
      >
        <Button
          class="mr-4 md:mr-5 lg:mr-10"
          variant="primary"
          text="Save a life"
        />
        <Button class="ml-4 md:ml-0" variant="outline" text="Learn more" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";

const props = defineProps({
  imgSrc: {
    type: String,
    default: "#"
  },
  imgDescr: {
    type: String,
    default: "Image Description"
  }
});
</script>
