<template>
  <div class="relative overflow-hidden">
    <img
      class="relative top-0 left-0 w-full object-cover md:absolute md:h-full"
      :src="imgSrc"
      :alt="imgDescr"
    />

    <div class="md:max-w-lg xl:max-w-xl md:mx-10 md:my-12 xl:mx-20 xl:my-24 px-5 py-8 pb-14 md:px-12 md:py-12 xl:px-20 xl:py-16 relative md:rounded-lg md:bg-gradient-radial from-white to-white/30 text-center md:text-left">
        <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold mb-3">Putting the human back in humane</h1>
        <p class="text-base lg:text-2lg leading-normal">We strive to end animal suffering and empower communities to find the heart in humanity</p>
        <div class="mt-7 md:mx-0 xl:mt-12 flex flex-wrap justify-center md:justify-start">
          <Button class="mr-4 md:mr-5 lg:mr-10" variant="primary" text="Save a life"/>
          <Button class="ml-4 md:ml-0" variant="outline" text="Learn more"/>
        </div>
      </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  props: {
    imgSrc: {
      type: String,
      default: "#"
    },
    imgDescr: {
      type: String,
      default: "Image Description"
    }
  },
  components: { Button }
};
</script>
