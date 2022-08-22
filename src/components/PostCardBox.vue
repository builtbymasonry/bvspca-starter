<template>
  <div
    class="flex flex-col overflow-hidden rounded-lg bg-white shadow"
    :class="center && 'text-center'"
  >
    <a class="overflow-hidden block shrink-0" :href="url">
      <img class="w-full transition-all hover:scale-[102%]" v-bind="img" />
    </a>
    <div class="p-8 xl:p-10 flex flex-col h-full">
      <h3 class="mb-2 text-xl font-bold sm:text-2xl">{{ title }}</h3>
      <div v-if="text" class="text-xs">
        <p v-for="string in text" :key="string" class="mb-6 last-of-type:mb-0">
          {{ string }}
        </p>
      </div>
      <div
        v-if="buttons"
        class="pt-8 lg:pb-5 mt-auto flex flex-col lg:flex-row flex-wrap items-center space-y-8 lg:space-y-0 lg:space-x-10 xl:space-x-12"
        :class="center && 'justify-center'"
      >
        <div v-for="button in buttons" :key="button.text">
          <Button
            v-if="button.type === 'button'"
            :url="button.url"
            :text="button.text"
          />
          <ButtonLink
            v-if="button.type === 'buttonLink'"
            :url="button.url"
            :text="button.text"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
import ButtonLink from "./ButtonLink.vue";
import Socials from "./Socials.vue";

const props = defineProps({
  url: {
    type: String,
    required: true,
    default: ""
  },
  img: Object,
  title: String,
  text: Array,
  buttons: Array,
  center: {
    type: Boolean,
    default: false
  }
});
</script>
