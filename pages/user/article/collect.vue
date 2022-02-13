<template>
  <div>
    <nuxt-child :articles="$store.state.article.articles"></nuxt-child>
  </div>
</template>
<script>
export default {
  layout: 'base',
  data() {
    return {
      articles: []
    }
  },
  beforeMount() {
    this.$store.commit('article/SET_ARTICLES', { isReset: true })
    this.$store.dispatch('article/getCollectedArticles').then(res => {
      this.articles = this.$store.state.article.articles
      if (res) {
        this.$message({
          type: 'info',
          message: '无收藏文章'
        })
      }
    })
  }
}
</script>