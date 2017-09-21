<template>
  <div>
    <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
      <a @click="back" class="mui-icon iconfont icon-zuo1 color white icon-sm"></a>
      <h1 class="mui-title color white">{{data.name}}</h1>
    </header>
    <nav class="mui-bar mui-bar-tab noshadow bg maincolor">
      <!-- <router-link class="mui-tab-item color white" :to="{path: '/market_message', query: {id: $route.query.id}}">
         留言
      </router-link> -->
      <router-link class="mui-tab-item color white" :to="{path: '/rate', query: {id: evalId, type:'product', name: data.name}}" v-tap>
        评价
      </router-link>
    </nav>
    <div class="mui-content">
        <div class="fixBox1" :style="'background-image: url('+data.photo+')'"></div>
        <div class="mui-card-content bg white">
            <div class="mui-card-content-inner">
              <p class="mui-h5 color c3">{{data.name}}</p>
              <div>
                <table style="width: 100%;">
                  <tr>
                    <td class="color maincolor">材质：{{data.material}}</td>
                    <td class="mui-text-right">生产厂家：{{data.factory}}</td>
                  </tr>
                </table>
              </div>
            </div>
        </div>
        <div class="mui-card-content bg white mt10">
            <div class="mui-card-content-inner color c6">
                <p class="mui-h5 color c3">详细介绍</p>
                <div v-html="data.detail">
                  {{data.detail}}
                </div>
            </div>
        </div>
        <div class="mui-card-content bg white mt10">
          <div class="mui-card-content-inner color c6">
            <div class="mui-h5 color c3">历史评价</div>
          </div>
          <div class="eval-box">
            <div class="eval-section" v-for="(eval, $index) in evals">
              <img class="user-avatar" :src="eval.user.img">
              <span class="user-name">{{eval.user.nickname}}</span>
              <span class="rate">{{((eval.after_sale+eval.attitude+eval.environment)/3).toFixed(1)}}</span>
              <p class="eval-content">{{eval.text}}</p>
              <div class="after">
                <img class="eval-pic" v-for="img in eval.photo" :src="img" data-preview-src="" :data-preview-group="$index">
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import { getProductInfo, getEvaluations, focusGood } from 'ajax';
export default {
  name: 'product_info',
  data() {
    return {
      data: {
      },
      evals:[],
      evalId: 0,
    }
  },
  methods: {
    back(){
      history.back();
    },
    getLocationAndFocus(){
      const productId = this.$route.query.id
      // wx.getLocation({
      //   type: 'wgs84',
      //   success: function (res) {
      //     var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
      //     var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
      //     console.log(res);
      //     $.ajax({
      //       url: 'http://api.map.baidu.com/geocoder/v2/?ak=Ogc3s9tT2jSfg8GvYBScols0iyeSoUGG&callback=renderReverse&location=' + latitude + ',' + longitude + '&output=json&pois=1&coordtype=wgs84ll',
      //       type: "GET",
      //       dataType: "jsonp",
      //       jsonp: "callback",
      //       success: function(data){
      //         if(data.status == 0){
      //           var province = data.result.addressComponent.province || "";
      //           var city = data.result.addressComponent.city || "";

      //           focusGood(productId, `${province},${city}`).then(data => {

      //           })
      //         }
      //       },
      //       error: function(error){
      //         defaultHandle(error);
      //       }
      //     })
      //   },
      //   cancel: function () {
      //     defaultHandle();
      //   }
      // })
      var self = this;
      var geolocation = new BMap.Geolocation();
      var geoc = new BMap.Geocoder();
      geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
          var point = new BMap.Point(r.point.lng, r.point.lat);
          console.log(r.point.lng, r.point.lat)
          geoc.getLocation(point, function(rs){
            var addComp = rs.addressComponents;
            // alert(productId)
            // alert(`${addComp.province},${addComp.city}`)
            focusGood(productId, `${addComp.province},${addComp.city}`).then(data => {
              // alert(JSON.stringify(data))
            });
          });

        }
        else {
          mui.alert('获取您的地理位置信息失败');
        }
      },{enableHighAccuracy: true})
    }
  },
  mounted() {
    const productId = this.$route.query.id
    getProductInfo(productId).then(data=>{
      if (data.state == 0) {
        const evalId = data.data.evaluationModel.id;
        this.evalId = evalId;
        this.$data.data=data.data;
        this.$data.data.factory = data.factory.name;
        getEvaluations(evalId).then(data=>{;
          this.$data.evals = data.data;
          this.$nextTick(() => {
            mui.previewImage();
          })
        })
      } else {
        mui.alert('参数错误',undefined,undefined,() => {
          this.$router.replace('/');
        })
      }
    })
    // this.$root.wxConfig().then(data => {
    //   if(data.state == 0){

    //   }
    // })
    // wx.ready(()=>{
    //   console.log('3 ready')
    //   setTimeout(() => {
    //     this.getLocationAndFocus()
    //   }, 1800)
    // })
    this.getLocationAndFocus()
    // window.getLocationAndFocus = this.getLocationAndFocus
  },
  beforeRouteEnter(to, from, next){
    next($vm => {

    });
  }
}
function defaultHandle(data){
  console.log(data)
}
</script>
<style lang='less' scoped>
.user-avatar{
  border-radius: 50%;
  width:35px;
  height:35px;
}

.eval-section{
  position: relative;
  padding: 10px 15px;
  color:rgb(102,102,102);
  overflow: hidden;
  &:after{
    position: absolute;
    display: block;
    content: '';
    height: 0px;
    border-bottom: 1px solid #ddd;
    width: 100%;
    left: 15px;
    right: 0;
    bottom: 0;
  }
}

.user-name{
  vertical-align: top;
  position: relative;
  top: 7px;
  left: 7px;
}

.rate{
  float:right;
  color:rgb(240,36,0);
}

.eval-content{
  color:rgb(102,102,102);
}

.eval-pic{
  width:60px;
  height:60px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: block;
  float: left;
}

</style>
