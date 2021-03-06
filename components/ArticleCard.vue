<template>
  <div class="article-card">
    <slot></slot>
    <div class="photo">
      <div class="shadow"></div>
      <div v-if="!imgLoad" class="no-photo">No photo</div>
      <img v-else :src="article.avatar" @error="imgLoadError" />
    </div>
    <div class="article-info">
      <div class="title"><span>{{article.name}}</span></div>
      <div ref="content" class="content">{{article.abstract}}</div>
      <div class="author">
        <avatar :src="article.association.avatar" :width="'30px'"></avatar>
        {{article.association.name}}
      </div>
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
    this.imgLoad = !!this.article.avatar
  },
  methods: {
    imgLoadError() {
      this.imgLoad = false
    }
  }
}
</script>
<style scoped>
.article-card {
  position: relative;
  display: inline-block;
  width: 30%;
  height: 300px;
  min-width: 200px;
  max-width: 300px;
  margin: 0 10px 10px;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgb(86, 204, 238);
  border-radius: 3px;
  transition: all .5s;
  overflow: hidden;
  color: #666;
}
.article-card::after {
  position: absolute;
  display: block;
  content: "文章";
  width: 200px;
  height: 20px;
  text-align: center;
  right: -78px;
  bottom: 15px;
  color: #eee;
  background-color: rgb(61, 184, 240);
  transform: rotate(-45deg);
}
.article-card:hover {
  box-shadow: 2px 2px 10px rgb(38, 201, 247), -2px 2px 10px rgb(38, 201, 247);
}
.article-card:hover .article-info {
  height: 150px;
}
.article-card:hover .content {
  height: 50px;
}
.article-card:hover .shadow {
  opacity: .4;
}
.article-card:hover .photo {
  transform: scale(1.1, 1.1);
  filter: blur(1px);
}

.no-photo {
  display: flex;
  width: 100%;
  height: 100%;
  color: #eee;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
}

.photo {
  position: relative;
  width: 100%;
  height: 200px;
  transition: all .5s;
}
.photo img {
  width: 100%;
  height: 100%;
}
.shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0;
  transition: all .5s;
}

.article-info {
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
</style>