<template>
  <div>
    <template v-for="(item, index) of announcements">
      <nuxt-link :key="index"  :to="'announcement/' + item.announcement_id">
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