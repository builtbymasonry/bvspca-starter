<template>
  <div>
    <div v-if="variant === 'default'" class="w-full text-black">
      <!-- default style -->
      <label v-if="inputLabel" class="mb-2 block select-none text-sm">{{
        inputLabel
      }}</label>
      <Listbox v-model="selectedOption">
        <div class="text-none relative">
          <ListboxButton
            v-slot="{ open }"
            class="focus:ring-orange w-full focus:rounded-[10px] focus:outline-none focus:ring-1 focus-visible:ring-1"
          >
            <div
              class="bg-gray relative block w-full min-w-0 cursor-pointer border-none py-3 pl-4 pr-5 text-left text-sm leading-[1.215]"
              :class="[
                open ? 'rounded-t-[10px]' : 'rounded-[10px]',
                {
                  'min-w-[120px]': props.size === 'md',
                  'min-w-[80px]': props.size === 'sm',
                  'min-w-0': props.size === 'xs'
                }
              ]"
            >
              <span class="block truncate">{{ label }}</span>

              <span
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4"
              >
                <BaseIcon
                  name="chevronDown"
                  class="text-gray-light h-[10px] w-[10px]"
                />
              </span>
            </div>
          </ListboxButton>
          <ListboxOptions
            class="absolute z-20 max-h-60 w-full overflow-auto rounded-b-[10px] text-sm focus:outline-none"
          >
            <ListboxOption
              v-slot="{ selected, disabled, active }"
              v-for="option in props.options"
              :key="option.label"
              :value="option.value"
              :disabled="option.disabled"
              as="template"
            >
              <span
                :class="[
                  selected ? 'bg-gray-200' : '',
                  disabled ? 'hidden' : '',
                  active ? 'bg-gray-200' : ''
                ]"
                class="bg-gray block cursor-pointer truncate py-3 px-4 font-bold transition-colors hover:bg-gray-200"
                >{{ option.label }}</span
              >
            </ListboxOption>
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
    <div v-if="variant === 'outline'" class="w-full text-black">
      <!-- outline variant -->
      <label v-if="inputLabel" class="mb-2 block select-none text-sm">{{
        inputLabel
      }}</label>
      <Listbox v-model="selectedOption">
        <div class="text-none relative">
          <ListboxButton v-slot="{ open }" class="w-full focus:outline-none">
            <div
              class="relative block w-full min-w-0 cursor-pointer border-2 border-black bg-white py-1 pl-4 pr-6 text-left text-sm font-bold leading-[1.643] focus:outline-none"
              :class="[
                open
                  ? 'rounded-t-[17px] border-b-transparent'
                  : 'rounded-[17px]',
                {
                  'min-w-[120px]': props.size === 'md',
                  'min-w-[80px]': props.size === 'sm'
                }
              ]"
            >
              <span class="block truncate">{{ label }}</span>

              <span
                class="pointer-events-none absolute inset-y-0 right-3 flex items-center"
              >
                <BaseIcon name="angleDown" class="h-[10px] w-[10px]" />
              </span>
            </div>
          </ListboxButton>
          <ListboxOptions
            class="absolute z-20 max-h-60 w-full overflow-auto rounded-b-[17px] border-2 border-t-0 border-black text-sm focus:outline-none"
          >
            <ListboxOption
              v-slot="{ selected, disabled, active }"
              v-for="option in props.options"
              :key="option.label"
              :value="option.value"
              :disabled="option.disabled"
              as="template"
            >
              <span
                :class="[
                  selected ? 'font-bold' : 'font-normal',
                  disabled ? 'hidden' : '',
                  active ? 'text-red' : ''
                ]"
                class="hover:text-red block cursor-pointer truncate bg-white py-1 px-4 transition-colors"
                >{{ option.label }}</span
              >
            </ListboxOption>
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption
} from "@headlessui/vue";
import BaseIcon from "@/components/BaseIcon.vue";

const props = defineProps({
  options: Array,
  size: {
    type: String,
    default: "md"
  },
  variant: {
    type: String,
    default: "default"
  },
  inputLabel: [String, Number]
});

const label = computed(() => {
  return props.options.find((option) => option.value === selectedOption.value)
    ?.label;
});

const selectedOption = ref(
  props.options.find((option) => option.selected === true)?.value ||
    props.options[0].value
);
</script>
