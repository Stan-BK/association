<template>
  <div class="association">
    <my-message-box v-show="messageShow" @cancel="messageShow = false" style="height: 250px" header="添加社团">
      <template #default>
        <div class="form">
          <div>
            <label for="name">社团名称</label><input id="name" type="text" v-model="name">
          </div>
          <div>
            <label for="path">社团路径</label><input id="path" type="text" v-model="path">
          </div>
        </div>
      </template>
      <template #footer>
        <my-button style="background: #5ca9f7" @click="addAssociation">确定</my-button>
        <my-button style="background: #aaa" @click="messageShow = false">取消</my-button>
      </template>
    </my-message-box>
    <div class="utiltool">
      <my-button style="background: #5ca9f7; width: auto;" @click="messageShow = true">添加社团</my-button>
    </div>
    <div class="content">
      <my-table :data="info" :prop="['name', 'description']">
        <template #default="slotscope">
          <my-button style="background: #F56C6C" @click="deleteAssociation(slotscope)">删除</my-button>
        </template>
      </my-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: [],
      messageShow: false,
      name: '',
      path: ''
    }
  },
  mounted() {
    this.getAssociation()
  },
  methods: {
    getAssociation() {
      this.$axios.$get('/api/association').then(res => {
        this.info = res
      })
    },
    addAssociation() {
      this.$axios.$put(`/api/association?name=${this.name}&path=${this.path}`).then(() => {
        this.$message({
          type: 'success',
          message: '添加成功'
        })
        this.name = ''
        this.path = ''
        this.$axios.$get('/api/association').then(res => {
          this.info = res
        })
        this.messageShow = false
      }).catch(() => {
        this.$message({
          type: 'error',
          message: '添加失败'
        })
      })
    },
    deleteAssociation(item) {
      this.$axios.$delete(`/api/association?association_id=${item.association_id}`).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功'
        })
        this.getAssociation()
      }).catch(() => {
        this.$message({
          type: 'error',
          message: '删除失败'
        })
      })
    }
  }
}
</script>
<style scoped>
.association {
  height: 100%;
}
.utiltool {
  display: flex;
  height: 80px;
  align-items: center;
  padding: 0 20px;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form > div {
  margin: 5px;
}
.form input {
  margin-left: 10px;
  outline: none;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-left: 5px;
}
.content {
  height: calc(100% - 120px);
}
</style>