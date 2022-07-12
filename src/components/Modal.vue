<template>
  <Button
    :text="buttonText"
    :variant="buttonVariant"
    @click.prevent="openModal"
  />
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-purple-300" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center px-4 py-8 sm:px-8 lg:p-11 xl:p-16"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="relative w-full transform rounded-lg bg-white px-8 py-14 text-left align-middle shadow transition-all xl:px-20 xl:pt-20 xl:pb-16"
            >
              <slot />

              <button
                class="absolute -right-3 -top-5 flex h-[65px] w-[65px] items-center justify-center rounded-full bg-white fill-black shadow sm:-right-6 sm:-top-6"
                @click="closeModal"
              >
                <BaseIcon name="close" class="w-[22px] h-[22px]" />
              </button>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription
} from "@headlessui/vue";
import BaseIcon from "./BaseIcon.vue";
import Button from "./Button.vue";

const isOpen = ref(true);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
  emit("modalShowed");
}

const props = defineProps({
  buttonText: {
    type: String,
    default: "Open modal"
  },
  buttonVariant: {
    type: String,
    default: "primary"
  },
  title: String,
  description: String
});

const emit = defineEmits(["modalShowed"]);
</script>
