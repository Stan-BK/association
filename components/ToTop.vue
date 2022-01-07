<template>
  <div :class="['to-top', isToTop ? 'to-top-animation': '']" :style="{ 'display': hasScroll ? 'flex': 'none' }" title="回到顶部">
    <i class="fa fa-rocket" style="color: rgb(61, 184, 240); transform: scale(1.4, 1.4);" aria-hidden="true"></i>
  </div>
</template>
<script>
export default {
  props: {
    isToTop: {
      type: Boolean
    },
    hasScroll: {
      type: Boolean
    }
  },
}
</script>
<style scoped>
.to-top {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  top: calc(60% + 50px);
  right: 30px;
  transform: rotate(-45deg);
  background-color: #fff;
  margin-top: 20px;
  border-radius: 50%;
  transition: background-color .5s;
  box-shadow: 1px 1px 5px rgb(159, 221, 244);
  overflow: hidden;
  cursor: pointer;
}
.to-top:hover {
  background-color: #eee;
}
.to-top-animation i {
  animation: to-top 1 1s ease-in-out;
}
@keyframes to-top {
  30% {
    transform: translate(-5px, 5px);
  }
  40% {
    transform: translate(60px, -60px);
  }
  60% {
    transform: translate(15px, -60px);
  }
  70% {
    transform: translate(-60px, 15px);
  }
  80% {
    transform: translate(-60px, 60px);
  }
  100% {
    transform: translate(0px);
  }
}
</style>