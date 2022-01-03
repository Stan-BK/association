<template>
  <div class="announcement-card">
    <div class="photo">
      <i class="fa fa-bell-o fa-5x bell" aria-hidden="true"></i>
    </div>
    <div class="announcement-info">
      <div class="title"><span>{{announcement.title}}</span></div>
      <div ref="content" class="content">{{announcement.content}}</div>
      <div class="author">
        <div class="avatar">
          <div v-if="!announcement.avatar" class="no-avatar"><i class="fa fa-user-o" aria-hidden="true"></i></div>
          <img :src="announcement.avatar">
        </div>
          {{announcement.author}}
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
          author: '作者',
          title: '公告',
          content: '公告内容'
        }
      }
    }
  }
}
</script>
<style scoped>
.announcement-card {
  position: relative;
  display: inline-block;
  width: 30%;
  height: 300px;
  min-width: 200px;
  max-width: 225px;
  margin: 10px 10px;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgb(86, 204, 238);
  border-radius: 3px;
  transition: all .5s;
  overflow: hidden;
  color: #666;
}
.announcement-card::after {
  position: absolute;
  display: block;
  content: "公告";
  width: 200px;
  height: 20px;
  text-align: center;
  right: -78px;
  bottom: 15px;
  color: #eee;
  background-color: rgb(61, 184, 240);
  transform: rotate(-45deg);
}
.announcement-card:hover {
  box-shadow: 2px 2px 10px rgb(38, 201, 247), -2px 2px 10px rgb(38, 201, 247);
}
.announcement-card:hover .photo {
  animation: rotate ease-in-out .6s .3s 1 ;
}
.announcement-card:hover .bell {
  color: #fff;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  20% {
    transform: rotate(15deg);
  }
  40% {
    transform: rotate(-12deg);
  }
  60% {
    transform: rotate(9deg);
  }
  80% {
    transform: rotate(-6deg);
  }
  100% {
    transform: rotate(0);
  }
}

.photo {
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
  transition: all .5s;
}
.bell {
  color: #eee;
  transition: all .5s;
}

.announcement-info {
  position: absolute;
  width: 100%;
  height: 100px;
  padding: 10px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  transition: all .5s;
}
.title {
  width: 100%;
  height: 30px;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.title span {
  font-size: 1.3em;
  font-weight: bold;
}

.content {
  width: 100%;
  height: 0px;
  margin-top: 10px;
  transition: all .5s;
  line-height: 25px;
  overflow: hidden;
  font-size: .8em;
}

.author {
  width: 100%;
  height: 30px;
  margin-top: 10px;
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
.no-avatar {
  display: flex;
  width: 100%;
  height: 100%;
  color: #eee;
  align-items: center;
  justify-content: center;
  font-size: .2em;
  color: #424242;
}
</style>