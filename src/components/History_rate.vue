<template>
  <div>
    <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
      <a href="#/person" class="mui-icon iconfont icon-zuo1 color white icon-sm"></a>
      <h1 class="mui-title color white">历史评价</h1>
    </header>
    <div class="mui-content">
      <ul v-for="(item,index) in list" :class="(index===0?'mui-table-view mt0':'mui-table-view mt10')">
        <li class="mui-table-view-cell size12">
            <span class="color c3">{{item.time | timeFormat}}</span>
        </li>
        <li class="mui-table-view-cell mui-media">
            <router-link :to="{path: '', query: {id: 1}}">
                <div class="mui-media-object mui-pull-left img-md bg" :style="'background-image:url('+item.pImg+')'"></div>
                <div class="mui-media-body">
                    <p class="color c3" style="font-size:14px;">{{item.pName}}</p>
                    <p class="color c3 mt5" style="font-size:12px;">
                      评分
                      <span class="rate-bar" style="margin-left: 10px;">
                        <i class="iconfont icon-wujiaoxing1 color red"></i>
                        <i class="iconfont icon-wujiaoxing color c9"></i>
                      </span>
                    </p>
                    <p class="color c3 mt5" style="font-size:12px;">+{{item.score}}积分</p>
                </div>
            </router-link>
        </li>
        <li class="mui-table-view-cell">
            <span>
                <button type="button" class="mui-btn mui-btn-outlined mui-pull-right color c9" style="padding:3px 12px;">
                  详情
                </button>
            </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import {getProduct, addOrder} from 'ajax'
import router from '../router.js'

export default {
  name: 'history_rate',
    methods:{

    },
    data(){
      return {
        list: [
          {
            time: 1491819510000,
            pImg: "http://tongzhuang.moovi-tech.com/uploads/img/391ea67cf6824efda27bcb50274a3c93.jpg",
            pName: "爱疯7 Plus 128G",
            score: 1,
            number: 1,
          }
        ],
      }
    },
    beforeRouteEnter(to, from, next){
      next();
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
















