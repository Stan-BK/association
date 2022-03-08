<template>
  <transition name="pop">
    <div class="info" v-show="isShow">
      <avatar :src="info.avatar" ></avatar>
      <span>{{info.name}}</span>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      info: {
        name: '',
        avatar: ''
      }
    }
  },
  watch: {
    '$route': {
      handler(newValue, oldValue) {
        const name =  newValue.params.name
        if (name) {
          if (!(newValue?.params.name === oldValue?.params.name)) {
            this.$axios.$get(`/api/association/${name}`).then(res => {
              const data = res[0]
              for (const i of Object.keys(data)) {
                this.info[i] = data[i]
              }
            })
          }
          this.isShow = true
        } else {
          this.isShow = false
        }
      },
      immediate: true
    }
  },
  mounted() {
    // return 
  }
}
</script>
<style scoped>
.info {
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 60px;
  top: 140px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: rgba(255, 255, 255, 0.794);
  box-shadow: 2px 0px 10px #eee;
  overflow: hidden;
}
.pop-enter-active,
.pop-leave-active {
  transition: all .8s;
}
.pop-enter {
  top: 200px;
  height: 0;
  opacity: 0;
}
.pop-enter-to {
  top: 140px;
  height: 60px;
  opacity: 1;
}
.pop-leave {
  top: 140px;
  height: 60px;
  opacity: 1;
}
.pop-leave-to {
  top: 200px;
  height: 0;
  opacity: 0;
}
</style>