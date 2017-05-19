<template>
  <div>
    <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
      <a href="#/" class="mui-icon iconfont icon-zuo1 color white icon-sm"></a>
      <h1 class="mui-title color white">dd 11</h1>
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
        <div class="fixBox1" :style="'background-image: url('+img+')'"></div>
        <div class="mui-card-content bg white">
            <div class="mui-card-content-inner">
              <p class="mui-h5 color c3">dd</p>
              <div>
                <span class="color maincolor">材质：尼龙</span>
                <span class="mui-pull-right">生产厂家：杭州原产地</span>
              </div>
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
  </div>
</template>
<script>
export default {
  name: 'product_info',
  data() {
    return {
      data: {
        introduction: '111',
        img: "http://tongzhuang.moovi-tech.com/uploads/img/edae45d41478436997a34bd9c9affe55.jpg"
      }
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>
<style lang='less' scoped>

</style>
