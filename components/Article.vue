<template>
  <div class="article">
    <my-message-box v-show="isToLogin" :message="'登录即可收藏，是否前往登录？'" @cancel="isToLogin = false">
      <template #footer>
        <my-button style="background-color: deepskyblue;" @click="$router.push('/login')">确认</my-button>
      </template>
    </my-message-box>
    <div class="exit" @click="returnRoute">
      <svg t="1641711405491" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2296" width="16" height="16"><path d="M768.43584 896a64 64 0 1 1 0 128H192.30784c-84.608 0-143.04-31.104-171.52-93.76-18.816-41.472-21.44-75.328-20.672-165.76L0.30784 736v-448c0-8 0-14.72-0.192-28.48-0.768-90.432 1.856-124.288 20.672-165.76C49.26784 31.104 107.69984 0 192.30784 0h576.128a64 64 0 1 1 0 128H192.30784c-37.952 0-49.216 6.016-55.04 18.688-7.808 17.28-9.728 42.752-9.152 111.68L128.30784 288v448c0 8.512 0 15.424-0.192 29.632-0.64 68.928 1.344 94.4 9.216 111.68 5.76 12.672 17.024 18.688 54.976 18.688h576.128z" p-id="2297" fill="#8a8a8a"></path><path d="M761.65184 268.8a52.48 52.48 0 0 1 36.352 14.848L991.02784 476.16c9.728 9.728 15.36 23.04 15.36 36.352a51.2 51.2 0 0 1-15.36 36.352l-193.536 190.976a51.2 51.2 0 0 1-72.704-0.512 51.2 51.2 0 0 1 0.512-72.704l156.672-154.112-156.672-155.648a51.2 51.2 0 0 1 0-72.704 49.92 49.92 0 0 1 36.352-15.36z" p-id="2298" fill="#8a8a8a"></path><path d="M435.50784 460.8h487.936c28.672 0 51.2 23.04 51.2 51.2 0 28.16-23.04 51.2-51.2 51.2H435.50784c-28.672 0-51.2-23.04-51.2-51.2 0-28.16 22.528-51.2 51.2-51.2z" p-id="2299" fill="#8a8a8a"></path></svg>
    </div>
    <div class="article-header">
      <h1 class="title"><span>{{article.name}}</span></h1>
      <div class="article-author">
        <div :class="['collect', isCollected ? 'collected': '' ]" @click="collectArticle">收藏</div>
        <avatar :src="article.association.avatar" :width="'30px'"></avatar>
        {{article.association.name}}
      </div>
    </div>
    <div class="article-content">
      <iframe :srcdoc="article.content" frameborder="0" width="100%"></iframe>
    </div>
    <hr style="width: 100%; height: 4px; background: linear-gradient(to right, #fff, rgba(170, 170, 170, .1), #fff); border: none">
    <div class="article-comment">
      <comment topic-type="article" :topic-id="article.article_id"></comment>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => {
        return {
          title: '文章标题',
          content: '文章内容',
          comment: '评论',
          author: '作者',
          avatar: '',
          photo: '...'
        }
      }
    }
  },
  data() {
    return {
      isToLogin: false,
      collectDebounce: false
    }
  },
  computed: {
    isCollected() {
      return this.$store.state.user.article_collect?.split(',').includes(String(this.article.article_id))
    }
  },
  methods: {
    collectArticle() {
      if (this.$store.state.user.user_id) {
        if (!this.collectDebounce) {
          this.collectDebounce = true
          this.$axios[`$${ this.isCollected ? 'delete' : 'put' }`]
            (`/api/article/collect?article_id=${ this.article.article_id }`)
            .then(res => {
              this.$message({
                type: this.isCollected ? 'info' : 'success',
                message: this.isCollected ? '取消收藏' : '收藏成功'
              })
              this.$store.commit("user/SET_article_collect", res)
              this.collectDebounce = false
            }).catch(() => {
              this.$message({
                type: 'error',
                message: '收藏失败'
              })
              this.collectDebounce = false
            })
        }
      } else {
        this.isToLogin = true
      }
    },
    returnRoute() {
      this.$router.back()
    }
  }
}
</script>
<style scoped>
.article {
  position: relative;
  width: 100%;
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 2px;
  box-shadow: 2px 2px 10px rgb(86, 204, 238);
  overflow: hidden;
}

.article-header {
  position: relative;
  width: 100%;
  padding: 20px 50px 10px;
  margin-bottom: 20px;
  z-index: 9;
}
.article-header::before {
  position: absolute;
  display: block;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #fff;
  transition: all .5s;
  z-index: -1;
  box-shadow: 1px -1px 2px #eee;
}
.article-header::after {
  position: absolute;
  display: block;
  content: "";
  width: 0px;
  height: 0px;
  top: 0;
  right: 0;
  border:1px solid #eee;
  border-right-color: transparent;
  border-top-color: transparent;
  transition: all .5s;
}
.article-header:hover::before {
  border-top-right-radius: 80px;
}
.article-header:hover::after {
  width: 72px;
  height: 72px;
  box-shadow: -1px 1px 5px #eee;
}
.title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-bottom: 5px;
}
.title span {
  position: relative;
}
.title span::after {
  position: absolute;
  content: "";
  display: block;
  width: 90%;
  height: 2px;
  background-color: rgba(170, 170, 170, .4);
  bottom: -5px;
  left: 5%;
}

.exit {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  right: 0px;
  top: 0px;
  cursor: pointer;
  transition: all .2s;
  opacity: 0;
  z-index: 99;
}
.exit:hover {
  opacity: 1;
}
.exit:hover + .article-header::before {
  border-top-right-radius: 80px;
}
.exit:hover + .article-header::after {
  width: 72px;
  height: 72px;
  box-shadow: -1px 1px 5px #eee;
}

.article-author {
  margin: 10px 0;
}
.collect {
  position: absolute;
  width: 20px;
  height: 80px;
  background-color: grey;
  left: 20px;
  color: #eee;
  line-height: 30px;
  white-space: pre-wrap;
  text-align: center;
  font-size: .8em;
  top: 0;
  transition: all .4s;
  cursor: pointer;  
}
.collected {
  color: transparent;
  height: 128px;
  background-color: brown;
}
.collected::after {
  border-bottom-color: rgb(236, 250, 253) !important;
}
.collect::after {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  left: 0;
  bottom: 0;
  border: 10px solid transparent;
  border-bottom-color: #fff;
}
.avatar {
  display: inline-block;
  width: 30px;
  height: 30px;
  overflow: hidden;
  vertical-align: middle;
  margin-right: 10px;
}
.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.article-content {
  width: 100%;
  padding: 20px 30px;
  margin-bottom: 20px;
}

.input-wrap {
  float: left;
  width: calc(60%);
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