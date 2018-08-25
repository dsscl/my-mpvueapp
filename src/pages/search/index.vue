<template>
  <div class="ts-bgcolor-bg">
    <header class="fixed top0 width100" style="height: 40px">
      <search :callbackUrl="'/pages/home/main'" :placeholder="'请输入片名'" @goSearch="goSearch"></search>
    </header>
    <main class="fixed width100 ts-bgcolor-white" style="top: 50px;height: calc(100% - 50px)">
      <scroll-view scroll-y style="height: 100%;" @scrolltolower="loadMore">
        <film-list :listData="listData" :isLoading="isLoading" :noMore="noMore" :noData="noData"></film-list>
      </scroll-view>
    </main>
  </div>
</template>

<script>
import search from '@/components/search'
import filmList from '@/components/filmList'
import { resFilmData } from '@/utils/resData'
export default {
  components: {
    search,
    filmList
  },
  data: () => ({
    listData: [],
    isLoading: false,
    noMore: false,
    noData: false
  }),
  methods: {
    // 执行搜索
    goSearch(val) {
      if(val) {
        let arr = []
        resFilmData.map((item) => {
          if(item.title.indexOf(val) !== -1) {
            arr.push(item)
          }
        })
        this.listData = arr
        this.noData = true
      } else {
        this.noData = false
        this.listData = []
      }
    },
    // 加载更多
    loadMore(e) {
      if(this.listData.length < 10) {
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

<style>
</style>
