
<template>
	<div>
		<header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
	        <a @click="back" class="mui-icon iconfont icon-zuo1 color white icon-sm"></a>
	        <h1 class="mui-title color white">确认订单</h1>
	    </header>

	    <div class="mui-content">
		    <form class="mui-input-group">
		    	<div class="mui-input-row">
		    		<label>收货人</label>
		    		<input type="text" name="text">
		    	</div>
		    	<div class="mui-input-row">
		    		<label>电话</label>
		    		<input type="text" name="text">
		    	</div>
		    	<div class="mui-input-row" @click="getAddress">
		    		<label>地区</label>
		    		<input class="address" type="text" name="text" readonly="readonly">
		    	</div>
		    	<div class="mui-input-row" style="height:auto;">
		    		<textarea rows="2" placeholder="请输入街道地址"></textarea>
		    	</div>
		    </form>
	        <ul class="mui-table-view mt0">
	            <li class="mui-table-view-cell mui-media">
		            <a href="#/mall_info">
		                <div class="mui-media-object mui-pull-left img-md bg" :style="'background-image:url('+imgurl+')'"></div>
		                <div class="mui-media-body">
		                    <p class="color c3">iPhone 7 Plus  32g  银色</p>
		                </div>
		                <div class="mui-media-body" style="position: absolute;bottom: 10px;left: 114px;right: 15px;">
		                    8888积分
		                    <span class="mui-pull-right color c9">×1</span>
		                </div>
		            </a>
	            </li>
	            <li class="mui-table-view-cell">
	                配送方式
	                <span class="mui-pull-right">快递  免邮</span>
	            </li>
	        </ul>
	    </div>
	    <nav class="mui-bar mui-bar-tab noshadow bg maincolor">
	        <div class="mui-tab-item bg white mui-text-left" style="width: 100%;padding-left: 15px;">
	            <span class="color maincolor">合计：8888积分</span>
	        </div>
	        <a class="mui-tab-item color white" @tap.prevent.stop="order()" style="width:118px;">
	            提交订单
	        </a>
	    </nav>
	</div>
</template>

<script>
require("static/source/mui/css/mui.picker.css")
require("static/source/mui/css/mui.poppicker.css")

require("static/source/mui/js/mui.picker.js")
require("static/source/mui/js/mui.poppicker.js")
var imgurl = require("../../static/source/images/mask2.jpg")
export default {
	name: 'mall_order',
    methods:{
        order: function(){
            
        },
        back: function () {
        	history.back();
        },
        getAddress: function () {
			var picker = new mui.PopPicker({layer:3});
	    	picker.setData(cityData);
			picker.show(function(items) {
				$("input.address").val(items[0].text + " " +items[1].text + " " + items[2].text);
			});
        }
    },
    data(){
    	return {
    		imgurl
    	}
    }
}
</script>

<style scoped>
.img-md{
    max-width: 88px;
    width: 88px;
    height: 70px !important;
}
</style>
















