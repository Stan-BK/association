<template>
  <div class="article">
    <div class="article-header">
      <slot name="title"><h1>This is Title</h1></slot>
    </div>
    <div class="article-content">
      <slot><p>This is content</p></slot>
    </div>
    <div class="article-footer">
      <div class="input-wrap">
        <my-input></my-input>
      </div>
      <div class="utils-wrap">      
        <i class="fa fa-thumbs-up" aria-hidden="true" @click="thumb($event)"></i>
        <i class="fa fa-star fa-star-o" aria-hidden="true" @click="star($event)"></i>
      </div>
    </div>
    <div class="article-comment">
      <div class="comment">
        <slot name="comment"><h3 style="text-align: center;">当前无评论</h3></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    thumb(e) {
      const tar = e.target
      const index = tar.className.indexOf('fa-thumbs-o-up')
      if (index === -1) {
        tar.className += ' fa-thumbs-o-up'
      } else {
        tar.className = tar.className.slice(0, index - 1)
      }
    },
    star(e) {
      const tar = e.target
      const index = tar.className.indexOf('fa-star-o')
      if (index === -1) {
        tar.className += ' fa-star-o'
      } else {
        tar.className = tar.className.slice(0, index - 1)
      }
    },
  }
}
</script>
<style scoped>
.article {
  width: 100%;
  min-width: 500px;
  background-color: #fff;
  padding: 30px;
  margin-bottom: 20px;
  border-radius: 2px;
  box-shadow: 2px 2px 10px rgb(86, 204, 238);
}

.article-header {
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
}

.article-content {
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
}

.article-footer {
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  user-select: none;
  margin-bottom: 20px;
}
.input-wrap {
  float: left;
  width: calc(60%);
}
.utils-wrap {
  float: left;
  width: 40px;
  margin-left: 10px;
}
.fa {
  cursor: pointer;
}

.article-comment {
  display: flex;
  widows: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
}
.comment {
  width: calc(60%);
}
</style>