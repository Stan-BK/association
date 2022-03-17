<template>
  <div>
    <nuxt-child :articles="articles"></nuxt-child>
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
    this.getCollectedArticles()
  },
  methods: {
    getCollectedArticles() {
      this.$axios.$get(`/api/article/collect`).then(res => {
        if (res.length === 0) {
          this.$message({
            type: 'info',
            message: '当前无收藏文章'
          })
        } else {
          this.articles = res
        }
      }).catch(error => {
        this.$message({
          type: 'error',
          message: error
        })
      })
    }
  }
}
</script>