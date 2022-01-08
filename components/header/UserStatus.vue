<template>
  <div class="user-status">
    <div class="avatar">
      <div v-if="!imgLoad" class="no-avatar"><i class="fa fa-user-o" aria-hidden="true"></i></div>
      <img v-else :src="$store.state.user_avatar" @error="imgLoadError" />
    </div>
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
.avatar {
  display: flex;
  float: left;
  width: 60px;
  height: 100%;
  padding: 2px;
  align-items: center;
  justify-content: center;
}
.avatar img {
  width: 80%;
  height: 80%;
  border-radius: 20%;
}
.no-avatar {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
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