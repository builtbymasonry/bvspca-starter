<template>
  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-7xl px-4">
      <h2 class="mb-10 text-center text-2xl font-bold tracking-wide md:mb-16 md:text-3xl xl:text-5xl">
        {{ title}}
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8 gap-y-14 sm:gap-y-16">
        <PostCard
          v-for="post in blogPosts"
          :key="post.title"
          v-bind="post"
        />
      </div>

      <div
        v-if="buttons"
        class="mt-16 flex flex-wrap justify-center space-x-5 lg:space-x-10"
      >
        <Button
          v-for="button in buttons"
          :key="button.text"
          v-bind="button"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "./Button.vue";
import ButtonLink from "./ButtonLink.vue";
import PostCard from "./PostCard.vue";

const props = defineProps({
  title: String,
  blogPosts: Object,
  buttons: Array
});
</script>
