<template>
  <nuxt-child></nuxt-child>
</template>
<script>
export default {
  layout: 'base',
  created() {
    this.$router.push('square/article')
  }
}
</script>