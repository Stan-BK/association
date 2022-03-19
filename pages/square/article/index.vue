<template>
  <div>
    <no-data v-if="articles.length === 0">--广场内还没有文章喔--</no-data>
    <template v-else v-for="(item, index) of articles">
      <nuxt-link :key="index"  :to="'article/' + item.article_id">
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
      default: () => {
        return []
      }
    }
  }
}
</script>