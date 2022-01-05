<template>
  <div>
    <article-card :article="$store.state.article.articles_data[0]"></article-card>
    <template v-for="(item, index) of articles">
      <nuxt-link :key="index"  :to="'/article/' + item.id">
        <article-card :article="item"></article-card>
      </nuxt-link>
    </template>
  </div>
</template>
<script>
export default {
  layout: 'base',
  transition: 'test',
  data() {
    return {
      articles: this.$store.state.article.articles
    }
  },
}
</script>