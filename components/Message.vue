<template>
  <div class="message" :style="{ top: top, left: left }">
    <template v-for="item of arr">
      <div :class="['info', 'showUp', item.type]" :key="item">
        <svg v-if="item.type === 'success'" t="1642150464069" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2152" width="20" height="20"><path d="M510.107082 0C228.488568 0 0.191459 228.297109 0.191459 509.913817 0.191459 791.530527 228.488568 1019.827635 510.107082 1019.827635 791.725594 1019.827635 1020.017285 791.530527 1020.017285 509.913817 1020.017285 228.297109 791.725594 0 510.107082 0L510.107082 0ZM410.902284 770.518774 409.764366 769.377244 408.622835 770.518774 168.529307 530.430664 248.958453 449.997904 409.764366 610.798397 771.252096 249.310666 851.681244 329.739812 410.902284 770.518774 410.902284 770.518774Z" p-id="2153" fill="#4AC3F0"></path></svg>
        <svg v-else-if="item.type === 'error'" t="1642150972964" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5259" width="20" height="20"><path d="M512 0C228.693333 0 0 228.693333 0 512 0 795.306665 228.693333 1024 512 1024 795.306665 1024 1024 795.306665 1024 512 1024 228.693333 795.306665 0 512 0L512 0ZM694.613335 774.826665 508.586667 599.04 334.506667 785.066665 242.346667 698.026665 416.426667 512 252.586667 356.693333 339.626667 264.533333 503.466667 419.84 658.773335 256 750.933335 343.04 597.333335 506.88 781.653335 682.666665 694.613335 774.826665 694.613335 774.826665Z" p-id="5260" fill="#DD365E"></path></svg>
        <svg v-else t="1642151423468" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6789" width="20" height="20"><path d="M512 173c45.9 0 90.4 9 132.3 26.7 40.5 17.1 76.8 41.6 108.1 72.9 31.2 31.2 55.8 67.6 72.9 108.1C843 422.6 852 467.1 852 513s-9 90.4-26.7 132.3c-17.1 40.5-41.6 76.8-72.9 108.1-31.2 31.2-67.6 55.8-108.1 72.9C602.4 844 557.9 853 512 853s-90.4-9-132.3-26.7c-40.5-17.1-76.8-41.6-108.1-72.9-31.2-31.2-55.8-67.6-72.9-108.1C181 603.4 172 558.9 172 513s9-90.4 26.7-132.3c17.1-40.5 41.6-76.8 72.9-108.1 31.2-31.2 67.6-55.8 108.1-72.9C421.6 182 466.1 173 512 173m0-60c-220.9 0-400 179.1-400 400s179.1 400 400 400 400-179.1 400-400-179.1-400-400-400z" fill="#bfbfbf" p-id="6790"></path><path d="M672 483H352c-16.6 0-30 13.4-30 30s13.4 30 30 30h320c16.6 0 30-13.4 30-30s-13.4-30-30-30z" fill="#bfbfbf" p-id="6791"></path></svg>
        <span>{{ item.message }}</span>
      </div>
    </template>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'message',
  props: {
    top: {
      type: String,
      default: '80px'
    },
    left: {
      type: String,
      default: 'calc(50% - 100px)'
    }
  },
  data() {
    return {
      isShow: false,
      arr: []
    }
  },
  created() {
    Vue.prototype.$message = this.showUp.bind(this)
  },
  methods: {
    showUp(content) {
      let { type } = content
      const { message } = content
      type = type || 'success'
      this.arr.push({
        message, 
        type
      })
      setTimeout(() => {
        this.arr.shift()
      }, 4000)
    }
  }
}
</script>
<style scoped>
.message {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 200px;
  top: 80px;
  left: calc(50% - 75px);
  z-index: 9999;
}
.showUp {
  animation: scroll-in .2s 0s 1 forwards linear, scroll-out .5s 3.5s 1;
}
@keyframes scroll-in {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes scroll-out {
  0% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(-100vh);
    height: 40px;
    margin-bottom: 10px;
  }
  100% {
    transform: translateY(-100vh);
    height: 0px;
    margin-bottom: 0px;
  }
}
.info {
  width: 200px;
  height: 40px;
  left: calc(50% - 100px);
  transition: all .1s;
  z-index: 999;
  background-color: #fff;
  border-radius: 3px;
  margin-bottom: 10px;
}
.info .icon {
  vertical-align: middle;
  margin: 0 10px;
}
.info span {
  display: inline-block;
  color: rgb(191, 191, 191);
  height: 100%;
  line-height: 40px;
  text-shadow: 1px 1px 4px #ccc;
  font-size: .8em;
}
.success {
  background-color: rgba(101, 217, 237, .6);
  border: 1px solid rgb(101, 217, 237);
  box-shadow: 1px 1px 2px rgba(101, 217, 237, .6);
}
.success span {
  color: #eee;
}
.error {
  background-color: rgba(253, 139, 139, .6);
  border: rgb(253, 139, 139);
  box-shadow: 1px 1px 2px rgb(253, 139, 139);
}
.error span {
  color: #eee;
}
.normal {
  background-color: rgba(238, 238, 238, 0.842);
  border: rgb(226, 228, 228);
  box-shadow: 1px 1px 2px rgb(226, 228, 228);
}
.normal span {
  color: #4242428c;
}
</style>