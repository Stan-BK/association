<template>
  <div>
    <nuxt-child :announcements="$store.state.announcement.announcements"></nuxt-child>
    <Intersection :is-need-intersection="isNeedIntersection" :type="'announcement'"></Intersection>
  </div>
</template>
<script>
export default {
  layout: "base",
  computed: {
    isNeedIntersection() {
      return this.$route.name === 'square-announcement'
    }
  },
  beforeMount() {
    this.$store.commit("announcement/SET_ANNOUNCEMENTS", { isReset: true });
    this.$store.commit("announcement/SET_COUNT", 0);
  }
}
</script>