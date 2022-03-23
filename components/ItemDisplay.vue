<template>
  <div class="item-display">
    <component v-for="(item, index) of itemSet" :is="itemType + '-card'" :[itemType]="item" :key="index" >
      <nuxt-link  :to="href + item[itemType + '_id']"></nuxt-link>
    </component>
  </div>
</template>
<script>
export default {
  props: {
    itemType: {
      type: String
    },
    itemSet: {
      type: Array,
      default: () => []
    },
    href: {
      type: String
    }
  }
}
</script>
<style scoped>
.item-display {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  flex-grow: 3;
}
a {
  width: 100%; 
  height: 100%;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
}
</style>