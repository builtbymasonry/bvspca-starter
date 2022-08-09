<template>
  <div class="flex flex-col sm:flex-row items-center justify-between space-y-5 sm:space-y-0">
    <ButtonLink text="Previous post" url="#" reverse />
    <ButtonLink text="Back to all" url="#" icon="grid" iconStyle="!w-5 !h-5" reverse />
    <ButtonLink text="Next post" url="#" />
  </div>
</template>

<script setup>
import ButtonLink from './ButtonLink.vue';
</script>
