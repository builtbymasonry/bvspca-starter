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
            </button>
          </div>
          <button
            type="button"
            @click="toggleFilter"
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
              class="text-red hover:text-red-light inline-flex text-sm font-bold leading-normal md:hidden"
            >
              <svg
                width="13px"
                height="17px"
                viewBox="0 0 13 17"
                class="mr-[9px]"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    transform="translate(-150.000000, -839.000000)"
                    fill="currentColor"
                    fill-rule="nonzero"
                  >
                    <path
                      d="M155.687504,842.249983 L155.687504,839 L151.624852,843.062652 L155.687504,847.124956 L155.687504,843.874974 L156.499965,843.874974 C159.188587,843.874974 161.375009,846.061396 161.375009,848.750017 C161.375009,851.438639 159.188587,853.625061 156.499965,853.625061 C153.811483,853.625061 151.624922,851.438639 151.624922,848.750017 L151.624922,847.937557 L150,847.937557 L150,848.750017 C150,852.333871 152.916042,855.250192 156.499826,855.250192 C160.084028,855.250192 163,852.33401 163,848.750017 C163,845.166025 160.083958,842.249843 156.499826,842.249843 L155.687504,842.249983 Z"
                    ></path>
                  </g>
                </g>
              </svg>
              Reset filters
            </button>
          </div>
        </div>
      </div>
      <div class="flex">
        <aside
          class="hidden w-[210px] shrink-0 py-8 pr-7 md:block lg:w-[262px]"
        >
          <h2 class="mb-4 text-xl font-bold leading-tight text-black">
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
            class="text-red hover:text-red-light inline-flex text-sm font-bold leading-normal"
          >
            <svg
              width="13px"
              height="17px"
              viewBox="0 0 13 17"
              class="mr-[9px]"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g
                  transform="translate(-150.000000, -839.000000)"
                  fill="currentColor"
                  fill-rule="nonzero"
                >
                  <path
                    d="M155.687504,842.249983 L155.687504,839 L151.624852,843.062652 L155.687504,847.124956 L155.687504,843.874974 L156.499965,843.874974 C159.188587,843.874974 161.375009,846.061396 161.375009,848.750017 C161.375009,851.438639 159.188587,853.625061 156.499965,853.625061 C153.811483,853.625061 151.624922,851.438639 151.624922,848.750017 L151.624922,847.937557 L150,847.937557 L150,848.750017 C150,852.333871 152.916042,855.250192 156.499826,855.250192 C160.084028,855.250192 163,852.33401 163,848.750017 C163,845.166025 160.083958,842.249843 156.499826,842.249843 L155.687504,842.249983 Z"
                  ></path>
                </g>
              </g>
            </svg>
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
