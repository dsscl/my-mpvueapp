<template>
  <div>
    <ul v-if="ifList" class="paddingleft10">
      <li v-for="(item, index) in listData" :key="index" class="width100 padding10X borderbottom1 flex" @tap="clickItem(item)">
        <div class="posterSize itemflex-00auto relative">
          <img :src="item.poster" class="posterSize"/>
          <i class="icon-video fontsize6 color-white absolute translateXY"></i>
        </div>
        <div class="marginleft10 width100 paddingright10">
          <div class="flex-align-spacebetween">
            <p class="flex-align" style="width: 65%">
              <span class="color-333 fontsize2 lineEllipsis">{{item.title}}</span>
              <span v-if="item.is3D" class="marginleft5 icon-3DIMAX itemflex-00auto"></span>
            </p>
            <p class="paddingleft5 itemflex-00auto the-color-yellow" style="max-width: 35%">
              <span v-if="item.expect">{{item.expect}}<span class="fontsize-4">人想看</span></span>
              <span v-else-if="item.score">{{item.score}}<span class="fontsize-4">分</span></span>
              <span v-else class="fontsize-2 color-999">暂无评分</span>
            </p>
          </div>
          <div class="margintop5 color-666 lineEllipsis">{{item.type}}</div>
          <div class="color-666 flex-align-spacebetween">
            <p class="lineEllipsis" style="width: 83%">{{item.actor}}</p>
            <p>
              <button v-if="item.isShow" class="btn-red">购票</button>
              <button v-else class="btn-blue">预售</button>
            </p>
          </div>
          <div class="color-999 lineEllipsis">今天{{item.cinema}}家影院放映{{item.field}}场</div>
        </div>
      </li>
      <li v-show="isLoading" class="paddingtop10 paddingbottom20 textAlignCenter color-999">加载中<i class="icon-loading"></i></li>
      <li v-show="noMore" class="paddingtop10 paddingbottom20 textAlignCenter color-999">没有更多啦~</li>
      <li v-show="noData && listData.length===0" class="paddingtop10 paddingbottom20 textAlignCenter color-999">暂无数据</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    clickItem(obj) {
      wx.navigateTo({
        url: '/pages/filmDetail/main?data=' + JSON.stringify(obj),
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
