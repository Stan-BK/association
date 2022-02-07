<template>
  <div class="user-status">
    <avatar :src="$store.state.user.avatar" :width="'60px'"  :style="{ transform: 'scale(.8, .8)' }"></avatar>
    <div class="sub-item">
      <div class="user" :title="$store.state.user.nickname">{{$store.state.user.nickname}}</div>
      <nuxt-link to="">设置</nuxt-link>
      <nuxt-link to="" @click.native="logOut">登出</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    logOut() {
      localStorage.removeItem('authorization')
      this.$store.commit('user/LOGOUT')
      this.$router.push('/login')
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
  position: relative;
  display: inline-block;
  width: 100%;
  height: 0px;
  line-height: 30px;
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #424242;
  font-size: .8em;
  transition: all .5s;
  text-align: right;
}
.user::after {
  position: absolute;
  display: block;
  content: "";
  width: 100%;
  height: 1px;
  left: 0;
  bottom: 0px;
  background-color: rgba(128, 128, 128, .5);
}

.sub-item {
  position: absolute;
  width: 80px;
  right: 20px;
  top: 70px;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 1px 1px 10px #7bccf120, -1px 1px 10px #7bccf120;
  pointer-events: none;
  transition: all .5s;
  opacity: 0;
}

.sub-item::before {
  position: absolute;
  display: block;
  content: "";
  top: -19px;
  right: 4px;
  border: 10px solid transparent;
  border-bottom-color: #fff;
}
.sub-item::after {
  position: absolute;
  display: block;
  content: "";
  width: 100%;
  height: 10px;
  background-color:  transparent;
  top: -10px;
}

.sub-item a {
  display: inline-block;
  width: 100%;
  height: 0px;
  transition: all .2s;
  text-decoration: none;
  color: #424242;
  text-align: center;
  font-size: .8em;
  overflow: hidden;
  line-height: 30px;
}
.sub-item a:hover {
  color:deepskyblue;
}

.user-status:hover .sub-item {
  opacity: 1;
  pointer-events: auto;
}
.user-status:hover .sub-item a {
  height: 30px;
}
.user-status:hover .user {
  height: 30px;
}
.sub-item:hover {
  opacity: 1;
  pointer-events: auto;
}
.sub-item:hover a {
  height: 30px;
}
.sub-item:hover .user {
  height: 30px;
}
</style>