<template>
  <div>
    <header>
      <logo></logo>
      <route></route>
      <user-status></user-status>
    </header>
    <main ref="main" @scroll="ifScroll"> 
      <aside>
        <side-bar></side-bar>
      </aside>
      <article>
        <nuxt />
        <intersection :is-need-intersection="isNeedIntersection"></intersection>
      </article>
      <nav v-if="isNeedIntersection">
        <nuxt-link class="bell" to="/square/announcement">
          <svg t="1641441435209" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4886" width="32" height="32"><path d="M342 391.1h24.7v180.4H342z" fill="#3DB8F0" p-id="4887"></path><path d="M404.6 711.5c-0.4 3.7-0.6 7.5-0.6 11.2v70c0 59.7 48.4 108 108 108 59.7 0 108-48.4 108-108v-70c0-3.8-0.2-7.5-0.6-11.2H404.6z m0 0" fill="#3DB8F0" p-id="4888"></path><path d="M512 923.9c-72.3 0-131.1-58.8-131.1-131.1v-70c0-4.5 0.2-9.1 0.7-13.6 1.2-11.8 11.1-20.7 23-20.7h214.9c11.8 0 21.8 8.9 23 20.7 0.5 4.5 0.7 9.1 0.7 13.6v70c-0.1 72.3-58.9 131.1-131.2 131.1z m-84.9-189.3v58.1c0 46.8 38.1 84.9 84.9 84.9 46.8 0 84.9-38.1 84.9-84.9v-58.1H427.1z m148-477.2c-0.8 0-1.6 0-2.4-0.1-12.7-1.3-21.9-12.7-20.6-25.4 0.1-1.4 0.2-2.8 0.2-4.2v-41.1c0-22.2-18.1-40.3-40.3-40.3-22.2 0-40.3 18.1-40.3 40.3v41.1c0 1.4 0.1 2.8 0.2 4.2 1.3 12.7-7.9 24.1-20.6 25.4-12.7 1.3-24.1-7.9-25.4-20.6-0.3-3-0.5-6-0.5-9v-41.1c0-47.7 38.8-86.5 86.5-86.5s86.5 38.8 86.5 86.5v41.1c0 3-0.2 6-0.5 9-1.1 11.9-11.1 20.7-22.8 20.7z m0 0" fill="#3DB8F0" p-id="4889"></path><path d="M756.7 616.9c-12.8 0-23.1-10.3-23.1-23.1V481.3c0-122.2-99.4-221.6-221.6-221.6-122.2 0-221.6 99.4-221.6 221.6v112.5c0 12.8-10.3 23.1-23.1 23.1s-23.1-10.3-23.1-23.1V481.3c0-147.7 120.2-267.8 267.8-267.8 147.7 0 267.9 120.2 267.9 267.8v112.5c0 12.8-10.4 23.1-23.2 23.1z m0 0" fill="#3DB8F0" p-id="4890"></path><path d="M168.3 677h687.5v113.6H168.3z" fill="#3DB8F0" p-id="4891"></path><path d="M855.7 813.7H168.3c-12.8 0-23.1-10.3-23.1-23.1V677c0-12.8 10.3-23.1 23.1-23.1h687.5c12.8 0 23.1 10.4 23.1 23.1v113.6c0 12.8-10.4 23.1-23.2 23.1z m-664.3-46.2h641.3v-67.4H191.4v67.4z m0 0" fill="#3DB8F0" p-id="4892"></path></svg>
        </nuxt-link>
        <div :class="['to-top', isToTop ? 'to-top-animation': '']" :style="{ 'display': hasScroll ? 'flex': 'none' }" title="回到顶部" @click="toTop">
          <i class="fa fa-rocket" style="color: rgb(61, 184, 240); transform: scale(1.4, 1.4);" aria-hidden="true"></i>
        </div>
      </nav>
    </main>
  </div>
</template>
<script>
import { Route, Logo, UserStatus } from '@/components/header'
import Intersection from '~/components/Intersection.vue'

export default {
  components: {
    Route,
    Logo,
    UserStatus,
    Intersection
  },
  data() {
    return {
      isToTop: false, // 是否开启“回到顶部”按钮的动画
      hasScroll: false, // 是否有滚动距离
      scrollTime: undefined // “回到顶部”按钮显隐计时器
    }
  },
  computed: {
    isNeedIntersection() { // 仅多文章页面需要触底加载功能
      return this.$route.name.slice(0, 6) === 'square' || this.$route.name === 'subarea'
    },
    routeName() {
      let route = this.$route.name.split('-')[1]
      route = route ? route[0].toUpperCase() + route.slice(1) : ''
      return route
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
  width: 200px;
  height: 100%;
  max-height: 600px;
  padding: 10px;
  background-color: rgb(236, 250, 253);
  border-radius: 2px;
  box-shadow: 2px 2px 10px rgb(86, 204, 238);
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
  height: 150px;
  top: 60%;
  right: 30px;
  /* overflow: hidden; */
}
.bell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 50%;
  transition: background-color .5s;
  box-shadow: 1px 1px 5px rgb(159, 221, 244);
  cursor: pointer;
}
.bell:hover {
  background-color: #eee;
}
.to-top {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
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