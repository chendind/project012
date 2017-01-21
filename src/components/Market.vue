<template>
  <div class="mui-content">
      <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
            <a class="mui-icon iconfont icon-jia mui-pull-right color white" @tap="addMarket()"></a>
            <h1 class="mui-title color white">我的商家</h1>
        </header>
        <div class="mui-content">
          <ul class="mui-table-view mt0" v-for="i in list">
              <li class="mui-table-view-cell mui-media">
                  <a class="mui-navigate-right" href="#/market_info">
                      <img class="mui-media-object middle border circle" :src="i.headImg">
                      {{i.name}}
                  </a>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import {getMerchantForPage} from 'ajax'

export default {
  name: 'market',
  methods:{
      addMarket: function(){
          mui.prompt(' ', '输入商家代码', '添加商家', null, function(){

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
