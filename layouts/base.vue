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
        <div v-show="isNeedIntersection" ref="bottom">
          <div v-if="!$store.state.article.noArticle" class="load">
            <i class="fa fa-circle-o-notch fa-spin fa-3x" aria-hidden="true"></i>
          </div>
          <div v-else class="end">
            已经到底了~
          </div>
        </div>
      </article>
      <nav v-if="isNeedIntersection">
        <p class="bell">
          <i class="fa fa-bell-o bell" aria-hidden="true"></i>
        </p>
        <p class="bell-tag">公告</p>
        <div :class="['to-top', isToTop ? 'to-top-animation': '']" :style="{ 'display': hasScroll ? 'flex': 'none' }" title="回到顶部" @click="toTop">
          <i class="fa fa-rocket" style="color: rgb(99, 215, 237)" aria-hidden="true"></i>
        </div>
      </nav>
    </main>
  </div>
</template>
<script>
import { observeElement, unobserveElement } from '../utils/Intersection'
import { Route, Logo, UserStatus } from '@/components/header'

export default {
  components: {
    Route,
    Logo,
    UserStatus
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
    }
  },
  mounted() {
    this.$store.commit('SET_firstIn_false') // 用户刷新页面时，重置底部加载功能
    const loadContent = () => {
      if (this.$store.state.article.noArticle === true) {
        unobserveElement(this.$refs.bottom) // 没有更多文章时取消Intersection Observer
      } else if (this.$route.name.slice(0, 6) === 'square' || this.$route.name === 'subarea') {
        if (this.$store.state.firstIn) { // 从其他页面跳转入多文章页面避免底部加载
          this.$store.commit('SET_firstIn_false')
        } else {
          setTimeout(() => {
            this.$store.dispatch('article/getArticles').then(() => {
              setTimeout(() => { // 延时等待视图更新
                if (this.$store.state.isBottom) { // 如果当前内容为填充满视口，则递归继续请求内容
                  loadContent()
                }
              }, 500)
            })
          }, 500)
        }
      }
    }
    observeElement(loadContent, this.$refs.bottom, null, this.$store) // 启用Intersection Observer
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
  height: 200px;
  top: 50%;
  right: 30px;
  /* overflow: hidden; */
}
.bell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  overflow: hidden;
}
.bell-tag {
  width: 30px;
  height: 30px;
  text-align: center;
  overflow: hidden;
}
.to-top {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  transform: rotate(-45deg);
  border: 1px solid #fff;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 50%;
  transition: background-color .5s;
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
.load {
  position: relative;
  text-align: center;
  color: #6667;
}
.end {
  position: relative;
  width: 100%;
  height: 20px;
  bottom: 20px;
  color: #6666;
  padding: 30px 0;
  text-align: center;
  user-select: none;
}
</style>