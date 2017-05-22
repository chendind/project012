const factory = (ajax_) => (url) => {
  var ajax
  if (ajax_ == 'get')
    ajax = $.get
  else
    ajax = $.post

  return Promise.resolve(ajax('http://tongzhuang.moovi-tech.com' + url)).then((res)=>{

    if (res.state == 10011){
      window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx886a3b874e4322a4&redirect_uri=http%3a%2f%2ftongzhuang.moovi-tech.com%2flogin.html&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
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

