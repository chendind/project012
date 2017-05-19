<template>
  <div>
    <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
      <router-link :to="{path: '/market_info', query: {id: $route.query.id}}" class="mui-icon iconfont icon-zuo1 color white icon-sm"></router-link>
      <h1 class="mui-title color white">店名</h1>
    </header>
    <div class="mui-content">
      <div class="rate-bar-box bg white">
        <table>
          <tbody>
            <tr>
              <td class="size12">产品质量</td>
              <td>
                <span class="rate-bar">
                  <i class="iconfont icon-wujiaoxing1 color red"></i>
                  <i class="iconfont icon-wujiaoxing1 color red"></i>
                  <i class="iconfont icon-wujiaoxing1 color red"></i>
                  <i class="iconfont icon-wujiaoxing1 color red"></i>
                  <i class="iconfont icon-wujiaoxing color c9"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td class="size12">
                产品款式
              </td>
              <td>
                <span class="rate-bar">
                  <i class="iconfont icon-wujiaoxing1 color red"></i>
                  <i class="iconfont icon-wujiaoxing1 color red"></i>
                  <i class="iconfont icon-wujiaoxing1 color red"></i>
                  <i class="iconfont icon-wujiaoxing1 color red"></i>
                  <i class="iconfont icon-wujiaoxing color c9"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td class="size12">产品价位</td>
              <td>
                <span class="rate-bar">
                  <i class="iconfont icon-wujiaoxing1 color red"></i>
                  <i class="iconfont icon-wujiaoxing1 color red"></i>
                  <i class="iconfont icon-wujiaoxing1 color red"></i>
                  <i class="iconfont icon-wujiaoxing1 color red"></i>
                  <i class="iconfont icon-wujiaoxing color c9"></i>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info-box bg white mv10">
        <div class="header pd10 size12">
          评价详情
        </div>
        <textarea class="noborder size12 pd10" style="padding-top: 0;margin-bottom: 0;" rows="3" placeholder="晒图＋50字以上评价可以获得100积分哦~"></textarea>
        <div class="pic-box pd10">
          <div class="pics">
            <div class="pic">
              <img v-for="pic in pics" :src="pic">
            </div>
            <div class="add-button center color c9" @tap="addPic">
              <i class="iconfont icon-xiangji" style="font-size: 18px"></i><br>
              <span style="font-size: 10px" >添加图片</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {getMerchant, addMessage, getSignature } from 'ajax'
import $ from 'jquery'
import router from '../router.js'

export default {
  name: 'Market_message',
  data(){
    return {
      data: {},
      message: '',
      pics:[]
    }
  },
  methods:{
    addPic(){
      const self = this;
      wx.ready(()=>{
        wx.chooseImage({
          count: 9, 
          success: function (res) {
            self.$data.pics=res.localIds;
          }
        });
      })
    }
  },
  created(){
    const url = encodeURIComponent(location.href.split('#')[0]);
    getSignature(url).then(signature=>{
      wx.config($.extend(signature,{
         debug: false, 
         appId: 'wx886a3b874e4322a4', 
         jsApiList: ['chooseImage']
      }));
    })
  }
}
</script>

<style lang='less' scoped>
.pic-box{
  .pics{
    .pic{
      img{
        width:80px;
        height:80px;

      }
    }
    .add-button{
      width: 54px;
      height: 54px;
      border: 1px dashed #ddd;
      padding-top: 8px;
      line-height: 1;
    }
  }
}
</style>



