<template>
  <div class="notice">
    <no-data v-if="notice.length === 0" color="#66666610">没有新的消息通知</no-data>
    <template v-else>
      <div v-for="item of notice" :key="item.notice_id" @click="toNoticePlace(item)" class="notice-item">
        <div style="float: left">
          <avatar style="vertical-align: middle; margin:0 5px;" :src="item.from.user.avatar" width="50px" height="50px"></avatar>
        </div>
        <div class="notice-content">
          <span>{{ item.from.user.nickname }}  回复了你:</span> 
          <span>{{ item.from.content }}</span>
          <div v-if="!item.hasRead" class="not-read"></div>
        </div>
        <div class="notice-operate">
          <my-button class="delete-btn" @click.stop="deleteNotice(item.notice_id)">删除</my-button>
          <span style="margin: 0px 4px; float: right;">{{ getTime(item.from.createdAt) }}</span>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import NoData from '~/components/NoData.vue'

export default {
  components: { NoData },
  layout: 'base',
  data() {
    return {
      notice: [],
      hasRead: ''
    }
  },
  beforeMount() {
    this.getNotice()
  },
  methods: {
    getTime(data) {
      const time = new Date(data)
      let year = new Date().getFullYear()
      if (time.getFullYear() === year) {
        year = ''
      }
      return `${year ? year + '-' : ''}${time.getMonth() + 1}-${time.getDate()}`
    },
    getNotice() {
      this.$axios.$get('/api/notice').then(res => {
        let hasRead = res.notice_sum ? res.notice_sum.split(',') : []
        hasRead = new Set(hasRead)
        this.hasRead = hasRead
        this.notice = res.notice.map(item => {
          item.hasRead = hasRead.has(String(item.notice_id))
          return item
        })
        this.$store.commit('user/SET_has_new_notice', res.hasNewNotice)
      })
    },
    toNoticePlace(notice) {
      const from = notice.from
      this.hasRead.add(notice.notice_id)
      const hasNewNotice = !(this.hasRead.size === this.notice.length)
      const noticeSum = Array.from(this.hasRead.values()).join(',')
      this.$axios.$post(`/api/notice?notice_sum=${noticeSum}`).then(res => {
        this.$store.commit('user/SET_has_new_notice', hasNewNotice)
      })
      this.$router.push(`/square/${from.topic_type}/${from.topic_id}`)
    },
    deleteNotice(noticeId) {      
      this.$axios.$delete(`/api/notice?notice_id=${noticeId}`).then(() => {
        this.getNotice()
      })
    }
  }
}
</script>
<style scoped>
.notice {
  width: 100%;
  padding: 40px;
  min-height: 400px;
  background-color: rgb(236, 250, 253);
  border-radius: 5px;
}
.notice-item {
  position: relative;
  width: 100%;
  height: 52px;
  border: 1px solid rgba(128, 128, 128, 0.582);
  border-radius: 4px;
  overflow: hidden;
  transition: all .4s;
  cursor: pointer;
  user-select: none;
  margin-bottom: 30px;
}

.delete-btn {
  float: right;
  width: 0px;
  height: 50px;
  color: rgba(255, 0, 0, 0.616);
  background-color: #f56c6c70;
  border: #f56c6c70;
  transition: all .4s;
  overflow: hidden;
  white-space: nowrap;
  padding: 0;
  margin: 0;
}
.notice-item:hover {
  box-shadow: 1px 1px 10px rgba(128, 128, 128, 0.514);
}
.notice-item:hover .delete-btn {
  width: 60px;
}
.notice-item:hover .notice-content {
  width: calc(100% - 180px);
}
.notice-content {
  position: relative;
  float: left;
  width: calc(100% - 120px);
  height: 50px;
  line-height: 50px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  transition: all .4s;
}
.notice-operate {
  float: right; 
  min-width: 60px;
  height: 50px;
  line-height: 50px;
}
.not-read {
  position: absolute;
  width: 5px;
  height: 5px;
  right: 0px;
  top: 10px;
  background-color: red;
  border-radius: 50%;
}
</style>