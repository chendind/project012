<template>
	<div>
        <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
            <a href="#/market_info" class="mui-icon iconfont icon-zuo1 color white icon-sm"></a>
            <a class="mui-btn mui-btn-blue mui-btn-link mui-pull-right color white">提交</a>
            <h1 class="mui-title color white">洛姿服饰专卖店</h1>
        </header>
        <div class="mui-content bg white">
            <div class="mui-content-padded color c3" style="margin-left: 15px;margin-bottom: 0;">输入留言</div>
            <textarea class="message" placeholder="请详细描述你想说的话..."></textarea>
        </div>   
    </div>
</template>


<script>
export default {
	name: 'Market_message',
    methods:{
        addMarket: function(){
            mui.prompt(' ', '输入商家代码', '添加商家', null, function(){

            })
        },
        message: function(){
            console.log(123)
        },
        contact: function(){
            mui.confirm('拨打电话13812378789？','联系商家',null,function(){
                
            })
        }
    }
}
</script>

<style scoped>
.message{
    border: none;
    font-size: 14px;
}
</style>



