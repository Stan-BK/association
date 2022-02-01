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
    this.$axios.get('/api/article').then(res => {
      this.articles = res.data.data
    })
  }
}
</script>