<template>
  <div>
    <header class="fixed top0 width100 bgcolor-bg" style="height: 100rpx">
      <search :callbackUrl="'home'" :placeholder="'请输入片名'" @goSearch="goSearch"></search>
    </header>
    <main class="fixed width100 bgcolor-white" style="top: 100rpx;height: calc(100% - 100rpx)">
      <scroll-view scroll-y style="height: 100%;" @scrolltolower="loadMore">
        <film-list :mainList="mainList" :isLoading="isLoading" :noMore="noMore" :noData="noData"></film-list>
      </scroll-view>
    </main>
  </div>
</template>
<script>
import search from '@/components/search'
import filmList from '@/components/filmList'
export default {
  components: {
    search,
    filmList
  },
  data() {
    return {
      mainList: [],
      isLoading: false,
      noMore: false,
      noData: false
    }
  },
  onShow() {
    this.mainList = [],
    this.noData = false
  },
  methods: {
    // 执行搜索
    getList() {

    },
    goSearch(val) {
      // if(val) {
      //   let arr = []
      //   resFilmData.map((item) => {
      //     if(item.title.indexOf(val) !== -1) {
      //       arr.push(item)
      //     }
      //   })
      //   this.mainList = arr
      //   this.noData = true
      // } else {
      //   this.noData = false
      //   this.mainList = []
      // }
    },
    // 加载更多
    loadMore(e) {
      if(this.mainList.length < 10) {
        this.isLoading = true
        setTimeout(() => {
          // this.getList(false)
        }, 1000)
      } else {
        this.noMore = true
      }
    }
  }
}
</script>
