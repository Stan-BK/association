<template>
  <div>
    <header>
      <logo></logo>
      <route></route>
      <user-status></user-status>
    </header>
    <main> 
      <aside>侧边栏</aside>
      <article>
        <nuxt />
      </article>
    </main>
  </div>
</template>
<script>
import Route from '@/components/header/Route.vue'
import Logo from '@/components/header/Logo.vue'
import UserStatus from '@/components/header/UserStatus.vue'
import '@/assets/common.css'
export default {
  components: {
    Route,
    Logo,
    UserStatus
  },
  data() {
    return {
    }
  }
}
</script>
<style scoped>
header {
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgb(233, 233, 233);
  z-index: 99;
}
main {
  width: 100%;
  height: 100vh;
  padding: 30px;
  padding-top: 90px;
  box-sizing: border-box;
}
aside {
  width: 200px;
  height: 100%;
  float: left;
  border: 1px solid grey;
}
article {
  margin-left: 200px;
  padding: 30px;
}
</style>