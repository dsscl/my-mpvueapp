<template>
  <div>
    <li v-if="nodata" class="padding-top20 padding-bottom40 text-align-center color-999">暂无数据</li>
    <ul class="padding-left20">
      <li v-for="(item, index) in mainList" :key="index" class="width100 padding20X border-bottom1 flex" @tap="clickItem(item)">
        <div class="posterSize itemflex-00auto relative">
          <image :src="item.poster" class="posterSize" :lazy-load="true"></image>
          <i class="icon-video font-size12 color-white absolute translateXY"></i>
        </div>
        <div class="width100 paddingX20">
          <div class="flex-align-spacebetween">
            <p class="flex-align" style="width: 65%">
              <span class="color-333 font-size4 line-ellipsis">{{item.title}}</span>
              <span v-if="item.is3D" class="margin-left10 icon-3DIMAX itemflex-00auto"></span>
            </p>
            <p class="padding-left10 itemflex-00auto color-yellow" style="max-width: 35%">
              <span v-if="item.expect">{{item.expect}}<span class="font-size-8">人想看</span></span>
              <span v-else-if="item.score">{{item.score}}<span class="font-size-8">分</span></span>
              <span v-else class="font-size-4 color-999">暂无评分</span>
            </p>
          </div>
          <div class="margin-top10 color-666 line-ellipsis">{{item.type}}</div>
          <div class="width100 color-666 flex-align-spacebetween">
            <p class="line-limited1 width75">{{item.actor}}</p>
            <button v-if="item.isShow" class="itemflex-00auto btn-red marginX0">购票</button>
            <button v-else class="itemflex-00auto btn-blue marginX0">预售</button>
          </div>
          <div class="color-999 line-ellipsis">今天{{item.cinema}}家影院放映{{item.field}}场</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    clickItem(obj) {
      this.$router.push({
        path: 'film_detail',
        query: {
          film: encodeURIComponent(JSON.stringify(obj))
        }
      })
    }
  },
  props: {
    mainList: {
      type: Array,
      default: [],
      required: true
    },
    nodata: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="scss" scoped>
  .icon-3DIMAX {
    height: 40rpx;
    line-height: 40rpx;
    font-size: 64rpx;
    color: #78abca;
  }
  .posterSize {
    width: 140rpx;
    height: 190rpx;
  }
</style>
