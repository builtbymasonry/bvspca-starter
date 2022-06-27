<template>
  <div class="Hero">
    <img :src="imgSrc" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: "#"
    }
  }
};
</script>
