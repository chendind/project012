<template>
	<div>
		<header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
	        <a href="#/mall" class="mui-icon iconfont icon-zuo1 color white icon-sm"></a>
	        <h1 class="mui-title color white">{{$route.query.type}}</h1>
	    </header>
	    <div class="mui-content">
	        <ul class="mui-table-view mt0">
	            <li class="mui-table-view-cell mui-media" v-for="i in list">
	                <img class="mui-media-object mui-pull-left img-md" :src="i.img">
	                <div class="mui-media-body" style="padding-top: 10px;">
	                    <p class="color c3">{{i.name}}</p>
	                    <p class="mui-h6 color maincolor mt5">积分换购{{i.score}}</p>
	                </div>
	                <a class="mui-btn mui-btn-outlined maincolor" style="" @tap="contact(i)">立即兑换</a>
	                <p class="mui-h6 center color c9 mt5" style="width: 82px;position:absolute;right:15px;top: 75px;">销量{{i.sold}}</p>
	            </li>
	        </ul>
	    </div>
	</div>
</template>


<script>
import {getProductForPage} from 'ajax'
import router from '../router.js'

export default {
	name: 'mall_category',
  data(){
    return {
      list: []
    }
  },
  methods: {
    contact(i){
      router.push({path: '/mall_order', query: {id: i.id}})
    }
  },
  beforeRouteEnter(to, from, next) {
    getProductForPage(0, to.query.type).then(res => {
      next($vm => {
        $vm.list = res.list || []
      })
    })
  }
}
</script>

<style scoped>
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
}
</style>
















