<template>
  <div>
    <transition name="fade">
      <search v-show="$route.name === 'square-announcement'"  type="announcement" placeholder="搜索公告" style="left: 50%; transform: translate(-50%, 0);margin-bottom: 20px;" @search="isSearch = true"></search>
    </transition>
    <nuxt-child :announcements="$store.state.announcement.announcements"></nuxt-child>
    <Intersection :is-need-intersection="isNeedIntersection" :type="'announcement'"></Intersection>
  </div>
</template>
<script>
export default {
  layout: "base",
  data() {
    return {
      isSearch: false
    }
  },
  computed: {
    isNeedIntersection() {
      return this.$route.name === 'square-announcement' && !this.isSearch
    }
  },
  beforeMount() {
    this.$store.commit("announcement/SET_ANNOUNCEMENTS", { isReset: true });
    this.$store.commit("announcement/SET_COUNT", 0);
  }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>