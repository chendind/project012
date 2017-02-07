<template>
	<div v-if="name">
		<header class="mui-bar mui-bar-nav top-bar bg transparent noshadow">
	        <a @click="back" class="mui-icon iconfont icon-zuo1 color maincolor icon-sm"></a>
	    </header>
	    <div class="mui-card-header mui-card-media fixBox2 noafter" :style="'background-image:url('+img+')'"></div>
	    <div class="mui-card-content bg white borderbottom">
	        <div class="mui-card-content-inner">
	            <p class="mui-h5 color c3">{{name}}</p>
	            <div>
	                <span class="color maincolor">{{score}}积分</span>
	                <span class="mui-pull-right">{{sold}}人已兑换</span>
	            </div>
	        </div>
	    </div>
	    <div class="mui-card-content bg white mt10">
	        <div class="mui-card-content-inner color c6">
	            <p class="mui-h5 color c3">详细介绍</p>
              <div v-html="detail"></div>
	        </div>
	    </div>
	     <router-link :to="{path: '/mall_order', query: {id: $route.query.id}}" class="mui-bar mui-bar-tab noshadow bg maincolor center" style="padding: 15px;">
	        <span class="color white">立即兑换</span>
	    </router-link>
	</div>
</template>


<script>
var imgurl = require("../../static/source/images/mask2.jpg")
import {getProduct} from 'ajax'

export default {
	name: 'mall_info',
	data(){
		return {
			img: '',
      name: '',
      score: '',
      detail: '',
      sold: ''
		}
	},
	methods: {
		back: function () {
        	history.back();
        }
	},
  beforeRouteEnter(to, from, next){
    getProduct(to.query.id).then((res)=>{
      next($vm=>{
        $vm.img = res.img
        $vm.name = res.name
        $vm.score = res.score
        $vm.detail = res.detail
        $vm.sold = res.sold
      })
    })
  }
}
</script>

<style scoped>
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
}
</style>
















