import store from '@/store'
import * as types from '@/store/mutation-types'
import { login } from '@/utils/business'
import { apis } from './api'

const setURL = (url, args) => {
  if (typeof url === 'undefined') { throw 'no url!' }
  if (!args) return url
  for (var i = 0; i < args.length; i++) {
    if (url.indexOf('{?}') < 0) { break }
    url = url.replace(/\{\?\}/, args[i] + '')
  }
  // 最后是否有/{?}
  if (url.lastIndexOf('/{?}') > -1) {
    url = url.substr(0, url.lastIndexOf('/{?}'))
  }
  return url
}

/**
 * option {
    isLoading: boolean true 菊花， false， 没有菊花（ 相当于无声请求）
    loadingText: 请稍等...
    url: '' //可以传apiurl中的key, 也可以传整个url
    param: 作为post数据传过去，json对象或者字符串, 如果是字符串那么可能是body形式传过去，
    requestParam: 接口名称中可能会有参数 []从数组中传过来,
    method: //默认POST,
    type: '默认x-www-form-urlencoded', 'json': 'application/json',
    token: 测试用的token
  }
  返回 Promise
 */
const post = (option) => {
  console.log(`${option.url}---请求参数`, option.param)
  let url = setURL(option.url, option.requestParam)
  let hasLoading = option.isLoading
  if (hasLoading) {
    wx.showLoading({
      title: option.loadingText ? option.loadingText : '处理中...',
      mask: true
    })
  }
  let data = option.param || {}
  let header = { 'content-type': 'application/x-www-form-urlencoded' }
  if (option.type === 'json') {
    header['content-type'] = 'application/json'
  }
  if (store.state.userInfo) {
    header.token = store.state.userInfo.token
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: data,
      method: option.method ? option.method : 'POST',
      header: header,
      success: (res) => {
        if (hasLoading) {
          wx.hideLoading()
        }
        if (res.statusCode == 200) {
          if (res.data.code == 0) {
            console.log(`${option.url}---res.data.code == 0`, res.data)
            store.commit(types.SET_THIRD_LOGIN, false)
            resolve(res.data)
          } else {
            console.log(`${option.url}---res.data.code != 0`, res)
            if (res.data.code == 430 || res.data.code == 410) {
              const reLogin = () => {
                store.commit(types.SET_THIRD_LOGIN, false)
                store.commit(types.SET_USER_INFO, null)
                let msg = res.data.code == 410 ? '请登录' : '登录过期，请重新登录'
                widget.alert(msg, () => {
                  let pages = getCurrentPages()
                  if (pages[pages.length - 1].route != 'pages/login') {
                    wx.navigateTo({
                      url: '/pages/login'
                    })
                  }
                })
              }
              if (res.data.code == 410) {
                reLogin()
                return
              }
              if (store.state.userInfo && store.state.userInfo.loginType == 0 && store.state.thirdLoginflag == false) {
                store.commit(types.SET_THIRD_LOGIN, true)
                login(false, apis.thirdPartyLogin, store.state.userInfo.phone, '', () => {
                  store.commit(types.SET_THIRD_LOGIN, true)
                  // 使用默默登陆后重新加载当前页面
                  let options = getCurrentPages()[getCurrentPages().length - 1].options
                  let str = '?'
                  for (let key in options) {
                    str += key + '=' + options[key]
                  }
                  wx.redirectTo({
                    url: '/' + getCurrentPages()[getCurrentPages().length - 1].route + str
                  })
                }, reLogin)
              } else if (store.state.userInfo && store.state.userInfo.loginType == 1) {
                reLogin()
                return
              }
            } else if (hasLoading) {
              store.commit(types.SET_THIRD_LOGIN, false)
              widget.toastWarn(res.data.message || '系统忙，请稍后再试')
            }
            reject(res)
          }
        } else {
          console.log(`${option.url}---res.statusCode != 200`)
          if (hasLoading) {
            wx.showToast({
              icon: 'loading',
              title: '网络异常'
            })
          }
          reject(res)
        }
      },
      fail: (res) => {
        console.log(`${option.url}---wx.request fail`)
        if (hasLoading) {
          wx.hideLoading()
          wx.showToast({
            icon: 'loading',
            title: '网络异常'
          })
        }
        reject(res)
      }
    })
  })
}

const get = (option) => {
  option.method = 'GET'
  return post(option)
}

export {
    post,
    get,
    apis
}