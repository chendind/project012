<template>
  <div>
    <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
      <a @click="back" class="mui-icon iconfont icon-zuo1 color white icon-sm"></a>
      <h1 class="mui-title color white">修改密码</h1>
      <button @click="save" type="button" class="mui-left mui-btn mui-btn-link mui-btn-nav mui-pull-right color white">
        保存
      </button>
    </header>
    <div class="mui-content" style="margin-top: 15px;">
      <div class="mui-input-group">
        <div class="mui-input-row">
          <label>原密码</label>
          <input type="password" placeholder="请输入原密码" v-model="old_password">
        </div>
        <div class="mui-input-row">
          <label>新密码</label>
          <input type="password" placeholder="请输入新密码" v-model="new_password">
        </div>
        <div class="mui-input-row">
          <label>确认新密码</label>
          <input type="password" placeholder="请确认新密码" v-model="new_password2">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {getUser, editPersonInfo, editPassword} from 'ajax'
export default {
  name: 'person_info_password',
  data(){
      return {
          bg: require('assets/images/bg.png'),
          avator: require('assets/images/user.png'),
          person: {},
          old_password: "",
          new_password: "",
          new_password2: "",
      }
  },
  methods: {
    back(){
      history.back();
    },
    save(){
      var self = this;
      if (self.old_password == "" && self.new_password == "") {
        mui.toast('请输入原密码或新密码')
      } else if (self.new_password2 !== self.new_password) {
        mui.toast('新密码不一致，请检查')
      } else {
        editPassword(self.person, self.old_password, self.new_password).then(data => {
            if(data.state == 0){
                mui.toast('修改成功');
                self.old_password = "";
                self.new_password = "";
                self.new_password2 = "";
            }
        })
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    getUser().then((res)=>{
      next($vm=>{
        $vm.person = res || {}
      })
    })
  },
  mounted(){
    mui.init();
  }
}
</script>

<style scoped>
/*.mui-table-view-cell:last-child:after{
    height: 1px;
}
.mui-table-view:after{
    height: 0;
}*/
</style>
