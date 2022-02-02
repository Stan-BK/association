<template>
  <div>
    <nuxt-child :articles="$store.state.article.articles"></nuxt-child>
  </div>
</template>
<script>
export default {
  layout: 'base',
  beforeMount() {
    this.$store.commit('article/SET_ARTICLES', { isReset: true })
    this.$store.commit('article/SET_COUNT', 0)
  }
}
</script>