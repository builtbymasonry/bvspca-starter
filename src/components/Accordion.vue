<template>
  <Disclosure
    v-for="item in items"
    :key="item.button"
    as="div"
    v-slot="{ open }"
    class="border-gray-dark -mt-[2px] border-y-2 py-5 text-black"
  >
    <DisclosureButton
      class="flex w-full pr-3 text-left text-base font-bold leading-tight sm:text-lg"
    >
      <span class="grow pr-6">{{ item.button }}</span>
      <span
        class="relative mt-[3px] h-4 w-4 shrink-0 md:mt-0 md:h-[22px] md:w-[22px]"
      >
        <span
          :class="open ? 'rotate-90' : ''"
          class="bg-red absolute left-1/2 top-0 -ml-[1px] h-full w-[2px] transition-transform"
        ></span>
        <span
          class="bg-red absolute left-0 top-1/2 -mt-[1px] h-[2px] w-full"
        ></span>
      </span>
    </DisclosureButton>
    <transition
      class="transition-all"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
    >
      <DisclosurePanel
        class="xsm:pr-10 overflow-hidden pr-2 text-xs sm:text-sm md:pr-16"
      >
        <div class="py-1" aria-hidden="true"></div>
        <p>{{ item.panel }}</p>
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const props = defineProps({
  items: {
    type: Object,
    required: true
  }
});

const beforeEnter = (el) => {
  el.style.height = "0";
};

const enter = (el) => {
  el.style.height = el.scrollHeight + "px";
};

const beforeLeave = (el) => {
  el.style.height = el.scrollHeight + "px";
};
const leave = (el) => {
  el.style.height = "0";
};
</script>
