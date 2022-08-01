<template>
  <div class="border-b-2 border-gray-light pb-6">
    <div class="relative md:flex">
      <div class="xsm:w-[211px] relative mr-7 w-[174px] shrink-0 grow-0">
        <input
          class="focus:ring-orange w-full rounded-[10px] border-none bg-white py-[11.5px] pl-4 pr-9 text-sm leading-none transition-all focus:ring-2"
          type="text"
          placeholder="Your zip code"
        />
        <button class="text-red absolute top-1/2 right-3 -mt-2">
          <BaseIcon name="search" class="h-4 w-4" />
        </button>
      </div>
      <div
        @click="toggleFilter"
        @keyup.enter="toggleFilter"
        tabindex="0"
        class="focus:ring-orange absolute right-0 top-[7px] inline-flex cursor-pointer select-none items-center outline-none focus:ring-2 md:hidden"
      >
        <span class="mr-1 text-sm font-bold text-black">Filter</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="text-red h-6 w-6 rotate-90"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </div>
      <div
        v-show="isFilterOpen"
        class="xsm:flex xsm:space-y-0 xsm:max-w-none mx-auto mt-12 block max-w-[174px] flex-1 justify-between space-y-10 md:mt-0"
      >
        <div class="xsm:flex-row xsm:space-y-0 flex flex-col space-y-10">
          <div class="xsm:mr-7">
            <Listbox v-model="selectedAge" as="div" class="relative">
              <ListboxButton
                v-slot="{ open }"
                as="div"
                tabindex="0"
                class="focus:ring-orange relative cursor-pointer rounded-[10px] outline-none focus:ring-2"
              >
                <div
                  class="focus:ring-orange min-w-[91px] bg-white py-[11px] pl-4 pr-7 text-sm leading-[18px] text-black focus:ring-2"
                  :class="open ? 'rounded-t-[10px]' : 'rounded-[10px]'"
                >
                  <span class="block truncate">{{ selectedAge.label }}</span>
                  <BaseIcon
                    name="angleDown"
                    class="text-red absolute top-1/2 right-3 -mt-[5px] w-[10px]"
                    :class="open && 'rotate-180'"
                  />
                </div>
              </ListboxButton>
              <ListboxOptions
                class="absolute z-20 max-h-60 w-full overflow-auto rounded-b-[10px] text-sm outline-none"
              >
                <ListboxOption
                  v-slot="{ active }"
                  v-for="option in age"
                  :key="option.label"
                  :value="option"
                  as="template"
                >
                  <span
                    :class="[active ? 'bg-gray-100' : '']"
                    class="block cursor-pointer truncate bg-white py-1 px-4 hover:bg-gray-100"
                    >{{ option.label }}</span
                  >
                </ListboxOption>
              </ListboxOptions>
            </Listbox>
          </div>
          <div>
            <Listbox v-model="selectedSize" as="div" class="relative">
              <ListboxButton
                v-slot="{ open }"
                as="div"
                tabindex="0"
                class="focus:ring-orange relative cursor-pointer rounded-[10px] outline-none focus:ring-2"
              >
                <div
                  class="focus:ring-orange min-w-[91px] bg-white py-[11px] pl-4 pr-7 text-sm leading-[18px] text-black focus:ring-2"
                  :class="open ? 'rounded-t-[10px]' : 'rounded-[10px]'"
                >
                  <span class="block truncate">{{ selectedSize.label }}</span>
                  <BaseIcon
                    name="angleDown"
                    class="text-red absolute top-1/2 right-3 -mt-[5px] w-[10px]"
                    :class="open && 'rotate-180'"
                  />
                </div>
              </ListboxButton>
              <ListboxOptions
                class="absolute z-20 max-h-60 w-full overflow-auto rounded-b-[10px] text-sm outline-none"
              >
                <ListboxOption
                  v-slot="{ active }"
                  v-for="option in size"
                  :key="option.label"
                  :value="option"
                  as="template"
                >
                  <span
                    :class="[active ? 'bg-gray-100' : '']"
                    class="block cursor-pointer truncate bg-white py-1 px-4 hover:bg-gray-100"
                    >{{ option.label }}</span
                  >
                </ListboxOption>
              </ListboxOptions>
            </Listbox>
          </div>
        </div>
        <div class="self-end pb-1">
          <Listbox v-model="selectedSort" as="div" class="relative">
            <ListboxButton
              v-slot="{ open }"
              as="div"
              tabindex="0"
              class="focus:ring-orange relative cursor-pointer outline-none focus:ring-2"
            >
              <div
                class="focus:ring-orange flex min-w-[91px] items-center justify-center text-sm font-bold leading-[18px] text-black focus:ring-2"
              >
                <span>Sort by:&nbsp;</span>
                <span class="block truncate">{{ selectedSort.label }}</span>
                <BaseIcon
                  name="angleDown"
                  class="text-red ml-[6px] w-[10px]"
                  :class="open && 'rotate-180'"
                />
              </div>
            </ListboxButton>
            <ListboxOptions
              class="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-b-[10px] text-sm outline-none"
            >
              <ListboxOption
                v-slot="{ active }"
                v-for="option in sort"
                :key="option.label"
                :value="option"
                as="template"
              >
                <span
                  :class="[active ? 'bg-gray-100' : '']"
                  class="block cursor-pointer truncate bg-white py-1 px-4 hover:bg-gray-100"
                  >{{ option.label }}</span
                >
              </ListboxOption>
            </ListboxOptions>
          </Listbox>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption
} from "@headlessui/vue";
import BaseIcon from "./BaseIcon.vue";

const windowWidth = ref(window.innerWidth);
const isFilterOpen = ref(windowWidth.value <= 767 ? false : true);

const toggleFilter = () => {
  isFilterOpen.value = !isFilterOpen.value;
};

const setFilterOpen = () => {
  if (windowWidth.value !== window.innerWidth) {
    if (!isFilterOpen.value && window.innerWidth > 767) {
      isFilterOpen.value = true;
    } else if (isFilterOpen.value && window.innerWidth <= 767) {
      isFilterOpen.value = false;
    }
  }
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", setFilterOpen);
});

onUnmounted(() => {
  window.removeEventListener("resize", setFilterOpen);
});

const sort = [
  {
    label: "Newest",
    value: "Newest"
  },
  {
    label: "Oldest",
    value: "Oldest"
  }
];

const age = [
  {
    label: "Age",
    value: null
  },
  {
    label: "1-2",
    value: "1-2"
  },
  {
    label: "2-4",
    value: "2-4"
  }
];

const size = [
  {
    label: "Size",
    value: null
  },
  {
    label: "Small",
    value: "Small"
  },
  {
    label: "Large",
    value: "Large"
  }
];

const selectedAge = ref(age[0]);
const selectedSize = ref(size[0]);
const selectedSort = ref(sort[0]);
</script>
