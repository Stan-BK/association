<template>
  <div>
  </div>
</template>
<script>
export default {
  layout: 'base',
  created() {
    const params = this.$route.params.name
    this.$router.push(`./${params}/article`)
  }
}
</script>