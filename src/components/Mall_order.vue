
<template>
	<div v-if="name">
		<header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
	        <a @click="back" class="mui-icon iconfont icon-zuo1 color white icon-sm"></a>
	        <h1 class="mui-title color white">确认订单</h1>
	    </header>

	    <div class="mui-content">
		    <form class="mui-input-group">
		    	<div class="mui-input-row">
		    		<label>收货人</label>
		    		<input type="text" name="text" v-model="user">
		    	</div>
		    	<div class="mui-input-row">
		    		<label>电话</label>
		    		<input type="text" name="text" v-model="phone">
		    	</div>
		    	<div class="mui-input-row" @click="getAddress">
		    		<label>地区</label>
		    		<input class="address" type="text" name="text" readonly="readonly">
		    	</div>
		    	<div class="mui-input-row" style="height:auto;">
		    		<textarea rows="2" placeholder="请输入街道地址" v-model="address"></textarea>
		    	</div>
		    </form>
	        <ul class="mui-table-view mt0">
	            <li class="mui-table-view-cell mui-media">
		            <router-link :to="{path: '/mall_info', query: {id: $route.query.id}}">
		                <div class="mui-media-object mui-pull-left img-md bg" :style="'background-image:url('+img+')'"></div>
		                <div class="mui-media-body">
		                    <p class="color c3">{{name}}</p>
		                </div>
		                <div class="mui-media-body" style="position: absolute;bottom: 10px;left: 114px;right: 15px;">
		                    {{score}}积分
		                    <span class="mui-pull-right color c9">×1</span>
		                </div>
		            </router-link>
	            </li>
	            <li class="mui-table-view-cell">
	                配送方式
	                <span class="mui-pull-right">快递  免邮</span>
	            </li>
	        </ul>
	    </div>
	    <nav class="mui-bar mui-bar-tab noshadow bg maincolor">
	        <div class="mui-tab-item bg white mui-text-left" style="width: 100%;padding-left: 15px;">
	            <span class="color maincolor">合计：{{score}}积分</span>
	        </div>
	        <a class="mui-tab-item color white" @tap.prevent.stop="order()" style="width:118px;">
	            提交订单
	        </a>
	    </nav>
	</div>
</template>

<script>
require("static/source/mui/css/mui.picker.css")
require("static/source/mui/css/mui.poppicker.css")

require("static/source/mui/js/mui.picker.js")
require("static/source/mui/js/mui.poppicker.js")

import {getProduct, addOrder} from 'ajax'
import router from '../router.js'

export default {
	name: 'mall_order',
    methods:{
        order(){
          if (this.user == '') {
            mui.alert('请填写收货人')
            return
          }
          if (this.phone == '') {
            mui.alert('请填写手机号')
            return
          }
          if (this.block == '') {
            mui.alert('请填写地区')
            return
          }
          if (this.address == '') {
            mui.alert('请填写地址')
            return
          }
          addOrder({
            productId: this.$route.query.id,
            receiveName: this.user,
            phone: this.phone,
            address: this.block + ' ' + this.address
          }).then((res)=>{
            mui.alert('提交成功', ()=>{
              router.push({path: '/person_my_order'})
            })
          }).catch((e)=>{
            mui.alert(e.message)
          })
        },
        back: function () {
        	history.back();
        },
        getAddress: function () {
          var picker = new mui.PopPicker({layer:3});
          picker.setData(cityData);
          picker.show((items)=>{
            var block = items[0].text + " " +items[1].text + " " + items[2].text;
            $("input.address").val(block);
            this.block = block
          });
        }
    },
    data(){
    	return {
    		img: '',
        name: '',
        score: '',
        user: '',
        phone: '',
        block: '',
        address: ''
    	}
    },
    beforeRouteEnter(to, from, next){
      getProduct(to.query.id).then((res)=>{
        next($vm => {
          $vm.img = res.img
          $vm.name = res.name
          $vm.score = res.score
        })
      })
    }
}
</script>

<style scoped>
.img-md{
    max-width: 88px;
    width: 88px;
    height: 70px !important;
}
</style>
















