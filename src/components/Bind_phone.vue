<template>
  <div class="bg white ph15" style="min-height: 100vh">
    <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
      <h1 class="mui-title color white">绑定手机号</h1>
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
      <div class="btn-block btn-maincolor mv20" style="margin-bottom: 10px !important;" @tap="bindPhone">绑定</div>
      <div class="center" style="font-size: 12px;">
        <router-link :to="{path: '/app_login'}">手机号登录</router-link> ｜
        <router-link :to="{path: '/app_regist'}">手机号注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router.js'
import { bindPhone, sendCode, boundWeichat } from 'ajax'
export default {
  name: 'bind_phone',
  components: {
  },
  data(){
    return {
      phone: window.localStorage.getItem('phone') || '',
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
            } else {
              mui.toast('网络异常')
            }
          })
        }
      }
    },
    bindPhone(){
      console.log(this.phone)
      if (isNaN(this.phone) || (this.phone+'').length !== 11){
        mui.toast('请输入正确的手机号')
      } else if(!this.code){
        mui.toast('请输入手机验证码')
      } else if(!this.password1 || !this.password2) {
        mui.toast('请输入密码')
      } else if(this.password1 != this.password2){
        mui.toast('两次密码输入不一致')
      } else {
        bindPhone(this.phone, this.code, this.password1).then(data => {
          if (data.state == 0) {

            mui.toast('绑定成功，将跳转至首页');
            setTimeout(()=>{
              router.push({path: '/'});
            }, 800)
          } else if(data.state == 20000){
            mui.toast('手机号已存在，请直接通过手机号登录');
            setTimeout(()=>{
              router.push({path:'/app_login'});
            }, 800)
          } else {
            mui.toast('网络异常')
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
