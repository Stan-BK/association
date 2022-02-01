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
    this.$axios.get('/api/announcement').then(res => {
      this.announcements = res.data.data
    })
  }
}
</script>