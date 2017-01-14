<template>
	<div class="mui-content">
		<header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
	        <h1 class="mui-title color white">内容推荐</h1>
	    </header>
		<div class="mui-content">
	        <a href="#/content_detail">
	            <div class="bg" v-for="item in items" :style="'height:140px;background-image:url('+item.img+');'">
	            </div>
	        </a>
        </div>
    </div>
</template>


<script>
var imgurl1 = require('../assets/images/1.jpg')
var imgurl2 = require('../assets/images/2.jpg')
var imgurl3 = require('../assets/images/3.jpg')
var imgurl4 = require('../assets/images/4.jpg')
export default {
	name: 'content',
	data: function () {
    	return {
                items:[{
                    img: imgurl1
                },{
                    img: imgurl2
                },{
                    img: imgurl3
                },{
                    img: imgurl4
                }]
            }
    },
}
</script>



