<template>
  <div class="source">
    <my-table :data="info" :prop="['age', 'name', ]">
      <template #default="slotscope">
        <button @click="con(slotscope)"></button>
      </template>
    </my-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: [{
        name: 'wbk',
        age: 21
      }, {
        name: 'cxk',
        age: 22
      }]
    }
  },
  mounted() {
    this.$axios.$get('/api/article').then(res => {
      this.info = res
    })
  },
  methods: {
    con(data) {
      console.log(data)
    }
  }
}
</script>
<style scoped>
.source {
  height: calc(100vh - 150px);
  overflow: hidden;
}
</style>