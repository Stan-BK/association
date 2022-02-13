<template>
  <div class="side-bar">
    <ul v-if="!!$store.state.user.user_id" class="bar-list">
      <li v-for="item of bar_item" :key="item.path"><nuxt-link :to="item.path">{{item.name}}</nuxt-link></li>
    </ul>
    <div v-else class="login-bar" @mouseenter="toLoginForm" @mouseleave="fromLoginForm">
      <div class="info" :style="{
          opacity: isToLogin ? 0 : 1,
          zIndex: isToLogin ? 0 : 9
        }">
        <h3>更多功能</h3>
        <h3>登录体验</h3>
      </div>
      <div class="info login" :style="{
          opacity: isToLogin ? 1 : 0,
          zIndex: isToLogin ? 9 : 0
        }">
        <nuxt-link to="/login?role=admin"><h3>管理员登录</h3></nuxt-link>
        <nuxt-link to="/login?role=normal"><h3>用户登录</h3></nuxt-link>
      </div>
      <div class="transition">
        <p v-for="(item, index) of item" :key="index" :style="{
            left: (Math.random() * 50) + '%',
            top: index * 6 + '%'
          }"></p>
      </div>
      
    </div>
    <div class="carousel" @mouseenter="stopCarousel" @mouseleave="runCarousel">
      <div v-for="(item, index) of carousel_item" :key="item" class="carousel-item" :style="{ backgroundColor: item }" :class="{ 'active-class': activeItem === index }">{{item}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bar_item: [
        {
          name: '特别关注',
          path: ''
        },
        {
          name: '消息',
          path: ''
        }, 
        {
          name: '收藏',
          path: '/user/article/collect'
        }, 
        {
          name: '设置',
          path: ''
        }],
      carousel_item: ['red', 'green', 'yellow', 'pink'],
      activeItem: 0,
      t: undefined,
      item: Array.from({ length: 15 }),
      isToLogin: false
    }
  },
  mounted() {
    this.runCarousel()
  },
  beforeDestroy() {
    this.stopCarousel()
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
    },
    toLoginForm() {
      this.isToLogin = true
      this.item = Array.from({ length: 15 }) // 更新数组以实现随机过渡效果
    },
    fromLoginForm() {
      this.isToLogin = false
    }
  }
}
</script>
<style scoped>
.side-bar {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.bar-list {
  width: 100%;
}
.bar-list li {
  position: relative;
  height: 30px;
  padding: 0 10px;
  padding-left: 25px;
  margin-bottom: 2px;
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
.bar-list li a {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  cursor: pointer;
  color: #666;
  transition: all .2s;
  line-height: 30px;
}
.bar-list li a:hover {
  font-size: 1.1em;
  color: #7bccf1;
}

.login-bar {
  position: relative;
  width: 100%;
  padding: 10px;
  height: 127px;
}
.info { 
  position: absolute;
  width: 90%;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  transition: all 1s ease-in;
}
.info h3 {
  font-style: italic;
  text-align: center;
  background: linear-gradient(to right, #b3d7f8, #7beaea 50%, #3db8f1 90%);
  background-clip: text;
  color: transparent;
}
.login a {
  text-decoration: none;
}
.login h3 {
  font-style: italic;
  text-align: center;
  background: linear-gradient(to right, #b3d7f8, #7beaea 50%, #3db8f1 90%);
  background-clip: text;
  color: transparent;
  transition: all .4s;
}
.login h3:hover {
  transform: scale(1.2, 1.2);
}
.transition {
  position: absolute;
  top: 0;
  left: 150%;
  width: 300%;
  height: 100%;
  transition: all 1.2s ease-in-out;
}
.transition p {
  position: absolute;
  width: 100%;
  height: 5px;
  background: linear-gradient(to right, #b3d7f8, #7beaea 50%, #87d4f8 90%);
}
.login-bar:hover .transition {
  left: -500%;
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
  width: calc(100% - 20px);
  height: 100%;
  top: 0;
  left: 10px;
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