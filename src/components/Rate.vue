<template>
  <div>
    <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
      <a @click="back" class="mui-icon iconfont icon-zuo1 color white icon-sm"></a>
      <h1 class="mui-title color white">{{name}}</h1>
    </header>
    <div class="mui-content">
      <div class="rate-bar-box bg white">
        <table>
          <tbody>
            <tr>
              <td class="size12">
                <span v-if="type == 'product'">产品质量</span>
                <span v-if="type == 'market'">购物环境</span>
              </td>
              <td>
                <span class="rate-bar" id="quality">
                  <i class="iconfont" @tap="quality = n" :class="{
                    'red icon-wujiaoxing1 color': quality>=n,
                    'icon-wujiaoxing': quality < n
                  }" v-for="n in 5"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td class="size12">
                <span v-if="type == 'product'">产品款式</span>
                <span v-if="type == 'market'">服务态度</span>
              </td>
              <td>
                <span class="rate-bar" id="style">
                  <i class="iconfont" @tap="style = n" :class="{
                    'icon-wujiaoxing1 color red': style>=n,
                    'icon-wujiaoxing': style < n
                  }" v-for="n in 5"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td class="size12">
                <span v-if="type == 'product'">产品价位</span>
                <span v-if="type == 'market'">售后服务</span>
              </td>
              <td>
                <span class="rate-bar" id="price">
                  <i class="iconfont" @tap="price = n" :class="{
                    'icon-wujiaoxing1 color red': price>=n,
                    'icon-wujiaoxing': price < n
                  }" v-for="n in 5"></i>
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
            <div class="pic" id="pic">
              <img v-for="pic in pictures" :src="pic">
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
    <input type="file" id="uploadImageFile" style="display: none;" />
    <div class="mask" v-show="loadingShow">
      <div class="tipText">图片上传中，请稍候...</div>
    </div>
  </div>
</template>

<script>
import {getMerchant, addMessage, getSignature, evaluateProduct, uploadImage } from 'ajax'
import router from '../router.js'

export default {
  name: 'Product_info_rate',
  data(){
    return {
      type: '',
      name:'',
      quality:4,
      style:4,
      price:4,
      evalText: '',

      imgData:[],
      pictures:[],
      quality: 0,
      style: 0,
      price: 0,
      loadingShow: false,
    }
  },
  methods:{
    back(){
      history.back();
    },
    picFormat(pics){
      let picStr = '';
      pics.forEach(pic=>{
        picStr+='&photo='+pic;
      });
      return picStr;
    },
    addPic(){
      const input = document.getElementById('uploadImageFile');
      input.click();
      input.onchange = (e) => {
        var file = e.target.files[0]
        var fd = new FormData();
        fd.append('file', file);
        fd.append('type', 1);
        this.loadingShow = true;
        uploadImage(fd).done((data) => {
          this.pictures.push(data.detail);
          input.value = '';
          this.loadingShow = false;
        })
      }
    },
    uploadEval(){
      if (!this.quality || !this.style || !this.price) {
        mui.alert('请进行评分');
      } else if (!this.evalText) {
        mui.alert('请输入评价详情')
      } else {
        const photo = this.picFormat(this.pictures);
        evaluateProduct(this.$route.query.id, this.quality, this.style, this.price, this.evalText, photo).then(data => {
          if (data.state == 0) {
            mui.alert('评价成功', undefined, undefined, ()=>{
              history.back();
            });
          } else if(data.msg) {
            mui.toast(data.msg)
          } else {
            mui.toast('评论内容暂不支持表情')
          }
        })
      }
    },

  },
  created(){
    this.type = this.$route.query.type;
    this.name = this.$route.query.name;
  },
  mounted(){
  },

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
  height: 50px;
  font-size: 17px;
  border:0!important;
}

.submit:active{
  background-color: rgb(68,191,255);
}


</style>



