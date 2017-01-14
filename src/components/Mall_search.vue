<template>
	<div>
		<header class="mui-bar mui-bar-nav top-bar bg white noshadow borderbottom">
	        <div class="mui-input-row mui-search" style="position: absolute;right: 50px;left: 15px;top:1px;">
	            <input type="search" class="mui-input-clear" placeholder="请输入商品名">
	        </div>
	        <a class="mui-btn-link mui-pull-right" href="#/mall">
	            取消
	        </a>
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
	                <a class="mui-btn mui-btn-outlined maincolor" style="" @tap="contact()">联系商家</a>
	                <p class="mui-h6 center color c9 mt5" style="width: 82px;position:absolute;right:15px;top: 75px;">销量999</p>
	            </li>
	            <li class="mui-table-view-cell mui-media">
	                <img class="mui-media-object mui-pull-left img-md" src="~images/WechatIMG174.jpg">
	                <div class="mui-media-body" style="padding-top: 10px;">
	                    <p class="color c3">小浣熊干脆面  50g</p>
	                    <p class="mui-h6 color c9 mt5">原价10元</p>
	                    <p class="mui-h6 color maincolor mt5">积分换购50</p>
	                </div>
	                <a class="mui-btn mui-btn-outlined maincolor" style="" @tap="contact()">联系商家</a>
	                <p class="mui-h6 center color c9 mt5" style="width: 82px;position:absolute;right:15px;top: 75px;">销量999</p>
	            </li>
	        </ul>
	    </div>
	</div>
</template>


<script>
export default {
	name: 'mall_search'
}
</script>
















