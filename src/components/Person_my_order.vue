<template>
	<div>
        <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
            <a class="mui-icon iconfont icon-zuo1 color white icon-sm" href="#/person"></a>
            <h1 class="mui-title color white">我的订单</h1>
        </header>
        <div id="scroll" class="mui-content mui-scroll-wrapper">
            <div class="mui-scroll">
                <ul class="mui-table-view" style="background-color: #efeff4">
                    <ul v-for="(item,index) in list" :class="(index===0?'mui-table-view mt0':'mui-table-view mt10')">
                        <li class="mui-table-view-cell size12">
                            <span class="color c3">{{item.time | timeFormat}}</span>
                            <span class="mui-pull-right color c3">单号：{{item.code}}</span>
                        </li>
                        <li class="mui-table-view-cell mui-media">
                            <router-link :to="{path: '/mall_info', query: {id: item.id}}">
                                <div class="mui-media-object mui-pull-left img-md bg" :style="'background-image:url('+item.pImg+')'"></div>
                                <div class="mui-media-body">
                                    <p class="color c3" style="font-size:14px;">{{item.pName}}</p>
                                    <p class="color c3" style="font-size:14px; margin-top: 30px;">{{item.score}}积分</p>
                                </div>
                            </router-link>
                        </li>
                        <li class="mui-table-view-cell">
                            <span>
                                <button type="button" class="mui-btn mui-btn-outlined mui-active mui-pull-right color c9" style="padding:3px 12px;">
                                    {{item.state}}
                                </button>
                            </span>
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
var imgurl = require("assets/images/WechatIMG163.png");

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
            list: [],
            DATALENGTH: 5,
            ListStart: 0
        }
    },
    // beforeRouteEnter(to, from, next) {
    //   getOrderForPage_User(0,5).then((res)=>{
    //     next($vm=>{
    //       $vm.list = res.list || []
    //     })
    //   })
    // },
    methods: {
        getNewest: function () {
            var self = this;
            getOrderForPage_User(0,self.DATALENGTH).then((res)=>{
                self.list = res.list || [];
                self.ListStart = res.list.length;

                mui('#scroll').pullRefresh().endPulldownToRefresh();
                if(res.list.length == res.countAll){
                    mui('#scroll').pullRefresh().endPullupToRefresh(true);
                }
                else{
                    mui('#scroll').pullRefresh().refresh(true);
                }
            })
        },
        getMore: function () {
            var self = this;
            getOrderForPage_User(self.ListStart,self.DATALENGTH).then((res)=>{
                self.list = self.list.concat(res.list);

                if(self.ListStart + res.list.length == res.countAll){
                    mui('#scroll').pullRefresh().endPullupToRefresh(true);
                }
                else{
                    mui('#scroll').pullRefresh().endPullupToRefresh(false);
                }

                self.ListStart += self.DATALENGTH;
            })
        }
    },
    mounted: function () {
        var self = this;
        mui.init();
        mui.ready(function(){
            mui("#scroll").pullRefresh({
                down: {
                    callback : function(){
                        self.getNewest();
                    }
                },
                up: {
                    auto: true,
                    contentnomore: '没有更多消息了',
                    callback : function(){
                        self.getMore();
                    }
                }
            });
        });
    }
}
</script>

<style scoped>
.img-md{
    max-width: 88px;
    width: 88px;
    height: 70px !important;
}
.mui-table-view-cell.mui-active{
  background-color: transparent;
}
.mui-btn.mui-active{
  background-color: transparent;
}
</style>



