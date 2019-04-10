<template>
  <div>
    <ul v-if="ifList" class="padding-left10">
      <li v-for="(item, index) in listData" :key="index" class="width100 padding10X border-bottom1 flex" @tap="clickItem(item)">
        <div class="posterSize itemflex-00auto relative">
          <img :src="item.poster" class="posterSize"/>
          <i class="icon-video font-size6 color-white absolute translateXY"></i>
        </div>
        <div class="margin-left10 width100 padding-right10">
          <div class="flex-align-spacebetween">
            <p class="flex-align" style="width: 65%">
              <span class="color-333 font-size2 line-ellipsis">{{item.title}}</span>
              <span v-if="item.is3D" class="margin-left5 icon-3DIMAX itemflex-00auto"></span>
            </p>
            <p class="padding-left5 itemflex-00auto color-yellow" style="max-width: 35%">
              <span v-if="item.expect">{{item.expect}}<span class="font-size-4">人想看</span></span>
              <span v-else-if="item.score">{{item.score}}<span class="font-size-4">分</span></span>
              <span v-else class="font-size-2 color-999">暂无评分</span>
            </p>
          </div>
          <div class="margin-top5 color-666 line-ellipsis">{{item.type}}</div>
          <div class="color-666 flex-align-spacebetween">
            <p class="line-ellipsis" style="width: 83%">{{item.actor}}</p>
            <p>
              <button v-if="item.isShow" class="btn-red">购票</button>
              <button v-else class="btn-blue">预售</button>
            </p>
          </div>
          <div class="color-999 line-ellipsis">今天{{item.cinema}}家影院放映{{item.field}}场</div>
        </div>
      </li>
      <li v-show="isLoading" class="padding-top10 padding-bottom20 text-align-center color-999">加载中<i class="icon-loading"></i></li>
      <li v-show="noMore" class="padding-top10 padding-bottom20 text-align-center color-999">没有更多啦~</li>
      <li v-show="noData && listData.length===0" class="padding-top10 padding-bottom20 text-align-center color-999">暂无数据</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    clickItem(obj) {
      // wx.navigateTo({
      //   url: '/pages/filmDetail/main?data=' + JSON.stringify(obj),
      // })
      this.$router.push({
        path: 'filmDetail',
        query: {
          film: JSON.stringify(obj)
        }
      })
    }
  },
  props: {
    ifList: {
      type: Boolean,
      default: true
    },
    listData: {
      type: Array,
      default: [],
      required: true
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    noMore: {
      type: Boolean,
      default: false
    },
    noData: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="scss" scoped>
  .icon-3DIMAX {
    height: 20px;
    line-height: 20px;
    font-size: 32px;
    color: #78abca;
  }
  .posterSize {
    width: 70px;
    height: 95px;
  }
</style>
