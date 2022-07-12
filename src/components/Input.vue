<template>
  <label v-if="variant === 'default'" :for="id" class="block">
    <span v-if="label" class="inline-flex mb-2 select-none text-sm leading-5">{{ label }}</span>
    <input
      v-if="type !== 'textarea'"
      :type="type"
      :id="id"
      :placeholder="placeholder"
      :value="value"
      :name="name"
      :class="defaultClass"
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
</script>
