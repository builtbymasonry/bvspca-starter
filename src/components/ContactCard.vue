<template>
  <div
    class="rounded-sm bg-white py-12 px-5 text-center shadow sm:rounded-lg md:px-10"
  >
    <h3 v-if="title" class="mb-4 text-lg font-bold tracking-wider">
      {{ title }}
    </h3>
    <div class="-mt-2 text-sm">
      <div v-for="(item, i) in contactItems" :key="i">
        <h4 v-if="item.title" class="my-2">{{ item.title }}</h4>
        <a
          v-if="item.link"
          :class="[
            classLinkDefault,
            item.link.textSize ? `text-${item.link.textSize}` : 'text-xl'
          ]"
          :href="`${item.link.type ? item.link.type + ':' : ''}${
            item.link.url
          }`"
        >
          {{ item.link.url }}
        </a>
      </div>
    </div>
    <Button v-if="button" v-bind="button" class="mt-11" />
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue";

const classLinkDefault =
  "text-red hover:text-red-dark leading-tight font-bold break-all";

const props = defineProps({
  title: String,
  contactItems: {
    type: Object
  },
  button: {
    type: Object
  }
});
</script>
