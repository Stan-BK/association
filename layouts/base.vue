<template>
  <div>
    <header>
      <logo></logo>
      <route></route>
      <user-status></user-status>
    </header>
    <main> 
      <aside>
        <side-bar></side-bar>
      </aside>
      <article>
        <nuxt />
        <div ref="bottom" v-show="isNeedIntersection">
          <div class="load" v-if="!$store.state.article.noArticle">
            <i class="fa fa-circle-o-notch fa-spin fa-3x" aria-hidden="true"></i>
          </div>
          <div class="end" v-else>
            已经到底了~
          </div>
        </div>
      </article>
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
    }
  },
  computed: {
    isNeedIntersection() {
      return this.$route.name === 'square' || this.$route.name === 'subarea'
    }
  },
  mounted() {
    this.$store.commit('SET_firstIn_false') // 用户刷新页面时，重置底部加载功能
    const loadContent = () => {
      if (this.$store.state.article.noArticle === true) {
        unobserveElement(this.$refs.bottom) // 没有更多文章时取消Intersection Observer
      } else if (this.$route.name === 'square' || this.$route.name === 'subarea') {
        if (this.$store.state.firstIn) { // 从其他页面跳转入多文章页面避免底部加载
          this.$store.commit('SET_firstIn_false')
        } else {
          setTimeout(() => {
            this.$store.dispatch('article/getArticles').then(() => {
              setTimeout(() => {
                if (this.$store.state.isBottom) { // 如果当前内容为填充满视口，则继续请求内容
                  loadContent()
                }
              }, 500)
            })
          }, 500)
        }
      }
    }
    observeElement(loadContent, this.$refs.bottom, null, this.$store)
  },
  methods: {
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