<template>
  <!-- default style -->
  <div v-if="variant === 'default'" class="w-full text-black">
    <label v-if="inputLabel" class="mb-2 block select-none text-sm">{{
      inputLabel
    }}</label>
    <Listbox v-model="selectedOption">
      <div class="relative text-sm">
        <ListboxButton v-slot="{ open }" class="w-full focus:outline-none">
          <div
            class="bg-gray relative block w-full cursor-pointer border-none py-3 pl-4 pr-5 text-left text-sm leading-[1.215] focus:outline-none"
            :class="[
              open ? 'rounded-t-[10px]' : 'rounded-[10px]',
              {
                'min-w-[120px]': props.size === 'md',
                'min-w-[80px]': props.size === 'sm'
              }
            ]"
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
            class="absolute z-20 max-h-60 w-full overflow-auto rounded-b-[10px] focus:outline-none"
          >
            <ListboxOption
              v-slot="{ selected, disabled }"
              v-for="option in props.options"
              :key="option.label"
              :value="option.value"
              :disabled="option.disabled"
              as="template"
            >
              <span
                :class="[
                  selected ? 'bg-gray-200' : '',
                  disabled ? 'hidden' : ''
                ]"
                class="bg-gray block cursor-pointer truncate py-3 px-4 font-bold transition-colors hover:bg-gray-200"
                >{{ option.label }}</span
              >
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
  <!-- outline variant -->
  <div v-if="variant === 'outline'" class="w-full text-black">
    <label v-if="inputLabel" class="mb-2 block select-none text-sm">{{
      inputLabel
    }}</label>
    <Listbox v-model="selectedOption">
      <div class="relative text-sm">
        <ListboxButton v-slot="{ open }" class="w-full focus:outline-none">
          <div
            class="relative block w-full cursor-pointer border-2 border-black bg-white py-1 pl-4 pr-6 text-left text-sm font-bold leading-[1.643] focus:outline-none"
            :class="[
              open ? 'rounded-t-[17px] border-b-0' : 'rounded-[17px]',
              {
                'min-w-[120px]': props.size === 'md',
                'min-w-[80px]': props.size === 'sm'
              }
            ]"
          >
            <span class="block truncate">{{ label }}</span>

            <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
            >
              <div class="fill-purple h-[7px]" aria-hidden="true">
                <svg width="11px" height="7px" viewBox="0 0 11 7">
                  <g
                    id="Pop-ups"
                    stroke="none"
                    stroke-width="1"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Mobile_Donate_Popup"
                      transform="translate(-121.000000, -214.000000)"
                    >
                      <path
                        d="M127.286318,215.000769 L130.983084,219.705743 C131.256054,220.05316 131.195703,220.556084 130.848286,220.829055 C130.707338,220.9398 130.53328,221 130.354029,221 L122.645971,221 C122.204143,221 121.845971,220.641828 121.845971,220.2 C121.845971,220.020749 121.906171,219.846691 122.016916,219.705743 L125.713682,215.000769 C126.054895,214.566497 126.68355,214.491059 127.117822,214.832272 C127.180502,214.881521 127.237069,214.938088 127.286318,215.000769 Z"
                        id="Triangle-Copy-2"
                        transform="translate(126.500000, 217.500000) rotate(-180.000000) translate(-126.500000, -217.500000) "
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </span>
          </div>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute z-20 max-h-60 w-full overflow-auto rounded-b-[17px] border-2 border-t-0 border-black focus:outline-none"
          >
            <ListboxOption
              v-slot="{ selected, disabled }"
              v-for="option in props.options"
              :key="option.label"
              :value="option.value"
              :disabled="option.disabled"
              as="template"
            >
              <span
                :class="[
                  selected ? 'font-bold' : 'font-normal',
                  disabled ? 'hidden' : ''
                ]"
                class="hover:text-red block cursor-pointer truncate bg-white py-1 px-4 transition-colors"
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
