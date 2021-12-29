<template>
  <div>
    <header>
      <logo></logo>
      <route></route>
      <user-status></user-status>
    </header>
    <main> 
      <aside>
        <side-bar></side-bar>
      </aside>
      <article>
        <nuxt />
      </article>
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
    }
  }
}
</script>
<style scoped>
header {
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: rgb(236, 250, 253);
  box-shadow: 0px 2px 10px #7bccf1;
  z-index: 99;
}
main {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 30px;
  padding-top: 90px;
  overflow: auto;
}
aside {
  position: sticky;
  top: 0px;
  width: 200px;
  height: 100%;
  max-height: 600px;
  padding: 10px;
  background-color: rgb(236, 250, 253);
  border-radius: 2px;
  box-shadow: 2px 2px 10px rgb(86, 204, 238);
}
article {
  position: absolute;
  width: calc(100% - 260px);
  top: 90px;
  left: 230px;
  padding-right: 30px;    
  padding-left: 60px;       
}
</style>