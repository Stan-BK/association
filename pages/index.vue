<template>
  <div class="wrap">
    <nuxt-link class="path" to="/square">to square</nuxt-link>
    <div 
      v-for="(item, index) of associationArr" 
      :key="item"
      :style="{
        left: Math.random() * 10 + (index % 10) * 10 + '%',
        top: Math.random() * 9 + Math.random() * 70 + '%'
      }" 
      class="a-wrap"
      >
      <nuxt-link 
        to=""
        class="bubble-item"
      >
        {{item}}
      </nuxt-link>
    </div>
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
  overflow: hidden;
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
  border: 1px solid /*#059be0*/ #b3d7f8;
  animation: move 3s infinite linear;
  text-decoration: none;
  box-shadow: inset 1px 1px 10px #afc3fada;
  color: #eeeeee;
  transition: all .4s;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 99;
  user-select: none;
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
.a-wrap {
  position: absolute;
  display: block;
  transition: all 2s;
}
.bubble-item {
  position: absolute;
  display: block;
  width: 150px;
  height: 150px;
  color: #eeeeee;
  text-align: center;
  line-height: 150px;
  border: 1px solid #b3d7f83f;
  border-radius: 50%;
  text-decoration: none;
  box-shadow: inset 1px 1px 10px /*#3db8f1e3*/#7cbcf1;
  transition: all .4s;
  transform: scale(1, 1);
  user-select: none;
}
.a-wrap:nth-child(odd) {
  animation: item-move 3s infinite linear;
}
.a-wrap::nth-child(even) {
  animation: item-move2 3s infinite linear;
}
.bubble-item:hover {
  transform: scale(1.1, 1.1);
  color: #fff;
}
.bubble-item::before {
  position: absolute;
  content: "";
  display: block;
  width: 0px;
  height: 0px;
  top: 25px;
  left: 25px;
  border-top: 20px #ffffff80 solid;
  border-left: 15px #ffffff80 solid;
  border-right: 15px #ffffff80 solid;
  border-radius: 50%;
  transform: rotate(-45deg);
}
.bubble-item::after {
  position: absolute;
  content: "";
  display: block;
  width: 0px;
  height: 0px;
  right: 25px;
  bottom: 25px;
  border-top: 15px #ffffff2d solid;
  border-left: 5px #ffffff2d solid;
  border-right: 5px #ffffff2d solid;
  border-radius: 50%;
  transform: rotate(45deg);
}
@keyframes item-move {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(3px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes item-move2 {
  0% {
    transform: translateY(3px);
  }
  25% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-3px);
  }
  75% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(3px);
  }
}
@keyframes scale {
  form {
    transform: scale(1, 1);
  }
  to {
    transform: scale(1.1, 1.1);
  }
}
</style>
