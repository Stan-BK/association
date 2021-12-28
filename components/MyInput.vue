<template>
  <div class="my-input-wrap">
    <input type="text" :class="['my-input', btn ? 'has-btn' : '']">
    <button class="btn" v-if="btn">{{ btn }}</button>
  </div>
</template>
<script>
export default {
  props: {
    btn: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
.my-input-wrap {
  position: relative;
  width: 100%;
}
.my-input {
  width: 100%;
  height: 30px;
  outline: none;
  border: 1px solid #aaaaaa;
  border-radius: 2px;
  padding-left: 10px;
  padding-right: 10px;
  transition: border-color .5s;
}
.my-input:focus {
  border-color: rgb(103, 218, 236);
}
.has-btn {
  padding-right: 60px;

}
.btn {
  position: absolute;
  width: 50px;
  height: 20px;
  right: 5px;
  top: 5px;
  transition: background-color .5s;
  cursor: pointer;
  border: none;
  border-radius: 2px;
}
.btn:hover {
  background-color: rgb(134, 230, 236);
}
</style>