<template>
  <label :for="id" class="block">
    <span v-if="label" class="select-none text-sm">{{ label }}</span>
    <input
      v-if="type !== 'textarea'"
      :type="type"
      :id="id"
      :placeholder="placeholder"
      :value="value"
      :name="name"
      :class="defaultClasslist"
    />
    <textarea
      v-if="type === 'textarea'"
      :id="id"
      :placeholder="placeholder"
      :value="value"
      :name="name"
      class="h-[90px] resize-none"
      :class="defaultClasslist"
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
  type: {
    default: "text",
    type: String
  }
});

const defaultClasslist =
  "placeholder:text-gray-light bg-gray focus:ring-orange mt-1 block w-full rounded-[10px] border-none px-4 py-3 text-sm leading-none focus:outline-none focus:ring-1";
</script>
