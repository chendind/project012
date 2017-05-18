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
            <div class="pic"></div>
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
import {getMerchant, addMessage, getSignature, getArticleForPage } from 'ajax'
import $ from 'jquery'
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
    addPic(){
      wx.ready(()=>{
        console.log('hehe')
        wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
              var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          }
        });
      })
    }
  },
  created(){
    const url = encodeURIComponent(location.href.split('#')[0]);
    getSignature(url).then(signature=>{
      wx.config($.extend(signature,{
         debug: true, 
         appId: 'wx886a3b874e4322a4', 
         jsApiList: ['checkJsApi', 'chooseImage']
      }));
    })
 
  }
}
</script>

<style lang='less' scoped>
.pic-box{
  .pics{
    .pic{

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



