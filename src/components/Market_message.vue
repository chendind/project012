<template>
	<div>
        <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
            <router-link :to="{path: '/market_info', query: {id: $route.query.id}}" class="mui-icon iconfont icon-zuo1 color white icon-sm"></router-link>
            <a class="mui-btn mui-btn-blue mui-btn-link mui-pull-right color white" @click="submit">提交</a>
            <h1 class="mui-title color white">{{data.name}}</h1>
        </header>
        <div class="mui-content bg white">
            <div class="mui-content-padded color c3" style="margin-left: 15px;margin-bottom: 0;">输入留言</div>
            <textarea class="message" placeholder="请详细描述你想说的话..." v-model="message"></textarea>
        </div>
    </div>
</template>


<script>
import {getMerchant, addMessage} from 'ajax'
import router from '../router.js'

export default {
	name: 'Market_message',
  data(){
    return {
      data: {},
      message: ''
    }
  },
  methods:{
      addMarket: function(){
          mui.prompt(' ', '输入商家代码', '添加商家', null, function(){

          })
      },
      submit(){
        addMessage(this.$route.query.id, this.message).then(()=>{
          mui.alert('留言成功', ()=>{
            router.push({path: '/market_info', query: {id: this.$route.query.id}})
          })
        }).catch((e)=>{
          mui.alert(`留言失败${':' + e.message}`)
        })
      },
      contact: function(){
          mui.confirm('拨打电话13812378789？','联系商家',null,function(){

          })
      }
  },
  beforeRouteEnter(to, from, next){
    getMerchant(to.query.id).then(res=>{
      next($vm => {
        $vm.data = res
      })
    })
  }
}
</script>

<style scoped>
.message{
    border: none;
    font-size: 14px;
}
</style>



