<template>
  <div class="user-status">
    <avatar :src="$store.state.user_avatar" :width="'60px'"  :style="{ transform: 'scale(.8, .8)' }"></avatar>
    <div class="user">{{$store.state.user_name}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgLoad: false
    }
  },
  created() {
    this.imgLoad = !!this.$store.state.user_avatar
  },
  methods: {
    imgLoadError() {
      this.imgLoad = false
    }
  }
}
</script>
<style scoped>
.user-status {
  height: 100%;
  float: right;
}
.user {
  display: inline-block;
  height: 60px;
  line-height: 60px;
  padding: 0 20px 0 10px;
}

@media screen and (max-width: 767px) {
  .user {
    display: none;
  }
}
</style>