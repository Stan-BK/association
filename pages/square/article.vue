<template>
  <div>
    <transition name="fade">
      <search v-show="$route.name === 'square-article'" type="article" placeholder="搜索文章" style="left: 50%; transform: translate(-50%, 0);margin-bottom: 20px;" @search="isSearch = true"></search>
    </transition>
    <nuxt-child :articles="$store.state.article.articles"></nuxt-child>
    <Intersection :is-need-intersection="isNeedIntersection" :type="'article'"></Intersection>
  </div>
</template>
<script>
export default {
  layout: 'base',
  data() {
    return {
      isSearch: false
    }
  },
  computed: {
    isNeedIntersection() {
      return this.$route.name === 'square-article' && !this.isSearch
    }
  },
  beforeMount() {
    this.$store.commit('article/SET_ARTICLES', { isReset: true })
    this.$store.commit('article/SET_COUNT', 0)
  }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>