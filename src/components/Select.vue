<template>
  <div class="w-full">
    <label v-if="inputLabel" class="select-none text-sm">{{
      inputLabel
    }}</label>
    <Listbox v-model="selectedOption">
      <div class="relative mt-1 text-sm">
        <ListboxButton v-slot="{ open }" class="w-full">
          <div
            class="bg-gray relative mt-1 block w-full cursor-pointer border-none py-3 pl-4 pr-5 text-left text-sm leading-[1.215] focus:outline-none"
            :class="open ? ' rounded-t-[10px]' : ' rounded-[10px]'"
          >
            <span class="block truncate">{{ label }}</span>

            <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
            >
              <ChevronDownIcon
                class="text-gray-light h-[15px]"
                aria-hidden="true"
              />
            </span>
          </div>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute z-20 max-h-60 w-full overflow-auto rounded-b-[10px]"
          >
            <ListboxOption
              v-slot="{ selected }"
              v-for="option in props.options"
              :key="option.label"
              :value="option.value"
              as="template"
            >
              <span
                :class="[selected ? 'bg-gray-200' : '']"
                class="bg-gray block cursor-pointer truncate py-3 px-4 font-bold transition-colors hover:bg-gray-200"
                >{{ option.label }}</span
              >
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption
} from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/outline";

const props = defineProps({
  options: Array,
  inputLabel: [String, Number]
});
const label = computed(() => {
  return props.options.find((option) => option.value === selectedOption.value)
    ?.label;
});
// const selectedOption = ref(props.options[0].value);
const selectedOption = ref(
  props.options.find((option) => option.selected === true)?.value ||
    props.options[0].value
);
</script>
