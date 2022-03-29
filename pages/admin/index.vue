<template>
  <div class="management">
    <img ref="shadow" class="background shadow" :src="info.background">
    <div class="background">
      <img ref="background" :src="info.background"  alt="">
    </div>
    <banner :association-info="info" style="top: 200px;"></banner>
    <div class="avatar form-item">
      <div>
        <button @click="changeBackground">更换背景</button>
        <button @click="changeAvatar">更换头像</button>
      </div>
    </div>
    <div class="name form-item">
      <label for="name">社团名称</label>
      <input id="name" v-model="info.name" type="text">
    </div>
    <div class="description form-item">
      <label for="name">社团介绍</label>
      <textarea id="name" v-model="info.description" maxlength="200"></textarea>
    </div>
    <div class="submit form-item">
      <button id="submit" @click="submitForm">确认修改</button>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'admin',
  data() {
    return {
      info: {},
      timer: undefined,
      background: undefined,
      avatar: undefined
    }
  },
  mounted() {
    const user = this.$store.state.user
    if (!user.association.name) {
      this.timer = setInterval(() => {
        if (user.association.path) {
          this.getAssociationInfo()
          clearInterval(this.timer)
        }
      }, 500)
    } else {
      this.getAssociationInfo()
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    getAssociationInfo() {
      this.$axios.$get(`/api/association/${this.$store.state.user.association.path}`)
                  .then(res => {
                      this.info = res[0]
                  })
    },
    changeBackground() {
      const _self = this
      const input = document.createElement('input')
      input.type = 'file'
      input.setAttribute('accept', 'image/png, image/jpeg')
      input.click()
      input.onchange = function(e) {
        const url = URL.createObjectURL(e.target.files[0])
        _self.background = e.target.files[0]
        _self.info.background = url
        console.log(_self.background)
      }
    },
    changeAvatar() {
      const _self = this
      const input = document.createElement('input')
      input.type = 'file'
      input.click()
      input.onchange = function(e) {
        const url = URL.createObjectURL(e.target.files[0])
        _self.avatar = e.target.files[0]
        _self.info.avatar = url
      }
    },
    submitForm() {
      const updateArr = []
      if (this.avatar) {
        updateArr.push(new Promise((resolve, reject) => {
          const formData = new FormData()
          formData.append('source', this.avatar)
          formData.append('source_name', this.avatar.name)
          this.$axios.$put('/api/source', formData).then(res => {
            resolve({
              'avatar': res
            })
          }, reject)
        }))
      }
      if (this.background) {
        updateArr.push(new Promise((resolve, reject) => {
          const formData = new FormData()
          formData.append('source', this.background)
          formData.append('source_name', this.background.name)
          this.$axios.$put('/api/source', formData).then(res => {
            resolve({
              'background': res
            })
          }, reject)
        }))
      }
      Promise.all(updateArr).then(res => {
        const form = this.info
        const association = this.$store.state.user.association
        res.forEach(item => {
          const [[key, value]] = Object.entries(item)
          form[key] = value
        })
        this.$axios.$post(`/api/association/${association.path}?association_id=${association.association_id}`, form)
                    .then(() => {
                      this.$message({
                        type: 'success',
                        message: '修改成功'
                      })
                    }).catch(() => {
                      this.$message({
                        type: 'error',
                        message: '修改失败'
                      })
                    })
      })
    }
  }
}
</script>
<style scoped>
.management {
  position: relative;
  width: 80%;
  height: 100%;
  margin-left: 10%;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
  overflow-x: hidden;
}
.background {
  position: absolute;
  width: 100%;
  height: 280px;
  left: 0;
  overflow: hidden;
  text-align: center;
  user-select: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.747);
  box-shadow: 1px 1px 10px #fff;
}
.shadow {
  filter: blur(10px);
  background-repeat: no-repeat;
  background-size: 200% 200%;
  background-position: center;
}
.background img {
  height: 100%;
  filter: blur(1px);
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
  width: 160px;
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
  height: 40px;
  display: flex;
  justify-content: space-around;
  margin-top: 300px;
}
.avatar button {
  margin:0  10px;
}
.name {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.description {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.description textarea {
  resize: none;
  outline: none;
  width: 200px;
  height: 80%;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 20px;
  padding-left: 5px;
}
.submit {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>