<template>
  <div>
    <no-data v-if="articles.length === 0">--当前协会还未发布过文章--</no-data>
    <item-display v-else item-type="article" :item-set="articles" :href="$route.path + '/'"></item-display>
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