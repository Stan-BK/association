<template>
  <ul class="route-list">
    <li v-for="item of routes" :key="item.path">
      <nuxt-link v-if="!item.child" :to="item.path">{{item.name}}</nuxt-link>
      <template v-else>
        <nuxt-link to="" class="has-sub-route">{{item.name}}</nuxt-link>
        <div class="sub-route">
          <div v-for="subitem of item.child" :key="subitem.path">
            <nuxt-link :to="`/subarea/${subitem.path}`">{{subitem.name}}</nuxt-link>
          </div>
        </div>
      </template>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    adminRoutes: {
      type: Array,
      default:()=>[]
    }
  },
  data() {
    return {
      routes: []
    }
  },
  beforeMount() {
    // 判断是否传入了管理员开发页面路由
    this.routes = this.adminRoutes.length ? this.adminRoutes : this.$store.state.routes
  }
}
</script>
<style scoped>
.route-list {
  height: 100%;
  float: left;
}
.route-list li{
  position: relative;
  width: 60px;
  height: 100%;
  float: left;
}
.route-list li>a {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-decoration: none;
  line-height: 60px;
  color: #424242;
  transition: color .2s;
  text-align: center;
}
.route-list li>a:hover {
  color:deepskyblue;
}
.route-list li::after {
  position: absolute;
  content: "";
  width: 1px;
  height: 20px;
  display: block;
  right: 0;
  top: 20px;
  background-color: rgba(42, 42, 42, 0.2);
  z-index: 999;
}
.route-list li:last-child::after {
  content:"";
  width: 0;
  height: 0;
}
.sub-route {
  position: absolute;
  background-color: #fff;
  width: 240px;
  top: 120%;
  border-radius: 4px;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  transition: opacity .5s;
  opacity: 0;
  box-shadow: 1px 1px 10px #7bccf120, -1px 1px 10px #7bccf120;
  pointer-events: none;
}
.has-sub-route:hover+.sub-route {
  pointer-events: auto;
  opacity: 1;
}
.has-sub-route:hover+.sub-route div {
  height: 60px;
}
.has-sub-route:hover+.sub-route a {
  height: 60px;
}
.sub-route:hover {
  pointer-events: auto;
  opacity: 1;
}
.sub-route:hover div {
  height: 60px;
}
.sub-route:hover a {
  height: 60px;
}
.sub-route::before {
  position: absolute;
  content: "";
  display: block;
  top: -19px;
  left: 4px;
  border: 10px solid transparent;
  border-bottom-color: #fff;
}
.sub-route::after {
  position: absolute;
  content: "";
  display: block;
  width: 240px;
  height: 12px;
  top: -12px;
  left: 0;
  background-color: transparent;
}
.sub-route div {
  height: 0px;
  transition: all .5s;
}
.sub-route a {
  display: inline-block;
  width: 120px;
  height: 0px;
  text-decoration: none;
  line-height: 60px;
  color: #424242;
  transition: all .2s;
  overflow: hidden;
  text-align: center;
}
.sub-route a:hover {
  color:deepskyblue;
}
@media screen and (max-width: 767px) {
  .sub-route {
    left: -100px;
  }
  .sub-route::before {
    left: 50%;
  }
}
</style>