<template>
  <div>
      <Announcement :announcement="announcement">
        <template #title>
          {{announcement.title}}
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
  layout: 'base',
  data() {
    return {
      announcement: {
        title: '公告',
        content: '公告内容',
        comment: '评论'
      }
    }
  }
}
</script>