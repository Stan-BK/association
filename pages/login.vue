<template>
  <div class="wrap">
    <message></message>
    <div class="login">
      <form class="form">
        <my-input v-model="form.username"></my-input>
        <my-input v-model="form.password" :type="'password'"></my-input>
        <input type="submit" @click.prevent="submitForm">
      </form>
    </div>
  </div>
</template>
<script>
import MyInput from '~/components/MyInput.vue'
export default {
  components: { MyInput },
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm() {
      this.$axios.post('/api/user/login', this.form).then(res => {
        console.log(res)
      }).catch(error => {
        this.$message({
          type: 'error',
          message: error.message
        })
      })
    }
  }
}
</script>
<style scoped>
.login {
  position: absolute;
  width: 200px;
  height: 200px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #000;
}
</style>