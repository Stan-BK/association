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
  mounted() {
    this.getAssociationArticles().then(res => {
      this.articles = res
    })
  },
  methods: {
    getAssociationArticles() {
      const path = this.$route.path.replace('/subarea/', '')
      return new Promise((resolve, reject) => {
        this.$axios.$get(`/api/${path}`).then(res => {
          const articles = res
          resolve(articles)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
</script>