<template>
<div>
  <nav class="mui-bar mui-bar-tab bottom-bar noshadow">
        <router-link class="mui-tab-item" to="/market">
            <span class="mui-icon">
                <i class="iconfont icon-icon-yxj-empty-store"></i>
            </span>
            <span class="mui-tab-label">我的商家</span>
        </router-link>
        <router-link class="mui-tab-item" to="/mall">
            <span class="mui-icon">
                <i class="iconfont icon-shangcheng"></i>
            </span>
            <span class="mui-tab-label">积分商城</span>
        </router-link>
        <router-link class="mui-tab-item" to="/content">
            <span class="mui-icon">
                <i class="iconfont icon-tuijianicon"></i>
            </span>
            <span class="mui-tab-label">内容推荐</span>
        </router-link>
        <router-link class="mui-tab-item" to="/person">
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
export default {
  name: 'app',
  components: {
  }
}
</script>

<style scoped>
.mui-tab-item.router-link-active{
    color: #7ad8d8
}
</style>
