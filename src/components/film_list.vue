<template>
  <div>
    <li v-if="nodata" class="padding-top10 padding-bottom20 text-align-center color-999">暂无数据</li>
    <ul class="padding-left10">
      <li v-for="(item, index) in mainList" :key="index" class="width100 padding10X border-bottom1 flex" @tap="clickItem(item)">
        <div class="posterSize itemflex-00auto relative">
          <image :src="item.poster" class="posterSize" :lazy-load="true"></image>
          <i class="icon-video font-size6 color-white absolute translateXY"></i>
        </div>
        <div class="width100 paddingX10">
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
          <div class="width100 color-666 flex-align-spacebetween">
            <p class="line-ellipsis" style="width: 70%">{{item.actor}}</p>
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
          film: JSON.stringify(obj)
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
