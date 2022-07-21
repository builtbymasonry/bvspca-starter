<template>
  <div class="py-12 px-5 md:px-10 rounded-sm sm:rounded-lg shadow bg-white text-center">
    <h3 class="mb-4 text-lg font-bold tracking-wider">{{title}}</h3>
    <div class="space-y-6 text-sm">
      <div
        v-for="item in contactItems"
        :key="item.title"
      >
        <h4 class="mb-2">{{item.title}}</h4>
        <a
          class="text-red hover:text-red-dark text-xl font-bold"
          :href="item.url"
        >
          {{item.textLink}}
        </a>
      </div>
    </div>
    <Button
      class="mt-11"
      v-if="button"
      v-bind="button"
    />
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue";

const props = defineProps({
  title: String,
  contactItems: {
    type: Object
  },
  button: {
    type: Object
  },
});
</script>
