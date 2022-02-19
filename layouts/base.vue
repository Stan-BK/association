<template>
  <div>
    <header>
      <div class="head">
        <logo></logo>
        <nav>
          <route></route>
        </nav>
        <user-status></user-status>
      </div>
      <div class="background"></div>
    </header>
    <message></message>
    <aside>
      <side-bar></side-bar>
    </aside>
    <main ref="main" @scroll="ifScroll"> 
      <article>
        <nuxt />
        <!-- <intersection :is-need-intersection="isNeedIntersection"></intersection> -->
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
      oldRouteName: ''
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
  mounted() {
    // 当渲染该布局组件时，根据用户token进行用户信息请求
    if (localStorage.getItem('authorization') && !this.$store.state.user.user_id) {
      this.$store.dispatch('user/getInfo')
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
    ifScroll() { // 判断页面滚动距离，调整“回到顶部”按钮的显示
      clearTimeout(this.scrollTime)
      if (this.$refs.main.scrollTop > 0) {
        this.hasScroll = true
      } else {
        this.scrollTime = setTimeout(() => {
          this.hasScroll = false
        }, 1000)
      }
    }
  }
}
</script>
<style scoped>
.head {
  position: relative;
  width: 100%;
  height: 60px;
  top: 0;
  background-color: rgb(236, 250, 253);
  box-shadow: 0px 2px 10px #7bccf1;
  z-index: 99;
}
.background {
  height: 100px;
  background: linear-gradient(rgb(236, 250, 253), #fff0);
}
main {
  position: relative;
  width: 100%;
  height: calc(100vh - 160px);
  padding: 30px;
  overflow: auto;
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
  top: 30px;
  padding-right: 30px;    
  padding-left: 60px;       
}

.controller {
  position: fixed;
  width: 50px;
  height: 50px;
  top: 60%;
  right: 30px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 1px 1px 5px rgb(159, 221, 244);
  transition: background-color .5s;
  border-radius: 50%;
  cursor: pointer;
}
.controller:hover {
  background-color: #eee;
}
@media screen and (max-width: 767px) {
  nav {
    right: 15px;
  }
}

@media screen and (max-width: 767px) {
  .controller{
    right: 15px;
  }
}
</style>