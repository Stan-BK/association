<template>
  <div class="admin-page" :class="$store.state.isDarkMode ? 'dark' : ''">
    <header>
      <logo></logo>
      <route :routes="routes"></route>
      <div class="toggle-wrap">
        <toggle @change-state="toggleDarkMode"></toggle>
      </div>
      <user-status></user-status>
    </header>
    <message></message>
    <main>
      <nuxt style="height: 100%;"></nuxt>
    </main>
  </div>
</template>
<script>
import { Route, Logo, UserStatus } from '@/components/header'
export default {
  components: {
    Route,
    Logo,
    UserStatus
  },
  data() {
    return {
      routes: [
        {
          name: '管理',
          path: '/admin'
        },
        {
          name: '编辑',
          path: '/admin/edit'
        },
        {
          name: '资源',
          path: '/admin/source'
        }
      ]
    }
  },
  watch: {
    '$store.state.user.user_role'(role) {
      role !== 2 && this.$router.replace('/')
    }
  },
  beforeMount() {
    const user = this.$store.state.user
    if (user.user_role) {
      if (user.user_role === 1 || user.user_id === 1) this.$router.replace('/')
    } else if (localStorage.getItem('authorization')) {
      this.$store.dispatch('user/getInfo').then(res => {
        if (res.user_role !== 2 || res.user_id === 1) {
          this.$message({
            type: 'error',
            message: '权限错误'
          })
          setTimeout(() => {
            this.$router.replace('/')
          }, 1000)
        }
      }).catch(error => {
        this.$message({
          type: 'error',
          message: error
        })
        this.$store.commit('user/LOGOUT')
        setTimeout(() => {
          this.$router.replace('/')
        }, 1000)
      })
    } else {
      this.$router.replace('/')
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  },
  methods: {
    toggleDarkMode(isDarkMode) { // 切换白天/夜间模式
      this.$store.commit('SET_darkMode')
    }
  }
}
</script>
<style scoped>
.admin-page {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  transition: background-color .6s;
}
.dark {
  background-color: rgb(42,42,42);
}
.dark header {
  background: linear-gradient(#000, rgba(42, 42, 42, 0.774), #000);
}
.toggle-wrap {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  transform: scale(.8, .8);
}
@media screen and (max-width: 376px) {
  .toggle-wrap {
    width: 30px;
    transform: scale(.6, .6);
  }
}
header {
  position: absolute;
  width: 100%;
  height: 60px;
  top: 0;
  z-index: 99;
  transition: all .6s;
  background: linear-gradient(#fff, rgba(221, 221, 221, 0.774), #fff);
  box-shadow: 0px 2px 20px #eee;
}
main {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: auto;
  padding: 30px;
  padding-top: 120px;
  transition: all .5s;
}
</style>