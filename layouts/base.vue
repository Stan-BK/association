<template>
  <div>
    <header>
      <logo></logo>
      <route></route>
      <user-status></user-status>
    </header>
    <message></message>
    <main ref="main" @scroll="ifScroll"> 
      <aside>
        <side-bar></side-bar>
      </aside>
      <article>
        <nuxt />
        <!-- <intersection :is-need-intersection="isNeedIntersection"></intersection> -->
      </article>
    </main>
    <nav v-if="isNeedIntersection">
      <nuxt-link class="route" :to="toRouteName" :style="{ 'transform': routeName === 'Article' ? 'translate(-50%, 0)' : '' }">
        <svg t="1641537135977" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2306" width="32" height="32"><path d="M293.168 357.349h437.665c18.668 0 33.773-15.106 33.773-33.773 0-18.668-15.106-33.773-33.773-33.773h-437.665c-18.668 0-33.772 15.106-33.772 33.773-0.001 18.668 15.105 33.773 33.772 33.773z" p-id="2307" fill="#3DB8F0"></path><path d="M293.168 545.773h437.665c18.668 0 33.773-15.106 33.773-33.773s-15.106-33.773-33.773-33.773h-437.665c-18.668 0-33.772 15.106-33.772 33.773s15.105 33.773 33.772 33.773z" p-id="2308" fill="#3DB8F0"></path><path d="M293.168 734.163h274.439c18.668 0 33.773-15.106 33.773-33.772 0-18.668-15.106-33.773-33.773-33.773h-274.439c-18.668 0-33.772 15.106-33.772 33.773-0.001 18.668 15.105 33.772 33.772 33.772z" p-id="2309" fill="#3DB8F0"></path><path d="M733.9 92.837h-485.225c-18.668 0-33.772 15.106-33.772 33.772s15.106 33.773 33.772 33.773h485.225c71.537 0 129.716 58.179 129.716 129.716v443.8c0 71.537-58.179 129.716-129.716 129.716h-443.8c-71.537 0-129.716-58.179-129.716-129.716v-437.303c0-18.668-15.106-33.772-33.772-33.772s-33.773 15.106-33.773 33.773v437.303c0 108.773 88.49 197.262 197.262 197.262h443.8c108.773 0 197.262-88.49 197.262-197.262v-443.8c0-108.773-88.49-197.262-197.262-197.262z" p-id="2310" fill="#3DB8F0"></path></svg>
        <svg t="1641441435209" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4886" width="32" height="32"><path d="M342 391.1h24.7v180.4H342z" fill="#3DB8F0" p-id="4887"></path><path d="M404.6 711.5c-0.4 3.7-0.6 7.5-0.6 11.2v70c0 59.7 48.4 108 108 108 59.7 0 108-48.4 108-108v-70c0-3.8-0.2-7.5-0.6-11.2H404.6z m0 0" fill="#3DB8F0" p-id="4888"></path><path d="M512 923.9c-72.3 0-131.1-58.8-131.1-131.1v-70c0-4.5 0.2-9.1 0.7-13.6 1.2-11.8 11.1-20.7 23-20.7h214.9c11.8 0 21.8 8.9 23 20.7 0.5 4.5 0.7 9.1 0.7 13.6v70c-0.1 72.3-58.9 131.1-131.2 131.1z m-84.9-189.3v58.1c0 46.8 38.1 84.9 84.9 84.9 46.8 0 84.9-38.1 84.9-84.9v-58.1H427.1z m148-477.2c-0.8 0-1.6 0-2.4-0.1-12.7-1.3-21.9-12.7-20.6-25.4 0.1-1.4 0.2-2.8 0.2-4.2v-41.1c0-22.2-18.1-40.3-40.3-40.3-22.2 0-40.3 18.1-40.3 40.3v41.1c0 1.4 0.1 2.8 0.2 4.2 1.3 12.7-7.9 24.1-20.6 25.4-12.7 1.3-24.1-7.9-25.4-20.6-0.3-3-0.5-6-0.5-9v-41.1c0-47.7 38.8-86.5 86.5-86.5s86.5 38.8 86.5 86.5v41.1c0 3-0.2 6-0.5 9-1.1 11.9-11.1 20.7-22.8 20.7z m0 0" fill="#3DB8F0" p-id="4889"></path><path d="M756.7 616.9c-12.8 0-23.1-10.3-23.1-23.1V481.3c0-122.2-99.4-221.6-221.6-221.6-122.2 0-221.6 99.4-221.6 221.6v112.5c0 12.8-10.3 23.1-23.1 23.1s-23.1-10.3-23.1-23.1V481.3c0-147.7 120.2-267.8 267.8-267.8 147.7 0 267.9 120.2 267.9 267.8v112.5c0 12.8-10.4 23.1-23.2 23.1z m0 0" fill="#3DB8F0" p-id="4890"></path><path d="M168.3 677h687.5v113.6H168.3z" fill="#3DB8F0" p-id="4891"></path><path d="M855.7 813.7H168.3c-12.8 0-23.1-10.3-23.1-23.1V677c0-12.8 10.3-23.1 23.1-23.1h687.5c12.8 0 23.1 10.4 23.1 23.1v113.6c0 12.8-10.4 23.1-23.2 23.1z m-664.3-46.2h641.3v-67.4H191.4v67.4z m0 0" fill="#3DB8F0" p-id="4892"></path></svg>
      </nuxt-link>
      <to-top :is-to-top="isToTop" :has-scroll="hasScroll" @click.native="toTop"></to-top>
    </nav>
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
    isNeedIntersection() { // 仅多文章页面需要触底加载功能
      return this.$route.name === ('square-article') || this.$route.name === 'square-announcement'
    },
    routeName() {
      let route = this.$route.name.split('-')[1]
      route = route ? route[0].toUpperCase() + route.slice(1) : ''
      return route
    },
    toRouteName() {
      const base = this.$route.name.split('-')[0]
      const route = this.$route.name.split('-')[1]
      const routeList = {
        'article': 'announcement',
        'announcement': 'article'
      }
      return `/${base}/${routeList[route]}`
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
header {
  position: relative;
  width: 100%;
  height: 60px;
  top: 0;
  background-color: rgb(236, 250, 253);
  box-shadow: 0px 2px 10px #7bccf1;
  z-index: 99;
}
main {
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  padding: 30px;
  overflow: auto;
  transition: all .5s;
}

aside {
  position: sticky;
  top: 0px;
  left: 0px;
  width: 200px;
  height: 100%;
  max-height: 600px;
  padding: 10px;
  background-color: rgb(236, 250, 253);
  border-radius: 2px;
  box-shadow: 2px 2px 10px rgb(86, 204, 238);
  z-index: 99;
  transition: all .5s;
}
article {
  position: absolute;
  width: calc(100% - 260px);
  top: 30px;
  left: 230px;
  padding-right: 30px;    
  padding-left: 60px;       
}
nav {
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
nav:hover {
  background-color: #eee;
}
.route {
  position: absolute;
  display: block;
  width: 100px;
  height: 100px;
  overflow: hidden;
  top: 0;
  transition: all .5s;
}
.route .icon {
  width: 50px;
  height: 50px;
  float: left;
  transform: scale(.7, .7);
}

@media screen and (max-width: 767px) {
  nav {
    right: 15px;
  }
  aside {
    border-radius: 20px;
    transform: translate(-212px, 0);
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
    transform: translate(-30px, 0);
  }
  aside:hover::after {
    border-color: rgb(236, 250, 253);
  }
  article {
    width: 100%;
    left: 0;
  }
}
</style>