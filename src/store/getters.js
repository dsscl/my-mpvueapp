// getter可充当计算属性
export default {
    isLogin: state => {
        return state.userInfo && !!state.openId
    }
  }
  