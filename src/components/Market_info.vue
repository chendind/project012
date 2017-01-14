<template>
	<div>
		<header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
	        <a href="#/" class="mui-icon iconfont icon-zuo1 color white icon-sm"></a>
	        <!-- <a class="mui-icon iconfont icon-jia mui-pull-right color white icon-sm" @tap="addMarket()"></a> -->
	        <h1 class="mui-title color white">洛姿服饰专卖店</h1>
	    </header>
	    <nav class="mui-bar mui-bar-tab noshadow bg maincolor">
	        <a class="mui-tab-item color white" href="#/market_message">
	            留言
	        </a>
	    </nav>
	    <div class="mui-content">
	        <div class="fixBox1" :style="'background-image: url('+imgurl+')'"></div>
	        <div class="mui-card-content bg white">
	            <div class="mui-card-content-inner">
	                <img class="middle border img-sm" src="~images/1.png" style="position: absolute;top:-10px;">
	                <span style="margin-left: 60px;">
	                    洛兹服饰专卖店
	                </span>
	                <a class="mui-btn mui-btn-outlined mui-pull-right maincolor" style="position:absolute;right: 15px;top: 8px;" @tap="contact()">联系商家</a>
	                <p style="margin-top: 15px;">所在地区：浙江省杭州市</p>
	                <p style="margin-bottom: 0;">主营产品：棉衣、夹克、背心、中裤</p>
	            </div>
	        </div>
	        <div class="mui-card-content bg white mt10">
	            <div class="mui-card-content-inner color c6">
	                <p class="mui-h5 color c3">详细介绍</p>
	                源自中国的品牌童装洛兹，将环保舒适的面料，融入童趣的设计理念，关注儿童的健康成长，让每一个童年都有不同的色彩，当我们再回首时，才发现童年是那么的晶莹璀璨，光彩照人，这童年的印象深深地刻在我们的心灵深处，永远是心中抹不去的记忆...
	            </div>
	        </div>
	    </div>
	</div>
</template>


<script>
var imgurl = require("../../static/source/images/mask.jpg");
export default {
	name: "market_info",
    methods:{
        addMarket: function(){
            mui.prompt(' ', '输入商家代码', '添加商家', null, function(){

            })
        },
        contact: function(){
            mui.confirm('拨打电话13812378789？','联系商家',null,function(){
                
            })
        }
    },
    data(){
    	return {
    		imgurl
    	}
    }
}
</script>


















