<template>
	<div>
		<header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
	    <a href="#/" class="mui-icon iconfont icon-zuo1 color white icon-sm"></a>
      <h1 class="mui-title color white">{{data.name}}</h1>
    </header>
    <nav class="mui-bar mui-bar-tab noshadow bg maincolor">
      <!-- <router-link class="mui-tab-item color white" :to="{path: '/market_message', query: {id: $route.query.id}}">
         留言
      </router-link> -->
      <router-link class="mui-tab-item color white" :to="{path: '/market_info_rate', query: {id: $route.query.id}}" v-tap>
        评价
      </router-link>
    </nav>
    <div class="mui-content">
        <div class="fixBox1" :style="'background-image: url('+data.backImg+')'"></div>
        <div class="mui-card-content bg white">
            <div class="mui-card-content-inner">
                <img class="middle border img-sm" :src="data.headImg" style="position: absolute;top:-10px;">
                <span style="margin-left: 60px;">
                    {{data.name}}
                </span>
                <a class="mui-btn mui-btn-outlined mui-pull-right maincolor" style="position:absolute;right: 15px;top: 8px;" @tap="contact()">联系商家</a>
                <p style="margin-top: 15px;">所在地区：{{data.location}}</p>
                <p style="margin-bottom: 0;">主营产品：{{data.product}}</p>
            </div>
        </div>
        <div class="mui-card-content bg white mt10">
            <div class="mui-card-content-inner color c6">
                <p class="mui-h5 color c3">详细介绍</p>
                <div v-html="data.introduction">

                </div>
            </div>
        </div>
    </div>
    <a :href="'tel:'+data.phone" style="display: none;" id="telphoneTag"></a>
	</div>
</template>


<script>
var imgurl = require("../../static/source/images/mask.jpg");
import {getMerchant} from 'ajax'

export default {
	name: "market_info",
    methods:{
      contact(){
        document.getElementById('telphoneTag').click();
      }
    },
    data(){
    	return {
    		data: {
          phone: '',
        }
    	}
    },
    beforeRouteEnter(to, from, next){
      getMerchant(to.query.id).then((res)=>{
        next($vm => {
          $vm.data = res
        })
      })
    }
}
</script>


















