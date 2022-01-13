<template>
  <div :class="['message']">
    <div class="info showUp" v-for="item of arr" :key="item">{{ item }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      number: 0,
      arr: []
    }
  },
  methods: {
    showUp(message) {
      this.arr.push(this.number++)
      setTimeout(() => {
        this.arr.shift()
      }, 3000)
    }
  }
}
</script>
<style scoped>
.message {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 150px;
  top: 100px;
  left: calc(50% - 75px);
  z-index: 999;
}
.showUp {
  animation: scroll-in 1.5s 0s 1, scroll-out 1.5s 1.7s 1;
}
@keyframes scroll-in {
  0% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes scroll-out {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100vh);
  }
}
.info {
  width: 150px;
  height: 80px;
  left: calc(50% - 75px);
  transition: all 1s;
  z-index: 999;
}
</style>