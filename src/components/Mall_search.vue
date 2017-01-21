<template>
	<div>
		<header class="mui-bar mui-bar-nav top-bar bg white noshadow borderbottom">
	        <div class="mui-input-row mui-search" style="position: absolute;right: 50px;left: 15px;top:1px;">
	            <input type="search" class="mui-input-clear" placeholder="请输入商品名" v-model="keyword">
	        </div>
	        <a class="mui-btn-link mui-pull-right" href="#/mall">
	            取消
	        </a>
	    </header>
	    <div class="mui-content">
	        <ul class="mui-table-view mt0">
	            <li class="mui-table-view-cell mui-media" v-for="i in list">
	                <img class="mui-media-object mui-pull-left img-md" :src="i.img">
	                <div class="mui-media-body" style="padding-top: 10px;">
	                    <p class="color c3">{{i.name}}</p>
	                    <p class="mui-h6 color maincolor mt5">积分换购{{i.score}}</p>
	                </div>
	                <a class="mui-btn mui-btn-outlined maincolor" style="" @tap="contact(i)">联系商家</a>
	                <p class="mui-h6 center color c9 mt5" style="width: 82px;position:absolute;right:15px;top: 75px;">销量{{i.sold}}</p>
	            </li>
	        </ul>
	    </div>
	</div>
</template>


<script>
import {searchProduct} from 'ajax'
import router from '../router.js'

var throttle = require('lodash.throttle');


export default {
	name: 'mall_search',
  watch: {
    keyword(val){
      if (val == '' || val.split('').every(res=>res==' ')) {
        return
      }
      this.search()
    }
  },
  methods: {
    contact(i){
      router.push({path: '/mall_order', query: {id: i.id}})
    }
  },
  created(){
    var $vm = this
    this.search = throttle(()=>{
      searchProduct($vm.keyword).then((res)=>{
        $vm.list = res.list || []
      })
    }, 500)

  },
  data() {
    return {
      list: [],
      keyword: ''
    }
  }
}
</script>
















