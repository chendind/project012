<template>
    <div>
        <header class="mui-bar mui-bar-nav top-bar bg maincolor noshadow">
            <a @click="back" class="mui-icon iconfont icon-zuo1 color white icon-sm"></a>
            <h1 class="mui-title color white">个人资料</h1>
        </header>
        <div class="mui-content" style="">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right" @click="changeAvator">
                        <span style="line-height: 40px;">头像</span>
                        <span class="mui-pull-right head mr15">
                            <img class="head-img mui-action-preview" :src="person.img || avator" style="display: block;width: 40px;height: 40px;border-radius: 20px;">
                        </span>
                    </a>
                </li>
                <li class="mui-table-view-cell">
                    <a href="#/person_info_name" class="mui-navigate-right">
                        用户昵称
                        <span class="mui-pull-right mr15 color c9">{{person.nickName}}</span>
                    </a>
                </li>
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right" @click="popSex">
                        性别
                        <span class="mui-pull-right mr15 color c9">{{["未设置","男","女"][person.sex]}}</span>
                    </a>
                </li>
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right" @click="popAge">
                        年龄
                        <span class="mui-pull-right mr15 color c9">{{person.age?person.age:"未设置"}}</span>
                    </a>
                </li>
                <li class="mui-table-view-cell">
                    <a href="#/person_info_password" class="mui-navigate-right">修改密码</a>
                </li>
            </ul>

        </div>
        <input type="file" id="avatorInput" style="display: none;">
        <div class="mask" v-show="loadingShow">
            <div class="tipText">图片上传中，请稍候...</div>
        </div>
    </div>

</template>


<script>
import {getUser, editPersonInfo, upload} from 'ajax'
var sexPicker = new mui.PopPicker();
sexPicker.setData([
  {
    value: '1',
    text: '男'
  },
  {
    value: '2',
    text: '女'
  },
])
var agePicker = new mui.PopPicker();
var age = [];
for(var i = 1; i <= 99; i++){
    age.push({
        value: i,
        text: i
    })
}
agePicker.setData(age)
export default {
  name: 'person',
    data(){
        return {
            bg: require('assets/images/bg.png'),
            avator: require('assets/images/user.png'),
            person: {},
            loadingShow: false,
        }
    },
    methods: {
        back(){
          history.back();
        },
        savePersonInfo(){
            var self = this;
            editPersonInfo(self.person).then(data => {
                if(data.state == 0){
                    mui.toast('修改成功');
                }
            })
        },
        changeAvator(){
            var self = this;
            var avatorInput = document.getElementById('avatorInput');
            avatorInput.click();
            avatorInput.onchange = function(e){
                var file = this.files[0]
                var formData = new FormData()
                self.loadingShow = true
                upload(file).then(data => {
                    if(data.state == 0){
                        self.person = {
                            ...self.person,
                            img: data.detail
                        };
                        self.loadingShow = false
                        self.savePersonInfo()
                    } else {
                        // mui.toast()
                        self.loadingShow = false
                    }
                })
            }
        },
        popSex(){
            var self = this;
            sexPicker.show((item) => {
                var item = item[0]
                self.person = {
                    ...self.person,
                    sex: item.value
                };
                self.savePersonInfo()
            })
        },
        popAge(){
            var self = this;
            agePicker.show((item) => {
                var item = item[0]
                self.person = {
                    ...self.person,
                    age: item.value
                };
                self.savePersonInfo()
            })

        }
    },
    beforeRouteEnter(to, from, next) {
      getUser().then((res)=>{
        next($vm=>{
          $vm.person = res || {}
        })
      })
    },
    mounted(){

    }
}
</script>

<style scoped>
/*.mui-table-view-cell:last-child:after{
    height: 1px;
}
.mui-table-view:after{
    height: 0;
}*/
</style>



