<template>
  <div
    class="text-sm leading-tight text-black md:rounded-lg md:bg-white md:shadow"
  >
    <!-- desktop version -->
    <div class="hidden md:block md:py-10 md:px-6 lg:py-16 lg:px-16">
      <div
        v-for="(row, i) in data.desktop"
        :key="i"
        class="group flex md:-mx-3 lg:-mx-6"
      >
        <div
          v-for="(service, idx) in row"
          :key="idx"
          class="border-purple-light shrink grow basis-0 py-4 first:border-b-0 group-last:border-b-0 md:mx-3 lg:mx-6"
          :class="[
            idx > 0 && i !== data.desktop.length - 1 ? 'text-center' : '',
            i === data.desktop.length - 1 || i === data.desktop.length - 2
              ? 'border-b-0'
              : ' border-b'
          ]"
        >
          <h3
            v-if="service.headTitle"
            class="mb-5 font-bold md:text-base md:leading-tight lg:text-lg lg:leading-tight"
          >
            {{ service.headTitle }}
          </h3>
          <p v-if="service.currentPrice" class="text-4xl font-bold">
            ${{ service.currentPrice }}
          </p>
          <p v-if="service.normalPrice" class="text-sm">
            Normal price: ${{ service.normalPrice }}
          </p>
          <p v-if="service.priceDifference" class="text-sm font-bold">
            Save ${{ service.priceDifference }}
          </p>

          <h4 v-if="service.title" class="mb-2 font-bold last:mb-0">
            {{ service.title }}
          </h4>
          <p
            class="text-xxs flex flex-col leading-snug"
            v-if="service.description && Array.isArray(service.description)"
            v-html="
              service.description
                .map((str) => `<span class='mb-1 last:mb-0'>${str}</span>`)
                .join('')
            "
          ></p>
          <p
            class="text-xxs flex flex-col leading-snug"
            v-if="
              service.description && typeof service.description === 'string'
            "
          >
            {{ service.description }}
          </p>
          <div v-if="service.included" class="text-red">
            <BaseIcon name="check" />
          </div>
        </div>
      </div>
      <div class="text-center md:mt-12 lg:mt-16">
        <Button text="Schedule an appointment" />
      </div>
    </div>

    <!-- mobile version -->
    <div class="md:hidden">
      <div
        v-for="(pack, i) in data.mobile"
        :key="i"
        class="mb-10 rounded-sm bg-white px-9 pt-12 pb-16 shadow last:mb-0"
      >
        <div class="border-purple-light border-b pb-6 text-center">
          <h3
            v-if="pack.head.title"
            class="mb-3 text-lg font-bold leading-tight"
          >
            {{ pack.head.title }}
          </h3>
          <p v-if="pack.head.currentPrice" class="text-4xl font-bold">
            ${{ pack.head.currentPrice }}
          </p>
          <p v-if="pack.head.normalPrice" class="text-sm">
            Normal price: ${{ pack.head.normalPrice }}
          </p>
          <p v-if="pack.head.priceDifference" class="text-sm font-bold">
            Save ${{ pack.head.priceDifference }}
          </p>
        </div>
        <ul v-if="pack.body">
          <li
            v-for="service in pack.body"
            :key="service.title"
            class="border-purple-light flex border-b py-4"
          >
            <div class="grow">
              <h4
                v-if="service.title"
                class="mb-2 font-bold leading-tight last:mb-0"
              >
                {{ service.title }}
              </h4>
              <p
                class="text-xxs flex flex-col leading-snug"
                v-if="service.description"
              >
                {{ service.description }}
              </p>
            </div>
            <div class="text-red mx-1 w-6"><BaseIcon name="check" /></div>
          </li>
        </ul>
        <div class="pt-14 text-center">
          <Button text="Schedule an appointment" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import BaseIcon from "./BaseIcon.vue";
import Button from "./Button.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});
</script>
