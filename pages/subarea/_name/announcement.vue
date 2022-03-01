<template>
  <div>
    <nuxt-child :announcements="announcements"></nuxt-child>
  </div>
</template>
<script>
export default {
  layout: "base",
  data() {
    return {
      announcements: []
    }
  },
  mounted() {
    this.getAssociationAnnouncements().then(res => {
      this.announcements = res
    })
  },
  methods: {
    getAssociationAnnouncements() {
      const path = this.$route.path.replace('/subarea/', '')
      return new Promise((resolve, reject) => {
        this.$axios.$get(`/api/${path}`).then(res => {
          const announcements = res
          resolve(announcements)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
</script>