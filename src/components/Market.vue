<template>
  <div class="mui-content">
      <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
            <a class="mui-icon iconfont icon-jia mui-pull-right color white" @tap="addMarket()"></a>
            <h1 class="mui-title color white">我的商家</h1>
        </header>
        <div class="mui-content">
          <ul class="mui-table-view mt0" v-for="i in list">
              <li class="mui-table-view-cell mui-media">
                  <router-link class="mui-navigate-right" :to="{path: '/market_info', query: {id: i.id}}">
                      <img class="mui-media-object middle border circle" :src="i.headImg">
                      {{i.name}}
                  </router-link>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import {getMerchantForPage, addFocus} from 'ajax'

export default {
  name: 'market',
  methods:{
      addMarket: function(){
          mui.prompt(' ', '输入商家代码', '添加商家', null, function(obj){
            addFocus(obj.value).then(()=>{
              mui.alert('添加成功', ()=>{
                window.location.reload()
              })
            }).catch((e)=>{
              mui.alert(`添加失败${':' + e.message}`)
            })
          })
      }
  },
  data: function(){
    return {
      list: []
    }
  },
  beforeRouteEnter(to, from, next){
    getMerchantForPage(0).then((res)=>{
      next(($vm)=>{
        $vm.list = res.list || []
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
