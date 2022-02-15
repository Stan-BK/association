<template>
  <div>
    <nuxt-child :articles="$store.state.article.articles"></nuxt-child>
    <Intersection :is-need-intersection="isNeedIntersection" :type="'article'"></Intersection>
  </div>
</template>
<script>
export default {
  layout: 'base',
  computed: {
    isNeedIntersection() {
      return this.$route.name === 'square-article'
    }
  },
  beforeMount() {
    this.$store.commit('article/SET_ARTICLES', { isReset: true })
    this.$store.commit('article/SET_COUNT', 0)
  }
}
</script>