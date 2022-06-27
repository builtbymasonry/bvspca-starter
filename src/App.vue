<script setup>
import { ref } from "vue";
import Header from "./components/ExampleHeader.vue";
import Hero from "./components/Hero.vue";
import heroImg01 from "@/assets/img/logo01.png";

let counter = ref(0);

console.log(heroImg01);
</script>

<template>
  <Header />
  <div>
    <header class="bg-white shadow" v-if="$route.meta.title">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1
          @click="counter = 0"
          class="text-3xl font-bold leading-tight text-gray-900"
        >
          {{ $route.meta.title }}
        </h1>
      </div>
    </header>
    <Hero :imgSrc="heroImg01" />
    <main>
      <router-view />
    </main>
  </div>
</template>
