<script>
export default {
  onLaunch () {
    // 获取openId
    wx.cloud.callFunction({ name: 'login' }).then(res => {
      this.$store.commit(this.$types.SET_OPEN_ID, res.result.openid)
    }).catch(err => console.error(err))

    this.WXP.getSetting().then(res => {
      if (res.authSetting['scope.userInfo']) {
        wx.getUserInfo({
          success: res => {
            this.$store.commit(this.$types.SET_USER_INFO, res.userInfo)
          }
        })
      }
    })
  }
}
</script>
