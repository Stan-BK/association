<template>
  <div class="flex">
    <no-data v-if="articles.length === 0">--广场内还没有文章--</no-data>
    <item-display v-else item-type="article" :item-set="articles" href="article/"></item-display>
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
<style scoped>

.flex {
  display: flex;
  /* justify-content: space-around; */
  gap: 20px;
  flex-wrap: wrap;
}
a {
  width: 100%; 
  height: 100%;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
}
</style>