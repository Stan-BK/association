<template>
  <input type="text" class="my-input">
</template>
<style scoped>
.my-input {
  width: 100%;
  height: 30px;
  outline: none;
  border: 1px solid #aaaaaa;
  border-radius: 2px;
  padding-left: 5px;
  transition: border-color .5s;
}
.my-input:focus {
  border-color: rgb(103, 218, 236);
}
</style>