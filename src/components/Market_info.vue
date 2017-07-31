<template>
	<div>
		<header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
	    <a @click="back" class="mui-icon iconfont icon-zuo1 color white icon-sm"></a>
      <h1 class="mui-title color white">{{data.name}}</h1>
    </header>
    <nav class="mui-bar mui-bar-tab noshadow bg maincolor">
      <!-- <router-link class="mui-tab-item color white" :to="{path: '/market_message', query: {id: $route.query.id}}">
         留言
      </router-link> -->
      <router-link class="mui-tab-item color white" :to="{path: '/rate', query: {id: evalId, type: 'market', name: data.name}}" v-tap>
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
        <div class="mui-card-content bg white mt10">
          <div class="mui-card-content-inner color c6">
            <div class="mui-h5 color c3">历史评价</div>
          </div>
          <div class="eval-box">
            <div class="eval-section" v-for="(eval, $index) in evals">
              <img class="user-avatar" :src="eval.user.img">
              <span class="user-name">{{eval.user.nickname}}</span>
              <span class="rate">{{((eval.after_sale+eval.attitude+eval.environment)/3).toFixed(1)}}</span>
              <p class="eval-content">{{eval.text}}</p>
              <div class="after">
                <img class="eval-pic" v-for="img in eval.photo" :src="img" data-preview-src="" :data-preview-group="$index">
              </div>
            </div>
          </div>
        </div>
    </div>
    <a :href="'tel:'+data.phone" style="display: none;" id="telphoneTag"></a>
	</div>
</template>


<script>
var imgurl = require("assets/images/mask.jpg");
import { getMerchant, getEvaluations } from 'ajax'
import router from '../router.js'
export default {
	name: "market_info",
    methods:{
      back(){
        router.go(-1)
      },
      contact(){
        document.getElementById('telphoneTag').click();
      }
    },
    data(){
    	return {
    		data: {
          phone: '',
        },
        evals:[],
        evalId: 0,
    	}
    },
    beforeRouteEnter(to, from, next){
      console.log(to.query.id)
      getMerchant(to.query.id).then((res)=>{
        next($vm => {
          $vm.data = res;
          $vm.evalId = res.evaluationModel.id;
          getEvaluations($vm.evalId).then(data=>{
              $vm.evals = data.data;
              $vm.$nextTick(() => {
                mui.previewImage();
              })
          },msg=>{
            console.log(msg)
          })
        });

      })
    }
}
</script>

<style lang='less' scoped>
.user-avatar{
  border-radius: 50%;
  width:35px;
  height:35px;
}

.eval-section{
  position: relative;
  padding: 10px 15px;
  color:rgb(102,102,102);
  overflow: hidden;
  &:after{
    position: absolute;
    display: block;
    content: '';
    height: 0px;
    border-bottom: 1px solid #ddd;
    width: 100%;
    left: 15px;
    right: 0;
    bottom: 0;
  }
}

.user-name{
  vertical-align: top;
  position: relative;
  top: 7px;
  left: 7px;
}

.rate{
  float:right;
  color:rgb(240,36,0);
}

.eval-content{
  color:rgb(102,102,102);
}

.eval-pic{
  width:60px;
  height:60px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: block;
  float: left;
}

</style>
















