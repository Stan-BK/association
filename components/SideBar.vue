<template>
  <div class="side-bar">
    <ul class="bar-list">
      <li v-for="item of bar_item" :key="item">{{item}}</li>
    </ul>
    <div class="carousel" @mouseenter="stopCarousel" @mouseleave="runCarousel">
      <div v-for="(item, index) of carousel_item" :key="item" class="carousel-item" :style="{ backgroundColor: item }" :class="{ 'active-class': activeItem === index }">{{item}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bar_item: ['特别关注', '消息', '收藏', '设置'],
      carousel_item: ['red', 'green', 'yellow', 'pink'],
      activeItem: 0,
      t: undefined
    }
  },
  mounted() {
    this.runCarousel()
  },
  methods: {
    runCarousel() {
      this.run(() => {
        if (this.activeItem === this.carousel_item.length - 1){
          this.activeItem = 0
        } else {
          this.activeItem++
        }
      })
    },
    stopCarousel() {
      clearTimeout(this.t)
    },
    run(cb) {
      const _self = this
      _self.t = setTimeout(() => {
        cb()
        _self.run(cb)
      }, 3000)
    }
  }
}
</script>
<style scoped>
.side-bar {
  width: 100%;
  height: 100%;
}
.bar-list {
  width: 100%;
}
.bar-list li {
  position: relative;
  height: 30px;
  padding: 10px;
  padding-left: 25px;
  line-height: 10px;
  margin-bottom: 2px;
  transition: all .2s;
  cursor: pointer;
  color: #666;
}
.bar-list li:hover {
  font-size: 1.1em;
  color: #7bccf1;
}
.bar-list li::after {
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  left: 0;
  bottom: -2px;
  background: linear-gradient(to right, #fff, #7bccf1, #fff);
}
.carousel {
  position: relative;
  width: 100%;
  padding: 10px;
  height: calc(100% - 147px);
  margin-top: 20px;
}
.carousel-item {
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  text-align: center;
  cursor: pointer;
  border-radius: 2px;
}
.active-class {
  display: block;
  animation: fade-in .2s;
}
@keyframes fade-in {
  0%,
  60% {
    opacity: .6;
  }
  70% {
    opacity: .7;
  }
  80% {
    opacity: .8;
  }
  90% {
    opacity: .9;
  }
  100% {
    opacity: 1;
  }
}
</style>