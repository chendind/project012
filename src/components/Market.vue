<template>
  <div class="mui-content">
    <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
      <!-- <a class="mui-icon iconfont icon-jia mui-pull-right color white" @tap="addMarket"></a> -->
      <a class="mui-icon iconfont icon-saoyisao mui-pull-right color white" @tap="jumpProductInfo"></a>
      <h1 class="mui-title color white">我的商家</h1>
    </header>
    <div id="scroll" class="mui-content mui-scroll-wrapper">
      <div class="mui-scroll">
        <ul class="mui-table-view">
          <ul class="mui-table-view mt0" v-for="i in list">
            <li class="mui-table-view-cell mui-media">
              <router-link class="mui-navigate-right" :to="{path: '/market_info', query: {id: i.id}}" v-tap>
                <img class="mui-media-object middle border circle" :src="i.headImg">
                {{i.name}}
              </router-link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {getMerchantForPage, addFocus, getSignature} from 'ajax'

export default {
  name: 'market',
  data: function(){
    return {
      list: [],
      DATALENGTH: 5,
      ListStart: 0
    }
  },
  // beforeRouteEnter(to, from, next){
  //   getMerchantForPage(0,10).then((res)=>{
  //     next(($vm)=>{
  //       $vm.list = res.list || []
  //     })
  //   })
  // },
  methods: {
      jumpProductInfo:function(){
        wx.ready(()=>{
          wx.scanQRCode({
              needResult: 1,
              scanType: ["qrCode"],
              success: function (res) {
                var path = res.resultStr;
                location.href = path;
              }
          });
        });
      },
      addMarket: function(){
          mui.prompt(' ', '输入商家代码', '添加商家', null, function(obj){
            if (obj.index === 0) {
              return
            } else {
              addFocus(obj.value).then(()=>{
                mui.alert('添加成功', ()=>{
                  window.location.reload()
                })
              }).catch((e)=>{
                mui.alert(`添加失败${':' + e.message}`)
              })
            }
          })
      },
    getNewest: function () {
        var self = this;
        getMerchantForPage(0,self.DATALENGTH).then((res)=>{
            self.list = res.list || [];
            self.ListStart = res.list.length;

            mui('#scroll').pullRefresh().endPulldownToRefresh();
            if(res.list.length == res.countAll){
                mui('#scroll').pullRefresh().endPullupToRefresh(true);
            }
            else{
                mui('#scroll').pullRefresh().refresh(true);
            }
        })
    },
    getMore: function () {
        var self = this;
        getMerchantForPage(self.ListStart,self.DATALENGTH).then((res)=>{
            self.list = self.list.concat(res.list);

            if(self.ListStart + res.list.length == res.countAll){
                mui('#scroll').pullRefresh().endPullupToRefresh(true);
            }
            else{
                mui('#scroll').pullRefresh().endPullupToRefresh(false);
            }

            self.ListStart += self.DATALENGTH;
        })
    }
  },
  created(){
    const url = encodeURIComponent(location.href.split('#')[0]);
    getSignature(url).then(signature=>{
      wx.config($.extend(signature,{
         debug: false,
         appId: 'wx886a3b874e4322a4',
         jsApiList: ['scanQRCode']
      }));
    })
  },
  mounted: function () {
      var self = this;
      mui.init();
      mui.ready(function(){
          mui("#scroll").pullRefresh({
              down: {
                  callback : function(){
                      self.getNewest();
                  }
              },
              up: {
                  auto: true,
                  contentnomore: '没有更多消息了',
                  callback : function(){
                      self.getMore();
                  }
              }
          });
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #scroll{
    padding-bottom: 50px;
  }
</style>
