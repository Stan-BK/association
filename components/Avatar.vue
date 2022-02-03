<template>
  <div class="avatar" :style="{
      width: width,
      height: height
    }">
    <div v-if="!imgSrc" class="no-avatar"><i class="fa fa-user-o" aria-hidden="true"></i></div>
    <img v-else :src="src" @error="imgLoadError" />
  </div>  
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  data() {
    return {
      imgSrc: this.src
    }
  },
  methods: {
    imgLoadError() {
      this.imgSrc = ''
    }
  }
}
</script>
<style scoped>
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
  align-items: center;
  justify-content: center;
}
</style>