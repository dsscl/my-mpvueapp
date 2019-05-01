import store from '@/store'
import * as types from '@/store/mutation_types'

const getUserInfo = () => {
    return new Promise((resolve, reject) => {
        wx.getUserInfo({
            success: res => {
                // 登录
                wx.cloud.callFunction({ name: 'login' })
                .then(res1 => {
                    wx.showToast({
                        title: '登录成功',
                        icon: 'success',
                        duration: 2000
                    })
                    store.commit(types.SET_OPEN_ID, res1.result.openid)
                    store.commit(types.SET_UNION_ID, res1.result.unionid)
                    store.commit(types.SET_USER_INFO, res.userInfo)
                    resolve()
                })
                .catch(err => {
                    console.error(err)
                    reject()
                })
            }
        })
    })
}

export {
    getUserInfo
}