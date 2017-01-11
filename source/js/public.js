var projectSetting = {
    title: "童装平台"
}
$(function(){
    $("title").text(projectSetting.title)
    mui('body').on('tap','[href]',function(e){
        e.stopPropagation()
        e.preventDefault()
        window.location.href=$(this).attr('href');
    })
    // 配置微信分享参数
    // $.when(getWechatShareConfig(window.location.href)).done(function(data){
    //     if(data.resultCode == 200){
    //         wx.config({
    //             debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //             appId: appId, // 必填，公众号的唯一标识
    //             timestamp: data.data.timestamp, // 必填，生成签名的时间戳
    //             nonceStr: data.data.nonceStr, // 必填，生成签名的随机串
    //             signature: data.data.signature,// 必填，签名，见附录1
    //             jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    //         });
    //         // 该函数见ajax.js
    //         setWechatShareConfig("","","","");
    //     }
    // });
});

// 把对象转换成字符串，并进行URI编码，用于url中的查询参数拼接
function encodeObj(obj){
	return encodeURI(JSON.stringify(obj));
}
// 获取url中的search，提取数据
function getQueryData(){
    var searchUrl = window.location.search.split("?")[1];
    if(searchUrl&&searchUrl.search("=")>0){
        searchUrl = searchUrl.split("=")[0];
    }
    var URI = decodeURI(searchUrl);
    var parseURI = URI;
    if(URI){
        try{
            parseURI = JSON.parse(URI);
        }
        catch(e){
            parseURI = "";
        }
    }
    return parseURI;
}





















