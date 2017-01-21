<template>
	<div>
        <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
            <a class="mui-icon iconfont icon-zuo1 color white icon-sm" href="#/person"></a>
            <h1 class="mui-title color white">关于我们</h1>
            <a class="mui-icon iconfont icon-iconfontcolor39 icon-sm mui-pull-right color white"  @tap="contact_us()"></a>
        </header>
        <div class="mui-content">
            <img src="~images/6e36f213e59e967c438f0a606d33950d.png">
            <p class="bg white color c3" style="line-height: 24px;padding: 15px;font-size: 13px;">
                阿比西尼亚猫又称埃塞俄比亚猫、又因步态优美被誉为芭蕾舞猫。而阿比西尼亚猫的毛色同野兔相像，英国人亦称它为兔猫或球猫。阿比西尼亚猫历史悠久，原产于阿比西尼亚（今埃塞俄比亚）。在保存下来的古埃及神猫的木乃伊中，有一种血红色的猫与它十分相像，因此，许多人认为它是古埃及神猫的直系后代。
            </p>
        </div>
    </div>
</template>


<script>

export default {
	name: 'person_about_us',
    methods:{
        contact_us: function(){
            mui.confirm('拨打电话13812345678?', '联系我们', null, function(){

            })
        }
    }
}
</script>

<style scoped>
img{
    display: block;
    height: 100px;
    width: 100px;
    margin: 20px auto;
}
</style>



