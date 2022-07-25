<template>
  <div class="py-12 px-5 md:px-10 rounded-sm sm:rounded-lg shadow bg-white text-center">
    <h3 v-if="title" class="mb-4 text-lg font-bold tracking-wider">{{title}}</h3>
    <div class="space-y-6 text-sm">
      <div
        v-for="item in contactItems"
        :key="item.title"
      >
        <h4 class="mb-2">{{item.title}}</h4>
        <a
          :class="[
            classLinkDefault,
            classLinkSize(),
          ]"
          :href="item.url"
        >
          {{item.textLink}}
        </a>
        <div v-if="item.subtext">
          <div
            v-for="row in item.subtext"
            :key="row.title"
          >
            <p class="my-1">{{row.text}}</p>
            <a
              :class="[
                classLinkDefault,
                classLinkSize(),
              ]"
              :href="row.url"
            >
              {{row.textLink}}
            </a>
          </div>
        </div>
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
  subtext: {
    type: Object
  },
  button: {
    type: Object
  },
  linkSize: {
    type: String,
    default: "normal"
  },
});

const classLinkDefault =
  "text-red hover:text-red-dark font-bold break-all";

const classLinkSize = () => ({
  "text-xl": props.linkSize === "normal",
  "text-lg": props.linkSize === "small"
});
</script>
