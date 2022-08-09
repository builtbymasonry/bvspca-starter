<template>
  <section class="py-14 lg:py-28 lg:pt-16">
    <div class="mx-auto max-w-5xl px-4">
      <FormSearch class="mb-12" placeholder="Hello, is it me you’re looking for?"/>
      <h2 class="mb-3 text-2xl font-bold md:text-3xl xl:text-4xl">
        Showing results for: Lorem Ipsum
      </h2>

      <div
        v-for="item in searchList"
        :key="item.title"
        class="py-6 border-b-2 border-gray-dark"
      >
        <strong class="block mb-1 lg:mb-2 text-xs font-bold text-gray-light">{{item.category}}</strong>
        <h3 class="text-lg lg:text-xl font-bold"><a class="hover:text-orange transition-colors" :href="item.url">{{item.title}}</a></h3>
      </div>
    </div>
  </section>
</template>

<script setup>
import FormSearch from '@/components/FormSearch.vue'

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
]
</script>
