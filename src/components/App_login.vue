<template>
  <div class="bg white ph15" style="min-height: 100vh">
    <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
      <a class="mui-btn mui-btn-blue mui-btn-link mui-pull-right color white" @tap="goAppRegist">注册</a>
      <h1 class="mui-title color white">行微</h1>
    </header>
    <div class="mui-content bg white">
      <div class="fields">
        <div class="field field-with-icon">
          <i class="mui-icon iconfont icon-shouji1 icon-sm field-icon color c9"></i>
          <input class="field-input input-no-border" type="text" placeholder="请输入手机号" v-model="phone">
        </div>
        <div class="field field-with-icon">
          <i class="mui-icon iconfont icon-mima icon-sm field-icon color c9"></i>
          <input class="field-input input-no-border" type="password" placeholder="请输入密码" v-model="password">
        </div>
      </div>
      <div class="btn-block btn-maincolor mv20" style="margin-bottom: 10px !important;" @tap="login">登录</div>
      <div>
        <a class="mui-pull-right color c9" href="#/app_findPassword">忘记密码</a>
      </div>
    </div>
  </div>
</template>

<script>
import {passwordLogin} from 'ajax'
import router from '../router.js'
export default {
  name: 'app_login',
  components: {
  },
  data(){
    return {
      phone: '',
      password: '',
    }
  },
  methods: {
    login(){
      passwordLogin(this.phone, this.password).then(data=>{
        if(data.state == 0){
          router.push({path: '/'});
        } else if(data.msg) {
          mui.toast(data.msg)
        }
      })
    },
    goAppRegist(){
      router.push({path: 'app_regist'});
    }
  },
  mounted(){
  }
}
</script>

<style lang='less' scoped>

</style>
