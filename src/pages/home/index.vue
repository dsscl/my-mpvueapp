<template>
  <div class="home clear">
    <main class="fixed top0 width100" style="height: calc(100% - 45px)">
      <scroll-view scroll-y style="height: 100%;" @scrolltolower="loadMore">
        <header class="border-bottom1 flex-align-spacebetween" style="height: 40px">
          <a class="flex-align paddingX10" @tap="$router.push('selectCity')">
            {{curCity}}<i class="icon-uparrow rotate180 color-999"></i>
          </a>
          <div class="font-size1 bold flex-align">
            <p :class="['headerTab', {'cur': headerTab===1}]" @tap="switchTab('header', 1)">热映</p>
            <p :class="['headerTab', {'cur': headerTab===2}]" @tap="switchTab('header', 2)">待映</p>
          </div>
          <a class="height100 padding-left10 padding-right15 borderleft1 flex-align-justify" @tap="$router.push('search')">
            <i class="icon-search font-size4 bold color-red"></i>
          </a>
        </header>
        <film-list :ifList="ifList" :listData="listData" :isLoading="isLoading" :noMore="noMore"></film-list>
      </scroll-view>
    </main>
    <footer class="fixed bottom0 width100 padding5X bordertop1 bgcolor-white flex-align-spacebetween">
      <div :class="['width33', 'text-align-center', footerTab===1 ? 'color-red':'color-999']" @tap="switchTab('footer', 1)">
        <i class="icon-film font-size5 bold"></i>
        <p class="font-size-1 margin-top5">电影</p>
      </div>
      <div :class="['width33', 'text-align-center', footerTab===2 ? 'color-red':'color-999']" @tap="switchTab('footer', 2)">
        <i class="icon-cinema font-size5 bold"></i>
        <p class="font-size-1 margin-top5">影院</p>
      </div>
      <div :class="['width33', 'text-align-center', footerTab===3 ? 'color-red':'color-999']" @tap="switchTab('footer', 3)">
        <i class="icon-person font-size5 bold"></i>
        <p class="font-size-1 margin-top5">我的</p>
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
    this.curCity = this.$route.query.city || '杭州'
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
        }, 1000)
      } else {
        this.noMore = true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$color-red: #f0423b;
.home {
  padding-bottom: 45px;
  .headerTab {
    margin: 0 10px;
    height: 15px;
    padding: 10px 5px;
    color: 999;
    border-bottom: 1px solid transparent;
    &.cur {
      color: $color-red;
      border-color: $color-red;
    }
  }
}
</style>
