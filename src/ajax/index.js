import router from 'src/router.js'
import {getAgent} from 'src/assets/js/util.js'
const factory = (ajax_) => (url) => {
  var ajax
  if (ajax_ == 'get')
    ajax = $.get
  else
    ajax = $.post
  return Promise.resolve(ajax(url)).then((res)=>{
    if (res.state == 10011){
      switch(getAgent()){
          case 'wechat':
            goAuthorize();
          break;
          case 'android':
          case 'ios':
          case 'pc':
            router.push({path: 'app_login'})
          break;
      }
    }
    return Promise.resolve(res)

    // if (res.state == 0 || res.state === undefined) {

    // }
    // else {
    //   return Promise.reject(new Error(res.detail))
    // }
  }).catch((e)=>{
    return Promise.reject(e)
  })
}

export const goAuthorize = (shouldBind = false) => {
  var redirect_uri = encodeURIComponent("http://xingweiapp.com/app/login.html")
  var appid = 'wx886a3b874e4322a4'

  window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=${shouldBind}#wechat_redirect`
}
window.goAuthorize = goAuthorize;
const get = factory('get')
const post = factory('post')

export const getMerchantForPage = (start, length)=>{
  /*
   * 应为type = user
   */
  return get('/getMerchantForPage' + `?start=${start}&length=${length}&type=user`)
}

export const getMerchant = (id) => {
  return post('/getMerchant' + `?id=${id}&type=user`)
}

export const addMessage = (id, msg) => {
  return post('/addMessage' + `?id=${id}&message=${msg}`)
}

export const getOrderForPage_User = (start, length) => {
  return get('/getOrderForPage' + `?start=${start}&length=${length}&type=user`)
}

export const getProductForPage = (start, length, type) => {
  if (type == undefined) {
    return get('/getProductForPage' + `?start=${start}&length=${length}`)
  }
  else{
    return get('/getProductForPage' + `?start=${start}&length=${length}&type=${type}`)
  }
}

export const getProduct = (id) => {
  return post('/getProduct' + `?id=${id}`)
}

export const addOrder = ({productId, receiveName, phone, address})=>{
  return post('/addOrder' + `?productId=${productId}&number=1&phone=${phone}&address=${address}&receiveName=${receiveName}`)
}

export const searchProduct = (keyword)=>{
  return post('/searchProduct' + `?keyWord=${keyword}`)
}
export const getRecommendProduct = () => {
  return get('/getProductForPage' + `?recommend=1`)
}
export const searchProductForPage = (keyword, start, length)=>{
  return post('/searchProductForPage' + `?keyWord=${keyword}&start=${start}&length=${length}`)
}

export const getArticleForPage = (start, length)=>{
  return post('/getArticleForPage' + `?start=${start}&length=${length}&type=user`)
}

export const getArticle = (id)=>{
  return post('/getArticle' + `?id=${id}`)
}

export const addFocus = (code)=>{
  return post('/addFocus' + `?code=${code}`)
}

export const getUser = ()=>{
  return post('/getUser')
}

export const getCarouselList = ()=>{
  return get('/getCarouselList');
}

export const getSignature = (url)=>{
  return post('/wx/jsapi?url=' + url);
}

export const evaluateProduct = (model_id,env,attitude,after_sale,text,photos)=>{
  return post('/evaluation/add'+`?model_id=${model_id}&environment=${env}&attitude=${attitude}&after_sale=${after_sale}&text=${text}${photos}`);
}

export const getProductInfo = id=>{
  return post('/goods/get?id='+id);
}

export const getEvaluations = (evaluationModel_id)=>{
  return post(`/evaluation/get?evaluationModel_id=${evaluationModel_id}&start=0&rows=100&orders=true`)
}

export const uploadImage = (fd)=>{
  return $.ajax({
    url: '/uploadFile',
    type:'post',
    contentType:false,
    processData:false,
    xhrFields: {
      withCredentials: false
    },
    data:fd
  });
}

export const getMyEvluation = (start, row) => {
  return post(`/evaluation/myEvaluation?start=${start}&rows=${row}&orders=true`)
}
export const sendCode = (phone) => {
  return post(`/user/phoneCode?phone=${phone}`)
}
export const regist = (phone, code, password) => {
  return post(`/user/reg?phone=${phone}&code=${code}&password=${password}`)
}
export const passwordLogin = (phone, password) => {
  return post(`/user/login?phone=${phone}&password=${password}`)
}
export const resetPassword = (phone, code, password) => {
  return post(`/user/resetPassword?phone=${phone}&code=${code}&password=${password}`)
}
export const focusGood = (goods_id, city) => {
  return post(`/goods/focus?goods_id=${goods_id}&city=${city}`)
}

export const getJsApi = (url) => {
  return post(`/wx/jsapi?url=${url}`)
}
export const hasPhone = () => {
  return post(`/user/hasPhone`)
}
export const bindPhone = (phone, code, password) => {
  return post(`/user/boundPhone?phone=${phone}&code=${code}&password=${password}`)
}
export const boundWeichat = (code) => {
  return post(`/user/boundWeichat?code=${code}`)
}
export const editPersonInfo = ({nickName, img, sex, age}) => {
  if(img == "null" || img == null) {
    img = require("assets/images/user.png")
  }
  return post(`/user/edit?nickName=${nickName}&img=${img}&sex=${sex}&age=${age}`)
}

export const editPassword = ({nickName, img, sex, age}, old_password, new_password) => {
  return post(`/user/edit?nickName=${nickName}&img=${img}&sex=${sex}&age=${age}&old_password=${old_password}&new_password=${new_password}`)
}
export const upload = (file,name,type = 1,img) => {
  var fd = new FormData();
  fd.append("file",file);
  fd.append("name",name);
  fd.append("type",type);
  fd.append("img",img);
  return $.ajax({
    url: '/uploadFile',
    type: 'post',
    data: fd,
    processData: false,
    contentType: false,
    xhrFields: {
        withCredentials: false
    }
  })
}





