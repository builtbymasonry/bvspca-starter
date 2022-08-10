<template>
  <section class="bg-gray-dark py-14 px-4 lg:py-24">
    <div class="mx-auto max-w-[946px]">
      <Post v-bind="post" />
      <PostNav class="mt-12 sm:mt-14" />
    </div>
  </section>
</template>

<script setup>
import Post from "@/components/Post.vue";
import PostNav from "@/components/PostNav.vue";

const post = {
  timestamp: "2020-02-15",
  title: "News/Event/Resource entry title goes here. Try to keep it short.",
  content: `<p class="mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
      dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu.
      Suspendisse potenti. Pellentesque eu orci nisi. Pellentesque finibus lorem
      dignissim bibendum pretium. Maecenas efficitur varius feugiat. Vestibulum
      eu mi ac diam mollis euismod. Etiam pharetra dui sit amet tempus
      scelerisque. Vivamus et dolor tellus. Donec vulputate, justo vitae
      lobortis tempus, metu.
    </p>
    <p class="mb-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
      dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu.
    </p>
    <ul class="mb-6 list-disc pl-5 marker:text-xs sm:pl-6">
      <li class="pl-1 xsm:pl-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
        dapibus nisl.
      </li>
      <li class="pl-1 xsm:pl-2">
        Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse
        potenti.
      </li>
      <li class="pl-1 xsm:pl-2">
        Pellentesque eu orci nisi. Pellentesque finibus lorem dignissim bibendum
        pretium.
      </li>
      <li class="pl-1 xsm:pl-2">
        Maecenas efficitur varius feugiat. Vestibulum eu mi ac diam mollis
        euismod.
      </li>
      <li class="pl-1 xsm:pl-2">
        Etiam pharetra dui sit amet tempus scelerisque. Vivamus et dolor tellus.
      </li>
      <li class="pl-1 xsm:pl-2">Donec vulputate, justo vitae lobortis tempus, metu.</li>
    </ul>
    <div class="my-8 sm:my-12">
      <img
        class="w-full rounded-sm lg:rounded-lg shadow"
        src="src/assets/img/content-img-33.jpg"
        alt="image description"
      />
    </div>
    <p class="mb-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
      dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu.
      Suspendisse potenti. Pellentesque eu orci nisi. Pellentesque finibus lorem
      dignissim bibendum pretium. Maecenas efficitur varius feugiat. Vestibulum
      eu mi ac diam mollis euismod. Etiam pharetra dui sit amet tempus
      scelerisque. Vivamus et dolor tellus. Donec vulputate, justo vitae
      lobortis tempus, metu.
    </p>
    <h2 class="mb-2 text-lg font-bold">Lorem ipsum dolor</h2>
    <p class="mb-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
      dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu.
      Suspendisse potenti. Pellentesque eu orci nisi. Pellentesque finibus lorem
      dignissim bibendum pretium. Maecenas efficitur varius feugiat. Vestibulum
      eu mi ac diam mollis euismod. Etiam pharetra dui sit amet tempus
      scelerisque. Vivamus et dolor tellus. Donec vulputate, justo vitae
      lobortis tempus, metu.
    </p>
    <h2 class="mb-2 text-lg font-bold">Lorem ipsum dolor</h2>
    <p class="mb-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
      dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu.
      Suspendisse potenti. Pellentesque eu orci nisi. Pellentesque finibus lorem
      dignissim bibendum pretium. Maecenas efficitur varius feugiat. Vestibulum
      eu mi ac diam mollis euismod. Etiam pharetra dui sit amet tempus
      scelerisque. Vivamus et dolor tellus. Donec vulputate, justo vitae
      lobortis tempus, metu.
    </p>
    <h2 class="mb-2 text-lg font-bold">Lorem ipsum dolor</h2>
    <p class="mb-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
      dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu.
      Suspendisse potenti. Pellentesque eu orci nisi. Pellentesque finibus lorem
      dignissim bibendum pretium. Maecenas efficitur varius feugiat. Vestibulum
      eu mi ac diam mollis euismod. Etiam pharetra dui sit amet tempus
      scelerisque. Vivamus et dolor tellus. Donec vulputate, justo vitae
      lobortis tempus, metu.
    </p>`,
  author: {
    img: { src: "src/assets/img/img-author-01.jpg", alt: "Linda Torelli" },
    name: "Linda Torelli",
    position: "Chief Marketing Officer"
  }
};
</script>
