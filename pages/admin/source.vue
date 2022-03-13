<template>
  <div class="source">
    <my-message-box :header="mboxHeader" :message="mboxMessage" v-if="messageShow" @cancel="messageShow = false">
      <template #footer>
        <my-button style="background: #5ca9f7" @click="confirmDeleteSource">确定</my-button>
        <my-button style="background: #aaa" @click="messageShow = false">取消</my-button>
      </template>
    </my-message-box>
    <div class="toolbar">
      <my-button-group>
        <my-button :style="{ background: isArticle ? '#5ca9f7' : '#ddd' }" @click="isArticle = true">文章</my-button>
        <my-button :style="{ background: isArticle ? '#ddd' : '#5ca9f7' }" @click="isArticle = false">公告</my-button>
      </my-button-group>
    </div>
    <div class="content">
      <my-table :data="info" :prop="['name', 'abstract', 'type']">
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
import MyButtonGroup from '~/components/MyButtonGroup.vue'
export default {
  components: { MyButton, MyButtonGroup },
  data() {
    return {
      messageShow: false,
      info: [{
        name: 'wbk',
        age: 21
      }, {
        name: 'cxk',
        age: 22
      }],
      isArticle: true,
      deleteForm: {
        id: undefined
      },
      mboxHeader: '警告',
      mboxMessage: '确定删除？'
    }
  },
  computed: {
    sourceType() {
      return this.isArticle ? 'article' : 'announcement'
    }
  },
  watch: {
    isArticle: {
      handler(newValue) {
        this.$axios.$get(`/api/${ newValue ? 'article' : 'announcement' }`).then(res => {
          this.info = this.generateType(res)
        })
      },
      immediate: true
    }
  },
  mounted() {
    this.$axios.$get('/api/article').then(res => {
      this.info = this.generateType(res)
    })
  },
  methods: {
    editSource(data) {
    },
    deleteSource(data) {
      this.messageShow = true
      this.deleteForm.id = data[this.sourceType + '_id']
    },
    confirmDeleteSource() {
      const id = this.deleteForm.id
      this.$axios.$delete(`/api/article?id=${id}`).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功'
        })
        this.info = this.info.filter(item => item[this.sourceType + '_id'] !== id)
      }).catch(() => {
        this.$message({
          type: 'error',
          message: '删除失败'
        })
      })
      this.messageShow = false
    },
    generateType(data) {
      return data.map(item => {
        item.type = this.sourceType
        return item
      })
    }
  }
}
</script>
<style scoped>
.toolbar {
  width: 100%;
  height: 80px;
}
.source {
  height: 100%;
  overflow: hidden;
}
.content {
  height: calc(100% - 80px);
}
.toolbar {
  display: flex;
  justify-content: center;
}
</style>