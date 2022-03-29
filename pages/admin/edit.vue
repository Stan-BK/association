<template>
  <div>
    <transition name="loading">
      <div v-if="!initialized" class="editor-loading">
        <svg v-if="!isLoadingFailed" t="1645588548829" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3479" width="64" height="64"><path d="M511.505 0C238.13 0 16.516 222.175 16.516 496.244c0 274.068 221.614 496.243 494.989 496.243 273.374 0 494.988-222.175 494.988-496.243C1006.493 222.175 784.913 0 511.505 0z m0 942.84c-246.058 0-445.507-199.945-445.507-446.63 0-246.684 199.45-446.629 445.507-446.629 246.057 0 445.506 199.945 445.506 446.63 0 246.684-199.45 446.629-445.506 446.629z" p-id="3480"></path><path d="M514.709 281.963c-51.167 0-102.235 19.853-141.246 59.558-38.945 39.671-58.5 91.73-58.5 143.723 0 51.993 19.522 104.051 58.5 143.723 39.01 39.705 90.079 59.557 141.246 59.557 51.1 0 102.168-19.852 141.18-59.557 38.945-39.672 58.467-91.73 58.467-143.723 0-51.993-19.522-104.052-58.467-143.723-39.012-39.705-90.08-59.558-141.18-59.558z m14.336 47.6c3.336-12.618 16.152-20.183 28.606-16.78 12.486 3.402 19.819 16.416 16.483 29.068-3.337 12.684-16.087 20.249-28.54 16.846-12.486-3.402-19.886-16.417-16.55-29.134zM373.198 546.618c-12.387 3.435-25.203-4.063-28.54-16.748-3.336-12.684 3.997-25.732 16.484-29.134 12.486-3.37 25.27 4.129 28.606 16.846 3.336 12.652-4.063 25.633-16.55 29.036z m16.417-154.327c-9.116-9.282-9.116-24.312 0-33.594 9.15-9.282 23.883-9.282 33 0 9.084 9.282 9.084 24.312 0 33.594-9.117 9.315-23.883 9.315-33 0zM496.31 638.282c-3.337 12.619-16.153 20.183-28.54 16.78-12.486-3.402-19.886-16.416-16.55-29.068 3.337-12.684 16.153-20.248 28.607-16.846 12.42 3.402 19.819 16.417 16.483 29.134z m-52.224-84.463c-37.888-38.648-37.888-101.145 0-139.727a95.9 95.9 0 0 1 137.249 0c37.888 38.582 37.888 101.112 0 139.727a95.9 95.9 0 0 1-137.25 0z m191.752 55.329c-9.15 9.249-23.948 9.249-33 0-9.116-9.282-9.116-24.345 0-33.594 9.085-9.315 23.883-9.315 33 0 9.05 9.25 9.05 24.279 0 33.594z m44.924-171.173c3.336 12.717-4.063 25.732-16.55 29.134-12.386 3.37-25.203-4.129-28.54-16.846-3.335-12.652 4.064-25.7 16.484-29.102 12.486-3.336 25.27 4.13 28.606 16.814zM210.085 197.4l21.67 142.006 36.6-5.681-21.67-142.039-36.6 5.715zM398.006 863.794l23.221 29.431 109.238-89.484-23.222-29.432-109.237 89.485zM777.546 308.984l-13.41 35.18 129.981 51.265 13.411-35.18-129.982-51.265zM115.514 606.637l131.303 51.795 13.411-35.18-131.303-51.794-13.411 35.18zM627.613 103.853l-23.189-29.431-105.769 86.643 23.189 29.399 105.769-86.61zM756.934 636.201l21.273 139.925 36.699-5.78L793.6 630.387l-36.666 5.813z" p-id="3481"></path></svg>
        <div v-else>
          <h1>加载编辑器失败</h1>
          <h1>请稍后重试 <a href="./">刷新</a></h1>
        </div>
      </div>
    </transition>
    <div class="toolbar clearfix" :class="$store.state.isDarkMode ? 'dark-toolbar' : ''">
      <div class="title">
        <label for="title">标题<span style="color: red;">*</span></label>
        <input id="title" v-model="form.name" type="text">
      </div>
      <div class="contentType">
        <label for="contentType">类型</label>
        <select id="contentType" v-model="form.contentType">
          <option value="article">文章</option>
          <option value="announcement">公告</option>
        </select>
      </div>
      <div class="abstract">
        <label for="abstract">简介</label>
        <textarea id="abstract" v-model="form.abstract" name=""></textarea>
      </div>
      <div class="photo" @click="chooseAvatar">
        <avatar :src="form.avatar" :is-need-radius="false" >
          <template v-if="!form.avatar">
            <svg v-show="!$store.state.isDarkMode" t="1645682867722" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2246" width="48" height="48"><path d="M856.32 428.064c-94.816 0-144.928 90.656-185.184 163.52-25.824 46.688-52.512 94.944-78.72 97.568-28.544-5.664-48.096-23.2-70.656-43.36-31.744-28.448-67.488-60.288-130.464-57.952-76.8 3.328-146.24 57.696-206.4 161.696a32 32 0 0 0 55.392 32.064c48.48-83.84 100.224-127.488 153.728-129.824 36.928-1.44 56.96 16.576 84.992 41.664 26.88 24.096 57.344 51.36 105.888 59.392a31.584 31.584 0 0 0 5.216 0.448c64.704 0 101.44-66.464 136.96-130.72 28.352-51.328 57.504-104 97.184-123.072v369.984H128V231.68h488.16a32 32 0 1 0 0-64H96a32 32 0 0 0-32 32v701.824a32 32 0 0 0 32 32h760.32a32 32 0 0 0 32-32V460.064a32 32 0 0 0-32-32z" p-id="2247"></path><path d="M180.96 424.32c0 57.952 47.168 105.12 105.12 105.12s105.12-47.168 105.12-105.12-47.168-105.088-105.12-105.088-105.12 47.136-105.12 105.088z m146.24 0a41.152 41.152 0 0 1-82.24 0 41.152 41.152 0 0 1 82.24 0zM960 174.656h-61.376V113.28a32 32 0 1 0-64 0v61.344H752.64a32 32 0 1 0 0 64h81.984v81.984a32 32 0 1 0 64 0V238.656H960a32 32 0 1 0 0-64z" p-id="2248"></path></svg>
            <svg v-show="$store.state.isDarkMode" t="1645709754838" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2227" width="48" height="48"><path d="M856.32 428.064c-94.816 0-144.928 90.656-185.184 163.52-25.824 46.688-52.512 94.944-78.72 97.568-28.544-5.664-48.096-23.2-70.656-43.36-31.744-28.448-67.488-60.288-130.464-57.952-76.8 3.328-146.24 57.696-206.4 161.696a32 32 0 0 0 55.392 32.064c48.48-83.84 100.224-127.488 153.728-129.824 36.928-1.44 56.96 16.576 84.992 41.664 26.88 24.096 57.344 51.36 105.888 59.392a31.584 31.584 0 0 0 5.216 0.448c64.704 0 101.44-66.464 136.96-130.72 28.352-51.328 57.504-104 97.184-123.072v369.984H128V231.68h488.16a32 32 0 1 0 0-64H96a32 32 0 0 0-32 32v701.824a32 32 0 0 0 32 32h760.32a32 32 0 0 0 32-32V460.064a32 32 0 0 0-32-32z" p-id="2228" fill="#ffffff"></path><path d="M180.96 424.32c0 57.952 47.168 105.12 105.12 105.12s105.12-47.168 105.12-105.12-47.168-105.088-105.12-105.088-105.12 47.136-105.12 105.088z m146.24 0a41.152 41.152 0 0 1-82.24 0 41.152 41.152 0 0 1 82.24 0zM960 174.656h-61.376V113.28a32 32 0 1 0-64 0v61.344H752.64a32 32 0 1 0 0 64h81.984v81.984a32 32 0 1 0 64 0V238.656H960a32 32 0 1 0 0-64z" p-id="2229" fill="#ffffff"></path></svg>
          </template>
        </avatar>
      </div>
      <div class="upload">
        <my-button style="background: #5ca9f7" @click="upload">保存</my-button>
      </div>
    </div>
    <div style="display: block;">
      <editor
        ref="editor"
        api-key="ovy21qebfkvtexwkbqdru3wd4nbmkhtogs72x7fgyz8dn88j"
        :init="{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor emoticons',
            'searchreplace fullscreen imagetools',
            'insertdatetime media table paste help wordcount pagebreak tabfocus '
          ],
          toolbar:
            `undo redo | formatselect | bold italic forecolor backcolor searchreplace table| \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent |  preview fullscreen  print  help`,
          language: 'zh_CN',
          content_css: $store.state.isDarkMode ? 'dark' : 'default',
          skin: 'oxide',
          menubar:['insert'],
          image_uploadtab: true,
          images_upload_handler:(blobInfo, success, failure) => {
            const url = 'data:image/jpeg;base64,' + blobInfo.base64()
            success(url)
          }
        }"
      />
    </div>
  </div>
</template>
<script>
import Editor from '@tinymce/tinymce-vue'
export default {
  components: {
    "editor": Editor
  },
  data() {
    return {
      defaultCss: 'https://cdn.tiny.cloud/1/ovy21qebfkvtexwkbqdru3wd4nbmkhtogs72x7fgyz8dn88j/tinymce/5.10.3-128/skins/content/default/content.min.css',
      darkCss: 'https://cdn.tiny.cloud/1/ovy21qebfkvtexwkbqdru3wd4nbmkhtogs72x7fgyz8dn88j/tinymce/5.10.3-128/skins/content/dark/content.min.css',
      initialized: false,
      isLoadingFailed: false,
      img: undefined,
      form: {
        avatar: '',
        abstract: '',
        contentType: 'article',
        name: '',
      },
      timer: undefined
    }
  },
  watch: {
    '$store.state.isDarkMode'(newValue) {
      if (this.initialized) {
        const editor = this.$refs.editor.editor
        editor.getWin().document.getElementById('mce-u1').href = newValue === true ? this.darkCss : this.defaultCss
      }
    }
  },
  mounted() {
    let i = 0
    this.timer = setInterval(() => {
      if (this.$refs.editor?.editor.initialized) {
        this.initialized = true
        clearInterval(this.timer)
        const { source, sourceType } = this.$route.params
        if (source) {
          this.$axios.$get(`/api/${ sourceType }/${ source }`).then(res => {
            const form = this.form
            for (const i in res) {
              if (Object.prototype.hasOwnProperty.call(form, i)) {
                form[i] = res[i]
              }
            }
            this.$refs.editor.editor.getWin().document.body.innerHTML = res.content
          })
        }
      } else if (i++ > 5) {
        clearInterval(this.timer)
        this.isLoadingFailed = true
      }
    }, 2000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    async upload() {
      const slice = (arg) => Array.prototype.slice.call(arg)
      const editor = this.$refs.editor.editor
      const imgArr = editor.getWin().document.getElementsByTagName('img')
      const srcMap = new Map()
      const source = this.$route.params
      try {
        if (imgArr) {
          slice(imgArr).forEach(item => {
            srcMap.set(item.src, '')
          })
          for (const key of srcMap.keys()) {
            const src = await this.uploadSource(key)
            srcMap.set(key, src)
          }
          slice(imgArr).forEach(item => {
            item.src = srcMap.get(item.src)
            item.setAttribute('data-mce-src', item.src)
          })
        }
        const content = editor.getWin().document.body.innerHTML // 表单中的内容字段通过操作dom直接获取
        const uploadType = source.source ? 'post' : 'put'
        const formData = new FormData()
        const form = this.form
        if (form.name.trim() === '') {
          throw new Error('标题不能为空')
        }
        if (source.source) {
          formData.append(source.sourceType + '_id', source.source)
        }
        formData.append('association_id', this.$store.state.user.associationAssociationId)
        formData.append('name',  form.name)
        formData.append('avatar', form.avatar)
        formData.append('abstract', form.abstract)
        formData.append('content', content)
        await this.uploadContent(form.contentType, uploadType, formData)
        this.$message({
          type: 'success',
          message: '提交成功'
        })
        this.$router.push('/admin/source')
      } catch(e) {
        this.$message({
          type: 'error',
          message: e.message
        })
      }
    },
    chooseAvatar() {
      let input = document.createElement('input')
      const form = this.form
      input.type = 'file'
      input.style.display = 'none'
      input.setAttribute('accept', 'image/*') // 只允许选择图片
      document.body.appendChild(input)
      input.click()
      input.onchange = () => {
        const source = input.files[0]
        const fileReader = new FileReader()
        fileReader.readAsDataURL(input.files[0]) // 将选择图片资源读取为base64编码
        fileReader.onload = () => {
          form.avatar = fileReader.result
          this.uploadSource(source, source.name).then(res => {
            form.avatar = res
          })
        }
        document.body.removeChild(input)
        input = null
      }
    },
    uploadContent(contentType, uploadType, formData) {
      return new Promise((resolve, reject) => {
        this.$axios['$' + uploadType.toLowerCase()]('/api/' + contentType, formData).then(res => {
          resolve(res)
        }).catch(e => {
          reject(e)
        })
      })
    },
    uploadSource(source, sourceName) {
      const reg = 'data:image/jpeg;base64,'
      if (!(source instanceof Blob) && !source.match(reg)) { // 资源已经是url形式
        return source
      }
      function base64ToBlob(b64) {
        const base64 = b64.replace(reg, '')
        const source = atob(base64)
        const len = source.length
        const unitArr = new Uint8Array(len)
        for (let i = 0; i < len; i++) {
          unitArr[i] = source.charCodeAt(i)
        }
        return new Blob([unitArr], {
          type: 'image/jpeg'
        })
      }

      return new Promise((resolve, reject) => {
        const formdata = new FormData()
        formdata.append('source', source instanceof Blob ? source : base64ToBlob(source))
        formdata.append('source_name', sourceName || Math.floor(Math.random() * 1000000) + '.jpeg')
        this.$axios.$put('/api/source', formdata).then(res => {
          resolve(res)
        }).catch(e => {
          reject(e)
        })
      })
    }
  }
}
</script>
<style scoped>
.toolbar {
  width: 100%;
  padding-left: 50px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.dark-toolbar .title>label {
  color: #fff;
}
.dark-toolbar .abstract>label {
  color: #fff;
}
.dark-toolbar .contentType>label {
  color: #fff;
}
.dark-toolbar .photo:hover{
  border-color: rgb(255, 255, 255);
}
.dark-toolbar .photo::before{
  color: #fff;
}
.dark-toolbar .upload button {
  color: #fff;
}

.title {
  width: 140px;
  height: 100px;
}
.title input{
  width: 100%;
  height: 50px;
  font-size: 1.4em;
  outline: none;
  border-radius: 4px;
}

.abstract {
  min-width: 140px;
  height: 100px;
}
.abstract textarea{
  width: 100%;
  height: 80px;
  resize: none;
  outline: none;
  border-radius: 4px;
  padding: 4px;
}

.photo {
  position: relative;
  width: 100px;
  height: 100px;
  padding: 2px;
  max-width: 200px;
  max-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed rgba(128, 128, 128, .4);
  border-radius: 2px;
  cursor: pointer;
  transition: border-color .4s;
}
.photo::before {
  position: absolute;
  content: "封面";
  top: -26px;
  left: 0;
  pointer-events: none;
}
.photo .avatar {
  margin: 0;
}
.photo:hover {
  border-color: rgba(128, 128, 128, 1);
}
.photo .icon {
  opacity: .4;
  transition: all .4s;
}
.photo:hover .icon {
  opacity: 1;
}

.contentType {
  width: 80px;
  height: 40px;
}
.contentType select{
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 4px;
}

.upload {
  width: 60px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.upload button:hover {
  background-color: rgb(0, 191, 255);
}
.editor-loading {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  align-items: center;
  justify-content: center;
  background-color: rgb(128, 128, 128, .6);
  z-index: 9;
}
.editor-loading .icon {
  animation: rotate 1s infinite linear;
}
@keyframes rotate {
  0%{
    transform: rotate3d(0, 0, 1, 0deg);
  }
  
  50%{
    transform: rotate3d(0, 0, 1, 180deg);
  }
  
  100%{
    transform: rotate3d(0, 0, 1, 360deg);
  }
}
.editor-loading h1 {
  color: #4242425e;
}
.editor-loading a {
  text-decoration: none;
  color: rgba(0, 191, 255, 0.795);
}
.loading-leave-active {
  transition: opacity .8s;
}
.loading-leave-to {
  opacity: 0;
}
</style>