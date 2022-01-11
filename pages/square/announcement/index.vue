<template>
  <div>
    <template v-for="(item, index) of announcements">
      <nuxt-link :key="index"  :to="'/announcement' + item.id">
        <announcement-card :announcement="item"></announcement-card>
      </nuxt-link>
    </template>
  </div>
</template>
<script>
export default {
  layout: 'base',
  transition: 'test',
  data() {
    return {
      announcements: this.$store.state.announcement.announcements
    }
  },
}
</script>