<template>
  <section class="py-14 lg:py-24 bg-gray-dark">
    <div class="mx-auto max-w-5xl px-4">
      <Post v-bind="post" />
      <PostNav class="mt-14" />
    </div>
  </section>
</template>

<script setup>
import Post from '@/components/Post.vue'
import PostNav from '@/components/PostNav.vue'

const post = {
  title: "News/Event/Resource entry title goes here. Try to keep it short.",
  list: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
    "Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti.",
    "Pellentesque eu orci nisi. Pellentesque finibus lorem dignissim bibendum pretium.",
    "Maecenas efficitur varius feugiat. Vestibulum eu mi ac diam mollis euismod.",
    "Etiam pharetra dui sit amet tempus scelerisque. Vivamus et dolor tellus.",
    "Donec vulputate, justo vitae lobortis tempus, metu."
  ],
  author: {
    img: { src: "src/assets/img/img-author-01.jpg", alt: "" },
    name: "Linda Torelli",
    position: "Chief Marketing Officer"
  },
  buttonLink: { text: "Back to all ", url: "#!", reverse: true }
}
</script>
