<template>
	<div class="mui-content">
		<header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
	        <h1 class="mui-title color white">内容推荐</h1>
	  </header>
    <div id="scroll" class="mui-content mui-scroll-wrapper">
      <div class="mui-scroll">
	        <ul class="mui-table-view">
	            <router-link :to="{path: '/content_detail', query: {id: item.id}}" class="bg" v-for="item in list" :style="'display:block;height:140px;background-image:url('+item.img+');border:1px solid #fefefe;'">
	            </router-link>
	        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import {getArticleForPage} from 'ajax'

export default {
	name: 'content',
	data: function () {
  	return {
      list: [],
      DATALENGTH: 20,
      ListStart: 0
    }
  },
  // beforeRouteEnter(to, from, next) {
  //   getArticleForPage(0).then((res)=>{
  //     next($vm=>{
  //       $vm.list = res.list || []
  //     })
  //   })
  // },
  methods: {
    getNewest: function () {
        var self = this;
        getArticleForPage(0,self.DATALENGTH).then((res)=>{
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
        getArticleForPage(self.ListStart,self.DATALENGTH).then((res)=>{
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
                  contentnomore: '',
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
  #scroll{
    padding-bottom: 50px;
  }
</style>



