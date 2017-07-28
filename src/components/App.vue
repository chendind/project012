<template>
<div>
  <nav class="mui-bar mui-bar-tab bottom-bar noshadow">
        <router-link class="mui-tab-item" to="/market" v-tap>
            <span class="mui-icon">
                <i class="iconfont icon-icon-yxj-empty-store"></i>
            </span>
            <span class="mui-tab-label">我的商家</span>
        </router-link>
        <router-link class="mui-tab-item" to="/mall" v-tap>
            <span class="mui-icon">
                <i class="iconfont icon-shangcheng"></i>
            </span>
            <span class="mui-tab-label">积分商城</span>
        </router-link>
        <router-link class="mui-tab-item" to="/content" v-tap>
            <span class="mui-icon">
                <i class="iconfont icon-tuijianicon"></i>
            </span>
            <span class="mui-tab-label">内容推荐</span>
        </router-link>
        <router-link class="mui-tab-item" to="/person" v-tap>
            <span class="mui-icon">
                <i class="iconfont icon-wode"></i>
            </span>
            <span class="mui-tab-label">个人中心</span>
        </router-link>
    </nav>
    <router-view></router-view>
</div>

</template>

<script>
//import get from 'ajax/get.js'

export default {
  name: 'app',
  components: {
  },
  mounted(){

  }
}
</script>

<style scoped>
/*.bottom-bar{
  bottom: 0;
  display: table;
  width: 100%;
  height: 50px;
  padding: 0;
  table-layout: fixed;
  border-top: 0;
  border-bottom: 0;
  -webkit-touch-callout: none;
}*/
.mui-tab-item.router-link-active{
    color: #44bfff;
}
</style>
