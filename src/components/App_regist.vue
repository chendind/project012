<template>
  <div class="bg white ph15" style="min-height: 100vh">
    <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
      <a class="mui-icon iconfont icon-zuo1 color white icon-sm" href="#/app_login"></a>
      <h1 class="mui-title color white">注册</h1>
    </header>
    <div class="mui-content bg white">
      <div class="fields">
        <div class="field field-with-icon">
          <i class="mui-icon iconfont icon-shouji1 icon-sm field-icon color c9"></i>
          <input class="field-input input-no-border" type="number" placeholder="请输入手机号" v-model="phone">
          <div class="yzmButton" @tap="sendCode" :class="{'disabled': restTime !== 61}">
            <template v-if="restTime === 61">获取验证码</template>
            <template v-else>{{restTime}}s后重新获取</template>
          </div>
        </div>
        <div class="field field-with-icon">
          <i class="mui-icon iconfont icon-sms icon-sm field-icon color c9"></i>
          <input class="field-input input-no-border" type="number" placeholder="请输入手机验证码" v-model="code">
        </div>
        <div class="field field-with-icon">
          <i class="mui-icon iconfont icon-mima icon-sm field-icon color c9"></i>
          <input class="field-input input-no-border" type="password" placeholder="请输入6-16位密码" v-model="password1">
        </div>
        <div class="field field-with-icon">
          <i class="mui-icon iconfont icon-mima icon-sm field-icon color c9"></i>
          <input class="field-input input-no-border" type="password" placeholder="请再次输入密码" v-model="password2">
        </div>
      </div>
      <div class="btn-block btn-maincolor mv20" style="margin-bottom: 10px !important;" @tap="regist">注册</div>
    </div>
  </div>
</template>

<script>
import router from '../router.js'
import { regist, sendCode } from 'ajax'
export default {
  name: 'app_login',
  components: {
  },
  data(){
    return {
      phone: '',
      code: '',
      password1: '',
      password2: '',
      restTime: 61,
      interval: null,
    }
  },
  methods: {
    sendCode(){
      if (this.restTime === 61){
        if (isNaN(this.phone) || (this.phone+'').length !== 11){
          mui.toast('请输入正确的手机号')
        } else {
          sendCode(this.phone).then((data) => {
            if (data.state == 0) {
              mui.toast('验证码发送成功')
              this.interval = setInterval(()=>{
                if (this.restTime === 1){
                  this.restTime = 61;
                  clearInterval(this.interval)
                  return ;
                }
                this.restTime--;
              }, 1000)
            } else if (data.msg) {
              mui.toast(data.msg)
            }
          })
        }
      }
    },
    regist(){
      if (isNaN(this.phone) || this.phone.length !== 11){
        mui.toast('请输入正确的手机号')
      } else if(!this.code){
        mui.toast('请输入手机验证码')
      } else if(!this.password1 || !this.password2) {
        mui.toast('请输入密码')
      } else if(this.password1 != this.password2){
        mui.toast('两次密码输入不一致')
      } else {
        regist(this.phone, this.code, this.password1).then(data => {
          if (data.state == 0) {
            mui.toast('注册成功，将跳转至登录页面');
            setTimeout(()=>{
              router.push({path: 'app_login'});
            }, 800)
          }
        })
      }
    },
  },
  mounted(){
  }
}
</script>

<style scoped>

</style>
