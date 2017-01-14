<template>
  <div class="mui-content">
      <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
            <a class="mui-icon iconfont icon-jia mui-pull-right color white" @tap="addMarket()"></a>
            <h1 class="mui-title color white">我的商家</h1>
        </header>
        <div class="mui-content">
          <ul class="mui-table-view mt0">
              <li class="mui-table-view-cell mui-media">
                  <a class="mui-navigate-right" href="#/market_info">
                      <img class="mui-media-object middle border circle" src="../../static/source/images/1.png">
                      洛兹服饰专卖店
                  </a>
              </li>
          </ul>
          <ul class="mui-table-view mt10">
              <li class="mui-table-view-cell mui-media">
                  <a class="mui-navigate-right" href="#/market_info">
                      <img class="mui-media-object middle border circle" src="../../static/source/images/2.png">
                      H&M品牌专卖店
                  </a>
              </li>
          </ul>
          <ul class="mui-table-view mt10">
              <li class="mui-table-view-cell mui-media">
                  <a class="mui-navigate-right" href="#/market_info">
                      <img class="mui-media-object middle border circle" src="../../static/source/images/3.png">
                      你的名字服饰专卖店
                  </a>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'market',
  methods:{
      addMarket: function(){
          mui.prompt(' ', '输入商家代码', '添加商家', null, function(){

          })
      }
  },
  data: function(){
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
