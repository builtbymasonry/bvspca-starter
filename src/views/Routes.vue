<template>
  <div class="mx-auto max-w-4xl py-10">
    <ul>
      <li v-for="route in routes" :key="route">
        <a :href="route" class="hover:text-red visited:text-purple-500">{{
          route
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const routes = [
  "/",
  "/donate-modal",
  "/volunteer-modal",
  "/appointment-modal",
  "/for-your-pet",
  "/wellness-clinic",
  "/clinic-staff",
  "/spay-neuter",
  "/community-cats"
];
</script>
