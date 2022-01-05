<template lang="html">
  <div :class="['loading-page', isOut ? 'fade-out' : '']" v-if="loading">
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      isOut: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        if (this.$store.state.fromHome) {
          this.$store.commit('SET_fromHome') // 改变首次进入变量标识
          this.isOut = true
          setTimeout(() => {
            this.$nextTick(() => {
              this.isOut = false
              this.loading = false
            })
          }, 1000)
        } else {
          this.loading = false
        }
      }
    }
  }
</script>

<style scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#b3d7f8, #7beaea 50%, #3db8f1 90%);
    text-align: center;
    font-size: 30px;
    font-family: sans-serif;
    z-index: 999;
    opacity: 1;
  }
  .fade-out {
    animation: fade-out 1.2s;
  }
  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>