<template>
  <div class="my-input-wrap">
    <input v-model="content" :placeholder="placeholder" :type="type" :class="['my-input', btn ? 'has-btn' : '']" @input="edit">
    <button v-if="btn" class="btn" @click="submit">{{ btn }}</button>
  </div>
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    btn: {
      type: String,
      default: ''
    },
    btnColor: {
      type: String,
      default: 'rgb(236, 250, 253)'
    }
  },
  data() {
    return {
      content: ''
    }
  },
  methods: {
    edit() {
      this.$emit('input', this.content)
    },
    submit() {
      this.$emit('click')
    }
  }
}
</script>
<style scoped>
.my-input-wrap {
  position: relative;
  width: 100%;
}
.my-input {
  width: 100%;
  height: 30px;
  outline: none;
  border: 1px solid #eaeef8;
  border-radius: 2px;
  padding-left: 10px;
  padding-right: 10px;
  transition: all .5s;
  box-shadow: 1px 1px 1px transparent;  
}
.my-input:focus {
  border-color: rgb(103, 218, 236);
  box-shadow: 1px 1px 5px rgb(134, 230, 236);
}
.has-btn {
  padding-right: 60px;

}
.btn {
  position: absolute;
  width: 50px;
  height: 20px;
  right: 5px;
  top: 5px;
  color: #424242;
  background-color: rgb(236, 250, 253);
  transition: all .5s;
  cursor: pointer;
  border: none;
  border-radius: 1px;
  box-shadow: 1px 1px 2px #eee;  
}
.btn:hover {
  background-color: rgb(134, 230, 236);
  transform: scale(1.1, 1.1);
  box-shadow: 1px 1px 5px rgba(134, 230, 236, .8);
}
</style>