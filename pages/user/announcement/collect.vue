<template>
  <div>
    <nuxt-child :announcements="$store.state.announcement.announcements"></nuxt-child>
  </div>
</template>
<script>
export default {
  layout: 'base',
  data() {
    return {
      announcements: []
    }
  },
  beforeMount() {
    this.$store.commit('announcement/SET_ANNOUNCEMENTS', { isReset: true })
    this.$store.dispatch('announcement/getCollectedAnnouncements').then(res => {
      this.announcements = this.$store.state.announcement.announcements
      if (res) {
        this.$message({
          type: 'info',
          message: '无收藏公告'
        })
      }
    }).catch(error => {
      this.$message({
        type: 'error',
        message: error.message
      })
    })
  }
}
</script>