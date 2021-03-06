<template>
  <div>
    <header :style="{ backgroundColor: `rgba(236, 250, 253, ${opacity})`, boxShadow: `0px 2px 10px rgba(123, 204, 241, ${ opacity })` }">
      <logo></logo>
      <nav>
        <route :routes="$store.state.routes"></route>
      </nav>
      <user-status></user-status>
    </header>
    <message></message>
    <aside>
      <side-bar></side-bar>
    </aside>
    <main ref="main" @scroll="ifScroll">
      <template v-if="hasBackground">
        <img ref="shadow" class="background shadow" :src="$store.state.association.background" @error="loadBackground">
        <div class="background">
          <img ref="background" :src="$store.state.association.background"  alt="" @error="loadBackground">
          <h1 v-if="$route.path.includes('square')">社团广场</h1>
        </div>
      </template>
      <banner></banner>
      <article :style="{ top: hasBackground ? '280px' : '100px' }">
        <nuxt />
      </article>
    </main>
    <div class="controller">
      <route-change v-if="isNeedRouteChange"></route-change>
      <to-top :is-to-top="isToTop" :has-scroll="hasScroll" @click.native="toTop"></to-top>
    </div>
  </div>
</template>
<script>
import { Route, Logo, UserStatus } from '@/components/header'
import ToTop from '~/components/ToTop.vue'
import Message from '~/components/Message.vue'

export default {
  components: {
    Route,
    Logo,
    UserStatus,
    ToTop,
    Message
},
  data() {
    return {
      isToTop: false, // 是否开启“回到顶部”按钮的动画
      hasScroll: false, // 是否有滚动距离
      scrollTime: undefined, // “回到顶部”按钮显隐计时器
      opacityTimer: undefined, // 设置“导航栏”透明计时器
      oldRouteName: '',
      opacity: 1,
    }
  },
  computed: {
    isNeedRouteChange() { // 是否需要切换文章、公告页面组件
      const route = this.$route.name.split('-')
      const len = route.length
      if (route[len - 1] !== 'id') {
        if (route.includes('article') || route.includes('announcement')) {
          return true
        }
      }
      return false
    },
    hasBackground() {
      return this.$route.name.includes('square') ? 'square' 
                                          : this.$route.name.includes('subarea') ? 'subarea'
                                                                                 : false
    },
  },
  watch: {
    $route(newRoute, oldRoute) {
      const scrollTop = sessionStorage.getItem('pageScrollTop') // 获取当前路由上一个路由的滚动距离
      if (scrollTop != null && newRoute.name === this.oldRouteName) { 
        setTimeout(() => {
          this.$refs.main.scrollTo({
            left: 0,
            top: Number(scrollTop),
            behavior: 'smooth'
          })
        }, 1000)
      }
      this.oldRouteName = oldRoute.name
      sessionStorage.setItem('pageScrollTop', this.$refs.main.scrollTop)
      if (newRoute.name.includes('square')) {
        this.$store.commit('association/SET_reset_background')
      }
    },
    hasBackground: {
      handler(newValue) {
        if (newValue) {
          this.opacity = 1
          this.opacityTimer = setTimeout(() => { // 两秒后将导航栏设置为透明以显示完整背景
            this.opacity = 0
          }, 2000)
        } else {
          clearTimeout(this.opacityTimer)
          this.opacity = 1
        }
      },
      immediate: true
    },
    '$store.state.background': {
      handler(newValue) {// 重载src以保证加载失败时触发img标签的onerror事件
        this.$refs.shadow.src = newValue
        this.$refs.background.src = newValue
      }
    }
  },
  destroyed() {
    this.$store.commit('SET_fromHome')
    this.$nuxt.$loading.start()
    this.$nuxt.$loading.finish()
  },
  mounted() {
    this.$store.commit('SET_adminRoute')
    // 当渲染该布局组件时，根据用户token进行用户信息请求
    if (localStorage.getItem('authorization') && !this.$store.state.user.user_id) {
      this.$store.dispatch('user/getInfo').then(() => {
        this.$store.commit('SET_adminRoute')
      }).catch(error => {
        this.$message({
          type: 'error',
          message: error
        })
        this.$store.commit('user/LOGOUT')
      })
    }
  },
  methods: {
    toTop() {
      this.isToTop = true
      this.$refs.main.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      setTimeout(() => {
        this.isToTop = false
      }, 1000)
    },
    ifScroll(e) {
      clearTimeout(this.opacityTimer)
      // 判断页面滚动距离，调整“回到顶部”按钮的显示
      clearTimeout(this.scrollTime)
      if (this._isDestroyed) return
      if (this.$refs.main.scrollTop > 0) {
        this.hasScroll = true
      } else {
        this.scrollTime = setTimeout(() => {
          this.hasScroll = false
        }, 1000)
      }

      if (this.hasBackground) {
        // 根据滚动高度调整顶部导航栏透明度
        const tar = e.target
        this.opacity = (tar.scrollTop / 150).toFixed(2)
      }
    },
    loadBackground() {
      this.$store.commit('association/SET_reset_background')
      console.log(1)
    }
  }
}
</script>
<style scoped>
header {
  position: absolute;
  width: 100%;
  height: 60px;
  top: 0;
  z-index: 99;
  transition: all .6s;
}
header:hover {
  background-color: rgb(236, 250, 253) !important;
}
.background {
  position: absolute;
  width: 100vw;
  height: 320px;
  left: 0;
  top: -60px;
  overflow: hidden;
  text-align: center;
  user-select: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.747);
  box-shadow: 1px 1px 10px #fff;
}
.background h1 {
  position: absolute;
  color: rgb(255, 255, 255);
  left: 50%;
  top: 50%;
  transform: translate(-50%, 0);
  text-shadow: 2px 2px 4px white, -2px -2px 4px white;
  letter-spacing: 5px;
}
.shadow {
  filter: blur(10px);
  background-repeat: no-repeat;
  background-size: 200% 200%;
  background-position: center;
}
.background img {
  height: 100%;
  filter: blur(1px);
}
main {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  transition: all .5s;
}

aside {
  position: absolute;
  top: 20%;
  left: 0px;
  width: 200px;
  height: 70%;
  max-height: 600px;
  padding: 10px;
  background-color: rgb(236, 250, 253);
  border-radius: 20px;
  box-shadow: 2px 2px 10px rgb(86, 204, 238);
  z-index: 99;
  transition: all .5s;
  transform: translate3d(-180px, 0, 0);
}
aside::after {
  content: "";
  position: absolute;
  height: 30px;
  top: 50%;
  transform: translate(-5px, -15px) scale(1.1, 1.1);
  right: 0px;
  border: 10px dotted rgb(61, 184, 240);
  border-right: 0px;
  transition: all .2s;
}
aside:hover {
  border-radius: 0 10px 10px 0;
  transform: translate3d(-10px, 0, 0);
}
aside:hover::after {
  border-color: rgb(236, 250, 253);
}
article {
  position: absolute;
  width: 100%;
  left: 0;
  top: 220px;
  padding-right: 30px;    
  padding-left: 60px;       
}

</style>