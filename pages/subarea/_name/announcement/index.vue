<template>
  <div>
    <no-data v-if="announcements.length === 0">--当前协会还未发布过公告喔--</no-data>
    <template v-else v-for="(item, index) of announcements">
      <nuxt-link :key="index"  :to="$route.path + '/' + item.announcement_id">
        <announcement-card :announcement="item"></announcement-card>
      </nuxt-link>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    announcements: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>