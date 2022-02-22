<template>
  <div>
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
      darkCss: 'https://cdn.tiny.cloud/1/ovy21qebfkvtexwkbqdru3wd4nbmkhtogs72x7fgyz8dn88j/tinymce/5.10.3-128/skins/content/dark/content.min.css'
    }
  },
  watch: {
    '$store.state.isDarkMode'(newValue) {
      const editor = this.$refs.editor.editor
      editor.getWin().document.getElementById('mce-u1').href = newValue === true ? this.darkCss : this.defaultCss
    }
  }
}
</script>