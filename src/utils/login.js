import { post, apis } from '@/request'
import store from '@/store'
import * as types from '@/store/mutation-types'

const wxError = '微信内部异常'

/**
 * 检查登录态是否过期。
 */
const checkSession = (isLoading) => {
  return new Promise((resolve, reject) => {
    wx.checkSession({
      success: () => { // session_key 未过期，并且在本生命周期一直有效
        if (store.state.openId && store.state.sessionKey) {
          initMtaUserInfo()
          resolve()
        } else {
          wxLogin(isLoading).then(() => {
            resolve()
          }, () => {
            reject(wxError)
          })
        }
      },
      fail: () => { // session_key 已经失效，需要重新执行登录流程
        store.commit(types.SET_USER_INFO, null)
        wxLogin(isLoading).then(() => {
          resolve()
        }, () => {
          reject(wxError)
        })
      }
    })
  })
}

/**
  * 调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户的唯一标识（openid）及本次登录的会话密钥（session_key）等
*/
const wxLogin = (isLoading) => {
  return new Promise((resolve, reject) => {
    wx.login({
      success: res => {
        if (res.code) {
          post({
            isLoading: isLoading,
            url: apis.jscodeToSession,
            param: {
                code: res.code,
                type: 2
            }
          }).then(res => {
            store.commit(types.SET_OPEN_ID, res.data.openid)
            store.commit(types.SET_SESSION_KEY, res.data.sessionKey)
            store.commit(types.SET_UNION_ID, res.data.unionid)
            initMtaUserInfo()
            resolve()
          }, () => {
            reject(wxError)
          })
        }
      },
      fail: () => {
        reject(wxError)
      }
    })
  })
}

/**
 * 登录
 */
const login = (isLoading, url, phone, msgCode, success, fail) => {
  if (!store.state.openId || !store.state.unionId) {
    if (fail) {
      fail()
    }
    return
  }
  post({
    isLoading: isLoading,
    url: url,
    param: {
      phone: phone,
      msgCode: msgCode,
      thirdPartyType: 1,
      unionId: store.state.unionId,
      openId: store.state.openId,
      appId: store.state.publicAppId || 'WechatApp'
    }
  }).then(res => {
    store.commit(types.SET_USER_INFO, res.data)
    initMtaUserInfo()
    if (success) {
      success()
    }
  }, () => {
    if (fail) {
      fail()
    }
  })
}

export {
  checkSession,
  wxLogin,
  login,
}
