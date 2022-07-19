<template>
  <label v-if="variant === 'default'" :for="id" class="block">
    <span v-if="label" class="inline-flex mb-2 select-none text-sm leading-5">{{ label }}</span>
    <input
      v-if="(type !== 'textarea' && type !== 'file')"
      :type="type"
      :id="id"
      :placeholder="placeholder"
      :value="value"
      :name="name"
      :class="defaultClass"
    />
    <input
      v-if="type === 'file'"
      :id="id"
      :value="value"
      :name="name"
      :class="fileClass"
    />
    <textarea
      v-if="type === 'textarea'"
      :id="id"
      :placeholder="placeholder"
      :value="value"
      :name="name"
      :class="[
        defaultClass,
        `resize-none`,
        {
          'h-[90px]': textAreaSize === 'sm',
          'h-[104px]': textAreaSize === 'md',
          'h-[190px]': textAreaSize === 'lg'
        }
      ]"
    />
  </label>
</template>
<script setup>
const props = defineProps({
  label: String,
  id: String,
  name: String,
  placeholder: String,
  value: String,
  variant: {
    type: String,
    default: "default"
  },
  textAreaSize: {
    type: String,
    default: "sm"
  },
  type: {
    default: "text",
    type: String
  }
});

const defaultClass =
  "placeholder:text-gray-light bg-gray focus:ring-orange block w-full rounded-[10px] border-none px-4 py-3 text-sm leading-none focus:outline-none focus:ring-1";

const fileClass =
  "py-2 bg-transparent focus:ring-orange focus:outline-none focus:ring-1 focus-visible:ring-1 file:inline-flex file:items-center file:justify-center file:px-6 file:py-2 file:h-[35px] file:mr-5 file:bg-red file:border-0 file:shadow file:rounded-full file:text-sm file:leading-[1] file:font-bold file:text-white";
</script>
