<template>
  <div class="buttongroup">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {

  }
}
</script>
<style scoped>
.buttongroup {
  display: inline-block;
  box-shadow: 1px 1px 1px #eee;
}
button {
  margin: 0;
  margin-right: -5px;
  border-radius: 0;
  border-left: none;
  border-right: none;
  box-shadow: none;
}
button:first-child {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border-left: 1px solid #eee;
}
button:last-child {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  border-right: 1px solid #eee;
}
</style>