// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueTap from 'v-tap';
import router from './router'
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
new Vue({
  el: '#root',
  router: router,
  mounted(){
    mui('body').on('tap','[href]',function(e){
        e.stopPropagation()
        e.preventDefault()
        window.location.href=$(this).attr('href');
    })
  }
})
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
