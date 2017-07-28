<template>
	<div>
        <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
            <a class="mui-icon iconfont icon-zuo1 color white icon-sm" href="#/person"></a>
            <h1 class="mui-title color white">关于我们</h1>
            <a class="mui-icon iconfont icon-iconfontcolor39 icon-sm mui-pull-right color white"  @tap="contact_us()"></a>
        </header>
        <div class="mui-content">
            <img :src="require('assets/images/about.jpeg')">
            <p class="bg white color c3" style="line-height: 24px;padding: 15px;font-size: 13px;">
                消费者可以扫码了解商品信息以及厂商信息，完善售后，也利于商家的客户管理和品牌维护
            </p>
        </div>
        <a href="tel:057188141010" style="display: none;" id="telphoneTag"></a>
    </div>
</template>


<script>

export default {
	name: 'person_about_us',
    methods:{
        contact_us: function(){
          document.getElementById('telphoneTag').click();
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



