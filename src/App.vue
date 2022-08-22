<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <div class="overflow-x-hidden">
    <main>
      <router-view />
    </main>
  </div>
  <Footer />
</template>
