<template>
  <div class="buttongroup">
    <slot></slot>
  </div>
</template>
<style scoped>
.buttongroup {
  width: auto;
  height: 35px;
  display: inline-block;
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