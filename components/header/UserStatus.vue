<template>
  <div class="user-status">
    <template v-if="!!$store.state.user.user_id">
      <avatar :src="$store.state.user.avatar" :width="'60px'"  :style="{ transform: 'scale(.8, .8)' }"></avatar>
      <div class="sub-item">
        <div class="user" :title="$store.state.user.nickname">{{$store.state.user.nickname}}</div>
        <nuxt-link to="">设置</nuxt-link>
        <nuxt-link to="" @click.native="logOut">登出</nuxt-link>
      </div>
    </template>
    <template v-else>
        <div class="sign">
        <nuxt-link :class="['register', isHover ? 'login-hover' : '']" to="/login">注册</nuxt-link>
        <nuxt-link class="login" to="/login" @mouseenter.native="loginHover" @mouseleave.native="loginBlur">登录</nuxt-link>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isHover: false
    }
  },
  methods: {
    logOut() {
      localStorage.removeItem('authorization')
      this.$store.commit('user/LOGOUT')
      this.$router.push('/login')
    },
    loginHover() {
      this.isHover = true
    },
    loginBlur() {
      this.isHover = false
    }
  }
}
</script>
<style scoped>
.user-status {
  height: 100%;
  float: right;
}
.sign {
  position: relative;
  width: 100px;
  height: 100%;
  perspective: 150px;
}
.sign a {
  position: absolute;
  display: inline-block;
  height: 50px;
  margin: 5px 0;
  width: 50px;
  text-decoration: none;
  line-height: 50px;
  text-align: center;
  color: deepskyblue;
  border: 1px solid rgba(69, 190, 240, 0.1);
  border-left-color: transparent;
  border-right-color: transparent;
  transition: all .4s;
}
.register {
  left: 0;
  transform: rotate3d(0, 1, 0, -30deg);
  box-shadow: 1px 1px 3px rgba(142, 227, 238, 0.4), 1px -1px 3px rgba(142, 227, 238, 0.4);
}
.register:hover {
  transform: rotate3d(0, 0, 0, 0deg);
  width: 100px;
  box-shadow: none;
  border: transparent;
  text-shadow: 1px 1px 3px rgba(0, 191, 255, 0.5);
  box-shadow: 1px 1px 3px rgba(142, 227, 238, 0.4), -1px -1px 3px rgba(142, 227, 238, 0.4);
}
.register:hover+.login {
  transform: rotate3d(0, 1, 0, 90deg);
  opacity: 0;
}
.login {
  left: 50px;
  transform: rotate3d(0, 1, 0, 30deg);
  box-shadow: -1px 1px 3px rgba(142, 227, 238, 0.4), -1px -1px 3px rgba(142, 227, 238, 0.4);
}
.login:hover {
  transform: rotate3d(0, 0, 0, 0deg);
  width: 100px;
  left: 0;
  box-shadow: none;
  border: transparent;
  text-shadow: 1px 1px 3px rgba(0, 191, 255, 0.5);
  box-shadow: 1px 1px 3px rgba(142, 227, 238, 0.4), -1px -1px 3px rgba(142, 227, 238, 0.4);
}
.login-hover {
  transform: rotate3d(0, 1, 0, -90deg);
  opacity: 0;
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