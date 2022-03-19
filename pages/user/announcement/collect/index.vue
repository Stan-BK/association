<template>
  <div>
    <no-data v-if="announcements.length === 0">空空如也~快去逛逛吧</no-data>
    <template v-else v-for="(item, index) of announcements">
      <nuxt-link :key="index"  :to="'collect/' + item.announcement_id">
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
      default: () => {
        return []
      }
    }
  }
}
</script>