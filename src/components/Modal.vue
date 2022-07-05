<template>
  <div class="fixed inset-0 flex items-center justify-center">
    <button
      type="button"
      @click="openModal"
      class="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      Open dialog
    </button>
  </div>
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
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="Pop-ups"
                    stroke="none"
                    stroke-width="1"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Donate_Popup"
                      transform="translate(-1362.000000, -259.000000)"
                    >
                      <g
                        id="Group-29"
                        transform="translate(1342.000000, 239.000000)"
                      >
                        <g
                          id="Group-3"
                          transform="translate(32.103553, 32.103553) rotate(-90.000000) translate(-32.103553, -32.103553) translate(20.789845, 20.643398)"
                        >
                          <polygon
                            id="Rectangle-Copy-3"
                            transform="translate(11.313708, 11.606602) rotate(-315.000000) translate(-11.313708, -11.606602) "
                            points="-2.6862915 9.60660172 25.3137085 9.60660172 25.3137085 13.6066017 -2.6862915 13.6066017"
                          ></polygon>
                          <polygon
                            id="Rectangle-Copy-4"
                            transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) "
                            points="-2.6862915 9.3137085 25.3137085 9.3137085 25.3137085 13.3137085 -2.6862915 13.3137085"
                          ></polygon>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
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

const isOpen = ref(true);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
  emit("modalShowed");
}

const props = defineProps({
  title: String,
  description: String
});

const emit = defineEmits(["modalShowed"]);
</script>
