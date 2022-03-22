<template>
  <div>
    <no-data v-if="announcements.length === 0">--当前协会还未发布过公告喔--</no-data>
    <item-display v-else item-type="announcement" :item-set="announcements" :href="$route.path + '/'"></item-display>
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