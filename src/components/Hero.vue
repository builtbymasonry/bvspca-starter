<template>
  <div class="relative overflow-hidden">
    <img class="relative md:absolute top-0 left-0 object-cover w-full h-full" :src="imgSrc" :alt="imgDescr" />

    <div class="md:max-w-xl md:mx-10 md:my-12 xl:mx-20 xl:my-24 px-10 py-10 xl:px-20 xl:py-16 relative rounded-lg bg-gradient-radial from-white to-whiteTransparent-300">
        <h1 class="text-4xl lg:text-6xl font-bold leading-tight mb-4">Putting the human back in humane</h1>
        <p class="text-md lg:text-xl">We strive to end animal suffering and empower communities to find the heart in humanity</p>
        <div class="mt-8 flex flex-wrap">
          <Button class="mr-3 mb-3" variant="primary" text="Primary"/>
          <Button class="mr-3 mb-3" variant="secondary" arrow="true" text="Secondary"/>
          <Button class="mr-3 mb-3" variant="outline" text="Outline"/>
          <ButtonLink class="mb-3" text="Button link"/>
        </div>
      </div>

  </div>
</template>

<script>
import Button from './Button.vue';
import ButtonLink from './ButtonLink.vue';
  export default {
    props: {
        imgSrc: {
            type: String,
            default: "#"
        },
        imgDescr: {
          type: String,
          default: 'Image Description'
        }
    },
    components: { Button, ButtonLink }
};
</script>
