<template>
  <div>
    <no-data v-if="articles.length === 0">空空如也~快去逛逛吧</no-data>
    <item-display v-else item-type="article" :item-set="articles" href="collect/"></item-display>
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