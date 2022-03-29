<template>
  <div class="admin-page" :class="$store.state.isDarkMode ? 'dark' : ''">
    <header>
      <logo></logo>
      <route :routes="routes"></route>
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
          name: '社团',
          path: '/super_admin/association'
        },
        {
          name: '用户',
          path: '/super_admin/edit'
        },
        {
          name: '资源',
          path: '/super_admin /source'
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
    const user = this.$store.state.user.user_id
    if (user) {
      user !== 1 && this.$router.replace('/')
    } else if (localStorage.getItem('authorization')) {
      this.$store.dispatch('user/getInfo').then(res => {
        if (res.user_id !== 1) {
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