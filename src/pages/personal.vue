<template>
  <div>
    <section class="bgcolor-red color-white font-size12" style="height: 30vh">
        <div v-if="isLogin" class="height100 flex-column flex-align-justify">
            <open-data type="userAvatarUrl" class="user-avatar"></open-data>
            <open-data type="userNickName" class="margin-top20"></open-data>
        </div>
        <div v-else class="height100 flex-align-justify">
            <div class="icon-cat default-avatar"></div>
        </div>
    </section>
    <section v-if="!isLogin" class="the-mask">
        <div class="fixed bottom0 left0 right0 paddingX40 bgcolor-white" style="height: 20vh">
            <p class="padding20X text-align-center color-999">请先登录</p>
            <button open-type="getUserInfo" @getuserinfo="theGetUserInfo" class="width100 border-radius8 color-white" style="background-color: #32AE57">微信快捷登录</button>
        </div>
    </section>
  </div>
</template>

<script>
import { getUserInfo } from '@/utils/business'
export default {
    computed: {
        isLogin() {
            return this.$store.getters.isLogin
        }
    },
    methods: {
        theGetUserInfo() {
            getUserInfo()
        }
    }
}
</script>
<style scoped lang="scss">
.user-avatar {
    width: 160rpx;
    height:160rpx;
    border-radius: 50%;
    overflow: hidden;
    border: 2rpx solid #fff;
    box-shadow: 0 0 10rpx gray;
}
.default-avatar {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    font-size: 160rpx;
    border: 2rpx solid #fff;
}
</style>
