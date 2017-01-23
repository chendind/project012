const factory = (ajax_) => (url) => {
  var ajax
  if (ajax_ == 'get')
    ajax = $.get
  else
    ajax = $.post

  return Promise.resolve(ajax('http://tongzhuang.moovi-tech.com' + url)).then((res)=>{
    if (res.state == 0 || res.state === undefined) {
      return Promise.resolve(res)
    } else {
      return Promise.reject(new Error(res.detail))
    }
  }).catch((e)=>{
    return Promise.reject(e)
  })
}

const get = factory('get')
const post = factory('post')

export const getMerchantForPage = (start)=>{
  /*
   * 应为type = user
   */
  return get('/getMerchantForPage' + `?start=${start}&length=100&type=user`)
}

export const getMerchant = (id) => {
  return post('/getMerchant' + `?id=${id}&type=user`)
}

export const addMessage = (id, msg) => {
  return post('/addMessage' + `?id=${id}&message=${msg}`)
}

export const getOrderForPage_User = (start) => {
  return get('/getOrderForPage' + `?start=${start}&length=100&type=user`)
}

export const getProductForPage = (start, type) => {
  return get('/getProductForPage' + `?start=${start}&length=100&type=${type}`)
}

export const getProduct = (id) => {
  return get('/getProductForPage' + `?start=0&length=1000`).then((res)=>{
    return Promise.resolve((res.list || []).find((d)=>{
      return d.id == id
    }))
  })
}

export const addOrder = ({
  productId, receiveName, phone, address
})=>{
  return post('/addOrder' + `?productId=${productId}&number=1&phone=${phone}&address=${address}&receiveName=${receiveName}`)
}

export const searchProduct = (keyword)=>{
  return post('/searchProduct' + `?keyWord=${keyword}`)
}

export const getArticleForPage = (start)=>{
  return post('/getArticleForPage' + `?start=${start}&length=10&type=user`)
}

export const getArticle = (id)=>{
  return post('/getArticle' + `?id=${id}`)
}

export const addFocus = (code)=>{
  return post('/addFocus' + `?code=${code}`)
}
