<template>
  <section class="py-14 lg:py-28 lg:pt-16">
    <div class="mx-auto max-w-5xl px-4">
      <FormSearch
        class="mb-12"
        placeholder="Hello, is it me you’re looking for?"
      />
      <h2 class="mb-3 text-2xl font-bold md:text-3xl xl:text-4xl">
        Showing results for: Lorem Ipsum
      </h2>

      <ul>
        <li
          v-for="item in searchList"
          :key="item.title"
          class="border-gray-dark border-b py-6"
        >
          <strong
            class="text-gray-light mb-1 block text-xs font-bold lg:mb-2"
            >{{ item.category }}</strong
          >
          <h3 class="text-lg font-bold lg:text-xl">
            <a class="hover:text-orange transition-colors" :href="item.url">{{
              item.title
            }}</a>
          </h3>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import FormSearch from "@/components/FormSearch.vue";

const searchList = [
  {
    url: "#",
    category: "Article",
    title: "Lorem Ipsum Dolor Sit Amet Consectetur"
  },
  {
    url: "#",
    category: "Whitepaper",
    title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing"
  },
  {
    url: "#",
    category: "Video",
    title: "Lorem Ipsum Dolor Sit Amet"
  },
  {
    url: "#",
    category: "Article",
    title: "Lorem Ipsum Amet Consectetur Adipiscing"
  },
  {
    url: "#",
    category: "Article",
    title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing"
  },
  {
    url: "#",
    category: "Event",
    title: "Lorem Ipsum"
  },
  {
    url: "#",
    category: "Article",
    title: "Lorem Ipsum Dolor Sit Amet"
  }
];
</script>
