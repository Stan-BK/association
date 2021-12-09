<template>
  <div class="wrap">
    <nuxt-link class="path" to="/square">to square</nuxt-link>
    <span 
    v-for="(item, index) of associationArr" 
    :key="item" 
    class="bubble-item"
      :style="{
        left: Math.random() * 10 + (index) * 10 + '%',
        top: Math.random() * 9 + Math.random() * 90 + '%'
      }"
    >{{item}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      associationArr: ['象棋社', '心理协会', '计算机协会', '社团联合会', '舞狮队', '舞蹈社', '电竞社', '女子协会', '粤语协会']
    }
  }
}
</script>
<style scoped>
.wrap {
  position: relative;
  width: 100%;
  height: 100vh;
}
.path {
  position: absolute;
  display: block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: transparent;
  text-align: center;
  line-height: 200px;
  border: 1px solid #3db8f1;
  animation: move 2s infinite linear;
  text-decoration: none;
  box-shadow: inset 1px 1px 10px #3db8f1a2;
  color: #eeeeee;
  transition: all .4s;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.path:hover {
  color: #fff;
  font-size: 1.1em;
  transform: scale(1.2, 1.2);
}
.path:active {
  color: #ffffff4d;
}
.path::before {
  position: absolute;
  content: "";
  display: block;
  width: 0px;
  height: 0px;
  top: 25px;
  left: 25px;
  border-top: 30px #ffffff80 solid;
  border-left: 25px #ffffff80 solid;
  border-right: 25px #ffffff80 solid;
  border-radius: 50%;
  transform: rotate(-45deg);
}
.path::after {
  position: absolute;
  content: "";
  display: block;
  width: 0px;
  height: 0px;
  right: 30px;
  bottom: 30px;
  border-top: 20px #ffffff4d solid;
  border-left: 5px #ffffff4d solid;
  border-right: 5px #ffffff4d solid;
  border-radius: 50%;
  transform: rotate(45deg);
}
@keyframes move {
  0% {
    top: 0;
  }
  25% {
    top: 10px;
  }
  50% {
    top: 0px;
  }
  75% {
    top: -10px;
  }
  100% {
    top: 0px;
  }
}
.bubble-item {
  position: absolute;
  display: block;
  font-size: 1.5em;
  color: transparent;
  background: linear-gradient(to right, #2979f1, #08a8d8 50%, #0843e6 90%);
  background-clip: text;
}
</style>
