<template>
  <div class="avatar" :style="{
      width: width,
      height: height
    }">
    <div v-if="!imgSrc" class="no-avatar"><svg t="1645608845640" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3442" width="26" height="26"><path d="M835.2 765.5c-69-71.3-155.8-118.5-250.8-137.4 49.6-31.7 82.7-87.1 82.7-150.2 0-98.2-79.9-178.2-178.2-178.2s-178.2 79.9-178.2 178.2c0 63.1 33.1 118.5 82.7 150.2-94.9 18.9-181.7 66.1-250.7 137.4-17.8 18.4-17.8 48.3 0 66.7C234.4 926.9 357.3 979 489 979c131.7 0 254.6-52.1 346.2-146.8 17.8-18.4 17.8-48.3 0-66.7zM379.6 477.9c0-60.3 49.1-109.4 109.4-109.4s109.4 49.1 109.4 109.4S549.3 587.3 489 587.3s-109.4-49-109.4-109.4zM489 910.2c-106 0-205.4-39.4-282.1-111.4 76.7-72 176.1-111.4 282.1-111.4 106 0 205.3 39.4 282.1 111.4-76.7 72-176.1 111.4-282.1 111.4z" fill="#424242" p-id="3443"></path><path d="M922.9 551.8c-17.8 0-32.7-13.7-34.1-31.4C872.7 313.9 699.6 150.8 489 150.8S105.3 313.9 89.2 520.4c-1.4 17.8-16.3 31.4-34.1 31.4-20.2 0-36-17.3-34.4-37.4C39.8 272.8 242.5 82 489 82s449.2 190.8 468.3 432.4c1.6 20.1-14.2 37.4-34.4 37.4z" fill="#424242" p-id="3444"></path></svg></div>
    <img v-else :src="imgSrc" @error="imgLoadError" />
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
  watch: {
    src(newValue) {
      this.imgSrc = newValue
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