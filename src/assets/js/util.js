export const getAgent = () => {
  const u = navigator.userAgent
  const isWechat = u.indexOf("MicroMessenger") > -1
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
  if (isWechat) {
    return 'wechat'
  } else if (isAndroid) {
    return 'android'
  } else if (isIOS) {
    return 'ios'
  } else {
    return 'pc'
  }
}
