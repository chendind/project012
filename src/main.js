// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueTap from 'v-tap';
import router from './router'
import {getJsApi, hasPhone} from 'src/ajax/index.js'
import {getAgent} from 'src/assets/js/util.js'
// import 'src/assets/js/vconsole.min.js'
import "src/assets/less/public.less"
import "src/assets/less/index.less"
Vue.use(vueTap)
Vue.filter('timeFormat', (stamp)=>{
  var date = new Date(stamp);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  var h = date.getHours();
  var mi = date.getMinutes();
  return y + "-" + (m<10?"0":"") + m + "-" + (d<10?"0":"") + d + " " + (h<10?"0":"") + h + ":" + (mi<10?"0":"") + mi ;
})

/* eslint-disable no-new */

// Promise.resolve($.post('http://tongzhuang.moovi-tech.com/editUser?id=3')).then(()=>{
const rootVue = new Vue({
  el: '#root',
  router: router,
  data(){
    return {
      appId: 'wx886a3b874e4322a4',
    }
  },
  methods: {
    wxConfig(){
      return getJsApi(location.origin + location.pathname).then(data => {
        if(data.state == 0){
          wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: this.appId, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature,// 必填，签名，见附录1
            jsApiList: ["getLocation",'scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          });
        }
      })
    },
    scanQRCode(){
      return new Promise((resolve, reject) => {
        switch(getAgent()){
          case 'wechat':
            wx.scanQRCode({
              needResult: 1,
              scanType: ["qrCode"],
              success(res) {
                resolve(res.resultStr);
              }
            })
          break;
          case 'android':
          case 'ios':
            window.location.href = "h5:scanQRCode"
            this.$once('scanSuccess', (result) => {
              console.log('main.js #78')
              console.log(result)
              resolve(result)
            });
            this.$once('scanFail', () => {
              reject({code: 2, msg: ''})
            });
          break;
          case 'pc':
            reject({code: 1, msg: '扫码功能不可用'})
          break;
        }
      });
    }
  },
  mounted(){
    mui('body').on('tap','[href]',function(e){
        e.stopPropagation()
        e.preventDefault()
        window.location.href=$(this).attr('href');
    })
    hasPhone().then((data) => {
      if(!data.data && data.state == 0){
        window.location.href = "index.html#/bind_phone"
      }
    })
    window.h5scanSuccess = (result) => {
      console.log('main.js: h5scanSuccess:')
      console.log(result)
      this.$emit('scanSuccess', result)
    }
    window.h5scanFail = () => {
      this.$emit('scanFail')
    }
  }
})
window.rootVue = rootVue;
// })
// 把对象转换成字符串，并进行URI编码，用于url中的查询参数拼接
function encodeObj(obj){
  return encodeURI(JSON.stringify(obj));
}
// 获取url中的search，提取数据
function getQueryData(){
    var searchUrl = window.location.search.split("?")[1];
    if(searchUrl&&searchUrl.search("=")>0){
        searchUrl = searchUrl.split("=")[0];
    }
    var URI = decodeURI(searchUrl);
    var parseURI = URI;
    if(URI){
        try{
            parseURI = JSON.parse(URI);
        }
        catch(e){
            parseURI = "";
        }
    }
    return parseURI;
}
