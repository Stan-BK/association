<template>
  <div class="announcement-card">
    <slot></slot>
    <div class="photo">
      <i class="fa fa-bell-o fa-5x bell" aria-hidden="true"></i>
    </div>
    <div class="announcement-info">
      <div class="title"><span>{{announcement.name}}</span></div>
      <div ref="content" class="content">{{announcement.abstract}}</div>
      <div class="author">
        <avatar :src="announcement.association.avatar" :width="'30px'"></avatar>
          {{announcement.association.name}}
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
          name: 'title',
          abstract: 'abstract'
        }
      }
    }
  },
  data() {
    return {
      imgLoad: false
    }
  },
  created() {
    this.imgLoad = !!this.announcement.avatar
  },
  methods: {
    imgLoadError() {
      this.imgLoad = false
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
  max-width: 300px;
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
.announcement-card:hover .title {
  transform: translate3d(-100%, 0, 0);
}
.announcement-card:hover .content {
  transform: translate3d(0, 0, 0);
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
  transition: all .5s;
}
.title span {
  font-size: 1.3em;
  font-weight: bold;
}

.content {
  position: absolute;
  width: 100%;
  height: 35px;
  bottom: 55px;
  transition: all .5s;
  left: 0;
  padding: 0 10px;
  transform: translate3d(100%, 0, 0);
  overflow: hidden;
  font-size: .8em;
}

.author {
  width: 100%;
  height: 30px;
  margin-top: 20px;
}
</style>