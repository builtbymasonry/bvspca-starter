<template>
  <a
    target="{{ target }}"
    href="{{ url }}"
    class="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700"
    >{{ text }}</a
  >
</template>

<script>
  export default {
    props: {
      target: {
        type: String,
        default: '_self'
      },
      url: {
        type: String,
        default: '#'
      },
      text: {
        type: String,
        default: 'Button'
      }
    }
  }
</script>
