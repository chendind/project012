<template>
  <div>
    <!-- <div class="mui-content"> -->
      <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
        <a href="#/person" class="mui-icon iconfont icon-zuo1 color white icon-sm"></a>
        <h1 class="mui-title color white">历史评价</h1>
      </header>
      <!-- <div class="mui-content"> -->
        <div id="scroll" class="mui-content mui-scroll-wrapper">
          <div class="mui-scroll">
            <div>
              <ul v-for="(item,index) in list" :class="(index===0?'mui-table-view mt0':'mui-table-view mt10')">
                <li class="mui-table-view-cell size12">
                    <span class="color c3">{{item.in_time | timeFormat}}</span>
                </li>
                <li class="mui-table-view-cell mui-media" v-if="item.type === 'goods'">
                    <router-link :to="{path: '', query: {id: 1}}">
                        <div class="mui-media-object mui-pull-left img-md bg" :style="'background-image:url('+item.goods.photo+')'"></div>
                        <div class="mui-media-body">
                            <p class="color c3" style="font-size:14px;">{{item.goods.name}}</p>
                            <p class="color c3 mt5" style="font-size:12px;">
                              评分
                              <span class="rate-bar" id="quality">
                                <i class="iconfont" :class="{
                                  'red icon-wujiaoxing1 color': item.rate>=n,
                                  'icon-wujiaoxing': item.rate < n
                                }" v-for="n in 5"></i>
                              </span>
                            </p>
                            <p class="color c3 mt5" style="font-size:12px;">+{{item.getScore}}积分</p>
                        </div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media" v-else>
                    <router-link :to="{path: '', query: {id: 1}}">
                        <div class="mui-media-object mui-pull-left img-md bg" :style="'background-image:url('+item.merchant.headImg+')'"></div>
                        <div class="mui-media-body">
                            <p class="color c3" style="font-size:14px;">{{item.merchant.name}}</p>
                            <p class="color c3 mt5" style="font-size:12px;">
                              评分
                              <span class="rate-bar" id="quality">
                                <i class="iconfont" :class="{
                                  'red icon-wujiaoxing1 color': item.rate>=n,
                                  'icon-wujiaoxing': item.rate < n
                                }" v-for="n in 5"></i>
                              </span>
                            </p>
                            <p class="color c3 mt5" style="font-size:12px;">+{{item.getScore}}积分</p>
                        </div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell">
                    <span>
                        <button type="button" class="mui-btn mui-btn-outlined mui-pull-right color c9" style="padding:3px 12px;" @click="goDetail(item)">
                          详情
                        </button>
                    </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      <!-- </div> -->
  </div>
</template>

<script>

import {getMyEvluation} from 'ajax'
import router from '../router.js'

export default {
  name: 'history_rate',
    methods:{

    },
    data(){
      return {
        list: [],
      }
    },
    methods: {
      getNewest(){
        getMyEvluation(0, 10).then(data => {
          mui('#scroll').pullRefresh().endPulldownToRefresh();
          if(data.data.length < 10){
            mui('#scroll').pullRefresh().endPullupToRefresh(true);
          }
          else{
            mui('#scroll').pullRefresh().refresh(true);
          }
          this.list = data.data.map((item) => {
            return {
              ...item,
              rate: Math.round((item.after_sale + item.attitude + item.environment) / 3),
              getScore: item.photo.length > 0 ? 100: 10,
            }
          })
        })
      },
      getMyEvluation(){
        const start = Math.floor(this.list.length / 10)
        getMyEvluation(start * 10, 10).then(data => {
          if(data.data.length < 10){
            mui('#scroll').pullRefresh().endPullupToRefresh(true);
          }
          else{
            mui('#scroll').pullRefresh().endPullupToRefresh(false);
          }
          this.list = this.list.concat(data.data.map((item) => {
            return {
              ...item,
              rate: Math.round((item.after_sale + item.attitude + item.environment) / 3),
              getScore: item.photo.length > 0 ? 100: 10,
            }
          }))
        })
      },
      goDetail(item){
        if (item.type === 'goods') {
          this.$router.push({path: 'Product_info', query: {id: item.goods.id}})
        } else {
          this.$router.push({path: 'Market_info', query: {id: item.merchant.id}})
        }
      }
    },
    mounted(){
      var self = this;
      mui.init();
      mui.ready(function(){
          mui("#scroll").pullRefresh({
              down: {
                  callback: function(){
                      self.getNewest();
                  }
              },
              up: {
                  auto: true,
                  contentnomore: '没有更多消息了',
                  callback: function(){
                      self.getMyEvluation();
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
</style>
















