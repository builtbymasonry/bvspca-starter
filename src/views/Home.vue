<template>
  <Hero :imgSrc="heroImg" imgDescr="Hero Image" />
  <Stats />
  <Cards />
</template>

<script setup>
  import Hero from "@/components/Hero.vue";
  import heroImg from "@/assets/img/hero-image-01.jpg";
  import Stats from "@/components/ExampleStats.vue";
  import Cards from "@/components/Cards.vue";
</script>
