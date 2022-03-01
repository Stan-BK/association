<template>
  <div>
    <template v-for="(item, index) of articles">
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