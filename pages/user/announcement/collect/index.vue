<template>
  <div>
    <no-data v-if="announcements.length === 0">空空如也~快去逛逛吧</no-data>
    <item-display v-else item-type="announcement" :item-set="announcements" href="collect/"></item-display>
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