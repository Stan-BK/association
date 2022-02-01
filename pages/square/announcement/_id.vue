<template>
  <div>
      <Announcement :announcement="announcement">
        <template #title>
          {{announcement.name}}
        </template>
         {{announcement.content}}
        <template #comment>
          {{announcement.comment}}
        </template>
      </Announcement>
  </div>
</template>
<script>
export default {
  data() {
    return {
      announcement: {
        title: '',
        content: '',
        comment: ''
      }
    }
  },
  beforeMount() {
    this.$axios.get(`/api/announcement/${this.$route.params.id}`).then(res => {
      this.announcement =  res.data.data[0]
    })
  }
}
</script>