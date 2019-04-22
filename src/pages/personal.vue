<template>
  <div>
    <section class="bgcolor-red color-white font-size6" style="height: 30vh">
        <div v-if="isLogin" class="height100 flex-column flex-align-justify">
            <open-data type="userAvatarUrl" class="user-avatar"></open-data>
            <open-data type="userNickName" class="margin-top10"></open-data>
        </div>
        <div v-else class="height100 flex-align-justify">
            <div class="icon-cat default-avatar"></div>
        </div>
    </section>
    <section v-if="!isLogin" class="the-mask">
        <div class="fixed bottom0 left0 right0 paddingX20 bgcolor-white" style="height: 20vh">
            <p class="padding10X text-align-center color-999">请先登录</p>
            <button open-type="getUserInfo" @getuserinfo="getUserInfo" class="width100 border-radius8 color-white" style="background-color: #32AE57">微信快捷登录</button>
        </div>
    </section>
  </div>
</template>

<script>
export default {
    computed: {
        isLogin() {
            return this.$store.getters.isLogin
        }
    },
    methods: {
        getUserInfo (e) {
            wx.getUserInfo({
                success: res => {
                    // 登录
                    wx.cloud.callFunction({ name: 'login' })
                    .then(res1 => {
                        console.log('登录云函数返回值------', res1)
                        this.$store.commit(this.$types.SET_OPEN_ID, res1.result.openid)
                        this.$store.commit(this.$types.SET_USER_INFO, res.userInfo)
                    })
                    .catch(err => console.error(err))
                }
            })
        }
    }
}
</script>
<style scoped lang="scss">
.user-avatar {
    width: 80px;
    height:80px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #fff;
    box-shadow: 0 0 10rpx gray;
}
.default-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    font-size: 80px;
    border: 1px solid #fff;
}
</style>
