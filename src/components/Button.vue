<template>
  <a
    target="{{ target }}"
    href="{{ url }}"
    class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
    >{{ text }}
  </a>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
      default: "_self"
    },
    url: {
      type: String,
      default: "#"
    },
    text: {
      type: String,
      default: "Button"
    }
  }
};
</script>
