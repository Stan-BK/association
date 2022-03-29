<template>
  <transition name="opacity">
    <div class="info" v-show="isShow" @click="$emit('click', $event)">
      <avatar :src="info.avatar" style="width: 50px; height: 50px; margin-top: 4px;"></avatar>
      <span>{{info.name}}</span>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    associationInfo: {
      type: Object,
      default: () => ({})
    }
  },
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
              this.$store.commit('association/SET_background', data.background)
            })
          }
          this.isShow = true
        } else {
          this.isShow = false
          for (const i of Object.keys(this.info)) {
            this.info[i] = ''
          }
        }
      },
      immediate: true
    },
    associationInfo: {
      handler(newValue) {
        if (newValue.name) {
          this.info = newValue
          this.isShow = true
        }
      },
      deep: true,
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
  height: 80px;
  top: 180px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: rgba(255, 255, 255, 0.671);
  box-shadow: 2px 0px 10px #eee;
  color: #424242;
  overflow: hidden;
}
.opacity-enter-active,
.opacity-leave-active {
  transition: opacity .4s;
}
.opacity-enter {
  opacity: 0;
}
.opacity-leave-to {
  opacity: 0;
}
</style>