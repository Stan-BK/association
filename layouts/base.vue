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
      <div class="background shadow" :style="{ backgroundImage: `url(http://source.geminikspace.com/cat.jpg)` }">
      </div>
      <div class="background">
        <img src="@/assets/cat.jpg" alt="">
      </div>
      <banner></banner>
      <article>
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
    routeName() {
      let route = this.$route.name.split('-')[1]
      route = route ? route[0].toUpperCase() + route.slice(1) : ''
      return route
    }
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
    }
  },
  destroyed() {
    this.$store.commit('SET_fromHome')
    this.$nuxt.$loading.start()
    this.$nuxt.$loading.finish()
  },
  mounted() {
    this.$store.commit('SET_adminRoute')
    this.opacityTimer = setTimeout(() => { // 一秒后将导航栏设置为透明以显示完整背景
      this.opacity = 0
    }, 2000)
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
      if (this.$refs.main.scrollTop > 0) {
        this.hasScroll = true
      } else {
        this.scrollTime = setTimeout(() => {
          this.hasScroll = false
        }, 1000)
      }

      // 根据滚动高度调整顶部导航栏透明度
      const tar = e.target
      this.opacity = (tar.scrollTop / 150).toFixed(2)
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
  height: 260px;
  left: 0;
  top: -60px;
  overflow: hidden;
  text-align: center;
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
@media screen and (max-width: 540px) {
  .background {
    
    background-size: 100% 100%;
  }
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