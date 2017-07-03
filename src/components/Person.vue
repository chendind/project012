<template>
	<div class="mui-content bg white" style="background-color: white;height: 100vh;">
        <div class="bg mui-card-content" :style="'height: 175px;text-align: center;background-image:url(' + bg + ')'">
            <img class="border circle" :src="person.img || avator" style="height: 80px;width: 80px;margin: 20px 0 8px;">
            <p class="color c3" style="margin-bottom: 3px;font-size: 15px;">{{person.nickName}}</p>
            <p class="mui-h6 color c9">剩余积分：{{person.score}}</p>
        </div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <a href="#/person_my_order" class="mui-navigate-right">我的订单</a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="#/person_about_us" class="mui-navigate-right">关于我们</a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="#/history_rate" class="mui-navigate-right">历史评价</a>
            </li>
        </ul>
    </div>
</template>


<script>
import {getUser} from 'ajax'
export default {
	name: 'person',
    data(){
        return {
            bg: require('assets/images/bg.png'),
            avator: require('assets/images/user.png'),
            person: {}
        }
    },
    beforeRouteEnter(to, from, next) {
      getUser().then((res)=>{
        next($vm=>{
          $vm.person = res || {}
        })
      })
    }
}
</script>

<style scoped>
.mui-table-view-cell:last-child:after{
    height: 1px;
}
.mui-table-view:after{
    height: 0;
}
</style>



