<template>
  <button @click="$emit('click', $event)"><slot></slot></button>
</template>
<script>
export default{
  inheritAttrs: false
}
</script>
<style scoped>
button {
  border-radius: 2px;
  outline: none;
  width: 60px;
  height: 35px;
  border: 1px solid #eee;
  margin:0 1px;
  transition: opacity .4s;
  box-shadow: 1px 1px 1px #eee;
  color: #fff;
  cursor: pointer;
}
button:hover {
  opacity: .6
}
</style>