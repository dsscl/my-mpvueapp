<template>
  <div class="paddingbottom50">
    <main>
      <section class="introWrap borderbottom1">
        <div class="flex-align">
          <div class="posterSize itemflex-00auto relative">
            <i class="icon-video fontsize6 color-666 absolute translateXY"></i>
          </div>
          <div class="marginleft10 width100 paddingright10">
            <div class="flex-align-spacebetween">
              <p class="flex-align" style="width: 65%">
                <span class="fontsize2 lineEllipsis">{{item.title}}</span>
                <span v-if="item.is3D" class="marginleft5 icon-3DIMAX itemflex-00auto"></span>
              </p>
              <p class="paddingleft5 itemflex-00auto the-color-yellow" style="max-width: 35%">
                <span v-if="item.expect">{{item.expect}}<span class="fontsize-4">人想看</span></span>
                <span v-else-if="item.score">{{item.score}}<span class="fontsize-4">分</span></span>
                <span v-else class="fontsize-2 color-666">暂无评分</span>
              </p>
            </div>
            <div class="margintop5 color-999 lineEllipsis">{{item.type}}</div>
            <div class="color-999 flex-align-spacebetween">
              <p class="lineEllipsis" style="width: 80%">{{item.actor}}</p>
              <p>
                <button v-if="item.isShow" class="btn-red">购票</button>
                <button v-else class="btn-blue">预售</button>
              </p>
            </div>
            <div class="color-999 lineEllipsis">今天{{item.cinema}}家影院放映{{item.field}}场</div>
          </div>
        </div>
        <div class="margintop10 flex-align-spacebetween">
          <p class="operateBtn flex-align-justify">
            <i class="marginright5 icon-like-fill"></i>想看
          </p>
          <p class="operateBtn flex-align-justify">
            <i class="marginright5 icon-star fontsize4"></i>评分
          </p>
        </div>
      </section>
      <div class="bgcolor-white padding10X paddingX15 flex-align color-black borderbottom1">
        <i class="marginright5 icon-egg the-color-blue fontsize2"></i>片尾有三个彩蛋，不要错过哦~
      </div>
    </main>
    <footer class="fixed bottom0 width100 the-bgcolor-red padding15X textAlignCenter color-white fontsize2">优惠购票</footer>
  </div>
</template>
<script>
export default {
  data: () => ({
    item: {}
  }),
  async onShow() {
    this.item = JSON.parse(this.$root.$mp.query.data)
  },
  methods: {
  },
}
</script>
<style lang="scss" scoped>
.introWrap {
  padding: 10px 15px;
  background-color: #343434;
  color: #fff;
  .posterSize {
    width: 80px;
    height: 105px;
    border: 1px solid #666;
  }
  .icon-3DIMAX {
    color: #fff;
    font-size: 30px;
  }
  .operateBtn {
    width: 48%;
    line-height: 20px;
    padding: 5px 0;
    background-color: #646464;
    border: 1px solid #666666;
    border-radius: 4px;
    [class *= 'icon-'] {
      color: #bebebe;
    }
  }
}
</style>
