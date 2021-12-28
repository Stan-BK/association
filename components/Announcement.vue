<template>
  <div class="announcement">
    <div class="announcement-header">
      <h1><slot name="title"></slot></h1>
      <div class="info">
        <slot name="info"></slot>
        <button v-if="isFollow" class="follow" @click="changeFollowStatus()">未关注</button>
        <button v-else class="follow" @click="changeFollowStatus()">已关注</button>
      </div>
    </div>
    <div class="announcement-content">
      <slot></slot>
    </div>
    <div class="announcement-footer">
      <i class="fa fa-bell-o fa-bell-slash-o" @click="subscribe($event)"></i>
      <span>人响应</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    info: {
      type: Object,
      default() {
        return {
          follow: true
        }
      }
    }
  },
  data() {
    return {
      isFollow: this.info.follow
    }
  },
  methods: {
    subscribe(e) {
      const tar = e.target
      const index = tar.className.indexOf('fa-bell-slash-o')

      if (index === -1) {
        tar.className += ' fa-bell-slash-o'
      } else {
        tar.className = tar.className.slice(0, index - 1)
      }
    },
    changeFollowStatus() {
      this.isFollow = !this.isFollow
    }
  }
}
</script>
<style scoped>
.announcement {
  width: 100%;
  min-width: 500px;
  background-color: #fff;
  padding: 30px;
  margin-bottom: 20px;
  border-radius: 2px;
  box-shadow: 2px 2px 10px rgb(86, 204, 238);
}

.announcement-header {
  position: relative;
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
}

.announcement-content {
  width: 100%;
  padding: 20px;
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

.info {
  position: absolute;
  height: calc(100% - 40px);
  right: 20px;
  top: 20px;
  vertical-align: middle;
}
</style>