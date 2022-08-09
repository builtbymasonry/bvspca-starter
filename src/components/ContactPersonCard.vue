<template>
  <div
    class="flex flex-col overflow-hidden rounded-sm bg-white shadow sm:rounded-lg lg:flex-row"
  >
    <div class="relative h-64 w-full flex-shrink-0 lg:h-auto lg:w-1/3">
      <img
        class="absolute h-full w-full object-cover object-top"
        v-bind="img"
      />
    </div>
    <div class="w-full py-8 px-10 text-sm lg:py-10 lg:px-14">
      <h2 v-if="name" class="text-2xl font-bold">
        {{ name }}
      </h2>
      <h3 v-if="position" class="text-gray-light mb-1 font-bold">
        {{ position }}
      </h3>
      <ul v-if="links" class="leading-tight">
        <li v-for="(item, i) in links" :key="i" class="mb-2 last:mb-0">
          <a
            class="text-red hover:text-red-dark inline-flex items-center font-bold transition-colors"
            :href="`${item.type ? item.type + ':' : ''}${item.url}`"
          >
            <BaseIcon
              :name="
                (item.type === 'mailto' && 'envelope') ||
                (item.type === 'tel' && 'phone')
              "
              class="mr-2 h-3 w-3"
            />
            {{ item.url }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import BaseIcon from "@/components/BaseIcon.vue";

const props = defineProps({
  name: String,
  position: String,
  img: Object,
  links: Object
});
</script>
