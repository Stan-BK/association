<template>
  <div>
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