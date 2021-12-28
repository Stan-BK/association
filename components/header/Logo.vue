<template>
  <div class="logo">
    <nuxt-link to="/">
      <span class="text">社团风采展示系统</span>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.logo {
  float: left;
}
.logo a {
  width: 200px;
  height: 60px;
  text-decoration: none;
  color: deepskyblue; 
}
.text { 
  display: block;
  width: 100%;
  height: 60px;
  font: italic 25px sans-serif; 
  line-height: 60px;
}
</style>