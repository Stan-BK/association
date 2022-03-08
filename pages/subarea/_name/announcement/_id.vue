<template>
  <div>
      <Announcement :announcement="announcement"></Announcement>
  </div>
</template>
<script>
export default {
  data() {
    return {
      announcement: {
        avatar: '',
        title: '',
        content: '',
        comment: '',
        association: {
          avatar: '',
          name: ''
        }
      }
    }
  },
  beforeMount() {
    this.$axios.$get(`/api/announcement/${this.$route.params.id}`).then(res => {
      this.announcement = res[0]
    })
  }
}
</script>