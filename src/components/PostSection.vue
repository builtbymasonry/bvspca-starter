<template>
  <section class="py-14 lg:py-28">
    <div
      class="mx-auto max-w-7xl px-4 lg:flex"
      :class="reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'"
    >
      <div
        class="relative mb-10 lg:mb-0 mx-auto flex-shrink-0 overflow-hidden rounded-sm md:rounded-md shadow sm:w-1/2 lg:w-2/5"
        :class="reverse ? 'lg:ml-14 xl:ml-20' : 'lg:mr-14 xl:mr-20'"
      >
        <img
          class="w-full lg:absolute lg:h-full lg:object-cover"
          v-bind="img"
        />
      </div>
      <div class="py-2 text-center sm:text-left">
        <div class="mb-10 sm:mb-8">
          <h3 v-if="title" class="text-2xl sm:text-4xl font-bold">{{ title }}</h3>
          <h4 v-if="subtitle" class="mt-2 text-2xl font-bold">{{ subtitle }}</h4>
          <p v-if="text" class="mt-2 text-sm sm:text-base">{{ text }}</p>
        </div>
        <div v-if="textList" class="text-xs">
          <p v-for="paragraph in textList" :key="paragraph.text" class="mt-6 first:-mt-5">{{paragraph.text}}</p>
          <ul class="mt-2 list-disc space-y-2 pl-5 marker:text-xs text-left">
            <li v-for="item in list" :key="item.text" class="pl-2">{{item.text}}</li>
          </ul>
        </div>
        <div v-if="textGrid" class="grid gap-10 sm:grid-cols-2 sm:gap-8 text-xs">
          <div v-for="item in textGrid" :key="item.title">
            <h4 class="mb-2 text-xl font-bold">{{ item.title }}</h4>
            <p>{{ item.text }}</p>
            <ButtonLink
              v-if="item.button"
              v-bind="item.button"
              target="_blank"
              class="mt-4 sm:mt-5"
            />
          </div>
        </div>
        <div
          v-if="buttons"
          class="mt-14 xl:-mr-12 flex flex-wrap flex-col sm:flex-row lg:flex-col xl:flex-row items-center sm:items-start justify-center lg:justify-start space-y-10 sm:space-y-0 lg:space-y-8 xl:space-y-0 sm:space-x-5 lg:space-x-0 xl:space-x-8"
        >
          <Button
            v-for="button in buttons"
            :key="button.text"
            v-bind="button"
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
  titleAlt: String,
  subtitle: String,
  text: String,
  textList: Array,
  textGrid: Array,
  buttons: Array,
  list: Array,
  reverse: {
    type: Boolean,
    default: false
  },
  img: Object
});
</script>
