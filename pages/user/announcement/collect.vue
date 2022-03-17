<template>
  <div>
    <nuxt-child :announcements="announcements"></nuxt-child>
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
    this.getCollectedAnnouncements()
  },
  methods: {
    getCollectedAnnouncements() {
      this.$axios.$get(`/api/announcement/collect`).then(res => {
        if (res.length === 0) {
          this.$message({
            type: 'info',
            message: '当前无收藏公告'
          })
        } else {
          this.announcements = res
        }
      })
    }
  }
}
</script>