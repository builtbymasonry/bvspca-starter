<template>
  <div>
    <h3
      v-if="data.title"
      class="bg-purple rounded-sm px-2 py-2 text-center text-lg font-bold leading-tight text-white md:mb-0 md:py-3 lg:text-xl"
    >
      {{ data.title }}
    </h3>
    <!-- mobile view -->
    <div class="block md:hidden divide-y divide-solid divide-gray">
      <div
        v-for="(row, i) in data.rows"
        :key="row.title"
        class="pt-9 pb-12"
      >
        <h3 class="mb-3 text-center text-lg font-bold text-black">
          {{ row.title }}
        </h3>
        <div class="xsm:max-w-sm mx-auto mb-10 max-w-[224px]">
          <Select
            :options="[
              ...[{ label: data.select.label, value: '' }],
              ...row.content.filter((item) => item.value)
            ]"
            variant="outline"
          />
        </div>
        <div class="text-center">
          <!-- Example with disabled button -->
          <Button v-if="i === 0" text="Download" download icon="download" />
          <Button v-else text="Download" download icon="download" disabled />
        </div>
      </div>
    </div>
    <!-- desktop view -->
    <div class="hidden text-xs leading-tight md:block lg:text-sm">
      <div
        v-for="row in data.rows"
        :key="row.title"
        class="even:bg-gray-dark flex items-center rounded-sm pr-2"
      >
        <div v-if="row.title" class="w-44 shrink grow-0 py-4 pl-5 pr-3 lg:w-56">
          <h3>{{ row.title }}</h3>
        </div>
        <div
          v-for="link in row.content"
          :key="link.label"
          class="shrink grow basis-0 py-4 px-2 text-center lg:px-3"
        >
          <a
            :href="link.value ? link.value : null"
            class="font-bold"
            :download="link.value"
            :aria-hidden="!link.value"
            :class="
              link.value
                ? 'text-red hover:text-red-light transition-colors'
                : 'pointer-events-none text-black'
            "
            >{{ link.label }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeUpdate, onMounted } from "vue";
import Select from "./Select.vue";
import Button from "./Button.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});
</script>
