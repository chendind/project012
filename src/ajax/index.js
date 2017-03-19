const factory = (ajax_) => (url) => {
  var ajax
  if (ajax_ == 'get')
    ajax = $.get
  else
    ajax = $.post

  return Promise.resolve(ajax('http://tongzhuang.moovi-tech.com' + url)).then((res)=>{
    if (res.state == 0 || res.state === undefined) {
      return Promise.resolve(res)
    }
    else if (res.state == 10011){
      window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx299f8a78b8ea872d&redirect_uri=http%3a%2f%2ftongzhuang.moovi-tech.com%2flogin.html&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
    }
    else {
      return Promise.reject(new Error(res.detail))
    }
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

export const addOrder = (productId, receiveName, phone, address)=>{
  return post('/addOrder' + `?productId=${productId}&number=1&phone=${phone}&address=${address}&receiveName=${receiveName}`)
}

export const searchProduct = (keyword)=>{
  return post('/searchProduct' + `?keyWord=${keyword}`)
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
