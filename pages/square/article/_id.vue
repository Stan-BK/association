<template>
  <div>
      <Article :article="article"></Article>
  </div>
</template>
<script>
export default {
  data() {
    return {
      article: {
        avatar: '',
        title: '',
        content: '',
        comment: '',
        association: {
          avatar: '',
          name: ''
        }
      }
    }
  },
  beforeMount() {
    this.$axios.$get(`/api/article/${this.$route.params.id}`).then(res => {
      this.article = res
    })
  }
}
</script>