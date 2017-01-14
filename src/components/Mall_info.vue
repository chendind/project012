<template>
	<div>
		<header class="mui-bar mui-bar-nav top-bar bg transparent noshadow">
	        <a href="#/mall" class="mui-icon iconfont icon-zuo1 color maincolor icon-sm"></a>
	    </header>
	    <div class="mui-card-header mui-card-media fixBox2 noafter" :style="'background-image:url('+imgurl+')'"></div>
	    <div class="mui-card-content bg white borderbottom">
	        <div class="mui-card-content-inner">
	            <p class="mui-h5 color c3">iPhone 7 Plus  32g  银色</p>
	            <div>
	                <span class="color maincolor">8888积分</span>
	                <span class="mui-pull-right">9999人已兑换</span>
	            </div>
	        </div>
	    </div>
	    <div class="mui-card-content bg white mt10">
	        <div class="mui-card-content-inner color c6">
	            <p class="mui-h5 color c3">详细介绍</p>
	            源自中国的品牌童装洛兹，将环保舒适的面料，融入童趣的设计理念，关注儿童的健康成长，让每一个童年都有不同的色彩，当我们再回首时，才发现童年是那么的晶莹璀璨，光彩照人，这童年的印象深深地刻在我们的心灵深处，永远是心中抹不去的记忆...
	        </div>
	    </div>
	     <div href="#/mall_order" class="mui-bar mui-bar-tab noshadow bg maincolor center" style="padding: 15px;">
	        <span class="color white">立即兑换</span>
	    </div>
	</div>
</template>


<script>
var imgurl = require("../../static/source/images/mask2.jpg")
export default {
	name: 'mall_info',
	data(){
		return {
			imgurl
		}
	}
}
</script>

<style scoped>
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
}
</style>
















