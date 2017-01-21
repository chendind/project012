
<template>
	<div class="detail">
		<header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
	        <a class="mui-icon iconfont icon-zuo1 color white icon-sm" href="#/content"></a>
	        <h1 class="mui-title color white">内容推荐</h1>
	    </header>
	    <div class="mui-content bg white">
	        <div>
	            <p class="title color c3">{{title}}</p>
	            <span class="mui-h6 color c9">发表日期：{{getTime(time)}}</span>
	            <span class="mui-h6 color c9 mui-pull-right">推送自：{{author}}</span>
	            <hr>
              <div v-html="text">

              </div>
	        </div>
	    </div>
	</div>
</template>


<script>
import {getArticle} from 'ajax'

export default {
	name: 'content_detail',
  data: function () {
      return {
      	title: "",
        text: "",
        time: "",
        from: "",
        author: ""
      }
  },
  methods:{
      getTime: function (stamp) {
          var date = new Date(stamp);

          if (stamp == null || String(date) === 'Invalid Date') {
            return '不明'
          }
          var y = date.getFullYear();
          var m = date.getMonth() + 1;
          var d = date.getDate();
          return y + "年" + m + "月"  + d + "日";
      }
  },
  beforeRouteEnter(to, from, next) {
    getArticle(to.query.id).then((res)=>{
      next($vm=>{
        $vm.title = res.title
        $vm.author = res.author
        $vm.text = res.text
        $vm.time = res.time
      })
    })
  }
}
</script>

<style scoped>
div.detail{
    background-color: white;
    height: 100vh;
}
div.mui-content div{
    padding: 13px 15px;
}
p.title{
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 14px;
}
hr{
    border-width: 1px 0 0;
    border-color: #dddddd;
    border-style: solid;
    margin: 12px 0;
}
</style>
















