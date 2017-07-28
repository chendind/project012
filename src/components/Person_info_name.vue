<template>
  <div>
    <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
      <a @click="back" class="mui-icon iconfont icon-zuo1 color white icon-sm"></a>
      <h1 class="mui-title color white">修改昵称</h1>
      <button @click="save" type="button" class="mui-left mui-btn mui-btn-link mui-btn-nav mui-pull-right color white">
        保存
      </button>
    </header>
    <div class="mui-content" style="margin-top: 15px;">
      <div class="mui-input-group">
        <div class="mui-input-row">
          <label>昵称</label>
          <input type="text" placeholder="请输入昵称" class="mui-input-clear" v-model="person.nickName">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {getUser, editPersonInfo} from 'ajax'
export default {
  name: 'person_info_name',
  data(){
      return {
          bg: require('assets/images/bg.png'),
          avator: require('assets/images/user.png'),
          person: {}
      }
  },
  methods: {
    back(){
      history.back();
    },
    save(){
      var self = this;
      editPersonInfo(self.person).then(data => {
          if(data.state == 0){
              mui.toast('修改成功');
          }
      })
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
