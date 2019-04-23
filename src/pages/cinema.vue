<template>
  <div class="paddingX40 flex-align" style="height: 100vh">
    <button type="warn" class="width100 border-radius16" @tap="jumpH5">云开发</button>
  </div>
</template>
<script>
export default {
  methods: {
    jumpH5() {
        this.$store.commit(this.$types.SET_WEB_VIEW_URL, 'https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html')
        this.$router.push({
            path: 'web_view',
            query: {
                title: '云开发'
            }
        })
    }
  }
}
</script>
