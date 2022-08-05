<template>
  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-7xl px-4">
      <h2
        class="mb-10 text-center text-2xl font-bold tracking-wide md:mb-16 md:text-3xl xl:text-5xl"
      >
        {{ title }}
      </h2>

      <div
        class="grid grid-cols-1 gap-y-14 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-3"
      >
        <PostCard v-for="post in blogPosts" :key="post.title" v-bind="post" />
      </div>

      <div
        v-if="buttons"
        class="-m-3 flex flex-wrap justify-center pt-16 lg:-m-5"
      >
        <div class="p-3 lg:p-5" v-for="button in buttons" :key="button.text">
          <Button v-bind="button" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "../Button.vue";
import ButtonLink from "../ButtonLink.vue";
import PostCard from "../PostCard.vue";

const props = defineProps({
  title: String,
  blogPosts: Object,
  buttons: Array
});
</script>
