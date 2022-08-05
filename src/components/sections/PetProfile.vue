<template>
  <section
    class="mx-auto grid max-w-[1440px] grid-cols-1 text-center md:grid-cols-2 md:text-left"
  >
    <div
      class="order-2 ml-auto mt-7 w-full px-4 py-14 md:order-1 md:mt-0 md:max-w-xl xl:px-0"
    >
      <div class="hidden md:block">
        <ButtonLink class="mb-8 lg:mb-12" text="Back to all dogs" reverse />
      </div>
      <ProfileDetails v-bind="data.info" />
    </div>
    <div class="order-1 flex-col md:order-2 md:flex">
      <div class="px-4 py-10 md:hidden">
        <ButtonLink class="mb-8 lg:mb-12" text="Back to all dogs" reverse />
        <h2 class="text-2xl font-bold md:text-3xl xl:text-5xl">
          {{ data?.info?.name }}
        </h2>
      </div>
      <SliderThumbs :slides="data.slides" />
    </div>
  </section>
</template>
<script setup>
import SliderThumbs from "../SliderThumbs.vue";
import ProfileDetails from "../ProfileDetails.vue";
import ButtonLink from "../ButtonLink.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});
</script>
