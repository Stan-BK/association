<template>
  <div class="announcement">
    <div class="exit" @click="returnRoute">
      <svg t="1641711405491" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2296" width="16" height="16"><path d="M768.43584 896a64 64 0 1 1 0 128H192.30784c-84.608 0-143.04-31.104-171.52-93.76-18.816-41.472-21.44-75.328-20.672-165.76L0.30784 736v-448c0-8 0-14.72-0.192-28.48-0.768-90.432 1.856-124.288 20.672-165.76C49.26784 31.104 107.69984 0 192.30784 0h576.128a64 64 0 1 1 0 128H192.30784c-37.952 0-49.216 6.016-55.04 18.688-7.808 17.28-9.728 42.752-9.152 111.68L128.30784 288v448c0 8.512 0 15.424-0.192 29.632-0.64 68.928 1.344 94.4 9.216 111.68 5.76 12.672 17.024 18.688 54.976 18.688h576.128z" p-id="2297" fill="#8a8a8a"></path><path d="M761.65184 268.8a52.48 52.48 0 0 1 36.352 14.848L991.02784 476.16c9.728 9.728 15.36 23.04 15.36 36.352a51.2 51.2 0 0 1-15.36 36.352l-193.536 190.976a51.2 51.2 0 0 1-72.704-0.512 51.2 51.2 0 0 1 0.512-72.704l156.672-154.112-156.672-155.648a51.2 51.2 0 0 1 0-72.704 49.92 49.92 0 0 1 36.352-15.36z" p-id="2298" fill="#8a8a8a"></path><path d="M435.50784 460.8h487.936c28.672 0 51.2 23.04 51.2 51.2 0 28.16-23.04 51.2-51.2 51.2H435.50784c-28.672 0-51.2-23.04-51.2-51.2 0-28.16 22.528-51.2 51.2-51.2z" p-id="2299" fill="#8a8a8a"></path></svg>
    </div>
    <div class="announcement-header">
      <h1 class="title"><span>{{announcement.name}}</span></h1>
      <div class="announcement-author">
        <div :class="['collect', isCollected ? 'collected': '' ]" @click="collectAnnouncement">书签</div>
        <avatar :src="announcement.association.avatar" :width="'30px'"></avatar>
        {{announcement.association.name}}
      </div>
    </div>
    <div class="announcement-content">
      <iframe :srcdoc="announcement.content" frameborder="0" width="100%"></iframe>
    </div>
    <div class="announcement-footer">
      <div class="input-wrap">
        <my-input placeholder="请输入内容" btn="'has'"></my-input>
      </div>
      <div class="utils-wrap">      
        <i class="fa fa-thumbs-up" aria-hidden="true" @click="thumb"></i>
        <i class="fa fa-star fa-star-o" aria-hidden="true" @click="star"></i>
      </div>
    </div>
    <div class="announcement-comment">
      <div class="comment">
        <slot name="comment"><h3 style="text-align: center;">当前无评论</h3></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    announcement: {
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
      isCollected: false
    }
  },
  mounted() {
    setTimeout(() => {
    console.log(this.announcement)
    }, 2000)
  },
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
    collectAnnouncement() {
      this.isCollected = !this.isCollected
    },
    returnRoute() {
      this.$router.back()
    }
  }
}
</script>
<style scoped>
.announcement {
  position: relative;
  width: 100%;
  background-color: rgb(236, 250, 253);
  margin-bottom: 20px;
  border-radius: 2px;
  box-shadow: 2px 2px 10px rgb(86, 204, 238);
  overflow: hidden;
}

.announcement-header {
  position: relative;
  width: 100%;
  padding: 20px 50px 10px;
  margin-bottom: 20px;
  z-index: 9;
}
.announcement-header::before {
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
.announcement-header::after {
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
.announcement-header:hover::before {
  border-top-right-radius: 80px;
}
.announcement-header:hover::after {
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
.exit:hover + .announcement-header::before {
  border-top-right-radius: 80px;
}
.exit:hover + .announcement-header::after {
  width: 72px;
  height: 72px;
  box-shadow: -1px 1px 5px #eee;
}

.announcement-author {
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

.announcement-content {
  width: 100%;
  padding: 20px 30px;
  margin-bottom: 20px;
}

.announcement-footer {
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

.announcement-comment {
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