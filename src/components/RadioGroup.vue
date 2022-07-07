<template>
  <RadioGroup v-model="model">
    <RadioGroupLabel
      v-if="label"
      class="mb-2 inline-block text-sm text-black"
      >{{ label }}</RadioGroupLabel
    >

    <div
      class="-mx-[12px] -my-[5px] flex flex-wrap"
      :class="column ? 'flex-col items-start' : ''"
    >
      <RadioGroupOption
        v-for="option in options"
        :key="option.label"
        :value="option.value"
        class="flex-c inline-flex items-start px-[12px] py-[5px]"
        v-slot="{ checked }"
      >
        <span
          class="bg-gray relative mr-[10px] h-[20px] w-[20px] rounded-[4px] focus:outline-none"
        >
          <span
            :class="checked ? 'visible' : 'hidden'"
            class="border-red -mt-1/2 absolute top-[1px] left-[6px] h-[13px] w-[8px] rotate-45 border-b-[3px] border-r-[3px]"
          />
        </span>
        <span class="select-none self-center text-sm leading-tight text-black">
          {{ option.label }}
        </span>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script setup>
import { ref } from "vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";

const model = ref(null);

const props = defineProps({
  label: {
    type: String,
    default: null
  },
  options: {
    type: Array,
    required: true
  },
  column: Boolean
});
</script>
