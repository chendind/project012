<template>
	<div>
		<header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
	        <a href="#/mall" class="mui-icon iconfont icon-zuo1 color white icon-sm"></a>
	        <h1 class="mui-title color white">零食</h1>
	    </header>
	    <div class="mui-content">
	        <ul class="mui-table-view mt0">
	            <li class="mui-table-view-cell mui-media">
	                <img class="mui-media-object mui-pull-left img-md" src="~images/WechatIMG173.jpg">
	                <div class="mui-media-body" style="padding-top: 10px;">
	                    <p class="color c3">卫龙辣条 200g</p>
	                    <p class="mui-h6 color c9 mt5">原价20元</p>
	                    <p class="mui-h6 color maincolor mt5">积分换购88</p>
	                </div>
	                <a class="mui-btn mui-btn-outlined maincolor" style="" @tap="contact()">立即兑换</a>
	                <p class="mui-h6 center color c9 mt5" style="width: 82px;position:absolute;right:15px;top: 75px;">销量999</p>
	            </li>
	            <li class="mui-table-view-cell mui-media">
	                <img class="mui-media-object mui-pull-left img-md" src="~images/WechatIMG174.jpg">
	                <div class="mui-media-body" style="padding-top: 10px;">
	                    <p class="color c3">小浣熊干脆面  50g</p>
	                    <p class="mui-h6 color c9 mt5">原价10元</p>
	                    <p class="mui-h6 color maincolor mt5">积分换购50</p>
	                </div>
	                <a class="mui-btn mui-btn-outlined maincolor" style="" @tap="contact()">立即兑换</a>
	                <p class="mui-h6 center color c9 mt5" style="width: 82px;position:absolute;right:15px;top: 75px;">销量999</p>
	            </li>
	        </ul>
	    </div>
	</div>
</template>


<script>
export default {
	name: 'mall_catagory'
}
</script>

<style scoped>
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
}
</style>
















