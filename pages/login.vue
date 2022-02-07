<template>
  <div class="wrap">
    <message :top="'40px'"></message>
    <div class="info">
      <h1>Sign <span :class="['i', formType === 'sign_in' ? 'i-apear' : '']">in</span><span :class="['u', formType === 'sign_up' ? 'u-apear' : '']">up</span></h1>
    </div>
    <div :class="['login', isSwitch ? 'form-switch' : '']">
      <div class="switch" @click="changeForm"><span>前往<span v-if="formType === 'sign_up'">登录</span><span v-else>注册</span></span></div>
      <form class="form">
        <input id="username" v-model="form.username" class="form-item" type="text">
        <div :class="['username-shadow', inputUsn ? 'username-focus' : '']">
          <svg t="1644127239388" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2054" width="20" height="20"><path d="M512 0C229.232 0 0 229.232 0 512s229.232 512 512 512 512-229.232 512-512S794.768 0 512 0z m0 48c256.256 0 464 207.744 464 464 0 114.256-41.376 218.8-109.872 299.664C808.096 673.264 671.456 576 512 576c-159.504 0-295.936 97.44-353.936 235.904C89.456 731.008 48 626.368 48 512 48 255.744 255.744 48 512 48zM194.896 850.576C240.416 718.976 365.12 624 512 624s271.632 94.944 317.152 226.528C746.176 928.304 634.688 976 512 976c-122.672 0-234.144-47.68-317.104-125.424z" fill="#3db8f1" p-id="2055"></path><path d="M512 546.256c106.032 0 192-85.968 192-192s-85.968-192-192-192-192 85.968-192 192 85.968 192 192 192z m0-336c79.392 0 144 64.608 144 144s-64.608 144-144 144-144-64.608-144-144 64.608-144 144-144z" fill="#3db8f1" p-id="2056"></path></svg>
        </div>
        <input id="password" v-model="form.password" class="form-item" type="password">
        <div :class="['password-shadow', inputPwd ? 'password-focus' : '']">
          <svg t="1644127733271" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5448" width="20" height="20"><path d="M785.066667 892.586667H238.933333c-37.546667 0-68.266667-32.426667-68.266666-71.68V450.56c0-39.253333 30.72-71.68 68.266666-71.68h546.133334c37.546667 0 68.266667 32.426667 68.266666 71.68v370.346667c0 39.253333-30.72 71.68-68.266666 71.68zM238.933333 447.146667v373.76c0 1.706667 1.706667 3.413333 1.706667 3.413333H785.066667V450.56c0-1.706667-1.706667-3.413333-1.706667-3.413333H238.933333z" fill="#3db8f1" p-id="5449"></path><path d="M682.666667 448.853333H341.333333v-145.066666c0-93.866667 76.8-170.666667 170.666667-170.666667 44.373333 0 87.04 17.066667 121.173333 47.786667C665.6 213.333333 682.666667 256 682.666667 303.786667v145.066666z m-273.066667-68.266666h204.8v-76.8c0-29.013333-10.24-54.613333-29.013333-73.386667-20.48-18.773333-46.08-29.013333-73.386667-29.013333-56.32 0-102.4 46.08-102.4 102.4v76.8z" fill="#3db8f1" p-id="5450"></path><path d="M512 713.386667c-18.773333 0-34.133333-15.36-34.133333-34.133334v-136.533333c0-18.773333 15.36-34.133333 34.133333-34.133333s34.133333 15.36 34.133333 34.133333v136.533333c0 18.773333-15.36 34.133333-34.133333 34.133334z" fill="#3db8f1" p-id="5451"></path><path d="M512 696.32m-68.266667 0a68.266667 68.266667 0 1 0 136.533334 0 68.266667 68.266667 0 1 0-136.533334 0Z" fill="#3db8f1" p-id="5452"></path></svg>
        </div>
        <button class="submit" @click.prevent="submitForm"><span v-if="formType === 'sign_in'">登录</span><span v-else>注册</span></button>
      </form>
      <div class="reset" @click="clearForm">重置</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      isSwitch: false,
      timer: undefined,
      throttle: Date.now(),
      formType: 'sign_in'
    }
  },
  computed: {
    inputUsn() {
      return this.form.username
    },
    inputPwd() {
      return this.form.password
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
    },
    changeForm() {
      if (Date.now() - this.throttle > 1000) {
        this.formType = this.formType === 'sign_in' ? 'sign_up' : 'sign_in'
        clearTimeout(this.timer)
        this.isSwitch = true
        this.timer = setTimeout(() => {
          this.isSwitch = false
        }, 1000)
        this.throttle = Date.now()
        this.clearForm()
      }
    },
    clearForm() {
      this.form = {
        username: '',
        password: ''
      }
    }
  }
}
</script>
<style scoped>
.wrap {
  user-select: none;
}
.login {
  position: absolute;
  width: 400px;
  height: 400px;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  border-radius: 50%;
  background: transparent;
  border: 1px solid /*#059be0*/ #b3d7f8;
  box-shadow: inset 4px 4px 20px #afc3fada;
  overflow: hidden;
  animation: bobble 4s linear infinite;
  z-index: 9;
}
@keyframes bobble {
  0% {
    transform: translate3d(-50%, -50%, 0);
  }
  25% {
    transform: translate3d(-50%, -49%, 0);
  }
  50% {
    transform: translate3d(-50%, -50%, 0);
  }
  75% {
    transform: translate3d(-50%, -51%, 0);
  }
  100% {
    transform: translate3d(-50%, -50%, 0);
  }
}

.info {
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  width: 100%;
  height: 80px;
  max-width: 375px;
}
.info h1{
  position: relative;
  text-align: center;
  color: transparent;
  background-color: #fff;
  background-clip: text;
  text-shadow: 1px 1px 5px #fff;
  letter-spacing: 4px;
  overflow: hidden;
  transform: scale(1.2, 1.2);
}
.info span {
  background-color: #fff;
  background-clip: text;
  text-shadow: 1px 1px 5px #fff;
  color: transparent;
  letter-spacing: 4px;
}
.i {
  position: absolute;
  transform: translateX(4px);
  top: -40px; 
  transition: all .8s;
}
.i-apear {
  top: 0px;
}
.u {
  position: relative;
  top: 40px;
  transition: all .8s;
  letter-spacing: 2px;
}
.u-apear {
  top: 0px;
}

.form-switch .switch>span {
  animation: opacity .7s linear;
}
.form-switch .submit>span {
  animation: opacity .9s linear;
}
@keyframes opacity {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.form-switch::before {
  position: absolute;
  display: block;
  content: "";
  top: -65%;
  left: -30%;
  width: 20px;
  height: 450px;
  transform: rotate(45deg);
  background: linear-gradient(to left, #ffffff, #ffffffd3 30%);
  animation: switch-form 1s ease-in-out;
  z-index: 99;
  border-radius: 50%;
}
@keyframes switch-form {
  0% {
    left: -30%;
    opacity: .2;
  }
  40% {
    opacity: .4;
  }
  50% {
    width: 100px;
    opacity: 1;
  }
  60% {
    width: 70px;
    opacity: .8;
  }
  70% {
    width: 60px;
    opacity: .4;
  }
  to {
    top: 35%;
    left: 100%;
    width: 20px;
    opacity: .2;
  }
}
.form {
  width: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.form-item {
  margin: 20px 0;
  opacity: .9;
}

.switch {
  position: absolute;
  width: 70px;
  height: 40px;
  left: 60px;
  top: 60px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transform: rotate(-45deg);
  cursor: pointer;
  line-height: 40px;
  text-align: center;
  color: rgb(61, 184, 241);
  font-size: .8em;
  transition: all .4s;
}
.switch:hover {
  background-color: rgba(255, 255, 255, 0.8);
}
.reset {
  position: absolute;
  width: 50px;
  height: 30px;
  right: 60px;
  bottom: 60px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  transform: rotate(-45deg);
  line-height: 30px;
  text-align: center;
  color: rgb(61, 184, 241);
  font-size: .8em;
  cursor: pointer;
  transition: all .4s;
}
.reset:hover {
  background-color: rgba(255, 255, 255, 0.6);
}
.form input {
  width: 100%;
  height: 35px;
  border: 0;
  outline: none;
  background-color: rgba(255, 255, 255, .8);
  padding-left: 40px;
  color: #424242;
  border-radius: 5px;
  transition: .3s;
}
.form input:focus {
  background-color: #fff;
}
.username-shadow {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35px;
  top: 20px;
  background-color: transparent;
  z-index: 9;
  pointer-events: none;
  transition: all .4s;
}
#username:focus+.username-shadow {
  width: 40px;
}
.username-focus {
  width: 40px;
}
.password-shadow {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 95px;
  width: 100%;
  height: 35px;
  background-color: transparent;
  z-index: 9;
  pointer-events: none;
  transition: all .4s;
}
#password:focus+.password-shadow {
  width: 40px;
}
.password-focus {
  width: 40px;
}

.submit {
  position: relative;
  width: 60%;
  height: 30px;
  margin-left: 20%;
  border: 0;
  border-radius: 4px;
  box-shadow: 1px 1px 5px rgb(134, 230, 236);
  background: linear-gradient(to right, #fff 20%, #eee);
  color: rgb(61, 184, 241);
  overflow: hidden;
  transition: all .4s;
  cursor: pointer;
  opacity: .9;
}
.submit:hover {
  transform: scale(1.1, 1.1);
  opacity: 1;
}
.submit::before {
  position: absolute;
  display: block;
  content: "";
  width: 10px;
  height: 10px;
  left: -10%;
  top: 0;
  border-radius: 50%;
  border: 1px solid #b3d7f8;
  transition: all .5s;
  box-shadow: 1px 1px 1px #afc3fa70 inset;
  background-color: rgba(238, 238, 238, 0.3);
}
.submit:hover::before {
  animation: translate-big 1s .2s linear;
}
.submit::after {
  position: absolute;
  display: block;
  content: "";
  width: 8px;
  height: 8px;
  left: -10%;
  top: 0;
  border-radius: 50%;
  border: 1px solid #b3d7f8;
  transition: all .5s;
  box-shadow: 1px 1px 1px #afc3fa70 inset;
  background-color: rgba(238, 238, 238, 0.3);
}
.submit:hover::after {
  animation: translate-small  1s .3s linear;
}
@keyframes translate-big {
  0% {
    left: 0;
    top: 0;
  }
  20% {
    left: 25%;
    top: 40%;
  }
  40% {
    left: 40%;
    top: 30%;
  }
  60% {
    left: 60%;
    top: 50%;
  }
  80% {
    left: 80%;
    top: 70%;
  }
  100% {
    left: 100%;
    top: 0%;
  }
}
@keyframes translate-small {
  0% {
    left: 0;
    top: 30%;
  }
  20% {
    left: 25%;
    top: 40%;
  }
  40% {
    left: 50%;
    top: 30%;
  }
  60% {
    left: 55%;
    top: 50%;
  }
  80% {
    left: 80%;
    top: 70%;
  }
  100% {
    left: 100%;
    top: 0%;
  }
}
</style>