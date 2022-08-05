<template>
  <div
    class="mx-auto max-w-2xl rounded-lg bg-white p-10 text-center text-xs text-black shadow sm:p-20 sm:text-sm"
  >
    <h3
      v-if="title"
      class="mb-2 text-2xl font-bold"
      :class=" title.size === 'lg' && 'sm:text-4xl' "
    >
      {{ title.text }}
    </h3>
    <p>{{ text }}</p>
    <div class="mt-8 -mx-6">
      <Button
        v-if="button.type === 'button'"
        :url="button.url"
        :text="button.text"
      />
      <ButtonLink
        v-if="button.type === 'buttonLink'"
        :url="button.url"
        :text="button.text"
      />
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
import ButtonLink from "./ButtonLink.vue";

const props = defineProps({
  title: Object,
  text: String,
  button: Object
});
</script>
