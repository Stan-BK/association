<template>
  <div class="source">
    <my-message-box v-if="messageShow" @cancel="messageShow = false">
      <template #footer>
        <my-button style="background: #5ca9f7">确定</my-button>
        <my-button style="background: #aaa" @click="messageShow = false">取消</my-button>
      </template>
    </my-message-box>
    <div class="toolbar">

    </div>
    <div class="content">
      <my-table :data="info" :prop="['name', 'abstract']">
        <template #default="slotscope">
          <my-button style="background: #5ca9f7" @click="editSource(slotscope)">编辑</my-button>
          <my-button style="background: #F56C6C" @click="deleteSource(slotscope)">删除</my-button>
        </template>
      </my-table>
    </div>
  </div>
</template>
<script>
import MyButton from '~/components/MyButton.vue'
export default {
  components: { MyButton },
  data() {
    return {
      messageShow: true,
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
      this.messageShow = !this.messageShow
      console.log(data)
    },
    deleteSource(data) {

    }
  }
}
</script>
<style scoped>
.toolbar {
  width: 100%;
  height: 100px;
}
.source {
  height: 100%;
  overflow: hidden;
}
.content {
  height: calc(100% - 100px);
}
</style>