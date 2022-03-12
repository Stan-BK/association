<template>
  <div class="source">
    <my-table :data="info" :prop="['name', 'abstract']">
      <template #default="slotscope">
        <my-button style="background: #5ca9f7" @click="editSource(slotscope)">编辑</my-button>
        <my-button style="background: #F56C6C" @click="deleteSource(slotscope)">删除</my-button>
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
    editSource(data) {
      console.log(data)
    },
    deleteSource(data) {

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