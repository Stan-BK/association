<template>
  <div class="search">
    <input type="text" :placeholder="placeholder" v-model="searchStr" @input="searchInfo">
    <div class="search-pane">
      <div class="search-item" v-for="item of result" :key="item" @click="confirmSearch(item)">{{ item }}</div>
    </div>
    <button @click="confirmSearch">
      <svg t="1648310003685" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1399" width="16" height="16"><path d="M937.798221 769.855766 714.895525 546.869159c23.821545-45.681412 37.589107-97.495498 37.589107-152.564721 0-182.559872-148.560524-331.078441-331.079464-331.078441-182.623317 0-331.098907 148.517545-331.098907 331.078441 0 182.559872 148.47559 331.078441 331.098907 331.078441 60.575634 0 117.27089-16.647145 166.206416-45.221948L807.552831 900.100132c17.938558 17.939581 41.551348 26.867928 65.12423 26.867928s47.182602-8.928347 65.123206-26.867928c17.396205-17.396205 27.033703-40.550555 27.033703-65.164139C964.831924 810.321386 955.194426 787.16806 937.798221 769.855766M133.027248 394.304438c0-158.989037 129.34795-288.358477 288.378943-288.358477 158.948105 0 288.3595 129.36944 288.3595 288.358477 0 99.206466-50.437739 186.899714-126.950344 238.795665-1.044796 0.416486-1.876744 1.252527-2.877537 1.835811-45.515636 30.03813-99.999528 47.727001-158.530596 47.727001C262.375198 682.662915 133.027248 553.336454 133.027248 394.304438M907.594315 869.896226c-19.273972 19.191084-50.562583 19.191084-69.836555 0L623.6995 655.797034c26.157753-20.274766 49.186236-44.305065 68.292386-71.421656l215.601406 215.683271c9.344832 9.262968 14.518668 21.694091 14.518668 34.877345S916.939147 860.551394 907.594315 869.896226" p-id="1400" fill="#dbdbdb"></path><path d="M215.169059 387.79007c0 0 42.156122-211.011878 234.186693-224.946238C449.355753 162.843832 185.944458 131.555222 215.169059 387.79007" p-id="1401" fill="#dbdbdb"></path></svg>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String
    },
    type: {
      type: String
    }
  },
  data() {
    return {
      searchStr: '',
      debounceTimer: null,
      result: undefined
    }
  },
  methods: {
    searchInfo() {
      if (this.debounceTimer) {
        clearTimeout(this.debounceTimer)
      }
      this.debounceTimer = setTimeout(() => {
        if (this.searchStr)
          this.$axios.$get(`/api/${this.type}_s?q=${this.searchStr}`).then(res => {
            this.result = Array.from(new Set(res.map(item => item.name)))
          })
        this.debounceTimer = null
      }, 1000)
    },
    confirmSearch(str) {
      if (typeof str === 'string') {
        this.searchStr = str
      }
      this.$axios.$get(`/api/${this.type}_s?q=${this.searchStr}&detail=1`).then(res => {
        this.$store.commit(`${this.type}/SET_${this.type.toUpperCase()}S`, { isReset: true })
        this.$store.commit(`${this.type}/SET_${this.type.toUpperCase()}S`, { [this.type + 's']: res })
      })
      this.$emit('search')
    }
  }
}
</script>
<style scoped>
.search {
  position: relative;
  width: 100%;
  height: 30px;
  max-width: 400px;
  z-index: 98;
}
input {
  position: relative;
  outline: none;
  width: 80%;
  height: 100%;
  left: 50%;
  top: 50%;
  padding: 10px;
  transform: translate(-50%, -50%);
  border-radius: 25px;
  border: none;
  transition: all .4s;
  box-shadow: 1px 1px 1px #eee, -1px -1px 1px #eee;
  z-index: 9;
}
input:focus {
  box-shadow: 1px 1px 4px rgb(61, 184, 241), -1px -1px 4px rgb(61, 184, 241);
}
button {
  position: absolute;
  outline: none;
  right: 10%;
  width: 80px;
  height: 100%;
  top: 50%;
  transform: translate(0, -50%);
  background-color: rgb(61, 184, 241);
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  border: none;
  transition: all.4s;
  cursor: pointer;
  z-index: 9;
}
button:hover {
  opacity: .6;
}
.search-pane {
  position: absolute;
  width: 80%;
  left: 50%;
  top: 15px;
  padding-top: 0px;
  background-color: #fff;
  transform: translate(-50%, 0);
  overflow: hidden;
  transition: all .4s;
}
.search-item {
  height: 0px;
  padding: 0 10px;
  transition: all .4s;
  line-height: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
.search-item:hover {
  background-color: rgba(127, 233, 235, 0.493)
}
input:focus + .search-pane > .search-item{
  padding: 8px 10px;
  height: 30px;
}
input:focus + .search-pane {
  border-radius: 5px;
}
input:focus + .search-pane > .search-item:first-child {
  margin-top: 20px;
}
</style>