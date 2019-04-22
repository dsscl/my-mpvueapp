// store为实例化生成的
const state = {
    appId: 'wx01d071fbf6dac44c', // 应用的唯一标识
    openId: null, // 同一用户，打开微信开放平台下的某一个应用的唯一标识（同一个用户打开相互关联的公众号和小程序，openId不同）
    unionId: null, // 同一用户，对同一个微信开放平台下的不同应用，unionid是相同的（同一个用户打开相互关联的公众号和小程序，unionId相同）
    userInfo: null, // 微信开放数据的用户信息
    city: '杭州', // 城市
    webViewUrl: null
}

export default state