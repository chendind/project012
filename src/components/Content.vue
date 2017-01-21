<template>
	<div class="mui-content">
		<header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
	        <h1 class="mui-title color white">内容推荐</h1>
	    </header>
		<div class="mui-content">
	        <div>
	            <router-link :to="{path: '/content_detail', query: {id: item.id}}" class="bg" v-for="item in list" :style="'display:block;height:140px;background-image:url('+item.img+');border:1px solid #fefefe;'">
	            </router-link>
	        </div>
        </div>
    </div>
</template>


<script>
import {getArticleForPage} from 'ajax'

export default {
	name: 'content',
	data: function () {
  	return {
      list: []
    }
  },
  beforeRouteEnter(to, from, next) {
    getArticleForPage(0).then((res)=>{
      next($vm=>{
        $vm.list = res.list || []
      })
    })
  }
}
</script>



