<template>
  <section class="bg-gray-dark py-9 lg:py-24">
    <div class="mx-auto max-w-6xl px-6">
      <h1 class="mb-12 text-3xl font-bold text-black md:text-4xl lg:text-6xl">
        {{ title }}
      </h1>
      <div class="border-gray-light border-b-2 pb-6">
        <div class="relative justify-between md:flex">
          <div class="xsm:w-[211px] relative mr-7 w-[174px] shrink-0 grow-0">
            <input
              class="focus:ring-orange w-full rounded-[10px] border-none bg-white py-[11.5px] pl-4 pr-9 text-sm leading-none transition-all focus:ring-2"
              type="text"
              placeholder="Search"
            />
            <button class="text-red absolute top-1/2 right-3 -mt-2">
              <BaseIcon name="search" class="h-4 w-4" />
              <span class="sr-only">Search</span>
            </button>
          </div>
          <button
            type="button"
            @click="toggleFilter"
            tabindex="0"
            class="focus:ring-orange absolute right-0 top-[7px] inline-flex cursor-pointer select-none items-center outline-none focus:ring-2 md:hidden"
          >
            <span class="mr-2 text-sm font-bold text-black">Filter</span>
            <BaseIcon
              name="filter"
              class="text-red w-5 h-5"
            />
          </button>
          <div
            v-show="isFilterOpen"
            class="mx-auto mt-12 block flex-1 justify-end space-y-10 md:mt-0 md:flex md:space-y-0"
          >
            <div class="self-end pb-1">
              <Listbox v-model="selectedSort" as="div" class="relative">
                <ListboxButton
                  v-slot="{ open }"
                  as="div"
                  tabindex="0"
                  class="focus:ring-orange relative cursor-pointer outline-none focus:ring-2"
                >
                  <div
                    class="focus:ring-orange flex min-w-[91px] items-center text-sm font-bold leading-[18px] text-black focus:ring-2"
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
            <ul class="block md:hidden">
              <li v-for="item in filter" :key="item" class="mb-3 last:mb-0">
                <Checkbox :label="item" variant="bg-white" />
              </li>
            </ul>
            <button
              type="reset"
              class="text-red hover:text-red-light inline-flex text-sm font-bold leading-normal md:hidden transition-colors"
            >
              <BaseIcon name="reset" class="w-4 h-4 mr-[9px] text-red" />
              Reset filters
            </button>
          </div>
        </div>
      </div>
      <div class="flex">
        <aside
          class="hidden w-[210px] shrink-0 py-8 pr-7 md:block lg:w-[262px]"
        >
          <h2 class="mb-5 text-xl font-bold leading-tight text-black">
            Filter by
          </h2>
          <h3 class="mb-3 text-sm font-bold leading-tight text-black">
            Resource type
          </h3>
          <ul class="mb-8">
            <li v-for="item in filter" :key="item" class="mb-3 last:mb-0">
              <Checkbox :label="item" variant="bg-white" />
            </li>
          </ul>
          <button
            type="reset"
            class="text-red hover:text-red-light inline-flex text-sm font-bold leading-normal transition-colors"
          >
            <BaseIcon name="reset" class="w-4 h-4 mr-[9px] text-red" />
            Reset filters
          </button>
        </aside>
        <div>
          <div class="grid gap-8 pt-14 sm:grid-cols-2 xl:grid-cols-3">
            <PostCard v-for="post in posts" :key="post.title" v-bind="post" />
          </div>
          <div class="mt-12 text-center md:mt-16">
            <Button text="Load more" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption
} from "@headlessui/vue";
import BaseIcon from "@/components/BaseIcon.vue";
import Checkbox from "../Checkbox.vue";
import PostCard from "../PostCard.vue";
import Button from "../Button.vue";

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

const filter = [
  "News",
  "Events",
  "Behavior resources",
  "Videos",
  "Adoption resources",
  "Fundraisers"
];

const selectedSort = ref(sort[0]);
const props = defineProps({
  title: String,
  posts: Array
});
</script>
