<template>
  <div>
    <no-data v-if="articles.length === 0">--当前协会还未发布过文章喔--</no-data>
    <template v-else v-for="(item, index) of articles">
      <nuxt-link :key="index"  :to="$route.path + '/' + item.article_id">
        <article-card :article="item"></article-card>
      </nuxt-link>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    articles: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>