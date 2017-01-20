var retCodes = {
    success : "0",
    nonLogin : "10000",
    expired: "10004",
    beReplaced: "10016"
}

export const server_url = 'http://tongzhuang.moovi-tech.com'

const LOGIN_ERROR = "LOGIN_ERROR_0"

var hasNonLoginError = false

export const Factory_ = (server_url) => (method) => (url, config_) => (params) => {
    //console.dir(JSON.stringify(params))
    var ajaxMethod

    if (method == 'GET') {
        ajaxMethod = $.get
    } else {
        ajaxMethod = $.post
    }

    var config = config_ ? config_ : {}

    config.url = server_url + url
    config.data = params

    return Promise.resolve(ajaxMethod(config)).then((res) => {
        if (res.state == retCodes.success) {
            hasNonLoginError = false
            return Promise.resolve(res.order)
        } else if (res.state == retCodes.nonLogin ||
            res.state == retCodes.expired ||
            res.state == retCodes.beReplaced){

            var e = new Error(LOGIN_ERROR)
            e.detail__ = res.detail
            return Promise.reject(e)
        } else {
            return Promise.reject(new Error(res.detail))
        }
    }).catch((e) => {
        // if (e.message == LOGIN_ERROR) {
        //     if (!hasNonLoginError) {
        //         hasNonLoginError = true
        //     } else {
        //         return
        //     }
        //     alert(e.detail__)
        //     router.push({name: 'login'})
        //     return Promise.reject(new Error(""))
        // }
        return Promise.reject(e)
    })
}

export const Factory = Factory_(server_url)

export const postFactory = Factory('POST')
export const getFactory = Factory('GET')
