<template>
  <div class="home clear">
    <main class="fixed width100" style="height: calc(100% - 45px)">
    <scroll-view scroll-y style="height: 100%;" @scroll="scrollFn" @scrolltolower="loadMore">
      <header class="borderbottom1 flex-align-spacebetween" style="height: 40px">
        <a class="flex-align paddingX10" href="/pages/selectCity/main">
          {{curCity}}<i class="icon-uparrow rotate180 color-999"></i>
        </a>
        <div class="fontsize1 bold flex-align">
          <p :class="['headerTab', {'cur': headerTab===1}]" @tap="switchTab('header', 1)">热映</p>
          <p :class="['headerTab', {'cur': headerTab===2}]" @tap="switchTab('header', 2)">待映</p>
        </div>
        <a href="/pages/search/main" class="height100 paddingleft10 paddingright15 borderleft1 flex-align-justify">
          <i class="icon-search fontsize4 bold the-color-red"></i>
        </a>
      </header>
      <ul v-if="ifMain" class="paddingleft10">
        <li v-for="(item, index) in filmList" :key="index" class="width100 padding10X borderbottom1 flex">
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
            <div class="margintop5 color-999 lineEllipsis">今天{{item.cinema}}家影院放映{{item.field}}场</div>
          </div>
        </li>
        <li v-show="isLoading" class="paddingtop10 paddingbottom20 textAlignCenter color-999">加载中...</li>
        <li v-show="noData" class="paddingtop10 paddingbottom20 textAlignCenter color-999">没有更多啦~</li>
      </ul>
    </scroll-view>
    </main>
    <footer class="fixed bottom0 width100 padding5X bordertop1 bgcolor-white flex-align-spacebetween">
      <div :class="['width33', 'textAlignCenter', footerTab===1 ? 'the-color-red':'color-999']" @tap="switchTab('footer', 1)">
        <i class="icon-film fontsize5 bold"></i>
        <p class="fontsize-1 margintop5">电影</p>
      </div>
      <div :class="['width33', 'textAlignCenter', footerTab===2 ? 'the-color-red':'color-999']" @tap="switchTab('footer', 2)">
        <i class="icon-cinema fontsize5 bold"></i>
        <p class="fontsize-1 margintop5">影院</p>
      </div>
      <div :class="['width33', 'textAlignCenter', footerTab===3 ? 'the-color-red':'color-999']" @tap="switchTab('footer', 3)">
        <i class="icon-person fontsize5 bold"></i>
        <p class="fontsize-1 margintop5">我的</p>
      </div>
    </footer>
  </div>
</template>
<script>
import theposter from '@/assets/images/afilm.jpg'
const resData = [
  { poster: theposter, title: '蚁人2：黄蜂女现身', is3D: true, expect: '317304', score: '', type: '动作，冒险，科幻', actor: '保罗.路德，伊万杰琳.莉莉，迈克.乔丹', cinema: '117', field: '143' },
  { poster: theposter, title: '一出好戏', is3D: false, expect: '', score: '8.2', type: '剧情，喜剧', actor: '黄渤，舒淇，王宝强', isShow: true, cinema: '157', field: '1677' },
  { poster: theposter, title: '巨齿鲨', is3D: true, expect: '', score: '8.8', type: '冒险，科幻', actor: '杰森.斯坦森，李冰冰，雷恩.威尔森', isShow: true, cinema: '155', field: '1529' },
  { poster: theposter, title: '大师兄', is3D: false, expect: '94909', score: '', type: '喜剧，动作', actor: '甄子丹，陈乔恩，喻亢', isShow: false, cinema: '13', field: '13' },
  { poster: theposter, title: '快把我哥带走', is3D: false, expect: '', score: '', type: '喜剧，奇幻', actor: '张子枫，彭昱畅，赵今麦', isShow: false, cinema: '154', field: '1239' },
]
export default {
  data () {
    return {
      headerTab: 1,
      footerTab: 1,
      filmList: [],
      isLoading: false,
      noData: false,
      ifMain: true,
      curCity: ''
    }
  },
  async onLoad() {
    this.filmList.push(...resData)
    this.curCity = this.$root.$mp.query.city || '杭州'
  },
  methods: {
    switchTab(type, val) {
      if(type === 'header') {
        this.headerTab = val
      } else {
        this.footerTab = val
      }
      this.ifMain = false
      this.filmList = resData
      this.noData = false
      setTimeout(() => {
        this.ifMain = true
      }, 100)
    },
    scrollFn(e) {
      // console.log(e.mp.detail.scrollTop)
    },
    loadMore(e) {
      if(this.filmList.length < 40) {
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false
          this.filmList.push(...resData)
        }, 2000)
      } else {
        this.noData = true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$the-color-red: #f0423b;
.home {
  padding-bottom: 45px;
  .headerTab {
    margin: 0 10px;
    height: 15px;
    padding: 10px 5px;
    color: 999;
    border-bottom: 1px solid transparent;
    &.cur {
      color: $the-color-red;
      border-color: $the-color-red;
    }
  }
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
}
</style>
