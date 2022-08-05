<template>
  <div>
    <h2 class="mb-8 hidden text-2xl font-bold md:block md:text-3xl xl:text-5xl">
      {{ name }}
    </h2>
    <dl class="mb-10 space-y-2 md:mb-12 lg:space-y-3">
      <div
        v-for="row in details"
        :key="row.title"
        class="flex text-left text-xs lg:text-base xl:text-lg"
      >
        <dt
          class="mr-5 w-[125px] flex-shrink-0 pr-2 font-bold md:mr-2 lg:w-1/3"
        >
          {{ row.title }}
        </dt>
        <dd>{{ row.value }}</dd>
      </div>
    </dl>
    <div v-if="buttons">
      <h3 class="mb-8 text-lg font-bold">Ready to complete your family?</h3>
      <div
        class="-m-2.5 flex flex-wrap justify-center md:justify-start lg:-m-5"
      >
        <Button
          v-if="buttons.contact"
          text="Contact us"
          :url="buttons.contact.url"
          class="m-2.5 lg:m-5"
        />
        <Button
          v-if="buttons.location"
          text="Location info"
          variant="outline"
          :url="buttons.location.url"
          class="m-2.5 lg:m-5"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import Button from "./Button.vue";
const props = defineProps({
  name: String,
  details: Array,
  buttons: Object
});
</script>
