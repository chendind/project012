<template>
	<div class="mui-content">
		<header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
	        <a class="mui-icon iconfont icon-sousuo mui-pull-right color white icon-sm" href="#/mall_search"></a>
	        <h1 class="mui-title color white">积分商城</h1>
	    </header>
	    <div class="mui-content">
	        <div id="slider" class="mui-slider" >
	            <div class="mui-slider-group mui-slider-loop">
	                <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
	                <div class="mui-slider-item mui-slider-item-duplicate">
	                    <a href="#">
	                        <img src="~images/mask1.jpg">
	                    </a>
	                </div>
	                <!-- 第一张 -->
	                <div class="mui-slider-item">
	                    <a href="#">
	                        <img src="~images/mask1.jpg">
	                    </a>
	                </div>
	                <!-- 第二张 -->
	                <div class="mui-slider-item">
	                    <a href="#">
	                        <img src="~images/mask1.jpg">
	                    </a>
	                </div>
	                <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
	                <div class="mui-slider-item mui-slider-item-duplicate">
	                    <a href="#">
	                        <img src="~images/mask1.jpg">
	                    </a>
	                </div>
	            </div>
	            <div class="mui-slider-indicator">
	                <div class="mui-indicator mui-active"></div>
	                <div class="mui-indicator"></div>
	            </div>
	        </div>
	        <ul class="mui-table-view mui-grid-view mui-grid-9 bg white mt10">
	            <li class="mui-table-view-cell mui-media mui-col-xs-3">
	                <router-link to="/mall_category?type=零食">
	                    <div class="icon-bg">
	                        <span class="mui-icon iconfont icon-lingshi1 color white"></span>
	                    </div>
	                    <div class="mui-media-body">零食</div>
	                </router-link>
	            </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-3">
	                <router-link to="/mall_category?type=服饰">
	                    <div class="icon-bg" style="background-color:#c18dd9;">
	                        <span class="mui-icon iconfont icon-jingpinfushi color white"></span>
	                    </div>
	                    <div class="mui-media-body">服饰</div>
	                </router-link>
	            </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-3">
	                <router-link to="/mall_category?type=饰品">
	                    <div class="icon-bg" style="background-color:#fab482;">
	                        <span class="mui-icon iconfont icon-shishangshipin color white"></span>
	                    </div>
	                    <div class="mui-media-body">饰品</div>
	                </router-link>
	            </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-3">
	                <router-link to="/mall_category?type=百货">
	                    <div class="icon-bg" style="background-color:#84bffa;">
	                        <span class="mui-icon iconfont icon-icon color white"></span>
	                    </div>
	                    <div class="mui-media-body">百货</div>
	                </router-link>
	            </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-3">
	                <router-link to="/mall_category?type=话费">
	                    <div class="icon-bg" style="background-color:#68d2d4;">
	                        <span class="mui-icon iconfont icon-taohuafei color white"></span>
	                    </div>
	                    <div class="mui-media-body">话费</div>
	                </router-link>
	            </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-3">
	                <router-link to="/mall_category?type=手机">
	                    <div class="icon-bg" style="background-color:#6fd8a6;">
	                        <span class="mui-icon iconfont icon-shouji color white"></span>
	                    </div>
	                    <div class="mui-media-body">手机</div>
	                </router-link>
	            </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-3">
	                <router-link to="/mall_category?type=家居">
	                    <div class="icon-bg" style="background-color:#f29aa3;">
	                        <span class="mui-icon iconfont icon-jiaju color white"></span>
	                    </div>
	                    <div class="mui-media-body">家居</div>
	                </router-link>
	            </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-3">
	                <router-link to="/mall_category?type=运动">
	                    <div class="icon-bg" style="background-color:#f4bb5f;">
	                        <span class="mui-icon iconfont icon-z-sport color white"></span>
	                    </div>
	                    <div class="mui-media-body">运动</div>
	                </router-link>
	            </li>
	        </ul>
	        <div class="mui-card-content bg maincolor banner center mt10">
	            <div class="mui-card-content-inner pd10">
	                <h5 class="color white">为您优选</h5>
	                <h5 class="color white">PREFERENCE</h5>
	            </div>
	        </div>
	        <div class="mui-row">
	            <div class="mui-col-xs-6" v-for="item in list">
	                <div class="mui-card" style="margin-right:5px">
	                    <div :href="'#/mall_info?id='+item.id" class="mui-card-header mui-card-media bg contain" :style="'height:40vw;background-image:url('+item.img+');'"></div>
	                    <div :href="'#/mall_info?id='+item.id" class="mui-card-content">
	                        <div class="mui-card-content-inner">
	                            <p class="color c3 mb0">{{item.name}}</p>
	                            <p>{{item.description}}</p>
	                            <p class="color maincolor mb0">积分 {{item.type}}</p>
	                        </div>
	                    </div>
	                    <div :href="'#/mall_order?id='+item.id" class="mui-card-content bg maincolor center pd10">
	                        <span class="color white">立即兑换</span>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
</template>


<script>
var imgurl = require("../../static/source/images/mobile.png");
import {getProductForPage} from 'ajax'
export default {
	name: 'mall',
	mounted: function () {
		mui('.mui-slider').slider();
	},
	data: function(){
	    return {
	    	imgurl,
	    	list: []
	    }
	},
	beforeRouteEnter(to, from, next){
	    getProductForPage(0, 2).then((res)=>{
	      next($vm=>{
	        $vm.list = res.list
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
















