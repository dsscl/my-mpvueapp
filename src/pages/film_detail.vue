<template>
  <div class="padding-bottom100">
    <main>
      <section class="introWrap border-bottom1">
        <div class="flex-align">
          <div class="posterSize itemflex-00auto relative" style="border: 2rpx solid #666;">
            <image v-if="item.poster" :src="item.poster" class="posterSize"></image>
            <i v-else class="icon-video font-size12 color-666 absolute translateXY"></i>
          </div>
          <div class="paddingX20 width100">
            <div class="flex-align-spacebetween">
              <p class="flex-align" style="width: 65%">
                <span class="font-size4 line-ellipsis">{{item.title}}</span>
                <span v-if="item.is3D" class="margin-left10 icon-3DIMAX itemflex-00auto"></span>
              </p>
              <p class="padding-left10 itemflex-00auto color-yellow" style="max-width: 35%">
                <span v-if="item.expect">{{item.expect}}<span class="font-size-8">人想看</span></span>
                <span v-else-if="item.score">{{item.score}}<span class="font-size-8">分</span></span>
                <span v-else class="font-size-4 color-666">暂无评分</span>
              </p>
            </div>
            <div class="margin-top10 color-999 line-ellipsis">{{item.type}}</div>
            <div class="color-999 flex-align-spacebetween">
              <p class="line-ellipsis" style="width: 80%">{{item.actor}}</p>
              <p>
                <button v-if="item.isShow" class="btn-red">购票</button>
                <button v-else class="btn-blue">预售</button>
              </p>
            </div>
            <div class="color-999 line-ellipsis">今天{{item.cinema}}家影院放映{{item.field}}场</div>
          </div>
        </div>
        <div class="margin-top20 flex-align-spacebetween">
          <p class="operateBtn flex-align-justify">
            <i class="margin-right10 icon-like-fill"></i>想看
          </p>
          <p class="operateBtn flex-align-justify">
            <i class="margin-right10 icon-star font-size8"></i>评分
          </p>
        </div>
      </section>
      <div class="bgcolor-white padding20X paddingX30 flex-align color-black border-bottom1">
        <i class="margin-right10 icon-egg color-blue font-size4"></i>片尾有三个彩蛋，不要错过哦~
      </div>
    </main>
    <footer class="fixed bottom0 width100 bgcolor-red padding30X text-align-center color-white font-size4">优惠购票</footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: {}
    }
  },
  onLoad() {
    this.item = JSON.parse(decodeURIComponent(this.$route.query.film))
  },
}
</script>
<style lang="scss" scoped>
.introWrap {
  padding: 20rpx 30rpx;
  background-color: #343434;
  color: #fff;
  .posterSize {
    width: 160rpx;
    height: 210rpx;
  }
  .icon-3DIMAX {
    color: #fff;
    font-size: 60rpx;
  }
  .operateBtn {
    width: 48%;
    line-height: 40rpx;
    padding: 10rpx 0;
    background-color: #646464;
    border: 2rpx solid #666666;
    border-radius: 8rpx;
    [class *= 'icon-'] {
      color: #bebebe;
    }
  }
}
</style>
