<template>
  <div class="mui-content">
    <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
      <!-- <a class="mui-icon iconfont icon-jia mui-pull-right color white" @tap="addMarket"></a> -->
      <a class="mui-icon iconfont icon-saoyisao mui-pull-right color white" @tap="jumpProductInfo2"></a>
      <h1 class="mui-title color white">我的商家</h1>
    </header>
    <div id="scroll" class="mui-content mui-scroll-wrapper" v-show="isLogin">
      <div class="mui-scroll">
        <ul class="mui-table-view">
          <ul class="mui-table-view mt0" v-for="i in list">
            <li class="mui-table-view-cell mui-media">
              <router-link class="mui-navigate-right" :to="{path: '/market_info', query: {id: i.id}}" v-tap>
                <img class="mui-media-object middle border circle" :src="i.headImg" style="width: 42px;">
                {{i.name}}
              </router-link>
            </li>
          </ul>
        </ul>
      </div>

    </div>
    <div class="full-box center" v-show="!isLogin">
      <div class="pd10 size16 mt10">您还未登录，请登录后查看</div>
      <div class="pd10">
        <div class="mui-btn mui-btn-block" type="success" @click="goToLogin">登录</div>
      </div>

    </div>
  </div>
</template>

<script>
import {getMerchantForPage, addFocus, getSignature} from 'ajax'
import router from '../router.js'
let index = 0
export default {
  name: 'market',
  data: function(){
    return {
      list: [],
      DATALENGTH: 20,
      ListStart: 0,
      isLogin: true
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
      jumpProductInfo(){
        this.$root.scanQRCode().then(resultStr => {
          try{
            const result = JSON.parse(resultStr);
            if (result.type === 'business') {
              addFocus(result.code).then((data)=>{
                location.href = result.url;
              }).catch((e)=>{
                location.href = result.url;
              })
            } else if (result.type === 'product') {
              location.href = result.url;
            } else {
              location.href="index.html#/market"
            }
          } catch(e){
            console.log(e)
            // location.href="index.html#/market"
          }
        })
      },
      jumpProductInfo2(){
        if (this.isLogin) {
          this.$root.scanQRCode().then(resultStr => {
            var rex = /id=(\d*)/
            var id;
            window.location.href=resultStr;

            // try{
            //   id = resultStr.match(rex)[1]
            //   if(resultStr.indexOf('market_info') > -1) {
            //     router.push({path: '/market_info', query: {id}})
            //   } else {
            //     router.push({path: '/product_info', query: {id}})
            //   }
            // } catch(e){
            //   console.log(e)
            // }
          })
        } else {
          mui.toast('请先登录再使用扫码功能')
        }

      },
      addMarket(){
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
    getNewest() {
        var self = this;
        getMerchantForPage(0,self.DATALENGTH).then((res)=>{
          if (!res.state) {
            self.list = res.list || [];
            self.ListStart = res.list.length;

            mui('#scroll').pullRefresh().endPulldownToRefresh();
            if(res.list.length == res.countAll){
                mui('#scroll').pullRefresh().endPullupToRefresh(true);
            }
            else{
                mui('#scroll').pullRefresh().refresh(true);
            }
          } else {
            // mui.toast('网络异常');
            mui('#scroll').pullRefresh().endPulldownToRefresh();

          }
        })
    },
    getMore() {
        var self = this;
        getMerchantForPage(self.ListStart,self.DATALENGTH).then((res)=>{
          if (!res.state) {
            self.list = self.list.concat(res.list);

            if(self.ListStart + res.list.length == res.countAll){
                mui('#scroll').pullRefresh().endPullupToRefresh(true);
            }
            else{
                mui('#scroll').pullRefresh().endPullupToRefresh(false);
            }

            self.ListStart += self.DATALENGTH;
          } else {
            // mui.toast('网络异常');
            mui('#scroll').pullRefresh().endPullupToRefresh(false);
            if (res.state == 10011) {
              // self.isLogin = false
            }
          }
        })
    },
    goToLogin(){
      goToLogin()
    }
  },
  created(){
    this.$root.wxConfig()
  },
  mounted: function () {
  },
  beforeRouteEnter(to, from, next){
    next($vm => {
      mui.init();
      mui.ready(function(){
          mui("#scroll").pullRefresh({
              down: {
                  callback : function(){
                      $vm.getNewest();
                  }
              },
              up: {
                  auto: true,
                  contentnomore: '',
                  callback : function(){
                      $vm.getMore();
                  }
              }
          });
      });
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #scroll{
    padding-bottom: 50px;
  }
.full-box{
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  padding-bottom: 50px;
  padding-top: 44px;
}
</style>
