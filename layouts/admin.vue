<template>
  <div class="admin-page" :class="isDarkMode ? 'dark' : ''">
    <header>
      <logo></logo>
      <route :routes="routes"></route>
      <div class="toggle-wrap">
        <toggle @change-state="toggleDarkMode"></toggle>
      </div>
      <user-status></user-status>
    </header>
    <main>
      <nuxt></nuxt>
    </main>
  </div>
</template>
<script>
import { Route, Logo, UserStatus } from '@/components/header'
export default {
  components: {
    Route,
    Logo,
    UserStatus,
  },
  data() {
    return {
      isDarkMode: false,
      routes: [
        {
          name: '编辑',
          path: './edit'
        },
        {
          name: '文章',
          path: './article'
        }
      ]
    }
  },
  methods: {
    toggleDarkMode(isDarkMode) { // 切换白天/夜间模式
    console.log(isDarkMode)
      this.isDarkMode = isDarkMode
    }
  }
}
</script>
<style>
.admin-page {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  transition: all .6s;
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