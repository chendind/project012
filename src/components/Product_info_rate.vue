<template>
  <div>
    <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
      <router-link :to="{path: '/market_info', query: {id: $route.query.id}}" class="mui-icon iconfont icon-zuo1 color white icon-sm"></router-link>
      <h1 class="mui-title color white">商品名</h1>
    </header>
    <div class="mui-content">
      <div class="rate-bar-box bg white">
        <table>
          <tbody>
            <tr>
              <td class="size12">产品质量</td>
              <td>
                <span class="rate-bar" id="quality">
                  <i class="iconfont icon-wujiaoxing1 color red" @tap="setValue('quality',1)"></i>
                  <i class="iconfont icon-wujiaoxing1 color red" @tap="setValue('quality',2)"></i>
                  <i class="iconfont icon-wujiaoxing1 color red"@tap="setValue('quality',3)"></i>
                  <i class="iconfont icon-wujiaoxing1 color red"@tap="setValue('quality',4)"></i>
                  <i class="iconfont icon-wujiaoxing color"@tap="setValue('quality',5)"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td class="size12">
                产品款式
              </td>
              <td>
                <span class="rate-bar" id="style">
                  <i class="iconfont icon-wujiaoxing1 color red" @tap="setValue('style',1)"></i>
                  <i class="iconfont icon-wujiaoxing1 color red" @tap="setValue('style',2)"></i>
                  <i class="iconfont icon-wujiaoxing1 color red" @tap="setValue('style',3)"></i>
                  <i class="iconfont icon-wujiaoxing1 color red" @tap="setValue('style',4)"></i>
                  <i class="iconfont icon-wujiaoxing color" @tap="setValue('style',5)"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td class="size12">产品价位</td>
              <td>
                <span class="rate-bar" id="price">
                  <i class="iconfont icon-wujiaoxing1 color red" @tap="setValue('price',1)"></i>
                  <i class="iconfont icon-wujiaoxing1 color red"  @tap="setValue('price',2)" ></i>
                  <i class="iconfont icon-wujiaoxing1 color red" @tap="setValue('price',3)"></i>
                  <i class="iconfont icon-wujiaoxing1 color red" @tap="setValue('price',4)"></i>
                  <i class="iconfont icon-wujiaoxing color" @tap="setValue('price',5)"></i>
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
        <textarea v-model="evalText" class="noborder size12 pd10" style="padding-top: 0;margin-bottom: 0;" rows="3" placeholder="晒图＋50字以上评价可以获得100积分哦~"></textarea>
        <div class="pic-box pd10">
          <div class="pics">
            <div class="pic">
              <img v-for="pic in pics" :src="pic">
              <div class="add-button center color" @tap="addPic">
                <i class="iconfont icon-xiangji" style="font-size: 18px"></i><br>
                <span style="font-size: 10px" >添加图片</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button @click="uploadEval" class="submit">提交</button>
  </div>
</template>


<script>
import {getMerchant, addMessage, getSignature, evaluateProduct } from 'ajax'
import router from '../router.js'

export default {
  name: 'Product_info_rate',
  data(){
    return {
      quality:4,
      style:4,
      price:4,
      evalText: '',
      pics:[],
      // pics:["http://tongzhuang.moovi-tech.com/uploads/img/edae45d41478436997a34bd9c9affe55.jpg",
      // "http://tongzhuang.moovi-tech.com/uploads/img/edae45d41478436997a34bd9c9affe55.jpg",
      // "http://tongzhuang.moovi-tech.com/uploads/img/edae45d41478436997a34bd9c9affe55.jpg",
      // "http://tongzhuang.moovi-tech.com/uploads/img/edae45d41478436997a34bd9c9affe55.jpg",
      // "http://tongzhuang.moovi-tech.com/uploads/img/edae45d41478436997a34bd9c9affe55.jpg",
      // "http://tongzhuang.moovi-tech.com/uploads/img/edae45d41478436997a34bd9c9affe55.jpg",
      // ]
    }
  },
  methods:{
    setValue(item,value){
      this.$data[item] = value;
      let stars;
      stars=$('#'+item+' i')
      stars.removeClass('red icon-wujiaoxing1').addClass('icon-wujiaoxing');
      for(let pos=0;pos<value;pos++){
        stars.eq(pos).addClass('red icon-wujiaoxing1').removeClass('icon-wujiaoxing');
      }
    },
    addPic(){
      const self = this;
      wx.ready(()=>{
        wx.chooseImage({
          count: 9, 
          success: function (res) {
            self.$data.pics=[...self.$data.pics,...res.localIds];
          }
        });
      })
    },
    picFormat(pics){
      let picStr = '';
      pics.forEach(pic=>{
        picStr+='&'+pic;
      });
    },
    uploadEval(){
      const quality = this.$data.quality;
      const style = this.$data.style;
      const price = this.$data.price;
      const evalText = this.$data.evalText;
      const photos = this.picFormat(this.$data.pics);
      const id = this.$route.query.id;
      console.log(this.$data)
      evaluateProduct(id,quality,style,price,evalText,photos).then(msg=>{
          console.log(msg);
        },error=>{
          console.log(error);
        }
      )
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
      line-height: 10px;
      img{
        width:54px;
        height:54px;
        margin-right: 10px;
        margin-top: 8px;
        vertical-align: bottom;

      }
      img:last-of-type{
        margin-right:6px!important;
      }
    }
    .add-button{
      width: 54px;
      height: 54px;
      border: 1px dashed #ddd;
      padding-top: 8px;
      line-height: 1;
      display: inline-block;
      margin-top: 8px;
    }
  }
}

.submit{
  position: fixed;
  right: 0px;
  bottom: 0;
  width: 100%;
  border-radius: 0;
  background-color: rgb(68,191,255);
  color: white;
  height: 44px;
  font-size: 17px;
  border:0!important;
}
</style>



