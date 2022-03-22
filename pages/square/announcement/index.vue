<template>
  <div>
    <no-data v-if="announcements.length === 0">--广场内还没有公告喔--</no-data>
    <item-display v-else item-type="announcement" :item-set="announcements" href="announcement/"></item-display>
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