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
          <div class="load" v-if="!noMoreInfo">
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
import observerBottom from '../utils/Intersection'
import { Route, Logo, UserStatus } from '@/components/header'

export default {
  components: {
    Route,
    Logo,
    UserStatus
  },
  data() {
    return {
      noMoreInfo: false
    }
  },
  computed: {
    isNeedIntersection() {
      return this.$route.name === 'square' || this.$route.name === 'subarea'
    }
  },
  mounted() {
    this.$store.commit('SET_FIRSTIN_FALSE') // 用户刷新页面时，重置底部加载功能
    observerBottom(() => {
      if (this.$route.name === 'square' || this.$route.name === 'subarea') {
        if (this.$store.state.firstIn && !this.noMoreInfo) { // 从其他页面跳转入多文章页面取消首次底部加载
          this.$store.commit('SET_FIRSTIN_FALSE')
        } else {
          setTimeout(() => {
            this.$store.commit('article/SET_ARTICLES')
          }, 1000)
          // this.noMoreInfo = true
        }
      }
    }, this.$refs.bottom, null)
  },
  methods: {
    showroute() {
      console.log(this.$route)
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
}
</style>