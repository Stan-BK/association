<template>
  <div class="comment">
    <no-data v-if="commentLen === 0" style="transform: scale(.6, .6);opacity: .4;" color="#424242">--没有评论--</no-data>
    <template v-else>
      <div class="comment-total">共{{commentLen}}条评论</div>
      <div v-for="item in comment" :key="item.comment_id" style="vertical-align: middle;" class="comment-item">
        <div style="float: left">
          <avatar style="vertical-align: middle; margin:0 5px;" :src="item.user.avatar" width="40px" height="40px"></avatar>
        </div>
        <div style="margin: 5px 0px 0px 40px; min-height: 40px; line-height:30px;">
          <span>{{ item.user.nickname }}:</span> 
          <span>{{ item.content }}</span>
          <span style="margin: 4px; float: right;">{{ getTime(item.createdAt) }}</span>
        </div>
        <div class="reply">
          <span @click="replyFormShow(item, $event)">回复</span>
        </div>
        <template v-if="item.children">
          <div v-for="child of item.children" class="comment-item sub-comment-item" :key="child.comment_id">
            <div style="float: left">
              <avatar style="vertical-align: middle; margin:0 5px;" :src="child.user.avatar" width="40px" height="40px"></avatar>
            </div>
            <div style="margin: 5px 0px 0px 40px; min-height: 40px; line-height:30px;">
              <span>{{ child.user.nickname }}:</span> 
              <span>{{ child.content }}</span>
              <span style="margin: 4px; float: right;">{{ getTime(child.createdAt) }}</span>
            </div>
            <div class="reply">
              <span @click="replyFormShow(child, $event)">回复</span>
            </div>
          </div>
        </template>
      </div>
    </template>
    <div v-show="isReply" ref="replyForm" class="reply-form">
      <my-input :placeholder="'回复 ' + replyTo.user.nickname" btn="回复" @click="reply" @input="editReply"></my-input>
    </div>
  </div>
</template>
<script>
import Avatar from './Avatar.vue'
export default {
  components: { Avatar },
  props: {
    topicType: {
      type: String,
      default: 'article'
    },
    topicId: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      comment: {},
      isReply: false,
      replyTo: {  // 初始化回复对象信息
        user: {
          nickname: ''
        }
      },
      replyContent: ''
    }
  },
  computed: {
    commentLen() {
      return Object.keys(this.comment).length
    }
  },
  watch: {
    topicId() {
      this.getComment()
    }
  },
  methods: {
    getComment() {
      this.$axios.$get(`/api/comment?topic_id=${this.topicId}&topic_type=${this.topicType}`).then(res => {
        const comment = {}
        res.forEach(item => {
          comment[item.comment_id] = item
        })
        for (const item of Object.keys(comment)) {
          const parent = comment[item].parent_id
          if (parent) {
            if (!comment[parent].children) {
              comment[parent].children = []
            }
            comment[parent].children.push(comment[item])
            delete comment[item]
          }
        }
        this.comment = comment
      })
    },
    getTime(data) {
      const time = new Date(data)
      let year = new Date().getFullYear()
      if (time.getFullYear() === year) {
        year = ''
      }
      return `${year ? year + '-' : ''}${time.getMonth() + 1}-${time.getDate()}`
    },
    replyFormShow(item, event) {
      this.replyContent = ''
      this.replyTo = item
      if (!this.isReply)
        this.isReply = true
      const target = event.target
      const replyForm = this.$refs.replyForm
      target.parentNode.appendChild(replyForm) // 将评论框移动到相应评论下
    },
    reply() {
      const parentId = this.replyTo.parent_id
      const form = {
        topic_type: this.topicType,
        topic_id: this.topicId,
        parent_id: parentId,
        content: this.replyContent
      }
      this.$axios.$put('/api/comment', form).then(res => {
        this.$message({
          type: 'success',
          message: '评论成功'
        })
        this.getComment()
      })
    },
    editReply(content) {
      this.replyContent = content
    }
  }
}
</script>
<style scoped>
span {
  color: #424242;
}
.comment-total {
  color: #424242;
  transform: scale(.9, .9);
  border-bottom: 1px solid #eee;
  margin-bottom: 2px;
}
.comment-item {
  position: relative;
  width: 100%;
  border-bottom: 1px solid #eee;
  padding-top: 4px;
  padding-bottom: 10px;
}
.comment-item:last-child {
  border-bottom: none;
}
.sub-comment-item {
  width: 90%;
  margin-left: 10%;
}
.reply span{
  display: inline-block;
  transform: translate(50px, 0) scale(.7, .7) ;
  color: deepskyblue; 
  cursor: pointer;
  margin-top: 4px;
}
.reply-form {
  width: 100%;
  height: 50px;
}
</style>