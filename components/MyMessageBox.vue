<template>
  <transition name="fade">
    <div class="message-box">
      <div class="message-header">
        {{ header }}
      </div>
      <div class="message-body">
        <slot>{{message}}</slot>
      </div>
      <div class="message-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    header: {
      type: String,
      default: '提示框'
    },
    message: {
      type: String,
      default: '提示内容'
    }
  }
}
</script>
<style scoped>
.message-box {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 100px;
  z-index: 99999;
}
.fade-enter-active,
.fade-leave-active {
  transition: all .4s;
}
.fade-enter,
.fade-leave-to {
  transform: translate(-50%, -100%);
}
</style>