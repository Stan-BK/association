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
         images_upload_url: ''
       }"
     />
  </div>
</template>
<script>
import Editor from '@tinymce/tinymce-vue'
export default {
  components: {
    'editor': Editor
  },
  data() {
    return {
      defaultCss: 'https://cdn.tiny.cloud/1/ovy21qebfkvtexwkbqdru3wd4nbmkhtogs72x7fgyz8dn88j/tinymce/5.10.3-128/skins/content/default/content.min.css',
      darkCss: 'https://cdn.tiny.cloud/1/ovy21qebfkvtexwkbqdru3wd4nbmkhtogs72x7fgyz8dn88j/tinymce/5.10.3-128/skins/content/dark/content.min.css',
      initialized: false,
      isLoadingFailed: false
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
    const timer = setInterval(() => {
      if (this.$refs.editor?.editor.initialized) {
        this.initialized = true
        clearInterval(timer)
      } else if (i++ > 5) {
        clearInterval(timer)
        this.isLoadingFailed = true
      }
    }, 2000)
  }
}
</script>
<style scoped>
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
  color: #424242;
}
.editor-loading a {
  text-decoration: none;
  color: deepskyblue;
}
.loading-leave-active {
  transition: opacity .8s;
}
.loading-leave-to {
  opacity: 0;
}
</style>