<template>
	<div>
        <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
            <a class="mui-icon iconfont icon-zuo1 color white icon-sm" href="#/person"></a>
            <h1 class="mui-title color white">我的订单</h1>
        </header>
        <div class="mui-content">
            <ul v-for="(item,index) in list" :class="(index===0?'mui-table-view mt0':'mui-table-view mt10')">
                <li class="mui-table-view-cell" style="font-size: 10px;">
                    <span class="color c3">{{item.time | timeFormat}}</span>
                    <span class="mui-pull-right color c3">单号：{{item.code}}</span>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <div class="mui-media-object mui-pull-left img-md bg" :style="'background-image:url('+item.pImg+')'"></div>
                    <div class="mui-media-body">
                        <p class="color c3" style="font-size:14px;">{{item.pName}}</p>
                        <p class="color c3" style="font-size:14px; margin-top: 30px;">{{item.score}}积分</p>
                    </div>
                </li>
                <li class="mui-table-view-cell">
                    <span>
                        <button type="button" class="mui-btn mui-btn-outlined mui-pull-right color c9" style="padding:3px 12px;">
                            {{item.state}}
                        </button>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
var imgurl = require("../../static/source/images/WechatIMG163.png");

import {getOrderForPage_User} from 'ajax'

export default {
	name: 'person_my_order',
    data: function (){
        return {
            // items:[{
            //     time: 0,
            //     order_number: 201701051234,
            //     img: imgurl,
            //     title: "iPhone 7 Plus 32g 银色",
            //     score: "8888",
            //     state: "交易成功"
            // },{
            //     time: 0,
            //     order_number: 201701051234,
            //     img: imgurl,
            //     title: "iPhone 7 Plus 32g 银色",
            //     score: "8888",
            //     state: "交易成功"
            // }]
            list: []
        }
    },
    beforeRouteEnter(to, from, next) {
      getOrderForPage_User(0).then((res)=>{
        next($vm=>{
          $vm.list = res.list || []
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



