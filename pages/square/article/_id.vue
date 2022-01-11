<template>
  <div>
      <Article :article="article">
        <template #title>
          {{article.title}}
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
  layout: 'base',
  data() {
    return {
      article: {
        title: '文章标题',
        content: '文章内容',
        comment: '评论'
      }
    }
  }
}
</script>