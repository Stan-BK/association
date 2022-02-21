<template>
  <div style="position: relative;">
    <div class="toggle">
      <div class="inset" :class="isRight ? 'right' : ''"></div>
    </div>
    <button @click="toggle" :class="isRight ? 'right' : ''"></button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isRight: false
    }
  },
  methods: {
    toggle() {
      this.isRight = !this.isRight
    }
  }
}
</script>
<style scoped>
.toggle {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  border-radius: 35px;
  border: 1px solid #424242;
  box-shadow: 1px 1px 5px #666 inset, -1px -1px 5px #666 inset;
  background-color: #424242;
  overflow: hidden;
  cursor: pointer;
}
.inset {
  position: absolute;
  content: "";
  left: -26px;
  top: 0;
  width: 60px;
  height: 30px;
  border-radius: 35px;
  background-color: limegreen;
  box-shadow: 1px 1px 10px #aaa inset, -1px -1px 10px #aaa inset;
  transition: all .4s;
}
.toggle+button {
  position: absolute;
  content: "";
  left: 0;
  top: -2px;
  width: 35px;
  height: 35px;
  background-color: #fff;
  border-radius: 35px;
  border: 1px solid #424242;
  box-shadow: 1px 1px 10px #ddd inset, -1px -1px 10px #ddd inset;
  z-index: 9;
  transition: all .4s;
  cursor: pointer;
}
.right {
  transform: translate3d(25px, 0, 0);
}
</style>