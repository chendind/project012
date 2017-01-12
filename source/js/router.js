const Market = {
	template:'\
		<div class="mui-content">\
			<header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">\
	        	<a class="mui-icon iconfont icon-jia mui-pull-right color white" @tap="addMarket()"></a>\
	        	<h1 class="mui-title color white">我的商家</h1>\
	    	</header>\
	    	<div class="mui-content">\
	        <ul class="mui-table-view mt0">\
	            <li class="mui-table-view-cell mui-media">\
	                <a class="mui-navigate-right" href="market_info.html">\
	                    <img class="mui-media-object middle border circle" src="../source/images/1.png">\
	                    洛兹服饰专卖店\
	                </a>\
	            </li>\
	        </ul>\
	        <ul class="mui-table-view mt10">\
	            <li class="mui-table-view-cell mui-media">\
	                <a class="mui-navigate-right" href="market_info.html">\
	                    <img class="mui-media-object middle border circle" src="../source/images/2.png">\
	                    H&M品牌专卖店\
	                </a>\
	            </li>\
	        </ul>\
	        <ul class="mui-table-view mt10">\
	            <li class="mui-table-view-cell mui-media">\
	                <a class="mui-navigate-right" href="market_info.html">\
	                    <img class="mui-media-object middle border circle" src="../source/images/3.png">\
	                    你的名字服饰专卖店\
	                </a>\
	            </li>\
	        </ul>\
        </div>\
    </div>',
    methods:{
        addMarket: function(){
            mui.prompt(' ', '输入商家代码', '添加商家', null, function(){

            })
        }
    }
}
const Mall = {
	template:
		'<div class="mui-content">\
			<header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">\
		        <a class="mui-icon iconfont icon-sousuo mui-pull-right color white icon-sm" href="mall_search.html"></a>\
		        <h1 class="mui-title color white">积分商城</h1>\
		    </header>\
		    <div class="mui-content">\
		        <div id="slider" class="mui-slider" >\
		            <div class="mui-slider-group mui-slider-loop">\
		                <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->\
		                <div class="mui-slider-item mui-slider-item-duplicate">\
		                    <a href="#">\
		                        <img src="../source/images/mask1.jpg">\
		                    </a>\
		                </div>\
		                <!-- 第一张 -->\
		                <div class="mui-slider-item">\
		                    <a href="#">\
		                        <img src="../source/images/mask1.jpg">\
		                    </a>\
		                </div>\
		                <!-- 第二张 -->\
		                <div class="mui-slider-item">\
		                    <a href="#">\
		                        <img src="../source/images/mask1.jpg">\
		                    </a>\
		                </div>\
		                <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->\
		                <div class="mui-slider-item mui-slider-item-duplicate">\
		                    <a href="#">\
		                        <img src="../source/images/mask1.jpg">\
		                    </a>\
		                </div>\
		            </div>\
		            <div class="mui-slider-indicator">\
		                <div class="mui-indicator mui-active"></div>\
		                <div class="mui-indicator"></div>\
		            </div>\
		        </div>\
		        <ul class="mui-table-view mui-grid-view mui-grid-9 bg white mt10">\
		            <li class="mui-table-view-cell mui-media mui-col-xs-3">\
		                <a href="mall_catagory.html">\
		                    <div class="icon-bg">\
		                        <span class="mui-icon iconfont icon-lingshi1 color white"></span>\
		                    </div>\
		                    <div class="mui-media-body">零食</div>\
		                </a>\
		            </li>\
		            <li class="mui-table-view-cell mui-media mui-col-xs-3">\
		                <a href="mall_catagory.html">\
		                    <div class="icon-bg" style="background-color:#c18dd9;">\
		                        <span class="mui-icon iconfont icon-jingpinfushi color white"></span>\
		                    </div>\
		                    <div class="mui-media-body">服饰</div>\
		                </a>\
		            </li>\
		            <li class="mui-table-view-cell mui-media mui-col-xs-3">\
		                <a href="mall_catagory.html">\
		                    <div class="icon-bg" style="background-color:#fab482;">\
		                        <span class="mui-icon iconfont icon-shishangshipin color white"></span>\
		                    </div>\
		                    <div class="mui-media-body">饰品</div>\
		                </a>\
		            </li>\
		            <li class="mui-table-view-cell mui-media mui-col-xs-3">\
		                <a href="mall_catagory.html">\
		                    <div class="icon-bg" style="background-color:#84bffa;">\
		                        <span class="mui-icon iconfont icon-icon color white"></span>\
		                    </div>\
		                    <div class="mui-media-body">百货</div>\
		                </a>\
		            </li>\
		            <li class="mui-table-view-cell mui-media mui-col-xs-3">\
		                <a href="mall_catagory.html">\
		                    <div class="icon-bg" style="background-color:#68d2d4;">\
		                        <span class="mui-icon iconfont icon-taohuafei color white"></span>\
		                    </div>\
		                    <div class="mui-media-body">话费</div>\
		                </a>\
		            </li>\
		            <li class="mui-table-view-cell mui-media mui-col-xs-3">\
		                <a href="mall_catagory.html">\
		                    <div class="icon-bg" style="background-color:#6fd8a6;">\
		                        <span class="mui-icon iconfont icon-shouji color white"></span>\
		                    </div>\
		                    <div class="mui-media-body">手机</div>\
		                </a>\
		            </li>\
		            <li class="mui-table-view-cell mui-media mui-col-xs-3">\
		                <a href="mall_catagory.html">\
		                    <div class="icon-bg" style="background-color:#f29aa3;">\
		                        <span class="mui-icon iconfont icon-jiaju color white"></span>\
		                    </div>\
		                    <div class="mui-media-body">家居</div>\
		                </a>\
		            </li>\
		            <li class="mui-table-view-cell mui-media mui-col-xs-3">\
		                <a href="mall_catagory.html">\
		                    <div class="icon-bg" style="background-color:#f4bb5f;">\
		                        <span class="mui-icon iconfont icon-z-sport color white"></span>\
		                    </div>\
		                    <div class="mui-media-body">运动</div>\
		                </a>\
		            </li>\
		        </ul>\
		        <div class="mui-card-content bg maincolor banner center mt10">\
		            <div class="mui-card-content-inner pd10">\
		                <h5 class="color white">为您优选</h5>\
		                <h5 class="color white">PREFERENCE</h5>\
		            </div>\
		        </div>\
		        <div class="mui-row">\
		            <div class="mui-col-xs-6">\
		                <div class="mui-card" style="margin-right:5px">\
		                    <div href="mall_info.html" class="mui-card-header mui-card-media bg contain" style="height:40vw;background-image:url(../source/images/mobile.png);"></div>\
		                    <div href="mall_info.html" class="mui-card-content">\
		                        <div class="mui-card-content-inner">\
		                            <p class="color c3 mb0">iPhone</p>\
		                            <p>32G 银色</p>\
		                            <p class="color maincolor mb0">积分 8888</p>\
		                        </div>\
		                    </div>\
		                    <div href="mall_order.html" class="mui-card-content bg maincolor center pd10">\
		                        <span class="color white">立即兑换</span>\
		                    </div>\
		                </div>\
		            </div>\
		            <div class="mui-col-xs-6">\
		                <div class="mui-card" style="margin-left:5px">\
		                    <div href="mall_info.html" class="mui-card-header mui-card-media bg contain" style="height:40vw;background-image:url(../source/images/mobile.png);"></div>\
		                    <div href="mall_info.html" class="mui-card-content">\
		                        <div class="mui-card-content-inner">\
		                            <p class="color c3 mb0">iPhone</p>\
		                            <p>32G 银色</p>\
		                            <p class="color maincolor mb0">积分 8888</p>\
		                        </div>\
		                    </div>\
		                    <div href="mall_order.html" class="mui-card-content bg maincolor center pd10">\
		                        <span class="color white">立即兑换</span>\
		                    </div>\
		                </div>\
		            </div>\
		        </div>\
		    </div>\
		</div>',
	mounted: function () {
		mui.init();
	}
}
const Content = {
	template:
		'<div class="mui-content">\
			<header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">\
		        <h1 class="mui-title color white">内容推荐</h1>\
		    </header>\
			<div class="mui-content">\
		        <a href="content_detail.html">\
		            <div class="bg" v-for="item in items" :style="\'height:140px;background-image:url(\'+item.img+\');\'">\
		            </div>\
		        </a>\
	        </div>\
	    </div>',
    data: function () {
    	return {
                items:[{
                    img: "../source/images/1.jpg"
                },{
                    img: "../source/images/2.jpg"
                },{
                    img: "../source/images/3.jpg"
                },{
                    img: "../source/images/4.jpg"
                }]
            }
    },
}
const Person = {
	template:
		'<div class="mui-content bg white person" style="background-color: white;height: 100vh;">\
	        <div class="bg mui-card-content" style="height: 175px;text-align: center;background-image:url(\'../source/images/bg.png\');">\
	            <img class="border circle" src="../source/images/user.png" style="height: 80px;width: 80px;margin: 20px 0 8px;">\
	            <p class="color c3" style="margin-bottom: 3px;font-size: 15px;">西柚西柚吸吸柚</p>\
	            <p class="mui-h6 color c9">剩余积分：7728</p>\
	        </div>\
	        <ul class="mui-table-view">\
	            <li class="mui-table-view-cell mui-media">\
	                <a href="person_my_order.html" class="mui-navigate-right">我的订单</a>\
	            </li>\
	            <li class="mui-table-view-cell mui-media">\
	                <a href="person_about_us.html" class="mui-navigate-right">关于我们</a>\
	            </li>\
	        </ul>\
	    </div>'
}

const routes = [
	{path: '', redirect: '/market'},
	{path: '/market', component: Market},
	{path: '/mall', component: Mall},
	{path: '/content', component: Content},
	{path: '/person', component: Person}
]

const router = new VueRouter({
	routes: routes
})




















