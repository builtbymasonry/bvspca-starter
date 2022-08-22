<template>
  <div>
    <h3
      class="bg-purple rounded-sm px-2 py-4 text-center text-lg font-bold leading-tight text-white"
    >
      {{ data.title }}
    </h3>
    <div>
      <div
        v-for="row in data.content"
        :key="row.title"
        class="even:bg-gray-dark flex rounded bg-white py-4 px-6 text-sm leading-snug text-black md:px-0 lg:rounded-sm"
      >
        <div
          class="grow pr-4 md:w-48 md:shrink-0 md:grow-0 md:pl-7 lg:w-64 lg:pl-10"
        >
          <h4 class="mb-1 font-bold md:mb-0">{{ row.title }}</h4>
          <div
            class="text-xs leading-relaxed md:hidden"
            v-html="renderDescription(row.description)"
          />
        </div>
        <div
          class="hidden grow pr-4 leading-normal md:block"
          v-html="renderDescription(row.description)"
        ></div>
        <div
          class="flex w-20 shrink-0 flex-col text-right font-bold md:w-24 md:pr-4 md:text-left lg:w-32"
          v-html="renderPrice(row.price)"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

const renderDescription = (description) => {
  if (Array.isArray(description)) {
    return description
      .map((string, i) =>
        i < description.length - 1
          ? `<p class="mb-1">${string}</p>`
          : `<p class="text-xxs leading-snug">${string}</p>`
      )
      .join(" ");
  } else if (typeof description === "string") return description;
};

const renderPrice = (price) => {
  if (Array.isArray(price)) {
    return price.map((string, i) => `<span>${string}</span>`).join(" ");
  } else if (typeof price === "string") return price;
};
</script>
