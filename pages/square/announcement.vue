<template>
  <div>
    <nuxt-child :announcements="$store.state.announcement.announcements"></nuxt-child>
  </div>
</template>
<script>
export default {
  layout: 'base',
  beforeMount() {
    this.$store.commit('announcement/SET_ANNOUNCEMENTS', { isReset: true })
    this.$store.commit('announcement/SET_COUNT', 0)
  }
}
</script>