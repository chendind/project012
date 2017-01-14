
// 配置项
var baseUrl = "http://inter.qess.me";// api地址
var baseUrl2 = "http://test.qess.me";// 项目地址，也用于editCookie
var appId = "wx51e4e7ced9ff48f1";

function successHandle(data){
	if(data.resultCode == 402){
		// 登录超时
		window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+appId+
								"&redirect_uri="+
								baseUrl2 + "/wechat/login?redirectUrl="+
								baseUrl2 + "/pages/indexPage.html"+
								"&response_type=code&scope=snsapi_userinfo&connect_redirect=1#wechat_redirect";
	}
	else if(data.resultCode == 417){
		// 未绑定手机号 作统一处理
		window.location.href = "bindPhone.html";
	}
	else if((data.resultCode!=200)&&data.message){
		mui.toast(data.message);

	}
}
function errorHandle(data){
	mui.toast("网络异常");
}
function ajaxDataHandle(){
	// var data = this.data;
	// if(data){
	// 	var string = JSON.stringify(data);
	// 	this.data = new TextEncoder().encode(string);
	// }
}
function getAjaxHeader(){
	// var header = {};
	// header.version = "1.0";
	// header.OriginType = "mp";
	// header.token = cookieObj.Token;
	// return header;
}
function dataFilter(data,dataType){
	if(typeof data == "string"){
		data = JSON.parse(data);
	}
	return data;
}
$.ajaxSetup({
	headers: getAjaxHeader(),
	beforeSend: ajaxDataHandle,
	processData: false,
	success: successHandle,
	error: errorHandle
});


















