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
      <router-link class="mui-tab-item color white" :to="{path: '/product_info_rate', query: {id: $route.query.id}}" v-tap>
        评价
      </router-link>
    </nav>
    <div class="mui-content">
        <div class="fixBox1" :style="'background-image: url('+data.photo+')'"></div>
        <div class="mui-card-content bg white">
            <div class="mui-card-content-inner">
              <p class="mui-h5 color c3">{{data.name}}</p>
              <div>
                <span class="color maincolor">材质：{{data.material}}</span>
                <span class="mui-pull-right">生产厂家：{{data.factory}}</span>
              </div>
            </div>
        </div>
        <div class="mui-card-content bg white mt10">
            <div class="mui-card-content-inner color c6">
                <p class="mui-h5 color c3">详细介绍</p>
                <div v-html="data.detail">
                  {{data.detail}}
                </div>
            </div>
        </div>
        <div class="mui-card-content bg white mt10">
            <div class="mui-card-content-inner color c6">
                <p class="mui-h5 color c3">历史评价</p>
                <div class="eval-section" v-for="(eval, $index) in evals">
                  <img class="user-avatar" :src="eval.user.img">
                  <span class="user-name">{{eval.user.nickname}}</span>
                  <span class="rate">{{((eval.after_sale+eval.attitude+eval.environment)/3).toFixed(1)}}</span>
                  <p class="eval-content">{{eval.text}}</p>
                  <img class="eval-pic" v-for="img in eval.photo" :src="img" data-preview-src="" :data-preview-group="$index">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { getProductInfo, getEvaluations } from 'ajax';
export default {
  name: 'product_info',
  data() {
    return {
      data: {
        // introduction: '111',
        // img: "http://tongzhuang.moovi-tech.com/uploads/img/edae45d41478436997a34bd9c9affe55.jpg",
      },
      evals:[],
      // evals:[
      //   {
      //     userAvatar:"http://tongzhuang.moovi-tech.com/uploads/img/edae45d41478436997a34bd9c9affe55.jpg",
      //     userName:'mmm3',
      //     content:'很好很好很好',
      //     imgs:["http://tongzhuang.moovi-tech.com/uploads/img/edae45d41478436997a34bd9c9affe55.jpg",
      //     "http://tongzhuang.moovi-tech.com/uploads/img/edae45d41478436997a34bd9c9affe55.jpg",
      //     "http://tongzhuang.moovi-tech.com/uploads/img/edae45d41478436997a34bd9c9affe55.jpg"
      //     ]
      //   },
      //   {
      //     userAvatar:"http://tongzhuang.moovi-tech.com/uploads/img/edae45d41478436997a34bd9c9affe55.jpg",
      //     userName:'mmm3',
      //     content:'很好很好很好',
      //     imgs:["http://tongzhuang.moovi-tech.com/uploads/img/edae45d41478436997a34bd9c9affe55.jpg",
      //     "http://tongzhuang.moovi-tech.com/uploads/img/edae45d41478436997a34bd9c9affe55.jpg",
      //     "http://tongzhuang.moovi-tech.com/uploads/img/edae45d41478436997a34bd9c9affe55.jpg"
      //     ]
      //   },
      //   {
      //     userAvatar:"http://tongzhuang.moovi-tech.com/uploads/img/edae45d41478436997a34bd9c9affe55.jpg",
      //     userName:'mmm3',
      //     content:'很好很好很好',
      //     imgs:["http://tongzhuang.moovi-tech.com/uploads/img/edae45d41478436997a34bd9c9affe55.jpg",
      //     "http://tongzhuang.moovi-tech.com/uploads/img/edae45d41478436997a34bd9c9affe55.jpg",
      //     "http://tongzhuang.moovi-tech.com/uploads/img/edae45d41478436997a34bd9c9affe55.jpg"
      //     ]
      //   },
      // ],

    }
  },
  methods: {

  },
  created() {
    getProductInfo(16).then(data=>{
      const evalId = data.data.evaluationModel.id;
      localStorage.setItem('evalId',evalId);
      localStorage.setItem('productName',data.data.name);
      this.$data.data=data.data;
      this.$data.data.factory = data.factory.name;
      console.log(evalId)
      getEvaluations(evalId).then(data=>{;
          this.$data.evals = data.data;
          console.log(data.data)
          this.$nextTick(() => {
            mui.previewImage();
          })
      })

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
  margin-bottom: 10px;
  color:rgb(102,102,102);
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
}

</style>
