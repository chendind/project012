
<template>
	<div class="detail">
		<header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
	        <a class="mui-icon iconfont icon-zuo1 color white icon-sm" href="#/content"></a>
	        <h1 class="mui-title color white">内容推荐</h1>
	    </header>
	    <div class="mui-content bg white">
	        <div>
	            <p class="title color c3">{{item.title}}</p>
	            <span class="mui-h6 color c9">{{getTime(item.time)}}</span>
	            <span class="mui-h6 color c9 mui-pull-right">推送自：{{item.from}}</span>
	            <hr>
	            <p class="mui-h5 color c3" style="line-height: 24px;">{{item.text}}</p>
	        </div>
	    </div>
	</div>
</template>


<script>
export default {
	name: 'content_detail',
    data: function () {
        return {
        	item:{
	            title: "玳瑁、虎斑、踏雪......是猫的品种？人家明明是花色好吗！",
	            text: "玳瑁、虎斑、踏雪......是猫的品种？人家明明是花色好吗！玳瑁、虎斑、踏雪......是猫的品种？人家明明是花色好吗！玳瑁、虎斑、踏雪......是猫的品种？人家明明是花色好吗！玳瑁、虎斑、踏雪......是猫的品种？人家明明是花色好吗！玳瑁、虎斑、踏雪......是猫的品种？人家明明是花色好吗！玳瑁、虎斑、踏雪......是猫的品种？人家明明是花色好吗！",
	            time: 0,
	            from: "胜山酷彩制衣厂"
	        }
        }
    },
    methods:{
        getTime: function (stamp) {
            var date = new Date(stamp);
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            var d = date.getDate();
            return y + "年" + m + "月"  + d + "日";
        }
    }
}
</script>

<style scoped>
div.detail{
    background-color: white;
    height: 100vh;
}
div.mui-content div{
    padding: 13px 15px;
}
p.title{
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 14px;
}
hr{
    border-width: 1px 0 0;
    border-color: #dddddd;
    border-style: solid;
    margin: 12px 0;
}
</style>
















