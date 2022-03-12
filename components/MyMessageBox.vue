<template>
  <transition name="fade">
    <div class="message-box" :class="darkMode ? 'dark-message-box' : ''">
      <div class="message-header">
        <svg v-show="!darkMode" t="1647068051495" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4365" width="16" height="16"><path d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m0-85.333333c235.648 0 426.666667-191.018667 426.666667-426.666667S747.648 85.333333 512 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667z m-42.666667-469.333334a42.666667 42.666667 0 0 1 85.333334 0v298.666667a42.666667 42.666667 0 0 1-85.333334 0v-298.666667z m38.4-136.533333a59.733333 59.733333 0 1 1 0-119.466667 59.733333 59.733333 0 0 1 0 119.466667z" p-id="4366" fill="#424242"></path></svg>
        <svg v-show="darkMode" t="1647068051495" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4365" width="16" height="16"><path d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m0-85.333333c235.648 0 426.666667-191.018667 426.666667-426.666667S747.648 85.333333 512 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667z m-42.666667-469.333334a42.666667 42.666667 0 0 1 85.333334 0v298.666667a42.666667 42.666667 0 0 1-85.333334 0v-298.666667z m38.4-136.533333a59.733333 59.733333 0 1 1 0-119.466667 59.733333 59.733333 0 0 1 0 119.466667z" p-id="4366" fill="#ffffff"></path></svg>
        {{ header }}
        <span @click="$emit('cancel')">
          <svg v-show="!darkMode" t="1647067672823" class="icon exit" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2928" width="16" height="16"><path d="M975.069283 746.176494a162.756163 162.756163 0 0 1-230.134685 230.134686L511.97742 743.399162 279.065402 976.31118A162.756163 162.756163 0 0 1 48.930717 746.176494L281.842734 513.241896 48.930717 280.329879a162.688423 162.688423 0 0 1 0-230.112106 162.711003 162.711003 0 0 1 230.134685 0l232.912018 232.889438L744.912018 50.217773a162.711003 162.711003 0 1 1 230.134685 230.112106L742.134686 513.241896l232.934597 232.934598z" fill="#424242" p-id="2929"></path></svg>
          <svg v-show="darkMode" t="1647067672823" class="icon exit" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2928" width="16" height="16"><path d="M975.069283 746.176494a162.756163 162.756163 0 0 1-230.134685 230.134686L511.97742 743.399162 279.065402 976.31118A162.756163 162.756163 0 0 1 48.930717 746.176494L281.842734 513.241896 48.930717 280.329879a162.688423 162.688423 0 0 1 0-230.112106 162.711003 162.711003 0 0 1 230.134685 0l232.912018 232.889438L744.912018 50.217773a162.711003 162.711003 0 1 1 230.134685 230.112106L742.134686 513.241896l232.934597 232.934598z" fill="#ffffff" p-id="2929"></path></svg>
        </span>
      </div>
      <div class="message-body">
        <slot>{{message}}</slot>
      </div>
      <div class="message-footer">
        <div>
          <slot name="footer"></slot>
        </div>
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
  },
  computed: {
    darkMode() {
      console.log(this.$store.state)
      return this.$store.state.isDarkMode
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
  width: 300px;
  height: 200px;
  z-index: 99999;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px #ccc;
  background-color: #fff;
  border-radius: 2px;
}
.dark-message-box {
  background-color: #424242;
  color: #fff;
}

.message-header {
  height: 40px;
  padding: 10px;
  vertical-align: middle;
}
.message-header .exit {
  float: right;
}
.icon {
  margin-right: 5px;
}
.message-body {
  height: 100px;
  padding: 20px;
}
.message-footer {
  height: 60px;
}
.message-footer>div{
  float: right;
  padding: 10px;
}

.fade-leave-active {
  transition: all .4s;
}
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -52%);
}
</style>