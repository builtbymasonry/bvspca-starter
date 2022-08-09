<template>
  <div>
    <div class="hidden items-center justify-between sm:flex">
      <ButtonLink text="Previous post" url="#" reverse />
      <ButtonLink
        text="Back to all"
        url="#"
        icon="grid"
        iconClass="!w-5 !h-5"
        reverse
      />
      <ButtonLink text="Next post" url="#" />
    </div>
    <div class="flex items-center justify-between sm:hidden">
      <ButtonLink text="Prev" url="#" reverse />
      <ButtonLink
        text="All"
        url="#"
        icon="grid"
        iconClass="!w-5 !h-5"
        reverse
      />
      <ButtonLink text="Next" url="#" />
    </div>
  </div>
</template>

<script setup>
import ButtonLink from "./ButtonLink.vue";
</script>
