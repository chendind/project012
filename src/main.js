// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router'

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

Promise.resolve($.post('http://tongzhuang.moovi-tech.com/editUser?id=3')).then(()=>{
  new Vue({
    el: '#root',
    router: router
  })
})
