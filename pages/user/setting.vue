<template>
  <div class="setting">
    <my-message-box v-show="confirmShow" @cancel="confirmShow = false">
      是否要更换头像？
      <template #footer>
        <my-button style="background: #5ca9f7" @click="confirmAvatar">确定</my-button>
        <my-button style="background: #aaa" @click="confirmShow = false">取消</my-button>
      </template>
    </my-message-box>
    <div class="avatar form-item">
      <div class="avatar-wrap">
        <avatar :src="$store.state.user.avatar" width="80px" height="80px" style="margin: 0"></avatar>
      </div>
      <button @click="chooseAvatar">更换头像</button>
    </div>
    <div class="nickname form-item">
      <label for="nickname">昵称</label>
      <input id="nickname" v-model="nickname" type="text" :disabled="!editNickname">
      <button @click="modifyNickname">
        {{ editNickname ? '确认修改' : '修改昵称'}}
      </button>
    </div>
    <div class="password form-item">
      <label for="password">密码</label>
      <div class="password-wrap">
        <input id="password" v-model="password" type="password" :disabled="!editPassword">
        <input id="confirmPwd" v-model="confirmPwd" type="password" :placeholder="editPassword ? '再次确认密码' : ''" :disabled="!editPassword" :style="{ top: editPassword ? '50px' : '0px' }">
      </div>
      <button @click="modifyPassword">
        {{ editPassword ? '确认修改' : '修改密码'}}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'base',
  data() {
    return {
      editNickname: false,
      editPassword: false,
      nickname: this.$store.state.user.nickname,
      password: '',
      confirmPwd: '',
      confirmShow: false,
      avatar: ''
    }
  },
  mounted() {
    this.nickname = this.$store.state.user.nickname
  },
  methods: {
    chooseAvatar() {
      const input = document.createElement('input')
      const _self = this
      input.type = 'file'
      input.setAttribute('accept', 'image/png, image/jpeg')
      input.click()
      input.onchange = function(e) {
        const file = e.target.files[0]
        _self.avatar = file
        _self.confirmShow = true
      }
    },
    confirmAvatar() {
      const formData = new FormData()
      formData.append('source', this.avatar)
      formData.append('source_name', this.avatar.name)
      this.$axios.$put('/api/source', formData).then(avatar => {
        this.$axios.$post('/api/user/info', {
          avatar
        }).then(res => {
          this.$message({
            type: 'success',
            message: '头像已更换'
          })
          this.$store.commit('user/SET_USERSTATUS', res)
        }).catch(() => {
          this.$message({
            type: 'error',
            message: '更换头像失败'
          })
        })
      })
      this.confirmShow = false
    },
    modifyNickname() {
      if (!this.editNickname) {
        this.editNickname = true
      } else if (this.nickname.trim() === '') {
        this.$message({
          type: 'error',
          message: '昵称不能为空'
        })
      } else {
        this.$axios.$post('/api/user/info', {
          nickname: this.nickname
        }).then(res => {
          this.$store.commit('user/SET_USERSTATUS', res)
          this.$message({
            type: 'success',
            message: '昵称已修改'
          })
          this.editNickname = false
        })
      }
    },
    modifyPassword() {
      if (!this.editPassword) {
        this.editPassword = true
      } else if (this.password !== this.confirmPwd) {
        this.$message({
          type: 'error',
          message: '两次输入密码不一致'
        })
      } else if (this.password === '') {
        this.$message({
          type: 'error',
          message: '密码不能为空'
        })
      } else {
        this.$axios.$post('/api/user/info', {
          password: this.password
        }).then(res => {
          this.$store.commit('user/SET_USERSTATUS', res)
          this.$message({
            type: 'success',
            message: '修改密码成功'
          })
          this.password = this.confirmPwd = ''
          this.editPassword = false
        })
      }
    }
  }
}
</script>
<style scoped>
.setting {
  width: 100%;
  padding: 40px;
  min-height: 500px;
  background-color: rgb(236, 250, 253);
  border-radius: 5px;
}
.form-item button {
  outline: none;
  width: 90px;
  height: 30px;
  border-radius: 10px;
  background-color: rgb(236, 250, 253);
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px #ccc, -1px -1px 2px #ccc;
  transition: all .4s;
  cursor: pointer;
}
.form-item button:hover {
  border-color: rgb(61, 184, 241);
  box-shadow: 1px 1px 5px rgba(61, 184, 241, 0.185), -1px -1px 5px rgba(61, 184, 241, 0.185);
}
.form-item input {
  outline: none;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 20px;
  padding-left: 5px;
}
.form-item label {
  margin-right: 20px;
}
.avatar {
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar-wrap {
  border-radius: 50%;
  border: 2px solid #ddd;
  box-shadow: 1px 1px 10px #ccc;
  margin-bottom: 10px;
}
#avatar {
  outline: none;
  width: 90px;
  height: 30px;
  border-radius: 10px;
  background-color: rgb(236, 250, 253);
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px #ccc, -1px -1px 2px #ccc;
  transition: all .4s;
  cursor: pointer;
}
#avatar:hover {
  border-color: rgb(61, 184, 241);
  box-shadow: 1px 1px 5px rgba(61, 184, 241, 0.185), -1px -1px 5px rgba(61, 184, 241, 0.185);
}
.nickname {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.password {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.password-wrap {
  position: relative;
  z-index: 1;
}
#confirmPwd {
  position: absolute;
  left: 0;
  top: 0px;
  transition: all .4s;
  z-index: -1;
}
</style>