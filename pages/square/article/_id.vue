<template>
  <div>
      <Article :article="article">
        <template #title>
          {{article.name}}
        </template>
         {{article.content}}
        <template #comment>
          {{article.comment}}
        </template>
      </Article>
  </div>
</template>
<script>
export default {
  data() {
    return {
      article: {
        title: '',
        content: '',
        comment: ''
      }
    }
  },
  beforeMount() {
    this.$axios.get(`/api/article/${this.$route.params.id}`).then(res => {
      this.article =  res.data.data[0]
    })
  }
}
</script>