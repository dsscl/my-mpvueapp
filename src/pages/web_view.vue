<template>
  <div>
    <web-view :src="url"></web-view>
</div>
</template>
<script>
export default {
  data () {
    return {
      url: ''
    }
  },
  onLoad () {
    let title = this.$root.$mp.query.title
    wx.setNavigationBarTitle({
      title: title
    })
    this.url = this.$store.state.webViewUrl
  }
}
</script>
