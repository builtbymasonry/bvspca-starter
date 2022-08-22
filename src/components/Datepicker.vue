<template>
  <label class="block">
    <span v-if="label" class="select-none text-sm">{{ label }}</span>
    <div class="dp flex">
      <Datepicker
        v-model="model"
        :enableTimePicker="false"
        :placeholder="placeholder"
        hideInputIcon
        :clearable="false"
      />
      <div class="ml-4 self-center">
        <BaseIcon name="datepicker" class="w-5 h-5 text-red" />
      </div>
    </div>
  </label>
</template>
<script setup>
import { ref } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import BaseIcon from "./BaseIcon.vue";

const model = ref();

const props = defineProps({
  label: {
    type: String,
    default: null
  },
  placeholder: {
    type: String,
    default: null
  }
});
</script>

<style>
.dp .dp__input {
  font-family: inherit;
  background-color: rgb(239 239 239 / var(--tw-bg-opacity));
  border-radius: 10px;
  font-size: 0.875rem;
  line-height: 1;
  color: #acadae;
  padding: 0.75rem 1rem;
  margin-top: 0.25rem;
  border: none;
}
.dp__select {
  @apply text-red;
}
.dp__range_end,
.dp__range_start,
.dp__active_date {
  @apply bg-red;
}
.dp__today {
  @apply border-red;
}
</style>
