<template>
  <div>
    <search type="announcement" placeholder="搜索公告" style="left: 50%; transform: translate(-50%, 0);margin-bottom: 20px;" @search="isSearch = true"></search>
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