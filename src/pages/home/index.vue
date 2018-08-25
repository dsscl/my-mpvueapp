<template>
  <div class="home clear">
    <main class="fixed top0 width100" style="height: calc(100% - 45px)">
      <scroll-view scroll-y style="height: 100%;" @scrolltolower="loadMore">
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
        <film-list :ifList="ifList" :listData="listData" :isLoading="isLoading" :noMore="noMore"></film-list>
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
import filmList from '@/components/filmList'
import { resFilmData } from '@/utils/resData'
export default {
  components: {
    filmList
  },
  data: () => ({
    headerTab: 1,
    footerTab: 1,
    curCity: '',
    ifList: true,
    listData: [],
    isLoading: false,
    noMore: false
  }),
  async onLoad() {
    this.listData.push(...resFilmData)
    this.curCity = this.$root.$mp.query.city || '杭州'
  },
  methods: {
    // tab切换
    switchTab(type, val) {
      if(type === 'header') {
        this.headerTab = val
      } else {
        this.footerTab = val
      }
      this.ifList = false
      this.listData = [...resFilmData]
      this.noMore = false
      setTimeout(() => {
        this.ifList = true
      }, 100)
    },
    // 加载更多
    loadMore(e) {
      if(this.listData.length < 40) {
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false
          this.listData.push(...resFilmData)
        }, 2000)
      } else {
        this.noMore = true
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
}
</style>
