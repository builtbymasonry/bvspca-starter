<template>
  <section class="py-14 lg:py-28">
    <div
      class="mx-auto max-w-7xl px-4 lg:flex"
      :class="reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'"
    >
      <div
        class="mx-auto mb-10 max-w-sm flex-shrink-0 relative overflow-hidden rounded-sm md:max-w-md md:rounded-md lg:mb-0 lg:w-2/5 lg:max-w-full shadow"
        :class="reverse ? 'lg:ml-14 xl:ml-20' : 'lg:mr-14 xl:mr-20'"
      >
        <img class="w-full lg:h-full lg:absolute lg:object-cover" :src="imgSrc" :alt="imgAlt" />
      </div>
      <div class="pt-2 text-center text-sm sm:text-base sm:text-left">
        <h3 class="mb-2 text-2xl font-bold sm:text-4xl">{{ title }}</h3>
        <h4 class="mb-2 text-2xl font-bold sm:text-2xl">{{ subtitle }}</h4>
        <p class="mb-10 sm:mb-8">{{ text }}</p>
        <div class="grid gap-10 sm:gap-8 sm:grid-cols-2">
          <div v-for="item in textGrid" :key="item.title">
            <h4 class="mb-2 text-xl font-bold">{{ item.title }}</h4>
            <p class="text-xs">{{ item.text }}</p>
            <ButtonLink v-if="buttonLink" class="mt-4 sm:mt-5" text="Learn more" />
          </div>
        </div>
        <div
          v-if="buttons"
          class="mt-14 flex flex-row lg:flex-col flex-wrap items-start justify-center lg:justify-start xl:flex-row space-y-10 sm:space-y-0 lg:space-y-8 xl:space-y-0 sm:space-x-5 lg:space-x-0 xl:space-x-8"
          :class="reverse ? 'xl:-mr-12' : ''"
        >
          <Button
            v-for="button in buttons"
            :key="button.text"
            :variant="button.variant"
            :text="button.text"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "@/components/Button.vue";
import ButtonLink from "@/components/ButtonLink.vue";

const props = defineProps({
  title: String,
  subtitle: String,
  text: String,
  textGrid: Array,
  buttons: Array,
  buttonLink: {
    type: Boolean,
    default: false
  },
  reverse: {
    type: Boolean,
    default: false
  },
  imgSrc: {
    type: String,
    default: "#",
  },
  imgAlt: {
    type: String,
    default: "",
  },
});
</script>
